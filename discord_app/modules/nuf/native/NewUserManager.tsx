// === Module 17010: items ===

// Module 17010 (items)
import keys from "keys" /* 691 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 5486 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 12242 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "handleSetLocationMetadata" /* 7716 */;
import closure_5 from "set" /* 5225 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import closure_7 from "initialize" /* 5570 */;
import { NewUserTypes } from "NewUserTypes" /* 12243 */;
import { PlatformTypes } from "ME" /* 676 */;
import { HUBS_IN_ONBOARDING_COUNTRIES as closure_10 } from "HubEmailConnectionSteps" /* 12257 */;

require = arg1;
let obj = { REGISTRATION: "Registration", ADD_AVATAR: "Add Avatar", CONTACT_SYNC: "Contact Sync", GUILD_TEMPLATE: "Guild Template", STUDENT_HUB: "Student Hub", NEW_USER_INTENT: "New User Intent", ACCEPT_INVITE: "Accept Invite", DISCOVERABILITY: "Discoverability" };
obj = {
  key: obj.ADD_AVATAR,
  shouldShowStep() {
    const currentUser = authStore.getCurrentUser();
    let avatar;
    if (currentUser != null) {
      avatar = currentUser.avatar;
    }
    return null == avatar;
  },
  transitionToStep: require("handlePressNext").openAddAvatarModal
};
obj = {
  key: obj.CONTACT_SYNC,
  shouldShowStep() {
    const localAccount = store.getLocalAccount(PlatformTypes.CONTACTS);
    let friendSync;
    if (localAccount != null) {
      friendSync = localAccount.friendSync;
    }
    let tmp3 = !friendSync;
    if (!friendSync) {
      const currentUser = authStore.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      tmp3 = null != phone;
    }
    return tmp3;
  },
  transitionToStep: require("handleNameInputScreenOrSuggestions").openContactSyncModalOnboarding
};
const items = [
  obj,
  {
    key: obj.DISCOVERABILITY,
    shouldShowStep() {
      return null == store.getLocalAccount(PlatformTypes.CONTACTS);
    },
    transitionToStep: require("_startContactSyncForDiscoverability").openDiscoverabilityModal
  },
  obj,
  {
    key: obj.STUDENT_HUB,
    shouldShowStep() {
      if (store2.getType() !== NewUserTypes.ORGANIC_REGISTERED) {
        return false;
      } else {
        countryCode = countryCode.getCountryCode();
        let alpha2;
        if (countryCode != null) {
          alpha2 = countryCode.alpha2;
        }
        return closure_10.includes(alpha2);
      }
    },
    transitionToStep() {
      const result = _startContactSyncForDiscoverability.transitionToHubEmailConnectionModal(keys.ModalAnimation.SLIDE_IN, true);
    }
  },
  {
    key: obj.GUILD_TEMPLATE,
    shouldShowStep() {
      return store2.getType() === NewUserTypes.ORGANIC_REGISTERED;
    },
    transitionToStep() {
      return _startContactSyncForDiscoverability.transitionToNUFGuildTemplatesModal(keys.ModalAnimation.SLIDE_IN);
    }
  },

];
let obj1 = {
  key: obj.DISCOVERABILITY,
  shouldShowStep() {
    return null == store.getLocalAccount(PlatformTypes.CONTACTS);
  },
  transitionToStep: require("_startContactSyncForDiscoverability").openDiscoverabilityModal
};
items[5] = {
  key: obj.ACCEPT_INVITE,
  shouldShowStep: require("showInstantInviteActionSheet").hasDeferredInvite,
  transitionToStep() {
    dispatcherDefault.dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
initializeDefault;
let prototype = function NewUserManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  closure_0 = applyArgumentsResult;
  applyArgumentsResult._onboardingStepIndex = -1;
  applyArgumentsResult._lastStep = null;
  applyArgumentsResult.actions = {
    ONBOARDING_STEP(guildId) {
      closure_0.handleOnboardingStep(guildId);
    }
  };
  closure_0 = undefined;
  importDefault = applyArgumentsResult;
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    let transitionToStep = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = 0;
              let _onboardingStepIndex = tmp2;
              let flag;
              c1 = undefined;
              c2 = undefined;
              flag = flag.skip;
              if (flag === undefined) {
                flag = false;
              }
              let flag2 = tmp83.skipAttempt;
              if (flag2 === undefined) {
                flag2 = false;
              }
              c1 = flag2;
              let flag3 = tmp83.back;
              if (flag3 === undefined) {
                flag3 = false;
              }
              c2 = flag3;
              _onboardingStepIndex = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              transitionToStep = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              _onboardingStepIndex = c1._onboardingStepIndex;
              if (c2) {
                key = undefined;
                if (closure_1_11[closure_1_3] != null) {
                  key = tmp53.key;
                }
                c1 = key;
                if (key == null) {
                  c1 = null;
                }
                c1._lastStep = c1;
                closure_1_1._onboardingStepIndex = closure_1_1._onboardingStepIndex - 1;
                closure_4 = closure_1_11[closure_1_1._onboardingStepIndex];
                key = closure_4.key;
                transitionToStep = closure_4.transitionToStep;
                callback(closure_1_2[15]).trackNUFStep(closure_1_1._lastStep, key, { back: true });
                transitionToStep();
                c6 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = undefined;
                return obj2;
              } else {
                c1._onboardingStepIndex = c1._onboardingStepIndex + 1;
                if (c1._onboardingStepIndex >= closure_1_11.length) {
                  let obj5 = callback(closure_1_2[15]);
                  const obj3 = { skip_attempt: null };
                  obj3[0] = c1;
                  obj5.trackNUFStep(c1._lastStep, "NUF Complete", obj3);
                  let obj7 = callback(closure_1_2[16]);
                  const result = obj7.setNewUserFlowCompleted();
                  c6 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = undefined;
                  return obj4;
                } else {
                  closure_7 = closure_1_11[c1._onboardingStepIndex];
                  key = closure_7.key;
                  shouldShowStep = closure_7.shouldShowStep;
                  transitionToStep = closure_7.transitionToStep;
                  c5 = 2;
                  c6 = 1;
                  obj5 = { value: null, done: false };
                  obj5[0] = shouldShowStep();
                  return obj5;
                }
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            if (arg1) {
              obj1 = callback(closure_1_2[15]);
              obj7 = { skip: null, skip_attempt: null };
              obj7[0] = flag;
              obj7[1] = c1;
              obj1.trackNUFStep(c1._lastStep, c8, obj7);
              let key1;
              if (closure_1_11[_onboardingStepIndex] != null) {
                key1 = tmp19.key;
              }
              c2 = key1;
              if (key1 == null) {
                c2 = null;
              }
              c1._lastStep = c2;
              transitionToStep();
              const tmp16 = c1;
            } else {
              obj = { skip: null };
              obj[0] = flag;
              c1.handleOnboardingStep(obj);
            }
            c6 = 3;
          }
        } catch (tmp71) {
          c6 = tmp;
          throw tmp71;
        }
      }
    })();
    iter.next();
    return iter;
  });
  applyArgumentsResult.handleOnboardingStep = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let obj2 = {
  key: obj.ACCEPT_INVITE,
  shouldShowStep: require("showInstantInviteActionSheet").hasDeferredInvite,
  transitionToStep() {
    dispatcherDefault.dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
let result = require("set").fileFinishedImporting("modules/nuf/native/NewUserManager.tsx");

export default prototype;