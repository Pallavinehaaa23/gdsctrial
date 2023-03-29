import React from 'react'

const Deficiency = ({filterit}) => {
  return (
    <div className='btns'>
        <button className='prodfilter' onClick={()=>filterit('all')}>all</button>
      <button className='prodfilter' onClick={()=>filterit('Cancer')}>Cancer</button>
      <button className='prodfilter' onClick={()=>filterit('Diabetics')}>Diabetics</button>
      <button className='prodfilter' onClick={()=>filterit('BloodPressure')}>Blood Pressure</button>
      <button className='prodfilter' onClick={()=>filterit('Haemoglobin')}>Haemoglobin</button>
    
    </div>
  )
}

export default Deficiency
