// discord_app/modules/safety_flows/openSafetyFlow.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserRequiredActionStore from "../../stores/UserRequiredActionStore.tsx";

const require = fn;
let closure_6 = async function _openSafetyFlow() {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          dependencyMap = tmp7;
          let requiredAction;
          let obj6 = closure_0;
          if (closure_0 === undefined) {
            obj6 = {};
          }
          requiredAction = obj6.requiredAction;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "flexDirection", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            let action = requiredAction;
            if (requiredAction == null) {
              action = closure_131_4.getAction();
            }
            if (action === closure_131_5.REQUIRE_SAFETY_FLOWS) {
              c5 = 1;
              c6 = 3;
              c7 = 1;
              const obj9 = { value: closure_131_0(closure_131_2[6]).settleAppStoreConsentReinstatement(), done: false };
              return obj9;
            } else {
              closure_131_1(closure_131_2[4]).popWithKey(closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY);
              const obj15 = closure_131_1(closure_131_2[4]);
            }
          }
        } else {
          if (2 === tmp7) {
            c5 = 0;
            const obj11 = { task: null, initialScreen: null };
            const obj13 = closure_131_1(closure_131_2[4]);
            obj11.initialScreen = closure_131_0(closure_131_2[3]).SafetyFlowScreens.ERROR;
            obj13.pushLazy(
              closure_131_0(closure_131_2[10])(closure_131_2[9], closure_131_2.paths),
              obj11,
              closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY,
            );
            const tmp46 = closure_131_0(closure_131_2[10])(closure_131_2[9], closure_131_2.paths);
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else if (value) {
              c6 = 4;
              c7 = 1;
              const obj14 = { value: closure_131_0(closure_131_2[7]).getCurrentTask(), done: false };
              return obj14;
            } else {
              c5 = 0;
              c7 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else {
            if (4 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                const obj17 = { value, done: true };
                return obj17;
              } else {
                closure_130_1 = value;
                if (null != closure_130_1) {
                  if (!obj22.isAppStoreConsentReinstatementEnabledForSession()) {
                    if (
                      closure_130_1.task_type === closure_131_0(closure_131_2[3]).TaskType.APP_STORE_PARENTAL_REVOCATION
                    ) {
                      c6 = 5;
                      c7 = 1;
                      const obj18 = {
                        value: closure_131_0(closure_131_2[8]).settleAppStoreAgeSignalReport(),
                        done: false,
                      };
                      return obj18;
                    }
                  }
                  obj22 = closure_131_0(closure_131_2[6]);
                }
              }
            } else if (5 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                const obj19 = { value, done: true };
                return obj19;
              } else {
                c6 = 6;
                c7 = 1;
                const obj20 = { value: closure_131_0(closure_131_2[7]).getCurrentTask(), done: false };
                return obj20;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_130_1 = value;
              if (null == value) {
                c5 = 0;
                c7 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            closure_130_2 = (function getInitialScreenForTask(task_type) {
              if (task_type.task_type === closure_1_0(dependencyMap[3]).TaskType.AGE_VERIFICATION) {
                let UPDATE_APP = closure_1_0(dependencyMap[3]).SafetyFlowScreens.AGE_VERIFICATION;
              } else if (task_type.task_type === closure_1_0(dependencyMap[3]).TaskType.PARENTAL_CONSENT_CONNECTION) {
                UPDATE_APP = closure_1_0(dependencyMap[3]).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION;
              } else if (task_type.task_type === closure_1_0(dependencyMap[3]).TaskType.APP_STORE_PARENTAL_REVOCATION) {
                UPDATE_APP = closure_1_0(dependencyMap[3]).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION;
              } else if (null != closure_1_0(dependencyMap[3]).TASK_TYPE_TO_SCREENS[task_type.task_type]) {
                UPDATE_APP = closure_1_0(dependencyMap[3]).SafetyFlowScreens.OVERVIEW;
              } else {
                UPDATE_APP = closure_1_0(dependencyMap[3]).SafetyFlowScreens.UPDATE_APP;
              }
              return UPDATE_APP;
            })(closure_130_1);
            const obj21 = { task: closure_130_1, initialScreen: closure_130_2 };
            const obj7 = closure_131_1(closure_131_2[4]);
            obj7.pushLazy(
              closure_131_0(closure_131_2[10])(closure_131_2[9], closure_131_2.paths),
              obj21,
              closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY,
            );
            c5 = 0;
            const tmp29 = closure_131_0(closure_131_2[10])(closure_131_2[9], closure_131_2.paths);
          }
          c5 = 0;
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
        c7 = 3;
      }
    } catch (tmp66) {
      closure_4 = tmp66;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp66;
      } else {
        c6 = tmp;
      }
    }
  }
};
const UserRequiredActions = fn(1072).UserRequiredActions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/openSafetyFlow.native.tsx");

export function openSafetyFlow() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
