// === Module 17053: handlePushedModal ===

// Module 17053 (handlePushedModal)
import coerceMainRoute from "coerceMainRoute" /* 4302 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4303 */;
import getDeprecatedModalDataDefault from "getDeprecatedModalData" /* 4693 */;
import initializeDefault from "initialize" /* 5454 */;
import UserRequiredActionsDefault from "UserRequiredActions" /* 7666 */;
import isEligibleForSafetyFlowsExperiment from "isEligibleForSafetyFlowsExperiment" /* 17055 */;
import closure_3 from "handleFormInit" /* 9690 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "updateWithLatestInvite" /* 9871 */;
import closure_6 from "FormStates" /* 17054 */;
import importDefaultResult from "handleRequiredAction" /* 1381 */;
import ME from "ME" /* 676 */;

require = arg1;
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
    component = handlePushedModal(getDeprecatedModalDataDefault(component, obj, props));
  }
}
function createPushModalHandler(closure_15, closure_152) {
  closure_0 = [...arguments];
  return () => {
    closure_1_12(closure_0);
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
      const obj2 = isEligibleForSafetyFlowsExperiment;
    }
    return result;
  },
  getComponent() {
    return require(17056) /* PhoneThenEmailInterstitial */.default;
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
    return require(17064) /* handleTouch */.default;
  }
};
initializeDefault;
let prototype = function DeprecatedModalManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  obj = {
    CONNECTION_OPEN_SUPPLEMENTAL: createPushModalHandler(closure_17, closure_15),
    EMAIL_VERIFICATION_MODAL_OPEN: createPushModalHandler(closure_15),
    USER_REQUIRED_ACTION_UPDATE(requiredAction) {
      if (null == requiredAction.requiredAction) {
        if (obj.isModalOpen(closure_16)) {
          let tmp5Result = tmp5(4302);
          tmp5Result.popModal(tmp7);
        }
        tmp5Result = tmp5(4302);
        if (tmp5Result.isModalOpen(closure_14)) {
          tmp5(4302).popModal(tmp9);
          const tmp5Result1 = tmp5(4302);
        }
        obj = callback(4302);
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
    store: closure_3,
    closable: false,
    getComponent() {
      return callback(17065).default;
    }
  };
  obj = {
    key: "NOTIFICATION_SETTINGS_MODAL_OPEN",
    store: closure_6,
    closable: false,
    getComponent() {
      return callback(17339).default;
    }
  };
  applyArgumentsResult.actions = obj;
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {
}
prototype = new prototype();
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx");

export default prototype;