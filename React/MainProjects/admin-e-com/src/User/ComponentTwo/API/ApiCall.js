import axios from 'axios'
import { userLoginData } from '../../../Redux/UseModRedux';
// import { loginData } from '../../../Redux/userRedux';
// import { userLoginData } from '../../../Redux/UseModRedux';

//to post uesr data
export const EcomSignUp = async (data) => {
    console.log("userdataa", data);
    try {
        const res = await axios.post('http://localhost:7002/api/ecompost', data)
        console.log(res);
        // return res.data
    } catch (error) {
        console.log(error);
    }
}

//login data post
export const EcomLogin = async (data, dispatch) => {
    console.log('log data', data);
    try {
        const res = await axios.post('http://localhost:7002/api/ecomlogin', data)
        console.log(res);
        dispatch(userLoginData(res.data))
    } catch (error) {
        console.log(error);
    }
}

//to get user data (profile)
export const EcomGetLogin = async (id) => {
    console.log('usr-prof-id', id);
    try {
        const response = await axios.get(`http://localhost:7002/api/EcomUserGet/${id}`);
        console.log('huhu', response.data);
        return response.data; // Return data instead of entire response
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error for the caller to handle
    }
};

//to get user login data
export const DeleteUserIdData = async (id) => {
    console.log('user id', id);
    try {
        const res = await axios.delete(`http://localhost:7002/api/Ecomdelete/${id}`)
        console.log('delete', res);
    } catch (error) {
        console.log(error);
    }
}

//update user data
export const updateUserDatas = async (data) => {
    console.log("datttaa", data);
    const datas = data
    const id = data.id
    console.log("***", datas);
    try {
        const res = await axios.put(`http://localhost:7002/api/EcomUserUpadateProf/${id}`, datas);
        console.log('updateAdmin', res.data);
        return res.data;
    }
    catch (error) {
        console.log('Error updating admin:', error);
        throw error;
    }
}


// export const updateUserDatas = async (value) => {
//     console.log("valueeeee", value);
//     try {
//         const res = await axios.put(`http://localhost:7002/api/EcomUserUpadateProf/${value._id}`, {
//             name: value.name,
//             email: value.email,
//             image: value.image
//         })
//         console.log("************", res);
//         return res
//     } catch (err) {
//         console.log(err);
//     }
// }