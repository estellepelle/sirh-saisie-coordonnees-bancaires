import angular from 'angular'
import RouteModule from 'angular-route'

import 'bootstrap/dist/css/bootstrap.css'
import { BanqueComponent } from './banque/banque.component'
import { routes } from './routes.config'
import { BanqueService } from './banque/banque.service'


angular.module('app', [
    RouteModule
])

.component('dtaBanque', BanqueComponent)

.service('BanqueService', BanqueService)

.config(routes)