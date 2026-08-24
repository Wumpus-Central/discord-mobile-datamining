// discord_app/stores/native/AppStateStore.tsx
import set from "../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import ME from "../../Constants.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import asyncRequireImpl from "../../../_runtime/02008_asyncRequireImpl.js";
import promise from "../../utils/AnalyticsUtils.tsx";

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