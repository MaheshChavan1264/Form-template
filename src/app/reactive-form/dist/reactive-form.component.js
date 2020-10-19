"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReactiveFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ReactiveFormComponent = /** @class */ (function () {
    function ReactiveFormComponent() {
        this.myHobbies = [
            {
                name: 'Sports',
                value: 'sports'
            },
            {
                name: 'Music',
                value: 'music'
            },
            {
                name: 'Movie',
                value: 'movie'
            },
            {
                name: 'Reading',
                value: 'reading'
            },
            {
                name: 'Writing',
                value: 'writing'
            },
        ];
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
        this.createFormInputs();
        this.onSubmit();
    };
    ReactiveFormComponent.prototype.createFormInputs = function () {
        this.personForm = new forms_1.FormGroup({
            hobbies: this.createHobbies(this.myHobbies)
        });
    };
    ReactiveFormComponent.prototype.onSubmit = function () { };
    ReactiveFormComponent.prototype.createHobbies = function (hobbiesInput) {
        var arr = hobbiesInput.map(function (hobby) {
            return new forms_1.FormControl(hobby);
        });
        return new forms_1.FormArray(arr);
    };
    ReactiveFormComponent = __decorate([
        core_1.Component({
            selector: 'app-reactive-form',
            templateUrl: './reactive-form.component.html',
            styleUrls: ['./reactive-form.component.css']
        })
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());
exports.ReactiveFormComponent = ReactiveFormComponent;
