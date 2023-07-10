const crGrid = angular.module("cr-grid", []);

// Controllers
function CRGridController($scope, $http) {
  const ctrl = this;

  ctrl.$onInit = function () {
    console.log(ctrl.src);
    $scope.$watch("$ctrl.src", function (newSrc) {
      // Use '$ctrl.src' instead of 'ctrl.src' in the $watch expression
      if (newSrc) {
        $http
          .get(newSrc)
          .then(function (response) {
            ctrl.data = response.data;
          })
          .catch(function (error) {
            console.error("Error fetching data:", error);
          });
      }
    });
  };
}

function TabsController($scope, $rootScope) {
  const ctrl = this;
  ctrl.tab = 1;
  ctrl.setActiveTab = function (tab) {
    ctrl.tab = tab;
    $rootScope.$broadcast("tab-update", tab);
  };

  ctrl.isSet = function (tab) {
    return tab === ctrl.tab;
  };
}

function FeaturesController($scope) {
  console.log($scope);
}
//table

// components
angular.module("cr-grid").component("tabs", {
  template: `
    <div id="appTabsContainer" class="relative hide-print">
        <div class="flex baymax AppTabsBar css-502mzd"
        style="transition: width 300ms ease-in-out 0s; height: 32px;">
        <div class="flex flex-auto relative"
            style="clip-path: inset(-3px 0px 0px); background-color: rgba(11, 118, 183, 0.1);">
            <div class="absolute all-0 pl1-and-half">
                <div class="flex flex-auto scrollbar-hidden overflow-auto pt-half mtn-half pl-half mln-half"
                    data-tutorial-selector-id="appControlsTablesTabsContainer">
                    <nav aria-label="Tables" class="flex flex-none" id="appControlsTablesTabs"
                        data-tutorial-selector-id="appControlsTablesTabs">
                        <div class="flex tab" ng-click="$ctrl.setActiveTab(1)"
                            style="height: 32px;">
                            <div class="flex relative flex-none text-size-default tableTabContainer lightBase activeTab"
                            ng-class="{ active: $ctrl.isSet(1)}"  id="tableTab-tbstroy">
                                <div class="rounded-top flex flex-auto relative tab tableTab flex-none pointer"
                                    ng-class="{'strong white': $ctrl.isSet(1)}" data-tableid="tbstroy" data-tutorial-selector-id="tableTab-stories">
                                    <div>
                                        <a class="height-full flex flex-auto items-center max-width-2 no-user-select focus-visible pl1-and-half"
                                            href=""
                                            style="padding-right: 12px; outline-offset: -5px; color: inherit;">
                                            <span class="truncate">Stories</span></a>
                                        <div class="absolute bottom-0 flex items-center no-user-select"
                                            style="right: 12px; top: 0px;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex tab" ng-click="$ctrl.setActiveTab(2)"
                            style="height: 32px;">
                            <div class="flex relative flex-none text-size-default tableTabContainer lightBase"
                            ng-class="{ active: $ctrl.isSet(2)}" id="tableTab-tbepics">
                                <div class="rounded-top flex flex-auto relative tab tableTab flex-none pointer top-bar-text-dark"
                                ng-class="{'strong white': $ctrl.isSet(2)}"  data-tableid="tbepics" data-tutorial-selector-id="tableTab-epics">
                                    <div><a class="height-full flex flex-auto items-center max-width-2 no-user-select focus-visible pl1-and-half"
                                            style="padding-right: 12px; outline-offset: -5px; color: inherit;"><span
                                                class="truncate">Epics</span></a>
                                        <div class="absolute bottom-0 flex items-center no-user-select"
                                            style="right: 12px; top: 0px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="css-baufhl"></div>
                        </div>
                        <div class="flex" ng-click="$ctrl.setActiveTab(3)"
                            style="height: 32px;">
                            <div class="flex relative flex-none text-size-default tableTabContainer lightBase"
                            ng-class="{ active: $ctrl.isSet(3)}"  id="tableTab-tbsprints">
                                <div class="rounded-top flex flex-auto relative tab tableTab flex-none pointer top-bar-text-dark"
                                ng-class="{'strong white': $ctrl.isSet(3)}" data-tableid="tbsprints"
                                    data-tutorial-selector-id="tableTab-sprints">
                                    <div><a class="height-full flex flex-auto items-center max-width-2  no-user-select focus-visible pl1-and-half"
                                            href=""
                                            style="padding-right: 12px; outline-offset: -5px; color: inherit;"><span
                                                class="truncate">Sprints</span></a>
                                        <div class="absolute bottom-0 flex items-center no-user-select"
                                            style="right: 12px; top: 0px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="css-baufhl"></div>
                        </div>
                        <div class="flex" g-class="{ active: $ctrl.isSet(4)}" ng-click="$ctrl.setActiveTab(4)"
                            style="height: 32px;">
                            <div class="flex relative flex-none text-size-default tableTabContainer lightBase"
                            ng-class="{ active: $ctrl.isSet(4)}" id="tableTab-tbmilestone">
                                <div class="rounded-top flex flex-auto relative tab tableTab flex-none pointer top-bar-text-dark"
                                ng-class="{'strong white': $ctrl.isSet(4)}"
                                    data-tableid="tbmilestone"
                                    data-tutorial-selector-id="tableTab-releaseMilestones">
                                    <div><a class="height-full flex flex-auto items-center max-width-2 no-user-select focus-visible pl1-and-half"
                                            href=""
                                            style="padding-right: 12px; outline-offset: -5px; color: inherit;"><span
                                                class="truncate">Release milestones</span></a>
                                        <div class="absolute bottom-0 flex items-center no-user-select"
                                            style="right: 12px; top: 0px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="css-baufhl"></div>
                        </div>
                        <div class="flex" ng-class="{ active: $ctrl.isSet(5)}" ng-click="$ctrl.setActiveTab(5)"
                            style="height: 32px;">
                            <div class="flex relative flex-none text-size-default tableTabContainer lightBase"
                            ng-class="{ active: $ctrl.isSet(5)}"
                                id="tableTab-tbfacets">
                                <div class="rounded-top flex flex-auto relative tab tableTab flex-none pointer top-bar-text-dark"
                                ng-class="{'strong white': $ctrl.isSet(5)}"
                                    data-tableid="tbfacets" data-tutorial-selector-id="tableTab-facets">
                                    <div><a class="height-full flex flex-auto items-center max-width-2 no-user-select focus-visible pl1-and-half"
                                            href=""
                                            style="padding-right: 12px; outline-offset: -5px; color: inherit;"><span
                                                class="truncate">Facets</span></a>
                                        <div class="absolute bottom-0 flex items-center no-user-select"
                                            style="right: 12px; top: 0px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="css-baufhl invisible"></div>
                        </div>
                    </nav>

                    <div class="flex">
                        <div tabindex="0" role="button" aria-label="Search all tables"
                            class="pointer flex flex-none justify-center items-center focus-visible-opaque focus-container px1-and-half top-bar-text-dark top-bar-text-dark-hover"
                            style="height: 32px;"><svg width="16" height="16" viewBox="0 0 16 16"
                                class="parent-focus-visible"
                                style="shape-rendering: geometricprecision;">
                                <path fill-rule="nonzero" fill="currentColor"
                                    d="M3.64645 5.64645C3.84171 5.45118 4.15829 5.45118 4.35355 5.64645L8 9.29289L11.6464 5.64645C11.8417 5.45118 12.1583 5.45118 12.3536 5.64645C12.5488 5.84171 12.5488 6.15829 12.3536 6.35355L8.35355 10.3536C8.15829 10.5488 7.84171 10.5488 7.64645 10.3536L3.64645 6.35355C3.45118 6.15829 3.45118 5.84171 3.64645 5.64645Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px1 rounded-big-top-right" style="background-color: rgba(11, 118, 183, 0.1);">
        </div>
    </div>
    </div>`,
  controller: TabsController,
});

