// discord_app/modules/application_account_linking/AccountLinkStore.tsx
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "recomputeFromAppTokens" /* 5289 */;
import set from "set" /* 2 */;

const map = new Map();
let set = new Set();
const Store = initializeDefault.Store;
class AccountLinkStore extends Store {
}
const prototype = AccountLinkStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
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
const accountLinkStore = new AccountLinkStore(dispatcherDefault, {
  ACCOUNT_LINK_AUTHORIZATION_STARTED: function handleAuthorizationStarted(applicationId) {
    if (tmp) {
      const obj = { applicationId: null, startedAt: null, accountLinkCallbacks: null };
      obj[0] = applicationId.applicationId;
      const _Date = Date;
      obj[1] = Date.now();
      obj[2] = applicationId.accountLinkCallbacks;
      const result = map.set(applicationId.applicationId, obj);
    }
  },
  ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS: function handleSetGloballyDisabledFlows(flows) {
    set = new Set(flows.flows);
  }
});
let result = set.fileFinishedImporting("modules/application_account_linking/AccountLinkStore.tsx");

export default accountLinkStore;