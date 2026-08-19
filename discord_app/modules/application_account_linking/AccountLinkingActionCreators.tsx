// === Module 7148: accountLinkAuthorizationStarted ===

// Module 7148 (accountLinkAuthorizationStarted)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/application_account_linking/AccountLinkingActionCreators.tsx");

export const accountLinkAuthorizationStarted = function accountLinkAuthorizationStarted(id, accountLinkCallbacks) {
  const obj = { type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: id, accountLinkCallbacks };
  obj.dispatch(obj);
};
export const accountLinkAuthorizationCompleted = function accountLinkAuthorizationCompleted(applicationId) {
  const obj = { type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId };
  obj.dispatch(obj);
};
export const devtoolsSetGloballyDisabledAuthorizationFlows = function devtoolsSetGloballyDisabledAuthorizationFlows(flows) {
  const obj = { type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows };
  obj.dispatch(obj);
};