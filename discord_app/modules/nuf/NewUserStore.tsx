// === Module 5949: NewUserStore ===

// Module 5949 (NewUserStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let type = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class NewUserStore extends PersistedStore {
  initialize(type) {
    type = undefined;
    if (type != null) {
      type = type.type;
    }
    if (type == null) {
      type = null;
    }
  }
  getType() {
    return type;
  }
  getState() {
    return { type };
  }
}
const prototype = NewUserStore.prototype;
NewUserStore.displayName = "NewUserStore";
NewUserStore.persistKey = "nuf";
const obj = {
  NUF_NEW_USER: function handleNewUser(newUserType) {
    type = newUserType.newUserType;
    newUserStore.persist();
  },
  NUF_COMPLETE: function handleNUFCompleted() {
    type = null;
    newUserStore.persist();
  }
};
const newUserStore = new NewUserStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/nuf/NewUserStore.tsx");

export default newUserStore;