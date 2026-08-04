// discord_app/stores/ConnectedAccountsStore.tsx
import toString from "toString";
import { Store } from "initialize";
import set from "getPlatformUserUrl";

const require = arg1;
const items = [require("ME").PlatformTypes.CONTACTS];
let set = new Set(items);
let c5 = true;
let closure_6 = [];
let closure_7 = [];
let closure_8 = {};
const set1 = new Set();
let closure_10 = {};
let closure_11 = {};
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
  let closure_0 = accountId;
  let closure_1 = SPOTIFY;
  return closure_6.find((id) => {
    let tmp2 = null == closure_0 || id.id === tmp;
    if (tmp2) {
      tmp2 = id.type === closure_1;
    }
    return tmp2;
  });
};
prototype["getLocalAccount"] = function getLocalAccount(CONTACTS) {
  let closure_0 = CONTACTS;
  return closure_7.find((type) => type.type === closure_0);
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
const connectedAccountsStore = new ConnectedAccountsStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(connectedAccounts) {
    connectedAccounts = connectedAccounts.connectedAccounts;
    const mapped = connectedAccounts.map((arg0) => new toString(arg0));
    let closure_6 = mapped.filter((type) => {
      const hasItem = set.has(type.type);
      let isSupportedResult = !hasItem;
      if (!hasItem) {
        isSupportedResult = callback(table[2]).isSupported(type.type);
        const obj = callback(table[2]);
      }
      return isSupportedResult;
    });
    let closure_7 = mapped.filter((type) => set.has(type.type));
    let c5 = false;
  },
  USER_CONNECTIONS_UPDATE: function handleConnectionsUpdate(local) {
    if (local.local) {
      if (null != local.accounts) {
        const accounts = local.accounts;
        const mapped = accounts.map((integrations) => {
          let obj = {};
          let merged = Object.assign(integrations);
          integrations = integrations.integrations;
          obj.integrations = integrations.map((guild) => {
            let obj = {};
            const merged = Object.assign(guild);
            obj = {};
            const merged1 = Object.assign(guild.guild);
            obj.features = [];
            obj.guild = callback(table[3]).fromGuildBasic(obj);
            return obj;
          });
          return new toString(obj);
        });
        let closure_6 = mapped.filter((type) => {
          const hasItem = set.has(type.type);
          let isSupportedResult = !hasItem;
          if (!hasItem) {
            isSupportedResult = callback(table[2]).isSupported(type.type);
            const obj = callback(table[2]);
          }
          return isSupportedResult;
        });
        let closure_7 = mapped.filter((type) => set.has(type.type));
        let c5 = false;
      }
    }
    const response = importDefault(4999).fetch();
  },
  USER_CONNECTIONS_INTEGRATION_JOINING: function handleJoining(integrationId) {
    closure_8[integrationId.integrationId] = integrationId.joining;
  },
  USER_CONNECTION_UPDATE: function handleUserConnectionUpdate(arg0) {
    let accessToken;
    let importDefault;
    let require;
    let revoked;
    ({ platformType: require, id: importDefault, revoked, accessToken } = arg0);
    const found = closure_6.find((id) => {
      let tmp = id.id === closure_1;
      if (tmp) {
        tmp = id.type === closure_0;
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
    let code;
    let openid_params;
    let provider;
    let state;
    ({ code, state, openid_params, provider } = arg0);
    importDefault(4999).callback(provider, { code, state, openid_params });
  }
});
const result = set.fileFinishedImporting("stores/ConnectedAccountsStore.tsx");

export default connectedAccountsStore;