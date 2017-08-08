import { Component } from '@angular/core';
import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css']
})

export class AppComponent {
    private tasks = [ 
        new Task("Buy a monkey", false, false), 
        new Task("Walk the Turtle", false, false),
        new Task("Walk me", true, false),
        new Task("Understand angular", false, false),
        new Task("Create the employee portal", false, false)
    ]

    // this is a temporary storage but enough to demonstrate 2 way binding...
    private currentTask = new Task(null, false, false);

    addTask(){
        //let creates a local variable and assigns the specified value to it
        //we need the local var to add to the array instead of currentTask since when currentTask
        //value is changed in the front-end, due to the fact that is strongly linked both to the form data 
        //and the model data, it will change all references to the last typed task
        //so you will add the correct number of tasks but they will all be assigned to 
        //the last task name
        let task = new Task(this.currentTask.content, this.currentTask.completed, false);
        //adds the currentTask to the tasks array
        this.tasks.push(task);
        this.currentTask = new Task(null, false, false);
    }
}