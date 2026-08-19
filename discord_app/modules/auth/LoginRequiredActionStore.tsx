// === Module 1384: handleUpdateUser ===

// Module 1384 (handleUpdateUser)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

function handleUpdateUser(user) {
  const id = user.user.id;
}
let closure_0 = {};
let c1 = null;
let c2 = null;
const PersistedStore = initializeDefault.PersistedStore;
class LoginRequiredActionStore extends PersistedStore {
}
const prototype = LoginRequiredActionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_0 = arg0;
  }
};
prototype["requiredActions"] = function requiredActions(id) {
  let tmp = table[id];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["requiredActionsIncludes"] = function requiredActionsIncludes(id, items) {
  const requiredActionsResult = this.requiredActions(id);
  closure_0 = requiredActionsResult;
  let reduced = null != requiredActionsResult;
  if (reduced) {
    reduced = items.reduce((acc, item, index) => {
      let hasItem = acc;
      if (!acc) {
        hasItem = closure_0.includes(item);
      }
      return hasItem;
    }, false);
  }
  return reduced;
};
prototype["wasLoginAttemptedInSession"] = function wasLoginAttemptedInSession(id) {
  return c1 === id;
};
prototype["getState"] = function getState() {
  return closure_0;
};
LoginRequiredActionStore.displayName = "LoginRequiredActionStore";
LoginRequiredActionStore.persistKey = "LoginRequiredActionStore";
const loginRequiredActionStore = new LoginRequiredActionStore(dispatcherDefault, {
  LOGIN_ATTEMPTED: function handleLoginAttempted(arg0) {
    ({ required_actions, user_id } = arg0);
    if (null == required_actions) {
      if (user_id in closure_0) {
        delete tmp[tmp2];
      }
    } else if (null != user_id) {
      closure_0[user_id] = required_actions;
    }
  },
  CONNECTION_OPEN: handleUpdateUser,
  CURRENT_USER_UPDATE: handleUpdateUser,
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    if (!isSwitchingAccount) {
      isSwitchingAccount = null == c2;
    }
    if (!isSwitchingAccount) {
      if (c2 in closure_0) {
        delete tmp[tmp2];
      }
    }
  },
  PASSWORD_UPDATED: function handlePasswordUpdated(userId) {
    if (userId.userId in closure_0) {
      delete tmp[tmp2];
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleRemoveMultiAccount(userId) {
    if (userId.userId in closure_0) {
      delete tmp[tmp2];
    }
  }
});
const result = require("obj132").fileFinishedImporting("modules/auth/LoginRequiredActionStore.tsx");

export default loginRequiredActionStore;