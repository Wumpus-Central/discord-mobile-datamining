// === Module 16350: VibegrationsTodoState ===

// Module 16350 (VibegrationsTodoState)
import VibegrationsChatStore from "VibegrationsChatStore" /* 12608 */;
import VibegrationsTimelineTree from "VibegrationsTimelineTree" /* 16321 */;
import size from "module_2" /* 2 */;

const turnSettled = VibegrationsChatStore.turnSettled;
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTodoState.tsx");

export function todoMark(status, flag2) {
  if ("completed" === status) {
    let str = status;
  } else {
    str = "unfinished";
  }
  return str;
}
export const checklistLive = function checklistLive(message) {
  const tmp = turnSettled(message);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = true !== message.stopRequested;
  }
  return tmp2;
};
export const unfinishedTodoCount = function unfinishedTodoCount(todos) {
  return todos.filter((status) => "completed" !== status.status).length;
};
export const messageChecklist = function messageChecklist(role) {
  if ("assistant" !== role.role) {
    return null;
  } else {
    let latestTodosResult = VibegrationsTimelineTree.latestTodos(role.steps);
    if (null == latestTodosResult) {
      let todos = null;
      if (null != role.todos) {
        todos = null;
        if (role.todos.length > 0) {
          todos = role.todos;
        }
      }
      latestTodosResult = todos;
    }
    return latestTodosResult;
  }
};
export const supersededChecklists = function supersededChecklists(stateFromStores1) {
  const set = new Set();
  let diff = stateFromStores1.length - 1;
  let flag = false;
  if (0 <= diff) {
    do {
      let tmp2 = stateFromStores1[diff];
      let tmp3 = null != tmp2;
      if (tmp3) {
        let tmp6 = null;
        if ("assistant" === tmp2.role) {
          let obj2 = VibegrationsTimelineTree;
          let latestTodosResult = obj2.latestTodos(tmp2.steps);
          if (null == latestTodosResult) {
            let todos = null;
            if (null != tmp2.todos) {
              todos = null;
              if (tmp2.todos.length > 0) {
                todos = tmp2.todos;
              }
            }
            latestTodosResult = todos;
          }
          tmp6 = latestTodosResult;
        }
        tmp3 = null != tmp6;
      }
      let flag2 = flag;
      if (tmp3) {
        flag2 = true;
        if (flag) {
          let addResult = set.add(tmp2.render_id);
          flag2 = true;
        }
      }
      diff = diff - 1;
      flag = flag2;
    } while (0 <= diff);
  }
  return set;
};
export const checklistExpanded = function checklistExpanded(c6, render_id, set) {
  value = c6.get(render_id);
  if (value == null) {
    value = !set;
  }
  return value;
};
export const toggleChecklist = function toggleChecklist(get, arg1, arg2) {
  const map = new Map(get);
  value = get.get(arg1);
  if (value == null) {
    value = !arg2;
  }
  const result = map.set(arg1, !value);
  return map;
};