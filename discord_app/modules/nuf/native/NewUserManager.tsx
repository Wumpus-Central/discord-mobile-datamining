// === Module 17567: NewUserManager ===

// Module 17567 (NewUserManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9481 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12325 */;
import NUFActionCreators from "NUFActionCreators" /* 12353 */;
import NUFConstants from "NUFConstants" /* 12354 */;
import HubConstants from "HubConstants" /* 12385 */;
import AddAvatarModalActionCreators from "AddAvatarModalActionCreators" /* 17568 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PhoneStore from "PhoneStore" /* 6430 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import UserStore from "UserStore" /* 1377 */;
import NewUserStore from "NewUserStore" /* 5949 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

const NewUserTypes = NUFConstants.NewUserTypes;
const PlatformTypes = Constants.PlatformTypes;
let includes = HubConstants.HUBS_IN_ONBOARDING_COUNTRIES;
let obj = { REGISTRATION: "Registration", ADD_AVATAR: "Add Avatar", CONTACT_SYNC: "Contact Sync", GUILD_TEMPLATE: "Guild Template", STUDENT_HUB: "Student Hub", NEW_USER_INTENT: "New User Intent", ACCEPT_INVITE: "Accept Invite", DISCOVERABILITY: "Discoverability" };
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
  transitionToStep: AddAvatarModalActionCreators.openAddAvatarModal
};
const obj3 = {
  key: obj.CONTACT_SYNC,
  shouldShowStep() {
    const localAccount = ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
    let friendSync;
    if (localAccount != null) {
      friendSync = localAccount.friendSync;
    }
    let tmp3 = !friendSync;
    if (tmp3) {
      const currentUser = UserStore.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      tmp3 = null != phone;
    }
    return tmp3;
  },
  transitionToStep: ContactSyncModalActionCreators.openContactSyncModalOnboarding
};
const items = [obj2, , , , , ];
const obj4 = {
  key: obj.DISCOVERABILITY,
  shouldShowStep() {
    return null == ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
  },
  transitionToStep: NUFActionCreators.openDiscoverabilityModal
};
items[1] = obj4;
items[2] = obj3;
items[3] = {
  key: obj.STUDENT_HUB,
  shouldShowStep() {
    if (NewUserStore.getType() !== NewUserTypes.ORGANIC_REGISTERED) {
      return false;
    } else {
      const countryCode = PhoneStore.getCountryCode();
      let alpha2;
      includes = includes.includes;
      if (countryCode != null) {
        alpha2 = countryCode.alpha2;
      }
      return includes(alpha2);
    }
  },
  transitionToStep() {
    const obj = NUFActionCreators;
    const result = obj.transitionToHubEmailConnectionModal(ConstantsIOS.ModalAnimation.SLIDE_IN, true);
  }
};
items[4] = {
  key: obj.GUILD_TEMPLATE,
  shouldShowStep() {
    return NewUserStore.getType() === NewUserTypes.ORGANIC_REGISTERED;
  },
  transitionToStep() {
    const obj = NUFActionCreators;
    return obj.transitionToNUFGuildTemplatesModal(ConstantsIOS.ModalAnimation.SLIDE_IN);
  }
};
const obj5 = {
  key: obj.ACCEPT_INVITE,
  shouldShowStep: instant_invite_InstantInviteUtils.hasDeferredInvite,
  transitionToStep() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
items[5] = obj5;
class NewUserManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._onboardingStepIndex = -1;
    applyArgumentsResult._lastStep = null;
    applyArgumentsResult.actions = {
      ONBOARDING_STEP(guildId) {
        require.handleOnboardingStep(guildId);
      }
    };
    let closure_0 = _asyncToGenerator(async (arg0) => {
      let _lastStep2;
      let c4;
      let c5;
      let c6;
      let closure_3;
      let flag;
      let flag2;
      let flag3;
      let key2;
      let transitionToStep;
      closure_0 = arg0;
      const _onboardingStepIndex = closure_132_1._onboardingStepIndex;
      const tmp79 = flag3;
      if (tmp79) {
        let key;
        if (length[_onboardingStepIndex] != null) {
          key = tmp52.key;
        }
        let _lastStep = key;
        if (key == null) {
          _lastStep = null;
        }
        closure_132_1._lastStep = _lastStep;
        closure_132_1._onboardingStepIndex = closure_132_1._onboardingStepIndex - 1;
        let closure_4 = length[closure_132_1._onboardingStepIndex];
        key2 = closure_4.key;
        transitionToStep = closure_4.transitionToStep;
        const obj10 = closure_0(_lastStep2[15]);
        obj10.trackNUFStep(closure_132_1._lastStep, key2, { back: true });
        transitionToStep();
      }
      closure_132_1._onboardingStepIndex = closure_132_1._onboardingStepIndex + 1;
      if (closure_132_1._onboardingStepIndex >= length.length) {
        const obj9 = { skip_attempt: flag2 };
        const obj6 = closure_0(_lastStep2[15]);
        obj6.trackNUFStep(closure_132_1._lastStep, "NUF Complete", obj9);
        const obj8 = closure_0(_lastStep2[16]);
        const result = obj8.setNewUserFlowCompleted();
      }
      let closure_7 = length[closure_132_1._onboardingStepIndex];
      key2 = closure_7.key;
      const shouldShowStep = closure_7.shouldShowStep;
      transitionToStep = closure_7.transitionToStep;
      await shouldShowStep();
      if (value) {
        const obj14 = { skip: flag, skip_attempt: flag2 };
        const obj2 = closure_0(_lastStep2[15]);
        obj2.trackNUFStep(closure_132_1._lastStep, key2, obj14);
        let key1;
        if (length[_onboardingStepIndex] != null) {
          key1 = tmp18.key;
        }
        _lastStep2 = key1;
        if (key1 == null) {
          _lastStep2 = null;
        }
        closure_132_1._lastStep = _lastStep2;
        transitionToStep();
      } else {
        const obj = { skip: flag };
        closure_132_1.handleOnboardingStep(obj);
      }
      await "IconComponent";
      flag = closure_0.skip ?? false;
      flag2 = closure_0.skipAttempt ?? false;
      flag3 = closure_0.back ?? false;
      return "Set";
    });
    applyArgumentsResult.handleOnboardingStep = function() {
      return closure_0(...arguments);
    };
    return applyArgumentsResult;
  }
}
const newUserManager = new NewUserManager();
let result = size.fileFinishedImporting("modules/nuf/native/NewUserManager.tsx");

export default newUserManager;