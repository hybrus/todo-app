
### Design

The Todo App consists of a single-page interface with two main tabs: Pending and Completed. Each tab displays a list of tasks, with completed tasks displayed separately from pending tasks.

The user interface allows users to perform the following tasks:

* Add a new task: Users can add a new task by typing in the input field and pressing the "Add" button. The new task will be added to the bottom of the pending tasks list.
* Check a task: Users can check a task by clicking on the checkbox next to the task name. Checked tasks will be moved to the completed tasks list.
* Uncheck a task: Users can uncheck a task by clicking on the checkbox again. Unchecked tasks will be moved back to the pending tasks list.
* Persist task state: The state of the tasks is stored across browser sessions, so users can close the application and come back to it later to find their tasks still in the same state.

### Functionality

The Todo App allows users to manage their tasks in the following ways:

* Add new tasks: Users can add new tasks to the pending tasks list by typing in the input field and pressing the "Add" button.
* Check tasks: Users can mark tasks as completed by clicking on the checkbox next to the task name. Checked tasks will be moved to the completed tasks list.
* Uncheck tasks: Users can mark tasks as pending again by clicking on the checkbox again. Unchecked tasks will be moved back to the pending tasks list.
* Persist task state: The state of the tasks is stored across browser sessions using the browser's local storage.

### Usage

To use the Todo App, users can download the repository and run the `npm install` command to install the required dependencies. Once the dependencies have been installed, users can run the application using the `npm run dev` command.

Once the application is running, users can add new tasks to the pending tasks list by typing in the input field and pressing the "Add" button. Users can then mark tasks as completed by clicking on the checkbox next to the task name. Checked tasks will be moved to the completed tasks list. Similarly, users can mark tasks as pending again by clicking on the checkbox again. Unchecked tasks will be moved back to the pending tasks list.

The state of the tasks is stored across browser sessions, so users can close the application and come back to it later to find their tasks still in the same state.

### Limitations

The Todo App is a simple demo that is designed to illustrate how to build a task management application using Vue.js. As such, it has several limitations, including:

* No clear all completed tasks: There is no option to clear all completed tasks at once.
* No edit option: Users cannot edit an existing task.
* No delete option: Users cannot delete an existing task intead they will need to mark the task as completed.
* Mobile responsiveness: The application is not designed to be mobile responsive, and may not work well on small screens or touch devices.
