// discord_app/stores/DefaultRouteStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage3 from "../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
let obj = { lastViewedPath: null, lastViewedNonVoicePath: null };
let closure_4 = obj;
const LAST_VIEWED_PATH = "LAST_VIEWED_PATH";
const PersistedStore = initializeDefault.PersistedStore;
class DefaultRouteStore extends PersistedStore {}
const prototype = DefaultRouteStore.prototype;
prototype["initialize"] = function initialize() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  if (tmp == null) {
    tmp = obj;
  }
  closure_4 = tmp;
};
Object.defineProperty(prototype, "defaultRoute", {
  get: function defaultRoute() {
    let ME = closure_4.lastViewedPath;
    if (ME == null) {
      ME = Routes.ME;
    }
    return ME;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lastNonVoiceRoute", {
  get: function lastNonVoiceRoute() {
    let ME = closure_4.lastViewedNonVoicePath;
    if (ME == null) {
      ME = Routes.ME;
    }
    return ME;
  },
  set: undefined,
});
Object.defineProperty(prototype, "fallbackRoute", {
  get: function fallbackRoute() {
    return Routes.ME;
  },
  set: undefined,
});
prototype["getState"] = function getState() {
  return closure_4;
};
DefaultRouteStore.displayName = "DefaultRouteStore";
DefaultRouteStore.persistKey = "DefaultRouteStore";
const items = [
  () => {
    const Storage = Storage3.Storage;
    const lastViewedPath = Storage.get(LAST_VIEWED_PATH, null);
    const Storage2 = Storage3.Storage;
    Storage2.remove(LAST_VIEWED_PATH);
    return { lastViewedPath };
  },
];
DefaultRouteStore.migrations = items;
obj = {
  SAVE_LAST_ROUTE: function handleSaveRoute(path) {
    closure_4.lastViewedPath = path.path;
    return true;
  },
  SAVE_LAST_NON_VOICE_ROUTE: function handleSaveLastNonVoiceRoute(path) {
    closure_4.lastViewedNonVoicePath = path.path;
    return true;
  },
  LOGOUT: function handleLogout() {
    closure_4 = { lastViewedPath: null, lastViewedNonVoicePath: null };
  },
};
const defaultRouteStore = new DefaultRouteStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/DefaultRouteStore.tsx");

export default defaultRouteStore;
