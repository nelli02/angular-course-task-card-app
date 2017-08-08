"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_1 = require('./model/task');
var AppComponent = (function () {
    function AppComponent() {
        this.tasks = [
            new task_1.Task("Buy a monkey", false, false),
            new task_1.Task("Walk the Turtle", false, false),
            new task_1.Task("Walk me", true, false),
            new task_1.Task("Understand angular", false, false),
            new task_1.Task("Create the employee portal", false, false)
        ];
        // this is a temporary storage but enough to demonstrate 2 way binding...
        this.currentTask = new task_1.Task(null, false, false);
    }
    AppComponent.prototype.addTask = function () {
        //let creates a local variable and assigns the specified value to it
        //we need the local var to add to the array instead of currentTask since when currentTask
        //value is changed in the front-end, due to the fact that is strongly linked both to the form data 
        //and the model data, it will change all references to the last typed task
        //so you will add the correct number of tasks but they will all be assigned to 
        //the last task name
        var task = new task_1.Task(this.currentTask.content, this.currentTask.completed, false);
        //adds the currentTask to the tasks array
        this.tasks.push(task);
        this.currentTask = new task_1.Task(null, false, false);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map