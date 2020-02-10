import React, {useState, useEffect} from 'react'
import {getTruth} from '../services/index'
import styles from './Truth.module.scss'
interface TruthType {
    
}

const Hospital = ()=>{
    // 定义全国医院数据
    // let [truth, setTruth] = useState([]);

    // 获取全国医院数据
    useEffect(()=>{
        getTruth().then((res:any)=>{
            console.log(res,'ress');
            
        res = res.data;
        })
    }, []);
    
    return <>
        <h3>辟谣信息</h3>
    </>
}


export default Hospital
