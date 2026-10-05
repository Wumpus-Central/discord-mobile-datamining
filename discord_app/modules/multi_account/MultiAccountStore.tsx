// === Module 12056: MultiAccountStore ===

// Module 12056 (MultiAccountStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import TokenManagerAll from "TokenManager" /* 1111 */;
import DragAndDropUtils from "DragAndDropUtils" /* 10735 */;
import Constants from "Constants" /* 12057 */;
import isStaffFromRawUserDefault from "isStaffFromRawUser" /* 12058 */;
import size from "module_2" /* 2 */;

let c4, c5, canUseMultiAccountMobile;

const MAX_ACCOUNTS = Constants.MAX_ACCOUNTS;
const MultiAccountTokenStatus = { INVALID: 0, [0]: "INVALID", VALIDATING: 1, [1]: "VALIDATING", VALID: 2, [2]: "VALID" };
const metroImportAll = [];
const PersistedStore = get_initializedDefault.PersistedStore;
class MultiAccountStore extends PersistedStore {
  initialize(users) {
    if (null != users) {
      users = users.users;
      if (users == null) {
        users = [];
      }
      let closure_8 = users;
      canUseMultiAccountMobile = users.canUseMultiAccountMobile;
    }
  }
  getCanUseMultiAccountMobile() {
    return canUseMultiAccountMobile;
  }
  getState() {
    return { users, canUseMultiAccountMobile };
  }
  getUsers() {
    return users;
  }
  getValidUsers() {
    return users.filter((tokenStatus) => tokenStatus.tokenStatus !== constants.INVALID);
  }
  getHasLoggedInAccounts() {
    return users.length > 0;
  }
  getIsValidatingUsers() {
    return users.some((tokenStatus) => tokenStatus.tokenStatus === constants.VALIDATING);
  }
}
Object.defineProperty(MultiAccountStore.prototype, "canUseMultiAccountNotifications", {
  get: function canUseMultiAccountNotifications() {
    return this.getCanUseMultiAccountMobile();
  },
  set: undefined
});
MultiAccountStore.displayName = "MultiAccountStore";
MultiAccountStore.persistKey = "MultiAccountStore";
const items = [
  (users) => {
    let obj;
    if (null != users) {
      users = users.users;
      if (users == null) {
        users = [];
      }
      obj = { users, canUseMultiAccountMobile: false };
      const obj2 = { users, canUseMultiAccountMobile: false };
    } else {
      obj = { users: [], canUseMultiAccountMobile: false };
    }
    return obj;
  }
];
MultiAccountStore.migrations = items;
let obj2 = {
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    let obj;
    user = user.user;
    let id = user.id;
    const tmp = !c5 && isStaffFromRawUserDefault(user);
    if (tmp) {
      c5 = true;
    }
    const substr = users.slice();
    const findIndexResult = substr.findIndex((id) => id.id === user.id);
    if (findIndexResult > -1) {
      users[findIndexResult].avatar = user.avatar;
      users[findIndexResult].username = user.username;
      users[findIndexResult].discriminator = user.discriminator;
      users[findIndexResult].tokenStatus = obj.VALID;
      users = substr;
    } else {
      obj = { id: null, avatar: null, username: null, discriminator: null, tokenStatus: obj.VALID, pushSyncToken: null };
      ({ id: obj.id, avatar: obj.avatar, username: obj.username, discriminator: obj.discriminator } = user);
      substr.push(obj);
      users = substr;
    }
    if (substr.length > MAX_ACCOUNTS) {
      const spliceResult = users.splice(tmp12);
      const item = spliceResult.forEach((id) => {
        id = id.id;
        closure_8 = closure_8.filter((id) => id.id !== id);
        const obj = TokenManagerAll;
        obj.removeToken(id);
      });
    }
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      users = users.filter((id) => id.id !== closure_1_4);
    }
    c4 = null;
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST(userId) {
    userId = userId.userId;
    const VALIDATING = obj.VALIDATING;
    const substr = users.slice();
    const found = substr.find((id) => id.id === userId);
    if (null != found) {
      found.tokenStatus = VALIDATING;
      users = substr;
    }
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS(userId) {
    userId = userId.userId;
    const VALID = obj.VALID;
    const substr = users.slice();
    const found = substr.find((id) => id.id === userId);
    if (null != found) {
      found.tokenStatus = VALID;
      users = substr;
    }
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE(userId) {
    userId = userId.userId;
    const INVALID = obj.INVALID;
    const substr = users.slice();
    const found = substr.find((id) => id.id === userId);
    if (null != found) {
      found.tokenStatus = INVALID;
      users = substr;
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT(userId) {
    userId = userId.userId;
    users = users.filter((id) => id.id !== id);
    const obj = TokenManagerAll;
    obj.removeToken(userId);
  },
  MULTI_ACCOUNT_MOVE_ACCOUNT: function handleMoveAccount(arg0) {
    let from;
    let to;
    ({ from, to } = arg0);
    const obj = DragAndDropUtils;
    closure_8 = obj.moveItemFromTo(closure_8, from, to);
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate(user) {
    user = user.user;
    const substr = users.slice();
    const found = substr.find((id) => id.id === user.id);
    if (null != found) {
      ({ avatar: tmp.avatar, username: tmp.username, discriminator: tmp.discriminator } = user);
      users = substr;
    }
  },
  MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function handleUpdatePushSyncToken(arg0) {
    let closure_129_0;
    let closure_129_1;
    ({ userId: closure_129_0, pushSyncToken: closure_129_1 } = arg0);
    users = users.map((id) => {
      let tmp = id;
      if (id.id === closure_1_0) {
        const obj = { pushSyncToken };
        const merged = Object.assign(id);
        tmp = obj;
      }
      return tmp;
    });
  },
  MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function handleInvalidatePushSyncTokens(invalidPushSyncTokens) {
    invalidPushSyncTokens = invalidPushSyncTokens.invalidPushSyncTokens;
    users = users.map((pushSyncToken) => {
      let tmp = pushSyncToken;
      if (null != pushSyncToken.pushSyncToken) {
        tmp = pushSyncToken;
        if (invalidPushSyncTokens.includes(pushSyncToken.pushSyncToken)) {
          const obj = { pushSyncToken: null };
          const merged = Object.assign(pushSyncToken);
          tmp = obj;
        }
      }
      return tmp;
    });
  }
};
const multiAccountStore = new MultiAccountStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/multi_account/MultiAccountStore.tsx");

export default multiAccountStore;
export { MultiAccountTokenStatus };