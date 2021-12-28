import React, {Component} from 'react';

class Task_Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.fetchTasks = this.fetchTasks.bind(this);
        this.deleteTasks = this.deleteTasks.bind(this);
        this.addTasks = this.addTasks.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
    }

    fetchTasks() {
        fetch("/tasks")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network Error");
            })
            .then(response => {
                this.setState({
                    tasks: response
                });
            })
            .catch(err => )
    }

    deleteTasks(id) {
        fetch("/tasks/" + id, {
                method: "delete"
            })
            .then(response => {
                if (response.ok) {
                    this.fetchTasks();
                    return response.json();
                }
                else {
                    throw new Error("Network Error");
                }
            })
            .catch(error => message.error("Error: " + error))
    }

    addTasks(value) {
        fetch("/tasks", {
                method: "post",
                body: JSON.stringify(value),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (response.ok) {
                    this.fetchTasks();
                    return response.json();
                }
                else {
                    throw new Error("Network Error");
                }
            })
            .catch(error => message.error("Error: " + error))
    }



    componentDidMount() {
        this.fetchTasks();
    }

    renderTasks() {
        const shown = (
            this.tasks.map((task) => {
                const status = task.is_done
                    ? (<span class="fa fa-check"></span>)
                    : (<span class="fa fa-times"></span>);
                return (
                    <tr>
                        <td>{task.task_name}</td>
                        <td>
                            <span class="badge badge-pills badge-info">
                                {task.tag}
                            </span>
                        </td>
                        <td>status</td>
                        <td>{task.user_id}</td>
                        <td>
                            <button>Show Tasks</button>
                        </td>
                        <td>
                            <button>Edit Tasks</button>
                        </td>
                        <td>
                            <button onClick={this.deleteTasks}>Delete Tasks</button>
                        </td>
                    </tr>
                );
            })
        );
        return (
            <table class="table table-primary table-striped">
                <thead>
                    <tr>
                    <th>Task name</th>
                    <th>Tag</th>
                    <th>Status</th>
                    <th>User Id</th>
                    <th colspan="3"></th>
                    </tr>
                </thead>
                <tbody>
                    {shown}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div>
                <Header />
                <this.renderTasks />
            </div>
        )
    }
}
export default Task_Main;