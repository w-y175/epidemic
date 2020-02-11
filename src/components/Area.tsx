import React, {useState, useEffect} from 'react'
import {AreaType} from '../utils/types'
import './Area.module.scss'

const Area = (props: {areaTree:AreaType []})=>{
    let data = props.areaTree. length?props.areaTree[0]. children as AreaType[]:[]
    // console.log('area...111111', data);
    const unfold = (index: number) => {
        
    }
    return <>
        <div className="up-tips up-gnbl">
            国内病例
            <span className="tips">
                （7:00-10:00为更新高峰，数据如有滞后请谅解）
            </span>
        </div>
        <div className="clearfix placeItem nav" id="placeNav">
            <h2 className="blue">地区</h2>
            <div className="blue">新增确诊</div>
            <div>累计确诊</div>
            <div>治愈</div>
            <div>死亡</div>
        </div>
        <div className="placeItemWrap">
            {
                // News areaTree={ areaTree. length?areaTree[0]. children as AreaType[]:[]}/>
                data.map((ite,ind) => {
                    return <div className="placeItemWrap" key={ind}>
                        <div className="clearfix placeItem placeArea" key={ind} onClick = {() => unfold(ind)}>
                            <h2 className="blue">{ite.name}</h2>
                            <div className="add ac_add blue">{ite.today.suspect}</div>
                            <div className="confirm">{ite.today.confirm}</div>
                            <div className="heal">{ite.today.heal}</div>
                            <div className="dead">{ite.today.dead}</div>
                        </div>
                        <div>
                            {/* {
                                (ite.children as AreaType[]).map((val,ide)=>{
                                    return <div key={ide}>
                                        <p>{val.name}</p>
                                    </div>
                                })
                            } */}
                        </div>
                    </div>
                })

            }
             
        </div>
        <div className="up-tips up-gnbl">
            海外国家
            <span className="tip">
                确诊  例，死亡  例
            </span>
        </div>
        <div className="clearfix placeItem nav" id="placeNav">
            <h2 className="blue">地区</h2>
            <div className="blue">确诊</div>
            <div>治愈</div>
            <div>死亡</div>
        </div>
        <div>

        </div>
            {
                props.areaTree&&props.areaTree.map((item,index)=>{
                    return <div className="clearfix placeItem placeArea no-sharp abroad" key={index}>                      
                        <h2 className="blue">{item.name}</h2>
                        <div className="confirm">{item.total.confirm}</div>
                        <div className="heal">{item.total.heal}</div>
                        <div className="dead">{item.total.dead}</div>
                    </div>
                })
            }
              
    </>
}


export default Area
