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
        if (delayed.HIDDEN === tmp) {
          if (tmp9.OFFLINE === UNKNOWN) {
            delayed = { delayed: null };
            delayed = { state: tmp13.NO_CONNECTION, delayMs: delayMs2 };
            delayed.delayed = delayed;
          } else if (tmp9.CONNECTING === UNKNOWN) {
            const obj1 = { state: tmp13.WAITING_FOR_NETWORK, delayMs: null };
            if (CacheStore.hasCache()) {
              let obj15 = state(13687);
              let num2 = obj15.getConfig({ location: "ConnectivityIndicatorStateStore" }).timeoutMs;
              if (num2 == null) {
                num2 = 10000;
              }
              let tmp23 = num2;
            } else {
              tmp23 = delayMs2;
            }
            const obj2 = { delayed: null };
            obj1.delayMs = tmp23;
            obj2.delayed = obj1;
            delayed = obj2;
          } else {
            if (tmp9.ONLINE !== UNKNOWN) {
              const UNKNOWN4 = tmp9.UNKNOWN;
            }
            delayed = {};
          }
        } else if (tmp13.BACK_ONLINE === tmp) {
          if (tmp9.OFFLINE === UNKNOWN) {
            const obj3 = { delayed: null };
            const obj4 = { state: tmp13.NO_CONNECTION, delayMs: delayMs2 };
            obj3.delayed = obj4;
            delayed = obj3;
          } else if (tmp9.CONNECTING === UNKNOWN) {
            const obj5 = { state: tmp13.WAITING_FOR_NETWORK, delayMs: null };
            if (CacheStore.hasCache()) {
              let obj10 = state(13687);
              let num = obj10.getConfig({ location: "ConnectivityIndicatorStateStore" }).timeoutMs;
              if (num == null) {
                num = 10000;
              }
              let tmp18 = num;
            } else {
              tmp18 = delayMs2;
            }
            const obj6 = { delayed: null };
            obj5.delayMs = tmp18;
            obj6.delayed = obj5;
            delayed = obj6;
          } else {
            if (tmp9.ONLINE !== UNKNOWN) {
              if (tmp9.UNKNOWN !== UNKNOWN) {
                delayed = {};
              }
            }
            const obj7 = { delayed: null };
            const obj8 = { state: tmp13.HIDDEN, delayMs };
            obj7.delayed = obj8;
            delayed = obj7;
          }
        } else if (tmp13.WAITING_FOR_NETWORK === tmp) {
          if (tmp9.OFFLINE === UNKNOWN) {
            const obj9 = { immediate: tmp13.NO_CONNECTION };
            delayed = obj9;
          } else if (tmp9.ONLINE === UNKNOWN) {
            obj10 = { immediate: tmp13.BACK_ONLINE, delayed: null };
            const obj11 = { state: tmp13.HIDDEN, delayMs };
            obj10.delayed = obj11;
            delayed = obj10;
          } else {
            if (tmp9.CONNECTING !== UNKNOWN) {
              const UNKNOWN3 = tmp9.UNKNOWN;
            }
            delayed = {};
          }
        } else if (tmp13.NO_CONNECTION === tmp) {
          if (tmp9.CONNECTING === UNKNOWN) {
            const obj12 = { immediate: tmp13.WAITING_FOR_NETWORK };
            delayed = obj12;
          } else if (tmp9.ONLINE === UNKNOWN) {
            const obj13 = { immediate: tmp13.BACK_ONLINE, delayed: null };
            const obj14 = { state: tmp13.HIDDEN, delayMs };
            obj13.delayed = obj14;
            delayed = obj13;
          } else {
            if (tmp9.OFFLINE !== UNKNOWN) {
              const UNKNOWN2 = tmp9.UNKNOWN;
            }
            delayed = {};
          }
        }
      }
      UNKNOWN = constants.UNKNOWN;
      tmp9 = constants;
    }
    if (null != delayed.immediate) {
      const immediate = delayed.immediate;
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
          obj21.emitChange();
        }
        obj21 = connectivityIndicatorStateStore;
      }
      tmp28 = null !== c14 && c14 === immediate;
    }
    if (null != delayed.delayed) {
      delayed = delayed.delayed;
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
            obj.emitChange();
          }
          obj = connectivityIndicatorStateStore;
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
  obj15 = { immediate: delayed.HIDDEN };
  delayed = obj15;
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
        updateState();
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
const AppStates = fn(1074).AppStates;
let closure_8 = new LoggerDefault("ConnectivityIndicatorStateStore");
let ConnectivityIndicatorState = {
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
ConnectivityIndicatorState = {
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
connectivityIndicatorStateStore = new ConnectivityIndicatorStateStore(DispatcherDefault, ConnectivityIndicatorState);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connectivity/native/ConnectivityIndicatorStateStore.tsx");

export default connectivityIndicatorStateStore;
export { ConnectivityIndicatorState };
