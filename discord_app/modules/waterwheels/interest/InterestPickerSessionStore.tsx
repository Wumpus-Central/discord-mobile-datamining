// === Module 8882: InterestPickerSessionStore ===

// Module 8882 (InterestPickerSessionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

let picks = [];
let c1 = false;
let c2 = false;
let id = null;
const PersistedStore = initializeDefault.PersistedStore;
class InterestPickerSessionStore extends PersistedStore {
}
const prototype = InterestPickerSessionStore.prototype;
prototype["initialize"] = function initialize(ownerId) {
  ownerId = undefined;
  if (ownerId != null) {
    ownerId = ownerId.ownerId;
  }
  if (null != ownerId) {
    picks = ownerId.picks;
    if (picks == null) {
      picks = [];
    }
    items = picks;
  } else {
    items = [];
  }
  closure_0 = items;
  let ownerId1;
  if (ownerId != null) {
    ownerId1 = ownerId.ownerId;
  }
  let tmp3 = null != ownerId1;
  if (tmp3) {
    let flag = ownerId.pickerSeen;
    if (flag == null) {
      flag = false;
    }
    tmp3 = flag;
  }
  c1 = tmp3;
  let ownerId2;
  if (ownerId != null) {
    ownerId2 = ownerId.ownerId;
  }
  if (ownerId2 == null) {
    ownerId2 = null;
  }
  id = ownerId2;
  c2 = false;
};
prototype["getState"] = function getState() {
  return { picks, pickerSeen, ownerId: id };
};
prototype["getPicks"] = function getPicks() {
  items = [...closure_0];
  return items;
};
prototype["hasSeenPicker"] = function hasSeenPicker() {
  let tmp = c1;
  if (!c1) {
    tmp = picks.length > 0;
  }
  return tmp;
};
prototype["isPickerOpen"] = function isPickerOpen() {
  return c2;
};
InterestPickerSessionStore.displayName = "InterestPickerSessionStore";
InterestPickerSessionStore.persistKey = "InterestPickerSessionStore";
const interestPickerSessionStore = new InterestPickerSessionStore(DispatcherDefault, {
  WATERWHEELS_INTEREST_PICKER_SET_PICKS: function handleSetPicks(gameIds) {
    items = [...gameIds.gameIds];
    closure_0 = items;
  },
  WATERWHEELS_INTEREST_PICKER_SEEN: function handleSeen() {
    c1 = true;
  },
  WATERWHEELS_INTEREST_PICKER_OPEN_CHANGE: function handleOpenChange(open) {
    open = open.open;
    if (c2 === open) {
      return false;
    } else {
      c2 = open;
    }
  },
  LOGOUT: function handleLogout() {
    closure_0 = [];
    c1 = false;
    c2 = false;
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
      c2 = false;
    }
    id = user.id;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerSessionStore.tsx");

export default interestPickerSessionStore;