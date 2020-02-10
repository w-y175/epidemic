import React, {useState, useEffect} from 'react'
import {getHospitalProvince} from '../services/index'

interface ProType {
    provinceName: string
    citys: any[],
    cityCnt: number
}

const Hospital = ()=>{
    // 定义全国医院数据
    let [provinces, setProvinces] = useState<ProType[]>([]);

    // 获取全国医院数据
    useEffect(()=>{
        getHospitalProvince().then((res:any)=>{
        res = res.data;
        if(res.code == 0){
            setProvinces(res.args.rsp.provinces);
        }
        })
    }, []);
    
    return <>
    
    </>
}


export default Hospital
