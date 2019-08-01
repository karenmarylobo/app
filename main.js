(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");







var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: 'product',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"],
    },
    {
        path: 'company',
        component: _company_company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"],
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\toverflow-x: hidden;\n}.nav-item{\n\tfont-weight:bold;\n\t color:#204b73 !important;\n\t margin: 10px;\n}.nav-item :hover{\n\t border-bottom: 1px solid #204b73;\n}footer{\n\tcolor: green;\n\tposition: relative;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tpadding: 1rem;\n\tbackground-color: #efefef;\n\ttext-align: center;\n\tmargin-top: 20%;\n}.topbar{\n\twidth: 100%;\n}.searchbox{\n\tdisplay: inline-block; \n\tmargin-left: 20%;\n\tmargin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7QUFDbkIsQ0FBQztDQUNBLGdCQUFnQjtFQUNmLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2QsQ0FDQTtFQUNFLGdDQUFnQztBQUNsQyxDQUNBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULE9BQU87Q0FDUCxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCLENBQ0E7Q0FDQyxXQUFXO0FBQ1osQ0FDQTtDQUNDLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xufS5uYXYtaXRlbXtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0IGNvbG9yOiMyMDRiNzMgIWltcG9ydGFudDtcblx0IG1hcmdpbjogMTBweDtcbn1cbi5uYXYtaXRlbSA6aG92ZXJ7XG5cdCBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIwNGI3Mztcbn1cbmZvb3Rlcntcblx0Y29sb3I6IGdyZWVuO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLXRvcDogMjAlO1xufVxuLnRvcGJhcntcblx0d2lkdGg6IDEwMCU7XG59XG4uc2VhcmNoYm94e1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuXHRtYXJnaW4tbGVmdDogMjAlO1xuXHRtYXJnaW4tdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar\" style=\"display: inline-block\"> \n   <img class=\"logo\" style=\"display: inline-block; \" src=\"./favicon.ico\">\n   <input class=\"form-control col-sm-3 searchbox\"   type=\"text\" name=\"search\" placeholder=\"Search\" >\n   <p class=\"float-right m-3\">items: {{count}} Cart : $${{Price}}</p>\n</div>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n   <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n           <li class=\"nav-item align-left\">\n\t  <a class=\"nav-link\" routerLink=\"/\">Home </a>\n            </li>\n            <li class=\"nav-item\">\n\t   <a class=\"nav-link\"  routerLink=\"/product\">Product</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/company\">Company</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<div class=\"row\">\n   <div class=\"col-md-2\">\n      <app-sidebar></app-sidebar>\n   </div>\n\n   <div class=\"col-md-10\">  \n      <router-outlet></router-outlet>\n   </div>\n</div>\n<footer>\n   {{ footer }}\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _counter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter.service */ "./src/app/counter.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(counterService) {
        this.counterService = counterService;
        this.title = 'my-app';
        this.footer = ' copyrights 2019';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.counterService.count.subscribe(function (c) {
            _this.count = c;
        });
        this.counterService.prices.subscribe(function (p) {
            _this.Price = p;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_counter_service__WEBPACK_IMPORTED_MODULE_2__["CounterService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var _counter_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./counter.service */ "./src/app/counter.service.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_9__["CompanyComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_13__["OrderModule"]
            ],
            providers: [
                _counter_service__WEBPACK_IMPORTED_MODULE_14__["CounterService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nul {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.section_all {\n\tposition: relative;\n\tpadding-top: 35px;\n\tpadding-bottom: 80px;\n\tmin-height: 100vh;\n}\n\n.icon i {\n\tfont-size: 22px;\n\theight: 65px;\n\twidth: 65px;\n\tline-height: 65px;\n\tdisplay: inline-block;\n\tbackground: #fff;\n\tborder-radius: 35px;\n\tcolor: #00bd2a;\n\tbox-shadow: 0 8px 20px -2px rgba(158, 152, 153, 0.5);\n}\n\n.aboutheader .aboutheading {\n\tmax-width: 450px;\n\tfont-size: 24px;\n}\n\n.icon span {\n\tposition: relative;\n\ttop: -10px;\n}\n\n.aboutcontent {\n\tpadding: 28px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixpQkFBaUI7QUFDbEI7O0FBR0E7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLG9EQUFvRDtBQUNyRDs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG51bCB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnNlY3Rpb25fYWxsIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nLXRvcDogMzVweDtcblx0cGFkZGluZy1ib3R0b206IDgwcHg7XG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5cbi5pY29uIGkge1xuXHRmb250LXNpemU6IDIycHg7XG5cdGhlaWdodDogNjVweDtcblx0d2lkdGg6IDY1cHg7XG5cdGxpbmUtaGVpZ2h0OiA2NXB4O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDM1cHg7XG5cdGNvbG9yOiAjMDBiZDJhO1xuXHRib3gtc2hhZG93OiAwIDhweCAyMHB4IC0ycHggcmdiYSgxNTgsIDE1MiwgMTUzLCAwLjUpO1xufVxuXG4uYWJvdXRoZWFkZXIgLmFib3V0aGVhZGluZyB7XG5cdG1heC13aWR0aDogNDUwcHg7XG5cdGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmljb24gc3BhbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAtMTBweDtcbn1cblxuLmFib3V0Y29udGVudCB7XG5cdHBhZGRpbmc6IDI4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\n<section class=\"section_all bg-light\" id=\"about\">\n   <div class=\"container\">\n      <div class=\"row\">\n         <div class=\"col-lg-12\">\n\t<div class=\"section_title_all text-center\">\n\t   <h3 class=\"font-weight-bold\">Stationary World <span class=\"text-custom\"></span></h3>\n\t   <p class=\"section_subtitle mx-auto text-muted\"> <br/> Stationary World is an Indian brand of student stationery products. ITC Limited launched its brand in 2003 with the notebooks category. </p>\n\t   <hr>\n\t</div>\n         </div>\n      </div>\n\n      <div class=\"row vertical_content_manage mt-5\">\n         <div class=\"col-lg-6\">\n\t<div class=\"aboutheader mt-3\">\n\t   <div class=\"about_icon_box\">\n\t   </div>\n\t   <h4 class=\"aboutheading text-capitalize font-weight-bold mt-4\">Our story..</h4>\n\t   <p class=\"text-muted mt-3\">\"ITC Limited\" was incorporated under the name 'Imperial Tobacco' which was later renamed as 'Imperial Tobacco Company of India Limited', succeeding W.D. & H.O. Wills on 24 August 1910 as a British-owned company registered in Calcutta.</p>\n\n\t</div>\n         </div>\n         <div class=\"col-lg-6\">\n\t<div class=\"img_about mt-3\">\n\t   <img src=\"../assets/images/us.jpg\" alt=\"\" class=\"img-fluid mx-auto d-block\">\n\t</div>\n         </div>\n      </div>\n      <br>\n\n      <div class=\"row mt-3\">\n         <div class=\"col-lg-4\">\n\t<div class=\"aboutcontent mt-3\">\n\t   <div class=\"about_detail text-center\">\n\t      <div class=\"icon\">\n\t         <i class=\"fas fa-pencil-alt\"></i>\n\t      </div>\n\t      <h5 class=\"text-dark text-capitalize mt-3 font-weight-bold\">Creative Design</h5>\n\t      <p class=\" mt-3 mb-0 text-muted\">Innovative and attractive product designs have been a goal. </p>\n\t   </div>\n\t</div>\n         </div>\n\n         <div class=\"col-lg-4\">\n\t<div class=\"aboutcontent mt-3\">\n\t   <div class=\"about_detail text-center\">\n\t      <div class=\"icon\">\n\t         <i class=\"fab fa-angellist\"></i>\n\t      </div>\n\t      <h5 class=\"text-dark text-capitalize mt-3 font-weight-bold\">Budget Value</h5>\n\t      <p class=\" mb-0 mt-3 text-muted\">Value for money based prices. </p>\n\t   </div>\n\t</div>\n         </div>\n\n         <div class=\"col-lg-4\">\n\t<div class=\"aboutcontent mt-3\">\n\t   <div class=\" text-center\">\n\t      <div class=\"icon\">\n\t         <i class=\"fas fa-paper-plane\"></i>\n\t      </div>\n\t      <h5 class=\"text-dark text-capitalize mt-3 font-weight-bold\">Quality products </h5>\n\t      <p class=\" mb-0 mt-3 text-muted\">Finest quality production material. </p>\n\t   </div>\n\t</div>\n         </div>\n      </div>\n   </div>\n</section>"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\n\tmargin: 0 auto;\n\tbackground-color: #f3f3f3;\n\tpadding: 20px 50px 40px;\n\tbox-shadow: 1px 4px 10px 1px #aaa;\n\tfont-family: sans-serif;\n}\n\nh2{\n\ttext-align: center;\n\tmargin-bottom: 30px;\n}\n\ninput{\n\tdisplay: block;\n\theight: 32px;\n\tpadding: 6px 16px;\n\twidth: 100%;\n\tborder: none;\n\n}\n\nbutton[type=submit] {\n\tdisplay: block;\n\tmargin: 20px auto 0;\n\twidth: 150px;\n\theight: 40px;\n\tborder-radius: 20px;\n\tborder: none;\n\tcolor: #eee;\n\tfont-weight: 700;\n\tbox-shadow: 1px 4px 10px 1px #aaa;\n\n\tbackground: #207cca; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(to right, #207cca 0%,#9f58a3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#207cca', endColorstr='#9f58a3',GradientType=1 ); /* IE6-9 */\n}\n\n.error{\n\tborder: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLHVCQUF1QjtDQUN2QixpQ0FBaUM7Q0FDakMsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxZQUFZOztBQUViOztBQUNBO0NBQ0MsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osV0FBVztDQUNYLGdCQUFnQjtDQUNoQixpQ0FBaUM7O0NBRWpDLG1CQUFtQixFQUFFLGlCQUFpQixFQUM0QixhQUFhLEVBQ1gsNEJBQTRCO0NBQ2hHLDhEQUE4RCxFQUFFLHFEQUFxRDtDQUNySCxtSEFBbUgsRUFBRSxVQUFVO0FBQ2hJOztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xuXHRtYXJnaW46IDAgYXV0bztcblx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcblx0cGFkZGluZzogMjBweCA1MHB4IDQwcHg7XG5cdGJveC1zaGFkb3c6IDFweCA0cHggMTBweCAxcHggI2FhYTtcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbmgye1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pbnB1dHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogMzJweDtcblx0cGFkZGluZzogNnB4IDE2cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXI6IG5vbmU7XG5cbn1cbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuXHRkaXNwbGF5OiBibG9jaztcblx0bWFyZ2luOiAyMHB4IGF1dG8gMDtcblx0d2lkdGg6IDE1MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGJvcmRlcjogbm9uZTtcblx0Y29sb3I6ICNlZWU7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGJveC1zaGFkb3c6IDFweCA0cHggMTBweCAxcHggI2FhYTtcblxuXHRiYWNrZ3JvdW5kOiAjMjA3Y2NhOyAvKiBPbGQgYnJvd3NlcnMgKi9cblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgIzIwN2NjYSAwJSwgIzlmNThhMyAxMDAlKTsgLyogRkYzLjYtMTUgKi9cblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzIwN2NjYSAwJSwjOWY1OGEzIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMDdjY2EgMCUsIzlmNThhMyAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMjA3Y2NhJywgZW5kQ29sb3JzdHI9JyM5ZjU4YTMnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05ICovXG59XG4uZXJyb3J7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"row\">\n      <div class=\"col-md-8 offset-md-1\">\n\n         <h2 class=\"text-center register-title\" [ngStyle]=\"{color:'blue'}\">Write to us !</h2>\n\n         <form (ngSubmit)=\"form1.valid && onSubmit(form1.value)\" #form1=\"ngForm\">\n\n\t<div class=\"form-group\">\n\t   <label>First Name</label>\n\t   <input class=\"form-control\" type=\"text\" [(ngModel)]=\"user.fname\" [ngClass]=\"{'error': form1.submitted && firstName.invalid}\"#firstName=\"ngModel\"  name=\"fname\" required minlength=\"2\">\n\t          <div *ngIf=\"firstName.invalid && (firstName.dirty) || form1.submitted\">\n\t          <div [ngStyle]=\"{color:'red'}\" *ngIf=\"firstName.hasError('required')\"> required field</div>\n\t      <div [ngStyle]=\"{color:'red'}\" *ngIf=\"firstName.hasError('minlength')\">Minimum 2 Characters required!</div>\n\t   </div>\n\t</div>\n\t<div class=\"form-group\">\n\t   <label>Last Name</label>\n\t   <input class=\"form-control\" type=\"text\" [(ngModel)]=\"user.lname\" [ngClass]=\"{'error': form1.submitted && lastName.invalid}\" #lastName=\"ngModel\"  name=\"lname\" required minlength=\"2\">\n\t          <div *ngIf=\"lastName.invalid && (lastName.dirty) || form1.submitted\">\n\t          <div [ngStyle]=\"{color:'red'}\" *ngIf=\"lastName.hasError('required')\"> required field</div>\n\t      <div [ngStyle]=\"{color:'red'}\" *ngIf=\"lastName.hasError('minlength')\"> Minimum 2 Characters required!</div>\n\t   </div>\n\t</div>\n\t<div class=\"form-group\">\n\t   <label>Email</label>\n\t   <input class=\"form-control\" type=\"text\" [(ngModel)]=\"user.email\" [ngClass]=\"{'error': form1.submitted && email.invalid}\" #email=\"ngModel\"  name=\"email\" required pattern=\"^[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]*\\.([a-z]{2,4})$\">\n\t          <div *ngIf=\"email.invalid && (email.dirty) || form1.submitted\">\n\t          <div [ngStyle]=\"{color:'red'}\" *ngIf=\"email.hasError('required')\"> required field</div>\n\t      <div [ngStyle]=\"{color:'red'}\" *ngIf=\"email.hasError('pattern')\"> Please enter valid email address</div>\n\t   </div>\n\t</div>\n\t<div class=\"form-group\">\n\t   <label>Phone number</label>\n\t   <input class=\"form-control\" type=\"password\" [(ngModel)]=\"user.pass1\" [ngClass]=\"{'error': form1.submitted && passwordOne.invalid}\"#passwordOne=\"ngModel\" name=\"pass1\" required minlength=\"8\">\n\t          <div *ngIf=\"email.invalid && (email.dirty) || form1.submitted\">\n\t          <div [ngStyle]=\"{color:'red'}\" *ngIf=\"passwordOne.hasError('required')\"> required field</div>\n\t      <div [ngStyle]=\"{color:'red'}\" *ngIf=\"passwordOne.hasError('minlength')\">Minimum 8 characters required</div>\n\t   </div>\n\n\t</div>\n\t<div class=\"form-group\">\n\t   <label>Retype Phone number</label>\n\t   <input class=\"form-control\" type=\"password\" appPasswordMatchValidator=\"pass1\"[(ngModel)]=\"user.pass2\" [ngClass]=\"{'error': form1.submitted && passwordTwo.invalid}\" #passwordTwo=\"ngModel\" name=\"pass2\" required minlength=\"8\">\n\t          <div *ngIf=\"passwordTwo.invalid && (passwordTwo.dirty) || form1.submitted\">\n\t          <div [ngStyle]=\"{color:'red'}\" *ngIf=\"passwordTwo.hasError('required')\"> required field</div>\n\t      <div [ngStyle]=\"{color:'red'}\"  *ngIf=\"passwordTwo.hasError('notEqual')\"> password do not match</div>\n\t   </div>\n\n\t</div>\n\t<div class=\"form-group\">\n\t   <label>Your message</label>\n\t   <textarea class=\"form-control\" type=\"text\" [(ngModel)]=\"user.message\" [ngClass]=\"{'error': form1.submitted && message.invalid}\"#message=\"ngModel\"  name=\"message\" required></textarea>\n\t   <div *ngIf=\"message.invalid && (message.dirty) || form1.submitted\">\n\t          <div [ngStyle]=\"{color:'red'}\" *ngIf=\"message.hasError('required')\"> required field</div>\n\t   </div>\n\t</div>\n\t<button type=\"submit\" name=\"submit\">Submit</button>\n         </form>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.user = {
            fname: '',
            lname: '',
            email: '',
            pass1: '',
            pass2: '',
            message: ''
        };
    }
    ContactComponent.prototype.onSubmit = function (value) {
        if (value == "") {
            console.log('empty');
        }
        console.log('you submitted value:', value);
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/counter.service.ts":
/*!************************************!*\
  !*** ./src/app/counter.service.ts ***!
  \************************************/
/*! exports provided: CounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterService", function() { return CounterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CounterService = /** @class */ (function () {
    function CounterService() {
        this.counter = 0;
        this.Price = 0;
        this.count = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.counter);
        this.prices = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.Price);
    }
    CounterService.prototype.nextCount = function () {
        this.count.next(++this.counter);
    };
    CounterService.prototype.increase_quantity = function (temp_product) {
        this.Price += temp_product.price;
        this.prices.next(this.Price);
        console.log(this.prices);
    };
    CounterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CounterService);
    return CounterService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-section{\n\t background:url('bg.png');\n\t background-size: cover;   \n\t height: 500px;\n    width: 100%;\n}\n\n.tag-line{\n\t background-color: white;\n\t text-align: center;\n\t position: absolute;\n    top: 25%;\n    left: 70%;\n    border-radius: 5px;\n    padding: 5px;\n    font-family: monospace;\n    font-weight: bold;\n}\n\n.product-line{\n\tfont-weight: bold;\n\twidth: 28%;\n\tmargin-left: 27%;\n\tborder-bottom: 1px solid grey;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBNEM7RUFDNUMsc0JBQXNCO0VBQ3RCLGFBQWE7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDZCQUE2Qjs7QUFFOUIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctc2VjdGlvbntcblx0IGJhY2tncm91bmQ6dXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5wbmdcIik7XG5cdCBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgIFxuXHQgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRhZy1saW5le1xuXHQgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdCB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNSU7XG4gICAgbGVmdDogNzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9kdWN0LWxpbmV7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR3aWR0aDogMjglO1xuXHRtYXJnaW4tbGVmdDogMjclO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"img-section\">\n    <p class=\"tag-line align-center\">Change your ideas into success! </p>\n</section>\n<section class=\"products\">\n   <h3 class=\"product-line mt-3 text-center\">Product Range</h3>\n   <br>\n   <div class=\"row\">\n\n      <div class=\"card m-3\" style=\"width: 18rem;\">\n         <img class=\"card-img-top\" src=\"../../assets/images/colors.jpeg\" width=\"250\" height=\"200\" alt=\"Card image cap\">\n         <div class=\"card-body\">\n\t<h5 class=\"card-title\">Colours</h5>\n\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n         <a  routerLink=\"/product\" class=\"btn btn-primary\">Go to products</a>\n         </div>\n   </div>\n\n\n      <div class=\"card m-3\" style=\"width: 18rem;\">\n         <img class=\"card-img-top\" src=\"../../assets/images/notebook.png\" width=\"250\" height=\"200\" alt=\"Card image cap\">\n         <div class=\"card-body\">\n\t<h5 class=\"card-title\">Notebooks</h5>\n\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n         <a  routerLink=\"/product\"class=\"btn btn-primary\">Go to products</a>\n         </div>\n   </div>\n\n\n      <div class=\"card m-3\" style=\"width: 18rem;\">\n         <img class=\"card-img-top\" src=\"../../assets/images/eraser.jpg\" width=\"250\" height=\"200\"  alt=\"Card image cap\">\n         <div class=\"card-body\">\n\t<h5 class=\"card-title\">Erasers</h5>\n\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n         <a  routerLink=\"/product\" class=\"btn btn-primary\">Go to products</a>\n         </div>\n   </div>\n      <div class=\"card m-3\" style=\"width: 18rem;\">\n         <img class=\"card-img-top\" src=\"../../assets/images/eraser.jpg\" width=\"250\" height=\"200\"  alt=\"Card image cap\">\n         <div class=\"card-body\">\n\t<h5 class=\"card-title\">Erasers</h5>\n\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n\t<a  routerLink=\"/product\" class=\"btn btn-primary\">Go to products</a>\n         </div>\n      </div>\n   </div>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\tmargin-top:10px;\n}\n.box {\n\tdisplay: grid;\n\tgrid-gap:20px;\n\tgrid-template-columns: 200px 200px 200px ;\n}\n.product-column{\n\tmargin: 5px;\n}\n.add-cart{\n\tmargin: 6px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLHlDQUF5QztBQUMxQztBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG5cdG1hcmdpbi10b3A6MTBweDtcbn1cbi5ib3gge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLWdhcDoyMHB4O1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDIwMHB4IDIwMHB4IDtcbn1cbi5wcm9kdWN0LWNvbHVtbntcblx0bWFyZ2luOiA1cHg7XG59XG4uYWRkLWNhcnR7XG5cdG1hcmdpbjogNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <select [(ngModel)]=\"selectedOption\" class=\"form-control col-sm-3 \" >\n      <option [ngValue]=\"undefined\" disabled  selected>Sort by </option>\n      <option *ngFor=\"let option of sortOption\">{{option}}</option>\n   </select>\n   <br>\n   <div class='box'>\n      <div *ngFor=\"let product of arrProducts | orderBy : selectedOption  | paginate: { itemsPerPage: 6, currentPage: p }\" class='card align-center'>\n         <div  class='product-column card-body' >\n\t<a _ngcontent-c2=\"\" href=\"https://placeholder.com\"><img _ngcontent-c2=\"\" src=\"https://via.placeholder.com/150\"></a>\n      </div>\n         <p class=\"card-footer\" >{{product.name}}<b class=\"text-right m-2\">₹ {{product.price}}</b> </p>\n\n         <button  (click)='nextCount(); increase_quantity(product);' type=\"button\" class=\"btn btn-info add-cart\">Add to cart</button>\n      </div>\n\n   </div>\n   <br>\n   <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _counter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../counter.service */ "./src/app/counter.service.ts");




var ProductComponent = /** @class */ (function () {
    function ProductComponent(httpService, counterService) {
        this.httpService = httpService;
        this.counterService = counterService;
        this.p = 1;
        this.sortOption = ['name', 'price'];
    }
    ProductComponent.prototype.nextCount = function () {
        this.counterService.nextCount();
    };
    ProductComponent.prototype.increase_quantity = function (temp_product) {
        this.counterService.increase_quantity(temp_product);
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.get('./assets/products.json').subscribe(function (data) {
            _this.arrProducts = data;
        });
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _counter_service__WEBPACK_IMPORTED_MODULE_3__["CounterService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar navbar-nav  navbar-dark\">\n   <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/\">Home </a>\n   </li>\n   <li   class=\"nav-item\">\n      <a class=\"nav-link\"  routerLink=\"/product\">Product <span class=\"badge badge-pill badge-secondary\">{{arrProducts.length}}</span></a>\n   </li>\n   <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/company\">Company</a>\n   </li>\n   <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n   </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(httpService) {
        this.httpService = httpService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.get('./assets/products.json').subscribe(function (data) {
            _this.arrProducts = data;
        });
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/codemax-pc-25/Workspace/public_html/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map