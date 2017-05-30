import template from './banque.component.html'

class controller {
    constructor(BanqueService, $location){
        this.BanqueService = BanqueService
        this.$location = $location
    }

    $onInit () {
        this.BanqueService.getDepartements()
        .then(departements => this.departements = departements)

        this.BanqueService.getCollaborateur()
        .then(collaborateurs =>this.collaborateurs = collaborateurs)
    }

}

export let BanqueComponent = {
    template,
    controller,
    bindings: {
        departements :"<"
    }
}