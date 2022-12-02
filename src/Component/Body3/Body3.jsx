import React from 'react'
import './Body3.css'
import img1 from '../../Images/CEO.png'
import img2 from '../../Images/Nedsoft-photo.jpg'
import img3 from '../../Images/sammy.jfif'

const Body3 = () => {
  return (
    <div className='bold'>
      <div className="all">
      <div className="img7">
      <img src={img2}  />
      <h4 className='h4'>NEDSOFT</h4>
      <p className='page'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptas quibusdam mollitia nostrum consequuntur incidunt quaerat odio quidem totam pariatur,<br />  nulla accusantium molestiae officia eius</p>
      </div>
      <div className="img7">
      <img src={img1} />
      <h4 className='h4'>GEWIN</h4>
      <p className='page'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptas quibusdam mollitia nostrum consequuntur incidunt quaerat odio quidem totam pariatur,<br />  nulla accusantium molestiae officia eius</p>
      </div>
      <div className="img7">
      <img src={img3} />
      <h4 className='h4'>SAMMY</h4>
      <p className='page'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptas quibusdam mollitia nostrum consequuntur incidunt quaerat odio quidem totam pariatur,<br />  nulla accusantium molestiae officia eius</p>
      </div>
      </div>
    </div>
  )
}

export default Body3
