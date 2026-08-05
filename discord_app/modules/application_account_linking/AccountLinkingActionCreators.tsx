// discord_app/modules/application_account_linking/AccountLinkingActionCreators.tsx
import { dispatcher } from "../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/application_account_linking/AccountLinkingActionCreators.tsx");

export const accountLinkAuthorizationStarted = function accountLinkAuthorizationStarted(id, accountLinkCallbacks) {
  let obj = dispatcher;
  obj = { type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: id, accountLinkCallbacks };
  obj.dispatch(obj);
};
export const accountLinkAuthorizationCompleted = function accountLinkAuthorizationCompleted(applicationId) {
  let obj = dispatcher;
  obj = { type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId };
  obj.dispatch(obj);
};
export const devtoolsSetGloballyDisabledAuthorizationFlows = function devtoolsSetGloballyDisabledAuthorizationFlows(flows) {
  let obj = dispatcher;
  obj = { type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows };
  obj.dispatch(obj);
};