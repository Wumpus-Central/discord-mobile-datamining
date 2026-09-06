// discord_app/modules/application_account_linking/AccountLinkingActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkingActionCreators.tsx");

export const accountLinkAuthorizationStarted = function accountLinkAuthorizationStarted(id, accountLinkCallbacks) {
  const obj = { type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: id, accountLinkCallbacks };
  obj.dispatch(obj);
};
export const accountLinkAuthorizationCompleted = function accountLinkAuthorizationCompleted(applicationId) {
  const obj = { type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId };
  obj.dispatch(obj);
};
export const devtoolsSetGloballyDisabledAuthorizationFlows = function devtoolsSetGloballyDisabledAuthorizationFlows(
  flows,
) {
  const obj = { type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows };
  obj.dispatch(obj);
};
