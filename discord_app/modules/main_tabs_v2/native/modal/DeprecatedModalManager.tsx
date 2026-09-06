// discord_app/modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx
import NavigationRouteUtils from "../../helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import getDeprecatedModalDataDefault from "../../../../utils/getDeprecatedModalData.tsx";
import VerificationUtilsDefault from "../../../verification/VerificationUtils.tsx";
import SafetyFlowsExperiment from "../../../safety_flows/SafetyFlowsExperiment.tsx";
import GuildSettingsStore from "../../../guild_settings/GuildSettingsStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";
import NotificationSettingsModalStore from "../../../../stores/NotificationSettingsModalStore.tsx";
import UserRequiredActionStore from "../../../../stores/UserRequiredActionStore.tsx";
import AutomaticLifecycleManager from "../../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handlePushedModal(modal) {
  let obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    obj = { modal };
    rootNavigationRef.navigate("modal", obj);
  }
}
function handlePoppedModal() {
  NavigationRouteUtils.popModal();
}
function pushFirstOpenModal(arg0, arg1) {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let key = nextResult;
    let isOpenResult;
    if (nextResult != null) {
      let isOpen = nextResult.isOpen;
      if (isOpen != null) {
        isOpenResult = isOpen(APP, arg1);
      }
    }
    let component = key.getComponent();
    let store = key.store;
    let getProps;
    if (store != null) {
      getProps = store.getProps;
    }
    if (typeof getProps === "function") {
      let store2 = key.store;
      let props = store2.getProps();
    } else {
      props = {};
    }
    let obj = { key: null };
    key = key.key;
    obj.key = key;
    component = handlePushedModal(getDeprecatedModalDataDefault(component, obj, props));
  }
}
function createPushModalHandler() {
  closure_0 = [...arguments];
  return () => {
    pushFirstOpenModal(closure_0);
  };
}
const Constants = fn(1074);
const UserRequiredActions = Constants.UserRequiredActions;
const APP = Constants.AppContext.APP;
const EMAIL_VERIFICATION_MODAL_OPEN = "EMAIL_VERIFICATION_MODAL_OPEN";
let closure_15 = {
  key: "EMAIL_VERIFICATION_MODAL_OPEN",
  store: UserRequiredActionStore,
  closable: false,
  center: true,
  isOpen(arg0, action) {
    if (action == null) {
      action = UserRequiredActionStore.getAction();
    }
    let result = VerificationUtilsDefault.isFullScreenVerification(action);
    if (result) {
      result = null != AuthenticationStore.getToken();
    }
    if (result) {
      result = !SafetyFlowsExperiment.isEligibleForSafetyFlowsExperiment({ location: "modal-manager-verification" });
    }
    return result;
  },
  getComponent() {
    return require("VerificationModal").default;
  },
};
const USER_REQUIRED_ACTION_UPDATE = "USER_REQUIRED_ACTION_UPDATE";
let closure_17 = {
  key: "USER_REQUIRED_ACTION_UPDATE",
  store: UserRequiredActionStore,
  center: true,
  isOpen(arg0, arg1) {
    let action = arg1;
    if (arg1 == null) {
      action = UserRequiredActionStore.getAction();
    }
    return action === UserRequiredActions.AGREEMENTS;
  },
  getComponent() {
    return require("NewTermsModal").default;
  },
};
let prototype = function DeprecatedModalManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  let obj = {
    CONNECTION_OPEN_SUPPLEMENTAL: createPushModalHandler(closure_17, closure_15),
    EMAIL_VERIFICATION_MODAL_OPEN: createPushModalHandler(closure_15),
    USER_REQUIRED_ACTION_UPDATE(requiredAction) {
      if (null == requiredAction.requiredAction) {
        if (obj.isModalOpen(USER_REQUIRED_ACTION_UPDATE)) {
          let tmp5Result = tmp5(4417);
          tmp5Result.popModal(tmp7);
        }
        tmp5Result = tmp5(4417);
        if (tmp5Result.isModalOpen(EMAIL_VERIFICATION_MODAL_OPEN)) {
          tmp5(4417).popModal(tmp9);
          const tmp5Result1 = tmp5(4417);
        }
        obj = NavigationRouteUtils;
        tmp7 = USER_REQUIRED_ACTION_UPDATE;
        tmp9 = EMAIL_VERIFICATION_MODAL_OPEN;
      } else {
        const items = [closure_1_17, closure_1_15];
        pushFirstOpenModal(items, requiredAction.requiredAction);
      }
    },
    GUILD_SETTINGS_OPEN: null,
    NOTIFICATION_SETTINGS_MODAL_OPEN: null,
    CREATE_INVITE_MODAL_OPEN: null,
    GUILD_SETTINGS_CLOSE: handlePoppedModal,
    NOTIFICATION_SETTINGS_MODAL_CLOSE: handlePoppedModal,
    PREMIUM_PAYMENT_MODAL_CLOSE: handlePoppedModal,
    EMAIL_VERIFICATION_MODAL_CLOSE: handlePoppedModal,
    CREATE_INVITE_MODAL_CLOSE: handlePoppedModal,
    QUICKSWITCHER_HIDE: handlePoppedModal,
    IFE_EXPERIMENT_SEARCH_MODAL_CLOSE: handlePoppedModal,
  };
  obj = {
    key: "GUILD_SETTINGS_OPEN",
    store: GuildSettingsStore,
    closable: false,
    getComponent() {
      return require("GuildSettingsModal").default;
    },
  };
  obj.GUILD_SETTINGS_OPEN = createPushModalHandler(obj);
  obj = {
    key: "NOTIFICATION_SETTINGS_MODAL_OPEN",
    store: NotificationSettingsModalStore,
    closable: false,
    getComponent() {
      return require("NotificationSettingsModal").default;
    },
  };
  obj.NOTIFICATION_SETTINGS_MODAL_OPEN = createPushModalHandler(obj);
  obj.CREATE_INVITE_MODAL_OPEN = createPushModalHandler({
    key: "CREATE_INVITE_MODAL_OPEN",
    store: CreateInviteModalStore,
    closable: false,
    getComponent() {
      return require("InviteSettingsModal").default;
    },
  });
  applyArgumentsResult.actions = obj;
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx");

export default prototype;
