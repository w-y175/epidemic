import React, {useState, useEffect} from 'react'
import {getTrace} from '../services/index'
import styles from  './Trace.module.scss'
interface TraceType{
    time: string,
    create_time: string,
    source: string,
    desc: string,
    title: string
}

const Hospital = ()=>{
    // 定义全国医院数据
    let [trace, setTrace] = useState<TraceType[]>([]);
    let newTrace = trace.splice(0,10);
    // 获取全国医院数据
    useEffect(()=>{
        getTrace().then((res:any)=>{
            let data = JSON.parse(res.data) as TraceType[];
            data.sort((a,b)=>{
                if(a.time>b.time){
                    return -1;
                }else{
                    return 1
                }
            })
            setTrace(data)
        })
    }, []);
    return <>
        <div className={styles.news}>
        <div className={styles.titleWarp}>
          <div className={styles.sectionTitle}>最新进展<div className="hotzhuizhong">
          <div className={styles.hotzhuizhong}>
                    <div>
                        <span className={styles.timelineMore}></span>
                    </div>
                </div>
            </div>
            <div className={styles.timeLine}></div>
          </div>
          {
                newTrace.map((item,index)=>{
                    return <div className={styles.singleNew} key={index}>
                                <div className={styles.timeIcon}></div>                   
                                <div className={styles.times} >
                                    {/* 时间 */}
                                    <span className={styles.pass}>{item.time}</span>
                                    <div className={styles.newest}></div>
                                </div>                                  
                                    <div className={styles.newsBox}>
                                        {/* 标题 */}
                                        <div className={styles.title}>{item.title}</div>
                                        {/* 内容 */}
                                        <div className={styles.desc}>{item.desc}</div>
                                        {/* 来源 */}
                                        <div className={styles.source}>{item.source}</div>
                                    </div>                 
                            </div>
                })
            } 

        </div>
        </div>
    </>
}


export default Hospital
