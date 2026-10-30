// discord_app/modules/nuf/native/RedesignNewUserManager.tsx
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import isFullScreenVerificationModalRequiredDefault from "../../verification/native/isFullScreenVerificationModalRequired.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";
import NewUserStore from "../NewUserStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function isBlockedByVerification() {
  return isFullScreenVerificationModalRequiredDefault(UserRequiredActionStore.getAction(), "nuf-verification-gate");
}
function isNewUserModalInStack() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let someResult = !tmp;
  if (!tmp) {
    const routes = rootNavigationRef.getRootState().routes;
    someResult = routes.some((item) => {
      const coerceModalRouteResult = closure_1_0(dependencyMap[7]).coerceModalRoute(item);
      let key;
      if (coerceModalRouteResult != null) {
        const params = coerceModalRouteResult.params;
        if (params != null) {
          const modal = params.modal;
          if (modal != null) {
            key = modal.key;
          }
        }
      }
      return key === closure_1_0(dependencyMap[8]).NEW_USER_MODAL_KEY;
    });
  }
  return someResult;
}
const ContactSyncModalStore = fn(14195);
({ initialize: closure_4, ContactSyncModes: hasOwnProperty } = ContactSyncModalStore);
const prototype = function RedesignNewUserManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult._onboardingStepIndex = -1;
  applyArgumentsResult._lastShownStepIndex = -1;
  applyArgumentsResult._resumeAfterVerificationUserId = null;
  applyArgumentsResult._isStartingOnboarding = false;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleConnectionOpen();
    },
    ONBOARDING_START() {
      return applyArgumentsResult.handleOnboardingStart();
    },
    USER_REQUIRED_ACTION_UPDATE(requiredAction) {
      return applyArgumentsResult.handleRequiredActionUpdate(requiredAction);
    },
  };
  applyArgumentsResult.startOnboarding = function startOnboarding() {
    closure_0 = applyArgumentsResult;
    if (!applyArgumentsResult._isStartingOnboarding) {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      const tmp5 = null == rootNavigationRef || !rootNavigationRef.isReady();
      let someResult = !tmp5;
      if (!tmp5) {
        const routes = rootNavigationRef.getRootState().routes;
        someResult = routes.some((item) => {
          const coerceModalRouteResult = closure_1_0(dependencyMap[7]).coerceModalRoute(item);
          let key;
          if (coerceModalRouteResult != null) {
            const params = coerceModalRouteResult.params;
            if (params != null) {
              const modal = params.modal;
              if (modal != null) {
                key = modal.key;
              }
            }
          }
          return key === closure_1_0(dependencyMap[8]).NEW_USER_MODAL_KEY;
        });
      }
      if (!someResult) {
        if (tmp8(UserRequiredActionStore.getAction(), "nuf-verification-gate")) {
          applyArgumentsResult._resumeAfterVerificationUserId = AuthenticationStore.getId();
        } else {
          applyArgumentsResult._resumeAfterVerificationUserId = null;
          applyArgumentsResult._isStartingOnboarding = true;
          closure_0 = asyncGeneratorStep(async () => {
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj4 = { value, done: true };
                return obj4;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    closure_1 = tmp3;
                    closure_0 = tmp7;
                    closure_128_0 = undefined;
                    let onboardingStepIndex;
                    let keyForOnboardingStep;
                    c3 = 1;
                    let nextOnboardingStep = closure_2_4;
                    if (obj13.hasDeferredInvite()) {
                      let ONBOARDING = constants.ONBOARDING_INVITE;
                    } else {
                      ONBOARDING = constants.ONBOARDING;
                    }
                    nextOnboardingStep(ONBOARDING);
                    obj13 = closure_0(paths[10]);
                    nextOnboardingStep = closure_0(paths[11]).getNextOnboardingStep(false, -1, -1);
                    c4 = 2;
                    c5 = 1;
                    const obj10 = closure_0(paths[11]);
                  }
                } else if (1 === tmp7) {
                  c3 = 0;
                  closure_0._isStartingOnboarding = false;
                  throw closure_2;
                } else {
                  if (2 === tmp7) {
                    if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      closure_0._isStartingOnboarding = false;
                      c5 = 3;
                      const obj7 = { value, done: true };
                      return obj7;
                    } else {
                      closure_128_0 = value;
                      onboardingStepIndex = closure_128_0.onboardingStepIndex;
                      if (closure_128_0.continueNavigation) {
                        if (isBlockedByVerification()) {
                          closure_0._resumeAfterVerificationUserId = id.getId();
                          c3 = 0;
                          closure_0._isStartingOnboarding = false;
                          c5 = 3;
                          const obj8 = { value: undefined, done: true };
                          return obj8;
                        } else if (isNewUserModalInStack()) {
                          c3 = 0;
                          closure_0._isStartingOnboarding = false;
                          c5 = 3;
                          return { value: "HermesInternal", done: null };
                        } else {
                          keyForOnboardingStep = closure_0(paths[11]).getKeyForOnboardingStep(onboardingStepIndex);
                          if (null != keyForOnboardingStep) {
                            const obj3 = require("ModalActionCreators");
                            const tmp30 = closure_0(paths[14])(paths[13], paths.paths);
                            const obj9 = {
                              initialRouteName: keyForOnboardingStep,
                              initialOnboardingStepIndex: onboardingStepIndex,
                            };
                            const NEW_USER_MODAL_KEY = closure_0(paths[8]).NEW_USER_MODAL_KEY;
                            let str = "card";
                            if (obj5.isAndroid()) {
                              str = "transparentModal";
                            }
                            const obj11 = {
                              fullScreenGestureEnabled: false,
                              presentation: str,
                              animation: "slide_from_bottom",
                            };
                            c4 = 3;
                            c5 = 1;
                            const obj12 = { value: obj3.pushLazy(tmp30, obj9, NEW_USER_MODAL_KEY, obj11), done: false };
                            return obj12;
                          }
                          const obj2 = closure_0(paths[11]);
                        }
                      } else {
                        c3 = 0;
                        closure_0._isStartingOnboarding = false;
                        c5 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    }
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    closure_0._isStartingOnboarding = false;
                    c5 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  c3 = 0;
                  closure_0._isStartingOnboarding = false;
                  c5 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp58) {
                closure_2 = tmp58;
                if (tmp4 === c3) {
                  c5 = tmp2;
                  throw tmp58;
                } else {
                  c4 = tmp;
                }
              }
            }
          });
          (function finishStartingOnboarding() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
        tmp8 = isFullScreenVerificationModalRequiredDefault;
      }
    }
  };
  applyArgumentsResult.handleOnboardingStart = function handleOnboardingStart() {
    applyArgumentsResult.startOnboarding();
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    if (null != NewUserStore.getType()) {
      if (!obj.isModalOpen()) {
        applyArgumentsResult.startOnboarding();
      }
      obj = NavigationRouteUtils;
    }
  };
  applyArgumentsResult.handleRequiredActionUpdate = function handleRequiredActionUpdate(requiredAction) {
    if (null == requiredAction.requiredAction) {
      let tmp2 = null != applyArgumentsResult._resumeAfterVerificationUserId;
      if (tmp2) {
        tmp2 = applyArgumentsResult._resumeAfterVerificationUserId === AuthenticationStore.getId();
      }
      if (!tmp2) {
        tmp2 = null != NewUserStore.getType();
      }
      if (tmp2) {
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        const tmp6 = null == rootNavigationRef || !rootNavigationRef.isReady();
        let someResult = !tmp6;
        if (!tmp6) {
          const routes = rootNavigationRef.getRootState().routes;
          someResult = routes.some((item) => {
            const coerceModalRouteResult = closure_1_0(dependencyMap[7]).coerceModalRoute(item);
            let key;
            if (coerceModalRouteResult != null) {
              const params = coerceModalRouteResult.params;
              if (params != null) {
                const modal = params.modal;
                if (modal != null) {
                  key = modal.key;
                }
              }
            }
            return key === closure_1_0(dependencyMap[8]).NEW_USER_MODAL_KEY;
          });
        }
        if (!someResult) {
          applyArgumentsResult.startOnboarding();
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/RedesignNewUserManager.tsx");

export default prototype1;
