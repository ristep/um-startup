import axios from "axios";

const axParams = {
  baseURL: "http://phptest.sman/php-json-api/",
  headers: {
    Authorization: "dummy-key",
    "Content-type": "application/json",
  },
};

const Axios = axios.create(axParams);

export const getToken = (args) => {
	const { url = '', username, password, callBack, callError } = args;
	const fetchToken = () => {
		Axios.post("", {
    getToken: {
      username,
      password
    }
  })
		.then(response => { 
			callBack({ timeStamp: Date.now() , ...response.data });
		})
		.catch(error => {
				callError(error);
		});
	}
	fetchToken();
}
 
export const postJsonRequest = (args) => {
	const { request, auToken, callBack } = args;
	const fetchData = async () => {
		const dtj = await Axios.post("", request, { headers: { Authorization: auToken } }); 
		callBack(dtj.data);
	};
	fetchData();
};

export const imgUrl = axParams.baseURL + 'images/' 
export const slikcaUrl = axParams.baseURL + 'images/slikca' 

export default Axios;
