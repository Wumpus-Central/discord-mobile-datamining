// === Module 17011: ConjureTodoState ===

// Module 17011 (ConjureTodoState)
import ConjureChatStore from "ConjureChatStore" /* 13073 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 16965 */;
import size from "module_2" /* 2 */;

const turnSettled = ConjureChatStore.turnSettled;
let result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureTodoState.tsx");

export function todoMark(status, flag2) {
  if ("completed" === status) {
    let str = status;
  } else {
    str = "unfinished";
  }
  return str;
}
export const todoLabel = function todoLabel(activeForm, todoMarkResult) {
  if ("in_progress" === todoMarkResult) {
    if (null != activeForm.activeForm) {
      if ("" !== activeForm.activeForm) {
        let text = activeForm.activeForm;
      }
      return text;
    }
  }
  text = activeForm.text;
};
export const checklistLive = function checklistLive(memo) {
  const tmp = turnSettled(memo);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = true !== memo.stopRequested;
  }
  return tmp2;
};
export const unfinishedTodoCount = function unfinishedTodoCount(arr) {
  return arr.filter((status) => "completed" !== status.status).length;
};
export const messageChecklist = function messageChecklist(role) {
  if ("assistant" !== role.role) {
    return null;
  } else {
    let latestTodosResult = ConjureTimelineTree.latestTodos(role.steps);
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
export const supersededChecklists = function supersededChecklists(memo) {
  const set = new Set();
  let diff = memo.length - 1;
  let flag = false;
  if (0 <= diff) {
    do {
      let tmp2 = memo[diff];
      let tmp3 = null != tmp2;
      if (tmp3) {
        let tmp6 = null;
        if ("assistant" === tmp2.role) {
          let obj2 = ConjureTimelineTree;
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
export const checklistExpanded = function checklistExpanded(c14, render_id, set) {
  value = c14.get(render_id);
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