// discord_app/modules/vibegrations/lib/VibegrationsTodoAgents.tsx
import VibegrationsTimelineTree from "VibegrationsTimelineTree.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTodoAgents.tsx");

export const MAX_SHOWN_AGENTS = 3;
export const runningTodoAgents = function runningTodoAgents(tasks) {
  const items = [];
  const iter = tasks[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("running" === nextResult.task.status) {
      let obj2 = { key: null, name: null, task: null, todoId: null };
      obj2.key = tmp2.taskId;
      let taskId = tmp2.task.helperName;
      if (taskId == null) {
        taskId = tmp2.taskId;
      }
      obj2.name = taskId;
      let obj = VibegrationsTimelineTree;
      obj2.task = obj.describeNode(tmp2.task);
      obj2.todoId = tmp2.task.todoId;
      let arr = items.push(obj2);
    }
    continue;
  }
  return items;
};
export const groupAgentsByTodo = function groupAgentsByTodo(items) {
  const map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.todoId) {
      if ("" !== tmp2.todoId) {
        value = map.get(tmp2.todoId);
        let arr = value;
        if (null != value) {
          let arr2 = arr.push(tmp2);
        } else {
          items = [tmp2];
          let result = map.set(tmp2.todoId, items);
        }
      }
    }
    continue;
  }
  return map;
};
export const splitAgentOverflow = function splitAgentOverflow(agents) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 3;
  }
  if (agents.length <= num) {
    const obj2 = { shown: agents, overflow: 0 };
    let obj = obj2;
  } else {
    obj = { shown: agents.slice(0, num), overflow: agents.length - num };
  }
  return obj;
};
