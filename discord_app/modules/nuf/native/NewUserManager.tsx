// discord_app/modules/nuf/native/NewUserManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import NUFActionCreators from "NUFActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import PhoneStore from "../../phone/PhoneStore.tsx";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import NewUserStore from "../NewUserStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const NewUserTypes = fn(12835).NewUserTypes;
const PlatformTypes = fn(1074).PlatformTypes;
let closure_10 = fn(12849).HUBS_IN_ONBOARDING_COUNTRIES;
let obj = {
  REGISTRATION: "Registration",
  ADD_AVATAR: "Add Avatar",
  CONTACT_SYNC: "Contact Sync",
  GUILD_TEMPLATE: "Guild Template",
  STUDENT_HUB: "Student Hub",
  NEW_USER_INTENT: "New User Intent",
  ACCEPT_INVITE: "Accept Invite",
  DISCOVERABILITY: "Discoverability",
};
let obj2 = {
  key: obj.ADD_AVATAR,
  shouldShowStep() {
    const currentUser = UserStore.getCurrentUser();
    let avatar;
    if (currentUser != null) {
      avatar = currentUser.avatar;
    }
    return null == avatar;
  },
  transitionToStep: fn(17548).openAddAvatarModal,
};
const items = [obj2, , , , ,];
let obj3 = {
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
  transitionToStep: fn(12806).openContactSyncModalOnboarding,
};
items[1] = {
  key: obj.DISCOVERABILITY,
  shouldShowStep() {
    return null == ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
  },
  transitionToStep: fn(12834).openDiscoverabilityModal,
};
items[2] = obj3;
items[3] = {
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
  },
};
items[4] = {
  key: obj.GUILD_TEMPLATE,
  shouldShowStep() {
    return NewUserStore.getType() === NewUserTypes.ORGANIC_REGISTERED;
  },
  transitionToStep() {
    return NUFActionCreators.transitionToNUFGuildTemplatesModal(ConstantsIOS.ModalAnimation.SLIDE_IN);
  },
};
let obj4 = {
  key: obj.DISCOVERABILITY,
  shouldShowStep() {
    return null == ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
  },
  transitionToStep: fn(12834).openDiscoverabilityModal,
};
items[5] = {
  key: obj.ACCEPT_INVITE,
  shouldShowStep: fn(9950).hasDeferredInvite,
  transitionToStep() {
    DispatcherDefault.dispatch({ type: "DEFERRED_INVITE_SHOW" });
  },
};
const prototype = function NewUserManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult._onboardingStepIndex = -1;
  applyArgumentsResult._lastStep = null;
  applyArgumentsResult.actions = {
    ONBOARDING_STEP(guildId) {
      applyArgumentsResult.handleOnboardingStep(guildId);
    },
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
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
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
            const obj5 = { value, done: true };
            return obj5;
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
              const obj7 = { value: undefined, done: true };
              return obj7;
            } else {
              closure_132_1._onboardingStepIndex = closure_132_1._onboardingStepIndex + 1;
              if (closure_132_1._onboardingStepIndex >= length.length) {
                const obj9 = { skip_attempt: closure_131_1 };
                applyArgumentsResult(_lastStep2[15]).trackNUFStep(closure_132_1._lastStep, "NUF Complete", obj9);
                const obj6 = applyArgumentsResult(_lastStep2[15]);
                const result = applyArgumentsResult(_lastStep2[16]).setNewUserFlowCompleted();
                c6 = 3;
                const obj11 = { value: undefined, done: true };
                return obj11;
              } else {
                closure_131_7 = length[closure_132_1._onboardingStepIndex];
                key3 = closure_131_7.key;
                shouldShowStep = closure_131_7.shouldShowStep;
                transitionToStep2 = closure_131_7.transitionToStep;
                c5 = 2;
                c6 = 1;
                const obj12 = { value: shouldShowStep(), done: false };
                return obj12;
              }
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          if (value) {
            const obj14 = { skip: closure_131_0, skip_attempt: closure_131_1 };
            applyArgumentsResult(_lastStep2[15]).trackNUFStep(closure_132_1._lastStep, key3, obj14);
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
            const obj2 = applyArgumentsResult(_lastStep2[15]);
          } else {
            const obj = { skip: closure_131_0 };
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
  applyArgumentsResult.handleOnboardingStep = function () {
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
class prototype extends tmp2 {}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/NewUserManager.tsx");

export default prototype1;
