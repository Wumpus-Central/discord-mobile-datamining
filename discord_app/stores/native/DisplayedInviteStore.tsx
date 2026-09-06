// discord_app/stores/native/DisplayedInviteStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let c1 = null;
let c2 = null;
const Store = initializeDefault.Store;
class DisplayedInviteStore extends Store {}
const prototype = DisplayedInviteStore.prototype;
prototype["getDisplayedInviteCode"] = function getDisplayedInviteCode() {
  return c0;
};
prototype["getDisplayedUsername"] = function getDisplayedUsername() {
  return c1;
};
prototype["getDeeplinkAttemptId"] = function getDeeplinkAttemptId() {
  return c2;
};
DisplayedInviteStore.displayName = "DisplayedInviteStore";
const displayedInviteStore = new DisplayedInviteStore(DispatcherDefault, {
  DISPLAYED_INVITE_SHOW: function handleInviteShow(arg0) {
    ({ code: c0, username: c1, deeplinkAttemptId: c2 } = arg0);
  },
  DISPLAYED_INVITE_CLEAR: function handleClearDisplayedInvite() {
    c0 = null;
    c2 = null;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/native/DisplayedInviteStore.tsx");

export default displayedInviteStore;
