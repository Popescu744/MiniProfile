import axios from 'axios';
 
const users_url = 'http://localhost:8080/users/'

class ProfileDataService{

  retrieveAllUsers(){
    console.log( users_url);
    return axios.get(users_url);
  }

}

export default new ProfileDataService()