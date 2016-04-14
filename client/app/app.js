'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import angulartics from 'angulartics';
import angularticsGoogle from 'angulartics-google-analytics';

angular.module('app', [
    uiRouter,
    angulartics,
    angularticsGoogle,
    Common.name,
    Components.name
  ])
  .config(($locationProvider) => {
    'ngInject';
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

.component('app', AppComponent);
