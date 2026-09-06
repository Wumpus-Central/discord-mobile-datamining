// === Module 17873: SafetyFlowsUtils ===

// Module 17873 (SafetyFlowsUtils)
import util from "util" /* 1114 */;
import _modDef2690 from "module_2690" /* 2690 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import _modDef9566 from "module_9566" /* 9566 */;
import types from "types" /* 17867 */;
import constants from "constants" /* 17868 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function fetchAndUpdateTask() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _fetchAndUpdateTask() {
  closure_1 = tmp2;
  closure_129_0 = closure_0;
  closure_129_1 = await require("SafetyFlowsActionCreators").getCurrentTask();
  if (null != closure_129_1) {
    closure_129_0(closure_129_1);
  }
  return closure_129_1;
};
function navigateToScreenForTask(arr, task_type) {
  if (null == task_type) {
    let obj = ModalActionCreatorsDefault;
    obj.popWithKey(constants.SAFETY_FLOWS_MODAL_KEY);
    obj = { key: "SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS", icon: _modDef9566, content: null };
    const intl = util.intl;
    obj.content = intl.string(_modDef2690["/fHz9S"]);
    ToastActionCreatorsDefault.open(obj);
  } else {
    task_type = task_type.task_type;
    const tmp16 = types.TASK_TYPE_TO_SCREENS[task_type];
    let tmp5 = null;
    if (null != tmp16) {
      let tmp = tmp16;
      if (task_type === tmp14(17867).TaskType.EMAIL_VERIFICATION) {
        const currentUser = UserStore.getCurrentUser();
        let email;
        if (currentUser != null) {
          email = currentUser.email;
        }
        tmp = tmp16;
        if (null != email) {
          const items = [tmp14(17867).SafetyFlowScreens.VERIFY_EMAIL];
          tmp = items;
        }
      }
      tmp5 = tmp;
    }
    if (null != tmp5) {
      arr.push(tmp5[0]);
    } else {
      arr.push(tmp14(17867).SafetyFlowScreens.UPDATE_APP);
    }
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsUtils.tsx");

export const getScreensForTaskType = function getScreensForTaskType(task_type) {
  const tmp3 = types.TASK_TYPE_TO_SCREENS[task_type];
  let tmp4 = null;
  if (null != tmp3) {
    let tmp5 = tmp3;
    if (task_type === tmp(17867).TaskType.EMAIL_VERIFICATION) {
      const currentUser = UserStore.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      tmp5 = tmp3;
      if (null != email) {
        const items = [tmp(17867).SafetyFlowScreens.VERIFY_EMAIL];
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
  const navigation = require("useNavigation").useNavigation();
  _require = navigation;
  let obj = require("useNavigation");
  const safetyFlowTask = require("SafetyFlowsTaskContext").useSafetyFlowTask();
  const task = safetyFlowTask.task;
  setTask = safetyFlowTask.setTask;
  _require = asyncGeneratorStep(async (data) => {
    c3 = 0;
    c4 = 0;
    return (async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp2;
              closure_1 = tmp5;
              closure_129_0 = undefined;
              const obj1 = { task_id: closure_1.task_id, flow_id: closure_1.flow_context.flow_id, data };
              c3 = 1;
              c4 = 1;
              const obj2 = { value: data(setTask[4]).completeTask(obj1), done: false };
              return obj2;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c3 = 2;
              c4 = 1;
              const obj4 = { value: fetchAndUpdateTask(closure_2), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = value;
            navigateToScreenForTask(data, closure_129_0);
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
  return noop.useCallback(function() {
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