// === Module 16942: AccountLinkStore ===

// Module 16942 (AccountLinkStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7107 */;

const map = new Map();
let set = new Set();
const Store = initializeDefault.Store;
class AccountLinkStore extends Store {
}
const prototype = AccountLinkStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthorizedAppsStore);
};
prototype["getPendingAuthorizations"] = function getPendingAuthorizations() {
  return map;
};
prototype["deletePendingAuthorization"] = function deletePendingAuthorization(arg0) {
  map.delete(arg0);
};
prototype["getGloballyDisabledAuthorizationFlows"] = function getGloballyDisabledAuthorizationFlows() {
  return set;
};
AccountLinkStore.displayName = "AccountLinkStore";
const accountLinkStore = new AccountLinkStore(DispatcherDefault, {
  ACCOUNT_LINK_AUTHORIZATION_STARTED: function handleAuthorizationStarted(applicationId) {
    if (tmp) {
      const obj = { applicationId: applicationId.applicationId, startedAt: null, accountLinkCallbacks: null };
      const _Date = Date;
      obj.startedAt = Date.now();
      obj.accountLinkCallbacks = applicationId.accountLinkCallbacks;
      const result = map.set(applicationId.applicationId, obj);
    }
    tmp = null == AuthorizedAppsStore.getNewestTokenForApplication(applicationId.applicationId) && null != applicationId.accountLinkCallbacks;
  },
  ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS: function handleSetGloballyDisabledFlows(flows) {
    set = new Set(flows.flows);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkStore.tsx");

export default accountLinkStore;