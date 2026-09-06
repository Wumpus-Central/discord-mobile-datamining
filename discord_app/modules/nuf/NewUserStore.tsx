// === Module 5559: NewUserStore ===

// Module 5559 (NewUserStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

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
  c0 = type;
};
prototype["getType"] = function getType() {
  return c0;
};
prototype["getState"] = function getState() {
  return { type };
};
NewUserStore.displayName = "NewUserStore";
NewUserStore.persistKey = "nuf";
const newUserStore = new NewUserStore(DispatcherDefault, {
  NUF_NEW_USER: function handleNewUser(newUserType) {
    newUserType = newUserType.newUserType;
    newUserStore.persist();
  },
  NUF_COMPLETE: function handleNUFCompleted() {
    c0 = null;
    newUserStore.persist();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/NewUserStore.tsx");

export default newUserStore;