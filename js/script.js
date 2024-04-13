let input = document.querySelector("form textarea");
let add = document.querySelector("form .add");
let tasks = document.querySelector(".tasks");
let taskCount = 0;

add.addEventListener("click", function (e) {
    e.preventDefault();
    taskCount++;

    if (input.value != "") {
        let task = document.createElement("div");
        task.classList.add("task");
        task.dataset.name = `task-${taskCount}`;
        task.classList.add(`task-${taskCount}`);
        let text = document.createElement("div");
        text.classList.add("text");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.check = `check-${taskCount}`;
        checkbox.name = `check-${taskCount}`;
        checkbox.id = `task-${taskCount}`;
        let label = document.createElement("label");
        label.classList.add(`check-${taskCount}`);
        label.for = `task-${taskCount}`;
        let labelText = document.createTextNode(input.value);
        let del = document.createElement("div");
        del.classList.add("del");
        let span = document.createElement("span");
        span.dataset.class = `task-${taskCount}`;
        let spanText = document.createTextNode("x");
        task.appendChild(text);
        text.appendChild(checkbox);
        text.appendChild(label);
        label.appendChild(labelText);
        task.appendChild(del);
        del.appendChild(span);
        span.appendChild(spanText);
        tasks.appendChild(task);
        span.addEventListener("click", function (e) {
            let delTask = document.querySelector(
                `.tasks .${span.dataset.class}`
            );
            delTask.remove();
        });
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                let taskDone = document.querySelector(
                    `.${checkbox.dataset.check}`
                );
                taskDone.classList.add("done");
            } else if (checkbox.checked === false) {
                let taskDone = document.querySelector(
                    `.${checkbox.dataset.check}`
                );
                taskDone.classList.remove("done");
            }
        });
    }
});
