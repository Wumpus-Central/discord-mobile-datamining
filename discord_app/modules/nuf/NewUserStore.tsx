// === Module 6698: initialize ===

// Module 6698 (initialize)
import { PersistedStore } from "initialize";

let c0 = null;
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
const newUserStore = new NewUserStore(require("dispatcher"), {
  NUF_NEW_USER: function handleNewUser(newUserType) {
    newUserType = newUserType.newUserType;
    newUserStore.persist();
  },
  NUF_COMPLETE: function handleNUFCompleted() {
    let c0 = null;
    newUserStore.persist();
  }
});
const result = require("set").fileFinishedImporting("modules/nuf/NewUserStore.tsx");

export default newUserStore;