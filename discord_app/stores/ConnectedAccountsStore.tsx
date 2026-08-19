// discord_app/stores/ConnectedAccountsStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import callbackDefault from "../actions/ConnectedAccountsActionCreators.tsx";
import toString from "../records/ConnectedAccountRecord.tsx";

const require = fn;
const items = [require("ME").PlatformTypes.CONTACTS];
const set = new Set(items);
let c5 = true;
let closure_6 = [];
let closure_7 = [];
let closure_8 = {};
const set1 = new Set();
let closure_10 = {};
let closure_11 = {};
const Store = initializeDefault.Store;
class ConnectedAccountsStore extends Store {
}
const prototype = ConnectedAccountsStore.prototype;
prototype["isJoining"] = function isJoining(id) {
  return table[id] || false;
};
prototype["joinErrorMessage"] = function joinErrorMessage(arg0) {
  return table3[arg0];
};
prototype["isFetching"] = function isFetching() {
  return c5;
};
prototype["getAccounts"] = function getAccounts() {
  return closure_6;
};
prototype["getLocalAccounts"] = function getLocalAccounts() {
  return closure_7;
};
prototype["getAccount"] = function getAccount(accountId, SPOTIFY) {
  closure_0 = accountId;
  closure_1 = SPOTIFY;
  return closure_6.find((item, index) => {
    let tmp2 = null == closure_0 || item.id === tmp;
    if (tmp2) {
      tmp2 = item.type === closure_1;
    }
    return tmp2;
  });
};
prototype["getLocalAccount"] = function getLocalAccount(CONTACTS) {
  closure_0 = CONTACTS;
  return closure_7.find((item, index) => item.type === closure_0);
};
prototype["isSuggestedAccountType"] = function isSuggestedAccountType(arg0) {
  return table2[arg0] || false;
};
prototype["addPendingAuthorizedState"] = function addPendingAuthorizedState(state) {
  set1.add(state);
};
prototype["deletePendingAuthorizedState"] = function deletePendingAuthorizedState(arg0) {
  set1.delete(arg0);
};
prototype["hasPendingAuthorizedState"] = function hasPendingAuthorizedState(arg0) {
  return set1.has(arg0);
};
ConnectedAccountsStore.displayName = "ConnectedAccountsStore";
const connectedAccountsStore = new ConnectedAccountsStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(connectedAccounts) {
    connectedAccounts = connectedAccounts.connectedAccounts;
    const mapped = connectedAccounts.map((item, index) => new closure_3(item));
    closure_6 = mapped.filter((item, index) => {
      const hasItem = set.has(item.type);
      let isSupportedResult = !hasItem;
      if (!hasItem) {
        isSupportedResult = callback(table[2]).isSupported(item.type);
        const obj = callback(table[2]);
      }
      return isSupportedResult;
    });
    closure_7 = mapped.filter((item, index) => set.has(item.type));
    c5 = false;
  },
  USER_CONNECTIONS_UPDATE: function handleConnectionsUpdate(local) {
    if (local.local) {
      if (null != local.accounts) {
        const accounts = local.accounts;
        const mapped = accounts.map((item, index) => {
          let obj = {};
          let merged = Object.assign(item);
          const integrations = item.integrations;
          obj.integrations = integrations.map((item, index) => {
            const merged = Object.assign(item);
            const obj = {};
            const merged1 = Object.assign(item.guild);
            obj.features = [];
            obj.guild = callback(table[3]).fromGuildBasic(obj);
            return obj;
          });
          return new closure_3(obj);
        });
        closure_6 = mapped.filter((item, index) => {
          const hasItem = set.has(item.type);
          let isSupportedResult = !hasItem;
          if (!hasItem) {
            isSupportedResult = callback(table[2]).isSupported(item.type);
            const obj = callback(table[2]);
          }
          return isSupportedResult;
        });
        closure_7 = mapped.filter((item, index) => set.has(item.type));
        c5 = false;
      }
    }
    const response = callbackDefault.fetch();
  },
  USER_CONNECTIONS_INTEGRATION_JOINING: function handleJoining(integrationId) {
    closure_8[integrationId.integrationId] = integrationId.joining;
  },
  USER_CONNECTION_UPDATE: function handleUserConnectionUpdate(arg0) {
    ({ platformType: require, id: importDefault, revoked, accessToken } = arg0);
    const found = closure_6.find((item, index) => {
      let tmp = item.id === closure_1;
      if (tmp) {
        tmp = item.type === closure_0;
      }
      return tmp;
    });
    if (null == found) {
      return false;
    } else {
      if (null != revoked) {
        found.revoked = revoked;
      }
      if (null != accessToken) {
        found.accessToken = accessToken;
      }
    }
  },
  USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function handleJoiningError(error) {
    let str = "";
    if (undefined !== error.error) {
      str = error.error;
    }
    closure_11[error.integrationId] = str;
  },
  USER_CONNECTIONS_CALLBACK: function handleUserConnectionsCallback(arg0) {
    ({ code, state, openid_params, provider } = arg0);
    callbackDefault.callback(provider, { code, state, openid_params });
  }
});
const result = require("obj132").fileFinishedImporting("stores/ConnectedAccountsStore.tsx");

export default connectedAccountsStore;