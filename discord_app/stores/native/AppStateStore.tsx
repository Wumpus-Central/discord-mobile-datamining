// discord_app/stores/native/AppStateStore.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import size from "../../../_runtime/metro/00002__.js";

const AppState = react_native.AppState;
const AppStates = Constants.AppStates;
let currentState = AppState.currentState;
let closure_2 = null;
const Store = get_initializedDefault.Store;
class AppStateStore extends Store {
  getState() {
    return currentState;
  }
  getLastActiveTime() {
    return closure_2;
  }
}
const prototype = AppStateStore.prototype;
AppStateStore.displayName = "AppStateStore";
const promise = asyncRequire(1252, dependencyMap.paths);
promise.then((addExtraAnalyticsDecorator) => {
  let client_app_state;
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator((arg0) => {
    arg0.client_app_state = client_app_state;
  });
});
const obj = {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (currentState === state.state) {
      return false;
    } else {
      state = state.state;
      currentState = state;
      if (state === AppStates.ACTIVE) {
        const _Date = Date;
        closure_2 = Date.now();
      }
    }
  },
};
const appStateStore = new AppStateStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/native/AppStateStore.tsx");

export default appStateStore;
