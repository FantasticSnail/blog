import {BLOG_CONFIG} from "../config";

export default {
    getIndex: function () {
        return axios.get(BLOG_CONFIG.API_URI + '/');
    }
}
