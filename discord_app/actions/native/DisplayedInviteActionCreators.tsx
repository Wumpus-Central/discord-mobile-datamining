// === Module 8771: DisplayedInviteActionCreators ===

// Module 8771 (DisplayedInviteActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8406 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 8772 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(code, username, arg2) {
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ deeplinkAttemptId, location: _location } = obj);
  DisplayedInviteStore;
  obj = { type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId };
  DispatcherDefault.dispatch(obj);
  const invite = InstantInviteActionCreatorsDefault.resolveInvite(code, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  DispatcherDefault.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};