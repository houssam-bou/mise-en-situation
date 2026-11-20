import { API_URL } from "./script.js"

export { allCountries }

async function fetchCountries() {
    // TODO
    try {
        const response = await axios.get(API_URL);

        const countries = response.data;
            // params {

            // }
        return countries;
    } catch (err) {
        console.log(err);
    }
}

const allCountries = await fetchCountries();
