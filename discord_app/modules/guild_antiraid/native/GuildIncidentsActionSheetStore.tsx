// === Module 11440: GuildIncidentsActionSheetStore ===

// Module 11440 (GuildIncidentsActionSheetStore)
import react_native from "react-native" /* 1259 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 7686 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const DEFAULT_LOCKDOWN_DURATION = GuildAntiRaidConstants.DEFAULT_LOCKDOWN_DURATION;
const useGuildIncidentsActionSheetStore = module_570.create(() => ({ time: DEFAULT_LOCKDOWN_DURATION, pauseInvites: true, pauseDms: true, hasTimeChanges: false }));
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentsActionSheetStore.tsx");

export { useGuildIncidentsActionSheetStore };
export const setTime = function setTime(diff) {
  let time;
  _require = diff;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { time, hasTimeChanges: true };
    return obj.setState(obj);
  });
};
export const setInitialTime = function setInitialTime(time) {
  _require = time;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { time, hasTimeChanges: false };
    return obj.setState(obj);
  });
};
export const setPauseInvites = function setPauseInvites(pauseInvites) {
  _require = pauseInvites;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { pauseInvites };
    return obj.setState(obj);
  });
};
export const setPauseDms = function setPauseDms(pauseDms) {
  _require = pauseDms;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { pauseDms };
    return obj.setState(obj);
  });
};
export const resetGuildIncidentsActionSheetStore = function resetGuildIncidentsActionSheetStore() {
  let state;
  let time;
  let obj = react_native;
  obj.batchUpdates(() => {
    const obj = { time, pauseInvites: true, pauseDms: true, hasTimeChanges: false };
    state.setState(obj);
  });
};