// discord_app/stores/native/DisplayedInviteStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const displayedInviteStore = new DisplayedInviteStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/native/DisplayedInviteStore.tsx");

export default displayedInviteStore;
