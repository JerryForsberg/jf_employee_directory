import axios from "axios";



//export the get call from the random user API
export default function getEmployees() {
  const BASEURL = "https://randomuser.me/api/?results=50&nat=us&inc=name,location,email,phone,cell,picture";
  return axios.get(BASEURL);
}

