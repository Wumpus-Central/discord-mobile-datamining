// discord_app/modules/auth/LoginRequiredActionStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

function handleUpdateUser(user) {
  id = user.user.id;
}
let global = {};
const user_id = null;
let id = null;
const PersistedStore = initializeDefault.PersistedStore;
class LoginRequiredActionStore extends PersistedStore {}
const prototype = LoginRequiredActionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    global = arg0;
  }
};
prototype["requiredActions"] = function requiredActions(id) {
  let tmp = global[id];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["requiredActionsIncludes"] = function requiredActionsIncludes(id, items) {
  const requiredActionsResult = this.requiredActions(id);
  global = requiredActionsResult;
  let reduced = null != requiredActionsResult;
  if (reduced) {
    reduced = items.reduce((acc, item) => {
      let hasItem = acc;
      if (!acc) {
        hasItem = requiredActionsResult.includes(item);
      }
      return hasItem;
    }, false);
  }
  return reduced;
};
prototype["wasLoginAttemptedInSession"] = function wasLoginAttemptedInSession(id) {
  return user_id === id;
};
prototype["getState"] = function getState() {
  return global;
};
LoginRequiredActionStore.displayName = "LoginRequiredActionStore";
LoginRequiredActionStore.persistKey = "LoginRequiredActionStore";
const loginRequiredActionStore = new LoginRequiredActionStore(DispatcherDefault, {
  LOGIN_ATTEMPTED: function handleLoginAttempted(arg0) {
    ({ required_actions, user_id } = arg0);
    if (null == required_actions) {
      if (user_id in global) {
        delete tmp[tmp2];
      }
    } else if (null != user_id) {
      global[user_id] = required_actions;
    }
  },
  CONNECTION_OPEN: handleUpdateUser,
  CURRENT_USER_UPDATE: handleUpdateUser,
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    if (!isSwitchingAccount) {
      isSwitchingAccount = null == id;
    }
    if (!isSwitchingAccount) {
      if (id in global) {
        delete tmp[tmp2];
      }
    }
  },
  PASSWORD_UPDATED: function handlePasswordUpdated(userId) {
    if (userId.userId in global) {
      delete tmp[tmp2];
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleRemoveMultiAccount(userId) {
    if (userId.userId in global) {
      delete tmp[tmp2];
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/LoginRequiredActionStore.tsx");

export default loginRequiredActionStore;
