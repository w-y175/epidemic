import React, { useState, useEffect } from 'react'
import { TotalType } from '../utils/types'
import styles from './Header.module.scss'
const Header = (props: { total: TotalType }) => {
    console.log('total...', props.total)
    return <>
        <div className={styles.charts}>
            <div className={styles.head}>
                <div className={styles.jump}></div>
                <div className={styles.jump_zhuizong}></div>
                <div className={styles.bottom}>
                    数据来源：国家及各地卫健委每日信息发布
                        <p className={styles.qs}></p>
                </div>
            </div>
            {
                props.total && <div className={styles.topdataWrap}>
                    <div className={styles.timeNum}>
                        <div className={styles.bottom}>
                            <p className={styles.d}>统计截至
                                <span>{props.total.lastUpdateTime}</span>
                                <em>更新于
                                    <span>12分钟</span>前
                                </em>
                            </p>
                        </div>
                    </div>
                    <div className={styles.recentNumber}>
                        <div className={styles.icbar}>
                            <div className={styles.confirm}>
                                <div className={styles.add}>
                                    较上日
                                        <span>+{props.total.chinaAdd.confirm}</span>
                                </div>
                                <div className={styles.number}>{props.total.chinaTotal.confirm}</div>
                                <div className={styles.text}>全国确诊</div>
                            </div>

                            <div className={styles.suspect}>
                                <div className={styles.add}>
                                    较上日
                                        <span>+{props.total.chinaAdd.suspect}</span>
                                </div>
                                <div className={styles.number}>{props.total.chinaTotal.suspect}</div>
                                <div className={styles.text}>疑似病例</div>
                            </div>

                            <div className={styles.cure}>
                                <div className={styles.add}>
                                    较上日
                                    <span>+{props.total.chinaAdd.heal}</span>
                                </div>
                                <div className={styles.number}>{props.total.chinaTotal.heal}</div>
                                <div className={styles.text}>治愈人数</div>
                            </div>

                            <div className={styles.dead}>
                                <div className={styles.add}>
                                    较上日
                                        <span>+{props.total.chinaAdd.dead}</span>
                                </div>
                                <div className={styles.number}>{props.total.chinaTotal.dead}</div>
                                <div className={styles.text}>死亡人数</div>
                            </div>
                        </div>
                    </div>
                </div>

            }
          
        </div>
    </>
}


export default Header

