// === Module 7167: getState ===

// Module 7167 (getState)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import initializeDefault from "initialize" /* 586 */;
import ME from "ME" /* 673 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import promise from "expandEventProperties" /* 695 */;

const AppStates = ME.AppStates;
const currentState = get_ActivityIndicator.AppState.currentState;
let c2 = null;
const Store = initializeDefault.Store;
class AppStateStore extends Store {
}
const prototype = AppStateStore.prototype;
prototype["getState"] = function getState() {
  return currentState;
};
prototype["getLastActiveTime"] = function getLastActiveTime() {
  return c2;
};
AppStateStore.displayName = "AppStateStore";
require("expandEventProperties").then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator((arg0) => {
    arg0.client_app_state = closure_1;
  });
});
const appStateStore = new AppStateStore(dispatcherDefault, {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state === state.state) {
      return false;
    } else {
      state = state.state;
      if (state === AppStates.ACTIVE) {
        const _Date = Date;
        closure_2 = Date.now();
      }
    }
  }
});
const obj = {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state === state.state) {
      return false;
    } else {
      state = state.state;
      if (state === AppStates.ACTIVE) {
        const _Date = Date;
        closure_2 = Date.now();
      }
    }
  }
};
let result = set.fileFinishedImporting("stores/native/AppStateStore.tsx");

export default appStateStore;