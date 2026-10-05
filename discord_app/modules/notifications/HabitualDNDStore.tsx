// discord_app/modules/notifications/HabitualDNDStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const f114965 = (item) => {
  const timestamp = Date.now();
  return item < timestamp - 3 * DurationsDefault.Millis.DAY;
};
const StatusTypes = Constants.StatusTypes;
const hasOwnProperty = [];
let c6 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class HabitualDNDStore extends PersistedStore {
  initialize(sessionStartsWithDND) {
    this.waitFor(SelfPresenceStore);
    let isArray = null != sessionStartsWithDND;
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(sessionStartsWithDND.sessionStartsWithDND);
    }
    if (isArray) {
      sessionStartsWithDND = sessionStartsWithDND.sessionStartsWithDND;
    }
  }
  showNagBar() {
    return c6;
  }
  getState() {
    return { sessionStartsWithDND };
  }
  getTemp() {
    let StatusExpiresAtSetting;
    const obj = { x: StatusExpiresAtSetting.getSetting() };
    StatusExpiresAtSetting = UserSettings.StatusExpiresAtSetting;
    return obj;
  }
}
const prototype = HabitualDNDStore.prototype;
HabitualDNDStore.displayName = "HabitualDNDStore";
HabitualDNDStore.persistKey = "habitualDND";
let obj = {
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
        const someResult = found.length >= 4 && sessionStartsWithDND.some(f114965);
        if (someResult) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const obj = DispatcherDefault;
            obj.dispatch({ type: "HABITUAL_DND_CLEAR" });
          }, 15 * DurationsDefault.Millis.SECOND);
        }
      }
    }
    sessionStartsWithDND = [];
  },
  HABITUAL_DND_CLEAR: function handleDNDClear() {
    c6 = sessionStartsWithDND.length >= 4 && sessionStartsWithDND.some(f114965);
    const someResult = sessionStartsWithDND.length >= 4 && sessionStartsWithDND.some(f114965);
    sessionStartsWithDND = [];
  },
};
const habitualDNDStore = new HabitualDNDStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/notifications/HabitualDNDStore.tsx");

export default habitualDNDStore;
