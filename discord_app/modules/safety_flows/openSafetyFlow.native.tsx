// discord_app/modules/safety_flows/openSafetyFlow.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserRequiredActionStore from "../../stores/UserRequiredActionStore.tsx";

const require = fn;
let closure_6 = async function _openSafetyFlow() {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_3 = tmp4;
          dependencyMap = tmp10;
          let requiredAction;
          let obj7 = closure_0;
          if (closure_0 === undefined) {
            obj7 = {};
          }
          requiredAction = obj7.requiredAction;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "flexDirection", done: true };
        }
      } else {
        if (1 === tmp10) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj9 = { value, done: true };
            return obj9;
          } else {
            let action = requiredAction;
            if (requiredAction == null) {
              action = closure_131_4.getAction();
            }
            if (action === closure_131_5.REQUIRE_SAFETY_FLOWS) {
              c5 = 1;
              c6 = 3;
              c7 = 1;
              let obj10 = { value: closure_131_0(closure_131_2[6]).getCurrentTask(), done: false };
              return obj10;
            } else {
              closure_131_1(closure_131_2[4]).popWithKey(closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY);
              const obj18 = closure_131_1(closure_131_2[4]);
            }
          }
        } else {
          if (2 === tmp10) {
            c5 = 0;
            const obj12 = { task: null, initialScreen: null };
            const obj16 = closure_131_1(closure_131_2[4]);
            obj12.initialScreen = closure_131_0(closure_131_2[3]).SafetyFlowScreens.ERROR;
            obj16.pushLazy(
              closure_131_0(closure_131_2[12])(closure_131_2[11], closure_131_2.paths),
              obj12,
              closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY,
            );
            const tmp56 = closure_131_0(closure_131_2[12])(closure_131_2[11], closure_131_2.paths);
          } else {
            if (3 === tmp10) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                closure_130_1 = value;
                if (null == closure_130_1) {
                  c5 = 0;
                  c7 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              }
            } else if (4 === tmp10) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                const obj15 = { value, done: true };
                return obj15;
              } else {
                c6 = 5;
                c7 = 1;
                const obj17 = { value: closure_131_0(closure_131_2[6]).getCurrentTask(), done: false };
                return obj17;
              }
            } else if (5 === tmp10) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                const obj20 = { value, done: true };
                return obj20;
              } else {
                closure_130_1 = value;
                if (null == value) {
                  c5 = 0;
                  c7 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else if (
                  closure_130_1.task_type === closure_131_0(closure_131_2[3]).TaskType.APP_STORE_PARENTAL_REVOCATION
                ) {
                  if (obj25.getIsAppStoreConsentReinstateEndpointEnabled("openSafetyFlow")) {
                    if (obj4.isAppStoreAgeSignalColdLaunch()) {
                      c5 = 2;
                      c6 = 8;
                      c7 = 1;
                      const obj21 = {
                        value: closure_131_0(closure_131_2[7]).queueAppStoreAgeSignalSubmit(
                          closure_131_3(async () => {
                            if (c3 === 2) {
                              c3 = 3;
                              throw new TypeError("Generator functions may not be called on executing generators");
                            } else if (tmp4 === 3) {
                              if (arg0 === 1) {
                                throw value;
                              } else if (arg0 === 2) {
                                const obj3 = { value, done: true };
                                return obj3;
                              } else {
                                return { value: "HermesInternal", done: "HermesInternal" };
                              }
                            } else {
                              try {
                                c3 = 2;
                                if (0 === dependencyMap) {
                                  if (arg0 === 1) {
                                    c3 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c3 = 3;
                                    const obj4 = { value, done: true };
                                    return obj4;
                                  } else {
                                    closure_1 = tmp5;
                                    closure_128_0 = undefined;
                                    if (obj10.isAppStoreAgeSignalColdLaunch()) {
                                      dependencyMap = 1;
                                      c3 = 1;
                                      const obj5 = {
                                        value: tmp2(8147).getAppStoreConsentReinstatementProof(),
                                        done: false,
                                      };
                                      return obj5;
                                    } else {
                                      c3 = 3;
                                      return { value: "HermesInternal", done: "HermesInternal" };
                                    }
                                    obj10 = tmp2(8155);
                                  }
                                } else {
                                  if (1 === tmp5) {
                                    if (arg0 === 1) {
                                      c3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c3 = 3;
                                      const obj7 = { value, done: true };
                                      return obj7;
                                    } else {
                                      closure_128_0 = value;
                                      if (null != closure_128_0) {
                                        dependencyMap = 2;
                                        c3 = 1;
                                        const obj8 = {
                                          value: tmp2(8148).reinstateAppStoreConsent(closure_128_0),
                                          done: false,
                                        };
                                        return obj8;
                                      }
                                    }
                                  } else if (arg0 === 1) {
                                    c3 = 3;
                                    throw value;
                                  } else {
                                    if (arg0 === 2) {
                                      c3 = 3;
                                      const obj = { value, done: true };
                                      return obj;
                                    }
                                    const tmp6 = value;
                                  }
                                  c3 = 3;
                                  const obj9 = { value: tmp6, done: true };
                                  return obj9;
                                }
                              } catch (tmp14) {
                                c3 = tmp;
                                throw tmp14;
                              }
                            }
                          }),
                        ),
                        done: false,
                      };
                      return obj21;
                    }
                    obj4 = closure_131_0(closure_131_2[7]);
                  }
                  obj25 = closure_131_0(closure_131_2[8]);
                }
              }
            } else {
              if (6 === tmp10) {
                c5 = 1;
                c5 = 3;
                const currentTask = closure_131_0(closure_131_2[6]).getCurrentTask();
                c6 = 9;
                c7 = 1;
                let obj3 = closure_131_0(closure_131_2[6]);
              } else if (7 === tmp10) {
                c5 = 1;
              } else if (8 === tmp10) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  c5 = 1;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                let obj = { value, done: true };
                return obj;
              } else {
                closure_130_2 = value;
                if (null == closure_130_2) {
                  c5 = 0;
                  c7 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  closure_130_1 = closure_130_2;
                  c5 = 1;
                }
              }
              c5 = 0;
              c7 = 3;
              const obj22 = { value, done: true };
              return obj22;
            }
            closure_130_3 = (function getInitialScreenForTask(task_type) {
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
            const obj23 = { task: closure_130_1, initialScreen: closure_130_3 };
            const obj11 = closure_131_1(closure_131_2[4]);
            obj11.pushLazy(
              closure_131_0(closure_131_2[12])(closure_131_2[11], closure_131_2.paths),
              obj23,
              closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY,
            );
            c5 = 0;
            const tmp39 = closure_131_0(closure_131_2[12])(closure_131_2[11], closure_131_2.paths);
          }
          c6 = 4;
          c7 = 1;
          const obj24 = { value: closure_131_0(closure_131_2[7]).settleAppStoreAgeSignalReport(), done: false };
          return obj24;
        }
        c7 = 3;
      }
    } catch (tmp76) {
      closure_4 = tmp76;
      if (tmp5 === c5) {
        c7 = tmp3;
        throw tmp76;
      } else if (tmp2 === tmp78) {
        c6 = tmp;
      } else if (tmp === tmp78) {
        c6 = tmp7;
      } else {
        c6 = tmp6;
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
