import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import './profile.css'
import { GetAdminData, UpdateAdminDatas } from '../../API/ApiCall';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const item = useSelector((state) => state.Login.LoginInfo[0]);
  console.log(item._id);

  const [firstname, setfirstname] = useState('');
  const [email, setemail] = useState('');
  const [image, setImage] = useState({})

  useEffect(() => {
    const showHandler = async () => {
      const res = await GetAdminData(item._id)
      console.log(res.data);
      setfirstname(res.data.firstname)
      setemail(res.data.email)
      setImage(res.data.image)
    }
    showHandler()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('email', email);
    formData.append('image', image);
    console.log(formData);

    const data = { firstname, email }
    const id = item._id
    const updatooi = await UpdateAdminDatas({ data, id });
    console.log('updatooi', updatooi);


  }

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    setIsEditing(true);
  };




  return (
    <div>
      <Modal hideHandler={props.orderHideHandler}>
        <div>
          {isEditing ? (
            <div>
              <form encType='multipart/form-data' onSubmit={(e) => handleSubmit(e)}>
                <h3 className='prof-updt-p'> Update Profile</h3>
                <div className='prof-inp'>
                  <input type="text" value={firstname} placeholder='Name' onChange={(e) => setfirstname(e.target.value)} />
                </div>
                <div className='prof-inp'>
                  <input type="email" value={email} placeholder='email' onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className='prof-img'>
                  <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div>
                  <button className='prof-btn'>Update</button>
                </div>
              </form>
            </div>
          ) : (
            <div className='ad-im'>
              <img src={`./Profile/${image}`} height={100} width={100} alt="Profile" />
              <h3 className='pro-name'>{firstname}</h3>
              <h5 className='pro-mail'>{email}</h5>
            </div>
          )}
          {!isEditing && (
            <button className='prof-btn' onClick={handleUpdate}>update</button>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default Profile
