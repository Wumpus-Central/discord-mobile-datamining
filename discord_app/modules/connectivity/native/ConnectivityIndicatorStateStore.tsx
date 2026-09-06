// discord_app/modules/connectivity/native/ConnectivityIndicatorStateStore.tsx
import timestampDefault from "../../debug/Logger.tsx";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import awaitOnlineDefault from "../../../utils/NetworkUtils.tsx";
import closure_2 from "../../cache/CacheStore.tsx";
import closure_3 from "../../../stores/AuthenticationStore.tsx";
import closure_4 from "../../../stores/MessageStore.tsx";
import closure_5 from "../../../stores/SelectedChannelStore.tsx";
import closure_6 from "../../../stores/native/AppStateStore.tsx";
import { AppStates } from "../../../Constants.tsx";

function updateState() {
  if (!c19) {
    if (store.getState() !== AppStates.BACKGROUND) {
      if (null != c16) {
        if (null != c15) {
          if (c16) {
            let UNKNOWN = constants.OFFLINE;
            let tmp9 = constants;
          } else if (!c15) {
            tmp9 = constants;
            UNKNOWN = constants.ONLINE;
          } else {
            UNKNOWN = constants.CONNECTING;
            tmp9 = constants;
          }
        }
        if (obj.HIDDEN === tmp) {
          if (tmp9.OFFLINE === UNKNOWN) {
            obj = { delayed: null };
            obj = { state: null, delayMs: null };
            obj[0] = tmp13.NO_CONNECTION;
            obj[1] = c12;
            obj[0] = obj;
          } else if (tmp9.CONNECTING === UNKNOWN) {
            obj1 = { state: null, delayMs: null };
            obj1[0] = tmp13.WAITING_FOR_NETWORK;
            if (closure_2.hasCache()) {
              let obj15 = state(13687);
              let num2 = obj15.getConfig({ location: "ConnectivityIndicatorStateStore" }).timeoutMs;
              if (num2 == null) {
                num2 = 10000;
              }
              let tmp23 = num2;
            } else {
              tmp23 = c12;
            }
            const obj2 = { delayed: null };
            obj1[1] = tmp23;
            obj2[0] = obj1;
            obj = obj2;
          } else {
            if (tmp9.ONLINE !== UNKNOWN) {
              const UNKNOWN4 = tmp9.UNKNOWN;
            }
            obj = {};
          }
        } else if (tmp13.BACK_ONLINE === tmp) {
          if (tmp9.OFFLINE === UNKNOWN) {
            const obj3 = { delayed: null };
            const obj4 = { state: null, delayMs: null };
            obj4[0] = tmp13.NO_CONNECTION;
            obj4[1] = c12;
            obj3[0] = obj4;
            obj = obj3;
          } else if (tmp9.CONNECTING === UNKNOWN) {
            const obj5 = { state: null, delayMs: null };
            obj5[0] = tmp13.WAITING_FOR_NETWORK;
            if (closure_2.hasCache()) {
              let obj10 = state(13687);
              let num = obj10.getConfig({ location: "ConnectivityIndicatorStateStore" }).timeoutMs;
              if (num == null) {
                num = 10000;
              }
              let tmp18 = num;
            } else {
              tmp18 = c12;
            }
            const obj6 = { delayed: null };
            obj5[1] = tmp18;
            obj6[0] = obj5;
            obj = obj6;
          } else {
            if (tmp9.ONLINE !== UNKNOWN) {
              if (tmp9.UNKNOWN !== UNKNOWN) {
                obj = {};
              }
            }
            const obj7 = { delayed: null };
            const obj8 = { state: null, delayMs: null };
            obj8[0] = tmp13.HIDDEN;
            obj8[1] = c11;
            obj7[0] = obj8;
            obj = obj7;
          }
        } else if (tmp13.WAITING_FOR_NETWORK === tmp) {
          if (tmp9.OFFLINE === UNKNOWN) {
            const obj9 = { immediate: null };
            obj9[0] = tmp13.NO_CONNECTION;
            obj = obj9;
          } else if (tmp9.ONLINE === UNKNOWN) {
            obj10 = { immediate: null, delayed: null };
            obj10[0] = tmp13.BACK_ONLINE;
            const obj11 = { state: null, delayMs: null };
            obj11[0] = tmp13.HIDDEN;
            obj11[1] = c11;
            obj10[1] = obj11;
            obj = obj10;
          } else {
            if (tmp9.CONNECTING !== UNKNOWN) {
              const UNKNOWN3 = tmp9.UNKNOWN;
            }
            obj = {};
          }
        } else if (tmp13.NO_CONNECTION === tmp) {
          if (tmp9.CONNECTING === UNKNOWN) {
            const obj12 = { immediate: null };
            obj12[0] = tmp13.WAITING_FOR_NETWORK;
            obj = obj12;
          } else if (tmp9.ONLINE === UNKNOWN) {
            const obj13 = { immediate: null, delayed: null };
            obj13[0] = tmp13.BACK_ONLINE;
            const obj14 = { state: null, delayMs: null };
            obj14[0] = tmp13.HIDDEN;
            obj14[1] = c11;
            obj13[1] = obj14;
            obj = obj13;
          } else {
            if (tmp9.OFFLINE !== UNKNOWN) {
              const UNKNOWN2 = tmp9.UNKNOWN;
            }
            obj = {};
          }
        }
      }
      UNKNOWN = constants.UNKNOWN;
      tmp9 = constants;
    }
    if (null != obj.immediate) {
      const immediate = obj.immediate;
      closure_13 = immediate;
      if (tmp28) {
        if (null != timeout) {
          closure_8.verbose("clearing pending state update timer");
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          timeout = null;
        }
        c14 = null;
      }
      if (tmp !== closure_13) {
        let _HermesInternal = HermesInternal;
        closure_8.verbose("state changed immediately from " + tmp + " to " + closure_13);
        if (connectivityIndicatorStateStore != null) {
          obj21.emitChange();
        }
        obj21 = connectivityIndicatorStateStore;
      }
      tmp28 = null !== c14 && c14 === immediate;
    }
    if (null != obj.delayed) {
      const delayed = obj.delayed;
      state = delayed.state;
      if (null != timeout) {
        closure_8.verbose("clearing existing state update timer because we're scheduling a new one");
        const _clearTimeout3 = clearTimeout;
        clearTimeout(timeout);
      }
      c14 = state;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        c21 = null;
        c14 = null;
        closure_13 = state;
        if (closure_13 !== state) {
          const _HermesInternal = HermesInternal;
          closure_1_8.verbose("state changed after a delay from " + tmp + " to " + closure_13);
          if (closure_1_23 != null) {
            obj.emitChange();
          }
          obj = closure_1_23;
        }
      }, delayed.delayMs);
    } else {
      if (null != timeout) {
        closure_8.verbose("clearing pending state update timer");
        const _clearTimeout2 = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      c14 = null;
    }
  }
  obj15 = { immediate: obj.HIDDEN };
  obj = obj15;
}
function handleConnectionClosed() {
  c17 = false;
  updateState();
  return false;
}
function handleLoadingMessagesChanged() {
  channelId = channelId.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    const isLoadingMessagesResult = loadingMessages.isLoadingMessages(channelId);
    if (isLoadingMessagesResult !== c18) {
      c18 = isLoadingMessagesResult;
      updateState();
    }
    return false;
  }
}
function handleAuthStoreChanged() {
  const isAuthenticatedResult = closure_3.isAuthenticated();
  if (c15 !== isAuthenticatedResult) {
    c15 = isAuthenticatedResult;
    updateState();
  }
  return false;
}
function handleAppStateUpdate() {
  const state = store.getState();
  if (AppStates.ACTIVE === state) {
    if (state === tmp2.BACKGROUND) {
      c19 = true;
      if (null != timeout) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(timeout);
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        c19 = false;
        c22 = null;
        callback();
      }, 5000);
    }
  } else if (tmp2.BACKGROUND === state) {
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = null;
    }
  } else {
    const INACTIVE = tmp2.INACTIVE;
  }
  updateState();
  return false;
}
let closure_8 = new timestampDefault("ConnectivityIndicatorStateStore");
let obj = {
  HIDDEN: "hidden",
  WAITING_FOR_NETWORK: "waiting_for_network",
  NO_CONNECTION: "no_connection",
  BACK_ONLINE: "back_online",
};
let closure_10 = { UNKNOWN: "unknown", ONLINE: "online", OFFLINE: "offline", CONNECTING: "connecting" };
let c11 = 2000;
let c12 = 1000;
const HIDDEN = obj.HIDDEN;
let c14 = null;
let c15 = null;
let c16 = null;
let c17 = false;
let c18 = false;
let c19 = false;
let c20 = null;
let c21 = null;
let c22 = null;
let connectivityIndicatorStateStore = null;
const Store = initializeDefault.Store;
class ConnectivityIndicatorStateStore extends Store {}
const prototype = ConnectivityIndicatorStateStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_2, closure_4, closure_5, closure_6);
  const items = [closure_4];
  this.syncWith(items, handleLoadingMessagesChanged);
  const items1 = [closure_3];
  this.syncWith(items1, handleAuthStoreChanged);
  const items2 = [closure_6];
  this.syncWith(items2, handleAppStateUpdate);
  awaitOnlineDefault.addOfflineCallback(() => {
    c16 = true;
    callback();
  });
  obj = awaitOnlineDefault;
  awaitOnlineDefault.addOnlineCallback(() => {
    c16 = false;
    callback();
  });
  const obj2 = awaitOnlineDefault;
  closure_16 = !awaitOnlineDefault.isOnline();
  closure_15 = closure_3.isAuthenticated();
  updateState();
};
prototype["getState"] = function getState() {
  return HIDDEN;
};
ConnectivityIndicatorStateStore.displayName = "ConnectivityIndicatorStateStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    c17 = true;
    updateState();
    return false;
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    c17 = true;
    updateState();
    return false;
  },
  CONNECTION_CLOSED: handleConnectionClosed,
  CONNECTION_INTERRUPTED: handleConnectionClosed,
};
connectivityIndicatorStateStore = new ConnectivityIndicatorStateStore(dispatcherDefault, obj);
const tmp2 = new timestampDefault("ConnectivityIndicatorStateStore");
const result = require("set").fileFinishedImporting("modules/connectivity/native/ConnectivityIndicatorStateStore.tsx");

export default connectivityIndicatorStateStore;
export const ConnectivityIndicatorState = obj;
