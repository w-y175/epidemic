import React from 'react';
import './App.css';
// 引入模块
import Tip from '../components/Tip'
import Trace from '../components/Trace'
import Truth from '../components/Truth'
import Hospital from '../components/Hospital';

const App = () => {

  return (
    <div className="App">
      <Truth />   {/* 辟谣信息 */}
      
      <Trace />   {/* 最新进展 */}
      
      <Hospital/>   {/* 医疗救治医院查询 */}

      <Tip />     {/*新型肺炎预防须知 */}
    </div>
  );
}

export default App;
