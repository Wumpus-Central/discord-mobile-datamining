// === Module 15856: map ===

// Module 15856 (map)
import recomputeFromAppTokens from "recomputeFromAppTokens";
import { Store } from "initialize";
import set from "dispatcher";

const map = new Map();
let set = new Set();
class AccountLinkStore extends Store {
}
const prototype = AccountLinkStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(recomputeFromAppTokens);
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
const accountLinkStore = new AccountLinkStore(require("dispatcher"), {
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
    const set = new Set(flows.flows);
  }
});
let result = set.fileFinishedImporting("modules/application_account_linking/AccountLinkStore.tsx");

export default accountLinkStore;