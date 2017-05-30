const API_URL = 'http://localhost:8080/sgp/api/departements'
const API_COLLAB ='http://localhost:8080/sgp/api/collaborateurs'

export class BanqueService {
    constructor($http, $q) {
        this.$http = $http
        this.$q = $q
    }

    getDepartements() {
        return this.$http.get(API_URL)
            .then(response => response.data)
    }

    getCollaborateur(){
         return this.$http.get(API_COLLAB)
            .then(response => response.data)
    }

   
}

