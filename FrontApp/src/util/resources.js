import axios from 'axios';

import { API_BASE } from 'src/config/constants';

// Resources for /posts endpoint on API
// @see https://github.com/mzabriskie/axios#creating-an-instance
export const dashboardResource = axios.create({
  baseURL: `${API_BASE}/dashboard/`
});
