// === Module 11585: initialize ===

// Module 11585 (initialize)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import setSecondaryTokenAll from "setSecondaryToken" /* 707 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import MAX_ACCOUNTS2 from "MAX_ACCOUNTS" /* 11586 */;
import isStaffDefault from "isStaff" /* 11587 */;
import calculatePositionDeltas from "calculatePositionDeltas" /* 11588 */;

const MAX_ACCOUNTS = MAX_ACCOUNTS2.MAX_ACCOUNTS;
let obj = { INVALID: 0, [0]: "INVALID", VALIDATING: 1, [1]: "VALIDATING", VALID: 2, [2]: "VALID" };
let closure_8 = [];
const PersistedStore = initializeDefault.PersistedStore;
class MultiAccountStore extends PersistedStore {
}
const prototype = MultiAccountStore.prototype;
prototype["initialize"] = function initialize(users) {
  if (null != users) {
    users = users.users;
    if (users == null) {
      users = [];
    }
    const canUseMultiAccountMobile = users.canUseMultiAccountMobile;
  }
};
prototype["getCanUseMultiAccountMobile"] = function getCanUseMultiAccountMobile() {
  return closure_5;
};
prototype["getState"] = function getState() {
  return { users: closure_8, canUseMultiAccountMobile: closure_5 };
};
prototype["getUsers"] = function getUsers() {
  return closure_8;
};
prototype["getValidUsers"] = function getValidUsers() {
  return closure_8.filter((tokenStatus) => tokenStatus.tokenStatus !== constants.INVALID);
};
prototype["getHasLoggedInAccounts"] = function getHasLoggedInAccounts() {
  return closure_8.length > 0;
};
prototype["getIsValidatingUsers"] = function getIsValidatingUsers() {
  return closure_8.some((tokenStatus) => tokenStatus.tokenStatus === constants.VALIDATING);
};
Object.defineProperty(prototype, "canUseMultiAccountNotifications", {
  get: function canUseMultiAccountNotifications() {
    return this.getCanUseMultiAccountMobile();
  },
  set: undefined
});
MultiAccountStore.displayName = "MultiAccountStore";
MultiAccountStore.persistKey = "MultiAccountStore";
const items = [
  (users) => {
    if (null != users) {
      users = users.users;
      if (users == null) {
        users = [];
      }
      obj = { users: null, canUseMultiAccountMobile: false };
      obj[0] = users;
    } else {
      obj = { users: null, canUseMultiAccountMobile: false };
      obj[0] = [];
    }
    return obj;
  }
];
MultiAccountStore.migrations = items;
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    let id = user.id;
    let tmp = !c5;
    if (!c5) {
      tmp = isStaffDefault(user);
    }
    if (tmp) {
      c5 = true;
    }
    substr = substr.slice();
    const findIndexResult = substr.findIndex((id) => id.id === user.id);
    if (findIndexResult > -1) {
      substr[findIndexResult].avatar = user.avatar;
      substr[findIndexResult].username = user.username;
      substr[findIndexResult].discriminator = user.discriminator;
      substr[findIndexResult].tokenStatus = obj.VALID;
    } else {
      obj = { id: null, avatar: null, username: null, discriminator: null, tokenStatus: null, pushSyncToken: null };
      ({ id: obj[0], avatar: obj[1], username: obj[2], discriminator: obj[3] } = user);
      obj[4] = obj.VALID;
      substr.push(obj);
    }
    if (substr.length > MAX_ACCOUNTS) {
      const item = substr.splice(tmp12).forEach((id) => {
        id = id.id;
        substr = substr.filter((id) => id.id !== id);
        callback(table[2]).removeToken(id);
      });
      const spliceResult = substr.splice(tmp12);
    }
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      closure_8 = closure_8.filter((id) => id.id !== c4);
    }
    c4 = null;
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST(userId) {
    userId = userId.userId;
    substr = substr.slice();
    const found = substr.find((id) => id.id === userId);
    if (null != found) {
      found.tokenStatus = obj.VALIDATING;
    }
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS(userId) {
    userId = userId.userId;
    substr = substr.slice();
    const found = substr.find((id) => id.id === userId);
    if (null != found) {
      found.tokenStatus = obj.VALID;
    }
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE(userId) {
    userId = userId.userId;
    substr = substr.slice();
    const found = substr.find((id) => id.id === userId);
    if (null != found) {
      found.tokenStatus = obj.INVALID;
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT(userId) {
    userId = userId.userId;
    closure_8 = closure_8.filter((id) => id.id !== id);
    setSecondaryTokenAll.removeToken(userId);
  },
  MULTI_ACCOUNT_MOVE_ACCOUNT: function handleMoveAccount(arg0) {
    ({ from, to } = arg0);
    closure_8 = calculatePositionDeltas.moveItemFromTo(closure_8, from, to);
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate(user) {
    user = user.user;
    substr = substr.slice();
    const found = substr.find((id) => id.id === user.id);
    if (null != found) {
      ({ avatar: tmp.avatar, username: tmp.username, discriminator: tmp.discriminator } = user);
    }
  },
  MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function handleUpdatePushSyncToken(arg0) {
    ({ userId: require, pushSyncToken: importDefault } = arg0);
    closure_8 = closure_8.map((id) => {
      let tmp = id;
      if (id.id === closure_0) {
        obj = {};
        const merged = Object.assign(id);
        obj.pushSyncToken = closure_1;
        tmp = obj;
      }
      return tmp;
    });
  },
  MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function handleInvalidatePushSyncTokens(invalidPushSyncTokens) {
    invalidPushSyncTokens = invalidPushSyncTokens.invalidPushSyncTokens;
    closure_8 = closure_8.map((pushSyncToken) => {
      let tmp = pushSyncToken;
      if (null != pushSyncToken.pushSyncToken) {
        tmp = pushSyncToken;
        if (invalidPushSyncTokens.includes(pushSyncToken.pushSyncToken)) {
          obj = {};
          const merged = Object.assign(pushSyncToken);
          obj.pushSyncToken = null;
          tmp = obj;
        }
      }
      return tmp;
    });
  }
};
const multiAccountStore = new MultiAccountStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("modules/multi_account/MultiAccountStore.tsx");

export default multiAccountStore;
export const MultiAccountTokenStatus = obj;