angular.module("cr-grid").component("crGridTable", {
  template: `<div id="appsubContainer">
  <div id="tableContainer" class="tableHeight">
    <div id="firstContainer" style="width: 100%;">
      <tabs tab="tab"></tabs>
      <ng-transclude></ng-transclude>
      <div class="headerAndDataRowContainer d-flex flex-row">
  <div class="rightPaneWrapper">
      <div class="headerRightPane pane">
          <div class="rightHeaderPane">
              <div class="checkBoxAndNumber1"><input type="checkbox"/></div>
              <div class="rightHeaderData d-flex flex-row justify-content-between" ng-click="click()" ng-repeat="item in headers"
                  ng-show="!item['show']">{{item.name}}
                  <span class="material-symbols-outlined fs-20 columnFeatures">expand_more</span>
              </div>
              <div class="drag-handle" ng-mousedown="startDrag($event)"></div>
          </div>
      </div>
      <sortpopup show="columnSort"></sortpopup>
      <div class="rightBodyContainer expanded-row">
          <div class="rightBodyPane rowData" ng-repeat="item in getPaginatedData(tab)" ng-if="!item.key">
              <span class="index checkBoxAndNumber1">{{$index + 1}}</span>
              <div class="check"><input class="" type="checkbox"/></div>
              <input class="rightBodyData" ng-if="item[head.key]" 
                  ng-repeat="head in headers" ng-hide="head.show" 
                  ng-model="item[head.key]" 
                  ng-blur="click({item: item, key: head.key, newValue: item[head.key]})"
              >
          </div>
              <div class="m-1rm body-1" ng-repeat="item in data" ng-if="item.key">
              <div class="accordion__title-1">{{item.key}}</div>

                  <div class="flex rightelement" ng-repeat="head in item.value" ng-if="!head.key" style="border: 1px black;">
                      <span class="index checkBoxAndNumber">{{item.index}}</span>


                      <div class="check"><input class="" type="checkbox"/></div>
                      <div class="rightBodyData rightelement-1" ng-repeat="heading in headers">
                          {{head[heading.key]}}
                      </div>
                  </div>
                  <div  ng-repeat="head in item.value" ng-if="head.key" class="body-2">
                      <div class="accordion__title-2">{{head.key}}</div>

                      <div  ng-repeat="ele in head.value" class="body-3">
                          <div class="element-1" ng-hide="!ele.key">{{ele.key}}</div>
                          <div  ng-repeat="ele1 in ele.value" class="element-2">
                              <span  ng-repeat="heading in headers">
                                  {{ele1[heading.key]}}
                              </span>
                          </div>
                          
                          <span  ng-repeat="heading in headers" class="element-3" ng-hide="!ele[heading.key]">
                             {{ele[heading.key]}}
                          </span>
                      </div>
                      <span  ng-repeat="heading in headers">
                          {{head[heading.key]}}
                      </span>
                  </div>
          </div>
          </div>
          
      </div>
      <div class="paginationContainer">
          <button class="paginationButton" ng-click="previousPage()">Previous</button>
          <span class="paginationInfo">Page {{currentPage}} of {{totalPages}}</span>
          <button class="paginationButton" ng-click="nextPage()">Next</button>
      </div>
      
      
  </div>
</div>
  </div>
</div>`,
  controller: function ($scope, $http, $rootScope) {
    const ctrl = this;
    var isDragging = false;
    var initialX = 0;
    var initialWidth = 0;
    var columnIndex = 0;


    ctrl.$onInit = function () {
      $scope.$watch("$ctrl.src", function (newSrc) {
        // Use '$ctrl.src' instead of 'ctrl.src' in the $watch expression
        if (newSrc) {
          $http
            .get(newSrc)
            .then(function (response) {
              ctrl.data = response.data.stories;
              $scope.completeData = response.data;
              $scope.data = ctrl.data.data;
              $scope.headers = ctrl.data.headers;
              $rootScope.$broadcast("hide-value", {
                data: $scope.data,
                headers: $scope.headers,
              });
              $rootScope.$broadcast("sort-value", {
                data: $scope.data,
                headers: $scope.headers,
              });
              $rootScope.$broadcast("group-value", {
                data: $scope.data,
                headers: $scope.headers,
              });
              $rootScope.$broadcast("filter-value", {
                data: $scope.data,
                headers: $scope.headers,
              });
            

            })
            .catch(function (error) {
              console.error("Error fetching data:", error);
            });
        }
      });
    };
    $scope.startDrag = function (event) {
      isDragging = true;
      initialX = event.clientX;
      initialWidth = event.target.parentNode.offsetWidth;
      columnIndex = Array.from(event.target.parentNode.parentNode.children).indexOf(
        event.target.parentNode
      );

      $document.on("mousemove", handleDrag);
      $document.on("mouseup", endDrag);
    };

    function handleDrag(event) {
      if (!isDragging) return;

      var dx = event.clientX - initialX;
      var newWidth = initialWidth + dx;
      if (newWidth > 0) {
        var column = document.querySelectorAll(
          `.rightBodyContainer .rightBodyPane .rowData .rightBodyData:nth-child(${
            columnIndex + 1
          })`
        );
        for (var i = 0; i < column.length; i++) {
          column[i].style.width = newWidth + "px";
        }
      }
    }

    function endDrag() {
      isDragging = false;
      $document.off("mousemove", handleDrag);
      $document.off("mouseup", endDrag);
    }
    $scope.$on("tab-update", function (e, d) {
      console.log(d, $scope.completeData);
      switch (d) {
        case 1:
          $scope.currentData = $scope.completeData.stories;
          break;
        case 2:
          $scope.currentData = $scope.completeData.epics;
          break;
        case 3:
          $scope.currentData = $scope.completeData.sprints;
          break;
        case 4:
          $scope.currentData = $scope.completeData.releaseMilestones;
          break;
        case 5:
          $scope.currentData = $scope.completeData.facets;
          break;
        default:
          $scope.currentData = $scope.completeData.stories;
          break;
      }
      $scope.data = $scope.currentData.data;
      $scope.headers = $scope.currentData.headers;
      $scope.currentPage = 1;
      $scope.pageSize = 10;
        // Inside the $http.get success callback
              $rootScope.data = $scope.data;
              $rootScope.headers = $scope.headers;
      $rootScope.$broadcast("hide-value", {
        data: $scope.data,
        headers: $scope.headers,
      });
      $rootScope.$broadcast("sort-value", {
        data: $scope.data,
        headers: $scope.headers,
      });
      $rootScope.$broadcast("group-value", {
        data: $scope.data,
        headers: $scope.headers,
      });
      $rootScope.$broadcast("filter-value", {
        data: $scope.data,
        headers: $scope.headers,
      });
    });
    $scope.$on("group-update", function (e, d) {
      $scope.data = d;
    });
    $scope.$on("filter-update", function (e, d) {
      $scope.data = d;
    });

    $scope.currentPage = 1;
    $scope.pageSize = 10; // Number of records to display per page

    // Function to navigate to the previous page
    $scope.previousPage = function () {
      if ($scope.currentPage > 1) {
        $scope.currentPage--;
      }
    };

    // Function to navigate to the next page
    $scope.nextPage = function () {
      if ($scope.currentPage < $scope.totalPages) {
        $scope.currentPage++;
      }
    };

    // Calculate total number of pages
    $scope.$watch("data", function () {
      if ($scope.data) {
        $scope.totalPages = Math.ceil($scope.data.length / $scope.pageSize);
      }
    });
    // Function to get the paginated data for the current page
    $scope.getPaginatedData = function (tab) {
      console.log($scope);
      var startIndex = ($scope.currentPage - 1) * $scope.pageSize;
      var endIndex = startIndex + $scope.pageSize;

      // Add an index property to each item in the data array
      if ($scope.data) {
        for (var i = 0; i < $scope.data.length; i++) {
          $scope.data[i].index = i + 1;
        }
        // Slice the data array based on the start and end indexes
        var paginatedData = $scope.data.slice(startIndex, endIndex);
        console.log(paginatedData, "==");
        return paginatedData;
      }
    };
  },
  transclude: true,
  bindings: {
    src: "@",
  },
});

