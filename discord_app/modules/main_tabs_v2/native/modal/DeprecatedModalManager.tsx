// === Module 17690: DeprecatedModalManager ===

// Module 17690 (DeprecatedModalManager)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4742 */;
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import getDeprecatedModalDataDefault from "getDeprecatedModalData" /* 5101 */;
import isFullScreenVerificationModalRequiredDefault from "isFullScreenVerificationModalRequired" /* 17628 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9495 */;
import NotificationSettingsModalStore from "NotificationSettingsModalStore" /* 17691 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;

require = fn;
function handlePushedModal(modal) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    const obj2 = { modal };
    rootNavigationRef.navigate("modal", obj2);
  }
}
function handlePoppedModal() {
  NavigationRouteUtils.popModal();
}
function pushFirstOpenModal(items, requiredAction) {
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let key = nextResult;
    let isOpenResult;
    if (nextResult != null) {
      let isOpen = nextResult.isOpen;
      if (isOpen != null) {
        isOpenResult = isOpen(APP, requiredAction);
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
const Constants = fn(1085);
const UserRequiredActions = Constants.UserRequiredActions;
const APP = Constants.AppContext.APP;
const EMAIL_VERIFICATION_MODAL_OPEN = "EMAIL_VERIFICATION_MODAL_OPEN";
let closure_14 = {
  key: "EMAIL_VERIFICATION_MODAL_OPEN",
  store: UserRequiredActionStore,
  closable: false,
  center: true,
  isOpen(arg0, action) {
    if (action == null) {
      action = UserRequiredActionStore.getAction();
    }
    return isFullScreenVerificationModalRequiredDefault(action, "modal-manager-verification");
  },
  getComponent() {
    return require("VerificationModal").default;
  }
};
const USER_REQUIRED_ACTION_UPDATE = "USER_REQUIRED_ACTION_UPDATE";
let closure_16 = {
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
  }
};
const prototype = function DeprecatedModalManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  let obj = {
    CONNECTION_OPEN_SUPPLEMENTAL: createPushModalHandler(closure_16, closure_14),
    EMAIL_VERIFICATION_MODAL_OPEN: createPushModalHandler(closure_14),
    USER_REQUIRED_ACTION_UPDATE(requiredAction) {
      if (null == requiredAction.requiredAction) {
        if (obj.isModalOpen(USER_REQUIRED_ACTION_UPDATE)) {
          NavigationRouteUtils.popModal(USER_REQUIRED_ACTION_UPDATE);
          const tmp5Result = NavigationRouteUtils;
        }
        obj = NavigationRouteUtils;
        if (tmp5Result3.isModalOpen(EMAIL_VERIFICATION_MODAL_OPEN)) {
          NavigationRouteUtils.popModal(EMAIL_VERIFICATION_MODAL_OPEN);
          const tmp5Result4 = NavigationRouteUtils;
        }
        tmp5Result3 = NavigationRouteUtils;
      } else {
        const items = [closure_1_16, closure_1_14];
        pushFirstOpenModal(items, requiredAction.requiredAction);
      }
    },
    GUILD_SETTINGS_OPEN: createPushModalHandler({
      key: "GUILD_SETTINGS_OPEN",
      store: GuildSettingsStore,
      closable: false,
      getComponent() {
        return require("GuildSettingsModal").default;
      }
    }),
    NOTIFICATION_SETTINGS_MODAL_OPEN: createPushModalHandler({
      key: "NOTIFICATION_SETTINGS_MODAL_OPEN",
      store: NotificationSettingsModalStore,
      closable: false,
      getComponent() {
        return require("NotificationSettingsModal").default;
      }
    }),
    CREATE_INVITE_MODAL_OPEN: createPushModalHandler({
      key: "CREATE_INVITE_MODAL_OPEN",
      store: CreateInviteModalStore,
      closable: false,
      getComponent() {
        return require("InviteSettingsModal").default;
      }
    }),
    GUILD_SETTINGS_CLOSE: handlePoppedModal,
    NOTIFICATION_SETTINGS_MODAL_CLOSE: handlePoppedModal,
    PREMIUM_PAYMENT_MODAL_CLOSE: handlePoppedModal,
    EMAIL_VERIFICATION_MODAL_CLOSE: handlePoppedModal,
    CREATE_INVITE_MODAL_CLOSE: handlePoppedModal,
    QUICKSWITCHER_HIDE: handlePoppedModal,
    IFE_EXPERIMENT_SEARCH_MODAL_CLOSE: handlePoppedModal
  };
  applyArgumentsResult.actions = obj;
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx");

export default prototype1;