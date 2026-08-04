// discord_app/modules/safety_flows/native/SafetyFlowsUtils.tsx
import module_4399 from "module_4399";
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
function fetchAndUpdateTask() {
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
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp2;
              closure_1 = undefined;
              let obj2 = callback(table[4]);
              table = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2.getCurrentTask();
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_1 = arg1;
            if (null != closure_1) {
              callback(closure_1);
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_1;
            return obj;
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  const _fetchAndUpdateTask = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function navigateToScreenForTask(closure_1, closure_0) {
  if (null == closure_0) {
    let obj = importDefault(4399);
    obj.popWithKey(require(16727) /* SAFETY_FLOWS_MODAL_KEY */.SAFETY_FLOWS_MODAL_KEY);
    obj = { key: "SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS", icon: null, content: null };
    obj[1] = importDefault(10370);
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl.string(importDefault(2487)["/fHz9S"]);
    importDefault(3894).open(obj);
  } else {
    const task_type = closure_0.task_type;
    const tmp16 = require(16726) /* TaskType */.TASK_TYPE_TO_SCREENS[task_type];
    let tmp5 = null;
    if (null != tmp16) {
      let tmp = tmp16;
      if (task_type === tmp14(16726).TaskType.EMAIL_VERIFICATION) {
        const currentUser = authStore.getCurrentUser();
        let email;
        if (currentUser != null) {
          email = currentUser.email;
        }
        tmp = tmp16;
        if (null != email) {
          const items = [tmp14(16726).SafetyFlowScreens.VERIFY_EMAIL];
          tmp = items;
        }
      }
      tmp5 = tmp;
    }
    if (null != tmp5) {
      closure_1.push(tmp5[0]);
    } else {
      closure_1.push(tmp14(16726).SafetyFlowScreens.UPDATE_APP);
    }
  }
}
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/safety_flows/native/SafetyFlowsUtils.tsx");

export const getScreensForTaskType = function getScreensForTaskType(task_type) {
  const tmp3 = require(16726) /* TaskType */.TASK_TYPE_TO_SCREENS[task_type];
  let tmp4 = null;
  if (null != tmp3) {
    let tmp5 = tmp3;
    if (task_type === tmp(16726).TaskType.EMAIL_VERIFICATION) {
      const currentUser = authStore.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      tmp5 = tmp3;
      if (null != email) {
        const items = [tmp(16726).SafetyFlowScreens.VERIFY_EMAIL];
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
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let closure_2 = tmp2;
              let closure_1 = tmp5;
              let callback;
              const obj1 = { task_id: null, flow_id: null, data: null };
              obj1[0] = outer1_1.task_id;
              obj1[1] = outer1_1.flow_context.flow_id;
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
              obj4[0] = outer2_6(outer1_2);
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
            outer2_8(callback, callback);
            c4 = 3;
            return { value: "HermesInternal", done: null };
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