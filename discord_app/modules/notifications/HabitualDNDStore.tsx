// === Module 13269: initialize ===

// Module 13269 (initialize)
import initializeDefault from "initialize" /* 589 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import filterPlayingActivities from "filterPlayingActivities" /* 7250 */;
import { StatusTypes } from "ME" /* 676 */;

require = fn;
let closure_5 = [];
let c6 = false;
const PersistedStore = initializeDefault.PersistedStore;
class HabitualDNDStore extends PersistedStore {
}
const prototype = HabitualDNDStore.prototype;
prototype["initialize"] = function initialize(sessionStartsWithDND) {
  this.waitFor(closure_3);
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
  return { sessionStartsWithDND: closure_5 };
};
prototype["getTemp"] = function getTemp() {
  const obj = { x: null };
  const StatusExpiresAtSetting = explicitContentFromProto.StatusExpiresAtSetting;
  obj[0] = StatusExpiresAtSetting.getSetting();
  return obj;
};
HabitualDNDStore.displayName = "HabitualDNDStore";
HabitualDNDStore.persistKey = "habitualDND";
const habitualDNDStore = new HabitualDNDStore(dispatcherDefault, {
  POST_CONNECTION_OPEN: function handleConnect() {
    if (status.getStatus() === StatusTypes.DND) {
      const StatusExpiresAtSetting = explicitContentFromProto.StatusExpiresAtSetting;
      if ("0" === StatusExpiresAtSetting.getSetting()) {
        const _Date = Date;
        arr = arr.push(Date.now());
        const found = arr.filter((item, index) => {
          const timestamp = Date.now();
          return item > timestamp - 5 * callback(687).Millis.DAY;
        });
        arr = found;
        let someResult = found.length >= 4;
        if (someResult) {
          someResult = arr.some((item, index) => {
            const timestamp = Date.now();
            return item < timestamp - 3 * callback(table[2]).Millis.DAY;
          });
        }
        if (someResult) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            callback(709).dispatch({ type: "HABITUAL_DND_CLEAR" });
          }, 15 * obj132Default.Millis.SECOND);
        }
      }
    }
    arr = [];
  },
  HABITUAL_DND_CLEAR: function handleDNDClear() {
    let someResult = arr.length >= 4;
    if (someResult) {
      someResult = arr.some((item, index) => {
        const timestamp = Date.now();
        return item < timestamp - 3 * callback(table[2]).Millis.DAY;
      });
    }
    c6 = someResult;
    arr = [];
  }
});
const result = require("obj132").fileFinishedImporting("modules/notifications/HabitualDNDStore.tsx");

export default habitualDNDStore;