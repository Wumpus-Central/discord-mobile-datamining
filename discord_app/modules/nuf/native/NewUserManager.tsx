// === Module 16344: items ===

// Module 16344 (items)
import NewUserTypes from "NewUserTypes";
import handleSetLocationMetadata from "handleSetLocationMetadata";
import set from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import initialize from "initialize";
import { NewUserTypes } from "NewUserTypes";
import { PlatformTypes } from "ME";
import { HUBS_IN_ONBOARDING_COUNTRIES as closure_10 } from "HubEmailConnectionSteps";
import "initialize";

const require = arg1;
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
      const result = require(11911) /* _startContactSyncForDiscoverability */.transitionToHubEmailConnectionModal(require(691) /* keys */.ModalAnimation.SLIDE_IN, true);
    }
  },
  {
    key: obj.GUILD_TEMPLATE,
    shouldShowStep() {
      return store2.getType() === NewUserTypes.ORGANIC_REGISTERED;
    },
    transitionToStep() {
      return require(11911) /* _startContactSyncForDiscoverability */.transitionToNUFGuildTemplatesModal(require(691) /* keys */.ModalAnimation.SLIDE_IN);
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
    importDefault(709).dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
let prototype = function NewUserManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  let closure_0 = applyArgumentsResult;
  applyArgumentsResult._onboardingStepIndex = -1;
  applyArgumentsResult._lastStep = null;
  applyArgumentsResult.actions = {
    ONBOARDING_STEP(guildId) {
      closure_0.handleOnboardingStep(guildId);
    }
  };
  closure_0 = undefined;
  const importDefault = applyArgumentsResult;
  closure_0 = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    const iter = (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
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
          v0 = 2;
          if (0 === key2) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c4 = 0;
              let _onboardingStepIndex = tmp2;
              let flag;
              let c1;
              let c2;
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
              key2 = undefined;
              v0 = undefined;
              let c7;
              let c8;
              let c9;
              let callback2;
              key2 = 1;
              v0 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              _onboardingStepIndex = c1._onboardingStepIndex;
              if (c2) {
                let key;
                if (outer1_11[outer1_3] != null) {
                  key = tmp53.key;
                }
                c1 = key;
                if (key == null) {
                  c1 = null;
                }
                c1._lastStep = c1;
                outer1_1._onboardingStepIndex = outer1_1._onboardingStepIndex - 1;
                const outer1_4 = outer1_11[outer1_1._onboardingStepIndex];
                key2 = outer1_4.key;
                v0 = outer1_4.transitionToStep;
                callback(outer1_2[15]).trackNUFStep(outer1_1._lastStep, key2, { back: true });
                v0();
                v0 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = undefined;
                return obj2;
              } else {
                c1._onboardingStepIndex = c1._onboardingStepIndex + 1;
                if (c1._onboardingStepIndex >= outer1_11.length) {
                  let obj5 = callback(outer1_2[15]);
                  const obj3 = { skip_attempt: null };
                  obj3[0] = c1;
                  obj5.trackNUFStep(c1._lastStep, "NUF Complete", obj3);
                  let obj7 = callback(outer1_2[16]);
                  const result = obj7.setNewUserFlowCompleted();
                  v0 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = undefined;
                  return obj4;
                } else {
                  const outer1_7 = outer1_11[c1._onboardingStepIndex];
                  const outer1_8 = outer1_7.key;
                  const outer1_9 = outer1_7.shouldShowStep;
                  const outer1_10 = outer1_7.transitionToStep;
                  key2 = 2;
                  v0 = 1;
                  obj5 = { value: null, done: false };
                  obj5[0] = outer1_9();
                  return obj5;
                }
              }
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            if (arg1) {
              obj1 = callback(outer1_2[15]);
              obj7 = { skip: null, skip_attempt: null };
              obj7[0] = flag;
              obj7[1] = c1;
              obj1.trackNUFStep(c1._lastStep, c8, obj7);
              let key1;
              if (outer1_11[_onboardingStepIndex] != null) {
                key1 = tmp19.key;
              }
              c2 = key1;
              if (key1 == null) {
                c2 = null;
              }
              c1._lastStep = c2;
              callback2();
              const tmp16 = c1;
            } else {
              obj = { skip: null };
              obj[0] = flag;
              c1.handleOnboardingStep(obj);
            }
            v0 = 3;
          }
        } catch (tmp71) {
          v0 = tmp;
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
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
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
    importDefault(709).dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
let result = require("set").fileFinishedImporting("modules/nuf/native/NewUserManager.tsx");

export default prototype;