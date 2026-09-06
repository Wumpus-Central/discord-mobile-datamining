// discord_app/stores/DefaultRouteStore.tsx
import set from "../../_runtime/00002_set.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage3 from "../../discord_common/js/packages/storage/Storage.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import ME2 from "../Constants.tsx";

const Routes = ME2.Routes;
let obj = { lastViewedPath: null, lastViewedNonVoicePath: null };
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
    let ME = obj.lastViewedPath;
    if (ME == null) {
      ME = Routes.ME;
    }
    return ME;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lastNonVoiceRoute", {
  get: function lastNonVoiceRoute() {
    let ME = obj.lastViewedNonVoicePath;
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
  return obj;
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
    obj.lastViewedPath = path.path;
    return true;
  },
  SAVE_LAST_NON_VOICE_ROUTE: function handleSaveLastNonVoiceRoute(path) {
    obj.lastViewedNonVoicePath = path.path;
    return true;
  },
  LOGOUT: function handleLogout() {
    closure_4 = { lastViewedPath: null, lastViewedNonVoicePath: null };
  },
};
const defaultRouteStore = new DefaultRouteStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("stores/DefaultRouteStore.tsx");

export default defaultRouteStore;
