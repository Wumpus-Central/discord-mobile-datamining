// === Module 17123: AccountLinkStore ===

// Module 17123 (AccountLinkStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6602 */;
import size from "module_2" /* 2 */;

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
    const tmp = null == AuthorizedAppsStore.getNewestTokenForApplication(applicationId.applicationId) && null != applicationId.accountLinkCallbacks;
    if (tmp) {
      const _Date = Date;
      const obj = { applicationId: applicationId.applicationId, startedAt: Date.now(), accountLinkCallbacks: applicationId.accountLinkCallbacks };
      applicationId = applicationId.applicationId;
      set = map.set;
      const result = set(applicationId, obj);
    }
  },
  ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS: function handleSetGloballyDisabledFlows(flows) {
    set = new Set(flows.flows);
  }
};
const accountLinkStore = new AccountLinkStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkStore.tsx");

export default accountLinkStore;