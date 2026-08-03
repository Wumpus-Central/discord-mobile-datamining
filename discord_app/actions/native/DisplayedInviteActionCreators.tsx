// === Module 8836: showInvite ===

// Module 8836 (showInvite)
const result = require("generateAcceptInviteOptions").fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(code, username, arg2) {
  let _location;
  let deeplinkAttemptId;
  let fromDeeplink;
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ deeplinkAttemptId, fromDeeplink, location: _location } = obj);
  require(8662) /* getDisplayedInviteCode */;
  obj = { type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId, fromDeeplink };
  importDefault(709).dispatch(obj);
  const obj2 = importDefault(709);
  const invite = importDefault(7667).resolveInvite(code, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  importDefault(709).dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};