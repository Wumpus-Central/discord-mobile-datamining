// === Module 8738: showInvite ===

// Module 8738 (showInvite)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import generateAcceptInviteOptionsDefault from "generateAcceptInviteOptions" /* 8378 */;
import getDisplayedInviteCode from "getDisplayedInviteCode" /* 8739 */;

const result = set.fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(code, username, arg2) {
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ deeplinkAttemptId, location: _location } = obj);
  getDisplayedInviteCode;
  obj = { type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId };
  dispatcherDefault.dispatch(obj);
  const obj2 = dispatcherDefault;
  const invite = generateAcceptInviteOptionsDefault.resolveInvite(code, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  dispatcherDefault.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};