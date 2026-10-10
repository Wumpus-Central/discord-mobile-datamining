// === Module 18633: SafetyFlowsUtils ===

// Module 18633 (SafetyFlowsUtils)
import util from "util" /* 1126 */;
import _modDef2862 from "module_2862" /* 2862 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import types from "types" /* 18627 */;
import constants from "constants" /* 18628 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

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
  await require("SafetyFlowsActionCreators").getCurrentTask();
  closure_129_1 = value;
  if (null != closure_129_1) {
    closure_129_0(closure_129_1);
  }
  return closure_129_1;
};
function navigateToScreenForTask(arr, task_type) {
  if (null == task_type) {
    ModalActionCreatorsDefault.popWithKey(constants.SAFETY_FLOWS_MODAL_KEY);
    const obj3 = { text: null, variant: "success" };
    const intl = util.intl;
    obj3.text = intl.string(_modDef2862["/fHz9S"]);
    ToastActionCreatorsDefault.open("SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS", obj3);
  } else {
    task_type = task_type.task_type;
    const tmp16 = types.TASK_TYPE_TO_SCREENS[task_type];
    let tmp5 = null;
    if (null != tmp16) {
      let tmp = tmp16;
      if (task_type === types.TaskType.EMAIL_VERIFICATION) {
        const currentUser = UserStore.getCurrentUser();
        let email;
        if (currentUser != null) {
          email = currentUser.email;
        }
        tmp = tmp16;
        if (null != email) {
          const items = [types.SafetyFlowScreens.VERIFY_EMAIL];
          tmp = items;
        }
      }
      tmp5 = tmp;
    }
    if (null != tmp5) {
      arr = arr.push(tmp5[0]);
    } else {
      arr.push(types.SafetyFlowScreens.UPDATE_APP);
    }
  }
}
const ReactCompilerGating = fn(558);
function getScreensForTaskType(task_type) {
  const tmp3 = types.TASK_TYPE_TO_SCREENS[task_type];
  let tmp4 = null;
  if (null != tmp3) {
    let tmp5 = tmp3;
    if (task_type === types.TaskType.EMAIL_VERIFICATION) {
      const currentUser = UserStore.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      tmp5 = tmp3;
      if (null != email) {
        const items = [types.SafetyFlowScreens.VERIFY_EMAIL];
        tmp5 = items;
      }
    }
    tmp4 = tmp5;
  }
  return tmp4;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsUtils.tsx");

export { getScreensForTaskType };
export { fetchAndUpdateTask };
export { navigateToScreenForTask };
export const useOnTaskComplete = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnTaskComplete() {
  const cResult = require("c").c(5);
  let obj = require("c");
  const navigation = require("useNavigation").useNavigation();
  _require = navigation;
  let obj2 = require("useNavigation");
  const safetyFlowTask = require("SafetyFlowsTaskContext").useSafetyFlowTask();
  const task = safetyFlowTask.task;
  setTask = safetyFlowTask.setTask;
  if (cResult[0] === navigation) {
    if (cResult[1] === setTask) {
      if (cResult[2] === task.flow_context.flow_id) {
        if (cResult[3] === task.task_id) {
          let tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  _require = asyncGeneratorStep(async (data) => {
    c3 = 0;
    c4 = 0;
    return (async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp2;
              closure_1 = tmp5;
              closure_129_0 = undefined;
              const obj4 = { task_id: closure_1.task_id, flow_id: closure_1.flow_context.flow_id, data };
              c3 = 1;
              c4 = 1;
              const obj5 = { value: data(setTask[4]).completeTask(obj4), done: false };
              return obj5;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c3 = 2;
              c4 = 1;
              const obj8 = { value: fetchAndUpdateTask(closure_2), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = value;
            navigateToScreenForTask(data, closure_129_0);
            c4 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp15) {
          c4 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  function t0() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = navigation;
  cResult[1] = setTask;
  cResult[2] = task.flow_context.flow_id;
  cResult[3] = task.task_id;
  cResult[4] = t0;
  tmp4 = t0;
}) : (function useOnTaskComplete() {
  const navigation = require("useNavigation").useNavigation();
  _require = navigation;
  let obj = require("useNavigation");
  const safetyFlowTask = require("SafetyFlowsTaskContext").useSafetyFlowTask();
  const task = safetyFlowTask.task;
  setTask = safetyFlowTask.setTask;
  _require = asyncGeneratorStep(async (data) => {
    c3 = 0;
    c4 = 0;
    return (async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp2;
              closure_1 = tmp5;
              closure_129_0 = undefined;
              const obj4 = { task_id: closure_1.task_id, flow_id: closure_1.flow_context.flow_id, data };
              c3 = 1;
              c4 = 1;
              const obj5 = { value: data(setTask[4]).completeTask(obj4), done: false };
              return obj5;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c3 = 2;
              c4 = 1;
              const obj8 = { value: fetchAndUpdateTask(closure_2), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = value;
            navigateToScreenForTask(data, closure_129_0);
            c4 = 3;
            return { value: "IconComponent", done: "+51" };
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
});