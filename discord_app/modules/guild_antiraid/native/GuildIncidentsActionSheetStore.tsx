// === Module 13054: GuildIncidentsActionSheetStore ===

// Module 13054 (GuildIncidentsActionSheetStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1271 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8441 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const DEFAULT_LOCKDOWN_DURATION = GuildAntiRaidConstants.DEFAULT_LOCKDOWN_DURATION;
const useGuildIncidentsActionSheetStore = module_570.create(() => ({ time: DEFAULT_LOCKDOWN_DURATION, pauseInvites: true, pauseDms: true, hasTimeChanges: false }));
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentsActionSheetStore.tsx");

export { useGuildIncidentsActionSheetStore };
export function setTime(diff) {
  _require = diff;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { time, hasTimeChanges: true };
    return obj.setState(obj);
  });
}
export function setInitialTime(time) {
  _require = time;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { time, hasTimeChanges: false };
    return obj.setState(obj);
  });
}
export function setPauseInvites(pauseInvites) {
  _require = pauseInvites;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { pauseInvites };
    return obj.setState(obj);
  });
}
export function setPauseDms(pauseDms) {
  _require = pauseDms;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { pauseDms };
    return obj.setState(obj);
  });
}
export function resetGuildIncidentsActionSheetStore() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ time, pauseInvites: true, pauseDms: true, hasTimeChanges: false });
  });
}