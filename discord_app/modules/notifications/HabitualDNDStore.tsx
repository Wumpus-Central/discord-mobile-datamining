// discord_app/modules/notifications/HabitualDNDStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";

require = fn;
const StatusTypes = fn(1074).StatusTypes;
let sessionStartsWithDND = [];
let c6 = false;
const PersistedStore = initializeDefault.PersistedStore;
class HabitualDNDStore extends PersistedStore {}
const prototype = HabitualDNDStore.prototype;
prototype["initialize"] = function initialize(sessionStartsWithDND) {
  this.waitFor(SelfPresenceStore);
  let isArray = null != sessionStartsWithDND;
  if (isArray) {
    const _Array = Array;
    isArray = Array.isArray(sessionStartsWithDND.sessionStartsWithDND);
  }
  if (isArray) {
    sessionStartsWithDND = sessionStartsWithDND.sessionStartsWithDND;
  }
};
prototype["showNagBar"] = function showNagBar() {
  return c6;
};
prototype["getState"] = function getState() {
  return { sessionStartsWithDND };
};
prototype["getTemp"] = function getTemp() {
  const obj = { x: null };
  const StatusExpiresAtSetting = UserSettings.StatusExpiresAtSetting;
  obj.x = StatusExpiresAtSetting.getSetting();
  return obj;
};
HabitualDNDStore.displayName = "HabitualDNDStore";
HabitualDNDStore.persistKey = "habitualDND";
const habitualDNDStore = new HabitualDNDStore(DispatcherDefault, {
  POST_CONNECTION_OPEN: function handleConnect() {
    if (SelfPresenceStore.getStatus() === StatusTypes.DND) {
      const StatusExpiresAtSetting = UserSettings.StatusExpiresAtSetting;
      if ("0" === StatusExpiresAtSetting.getSetting()) {
        const _Date = Date;
        sessionStartsWithDND.push(Date.now());
        const found = sessionStartsWithDND.filter((item) => {
          const timestamp = Date.now();
          return item > timestamp - 5 * DurationsDefault.Millis.DAY;
        });
        sessionStartsWithDND = found;
        let someResult = found.length >= 4;
        if (someResult) {
          someResult = sessionStartsWithDND.some((item) => {
            const timestamp = Date.now();
            return item < timestamp - 3 * DurationsDefault.Millis.DAY;
          });
        }
        if (someResult) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            DispatcherDefault.dispatch({ type: "HABITUAL_DND_CLEAR" });
          }, 15 * DurationsDefault.Millis.SECOND);
        }
      }
    }
    sessionStartsWithDND = [];
  },
  HABITUAL_DND_CLEAR: function handleDNDClear() {
    let someResult = sessionStartsWithDND.length >= 4;
    if (someResult) {
      someResult = sessionStartsWithDND.some((item) => {
        const timestamp = Date.now();
        return item < timestamp - 3 * DurationsDefault.Millis.DAY;
      });
    }
    c6 = someResult;
    sessionStartsWithDND = [];
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/HabitualDNDStore.tsx");

export default habitualDNDStore;
