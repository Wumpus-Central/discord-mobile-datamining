// === Module 8662: getDisplayedInviteCode ===

// Module 8662 (getDisplayedInviteCode)
import { Store } from "initialize";

let c1 = null;
let c2 = null;
class DisplayedInviteStore extends Store {
}
const prototype = DisplayedInviteStore.prototype;
prototype["getDisplayedInviteCode"] = function getDisplayedInviteCode() {
  return closure_0;
};
prototype["getDisplayedUsername"] = function getDisplayedUsername() {
  return c1;
};
prototype["getDeeplinkAttemptId"] = function getDeeplinkAttemptId() {
  return c2;
};
DisplayedInviteStore.displayName = "DisplayedInviteStore";
const displayedInviteStore = new DisplayedInviteStore(require("dispatcher"), {
  DISPLAYED_INVITE_SHOW: function handleInviteShow(arg0) {
    let c1;
    let c2;
    let closure_0;
    ({ code: closure_0, username: c1, deeplinkAttemptId: c2 } = arg0);
  },
  DISPLAYED_INVITE_CLEAR: function handleClearDisplayedInvite() {
    let c0 = null;
    let c2 = null;
  }
});
const result = require("set").fileFinishedImporting("stores/native/DisplayedInviteStore.tsx");

export default displayedInviteStore;