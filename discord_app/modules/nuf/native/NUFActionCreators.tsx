// === Module 11877: _startContactSyncForDiscoverability ===

// Module 11877 (_startContactSyncForDiscoverability)
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef5260 from "module_5260" /* 5260 */;
import _modDef11922 from "module_11922" /* 11922 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ContactSyncModes from "ContactSyncModes" /* 11850 */;
import set from "set" /* 5221 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { NUF_DISCOVERABILITY_MODAL_KEY as closure_10 } from "NewUserTypes" /* 11878 */;
import { PlatformTypes } from "ME" /* 676 */;
import { IN_APP_GUILD_TEMPLATES_MODAL_KEY as closure_12 } from "NUXGuildTemplatesAnalytics" /* 8617 */;

const require = fn;
function _startContactSyncForDiscoverability() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp4;
              const currentUser = closure_1_9.getCurrentUser();
              let phone;
              if (currentUser != null) {
                phone = currentUser.phone;
              }
              const localAccount = closure_1_8.getLocalAccount(closure_1_11.CONTACTS);
              callback(11853);
              if (null == phone) {
                const _Error = Error;
                error = new Error("Cannot start contact sync without a phone number");
                throw error;
              } else {
                closure_1_6(callback);
                let obj4 = closure_1_1(11857);
                obj1 = { enabled: null, name: null };
                obj1[0] = tmp15;
                obj1[1] = callback;
                dependencyMap = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj4.updateContactSyncEnabled(obj1);
                return obj2;
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              obj1 = callback(11853);
              dependencyMap = 2;
              c3 = 1;
              obj4 = { value: null, done: false };
              obj4[0] = obj1.uploadContacts("[]", true);
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp25) {
          c3 = tmp;
          throw tmp25;
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ setAllowEmail: c4, setAllowSync: c5, setName: closure_6, useContactSyncModalStore: error } = ContactSyncModes);
let result = require("obj132").fileFinishedImporting("modules/nuf/native/NUFActionCreators.tsx");

export const startOnboarding = function startOnboarding() {
  dispatcherDefault.dispatch({ type: "ONBOARDING_START" });
};
export const nextOnboardingStep = function nextOnboardingStep(skip) {
  let flag = skip.skip;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = skip.skipAttempt;
  if (flag2 === undefined) {
    flag2 = false;
  }
  dispatcherDefault.dispatch({ type: "ONBOARDING_STEP", skip: flag, skipAttempt: flag2 });
};
export const previousOnboardingStep = function previousOnboardingStep() {
  dispatcherDefault.dispatch({ type: "ONBOARDING_STEP", back: true });
};
export const transitionToNUFGuildTemplatesModal = function transitionToNUFGuildTemplatesModal(SLIDE_IN) {
  closure_0 = SLIDE_IN;
  _modDef5260.pushLazy(callback(function*() {
    closure_1 = tmp5;
    yield SLIDE_IN(paths[10])(paths[9], paths.paths);
    closure_0 = arg1.default;
    const obj = { animation: null };
    obj[0] = closure_0;
    closure_0.modalConfig = obj;
    return closure_0;
  }), {}, closure_12);
};
export const transitionToHubEmailConnectionModal = function transitionToHubEmailConnectionModal(SLIDE_IN, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = {
    onCloseExtra(arg0) {
      if (arg0) {
        const result = callback(11925).setNewUserFlowCompleted();
        const obj2 = callback(11925);
      } else {
        callback2(709).dispatch({ type: "ONBOARDING_STEP" });
        const obj = callback2(709);
      }
    },
    displayStudentPrompt: flag
  };
  obj.open(obj, SLIDE_IN);
};
export const openDiscoverabilityModal = function openDiscoverabilityModal() {
  _modDef5260.pushLazy(callback(function*() {
    closure_1 = tmp5;
    yield closure_1_0(paths[10])(paths[13], paths.paths);
    const callback = arg1.default;
    const obj = { animation: null };
    obj[0] = callback(paths[14]).ModalAnimation.SLIDE_IN_OUT;
    callback.modalConfig = obj;
    return callback;
  }), {}, closure_10);
};
export const closeDiscoverabilityModal = function closeDiscoverabilityModal(skip) {
  let obj = _modDef5260;
  obj.popWithKey(closure_10);
  obj = { type: "ONBOARDING_STEP", skip };
  dispatcherDefault.dispatch(obj);
};
export const startContactSyncForDiscoverability = function startContactSyncForDiscoverability(arg0) {
  const self = this;
  const apply = _startContactSyncForDiscoverability.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const toggleDiscoverabilityForUser = function toggleDiscoverabilityForUser() {
  currentUser = currentUser.getCurrentUser();
  let phone;
  if (currentUser != null) {
    phone = currentUser.phone;
  }
  state = state.getState();
  if (null != phone) {
    callback3(!tmp4);
  } else {
    callback3(false);
    if (!tmp4) {
      callback2(true);
    }
  }
};