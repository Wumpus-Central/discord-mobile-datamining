// === Module 5447: ConnectedAccountsStore ===

// Module 5447 (ConnectedAccountsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import PlatformsDefault from "Platforms" /* 5449 */;
import fetchConnectedAccounts from "fetchConnectedAccounts" /* 5572 */;
import postConnectionCallback from "postConnectionCallback" /* 5573 */;
import ConnectedAccountRecord from "ConnectedAccountRecord" /* 5448 */;
import size from "module_2" /* 2 */;

let closure_6, closure_7, integrations;

const f90570 = (type) => {
  const hasItem = set.has(type.type);
  let isSupportedResult = !hasItem;
  if (isSupportedResult) {
    const obj = PlatformsDefault;
    isSupportedResult = obj.isSupported(type.type);
  }
  return isSupportedResult;
};
const f90571 = (type) => set.has(type.type);
const items = [Constants.PlatformTypes.CONTACTS];
const set = new Set(items);
let c5 = true;
const metroRequire = [];
const metroImportDefault = [];
const metroImportAll = {};
const set1 = new Set();
const authStore = {};
const unpackModuleId = {};
const Store = get_initializedDefault.Store;
class ConnectedAccountsStore extends Store {
  isJoining(id) {
    return closure_8[id] || false;
  }
  joinErrorMessage(arg0) {
    return closure_11[arg0];
  }
  isFetching() {
    return c5;
  }
  getAccounts() {
    return closure_6;
  }
  getLocalAccounts() {
    return closure_7;
  }
  getAccount(accountId, provider_id) {
    let closure_0 = accountId;
    let closure_1 = provider_id;
    return closure_6.find((id) => (null == closure_0 || id.id === tmp) && id.type === closure_1);
  }
  getLocalAccount(CONTACTS) {
    let closure_0 = CONTACTS;
    return closure_7.find((type) => type.type === closure_0);
  }
  isSuggestedAccountType(arg0) {
    return closure_10[arg0] || false;
  }
  addPendingAuthorizedState(state) {
    set1.add(state);
  }
  deletePendingAuthorizedState(arg0) {
    set1.delete(arg0);
  }
  hasPendingAuthorizedState(arg0) {
    return set1.has(arg0);
  }
}
const prototype = ConnectedAccountsStore.prototype;
ConnectedAccountsStore.displayName = "ConnectedAccountsStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(connectedAccounts) {
    connectedAccounts = connectedAccounts.connectedAccounts;
    const mapped = connectedAccounts.map((item) => {
      const tmp = new ConnectedAccountRecord(item);
      return tmp;
    });
    closure_6 = mapped.filter(f90570);
    closure_7 = mapped.filter(f90571);
    c5 = false;
  },
  USER_CONNECTIONS_UPDATE: function handleConnectionsUpdate(local) {
    if (local.local) {
      if (null != local.accounts) {
        const accounts = local.accounts;
        const mapped = accounts.map((integrations) => {
          let obj = {
            integrations: integrations.map((guild) => {
              let fromGuildBasic;
              let obj2;
              const obj = { guild: fromGuildBasic(obj2) };
              const merged = Object.assign(guild);
              obj2 = { features: [] };
              fromGuildBasic = closure_1_0(closure_1_2[3]).fromGuildBasic;
              closure_1_0(closure_1_2[3]);
              const merged1 = Object.assign(guild.guild);
              return obj;
            })
          };
          let merged = Object.assign(integrations);
          integrations = integrations.integrations;
          const tmp2 = new ConnectedAccountRecord(obj);
          return tmp2;
        });
        closure_6 = mapped.filter(f90570);
        closure_7 = mapped.filter(f90571);
        c5 = false;
      }
    }
    let obj = fetchConnectedAccounts;
    const connectedAccounts = obj.fetchConnectedAccounts();
  },
  USER_CONNECTIONS_INTEGRATION_JOINING: function handleJoining(integrationId) {
    closure_8[integrationId.integrationId] = integrationId.joining;
  },
  USER_CONNECTION_UPDATE: function handleUserConnectionUpdate(arg0) {
    let accessToken;
    let closure_129_0;
    let closure_129_1;
    let revoked;
    let showActivity;
    ({ platformType: closure_129_0, id: closure_129_1, revoked, accessToken, showActivity } = arg0);
    const found = closure_6.find((id) => id.id === closure_1_1 && id.type === closure_1_0);
    if (null == found) {
      return false;
    } else {
      if (null != revoked) {
        found.revoked = revoked;
      }
      if (null != accessToken) {
        found.accessToken = accessToken;
      }
      if (null != showActivity) {
        found.showActivity = showActivity;
      }
    }
  },
  USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function handleJoiningError(integrationId) {
    let str = "";
    integrationId = integrationId.integrationId;
    if (undefined !== integrationId.error) {
      str = integrationId.error;
    }
    closure_11[integrationId] = str;
  },
  USER_CONNECTIONS_CALLBACK: function handleUserConnectionsCallback(arg0) {
    let code;
    let openid_params;
    let provider;
    let state;
    ({ code, state, openid_params, provider } = arg0);
    const obj = postConnectionCallback;
    const result = obj.postConnectionCallback(provider, { code, state, openid_params });
  }
};
const connectedAccountsStore = new ConnectedAccountsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/ConnectedAccountsStore.tsx");

export default connectedAccountsStore;