import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50&nat=us";


//export the get call from the random user API
export default {
  search: function() {
 return axios.get(BASEURL);
  }
};
