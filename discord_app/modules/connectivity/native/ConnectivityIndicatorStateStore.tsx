// discord_app/modules/connectivity/native/ConnectivityIndicatorStateStore.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import NetworkUtilsDefault from "../../../utils/NetworkUtils.tsx";
import CacheStore from "../../cache/CacheStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

function updateState() {
  if (!c19) {
    if (AppStateStore.getState() !== AppStates.BACKGROUND) {
      if (null != closure_16) {
        if (null != closure_15) {
          if (closure_16) {
            let UNKNOWN = constants.OFFLINE;
            let tmp9 = constants;
          } else if (!closure_15) {
            tmp9 = constants;
            UNKNOWN = constants.ONLINE;
          } else {
            UNKNOWN = constants.CONNECTING;
            tmp9 = constants;
          }
        }
        if (obj.HIDDEN === tmp) {
          if (tmp9.OFFLINE === UNKNOWN) {
            const obj2 = { delayed: null };
            const obj3 = { state: tmp13.NO_CONNECTION, delayMs: delayMs2 };
            obj2.delayed = obj3;
            obj = obj2;
          } else if (tmp9.CONNECTING === UNKNOWN) {
            const obj4 = { state: tmp13.WAITING_FOR_NETWORK, delayMs: null };
            if (CacheStore.hasCache()) {
              let num2 = state(13232).getConfig({ location: "ConnectivityIndicatorStateStore" }).timeoutMs;
              if (num2 == null) {
                num2 = 10000;
              }
              let tmp23 = num2;
              const obj16 = state(13232);
            } else {
              tmp23 = delayMs2;
            }
            const obj5 = { delayed: null };
            obj4.delayMs = tmp23;
            obj5.delayed = obj4;
            obj = obj5;
          } else {
            if (tmp9.ONLINE !== UNKNOWN) {
              const UNKNOWN4 = tmp9.UNKNOWN;
            }
            obj = {};
          }
        } else if (tmp13.BACK_ONLINE === tmp) {
          if (tmp9.OFFLINE === UNKNOWN) {
            const obj6 = { delayed: null };
            const obj7 = { state: tmp13.NO_CONNECTION, delayMs: delayMs2 };
            obj6.delayed = obj7;
            obj = obj6;
          } else if (tmp9.CONNECTING === UNKNOWN) {
            const obj8 = { state: tmp13.WAITING_FOR_NETWORK, delayMs: null };
            if (CacheStore.hasCache()) {
              let num = state(13232).getConfig({ location: "ConnectivityIndicatorStateStore" }).timeoutMs;
              if (num == null) {
                num = 10000;
              }
              let tmp18 = num;
              const obj11 = state(13232);
            } else {
              tmp18 = delayMs2;
            }
            const obj9 = { delayed: null };
            obj8.delayMs = tmp18;
            obj9.delayed = obj8;
            obj = obj9;
          } else {
            if (tmp9.ONLINE !== UNKNOWN) {
              if (tmp9.UNKNOWN !== UNKNOWN) {
                obj = {};
              }
            }
            const obj10 = { delayed: null };
            const obj12 = { state: tmp13.HIDDEN, delayMs };
            obj10.delayed = obj12;
            obj = obj10;
          }
        } else if (tmp13.WAITING_FOR_NETWORK === tmp) {
          if (tmp9.OFFLINE === UNKNOWN) {
            const obj13 = { immediate: tmp13.NO_CONNECTION };
            obj = obj13;
          } else if (tmp9.ONLINE === UNKNOWN) {
            const obj14 = { immediate: tmp13.BACK_ONLINE, delayed: null };
            const obj15 = { state: tmp13.HIDDEN, delayMs };
            obj14.delayed = obj15;
            obj = obj14;
          } else {
            if (tmp9.CONNECTING !== UNKNOWN) {
              const UNKNOWN3 = tmp9.UNKNOWN;
            }
            obj = {};
          }
        } else if (tmp13.NO_CONNECTION === tmp) {
          if (tmp9.CONNECTING === UNKNOWN) {
            const obj17 = { immediate: tmp13.WAITING_FOR_NETWORK };
            obj = obj17;
          } else if (tmp9.ONLINE === UNKNOWN) {
            const obj18 = { immediate: tmp13.BACK_ONLINE, delayed: null };
            const obj19 = { state: tmp13.HIDDEN, delayMs };
            obj18.delayed = obj19;
            obj = obj18;
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
      if (tmp28) {
        if (null != timeout) {
          closure_8.verbose("clearing pending state update timer");
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          timeout = null;
        }
        c14 = null;
      }
      if (tmp !== immediate) {
        let _HermesInternal = HermesInternal;
        closure_8.verbose("state changed immediately from " + tmp + " to " + immediate);
        if (connectivityIndicatorStateStore != null) {
          connectivityIndicatorStateStore.emitChange();
        }
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
          closure_8.verbose("state changed after a delay from " + tmp + " to " + closure_13);
          if (connectivityIndicatorStateStore != null) {
            connectivityIndicatorStateStore.emitChange();
          }
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
  obj = { immediate: obj.HIDDEN };
  const obj20 = { immediate: obj.HIDDEN };
}
function handleConnectionClosed() {
  c17 = false;
  updateState();
  return false;
}
function handleLoadingMessagesChanged() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    const isLoadingMessagesResult = MessageStore.isLoadingMessages(channelId);
    if (isLoadingMessagesResult !== c18) {
      c18 = isLoadingMessagesResult;
      updateState();
    }
    return false;
  }
}
function handleAuthStoreChanged() {
  const isAuthenticatedResult = AuthenticationStore.isAuthenticated();
  if (closure_15 !== isAuthenticatedResult) {
    closure_15 = isAuthenticatedResult;
    updateState();
  }
  return false;
}
function handleAppStateUpdate() {
  state = AppStateStore.getState();
  if (AppStates.ACTIVE === state) {
    if (state === AppStates.BACKGROUND) {
      c19 = true;
      if (null != timeout) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(timeout);
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        c19 = false;
        c22 = null;
        updateState();
      }, 5000);
    }
  } else if (AppStates.BACKGROUND === state) {
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = null;
    }
  } else {
    const INACTIVE = AppStates.INACTIVE;
  }
  updateState();
  return false;
}
const AppStates = fn(1074).AppStates;
let closure_8 = new LoggerDefault("ConnectivityIndicatorStateStore");
const ConnectivityIndicatorState = {
  HIDDEN: "hidden",
  WAITING_FOR_NETWORK: "waiting_for_network",
  NO_CONNECTION: "no_connection",
  BACK_ONLINE: "back_online",
};
const constants = { UNKNOWN: "unknown", ONLINE: "online", OFFLINE: "offline", CONNECTING: "connecting" };
let c11 = 2000;
let c12 = 1000;
const HIDDEN = ConnectivityIndicatorState.HIDDEN;
let c14 = null;
let closure_15 = null;
let closure_16 = null;
let c17 = false;
let c18 = false;
let c19 = false;
let state = null;
let c21 = null;
let c22 = null;
let connectivityIndicatorStateStore = null;
const Store = initializeDefault.Store;
class ConnectivityIndicatorStateStore extends Store {}
const prototype = ConnectivityIndicatorStateStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, CacheStore, MessageStore, SelectedChannelStore, AppStateStore);
  const items = [MessageStore];
  this.syncWith(items, handleLoadingMessagesChanged);
  const items1 = [AuthenticationStore];
  this.syncWith(items1, handleAuthStoreChanged);
  const items2 = [AppStateStore];
  this.syncWith(items2, handleAppStateUpdate);
  NetworkUtilsDefault.addOfflineCallback(() => {
    c16 = true;
    updateState();
  });
  NetworkUtilsDefault.addOnlineCallback(() => {
    c16 = false;
    updateState();
  });
  closure_16 = !NetworkUtilsDefault.isOnline();
  closure_15 = AuthenticationStore.isAuthenticated();
  updateState();
};
prototype["getState"] = function getState() {
  return closure_13;
};
ConnectivityIndicatorStateStore.displayName = "ConnectivityIndicatorStateStore";
connectivityIndicatorStateStore = new ConnectivityIndicatorStateStore(DispatcherDefault, {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/connectivity/native/ConnectivityIndicatorStateStore.tsx");

export default connectivityIndicatorStateStore;
export { ConnectivityIndicatorState };
