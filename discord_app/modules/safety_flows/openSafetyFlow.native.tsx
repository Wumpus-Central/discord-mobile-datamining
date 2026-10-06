// === Module 18103: openSafetyFlow ===

// Module 18103 (openSafetyFlow)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import size from "module_2" /* 2 */;

let c6;

let obj = function _openSafetyFlow() {
  obj = _asyncToGenerator(async () => {
    let closure_3;
    let closure_4;
    let obj11;
    let obj2;
    let obj6;
    let requiredAction;
    let task;
    function getInitialScreenForTask(task_type) {
      let UPDATE_APP;
      if (task_type.task_type === closure_1_0(initialScreen[3]).TaskType.AGE_VERIFICATION) {
        UPDATE_APP = closure_1_0(initialScreen[3]).SafetyFlowScreens.AGE_VERIFICATION;
      } else if (task_type.task_type === closure_1_0(initialScreen[3]).TaskType.PARENTAL_CONSENT_CONNECTION) {
        UPDATE_APP = closure_1_0(initialScreen[3]).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION;
      } else if (task_type.task_type === closure_1_0(initialScreen[3]).TaskType.APP_STORE_PARENTAL_REVOCATION) {
        UPDATE_APP = closure_1_0(initialScreen[3]).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION;
      } else if (null != closure_1_0(initialScreen[3]).TASK_TYPE_TO_SCREENS[task_type.task_type]) {
        UPDATE_APP = closure_1_0(initialScreen[3]).SafetyFlowScreens.OVERVIEW;
      } else {
        UPDATE_APP = closure_1_0(initialScreen[3]).SafetyFlowScreens.UPDATE_APP;
      }
      return UPDATE_APP;
    }
    let closure_0 = arg0;
    if (1 === c6) {
      if (arg0 === 1) {
        let c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        task = requiredAction;
        if (requiredAction == null) {
          task = closure_131_4.getAction();
        }
        if (task === closure_131_5.REQUIRE_SAFETY_FLOWS) {
          let c5 = 1;
          c6 = 3;
          c7 = 1;
          const obj8 = { value: obj11.getCurrentTask(), done: false };
          obj11 = closure_131_0(closure_131_2[6]);
          return obj8;
        } else {
          const obj10 = closure_131_1(closure_131_2[4]);
          obj10.popWithKey(closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY);
        }
      }
    } else if (2 === c6) {
      c5 = 0;
      const pushLazy2 = closure_131_1(closure_131_2[4]).pushLazy;
      const obj9 = { task: null, initialScreen: closure_131_0(closure_131_2[3]).SafetyFlowScreens.ERROR };
      const tmp32 = closure_131_1(closure_131_2[4]);
      const tmp37 = closure_131_0(closure_131_2[9])(closure_131_2[8], closure_131_2.paths);
      pushLazy2(tmp37, obj9, closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY);
    } else {
      if (3 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          task = value;
          if (null == task) {
            c5 = 0;
            c7 = 3;
            return { value: "IconComponent", done: null };
          } else if (task.task_type === closure_131_0(closure_131_2[3]).TaskType.APP_STORE_PARENTAL_REVOCATION) {
            c6 = 4;
            c7 = 1;
            const obj13 = { value: obj6.settleAppStoreAgeSignalReport(), done: false };
            obj6 = closure_131_0(closure_131_2[7]);
            return obj13;
          }
        }
      } else if (4 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          c6 = 5;
          c7 = 1;
          const obj15 = { value: obj2.getCurrentTask(), done: false };
          obj2 = closure_131_0(closure_131_2[6]);
          return obj15;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        task = value;
        if (null == value) {
          c5 = 0;
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      }
      let initialScreen = getInitialScreenForTask(task);
      const pushLazy = closure_131_1(closure_131_2[4]).pushLazy;
      const obj16 = { task, initialScreen };
      const tmp14 = closure_131_1(closure_131_2[4]);
      const tmp19 = closure_131_0(closure_131_2[9])(closure_131_2[8], closure_131_2.paths);
      pushLazy(tmp19, obj16, closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY);
      c5 = 0;
    }
    await "IconComponent";
    initialScreen = tmp4;
    let obj5 = closure_0;
    if (closure_0 === undefined) {
      obj5 = {};
    }
    requiredAction = obj5.requiredAction;
    return "Reflect";
  });
  return obj(...arguments);
};
const UserRequiredActions = Constants.UserRequiredActions;
const result = size.fileFinishedImporting("modules/safety_flows/openSafetyFlow.native.tsx");

export const openSafetyFlow = function openSafetyFlow() {
  return obj(...arguments);
};