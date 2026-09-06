// === Module 17432: NewUserManager ===

// Module 17432 (NewUserManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import NUFActionCreators from "NUFActionCreators" /* 12704 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import PhoneStore from "PhoneStore" /* 6943 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;
import UserStore from "UserStore" /* 1371 */;
import NewUserStore from "NewUserStore" /* 5559 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const NewUserTypes = fn(12705).NewUserTypes;
const PlatformTypes = fn(1074).PlatformTypes;
let closure_10 = fn(12719).HUBS_IN_ONBOARDING_COUNTRIES;
let obj = { REGISTRATION: "Registration", ADD_AVATAR: "Add Avatar", CONTACT_SYNC: "Contact Sync", GUILD_TEMPLATE: "Guild Template", STUDENT_HUB: "Student Hub", NEW_USER_INTENT: "New User Intent", ACCEPT_INVITE: "Accept Invite", DISCOVERABILITY: "Discoverability" };
obj = {
  key: obj.ADD_AVATAR,
  shouldShowStep() {
    const currentUser = UserStore.getCurrentUser();
    let avatar;
    if (currentUser != null) {
      avatar = currentUser.avatar;
    }
    return null == avatar;
  },
  transitionToStep: fn(17433).openAddAvatarModal
};
obj = {
  key: obj.CONTACT_SYNC,
  shouldShowStep() {
    const localAccount = ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
    let friendSync;
    if (localAccount != null) {
      friendSync = localAccount.friendSync;
    }
    let tmp3 = !friendSync;
    if (!friendSync) {
      const currentUser = UserStore.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      tmp3 = null != phone;
    }
    return tmp3;
  },
  transitionToStep: fn(12676).openContactSyncModalOnboarding
};
const items = [
  obj,
  {
    key: obj.DISCOVERABILITY,
    shouldShowStep() {
      return null == ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
    },
    transitionToStep: fn(12704).openDiscoverabilityModal
  },
  obj,
  {
    key: obj.STUDENT_HUB,
    shouldShowStep() {
      if (NewUserStore.getType() !== NewUserTypes.ORGANIC_REGISTERED) {
        return false;
      } else {
        const countryCode = PhoneStore.getCountryCode();
        let alpha2;
        if (countryCode != null) {
          alpha2 = countryCode.alpha2;
        }
        return closure_10.includes(alpha2);
      }
    },
    transitionToStep() {
      const result = NUFActionCreators.transitionToHubEmailConnectionModal(ConstantsIOS.ModalAnimation.SLIDE_IN, true);
    }
  },
  {
    key: obj.GUILD_TEMPLATE,
    shouldShowStep() {
      return NewUserStore.getType() === NewUserTypes.ORGANIC_REGISTERED;
    },
    transitionToStep() {
      return NUFActionCreators.transitionToNUFGuildTemplatesModal(ConstantsIOS.ModalAnimation.SLIDE_IN);
    }
  },

];
let obj1 = {
  key: obj.DISCOVERABILITY,
  shouldShowStep() {
    return null == ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
  },
  transitionToStep: fn(12704).openDiscoverabilityModal
};
items[5] = {
  key: obj.ACCEPT_INVITE,
  shouldShowStep: fn(9820).hasDeferredInvite,
  transitionToStep() {
    DispatcherDefault.dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
let prototype = function NewUserManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult._onboardingStepIndex = -1;
  applyArgumentsResult._lastStep = null;
  applyArgumentsResult.actions = {
    ONBOARDING_STEP(guildId) {
      applyArgumentsResult.handleOnboardingStep(guildId);
    }
  };
  closure_129_1 = applyArgumentsResult;
  closure_129_0 = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
            closure_3 = tmp2;
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            let flag = applyArgumentsResult.skip;
            if (flag === undefined) {
              flag = false;
            }
            closure_131_0 = flag;
            let flag2 = applyArgumentsResult.skipAttempt;
            if (flag2 === undefined) {
              flag2 = false;
            }
            closure_131_1 = flag2;
            let flag3 = applyArgumentsResult.back;
            if (flag3 === undefined) {
              flag3 = false;
            }
            closure_131_2 = flag3;
            let _onboardingStepIndex;
            closure_131_4 = undefined;
            let key2;
            let transitionToStep;
            closure_131_7 = undefined;
            let key3;
            let shouldShowStep;
            let transitionToStep2;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else {
            _onboardingStepIndex = closure_132_1._onboardingStepIndex;
            if (closure_131_2) {
              let key;
              if (length[_onboardingStepIndex] != null) {
                key = tmp53.key;
              }
              let _lastStep = key;
              if (key == null) {
                _lastStep = null;
              }
              closure_132_1._lastStep = _lastStep;
              closure_132_1._onboardingStepIndex = closure_132_1._onboardingStepIndex - 1;
              closure_131_4 = length[closure_132_1._onboardingStepIndex];
              key2 = closure_131_4.key;
              transitionToStep = closure_131_4.transitionToStep;
              applyArgumentsResult(_lastStep2[15]).trackNUFStep(closure_132_1._lastStep, key2, { back: true });
              transitionToStep();
              c6 = 3;
              const obj2 = { value: undefined, done: true };
              return obj2;
            } else {
              closure_132_1._onboardingStepIndex = closure_132_1._onboardingStepIndex + 1;
              if (closure_132_1._onboardingStepIndex >= length.length) {
                let obj5 = applyArgumentsResult(_lastStep2[15]);
                const obj3 = { skip_attempt: closure_131_1 };
                obj5.trackNUFStep(closure_132_1._lastStep, "NUF Complete", obj3);
                let obj7 = applyArgumentsResult(_lastStep2[16]);
                const result = obj7.setNewUserFlowCompleted();
                c6 = 3;
                const obj4 = { value: undefined, done: true };
                return obj4;
              } else {
                closure_131_7 = length[closure_132_1._onboardingStepIndex];
                key3 = closure_131_7.key;
                shouldShowStep = closure_131_7.shouldShowStep;
                transitionToStep2 = closure_131_7.transitionToStep;
                c5 = 2;
                c6 = 1;
                obj5 = { value: shouldShowStep(), done: false };
                return obj5;
              }
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          if (value) {
            obj1 = applyArgumentsResult(_lastStep2[15]);
            obj7 = { skip: closure_131_0, skip_attempt: closure_131_1 };
            obj1.trackNUFStep(closure_132_1._lastStep, key3, obj7);
            let key1;
            if (length[_onboardingStepIndex] != null) {
              key1 = tmp19.key;
            }
            _lastStep2 = key1;
            if (key1 == null) {
              _lastStep2 = null;
            }
            closure_132_1._lastStep = _lastStep2;
            transitionToStep2();
          } else {
            obj = { skip: closure_131_0 };
            closure_132_1.handleOnboardingStep(obj);
          }
          c6 = 3;
        }
      } catch (tmp71) {
        c6 = tmp;
        throw tmp71;
      }
    }
  });
  applyArgumentsResult.handleOnboardingStep = function() {
    const self = this;
    const apply = applyArgumentsResult.apply;
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/NewUserManager.tsx");

export default prototype;