angular.module("cr-grid").component("features", {
  bindings: {
    column: "@",
    all: "<",
  },
  template: `
    <div ng-if="$ctrl.all" id="viewBar" role="region" aria-label="View configuration" class="viewBarContainer baymax flex flex-none" data-visible="{{ $ctrl.all }}">
        <div class="viewSwitcherContainer flex-none flex items-center">
            <div class="height-full flex items-center pl1-and-half g-16" data-testid="View sidebar toggle hover zone">
                <div ng-transclude="views"></div>
                <div class="darken3" style="height: 16px; width: 1px;"></div>
                <div ng-transclude="fields"></div>
                <div ng-transclude="storyFields"></div>
                <div ng-transclude="hideFields"></div>
                <div ng-transclude="filter"></div>
                <div ng-transclude="groups"></div>
                <div ng-transclude="sortPopup"></div>  
                <div ng-transclue="sideBar"></div>   
                <div ng-transclue="searchIcon"></div>                
            </div>
        </div>
    </div>
    `,
  transclude: {
    views: "?defaultViews",
    fields: "?fields",
    sideBar: "?sideBar",
    storyFields: "?storyFields",
    hideFields: "?hideFields",
    filter: "?filter",
    groups: "?groups",
    sortPopup: "?sortPopup",
    searchIcon: "?searchIcon",
  },
});

