import React from 'react';
import ReactDOM from 'react-dom';

import FunCmp from './MyFunCmp';
import ClassCmp from './MyClassCmp'


ReactDOM.render(<div>
  <FunCmp number={0} obj={{name:'ling'}}/>
  <ClassCmp number={1} />
  <ClassCmp number={2}/>
  <ClassCmp number={3}/>
  <ClassCmp number={4}/>
  <ClassCmp number={5}/>

</div>, document.getElementById('root'));