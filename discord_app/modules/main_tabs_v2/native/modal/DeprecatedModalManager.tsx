// discord_app/modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx
import coerceMainRoute from "../../helpers/NavigationRouteUtils.native.tsx";
import getRootNavigationRef from "../../RootNavigationRef.native.tsx";
import initializeDefault from "../../../../lib/AutomaticLifecycleManager.tsx";
import getDeprecatedModalDataDefault from "../../../../utils/getDeprecatedModalData.tsx";
import UserRequiredActionsDefault from "../../../verification/VerificationUtils.tsx";
import isEligibleForSafetyFlowsExperiment from "../../../safety_flows/SafetyFlowsExperiment.tsx";
import handleFormInit from "../../../guild_settings/GuildSettingsStore.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import updateWithLatestInvite from "../../../../stores/CreateInviteModalStore.tsx";
import FormStates from "../../../../stores/NotificationSettingsModalStore.tsx";
import importDefaultResult from "../../../../stores/UserRequiredActionStore.tsx";
import ME from "../../../../Constants.tsx";
import { handleTouch } from "../../../user_required_action/native/NewTermsModal.tsx";
import { PhoneThenEmailInterstitial } from "../../../verification/native/components/VerificationModal.tsx";

require = fn;
function handlePushedModal(arg0) {
  let obj = getRootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    obj = { modal: null };
    obj[0] = arg0;
    rootNavigationRef.navigate("modal", obj);
  }
}
function handlePoppedModal() {
  coerceMainRoute.popModal();
}
function pushFirstOpenModal(closure_0) {
  const iter = _require[Symbol.iterator]();
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
    obj[0] = key;
    component = handlePushedModal(getDeprecatedModalDataDefault(component, obj, props));
  }
}
function createPushModalHandler(closure_15, closure_152) {
  closure_0 = [...arguments];
  return () => {
    pushFirstOpenModal(closure_0);
  };
}
const error = importDefaultResult;
const UserRequiredActions = ME.UserRequiredActions;
const APP = ME.AppContext.APP;
const EMAIL_VERIFICATION_MODAL_OPEN = "EMAIL_VERIFICATION_MODAL_OPEN";
let closure_15 = {
  key: "EMAIL_VERIFICATION_MODAL_OPEN",
  store: importDefaultResult,
  closable: false,
  center: true,
  isOpen(arg0, action) {
    if (action == null) {
      action = importDefaultResult.getAction();
    }
    let result = UserRequiredActionsDefault.isFullScreenVerification(action);
    if (result) {
      result = null != token.getToken();
    }
    if (result) {
      result = !isEligibleForSafetyFlowsExperiment.isEligibleForSafetyFlowsExperiment({ location: "modal-manager-verification" });
    }
    return result;
  },
  getComponent() {
    return PhoneThenEmailInterstitial /* PhoneThenEmailInterstitial */.default;
  }
};
const USER_REQUIRED_ACTION_UPDATE = "USER_REQUIRED_ACTION_UPDATE";
let closure_17 = {
  key: "USER_REQUIRED_ACTION_UPDATE",
  store: importDefaultResult,
  center: true,
  isOpen(arg0, arg1) {
    let action = arg1;
    if (arg1 == null) {
      action = importDefaultResult.getAction();
    }
    return action === UserRequiredActions.AGREEMENTS;
  },
  getComponent() {
    return handleTouch /* handleTouch */.default;
  }
};
initializeDefault;
let prototype = function DeprecatedModalManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  {
    CONNECTION_OPEN_SUPPLEMENTAL: createPushModalHandler(closure_17, closure_15),
    EMAIL_VERIFICATION_MODAL_OPEN: createPushModalHandler(closure_15),
    USER_REQUIRED_ACTION_UPDATE(requiredAction) {
      if (null == requiredAction.requiredAction) {
        if (obj.isModalOpen(closure_16)) {
          let tmp5Result = callback(4229);
          tmp5Result.popModal(closure_16);
        }
        tmp5Result = callback(4229);
        if (tmp5Result.isModalOpen(closure_14)) {
          callback(4229).popModal(closure_14);
          const tmp5Result1 = callback(4229);
        }
        obj = callback(4229);
      } else {
        const items = [closure_17, closure_15];
        callback2(items, requiredAction.requiredAction);
      }
    },
    GUILD_SETTINGS_OPEN: createPushModalHandler(obj),
    NOTIFICATION_SETTINGS_MODAL_OPEN: createPushModalHandler(obj),
    CREATE_INVITE_MODAL_OPEN: createPushModalHandler(obj1),
    GUILD_SETTINGS_CLOSE: handlePoppedModal,
    NOTIFICATION_SETTINGS_MODAL_CLOSE: handlePoppedModal,
    PREMIUM_PAYMENT_MODAL_CLOSE: handlePoppedModal,
    EMAIL_VERIFICATION_MODAL_CLOSE: handlePoppedModal,
    CREATE_INVITE_MODAL_CLOSE: handlePoppedModal,
    QUICKSWITCHER_HIDE: handlePoppedModal,
    IFE_EXPERIMENT_SEARCH_MODAL_CLOSE: handlePoppedModal
  };
  obj = {
    key: "NOTIFICATION_SETTINGS_MODAL_OPEN",
    store: closure_6,
    closable: false,
    getComponent() {
      return callback(17012).default;
    }
  };
  applyArgumentsResult.actions = obj;
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {
}
prototype = new prototype();
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx");

export default prototype;