// === Module 8426: DisplayedInviteStore ===

// Module 8426 (DisplayedInviteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let c0;

let c1 = null;
let c2 = null;
const Store = get_initializedDefault.Store;
class DisplayedInviteStore extends Store {
  getDisplayedInviteCode() {
    return c0;
  }
  getDisplayedUsername() {
    return c1;
  }
  getDeeplinkAttemptId() {
    return c2;
  }
}
const prototype = DisplayedInviteStore.prototype;
DisplayedInviteStore.displayName = "DisplayedInviteStore";
const obj = {
  DISPLAYED_INVITE_SHOW: function handleInviteShow(arg0) {
    ({ code: c0, username: c1, deeplinkAttemptId: c2 } = arg0);
  },
  DISPLAYED_INVITE_CLEAR: function handleClearDisplayedInvite() {
    c0 = null;
    c2 = null;
  }
};
const displayedInviteStore = new DisplayedInviteStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/native/DisplayedInviteStore.tsx");

export default displayedInviteStore;