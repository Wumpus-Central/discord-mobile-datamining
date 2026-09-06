// === Module 17447: NewUserUtils ===

// Module 17447 (NewUserUtils)
import DispatcherDefault from "Dispatcher" /* 573 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import Link from "Link" /* 1484 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12680 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12683 */;
import NewUserModalTypes from "NewUserModalTypes" /* 17448 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ParentalConsentStore from "ParentalConsentStore" /* 15958 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let closure_12 = async function _shouldSkipContactSyncStep(arg0, value) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c2 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = tmp4;
          let obj2 = ContactSyncUtils;
          const result = obj2.isContactSyncAvailable();
          if (result) {
            c1 = 1;
            c2 = 1;
            const obj1 = { value: ContactSyncUtils.checkContactPermissions(), done: false };
            return obj1;
          } else {
            c2 = 3;
          }
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 !== 2) {
        if (value === closure_128_10.UNAUTHORIZED) {
          obj = closure_128_0(closure_128_2[9]);
          obj.isIOS();
        }
      }
      c2 = 3;
      obj2 = { value, done: true };
      return obj2;
    } catch (tmp17) {
      c2 = tmp;
      throw tmp17;
    }
  }
};
function lastStepComplete(STEP_GUILD_TEMPLATE) {
  NewUserAnalyticsUtils.trackNUFStep(STEP_GUILD_TEMPLATE, "NUF Complete");
  if (obj2.isModalOpen(NewUserModalTypes.NEW_USER_MODAL_KEY)) {
    ModalActionCreatorsDefault.popWithKey(tmp(17448).NEW_USER_MODAL_KEY);
  }
  let tmpResult = tmp(1100);
  tmpResult.transitionTo(constants2.ME, { navigationReplace: true });
  tmpResult = tmp(12746);
  const result = tmpResult.setNewUserFlowCompleted();
}
function getNextOnboardingStep() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _getNextOnboardingStep(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
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
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let key;
          if (closure_133_15[closure_132_1] != null) {
            key = tmp75.key;
          }
          let registration = key;
          if (key == null) {
            registration = "registration";
          }
          closure_132_3 = registration;
          const sum = closure_132_2 + 1;
          closure_132_2 = sum;
          if (sum >= closure_133_15.length) {
            closure_133_16(closure_132_3);
            let obj2 = { lastShownStepIndex: closure_132_1, onboardingStepIndex: closure_132_2, continueNavigation: false };
            c7 = 3;
            let obj3 = { value: obj2, done: true };
            return obj3;
          } else {
            closure_132_4 = closure_133_15[closure_132_2];
            key2 = closure_132_4.key;
            shouldShowStep = closure_132_4.shouldShowStep;
            transitionStep2 = closure_132_4.transitionStep;
            c6 = 2;
            c7 = 1;
            const obj4 = { value: shouldShowStep(), done: false };
            return obj4;
          }
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else if (value) {
          closure_132_1 = closure_132_2;
          obj3 = closure_133_0(closure_133_2[13]);
          const obj6 = { skip: closure_132_0 };
          obj3.trackNUFStep(closure_132_3, key2, obj6);
          if (null != transitionStep2) {
            closure_133_16(key2);
            obj2 = closure_133_1(closure_133_2[11]);
            obj2.wait(transitionStep2);
            const obj7 = { lastShownStepIndex: closure_132_1, onboardingStepIndex: closure_132_2, continueNavigation: false };
            let obj8 = obj7;
          } else {
            obj8 = { lastShownStepIndex: closure_132_1, onboardingStepIndex: closure_132_2, continueNavigation: null };
            let transitionStep;
            if (closure_133_15[closure_132_2] != null) {
              transitionStep = tmp26.transitionStep;
            }
            obj8.continueNavigation = null == transitionStep;
          }
        } else {
          c6 = 3;
          c7 = 1;
          const obj9 = { value: closure_133_17(closure_132_0, closure_132_1, closure_132_2), done: false };
          return obj9;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c7 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        c7 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp64) {
      c7 = tmp;
      throw tmp64;
    }
  }
};
const NativeModules = fn(17).NativeModules;
const Constants = fn(1074);
({ PlatformTypes: closure_8, Routes: closure_9 } = Constants);
const ContactPermissions = fn(12678).ContactPermissions;
let closure_11 = fn(4770).NotificationAuthorizationStatus;
let obj = {
  key: "choose-avatar",
  shouldShowStep() {
    const currentUser = UserStore.getCurrentUser();
    let avatar;
    if (currentUser != null) {
      avatar = currentUser.avatar;
    }
    return null == avatar;
  }
};
obj = { key: "enable-notification", shouldShowStep: null };
let closure_13 = asyncGeneratorStep(async (arg0, value) => {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c2 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = tmp4;
          let obj1 = PlatformUtils;
          if (obj1.isIOS()) {
            const NativePermissionManager = NativeModules.NativePermissionManager;
            c1 = 1;
            c2 = 1;
            obj1 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
            return obj1;
          } else {
            c2 = 3;
          }
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      }
      c2 = 3;
      obj = { value, done: true };
      return obj;
    } catch (tmp11) {
      c2 = tmp;
      throw tmp11;
    }
  }
});
obj.shouldShowStep = function() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj = { key: "contact-sync", shouldShowStep: null };
let closure_14 = asyncGeneratorStep(async (arg0, value) => {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
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
            const obj1 = {
              value: (function shouldSkipContactSyncStep() {
                          const self = this;
                          const apply = closure_1_12.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(),
              done: false
            };
            return obj1;
          }
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      }
      c0 = 3;
      obj = { value, done: true };
      return obj;
    } catch (tmp12) {
      c0 = tmp;
      throw tmp12;
    }
  }
});
obj.shouldShowStep = function() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let items = [
  obj,
  obj,
  {
    key: "discoverability",
    shouldShowStep() {
      return true;
    }
  },
  obj,
  {
    key: "connect-guardian",
    shouldShowStep() {
      return ParentalConsentStore.getShouldShowGuardianConnect();
    }
  },
  {
    key: "accept-invite",
    shouldShowStep: fn(9820).hasDeferredInvite,
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
  let state = current;
  let key;
  if (items[onboardingStepIndex] != null) {
    key = tmp.key;
  }
  if (null !== key) {
    current.navigate(key, {});
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let obj = state;
      state = state.getState();
      const routes = state.routes;
      if (2 === routes.length) {
        items = [routes[1]];
        const CommonActions = Link.CommonActions;
        obj = {};
        const merged = Object.assign(state);
        obj.routes = items;
        obj.index = 0;
        obj.dispatch(CommonActions.reset(obj));
      }
    }, 500);
  }
};
export { getNextOnboardingStep };