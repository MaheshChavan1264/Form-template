"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TemplateFormsComponent = void 0;
var core_1 = require("@angular/core");
var TemplateFormsComponent = /** @class */ (function () {
    function TemplateFormsComponent() {
        this.person = {};
        this.submitForm = function (form) { };
        this.clearForm = function (form) {
            form.reset();
            form.submitted = false;
        };
    }
    TemplateFormsComponent.prototype.ngOnInit = function () {
        this.person = {
            firstName: 'Mahesh',
            lastName: 'Chavan'
        };
    };
    TemplateFormsComponent = __decorate([
        core_1.Component({
            selector: 'app-template-forms',
            templateUrl: './template-forms.component.html',
            styleUrls: ['./template-forms.component.css']
        })
    ], TemplateFormsComponent);
    return TemplateFormsComponent;
}());
exports.TemplateFormsComponent = TemplateFormsComponent;
