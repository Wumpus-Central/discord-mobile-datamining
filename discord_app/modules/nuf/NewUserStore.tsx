// === Module 5570: initialize ===

// Module 5570 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = null;
const PersistedStore = initializeDefault.PersistedStore;
class NewUserStore extends PersistedStore {
}
const prototype = NewUserStore.prototype;
prototype["initialize"] = function initialize(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  if (type == null) {
    type = null;
  }
};
prototype["getType"] = function getType() {
  return c0;
};
prototype["getState"] = function getState() {
  return { type: c0 };
};
NewUserStore.displayName = "NewUserStore";
NewUserStore.persistKey = "nuf";
const newUserStore = new NewUserStore(dispatcherDefault, {
  NUF_NEW_USER: function handleNewUser(newUserType) {
    newUserType = newUserType.newUserType;
    newUserStore.persist();
  },
  NUF_COMPLETE: function handleNUFCompleted() {
    c0 = null;
    newUserStore.persist();
  }
});
const result = require("set").fileFinishedImporting("modules/nuf/NewUserStore.tsx");

export default newUserStore;