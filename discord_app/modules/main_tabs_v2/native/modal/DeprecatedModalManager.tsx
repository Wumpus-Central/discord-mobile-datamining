// === Module 17644: DeprecatedModalManager ===

// Module 17644 (DeprecatedModalManager)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import getDeprecatedModalDataDefault from "getDeprecatedModalData" /* 5095 */;
import isFullScreenVerificationModalRequiredDefault from "isFullScreenVerificationModalRequired" /* 17582 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9482 */;
import NotificationSettingsModalStore from "NotificationSettingsModalStore" /* 17645 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function handlePushedModal(modal) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    const obj2 = { modal };
    rootNavigationRef.navigate("modal", obj2);
  }
}
function handlePoppedModal() {
  const obj = NavigationRouteUtils;
  obj.popModal();
}
function pushFirstOpenModal(items, requiredAction) {
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let props;
    let obj = nextResult;
    let isOpenResult;
    if (nextResult != null) {
      let isOpen = nextResult.isOpen;
      if (isOpen != null) {
        isOpenResult = isOpen(APP, requiredAction);
      }
    }
    let component = obj.getComponent();
    let store = obj.store;
    let getProps;
    if (store != null) {
      getProps = store.getProps;
    }
    if (typeof getProps === "function") {
      let store2 = obj.store;
      props = store2.getProps();
    } else {
      props = {};
    }
    let obj2 = { key: nextResult.key };
    let tmp12 = handlePushedModal(getDeprecatedModalDataDefault(component, obj2, props));
    iter.return();
  }
}
function createPushModalHandler() {
  let closure_0 = [...arguments];
  return () => {
    pushFirstOpenModal(closure_0);
  };
}
const UserRequiredActions = Constants.UserRequiredActions;
const APP = Constants.AppContext.APP;
const EMAIL_VERIFICATION_MODAL_OPEN = "EMAIL_VERIFICATION_MODAL_OPEN";
let closure_14 = {
  key: "EMAIL_VERIFICATION_MODAL_OPEN",
  store: UserRequiredActionStore,
  closable: false,
  center: true,
  isOpen(arg0, action) {
    const tmp2 = isFullScreenVerificationModalRequiredDefault;
    if (action == null) {
      action = UserRequiredActionStore.getAction();
    }
    return tmp2(action, "modal-manager-verification");
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
class DeprecatedModalManager extends AutomaticLifecycleManager {
  constructor() {
    let obj2;
    let obj3;
    let obj4;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    let obj = {
      CONNECTION_OPEN_SUPPLEMENTAL: createPushModalHandler(closure_16, closure_14),
      EMAIL_VERIFICATION_MODAL_OPEN: createPushModalHandler(closure_14),
      USER_REQUIRED_ACTION_UPDATE(requiredAction) {
        if (null == requiredAction.requiredAction) {
          const obj = NavigationRouteUtils;
          if (obj.isModalOpen(USER_REQUIRED_ACTION_UPDATE)) {
            const tmp5Result = NavigationRouteUtils;
            tmp5Result.popModal(USER_REQUIRED_ACTION_UPDATE);
          }
          const tmp5Result3 = NavigationRouteUtils;
          if (tmp5Result3.isModalOpen(EMAIL_VERIFICATION_MODAL_OPEN)) {
            const tmp5Result4 = NavigationRouteUtils;
            tmp5Result4.popModal(EMAIL_VERIFICATION_MODAL_OPEN);
          }
        } else {
          const items = [closure_1_16, closure_1_14];
          pushFirstOpenModal(items, requiredAction.requiredAction);
        }
      },
      GUILD_SETTINGS_OPEN: createPushModalHandler(obj2),
      NOTIFICATION_SETTINGS_MODAL_OPEN: createPushModalHandler(obj3),
      CREATE_INVITE_MODAL_OPEN: createPushModalHandler(obj4),
      GUILD_SETTINGS_CLOSE: handlePoppedModal,
      NOTIFICATION_SETTINGS_MODAL_CLOSE: handlePoppedModal,
      PREMIUM_PAYMENT_MODAL_CLOSE: handlePoppedModal,
      EMAIL_VERIFICATION_MODAL_CLOSE: handlePoppedModal,
      CREATE_INVITE_MODAL_CLOSE: handlePoppedModal,
      QUICKSWITCHER_HIDE: handlePoppedModal,
      IFE_EXPERIMENT_SEARCH_MODAL_CLOSE: handlePoppedModal
    };
    obj2 = {
      key: "GUILD_SETTINGS_OPEN",
      store: GuildSettingsStore,
      closable: false,
      getComponent() {
        return require("GuildSettingsModal").default;
      }
    };
    obj3 = {
      key: "NOTIFICATION_SETTINGS_MODAL_OPEN",
      store: NotificationSettingsModalStore,
      closable: false,
      getComponent() {
        return require("NotificationSettingsModal").default;
      }
    };
    obj4 = {
      key: "CREATE_INVITE_MODAL_OPEN",
      store: CreateInviteModalStore,
      closable: false,
      getComponent() {
        return require("InviteSettingsModal").default;
      }
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const deprecatedModalManager = new DeprecatedModalManager();
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx");

export default deprecatedModalManager;