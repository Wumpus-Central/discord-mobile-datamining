// discord_app/modules/nuf/native/NewUserUtils.tsx
import importDefaultResult from "ME";
import { NativeModules } from "transitionTo";
import initialize from "initialize";
import set from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { ContactPermissions } from "ContactSyncLandingPage";
import { NotificationAuthorizationStatus as closure_11 } from "NativePermissionStatus";

let c9;
let metroImportAll;
const require = arg1;
function _shouldSkipContactSyncStep() {
  const self = this;
  const tmp = importDefaultResult(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp4;
            let obj2 = outer1_0(11947);
            const result = obj2.isContactSyncAvailable();
            if (result) {
              c1 = 1;
              dependencyMap = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0(11947).checkContactPermissions();
              return obj1;
            } else {
              dependencyMap = 3;
            }
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          if (arg1 === constants.UNAUTHORIZED) {
            obj = callback(500);
            obj.isIOS();
          }
        }
        dependencyMap = 3;
        obj2 = { value: null, done: true };
        obj2[0] = arg1;
        return obj2;
      } catch (tmp17) {
        dependencyMap = tmp;
        throw tmp17;
      }
    }
  });
  const _shouldSkipContactSyncStep = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function lastStepComplete(STEP_GUILD_TEMPLATE) {
  require(11950) /* trackNUFStep */.trackNUFStep(STEP_GUILD_TEMPLATE, "NUF Complete");
  const obj = require(11950) /* trackNUFStep */;
  if (obj2.isModalOpen(require(16392) /* NEW_USER_MODAL_KEY */.NEW_USER_MODAL_KEY)) {
    importDefault(4490).popWithKey(tmp(16392).NEW_USER_MODAL_KEY);
    const obj3 = importDefault(4490);
  }
  let tmpResult = tmp(1222);
  tmpResult.transitionTo(constants.ME, { navigationReplace: true });
  tmpResult = tmp(12013);
  const result = tmpResult.setNewUserFlowCompleted();
}
function getNextOnboardingStep(flag, first1, first) {
  const self = this;
  const apply = _getNextOnboardingStep.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getNextOnboardingStep() {
  const self = this;
  const tmp = importDefaultResult(() => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    const iter = (function*() {
      if (transitionStep2 === 2) {
        transitionStep2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          transitionStep2 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              transitionStep2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              transitionStep2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let key = tmp5;
              let closure_4 = tmp2;
              let flag;
              let callback;
              let dependencyMap;
              if (flag === undefined) {
                flag = false;
              }
              let closure_3;
              closure_4 = undefined;
              key = undefined;
              v0 = undefined;
              transitionStep2 = undefined;
              v0 = 1;
              transitionStep2 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              transitionStep2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              transitionStep2 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              key = undefined;
              if (length[callback] != null) {
                key = tmp76.key;
              }
              closure_3 = key;
              if (key == null) {
                closure_3 = "registration";
              }
              const sum = dependencyMap + 1;
              dependencyMap = sum;
              if (sum >= length.length) {
                callback2(closure_3);
                let obj2 = { lastShownStepIndex: null, onboardingStepIndex: null, continueNavigation: false };
                obj2[0] = callback;
                obj2[1] = dependencyMap;
                transitionStep2 = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = obj2;
                return obj3;
              } else {
                closure_4 = length[dependencyMap];
                key = closure_4.key;
                v0 = closure_4.shouldShowStep;
                transitionStep2 = closure_4.transitionStep;
                v0 = 2;
                transitionStep2 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = v0();
                return obj4;
              }
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              transitionStep2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              transitionStep2 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else if (arg1) {
              callback = dependencyMap;
              obj3 = flag(11950);
              const obj6 = { skip: null };
              obj6[0] = flag;
              obj3.trackNUFStep(closure_3, key, obj6);
              if (null != transitionStep2) {
                callback2(key);
                obj2 = callback(709);
                obj2.wait(transitionStep2);
                const obj7 = { lastShownStepIndex: null, onboardingStepIndex: null, continueNavigation: false };
                obj7[0] = callback;
                obj7[1] = dependencyMap;
                let obj8 = obj7;
              } else {
                obj8 = { lastShownStepIndex: null, onboardingStepIndex: null, continueNavigation: null };
                obj8[0] = callback;
                obj8[1] = dependencyMap;
                let transitionStep;
                if (length[dependencyMap] != null) {
                  transitionStep = tmp26.transitionStep;
                }
                obj8[2] = null == transitionStep;
              }
            } else {
              v0 = 3;
              transitionStep2 = 1;
              const obj9 = { value: null, done: false };
              obj9[0] = callback3(flag, callback, dependencyMap);
              return obj9;
            }
          } else if (arg0 === 1) {
            transitionStep2 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            transitionStep2 = 3;
            const obj10 = { value: null, done: true };
            obj10[0] = arg1;
            return obj10;
          } else {
            transitionStep2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp64) {
          transitionStep2 = tmp;
          throw tmp64;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _getNextOnboardingStep = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c3 = importDefaultResult;
({ PlatformTypes: metroImportAll, Routes: c9 } = ME);
let obj = {
  key: "choose-avatar",
  shouldShowStep() {
    currentUser = currentUser.getCurrentUser();
    let avatar;
    if (currentUser != null) {
      avatar = currentUser.avatar;
    }
    return null == avatar;
  }
};
obj = { key: "enable-notification", shouldShowStep: null };
let closure_13 = importDefaultResult(function*() {
  if (table === 2) {
    table = 3;
    HermesBuiltin.throwTypeError();
  } else if (tmp3 === 3) {
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
      table = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          let closure_0 = tmp4;
          let obj1 = outer1_0(table[9]);
          if (obj1.isIOS()) {
            const NativePermissionManager = outer1_4.NativePermissionManager;
            c1 = 1;
            table = 1;
            obj1 = { value: null, done: false };
            obj1[0] = NativePermissionManager.getNotificationAuthorizationStatus();
            return obj1;
          } else {
            table = 3;
          }
        }
      } else if (arg0 === 1) {
        table = 3;
        throw arg1;
      }
      table = 3;
      obj = { value: null, done: true };
      obj[0] = arg1;
      return obj;
    } catch (tmp11) {
      table = tmp;
      throw tmp11;
    }
  }
});
obj[1] = function() {
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
let closure_14 = importDefaultResult(function*() {
  if (c0 === 2) {
    c0 = 3;
    HermesBuiltin.throwTypeError();
  } else if (tmp3 === 3) {
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const localAccount = outer1_6.getLocalAccount(outer1_8.CONTACTS);
          let friendSync;
          if (localAccount != null) {
            friendSync = localAccount.friendSync;
          }
          if (friendSync) {
            c0 = 3;
          } else {
            c1 = 1;
            c0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = (function shouldSkipContactSyncStep() {
              const self = this;
              const apply = closure_12.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
            return obj1;
          }
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw arg1;
      }
      c0 = 3;
      obj = { value: null, done: true };
      obj[0] = arg1;
      return obj;
    } catch (tmp12) {
      c0 = tmp;
      throw tmp12;
    }
  }
});
obj[1] = function() {
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
      return shouldShowGuardianConnect.getShouldShowGuardianConnect();
    }
  },
  {
    key: "accept-invite",
    shouldShowStep: require("showInstantInviteActionSheet").hasDeferredInvite,
    transitionStep() {
      importDefault(709).dispatch({ type: "DEFERRED_INVITE_SHOW" });
    }
  }
];
let obj1 = {
  key: "accept-invite",
  shouldShowStep: require("showInstantInviteActionSheet").hasDeferredInvite,
  transitionStep() {
    importDefault(709).dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
let result = require("initialize").fileFinishedImporting("modules/nuf/native/NewUserUtils.tsx");

export const getKeyForOnboardingStep = function getKeyForOnboardingStep(onboardingStepIndex) {
  let key;
  if (items[onboardingStepIndex] != null) {
    key = tmp.key;
  }
  return key;
};
export const continueToNextStep = function continueToNextStep(onboardingStepIndex, current) {
  let closure_0 = current;
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
        const items = [routes[1]];
        const CommonActions = state(outer1_2[12]).CommonActions;
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