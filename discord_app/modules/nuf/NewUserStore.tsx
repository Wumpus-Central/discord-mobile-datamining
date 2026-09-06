// discord_app/modules/nuf/NewUserStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let c0 = null;
const PersistedStore = initializeDefault.PersistedStore;
class NewUserStore extends PersistedStore {}
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/NewUserStore.tsx");

export default newUserStore;
