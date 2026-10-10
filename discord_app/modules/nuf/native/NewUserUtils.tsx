// === Module 18142: NewUserUtils ===

// Module 18142 (NewUserUtils)
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import Link from "Link" /* 1504 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7505 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12405 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 12512 */;
import NewUserModalTypes from "NewUserModalTypes" /* 18141 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ParentalConsentStore from "ParentalConsentStore" /* 16360 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5761 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
let closure_11 = async function _shouldSkipContactSyncStep() {
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
      return { value: "IconComponent", done: "+51" };
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
        if (value === closure_128_9.UNAUTHORIZED) {
          closure_128_0(closure_128_2[8]).isIOS();
          const obj = closure_128_0(closure_128_2[8]);
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
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = async function _getNextOnboardingStep() {
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
      return { value: "IconComponent", done: "+51" };
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
          return { value: "Set", done: true };
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
          if (closure_133_14[closure_132_1] != null) {
            key = tmp73.key;
          }
          let registration = key;
          if (key == null) {
            registration = "registration";
          }
          closure_132_3 = registration;
          const sum = closure_132_2 + 1;
          closure_132_2 = sum;
          if (sum >= closure_133_14.length) {
            closure_133_15(closure_132_3);
            const obj6 = { lastShownStepIndex: closure_132_1, onboardingStepIndex: closure_132_2, continueNavigation: false };
            c7 = 3;
            const obj7 = { value: obj6, done: true };
            return obj7;
          } else {
            closure_132_4 = closure_133_14[closure_132_2];
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
          closure_133_0(closure_133_2[13]).trackNUFStep(closure_132_3, key2, obj10);
          if (null != transitionStep2) {
            closure_133_15(key2);
            transitionStep2();
            const obj11 = { lastShownStepIndex: closure_132_1, onboardingStepIndex: closure_132_2, continueNavigation: false };
            let obj12 = obj11;
          } else {
            obj12 = { lastShownStepIndex: closure_132_1, onboardingStepIndex: closure_132_2, continueNavigation: null };
            let transitionStep;
            if (closure_133_14[closure_132_2] != null) {
              transitionStep = tmp27.transitionStep;
            }
            obj12.continueNavigation = null == transitionStep;
          }
          const obj3 = closure_133_0(closure_133_2[13]);
        } else {
          c6 = 3;
          c7 = 1;
          const obj13 = { value: closure_133_16(closure_132_0, closure_132_1, closure_132_2), done: false };
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
const Constants = fn(1085);
({ PlatformTypes: closure_7, Routes: closure_8 } = Constants);
const ContactPermissions = fn(12400).ContactPermissions;
let closure_10 = fn(7482).NotificationAuthorizationStatus;
let obj2 = { key: "enable-notification", shouldShowStep: null };
let closure_12 = asyncGeneratorStep(async () => {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "IconComponent", done: "+51" };
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
          closure_0 = tmp2;
          if (obj2.isIOS()) {
            c1 = 1;
            c2 = 1;
            const obj6 = { value: NativePermissionManagerModuleDefault.getNotificationAuthorizationStatus(), done: false };
            return obj6;
          } else {
            c2 = 3;
          }
          obj2 = PlatformUtils;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      }
      c2 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp12) {
      c2 = tmp;
      throw tmp12;
    }
  }
});
obj2.shouldShowStep = function shouldShowStep() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let obj3 = { key: "contact-sync", shouldShowStep: null };
let closure_13 = asyncGeneratorStep(async () => {
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
      return { value: "IconComponent", done: "+51" };
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
                          const apply = closure_1_11.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(),
              done: false
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
  const apply = closure_13.apply;
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
    key: "discoverability",
    shouldShowStep() {
      return true;
    }
  },
  {
    key: "choose-avatar",
    shouldShowStep() {
      const currentUser = UserStore.getCurrentUser();
      let avatar;
      if (currentUser != null) {
        avatar = currentUser.avatar;
      }
      return null == avatar;
    }
  },
  {
    key: "connect-guardian",
    shouldShowStep() {
      return ParentalConsentStore.getShouldShowGuardianConnect();
    }
  },
  {
    key: "accept-invite",
    shouldShowStep: fn(8682).hasDeferredInvite,
    transitionStep() {
      DispatcherDefault.dispatch({ type: "DEFERRED_INVITE_SHOW" });
    }
  }
];
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/NewUserUtils.tsx");

export const getKeyForOnboardingStep = function getKeyForOnboardingStep(onboardingStepIndex) {
  let key;
  if (items[onboardingStepIndex] != null) {
    key = tmp.key;
  }
  return key;
};
export const continueToNextStep = function continueToNextStep(onboardingStepIndex, current) {
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
};
export { getNextOnboardingStep };