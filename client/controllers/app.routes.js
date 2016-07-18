"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var guest_list_component_1 = require('./guest/guest-list.component');
var routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        useAsDefault: true
    },
    {
        path: 'guest',
        component: guest_list_component_1.GuestListComponent,
        useAsDefault: true
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
