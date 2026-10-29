// discord_app/modules/application_account_linking/AccountLinkingActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkingActionCreators.tsx");

export function accountLinkAuthorizationStarted(id, accountLinkCallbacks) {
  DispatcherDefault.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: id, accountLinkCallbacks });
}
export function accountLinkAuthorizationCompleted(applicationId) {
  DispatcherDefault.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId });
}
export function devtoolsSetGloballyDisabledAuthorizationFlows(flows) {
  DispatcherDefault.dispatch({ type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows });
}
