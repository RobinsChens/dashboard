// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import stateConfig from './replicationcontrollerlist_stateconfig';
import filtersModule from 'common/filters/filters_module';
import componentsModule from 'common/components/components_module';
import namespaceModule from 'common/namespace/namespace_module';
import {replicationControllerCardComponent} from './replicationcontrollercard_component';
import {replicationControllerCardMenuComponent} from './replicationcontrollercardmenu_component';
import {replicationControllerCardListComponent} from './replicationcontrollercardlist_component';
import replicationControllerDetailModule from 'replicationcontrollerdetail/replicationcontrollerdetail_module';

/**
 * Angular module for the Replication Controller list view.
 *
 * The view shows Replication Controllers running in the cluster and allows to manage them.
 */
export default angular
    .module(
        'kubernetesDashboard.replicationControllerList',
        [
          'ngMaterial',
          'ngResource',
          'ui.router',
          filtersModule.name,
          componentsModule.name,
          replicationControllerDetailModule.name,
          namespaceModule.name,
        ])
    .config(stateConfig)
    .component('kdReplicationControllerCardList', replicationControllerCardListComponent)
    .component('kdReplicationControllerCard', replicationControllerCardComponent)
    .component('kdReplicationControllerCardMenu', replicationControllerCardMenuComponent)
    .factory('kdRCListResource', replicationControllerListResource);

/**
 * @param {!angular.$resource} $resource
 * @return {!angular.Resource}
 * @ngInject
 */
function replicationControllerListResource($resource) {
  return $resource('api/v1/replicationcontroller/:namespace');
}
