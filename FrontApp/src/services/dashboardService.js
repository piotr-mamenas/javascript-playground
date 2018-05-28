import { dashboardResource } from 'src/util/resources';

export class DashboardService {
    getCardById(id) {
      return dashboardResource.get(`${id}`)
        .then((response) => {
          return this.post = response.data;
        })
        .catch((errorResponse) => {
          console.log('API responded with:', errorResponse);
        });
    }

    getCardPage() {
      return dashboardResource.get('/card')
        .then((response) => {
          return this.posts = response.data;
        })
        .catch((errorResponse) => {
          console.log('API responded with:', errorResponse);
        });
    }

}
