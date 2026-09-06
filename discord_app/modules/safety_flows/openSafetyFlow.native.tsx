// discord_app/modules/safety_flows/openSafetyFlow.native.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/UserRequiredActionStore.tsx";
import { UserRequiredActions } from "../../Constants.tsx";

const require = arg1;
function _openSafetyFlow() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function* () {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp7;
              let requiredAction;
              obj1 = requiredAction;
              if (requiredAction === undefined) {
                obj1 = {};
              }
              requiredAction = obj1.requiredAction;
              let lib;
              closure_2 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                lib = requiredAction;
                if (requiredAction == null) {
                  lib = action.getAction();
                }
                if (lib === constants.REQUIRE_SAFETY_FLOWS) {
                  constants = 1;
                  c6 = 3;
                  c7 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = requiredAction(closure_2[6]).getCurrentTask();
                  return obj3;
                } else {
                  lib(closure_2[4]).popWithKey(requiredAction(closure_2[5]).SAFETY_FLOWS_MODAL_KEY);
                  const obj12 = lib(closure_2[4]);
                }
              }
            } else {
              if (2 === tmp7) {
                constants = 0;
                let obj9 = lib(closure_2[4]);
                let obj4 = { task: null, initialScreen: null };
                obj4[1] = requiredAction(closure_2[3]).SafetyFlowScreens.ERROR;
                obj9.pushLazy(
                  requiredAction(closure_2[9])(closure_2[8], closure_2.paths),
                  obj4,
                  requiredAction(closure_2[5]).SAFETY_FLOWS_MODAL_KEY,
                );
                const tmp38 = requiredAction(closure_2[9])(closure_2[8], closure_2.paths);
              } else {
                if (3 === tmp7) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    constants = 0;
                    c7 = 3;
                    const obj5 = { value: null, done: true };
                    obj5[0] = arg1;
                    return obj5;
                  } else {
                    lib = arg1;
                    if (null == lib) {
                      constants = 0;
                      c7 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  }
                } else if (4 === tmp7) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    constants = 0;
                    c7 = 3;
                    let obj6 = { value: null, done: true };
                    obj6[0] = arg1;
                    return obj6;
                  } else {
                    obj1 = requiredAction(closure_2[6]);
                    c6 = 5;
                    c7 = 1;
                    const obj7 = { value: null, done: false };
                    obj7[0] = obj1.getCurrentTask();
                    return obj7;
                  }
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  constants = 0;
                  c7 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  lib = arg1;
                  if (null == arg1) {
                    constants = 0;
                    c7 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                }
                closure_2 = (function getInitialScreenForTask(closure_1) {
                  if (closure_1.task_type === requiredAction(table[3]).TaskType.AGE_VERIFICATION) {
                    let UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.AGE_VERIFICATION;
                  } else if (closure_1.task_type === tmp(tmp2[3]).TaskType.PARENTAL_CONSENT_CONNECTION) {
                    UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION;
                  } else if (closure_1.task_type === tmp(tmp2[3]).TaskType.APP_STORE_PARENTAL_REVOCATION) {
                    UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION;
                  } else if (null != tmp(tmp2[3]).TASK_TYPE_TO_SCREENS[closure_1.task_type]) {
                    UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.OVERVIEW;
                  } else {
                    UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.UPDATE_APP;
                  }
                  return UPDATE_APP;
                })(lib);
                obj4 = lib(closure_2[4]);
                const obj8 = { task: null, initialScreen: null };
                obj8[0] = lib;
                obj8[1] = closure_2;
                obj4.pushLazy(
                  requiredAction(closure_2[9])(closure_2[8], closure_2.paths),
                  obj8,
                  requiredAction(closure_2[5]).SAFETY_FLOWS_MODAL_KEY,
                );
                constants = 0;
                const tmp21 = requiredAction(closure_2[9])(closure_2[8], closure_2.paths);
              }
              obj6 = requiredAction(closure_2[7]);
              c6 = 4;
              c7 = 1;
              obj9 = { value: null, done: false };
              obj9[0] = obj6.settleAppStoreAgeSignalReport();
              return obj9;
            }
            c7 = 3;
          }
        } catch (tmp58) {
          action = tmp58;
          if (tmp4 === constants) {
            c7 = tmp2;
            throw tmp58;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/safety_flows/openSafetyFlow.native.tsx");

export const openSafetyFlow = function openSafetyFlow(arg0) {
  const self = this;
  const apply = _openSafetyFlow.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
