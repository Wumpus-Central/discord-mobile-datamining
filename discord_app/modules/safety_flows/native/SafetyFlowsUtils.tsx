// === Module 18065: SafetyFlowsUtils ===

// Module 18065 (SafetyFlowsUtils)
import intl2 from "intl" /* 1126 */;
import _modDef2787 from "module_2787" /* 2787 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import AssetRegistryDefault from "AssetRegistry" /* 4805 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import types from "types" /* 18059 */;
import constants from "constants" /* 18060 */;
import SafetyFlowsActionCreators from "SafetyFlowsActionCreators" /* 18061 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, closure_1, closure_2, data, navigation;

function fetchAndUpdateTask() {
  return obj(...arguments);
}
let obj = function _fetchAndUpdateTask() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let value;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            value = undefined;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj3.getCurrentTask(), done: false };
            obj3 = SafetyFlowsActionCreators;
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          if (null != value) {
            closure_0(value);
          }
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
function navigateToScreenForTask(arr, task_type) {
  let intl;
  if (null == task_type) {
    obj = ModalActionCreatorsDefault;
    obj.popWithKey(constants.SAFETY_FLOWS_MODAL_KEY);
    const obj2 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS", icon: AssetRegistryDefault, content: intl.string(_modDef2787["/fHz9S"]) };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    open(obj2);
  } else {
    task_type = task_type.task_type;
    const tmp17 = types.TASK_TYPE_TO_SCREENS[task_type];
    let tmp5 = null;
    if (null != tmp17) {
      let tmp = tmp17;
      if (task_type === types.TaskType.EMAIL_VERIFICATION) {
        const currentUser = UserStore.getCurrentUser();
        let email;
        if (currentUser != null) {
          email = currentUser.email;
        }
        tmp = tmp17;
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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let setTask;
  obj = navigation(setTask[12]);
  const cResult = obj.c(5);
  const obj2 = navigation(setTask[13]);
  navigation = obj2.useNavigation();
  const obj3 = navigation(setTask[14]);
  const safetyFlowTask = obj3.useSafetyFlowTask();
  const task = safetyFlowTask.task;
  setTask = safetyFlowTask.setTask;
  if (cResult[0] === navigation) {
    if (cResult[1] === setTask) {
      if (cResult[2] === task.flow_context.flow_id) {
        let tmp4;
        if (cResult[3] === task.task_id) {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  let closure_0 = _asyncToGenerator(async (data) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj7;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              data = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { task_id: closure_1.task_id, flow_id: closure_1.flow_context.flow_id, data };
              const obj5 = { value: obj7.completeTask(obj4), done: false };
              obj7 = data(setTask[4]);
              return obj5;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c3 = 2;
              c4 = 1;
              const obj8 = { value: closure_2_6(closure_2), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            data = value;
            closure_2_8(data, data);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    })();
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[0] = navigation;
  cResult[1] = setTask;
  cResult[2] = task.flow_context.flow_id;
  cResult[3] = task.task_id;
  cResult[4] = fn;
  tmp4 = fn;
}) : (() => {
  let setTask;
  obj = navigation(setTask[13]);
  navigation = obj.useNavigation();
  const obj2 = navigation(setTask[14]);
  const safetyFlowTask = obj2.useSafetyFlowTask();
  const task = safetyFlowTask.task;
  setTask = safetyFlowTask.setTask;
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (data) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj7;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              data = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { task_id: closure_1.task_id, flow_id: closure_1.flow_context.flow_id, data };
              const obj5 = { value: obj7.completeTask(obj4), done: false };
              obj7 = data(setTask[4]);
              return obj5;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c3 = 2;
              c4 = 1;
              const obj8 = { value: closure_2_6(closure_2), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            data = value;
            closure_2_8(data, data);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    })();
  });
  const items = [navigation, task, setTask];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items);
});
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsUtils.tsx");

export { getScreensForTaskType };
export { fetchAndUpdateTask };
export { navigateToScreenForTask };
export const useOnTaskComplete = tmp2;