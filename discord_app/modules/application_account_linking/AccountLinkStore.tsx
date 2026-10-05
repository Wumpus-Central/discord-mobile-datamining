// discord_app/modules/application_account_linking/AccountLinkStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AuthorizedAppsStore from "../oauth2/AuthorizedAppsStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const map = new Map();
let set = new Set();
const Store = get_initializedDefault.Store;
class AccountLinkStore extends Store {
  initialize() {
    this.waitFor(AuthorizedAppsStore);
  }
  getPendingAuthorizations() {
    return map;
  }
  deletePendingAuthorization(arg0) {
    map.delete(arg0);
  }
  getGloballyDisabledAuthorizationFlows() {
    return set;
  }
}
const prototype = AccountLinkStore.prototype;
AccountLinkStore.displayName = "AccountLinkStore";
let obj = {
  ACCOUNT_LINK_AUTHORIZATION_STARTED: function handleAuthorizationStarted(applicationId) {
    const tmp =
      null == AuthorizedAppsStore.getNewestTokenForApplication(applicationId.applicationId) &&
      null != applicationId.accountLinkCallbacks;
    if (tmp) {
      const _Date = Date;
      const obj = {
        applicationId: applicationId.applicationId,
        startedAt: Date.now(),
        accountLinkCallbacks: applicationId.accountLinkCallbacks,
      };
      applicationId = applicationId.applicationId;
      set = map.set;
      const result = set(applicationId, obj);
    }
  },
  ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS: function handleSetGloballyDisabledFlows(flows) {
    set = new Set(flows.flows);
  },
};
const accountLinkStore = new AccountLinkStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkStore.tsx");

export default accountLinkStore;
