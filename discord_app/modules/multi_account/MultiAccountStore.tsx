// discord_app/modules/multi_account/MultiAccountStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import TokenManagerAll from "../../../discord_common/js/shared/lib/TokenManager.tsx";
import Constants from "Constants.tsx";
import isStaffFromRawUserDefault from "../user/isStaffFromRawUser.tsx";
import DragAndDropUtils from "../../utils/DragAndDropUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MAX_ACCOUNTS = Constants.MAX_ACCOUNTS;
let MultiAccountTokenStatus = { INVALID: 0, [0]: "INVALID", VALIDATING: 1, [1]: "VALIDATING", VALID: 2, [2]: "VALID" };
let users = [];
const PersistedStore = initializeDefault.PersistedStore;
class MultiAccountStore extends PersistedStore {}
const prototype = MultiAccountStore.prototype;
prototype["initialize"] = function initialize(users) {
  if (null != users) {
    users = users.users;
    if (users == null) {
      users = [];
    }
    closure_8 = users;
    canUseMultiAccountMobile = users.canUseMultiAccountMobile;
  }
};
prototype["getCanUseMultiAccountMobile"] = function getCanUseMultiAccountMobile() {
  return canUseMultiAccountMobile;
};
prototype["getState"] = function getState() {
  return { users, canUseMultiAccountMobile };
};
prototype["getUsers"] = function getUsers() {
  return closure_8;
};
prototype["getValidUsers"] = function getValidUsers() {
  return users.filter((tokenStatus) => tokenStatus.tokenStatus !== constants.INVALID);
};
prototype["getHasLoggedInAccounts"] = function getHasLoggedInAccounts() {
  return users.length > 0;
};
prototype["getIsValidatingUsers"] = function getIsValidatingUsers() {
  return users.some((tokenStatus) => tokenStatus.tokenStatus === constants.VALIDATING);
};
Object.defineProperty(prototype, "canUseMultiAccountNotifications", {
  get: function canUseMultiAccountNotifications() {
    return this.getCanUseMultiAccountMobile();
  },
  set: undefined,
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
      let obj = { users, canUseMultiAccountMobile: false };
    } else {
      obj = { users: [], canUseMultiAccountMobile: false };
    }
    return obj;
  },
];
MultiAccountStore.migrations = items;
MultiAccountTokenStatus = {
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    let id = user.id;
    let tmp = !c5;
    if (!c5) {
      tmp = isStaffFromRawUserDefault(user);
    }
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
      obj = { id: null, avatar: null, username: null, discriminator: null, tokenStatus: null, pushSyncToken: null };
      ({ id: obj.id, avatar: obj.avatar, username: obj.username, discriminator: obj.discriminator } = user);
      obj.tokenStatus = obj.VALID;
      substr.push(obj);
      users = substr;
    }
    if (substr.length > MAX_ACCOUNTS) {
      const item = users.splice(tmp12).forEach((id) => {
        id = id.id;
        closure_8 = closure_8.filter((id) => id.id !== id);
        TokenManagerAll.removeToken(id);
      });
      const spliceResult = users.splice(tmp12);
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
    const substr = users.slice();
    const found = substr.find((id) => id.id === userId);
    if (null != found) {
      found.tokenStatus = obj.VALIDATING;
      users = substr;
    }
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS(userId) {
    userId = userId.userId;
    const substr = users.slice();
    const found = substr.find((id) => id.id === userId);
    if (null != found) {
      found.tokenStatus = obj.VALID;
      users = substr;
    }
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE(userId) {
    userId = userId.userId;
    const substr = users.slice();
    const found = substr.find((id) => id.id === userId);
    if (null != found) {
      found.tokenStatus = obj.INVALID;
      users = substr;
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT(userId) {
    userId = userId.userId;
    users = users.filter((id) => id.id !== id);
    TokenManagerAll.removeToken(userId);
  },
  MULTI_ACCOUNT_MOVE_ACCOUNT: function handleMoveAccount(arg0) {
    ({ from, to } = arg0);
    closure_8 = DragAndDropUtils.moveItemFromTo(closure_8, from, to);
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
    ({ userId: require, pushSyncToken: importDefault } = arg0);
    users = users.map((id) => {
      let tmp = id;
      if (id.id === require) {
        const obj = {};
        const merged = Object.assign(id);
        obj.pushSyncToken = pushSyncToken;
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
          const obj = {};
          const merged = Object.assign(pushSyncToken);
          obj.pushSyncToken = null;
          tmp = obj;
        }
      }
      return tmp;
    });
  },
};
const multiAccountStore = new MultiAccountStore(DispatcherDefault, MultiAccountTokenStatus);
const result = size.fileFinishedImporting("modules/multi_account/MultiAccountStore.tsx");

export default multiAccountStore;
export { MultiAccountTokenStatus };