//sidebar
angular.module("cr-grid").component("defaultViews", {
  template: `
    <div class="d-flex align-item-center g-4 menuView" ng-click="$ctrl.toggleNavBar()">
        <span class="material-symbols-outlined fs-15">menu</span>
        <span>Views</span>
    </div>  
    `,
  controller: function () {
    const ctrl = this;
    ctrl.isNavBarOpen = false;
    ctrl.toggleNavBar = function () {
      ctrl.isNavBarOpen = !ctrl.isNavBarOpen;
    };
  },
});

//storyfields
angular.module("cr-grid").component("storyFields", {
  bindings: {
    isVisible: "<",
  },
  template: `
    <div ng-if="$ctrl.isVisible" class="d-flex flex-row align-item-center g-6 show-dailog all-stories" ng-click="togglestoryFieldsUI()">
        <span class="material-symbols-outlined fs-20" style="color: rgb(22, 110, 225);">table_chart</span>
        <span>All {{tabName()}}</span>
        <span class="material-symbols-outlined fs-20">groups</span>
        <span class="material-symbols-outlined fs-20">expand_more</span>
    </div>

    <div ng-if="$ctrl.isVisible" class="forAllStory" ng-show="isstoryFieldsUIOpen">
        <ul class="pl-0 m-0">
            <li ng-click="downloadCsv()" class="d-flex align-item-center pt-6 pb-6 pl-8">
                <span class="material-symbols-outlined fs-15">download_for_offline</span>
                <span class="pl-6">Download CSV</span> 
            </li>
            <li class="d-flex align-item-center pt-6 pb-6 pl-8">
                <span class="material-symbols-outlined fs-15">print</span>
                <span class="pl-6">Print view</span>
            </li>
        </ul>
    </div>
    `,
  controller: function storyFieldsController($scope, $document, $rootScope) {
    $scope.isstoryFieldsUIOpen = false;

    $scope.togglestoryFieldsUI = function () {
      $scope.isstoryFieldsUIOpen = !$scope.isstoryFieldsUIOpen;
    };

    $scope.tabName = function () {
      // Implement your logic to return the tab name
    };

    $scope.downloadCsv = function () {
      var csvContent = "data:text/csv;charset=utf-8,";

     
        var headers = $rootScope.headers;
        var data = $rootScope.data;

      // Add headers to the CSV content
      var headerRow = headers.map(function (header) {
        return header.name;
      });
      csvContent += headerRow.join(",") + "\n";

      // Add data rows to the CSV content
      data.forEach(function (item) {
        var rowData = headers.map(function (header) {
          return item[header.key];
        });
        csvContent += rowData.join(",") + "\n";
      });

      var encodedURI = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedURI);
      link.setAttribute("download", "data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  },
});

//hide
angular.module("cr-grid").component("hideFields", {
  bindings: {
    column: "@",
    isVisible: "<",
  },
  template: `
    <div class="d-flex flex-row align-item-center g-4 show-dailog ptb-4-plr" ng-if="$ctrl.isVisible"
       ng-click="toggleHideFieldsUI()" ng-class="{ forHideFieldsIconColor: hiddenColumnCount() >= 1, forHideFieldsIcon: hiddenColumnCount() === 0 }">
      <span class="material-symbols-outlined fs-15">visibility_off</span>
      <span ng-if="hiddenColumnCount() == 0">Hide fields</span>
      <span ng-if="hiddenColumnCount() == 1">1 hidden field</span>
      <span ng-if="hiddenColumnCount() > 1">{{hiddenColumnCount()}} hidden fields</span>
    </div>
    <div class="hideFieldsContainer">
    
    </div>
    <!-- hide fields toggle button -->
    <div class="forHideFields mt-8" ng-show="isHideFieldsUIOpen">
      <input type="search" ng-model="searchText" placeholder="Find a field" />
      <div class="divider"></div>
      <ul class="pl-6">
        <li ng-repeat="item in getHeaders() | filter:searchText">
          <span class="material-icons fs-18" ng-click="item.show = !item.show" style="color: green;" ng-class="{'active': item.show}">
            {{ item.show ? 'toggle_off' : 'toggle_on' }}
          </span>
          <span class="material-symbols-outlined fs-15">expand_circle_down</span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <div class="btn d-flex justify-content-center g-30">
        <button ng-click="showAll(false)">Hide All</button>
        <button ng-click="showAll(true)">Show All</button>
      </div>
    </div>
  `,
  controller: function HideFieldsController($scope, $rootScope) {
    $scope.$on("hide-value", function (e, d) {
      $scope.value = d;
    });

    $scope.isHideFieldsUIOpen = false;

    $scope.$on("group-popup", function (e, d) {
      $scope.isHideFieldsUIOpen = d;
    });

    $scope.$on("filter-popup", function (e, d) {
      $scope.isHideFieldsUIOpen = d;
    });

    $scope.$on("sort-popup", function (e, d) {
      $scope.isHideFieldsUIOpen = d;
    });

    $scope.toggleHideFieldsUI = function () {
      $scope.isHideFieldsUIOpen = !$scope.isHideFieldsUIOpen;
      $rootScope.$broadcast("hide-popup", false);
    };

    $scope.hiddenColumnCount = function () {
      if ($scope.value && $scope.value.headers) {
        return $scope.value.headers.filter((ele) => ele.show === true).length;
      }
      return 0;
    };

    $scope.showAll = function (val) {
      if (val) {
        $scope.value.headers.forEach((ele, index) => {
          if (index !== 0) {
            ele.show = false;
          }
        });
      } else {
        $scope.value.headers.forEach((ele, index) => {
          if (index !== 0) {
            ele.show = true;
          }
        });
      }
    };

    $scope.getHeaders = function () {
      if ($scope.value) {
        return $scope.value.headers.filter(function (item, index) {
          return index !== 0;
        });
      }
      return [];
    };
  },
});

//filter
angular.module("cr-grid").component("filter", {
  bindings: {
    isVisible: "<",
  },
  template: `<div ng-if="$ctrl.isVisible" class="d-flex flex-row align-item-center g-4 show-dailog forFilterIcon" ng-click="toggleFilterPopup()">
    <span class="material-symbols-outlined fs-15">filter_list</span>
    <span>Filter</span>
  </div>
  <!-- hide popup -->
  <div  ng-if="$ctrl.isVisible" class="filter-popup" ng-show="showFilterPopup">
    <div class="forFilter mt-8">  
      <div ng-if="sortItems.length > 0">In this view, show records</div>
      <div ng-show="sortItems.length === 0">No filter conditions are applied</div>
      <div class="d-flex flex-row align-item-center" ng-repeat="condition in conditions">
        <div ng-if="!condition.isDropdown">{{ condition.clause.value }}</div>
        <div class="clause" ng-if="condition.isDropdown">
          <select name="clause" ng-model="conditions[condition.index].value">
            <option ng-repeat="boolOps in boolOperators" value="{{boolOps.key}}">
              {{boolOps.text}}
            </option>
          </select>
        </div>
      
        <div class="filterCondition">     
          <select name="headerKey" ng-model="selectedHeader" ng-change="onChangeHeader()">
            <option ng-repeat="item in value.headers" value="{{item.key}}" class="filterFirstOptions">
              {{item.name}}
            </option>
            
          </select>
          <select name="operator" ng-model="selectedOperator" ng-change="onChangeOperator()">
            <option ng-repeat="operator in operators" value="{{operator.key}}">
              {{ operator.text }}
            </option>
          </select>
          <input type="text" ng-model="filterText" ng-change="onChangeFilter(this)" ng-model-options="{ debounce: 500  }" placeholder="Enter a value">
           <span class="material-symbols-outlined pt-3 pl-3 show-dailog" ng-click="deleteCondition(condition.index)">delete</span>
  
        </div>
      </div>   
      <div class="d-flex flex-row filterAction">
        <div class="d-flex flex-row ml-0">
          <div class="flex align-item-center add-another-sort show-dailog" ng-click="addCondition()">
            <span class="material-symbols-outlined fs-15">add</span>
            <span class="pl-3">Add Condition</span>
          </div>
          <div class="flex align-item-center add-another-sort add-condition-group show-dailog">
            <span class="material-symbols-outlined fs-15">add</span>
            <span class="pl-3">Add Condition group</span>
          </div>
        </div>
      </div>
    </div>  
  </div>`,
  controller: function FilterController($scope, $rootScope, $timeout) {
    $scope.$on("filter-value", function (e, d) {
      $scope.value = d;
      $scope.gridData = $scope.value.data;
      $scope.selectedHeader = $scope.value?.headers[0].key;
    });

    $scope.showFilterPopup = false;
    $scope.operators = [
      { key: "contains", text: "contains" },
      { key: "doesNotContain", text: "does not contain" },
      { key: "is", text: "is" },
      { key: "isNot", text: "is not" },
      { key: "isEmpty", text: "is empty" },
      { key: "isNotEmpty", text: "is not empty" },
    ];
    $scope.boolOperators = [
      { key: "or", text: "or" },
      { key: "and", text: "and" },
    ];
    $scope.conditions = [
      {
        isDropdown: false,
        value: "Where",
        index: 0,
      },
    ];

    $scope.selectedOperator = $scope.operators[0].key;
    $scope.filterText = "";
    $scope.isEmptyOrNot = false;

    // $timeout(function () {
    //   $scope.gridData = $scope.value.data;
    //   $scope.selectedHeader = $scope.value.headers[0].key;
    // }, 100);

    $scope.$on("group-popup", function (e, d) {
      $scope.showFilterPopup = d;
    });

    $scope.$on("sort-popup", function (e, d) {
      $scope.showFilterPopup = d;
    });

    $scope.$on("hide-popup", function (e, d) {
      $scope.showFilterPopup = d;
    });
    $scope.toggleFilterPopup = function () {
      $scope.showFilterPopup = !$scope.showFilterPopup;
      $rootScope.$broadcast("filter-popup", false);
    };

    $scope.sortItems = [];

    $scope.addCondition = function () {
      // Create a new sort item object and push it to the array
      const { index } = $scope.conditions.length
        ? $scope.conditions[$scope.conditions.length - 1]
        : 0;
      const nextIndex = index + 1;
      $scope.conditions.push({
        isDropdown: true,
        value: "and",
        index: nextIndex,
      });
    };

    $scope.deleteCondition = function (index) {
      $scope.conditions.splice(index, 1);
      $scope.value.data = $scope.gridData; // Reset data to original gridData
      $rootScope.$broadcast("filter-update", $scope.value.data);
    };

    $scope.onChangeOperator = function () {
      $scope.isEmptyOrNot =
        $scope.selectedOperator === "isEmpty" ||
        $scope.selectedOperator === "isNotEmpty";
      $scope.isEmptyOrNot && ($scope.filterText = "");
      $scope.value.data = $scope.getFilterData(
        $scope.selectedOperator,
        $scope.selectedHeader,
        $scope.filterText
      );
      $rootScope.$broadcast("filter-update", $scope.value.data);
    };

    $scope.onChangeFilter = function (e) {
      console.log(e.filterText, e.selectedHeader);
      $scope.value.data = $scope.getFilterData(
        e.selectedOperator,
        e.selectedHeader,
        e.filterText
      );
      $rootScope.$broadcast("filter-update", $scope.value.data);
    };

    $scope.getFilterData = function (op, col, text) {
      let data = [];
      const isEmpty = text.length === 0;

      switch (op) {
        case "contains":
          data = $scope.gridData.filter((d) =>
            new RegExp(text, "gi").test(d[col])
          );
          break;
        case "doesNotContain":
          if (isEmpty) {
            data = $scope.gridData; // Return original data when no text is specified
          } else {
            data = $scope.gridData.filter((d) =>
              new RegExp(`^(?!${text}).*$`, "gi").test(d[col])
            );
          }
          break;
        case "is":
          if (isEmpty) {
            data = $scope.gridData; // Return original data when no text is specified
          } else {
            data = $scope.gridData.filter((d) => d[col] === text);
          }
          break;
        case "isEmpty":
          data = $scope.gridData.filter((d) => d[col] === "");
          break;
        case "isNot":
          data = $scope.gridData.filter((d) => d[col] !== text);
          break;
        case "isNotEmpty":
          data = $scope.gridData.filter((d) => d[col] !== "");
          break;
      }
      return data;
    };
  },
});

angular.module("cr-grid").component("groups", {
  bindings: {
    isVisible: "<",
  },
  template: `<div ng-if="$ctrl.isVisible"class="d-flex flex-row align-item-center g-4 show-dailog ptb-4-plr" 
    ng-click="toggleGroupPopup()" ng-class="{ groupsPopupIconColor: groupCount, groupsPopupIcon: !groupCount }">
    <span class="material-symbols-outlined fs-15">subtitles</span>
    <span ng-if="groupCount === 0">Groups</span>
    <span ng-if="groupCount === 1">Grouped By 1 Field</span>
    <span ng-if="groupCount > 1">Grouped By {{groupCount}} Fields</span>
    
  </div>
  
  
  <!-- For Groups  -->
  <div ng-if="$ctrl.isVisible" class="groups-popup" ng-show="showGroupPopup">
  <div class="forGroups mt-8">
     <div class="d-flex flex-row g-170">
      <div class="fw-600">Group by</div>
      <div class="">
        <span class="mr-16 fw-300">Collapse all</span>
        <span class="fw-300">Expand all</span>
      </div>
    </div>
    <div class="divider"></div>
   <div class="d-flex flex-row align-item-center g-16 mt-8 mb-8" ng-if="appliedGroup" ng-repeat="ele in groupArray">
      <select name="" id="" class="selection" ng-model="ele.key" ng-change="groupChange(ele.key)">
        <option ng-repeat="item in value.headers" value="{{item.key}}">
          {{item.name}}
        </option>
      </select>
      <select name="" id="" ng-model="ele.sort" class="selection" ng-change="sortData(ele.key, ele.sort)">
        <option ng-if="getDataType(ele.key, 'string')" value="asc">A -> Z</option>
        <option ng-if="getDataType(ele.key, 'string')" value="desc">Z -> A</option>
        <option ng-if="getDataType(ele.key, 'number')" value="asc">1 -> 9</option>
        <option ng-if="getDataType(ele.key, 'number')" value="desc">9 -> 1</option>
      </select>
      <span class="material-symbols-outlined fs-15">
        visibility_off
      </span>
      <span class="material-symbols-outlined fs-15 close" ng-click="clearGroupFilter($index)">
        close
      </span>
      <span class="material-symbols-outlined fs-15 drag">
        drag_indicator
      </span>
    </div>
    <div class="pt-8" ng-if="groupArray.length === 0">Pick a field to group by</div>
    <div class="pt-8 show-dailog addsubGroup" ng-click="showTemp()" ng-if="groupArray.length > 0 && groupArray.length < 3">+ Add sub group</div>
    
    <ul class="pl-0 h-14 overflow-auto " ng-show="showSortTemplate">
      <li ng-repeat="item in value.headers" data-key="item.key" ng-click="applyGroup(item.key , item.name , true)" class="p-3 d-flex align-item-center">
        <span class="material-symbols-outlined fs-15 ">expand_circle_down</span>
        <span class="pl-6">{{item.name}}</span>
      </li>
    </ul>
  
    <div class="d-flex align-item-center seeAllFields">
      <span class="material-symbols-outlined">expand_more</span>
      <span class="pl-6">See all fields</span>
    </div>
  </div>
  </div>
  `,
  controller: function GroupsController($scope, $rootScope) {
    // Directive logic goes here
    // Initialize the group popup as hidden
    $scope.$on("group-value", function (e, d) {
      $scope.value = d;
    });
    $scope.showGroupPopup = false;
    $scope.selectedGroupNameSort = "asc";
    $scope.groupArray = [];
    $scope.appliedGroup = false;
    $scope.showSortTemplate = true;
    $scope.selectedGroupName = "";
    $scope.gridData = null;
    $scope.groupCount = 0;

    $scope.$on("filter-popup", function (e, d) {
      $scope.showGroupPopup = d;
    });

    $scope.$on("sort-popup", function (e, d) {
      $scope.showGroupPopup = d;
    });

    $scope.$on("hide-popup", function (e, d) {
      $scope.showGroupPopup = d;
    });

    $scope.toggleGroupPopup = function () {
      $scope.showGroupPopup = !$scope.showGroupPopup;
      $rootScope.$broadcast("group-popup", false);
    };

    $scope.applyGroup = function (args, name, pushRequired) {
      if (pushRequired)
        $scope.groupArray.push({ key: args, sort: "asc", name: name });

      // Update group count
      $scope.groupCount = $scope.groupArray.length;

      // Call function to update group display
      $scope.updateGroupDisplay();

      !$scope.gridData && ($scope.gridData = $scope.value.data);
      const copyData = [...$scope.gridData];
      const result = $scope.groupBy1(
        copyData,
        $scope.groupArray.map((e) => e.key)
      );

      let dataArray = [];
      Object.entries(result).forEach(([key, value]) => {
        let val = value;
        console.log(
          typeof value === "object" && !Array.isArray(value),
          "typeof value ==="
        );
        if (typeof value === "object" && !Array.isArray(value)) {
          let keyValueObj1 = [];
          Object.entries(value).forEach(([key1, value1]) => {
            if (typeof value1 === "object" && !Array.isArray(value1)) {
              let keyValueObj2 = [];
              Object.entries(value1).forEach(([key2, value2]) => {
                keyValueObj2.push({ key: key2 || "null", value: value2 });
              });
              value1 = keyValueObj2;
            }
            keyValueObj1.push({ key: key1 || "null", value: value1 });
            val = keyValueObj1;
          });
        }
        const keyValueObj = { key: key || "null", value: val };
        // keyValueObj[key] = value;
        dataArray.push(keyValueObj);
      });

      const groupToArr = dataArray;

      $scope.selectedGroupName = args;
      $scope.appliedGroup = true;
      $scope.showSortTemplate = false;
      $scope.value.data = groupToArr;
      console.log($scope.value, "22222222========");
      $rootScope.$broadcast("group-update", $scope.value.data);
    };

    $scope.clearGroupFilter = function (index) {
      $scope.groupArray.splice(index, 1);
      $scope.groupCount = $scope.groupArray.length;

      // Call function to update group display
      $scope.updateGroupDisplay();

      if ($scope.groupArray.length === 0) {
        $scope.value.data = $scope.gridData;
        $scope.appliedGroup = false;
        $rootScope.$broadcast("group-update", $scope.value.data);
      } else {
        $scope.applyGroup("", "", false);
      }
    };

    $scope.updateGroupDisplay = function () {
      if ($scope.groupCount === 0) {
        $scope.showSortTemplate = true;
      } else {
        $scope.showSortTemplate = false;
      }
    };

    $scope.getDataType = function (selectedHeader, type) {
      var findIndex = $scope.value.headers.findIndex(function (e) {
        return e.key == selectedHeader;
      });

      if (findIndex != -1) {
        if ($scope.value.headers[findIndex].dataType === type) {
          return true;
        }
      }
      return false;
    };

    $scope.sortData = function (headerKey, sortOrder) {
      var header = $scope.value.headers.find(function (h) {
        return h.key === headerKey;
      });
      console.log(header, "header");
      if (header) {
        $scope.value.data.sort(function (a, b) {
          var valueA = a.key;
          var valueB = b.key;

          if (header.dataType === "string") {
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
            if (sortOrder === "asc") {
              return valueA.localeCompare(valueB);
            } else if (sortOrder === "desc") {
              return valueB.localeCompare(valueA);
            }
          } else if (header.dataType === "number") {
            if (sortOrder === "asc") {
              return valueA - valueB;
            } else if (sortOrder === "desc") {
              return valueB - valueA;
            }
          }

          return 0;
        });
      }
    };

    $scope.groupChange = function (selectedOption) {
      var selectedItem = $scope.value.headers.find(function (item) {
        return item.key === selectedOption.trim();
      });
      if (selectedItem) {
        $scope.applyGroup(selectedItem.key, selectedItem.name, false);
        // Perform desired actions here
        // You can access selectedItem.key and selectedItem.name
      }
    };

    $scope.showTemp = function () {
      $scope.showSortTemplate = true;
    };

    $scope.groupBy1 = function (array, keys) {
      if (keys.length === 0) {
        return array;
      }
      // let obj1 = [];
      const [currentKey, ...remainingKeys] = keys;

      const grouped = array.reduce((result, obj) => {
        const key = obj[currentKey];

        if (!result[key]) {
          result[key] = [];
        }

        result[key].push(obj);
        return result;
      }, {});

      for (const key in grouped) {
        grouped[key] = $scope.groupBy1(grouped[key], remainingKeys);
      }
      return grouped;
    };
  },
});

angular.module("cr-grid").component("sortPopup", {
  bindings: {
    isVisible: "<",
  },
  template: `<div ng-if="$ctrl.isVisible" class="d-flex flex-row align-item-center g-4 show-dailog expanded-row ptb-4-plr"
    ng-click="toggleSortPopup()" ng-class="{ sortPopupIconColor: selectedHeader.length >= 1, sortPopupIcon : selectedHeader.length === 0 }">
    <span class="material-symbols-outlined fs-15">swap_vert</span>
    <span ng-if="selectedHeader.length === 0">Sort</span>
    <span ng-if="selectedHeader.length === 1">Sort By 1 Field</span>
    <span ng-if="selectedHeader.length > 1">Sort By {{ selectedHeader.length }} Fields</span>
  </div>
  
  <!-- sorting -->
  
  <div ng-if="$ctrl.isVisible" class="sort-popup" ng-show="showSortingPopup">
    <div class="sortings mt-8">
      <div id="sortings__field">
        <div class="fw-600">Sort by</div>
        <div class="divider"></div>
        <div data-testid="view-config-sort" ng-if="selectedHeader.length > 0">
          <div class="">
            <ul class="pt-8 flex flex-auto flex-column pl-0" ng-repeat="item in selectedHeader">
              <div class="row">
                <div class="col-5 flex b round-3 pl-15 pr-15 pt-3 pb-3 sortingName" role="button" aria-expanded="false" tabindex="0">
                  {{ item.name }}
                </div>
                <div class="col-5">
                  
                    <div class="flex flex-auto items-center justify-content-center">
                      <div ng-if="selectedHeader" class="">
                        <span ng-if="getDataType(item.key, 'string')" class="b show-dailog round-3 pl-15 pr-15 pt-3 pb-3 sortingName"
                          ng-click="sortData(item.key, 'asc')">A -> Z</span>
                        <span ng-if="getDataType(item.key, 'string')" class="b show-dailog round-3 pl-15 pr-15 pt-3 pb-3 sortingName"
                          ng-click="sortData(item.key, 'desc')">Z -> A</span>
                        <span ng-if="getDataType(item.key, 'number')" class="b show-dailog round-3 pl-3 pr-3 pt-3 pb-3 sortingName"
                          ng-click="sortData(item.key, 'first-last')">First -> Last</span>
                        <span ng-if="getDataType(item.key, 'number')" class="b show-dailog round-3 pl-3 pr-3 pt-3 pb-3 sortingName"
                          ng-click="sortData(item.key, 'last-first')">Last -> First</span>
                      </div>
                    </div>
                  
                </div>
                <div class="material-symbols-outlined fs-15 close col-2 text-center" ng-click="toggleSortTemplate($index, 'pull')">close</div>
              </div>
            </ul>
            <div class="flex align-item-center add-another-sort pt-8 show-dailog" ng-click="toggleSortTemplateNew()">
              <span class="material-symbols-outlined fs-15">add</span>
              <span class="pl-3">Add another sort</span>
            </div>
          </div>
        </div>
        <div class="d-flex flex-row itemCenter" ng-show="!showSortTemplate">
          <span class="material-symbols-outlined fs-15" style="color: #56c9f5;">search</span>
          <input type="search" ng-model="searchText" placeholder="Find a field" />
        </div>
  
        <ul class="pl-0 h-14 overflow-auto" ng-show="!showSortTemplate">
          <li ng-repeat="item in getHeaders() | filter:searchText" class="d-flex pb-4 pt-4 itemCenter">
            <span class="material-symbols-outlined fs-15 pr-6">expand_circle_down</span>
            <span ng-click="toggleSortTemplate(item, 'push')">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- sorting-end -->
  `,
  controller: function SortController($scope, $rootScope) {
    $scope.selectedHeader = [];
    $scope.showSortingPopup = false;
    $scope.$on("sort-value", function (e, d) {
      $scope.value = d;
    });

    $scope.$on("group-popup", function (e, d) {
      $scope.showSortingPopup = d;
    });

    $scope.$on("filter-popup", function (e, d) {
      $scope.showSortingPopup = d;
    });

    $scope.$on("hide-popup", function (e, d) {
      $scope.showSortingPopup = d;
    });

    $scope.toggleSortPopup = function () {
      $scope.showSortingPopup = !$scope.showSortingPopup;
      $rootScope.$broadcast("sort-popup", false);
    };

    $scope.sortData = function (headerKey, sortOrder) {
      var header = $scope.value.headers.find(function (h) {
        return h.key === headerKey;
      });

      if (header) {
        $scope.value.data.sort(function (a, b) {
          var valueA = a[header.key];
          var valueB = b[header.key];

          if (header.dataType === "string") {
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
            if (sortOrder === "asc") {
              return valueA.localeCompare(valueB);
            } else if (sortOrder === "desc") {
              return valueB.localeCompare(valueA);
            }
          } else if (header.dataType === "number") {
            if (sortOrder === "first-last") {
              return valueA - valueB;
            } else if (sortOrder === "last-first") {
              return valueB - valueA;
            }
          }
          return 0;
        });
      }
    };

    $scope.getDataType = function (selectedHeader, type) {
      var findIndex = $scope.value.headers.findIndex(function (e) {
        return e.key == selectedHeader;
      });

      if (findIndex !== -1) {
        if ($scope.value.headers[findIndex].dataType === type) {
          return true;
        }
      }
      return false;
    };

    $scope.toggleSortTemplateNew = function () {
      $scope.showSortTemplate = false;
    };

    $scope.toggleSortTemplate = function (header, action) {
      if (action === "pull") {
        $scope.selectedHeader.splice(header, 1);

        if ($scope.selectedHeader.length === 0) {
          $scope.showSortTemplate = false;
          $scope.showSortingPopup = true;
        }
      } else {
        $scope.selectedHeader.push(header);
        $scope.showSortTemplate = true;
      }
    };

    $scope.$watch(
      "value",
      function (newValue) {
        if (newValue) {
          // Update the selectedHeader array or perform any necessary operations
        }
      },
      true
    );

    $scope.getHeaders = function () {
      if ($scope.value) {
        return $scope.value.headers.filter(
          (item) => !$scope.selectedHeader.includes(item)
        );
      }
    };

    $scope.showSortTemplate = false;
  },
});
angular.module('cr-grid').component('searchIcon', {
 
    template: '<span class="material-icons">search</span>',
    controller: function () {
      const ctrl = this;
      ctrl.issearchIconOpen = false;
      ctrl.toggleNavBar = function () {
        ctrl.isNavBarOpen = !ctrl.isNavBarOpen;
      };
    },
  
});