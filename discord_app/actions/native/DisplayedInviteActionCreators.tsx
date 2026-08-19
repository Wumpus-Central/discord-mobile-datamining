// discord_app/actions/native/DisplayedInviteActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../Dispatcher.tsx";
import generateAcceptInviteOptionsDefault from "../InstantInviteActionCreators.tsx";
import getDisplayedInviteCode from "../../stores/native/DisplayedInviteStore.tsx";

const result = obj132.fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(code, username, arg2) {
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ deeplinkAttemptId, location: _location } = obj);
  getDisplayedInviteCode;
  obj = { type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId };
  dispatcherDefault.dispatch(obj);
  const invite = generateAcceptInviteOptionsDefault.resolveInvite(code, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  dispatcherDefault.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};