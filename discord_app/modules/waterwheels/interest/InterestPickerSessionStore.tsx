// === Module 8999: InterestPickerSessionStore ===

// Module 8999 (InterestPickerSessionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

let c1 = false;
let id = null;
const Store = initializeDefault.Store;
class InterestPickerSessionStore extends Store {
}
const prototype = InterestPickerSessionStore.prototype;
prototype["getPicks"] = function getPicks() {
  items = [...closure_0];
  return items;
};
prototype["hasSeenPicker"] = function hasSeenPicker() {
  let tmp = c1;
  if (!c1) {
    tmp = length.length > 0;
  }
  return tmp;
};
InterestPickerSessionStore.displayName = "InterestPickerSessionStore";
const interestPickerSessionStore = new InterestPickerSessionStore(DispatcherDefault, {
  WATERWHEELS_INTEREST_PICKER_SET_PICKS: function handleSetPicks(gameIds) {
    items = [...gameIds.gameIds];
    closure_0 = items;
  },
  WATERWHEELS_INTEREST_PICKER_SEEN: function handleSeen() {
    c1 = true;
  },
  LOGOUT: function handleLogout() {
    closure_0 = [];
    c1 = false;
    id = null;
  },
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    let tmp = null != id;
    if (tmp) {
      tmp = id !== user.id;
    }
    if (tmp) {
      closure_0 = [];
      c1 = false;
    }
    id = user.id;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerSessionStore.tsx");

export default interestPickerSessionStore;