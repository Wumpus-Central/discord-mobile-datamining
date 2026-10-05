// discord_app/modules/nuf/NewUserStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const newUserStore = new NewUserStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/nuf/NewUserStore.tsx");

export default newUserStore;
