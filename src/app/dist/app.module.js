"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var forms_2 = require("@angular/forms");
var template_forms_component_1 = require("./template-forms/template-forms.component");
var reactive_form_component_1 = require("./reactive-form/reactive-form.component");
var material_forms_component_1 = require("./material-forms/material-forms.component");
var animations_1 = require("@angular/platform-browser/animations");
var card_1 = require("@angular/material/card");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                template_forms_component_1.TemplateFormsComponent,
                reactive_form_component_1.ReactiveFormComponent,
                material_forms_component_1.MaterialFormsComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                card_1.MatCardModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
