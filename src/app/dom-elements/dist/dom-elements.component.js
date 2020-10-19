"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DomElementsComponent = void 0;
var core_1 = require("@angular/core");
var DomElementsComponent = /** @class */ (function () {
    function DomElementsComponent() {
        this.clickCounter = 0;
        this.dblClickCounter = 0;
        this.name = '';
        this.number = 0;
    }
    DomElementsComponent.prototype.ngOnInit = function () {
        this.click();
        this.dblclick();
        this.blur();
        this.focus();
        this.scroll();
        this.pipes(name);
        this.date();
    };
    DomElementsComponent.prototype.click = function () {
        this.clickCounter += 1;
    };
    DomElementsComponent.prototype.dblclick = function () {
        this.dblClickCounter += 1;
    };
    DomElementsComponent.prototype.blur = function () {
        console.log('Blur event is working');
    };
    DomElementsComponent.prototype.focus = function () {
        console.log('Focus event is working');
    };
    DomElementsComponent.prototype.scroll = function () {
        console.log('Scroll is working');
    };
    DomElementsComponent.prototype.pipes = function (name) {
        this.name = name;
    };
    DomElementsComponent.prototype.numbers = function (currency) {
        this.number = currency;
    };
    DomElementsComponent.prototype.date = function () {
        this.currentDate = Date.now();
    };
    DomElementsComponent = __decorate([
        core_1.Component({
            selector: 'app-dom-elements',
            templateUrl: './dom-elements.component.html',
            styleUrls: ['./dom-elements.component.css']
        })
    ], DomElementsComponent);
    return DomElementsComponent;
}());
exports.DomElementsComponent = DomElementsComponent;
