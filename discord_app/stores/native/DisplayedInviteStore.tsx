// === Module 8828: getDisplayedInviteCode ===

// Module 8828 (getDisplayedInviteCode)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c1 = null;
let c2 = null;
const Store = initializeDefault.Store;
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
const displayedInviteStore = new DisplayedInviteStore(dispatcherDefault, {
  DISPLAYED_INVITE_SHOW: function handleInviteShow(arg0) {
    ({ code: closure_0, username: c1, deeplinkAttemptId: c2 } = arg0);
  },
  DISPLAYED_INVITE_CLEAR: function handleClearDisplayedInvite() {
    c0 = null;
    c2 = null;
  }
});
const result = require("set").fileFinishedImporting("stores/native/DisplayedInviteStore.tsx");

export default displayedInviteStore;