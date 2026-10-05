// discord_app/modules/auth/LoginRequiredActionStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0;

function handleUpdateUser(user) {
  id = user.user.id;
}
const React = {};
const user_id = null;
let id = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class LoginRequiredActionStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      closure_0 = arg0;
    }
  }
  requiredActions(id) {
    let tmp = closure_0[id];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  requiredActionsIncludes(id, items) {
    const requiredActionsResult = this.requiredActions(id);
    const reduced =
      null != requiredActionsResult &&
      items.reduce((acc, item) => {
        const hasItem = acc || requiredActionsResult.includes(item);
        return hasItem;
      }, false);
    return reduced;
  }
  wasLoginAttemptedInSession(id) {
    return user_id === id;
  }
  getState() {
    return closure_0;
  }
}
const prototype = LoginRequiredActionStore.prototype;
LoginRequiredActionStore.displayName = "LoginRequiredActionStore";
LoginRequiredActionStore.persistKey = "LoginRequiredActionStore";
const obj = {
  LOGIN_ATTEMPTED: function handleLoginAttempted(arg0) {
    let required_actions;
    ({ required_actions, user_id } = arg0);
    if (null == required_actions) {
      if (user_id in closure_0) {
        delete closure_0[user_id];
      }
    } else if (null != user_id) {
      closure_0[user_id] = required_actions;
    }
  },
  CONNECTION_OPEN: handleUpdateUser,
  CURRENT_USER_UPDATE: handleUpdateUser,
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount || null == id;
    if (!isSwitchingAccount) {
      if (id in closure_0) {
        delete closure_0[tmp3];
      }
    }
  },
  PASSWORD_UPDATED: function handlePasswordUpdated(userId) {
    userId = userId.userId;
    if (userId in closure_0) {
      delete closure_0[userId];
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleRemoveMultiAccount(userId) {
    userId = userId.userId;
    if (userId in closure_0) {
      delete closure_0[userId];
    }
  },
};
const loginRequiredActionStore = new LoginRequiredActionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/auth/LoginRequiredActionStore.tsx");

export default loginRequiredActionStore;
