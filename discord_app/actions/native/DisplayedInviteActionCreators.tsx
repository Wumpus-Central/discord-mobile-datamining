// discord_app/actions/native/DisplayedInviteActionCreators.tsx
const result = require("generateAcceptInviteOptions").fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(code, username, arg2) {
  let _location;
  let deeplinkAttemptId;
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ deeplinkAttemptId, location: _location } = obj);
  require("../../stores/native/DisplayedInviteStore.tsx") /* getDisplayedInviteCode */;
  obj = { type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId };
  require("../../Dispatcher.tsx").dispatch(obj);
  const obj2 = require("../../Dispatcher.tsx");
  const invite = require("../InstantInviteActionCreators.tsx").resolveInvite(code, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  require("../../Dispatcher.tsx").dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};