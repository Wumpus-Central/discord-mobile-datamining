// === Module 17090: fetchAndUpdateTask ===

// Module 17090 (fetchAndUpdateTask)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2597 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import _modDef5260 from "module_5260" /* 5260 */;
import registerAssetDefault from "registerAsset" /* 8764 */;
import TaskType from "TaskType" /* 17084 */;
import SAFETY_FLOWS_MODAL_KEY from "SAFETY_FLOWS_MODAL_KEY" /* 17085 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "noop" /* 19 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
function fetchAndUpdateTask(closure_1_2) {
  const self = this;
  const apply = _fetchAndUpdateTask.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchAndUpdateTask() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      const obj2 = callback(table[4]);
      closure_1 = yield obj2.getCurrentTask();
      if (null != closure_1) {
        callback(closure_1);
      }
      return closure_1;
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function navigateToScreenForTask(closure_1, closure_0) {
  if (null == _require) {
    let obj = _modDef5260;
    obj.popWithKey(SAFETY_FLOWS_MODAL_KEY.SAFETY_FLOWS_MODAL_KEY);
    obj = { key: "SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS", icon: null, content: null };
    obj[1] = registerAssetDefault;
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(messagesProxyDefault["/fHz9S"]);
    dispatcherDefault.open(obj);
  } else {
    const task_type = _require.task_type;
    const tmp16 = TaskType.TASK_TYPE_TO_SCREENS[task_type];
    let tmp5 = null;
    if (null != tmp16) {
      let tmp = tmp16;
      if (task_type === TaskType.TaskType.EMAIL_VERIFICATION) {
        const currentUser = authStore.getCurrentUser();
        let email;
        if (currentUser != null) {
          email = currentUser.email;
        }
        tmp = tmp16;
        if (null != email) {
          const items = [TaskType.SafetyFlowScreens.VERIFY_EMAIL];
          tmp = items;
        }
      }
      tmp5 = tmp;
    }
    if (null != tmp5) {
      importDefault.push(tmp5[0]);
    } else {
      importDefault.push(TaskType.SafetyFlowScreens.UPDATE_APP);
    }
  }
}
const result = require("obj132").fileFinishedImporting("modules/safety_flows/native/SafetyFlowsUtils.tsx");

export const getScreensForTaskType = function getScreensForTaskType(task_type) {
  const tmp3 = TaskType.TASK_TYPE_TO_SCREENS[task_type];
  let tmp4 = null;
  if (null != tmp3) {
    let tmp5 = tmp3;
    if (task_type === TaskType.TaskType.EMAIL_VERIFICATION) {
      const currentUser = authStore.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      tmp5 = tmp3;
      if (null != email) {
        const items = [TaskType.SafetyFlowScreens.VERIFY_EMAIL];
        tmp5 = items;
      }
    }
    tmp4 = tmp5;
  }
  return tmp4;
};
export { fetchAndUpdateTask };
export { navigateToScreenForTask };
export const useOnTaskComplete = function useOnTaskComplete() {
  const navigation = _require(setTask[11]).useNavigation();
  _require = navigation;
  let obj = _require(setTask[11]);
  const safetyFlowTask = _require(setTask[12]).useSafetyFlowTask();
  const task = safetyFlowTask.task;
  setTask = safetyFlowTask.setTask;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp2;
              closure_1 = tmp5;
              let callback;
              obj1 = { task_id: null, flow_id: null, data: null };
              obj1[0] = task.task_id;
              obj1[1] = task.flow_context.flow_id;
              obj1[2] = callback;
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = callback(setTask[4]).completeTask(obj1);
              return obj2;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              c3 = 2;
              c4 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = fetchAndUpdateTask(closure_1_2);
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback = arg1;
            navigateToScreenForTask(callback, callback);
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp15) {
          c4 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  const items = [navigation, task, setTask];
  return React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
};