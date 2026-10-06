// discord_app/modules/connectivity/native/ConnectivityIndicatorStateStore.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import NetworkUtilsDefault from "../../../utils/NetworkUtils.tsx";
import CacheStore from "../../cache/CacheStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c16, closure_13, delayMs;

function updateState() {
  let immediate;
  let obj;
  let obj12;
  let obj15;
  let obj19;
  let obj3;
  let obj7;
  let timeout;
  let tmp19;
  let tmp24;
  const tmp = immediate;
  if (!c19) {
    if (AppStateStore.getState() !== AppStates.BACKGROUND) {
      if (null != closure_16) {
        let UNKNOWN;
        let tmp10;
        if (null != closure_15) {
          if (closure_16) {
            UNKNOWN = constants.OFFLINE;
            tmp10 = constants;
          } else if (!closure_15) {
            tmp10 = constants;
            UNKNOWN = constants.ONLINE;
          } else {
            UNKNOWN = constants.CONNECTING;
            tmp10 = constants;
          }
        }
        if (obj.HIDDEN === tmp) {
          if (tmp10.OFFLINE === UNKNOWN) {
            const obj2 = { delayed: obj3 };
            obj3 = { state: obj.NO_CONNECTION, delayMs: delayMs2 };
            obj = obj2;
          } else if (tmp10.CONNECTING === UNKNOWN) {
            const obj4 = { state: obj.WAITING_FOR_NETWORK, delayMs: tmp24 };
            if (CacheStore.hasCache()) {
              const obj16 = state(13514);
              let num2 = obj16.getConfig({ location: "ConnectivityIndicatorStateStore" }).timeoutMs;
              if (num2 == null) {
                num2 = 10000;
              }
              tmp24 = num2;
            } else {
              tmp24 = delayMs2;
            }
            obj = { delayed: obj4 };
            const obj5 = { delayed: obj4 };
          } else {
            if (tmp10.ONLINE !== UNKNOWN) {
              const UNKNOWN4 = tmp10.UNKNOWN;
            }
            obj = {};
          }
        } else if (obj.BACK_ONLINE === tmp) {
          if (tmp10.OFFLINE === UNKNOWN) {
            const obj6 = { delayed: obj7 };
            obj7 = { state: obj.NO_CONNECTION, delayMs: delayMs2 };
            obj = obj6;
          } else if (tmp10.CONNECTING === UNKNOWN) {
            const obj8 = { state: obj.WAITING_FOR_NETWORK, delayMs: tmp19 };
            if (CacheStore.hasCache()) {
              const obj11 = state(13514);
              let num = obj11.getConfig({ location: "ConnectivityIndicatorStateStore" }).timeoutMs;
              if (num == null) {
                num = 10000;
              }
              tmp19 = num;
            } else {
              tmp19 = delayMs2;
            }
            obj = { delayed: obj8 };
            const obj9 = { delayed: obj8 };
          } else {
            if (tmp10.ONLINE !== UNKNOWN) {
              if (tmp10.UNKNOWN !== UNKNOWN) {
                obj = {};
              }
            }
            const obj10 = { delayed: obj12 };
            obj12 = { state: obj.HIDDEN, delayMs };
            obj = obj10;
          }
        } else if (obj.WAITING_FOR_NETWORK === tmp) {
          if (tmp10.OFFLINE === UNKNOWN) {
            const obj13 = { immediate: obj.NO_CONNECTION };
            obj = obj13;
          } else if (tmp10.ONLINE === UNKNOWN) {
            const obj14 = { immediate: obj.BACK_ONLINE, delayed: obj15 };
            obj15 = { state: obj.HIDDEN, delayMs };
            obj = obj14;
          } else {
            if (tmp10.CONNECTING !== UNKNOWN) {
              const UNKNOWN3 = tmp10.UNKNOWN;
            }
            obj = {};
          }
        } else if (obj.NO_CONNECTION === tmp) {
          if (tmp10.CONNECTING === UNKNOWN) {
            const obj17 = { immediate: obj.WAITING_FOR_NETWORK };
            obj = obj17;
          } else if (tmp10.ONLINE === UNKNOWN) {
            const obj18 = { immediate: obj.BACK_ONLINE, delayed: obj19 };
            obj19 = { state: obj.HIDDEN, delayMs };
            obj = obj18;
          } else {
            if (tmp10.OFFLINE !== UNKNOWN) {
              const UNKNOWN2 = tmp10.UNKNOWN;
            }
            obj = {};
          }
        }
      }
      UNKNOWN = constants.UNKNOWN;
      tmp10 = constants;
    }
    if (null != obj.immediate) {
      immediate = obj.immediate;
      const tmp29 = null !== c14 && c14 === immediate;
      if (tmp29) {
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
    }
    if (null != obj.delayed) {
      const delayed = obj.delayed;
      state = delayed.state;
      delayMs = delayed.delayMs;
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
      }, delayMs);
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
  const obj20 = { immediate: obj.HIDDEN };
  obj = obj20;
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
  let timeout;
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
const AppStates = Constants.AppStates;
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
new LoggerDefault("ConnectivityIndicatorStateStore");
const Store = get_initializedDefault.Store;
class ConnectivityIndicatorStateStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, CacheStore, MessageStore, SelectedChannelStore, AppStateStore);
    const items = [MessageStore];
    this.syncWith(items, handleLoadingMessagesChanged);
    const items1 = [AuthenticationStore];
    this.syncWith(items1, handleAuthStoreChanged);
    const items2 = [AppStateStore];
    this.syncWith(items2, handleAppStateUpdate);
    const obj = NetworkUtilsDefault;
    obj.addOfflineCallback(() => {
      c16 = true;
      updateState();
    });
    const obj2 = NetworkUtilsDefault;
    obj2.addOnlineCallback(() => {
      c16 = false;
      updateState();
    });
    const obj3 = NetworkUtilsDefault;
    closure_16 = !obj3.isOnline();
    closure_15 = AuthenticationStore.isAuthenticated();
    updateState();
  }
  getState() {
    return closure_13;
  }
}
const prototype = ConnectivityIndicatorStateStore.prototype;
ConnectivityIndicatorStateStore.displayName = "ConnectivityIndicatorStateStore";
let obj2 = {
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
connectivityIndicatorStateStore = new ConnectivityIndicatorStateStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/connectivity/native/ConnectivityIndicatorStateStore.tsx");

export default connectivityIndicatorStateStore;
export { ConnectivityIndicatorState };
