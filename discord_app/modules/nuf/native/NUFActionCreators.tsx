// discord_app/modules/nuf/native/NUFActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ContactSyncUtils from "../../contact_sync/native/ContactSyncUtils.tsx";
import ContactSyncActionCreatorsDefault from "../../contact_sync/native/ContactSyncActionCreators.tsx";
import HubEmailConnectionModalActionCreatorsDefault from "../../hub/native/components/HubEmailConnectionModalActionCreators.tsx";
import nuf_NUFActionCreators from "../NUFActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
let closure_13 = async function _startContactSyncForDiscoverability(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp4;
          currentUser = currentUser.getCurrentUser();
          let phone;
          if (currentUser != null) {
            phone = currentUser.phone;
          }
          localAccount = localAccount.getLocalAccount(constants.CONTACTS);
          ContactSyncUtils;
          if (null == phone) {
            const _Error = Error;
            const error = new Error("Cannot start contact sync without a phone number");
            throw error;
          } else {
            timestampProducer(tmp30);
            let obj4 = ContactSyncActionCreatorsDefault;
            let obj1 = { enabled: tmp15, name: tmp30 };
            c2 = 1;
            c3 = 1;
            const obj2 = { value: obj4.updateContactSyncEnabled(obj1), done: false };
            return obj2;
          }
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          obj1 = closure_129_0(closure_129_2[15]);
          c2 = 2;
          c3 = 1;
          obj4 = { value: obj1.uploadContacts("[]", true), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp25) {
      c3 = tmp;
      throw tmp25;
    }
  }
};
const ContactSyncModalStore = fn(12677);
({
  setAllowEmail: closure_4,
  setAllowSync: hasOwnProperty,
  setName: metroRequire,
  useContactSyncModalStore: closure_7,
} = ContactSyncModalStore);
let closure_10 = fn(12705).NUF_DISCOVERABILITY_MODAL_KEY;
const PlatformTypes = fn(1074).PlatformTypes;
let closure_12 = fn(6980).IN_APP_GUILD_TEMPLATES_MODAL_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/NUFActionCreators.tsx");

export const startOnboarding = function startOnboarding() {
  DispatcherDefault.dispatch({ type: "ONBOARDING_START" });
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
  DispatcherDefault.dispatch({ type: "ONBOARDING_STEP", skip: flag, skipAttempt: flag2 });
};
export const previousOnboardingStep = function previousOnboardingStep() {
  DispatcherDefault.dispatch({ type: "ONBOARDING_STEP", back: true });
};
export const transitionToNUFGuildTemplatesModal = function transitionToNUFGuildTemplatesModal(SLIDE_IN) {
  closure_0 = SLIDE_IN;
  ModalActionCreatorsDefault.pushLazy(
    asyncGeneratorStep(async () => {
      closure_1 = tmp5;
      await tmp2(paths[10])(paths[9], paths.paths);
      closure_128_0 = arg1.default;
      closure_128_0.modalConfig = { animation: closure_129_0 };
      return closure_128_0;
    }),
    {},
    closure_12,
  );
};
export const transitionToHubEmailConnectionModal = function transitionToHubEmailConnectionModal(SLIDE_IN, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = {
    onCloseExtra(arg0) {
      if (arg0) {
        const result = nuf_NUFActionCreators.setNewUserFlowCompleted();
      } else {
        DispatcherDefault.dispatch({ type: "ONBOARDING_STEP" });
      }
    },
    displayStudentPrompt: flag,
  };
  obj.open(obj, SLIDE_IN);
};
export const openDiscoverabilityModal = function openDiscoverabilityModal() {
  ModalActionCreatorsDefault.pushLazy(
    asyncGeneratorStep(async () => {
      closure_1 = tmp5;
      closure_0 = tmp2;
      await require("asyncRequireImpl")(paths[13], paths.paths);
      closure_128_0 = arg1.default;
      closure_128_0.modalConfig = { animation: closure_129_0(closure_129_2[14]).ModalAnimation.SLIDE_IN_OUT };
      return closure_128_0;
    }),
    {},
    closure_10,
  );
};
export const closeDiscoverabilityModal = function closeDiscoverabilityModal(skip) {
  let obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_10);
  obj = { type: "ONBOARDING_STEP", skip };
  DispatcherDefault.dispatch(obj);
};
export const startContactSyncForDiscoverability = function startContactSyncForDiscoverability() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const toggleDiscoverabilityForUser = function toggleDiscoverabilityForUser() {
  const currentUser = UserStore.getCurrentUser();
  let phone;
  if (currentUser != null) {
    phone = currentUser.phone;
  }
  state = state.getState();
  if (null != phone) {
    hasOwnProperty(!tmp4);
  } else {
    hasOwnProperty(false);
    if (!tmp4) {
      React4(true);
    }
  }
};
