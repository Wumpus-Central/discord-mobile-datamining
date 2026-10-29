// discord_app/modules/nuf/native/NewUserUtils.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import router_utils from "../../routing/router_utils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Link from "../../../../_runtime/01504_Link.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NativePermissionManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils.tsx";
import nuf_NUFActionCreators from "../NUFActionCreators.tsx";
import MobileOnboardingFrictionExperimentDefault from "MobileOnboardingFrictionExperiment.android.tsx";
import NewUserModalTypes from "components/NewUserModalTypes.tsx";
import InterestPickerExperiment from "../../waterwheels/interest/InterestPickerExperiment.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ParentalConsentStore from "../../parent_tools/ParentalConsentStore.tsx";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function shouldSkipContactSync() {
  return MobileOnboardingFrictionExperimentDefault.getMobileOnboardingFrictionConfig(NewUserUtils).skipContactSync;
}
let closure_15 = async function _shouldSkipContactSyncStep() {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_0 = tmp4;
          const result = require("ContactSyncUtils").isContactSyncAvailable();
          if (result) {
            c1 = 1;
            c2 = 1;
            const obj6 = { value: require("ContactSyncUtils").checkContactPermissions(), done: false };
            return obj6;
          } else {
            c2 = 3;
          }
          const obj3 = require("ContactSyncUtils");
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 !== 2) {
        if (value === closure_128_11.UNAUTHORIZED) {
          closure_128_0(closure_128_2[10]).isIOS();
          const obj = closure_128_0(closure_128_2[10]);
        }
      }
      c2 = 3;
      const obj7 = { value, done: true };
      return obj7;
    } catch (tmp17) {
      c2 = tmp;
      throw tmp17;
    }
  }
};
function lastStepComplete(STEP_GUILD_TEMPLATE) {
  NewUserAnalyticsUtils.trackNUFStep(STEP_GUILD_TEMPLATE, "NUF Complete");
  ModalActionCreatorsDefault.popWithKey(NewUserModalTypes.NEW_USER_MODAL_KEY);
  router_utils.transitionTo(constants2.ME, { navigationReplace: true });
  const result = nuf_NUFActionCreators.setNewUserFlowCompleted();
}
function getNextOnboardingStep() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _getNextOnboardingStep() {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
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
          closure_5 = tmp5;
          closure_4 = tmp2;
          closure_132_0 = undefined;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          let flag = closure_0;
          if (closure_0 === undefined) {
            flag = false;
          }
          closure_132_0 = flag;
          closure_132_1 = closure_1;
          closure_132_2 = closure_2;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          let key2;
          let shouldShowStep;
          let transitionStep2;
          c6 = 1;
          c7 = 1;
          return { value: "Reflect", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          let key;
          if (closure_133_18[closure_132_1] != null) {
            key = tmp73.key;
          }
          let registration = key;
          if (key == null) {
            registration = "registration";
          }
          closure_132_3 = registration;
          const sum = closure_132_2 + 1;
          closure_132_2 = sum;
          if (sum >= closure_133_18.length) {
            closure_133_19(closure_132_3);
            const obj6 = {
              lastShownStepIndex: closure_132_1,
              onboardingStepIndex: closure_132_2,
              continueNavigation: false,
            };
            c7 = 3;
            const obj7 = { value: obj6, done: true };
            return obj7;
          } else {
            closure_132_4 = closure_133_18[closure_132_2];
            key2 = closure_132_4.key;
            shouldShowStep = closure_132_4.shouldShowStep;
            transitionStep2 = closure_132_4.transitionStep;
            c6 = 2;
            c7 = 1;
            const obj8 = { value: shouldShowStep(), done: false };
            return obj8;
          }
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else if (value) {
          closure_132_1 = closure_132_2;
          const obj10 = { skip: closure_132_0 };
          closure_133_0(closure_133_2[19]).trackNUFStep(closure_132_3, key2, obj10);
          if (null != transitionStep2) {
            closure_133_19(key2);
            transitionStep2();
            const obj11 = {
              lastShownStepIndex: closure_132_1,
              onboardingStepIndex: closure_132_2,
              continueNavigation: false,
            };
            let obj12 = obj11;
          } else {
            obj12 = { lastShownStepIndex: closure_132_1, onboardingStepIndex: closure_132_2, continueNavigation: null };
            let transitionStep;
            if (closure_133_18[closure_132_2] != null) {
              transitionStep = tmp27.transitionStep;
            }
            obj12.continueNavigation = null == transitionStep;
          }
          const obj3 = closure_133_0(closure_133_2[19]);
        } else {
          c6 = 3;
          c7 = 1;
          const obj13 = { value: closure_133_20(closure_132_0, closure_132_1, closure_132_2), done: false };
          return obj13;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c7 = 3;
        const obj14 = { value, done: true };
        return obj14;
      } else {
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp62) {
      c7 = tmp;
      throw tmp62;
    }
  }
};
const NotificationPermissionConstants = fn(13777);
({ EventActionLocation: closure_7, EventActionType: closure_8 } = NotificationPermissionConstants);
const Constants = fn(1084);
({ PlatformTypes: closure_9, Routes: c10 } = Constants);
const ContactPermissions = fn(14048).ContactPermissions;
let closure_12 = fn(7926).NotificationAuthorizationStatus;
const NewUserUtils = "NewUserUtils";
let obj2 = { key: "enable-notification", shouldShowStep: null };
let closure_16 = asyncGeneratorStep(async () => {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp5;
          let notificationPrompt;
          closure_128_1 = undefined;
          if (obj11.isIOS()) {
            notificationPrompt =
              MobileOnboardingFrictionExperimentDefault.getMobileOnboardingFrictionConfig(
                NewUserUtils,
              ).notificationPrompt;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj8 = {
              value: NativePermissionManagerModuleDefault.getNotificationAuthorizationStatus(),
              done: false,
            };
            return obj8;
          } else {
            c5 = 3;
            return { value: false, done: true };
          }
          obj11 = PlatformUtils;
        }
      } else if (1 === tmp8) {
        c3 = 0;
        closure_128_2 = closure_2;
        if (notificationPrompt !== closure_129_0(closure_129_2[12]).OnboardingNotificationPrompt.OS_ONLY) {
          throw closure_128_2;
        } else {
          closure_129_1(closure_129_2[14]).captureException(closure_128_2);
          c5 = 3;
          return { value: false, done: true };
        }
      } else {
        if (2 === tmp8) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_128_1 = value;
            if (closure_128_1 === closure_129_12.AUTHORIZED) {
              c3 = 0;
              c5 = 3;
              return { value: false, done: true };
            } else if (closure_129_0(closure_129_2[12]).OnboardingNotificationPrompt.EXPLAINER === notificationPrompt) {
              c3 = 0;
              c5 = 3;
              return { value: true, done: true };
            } else if (closure_129_0(closure_129_2[12]).OnboardingNotificationPrompt.OS_ONLY === tmp54) {
              if (closure_128_1 !== closure_129_12.DENIED) {
                c4 = 3;
                c5 = 1;
                const obj10 = {
                  value: closure_129_0(closure_129_2[13]).requestPushNotificationPermission(
                    closure_129_8.REQUEST,
                    closure_129_7.AUTO_PROMPT,
                    () => {},
                  ),
                  done: false,
                };
                return obj10;
              }
            } else if (closure_129_0(closure_129_2[12]).OnboardingNotificationPrompt.NONE === tmp54) {
              c3 = 0;
              c5 = 3;
              return { value: false, done: true };
            } else {
              c3 = 0;
              c5 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c3 = 0;
        c5 = 3;
        return { value: false, done: true };
      }
    } catch (tmp41) {
      closure_2 = tmp41;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp41;
      } else {
        c4 = tmp;
      }
    }
  }
});
obj2.shouldShowStep = function shouldShowStep() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let obj3 = { key: "contact-sync", shouldShowStep: null };
let closure_17 = asyncGeneratorStep(async () => {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else if (shouldSkipContactSync()) {
          c0 = 3;
          return { value: false, done: true };
        } else {
          const localAccount = ConnectedAccountsStore.getLocalAccount(constants.CONTACTS);
          let friendSync;
          if (localAccount != null) {
            friendSync = localAccount.friendSync;
          }
          if (friendSync) {
            c0 = 3;
          } else {
            c1 = 1;
            c0 = 1;
            const obj4 = {
              value: (function shouldSkipContactSyncStep() {
                const self = this;
                const apply = closure_1_15.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(),
              done: false,
            };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      }
      c0 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp12) {
      c0 = tmp;
      throw tmp12;
    }
  }
});
obj3.shouldShowStep = function shouldShowStep() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let items = [
  obj2,
  obj3,
  {
    key: "interest-picker",
    shouldShowStep() {
      const shouldShowGuardianConnect = ParentalConsentStore.getShouldShowGuardianConnect();
      let result = !shouldShowGuardianConnect;
      if (!shouldShowGuardianConnect) {
        result = InterestPickerExperiment.isInterestPickerExperimentEnabled("nuf_interest_picker_step");
      }
      return result;
    },
  },
  {
    key: "discoverability",
    shouldShowStep() {
      return !MobileOnboardingFrictionExperimentDefault.getMobileOnboardingFrictionConfig(NewUserUtils).skipContactSync;
    },
  },
  {
    key: "choose-avatar",
    shouldShowStep() {
      const skipAvatar =
        MobileOnboardingFrictionExperimentDefault.getMobileOnboardingFrictionConfig(NewUserUtils).skipAvatar;
      let tmp = !skipAvatar;
      if (!skipAvatar) {
        const currentUser = UserStore.getCurrentUser();
        let avatar;
        if (currentUser != null) {
          avatar = currentUser.avatar;
        }
        tmp = null == avatar;
      }
      return tmp;
    },
  },
  {
    key: "connect-guardian",
    shouldShowStep() {
      return ParentalConsentStore.getShouldShowGuardianConnect();
    },
  },
  {
    key: "accept-invite",
    shouldShowStep: fn(9086).hasDeferredInvite,
    transitionStep() {
      DispatcherDefault.dispatch({ type: "DEFERRED_INVITE_SHOW" });
    },
  },
];
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/NewUserUtils.tsx");

export function getKeyForOnboardingStep(onboardingStepIndex) {
  let key;
  if (items[onboardingStepIndex] != null) {
    key = tmp.key;
  }
  return key;
}
export function continueToNextStep(onboardingStepIndex, current) {
  _require = current;
  let key;
  if (items[onboardingStepIndex] != null) {
    key = tmp.key;
  }
  if (null != key) {
    let state = current.getState();
    let name;
    if (state.routes[state.index] != null) {
      name = tmp4.name;
    }
    if (name !== key) {
      const StackActions = require("Link").StackActions;
      current.dispatch(StackActions.push(key, {}));
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        state = state.getState();
        const routes = state.routes;
        if (2 === routes.length) {
          items = [routes[1]];
          const CommonActions = Link.CommonActions;
          const obj2 = {};
          const merged = Object.assign(state);
          obj2.routes = items;
          obj2.index = 0;
          obj.dispatch(CommonActions.reset(obj2));
        }
        obj = state;
      }, 500);
    }
  }
}
export { getNextOnboardingStep };
