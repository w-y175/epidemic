import React, { useState, useEffect } from 'react'
import { getTruth } from '../services/index'
import style from './Truth.module.scss'

interface ProType {
    title: string,
    abstract: string
}

const Truth = () => {
    // 定义数据
    let [truth, setTruth] = useState([]);

    // 获取辟谣数据
    useEffect(() => {
        getTruth().then((res: any) => {

            res = res.content
        })
    }, []);

    return <>
        <div id={style.rumor}>
            <div className={style.sectionTitle}>

                辟谣信息
      </div>
            <div className={style.rumor_more}>
            </div>
            <div>

            </div>
        </div>



    </>
}


export default Truth
