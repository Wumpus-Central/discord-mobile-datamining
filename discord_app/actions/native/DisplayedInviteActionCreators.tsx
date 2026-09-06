// discord_app/actions/native/DisplayedInviteActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import InstantInviteActionCreatorsDefault from "../InstantInviteActionCreators.tsx";
import DisplayedInviteStore from "../../stores/native/DisplayedInviteStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
