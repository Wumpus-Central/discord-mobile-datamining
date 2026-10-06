// === Module 17632: NewUserUtils ===

// Module 17632 (NewUserUtils)
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Link from "Link" /* 1491 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5105 */;
import react_nativeDefault from "react-native" /* 7295 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12342 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12347 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 12430 */;
import NewUserModalTypes from "NewUserModalTypes" /* 17631 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ParentalConsentStore from "ParentalConsentStore" /* 15918 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5447 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, c2, c6, c7;

let metroImportAll;
let metroImportDefault;
let obj = function _shouldSkipContactSyncStep() {
  obj = _asyncToGenerator(async () => {
    let obj5;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        let isIOSResult;
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp3;
            const obj3 = require("ContactSyncUtils");
            const result = obj3.isContactSyncAvailable();
            isIOSResult = !result;
            if (result) {
              c1 = 1;
              c2 = 1;
              const obj6 = { value: obj5.checkContactPermissions(), done: false };
              obj5 = require("ContactSyncUtils");
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          isIOSResult = value === closure_128_9.UNAUTHORIZED;
          if (isIOSResult) {
            obj = closure_128_0(closure_128_2[8]);
            isIOSResult = obj.isIOS();
          }
        }
        c2 = 3;
        const obj8 = { value: isIOSResult, done: true };
        return obj8;
      } catch (tmp15) {
        c2 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
function lastStepComplete(STEP_GUILD_TEMPLATE) {
  obj = NewUserAnalyticsUtils;
  obj.trackNUFStep(STEP_GUILD_TEMPLATE, "NUF Complete");
  const obj2 = ModalActionCreatorsDefault;
  obj2.popWithKey(NewUserModalTypes.NEW_USER_MODAL_KEY);
  const obj3 = router_utils;
  obj3.transitionTo(metroImportAll.ME, { navigationReplace: true });
  const obj4 = nuf_NUFActionCreators;
  const result = obj4.setNewUserFlowCompleted();
}
function getNextOnboardingStep() {
  return obj(...arguments);
}
obj = function _getNextOnboardingStep() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_4;
    let closure_0 = arg0;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
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
        let lastShownStepIndex;
        let sum;
        let flag;
        let closure_3;
        let tmp;
        let key2;
        let shouldShowStep;
        let transitionStep;
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
            let closure_5 = tmp4;
            lastShownStepIndex = undefined;
            sum = undefined;
            flag = closure_0;
            if (closure_0 === undefined) {
              flag = false;
            }
            sum = closure_2;
            closure_3 = undefined;
            tmp = undefined;
            key2 = undefined;
            shouldShowStep = undefined;
            transitionStep = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let key;
            if (closure_133_14[lastShownStepIndex] != null) {
              key = tmp72.key;
            }
            let registration = key;
            if (key == null) {
              registration = "registration";
            }
            closure_3 = registration;
            sum = sum + 1;
            if (sum >= closure_133_14.length) {
              closure_133_15(closure_3);
              const obj7 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: false };
              c7 = 3;
              const obj8 = { value: obj7, done: true };
              return obj8;
            } else {
              tmp = closure_133_14[sum];
              key2 = tmp.key;
              shouldShowStep = tmp.shouldShowStep;
              transitionStep = tmp.transitionStep;
              c6 = 2;
              c7 = 1;
              const obj9 = { value: shouldShowStep(), done: false };
              return obj9;
            }
          }
        } else {
          let tmp5;
          if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else if (value) {
              let obj13;
              lastShownStepIndex = sum;
              const obj11 = { skip: flag };
              const obj3 = closure_133_0(closure_133_2[13]);
              obj3.trackNUFStep(closure_3, key2, obj11);
              if (null != transitionStep) {
                closure_133_15(key2);
                const obj6 = closure_133_1(closure_133_2[11]);
                obj6.wait(transitionStep);
                const obj12 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: false };
                obj13 = obj12;
              } else {
                obj13 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: null == transitionStep };
                transitionStep = undefined;
                if (closure_133_14[sum] != null) {
                  transitionStep = tmp25.transitionStep;
                }
              }
              tmp5 = obj13;
            } else {
              c6 = 3;
              c7 = 1;
              const obj14 = { value: closure_133_16(flag, lastShownStepIndex, sum), done: false };
              return obj14;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else {
            tmp5 = value;
            if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            }
          }
          c7 = 3;
          const obj15 = { value: tmp5, done: true };
          return obj15;
        }
      } catch (tmp62) {
        c7 = 3;
        throw tmp62;
      }
    }
  });
  return obj(...arguments);
};
({ PlatformTypes: metroImportDefault, Routes: metroImportAll } = Constants);
const ContactPermissions = ContactSyncConstants.ContactPermissions;
let closure_10 = NativePermissionConstants.NotificationAuthorizationStatus;
obj = {
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
let obj2 = {
  key: "enable-notification",
  shouldShowStep: function() {
    return closure_12(...arguments);
  }
};
let closure_12 = _asyncToGenerator(async () => {
  let obj4;
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      let isIOSResult;
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
          let closure_0 = tmp;
          const obj2 = PlatformUtils;
          isIOSResult = obj2.isIOS();
          if (isIOSResult) {
            c1 = 1;
            c2 = 1;
            const obj6 = { value: obj4.getNotificationAuthorizationStatus(), done: false };
            obj4 = react_nativeDefault;
            return obj6;
          }
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        isIOSResult = value !== closure_128_10.AUTHORIZED;
      }
      c2 = 3;
      const obj7 = { value: isIOSResult, done: true };
      return obj7;
    } catch (tmp11) {
      c2 = 3;
      throw tmp11;
    }
  }
});
let obj3 = {
  key: "contact-sync",
  shouldShowStep: function() {
    return closure_13(...arguments);
  }
};
let closure_13 = _asyncToGenerator(async () => {
  function shouldSkipContactSyncStep() {
    return closure_1_11(...arguments);
  }
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
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
      let tmp4;
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
          const localAccount = ConnectedAccountsStore.getLocalAccount(metroImportDefault.CONTACTS);
          let friendSync;
          if (localAccount != null) {
            friendSync = localAccount.friendSync;
          }
          tmp4 = !friendSync;
          if (tmp4) {
            c1 = 1;
            c0 = 1;
            const obj4 = { value: shouldSkipContactSyncStep(), done: false };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        tmp4 = !value;
      }
      c0 = 3;
      const obj5 = { value: tmp4, done: true };
      return obj5;
    } catch (tmp10) {
      c0 = 3;
      throw tmp10;
    }
  }
});
let items = [
  obj2,
  obj3,
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

];
let obj4 = {
  key: "accept-invite",
  shouldShowStep: instant_invite_InstantInviteUtils.hasDeferredInvite,
  transitionStep() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
items[5] = obj4;
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
      let dispatch = current.dispatch;
      const StackActions = require("Link").StackActions;
      dispatch(StackActions.push(key, {}));
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const state = current.getState();
        const routes = state.routes;
        if (2 === routes.length) {
          items = [routes[1]];
          const dispatch = current.dispatch;
          const CommonActions = Link.CommonActions;
          const reset = CommonActions.reset;
          obj = { routes: items, index: 0 };
          const merged = Object.assign(state);
          dispatch(reset(obj));
        }
      }, 500);
    }
  }
};
export { getNextOnboardingStep };