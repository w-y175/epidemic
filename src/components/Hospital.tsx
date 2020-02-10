import React, {useState, useEffect} from 'react'
import {getHospitalProvince,getHospitalCityByProvince} from '../services/index'
import styles from './Hospital.module.scss'

interface ProType {
    provinceName: string
    citys: any[],
    cityCnt: number,
    active?: boolean
}

const Hospital = ()=>{
    // 定义全国城市数据
    let [provinces, setProvinces] = useState<ProType[]>([]);
    // 定义省城市医院数据
    // let [cityProvinces, setCityProvinces] = useState<ProType[]>([]);

    
    useEffect(()=>{
        // 获取全国城市数据
        getHospitalProvince().then((res:any)=>{
        res = res.data;
        if(res.code === 0){
            setProvinces(res.args.rsp.provinces);
        }
        })
        
    }, []);
    console.log(provinces,'provinces');
    
    const expandProvince = (index: number,item:any)=>{
        let newProvinces = [...provinces];
        newProvinces[index].active = !provinces[index].active;
        setProvinces(newProvinces);
        //获取省城市医院数据
        getHospitalCityByProvince({item}).then(res=>{
            console.log(res,'res,');
        })
    }

    return <>
        <div className={styles.sectionTitle}>医疗救治医院查询
          <div className={styles.healthIcon}></div>
        </div>
        <div className={styles.hospital}>{
            provinces.map((item, index)=>{
                return <div className={styles.hotelItemWrap} key={index} onClick={()=>expandProvince(index,item)}>
                <div className={styles.hotelProvince}>
                    <div className={styles.name}>{item.provinceName}</div>
                    <div className={item.active?styles.activeCount:styles.count}></div>
                </div>
             </div>
            })
        }</div>
    </>
}


export default Hospital
