// === Module 6773: getState ===

// Module 6773 (getState)
import { AppStates } from "ME";
import { Store } from "initialize";
import promise from "expandEventProperties";

const currentState = require("get ActivityIndicator").AppState.currentState;
let c2 = null;
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
const appStateStore = new AppStateStore(require("dispatcher"), {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state === state.state) {
      return false;
    } else {
      state = state.state;
      if (state === AppStates.ACTIVE) {
        const _Date = Date;
        let closure_2 = Date.now();
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
        let closure_2 = Date.now();
      }
    }
  }
};
let result = require("initialize").fileFinishedImporting("stores/native/AppStateStore.tsx");

export default appStateStore;