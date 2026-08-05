// discord_app/modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx
import handleFormInit from "handleFormInit";
import fetchFingerprint from "fetchFingerprint";
import updateWithLatestInvite from "updateWithLatestInvite";
import FormStates from "FormStates";
import importDefaultResult from "handleRequiredAction";
import ME from "ME";
import "initialize";
import { getDeprecatedModalData } from "../../../../utils/getDeprecatedModalData.tsx";
import { isEligibleForSafetyFlowsExperiment } from "../../../safety_flows/SafetyFlowsExperiment.tsx";
import { handleTouch } from "../../../user_required_action/native/NewTermsModal.tsx";
import { PhoneThenEmailInterstitial } from "../../../verification/native/components/VerificationModal.tsx";
import { UserRequiredActions } from "../../../verification/VerificationUtils.tsx";
import { navigationToRootTabHelper } from "../../helpers/NavigationRouteUtils.native.tsx";
import { getRootNavigationRef } from "../../RootNavigationRef.native.tsx";

const require = arg1;
function handlePushedModal(key) {
  let obj = getRootNavigationRef /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    obj = { name: "modal", key: null, params: null };
    obj[1] = key.key;
    obj = { modal: null };
    obj[0] = key;
    obj[2] = obj;
    rootNavigationRef.navigate(obj);
  }
}
function handlePoppedModal() {
  navigationToRootTabHelper /* navigationToRootTabHelper */.popModal();
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
        let tmp3 = APP;
        isOpenResult = isOpen(APP, arg1);
      }
    }
    let tmp4 = key;
    let component = key.getComponent();
    let store = key.store;
    let getProps;
    if (store != null) {
      getProps = store.getProps;
    }
    if (typeof getProps === "function") {
      let tmp7 = key;
      let store2 = key.store;
      let props = store2.getProps();
    } else {
      props = {};
    }
    let tmp8 = handlePushedModal;
    let tmp9 = importDefault;
    let tmp10 = dependencyMap;
    let tmp11 = component;
    let obj = { key: null };
    key = key.key;
    obj[0] = key;
    let num = 0;
    component = handlePushedModal(getDeprecatedModalData(component, obj, props));
  }
}
function createPushModalHandler(closure_15, closure_152) {
  let closure_0 = [...arguments];
  return () => {
    outer1_12(closure_0);
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
    let result = UserRequiredActions.isFullScreenVerification(action);
    if (result) {
      result = null != token.getToken();
    }
    if (result) {
      result = !isEligibleForSafetyFlowsExperiment /* isEligibleForSafetyFlowsExperiment */.isEligibleForSafetyFlowsExperiment({ location: "modal-manager-verification" });
      const obj2 = isEligibleForSafetyFlowsExperiment /* isEligibleForSafetyFlowsExperiment */;
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
let prototype = function DeprecatedModalManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  obj = {
    CONNECTION_OPEN_SUPPLEMENTAL: createPushModalHandler(closure_17, closure_15),
    EMAIL_VERIFICATION_MODAL_OPEN: createPushModalHandler(closure_15),
    USER_REQUIRED_ACTION_UPDATE(requiredAction) {
      if (null == requiredAction.requiredAction) {
        if (obj.isModalOpen(closure_16)) {
          let tmp5Result = tmp5(4136);
          tmp5Result.popModal(tmp7);
        }
        tmp5Result = tmp5(4136);
        if (tmp5Result.isModalOpen(closure_14)) {
          tmp5(4136).popModal(tmp9);
          const tmp5Result1 = tmp5(4136);
        }
        obj = callback(4136);
        tmp7 = closure_16;
        tmp9 = closure_14;
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
    key: "GUILD_SETTINGS_OPEN",
    store: handleFormInit,
    closable: false,
    getComponent() {
      return callback(16470).default;
    }
  };
  obj = {
    key: "NOTIFICATION_SETTINGS_MODAL_OPEN",
    store: FormStates,
    closable: false,
    getComponent() {
      return callback(16751).default;
    }
  };
  applyArgumentsResult.actions = obj;
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {
}
prototype = new prototype();
let result = require("updateWithLatestInvite").fileFinishedImporting("modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx");

export default prototype;