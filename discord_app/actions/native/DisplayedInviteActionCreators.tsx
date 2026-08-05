// discord_app/actions/native/DisplayedInviteActionCreators.tsx
import { dispatcher } from "../../Dispatcher.tsx";
import { getDisplayedInviteCode } from "../../stores/native/DisplayedInviteStore.tsx";
import { generateAcceptInviteOptions } from "../InstantInviteActionCreators.tsx";
const result = require("generateAcceptInviteOptions").fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(code, username, arg2) {
  let _location;
  let deeplinkAttemptId;
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ deeplinkAttemptId, location: _location } = obj);
  getDisplayedInviteCode /* getDisplayedInviteCode */;
  obj = { type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId };
  dispatcher.dispatch(obj);
  const obj2 = dispatcher;
  const invite = generateAcceptInviteOptions.resolveInvite(code, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  dispatcher.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};