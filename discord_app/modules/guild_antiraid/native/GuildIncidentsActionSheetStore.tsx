// === Module 11009: useGuildIncidentsActionSheetStore ===

// Module 11009 (useGuildIncidentsActionSheetStore)
import set from "set" /* 2 */;
import batchUpdates from "batchUpdates" /* 705 */;
import GUILD_REPORT_RAID_MOBILE_KEY from "GUILD_REPORT_RAID_MOBILE_KEY" /* 8235 */;
import keys from "keys" /* 644 */;

const DEFAULT_LOCKDOWN_DURATION = GUILD_REPORT_RAID_MOBILE_KEY.DEFAULT_LOCKDOWN_DURATION;
const obj = keys.create(() => ({ time: DEFAULT_LOCKDOWN_DURATION, pauseInvites: true, pauseDms: true, hasTimeChanges: false }));
const result = set.fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentsActionSheetStore.tsx");

export const useGuildIncidentsActionSheetStore = obj;
export const setTime = function setTime(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_3.setState({ time: closure_0, hasTimeChanges: true }));
};
export const setInitialTime = function setInitialTime(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_3.setState({ time: closure_0, hasTimeChanges: false }));
};
export const setPauseInvites = function setPauseInvites(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_3.setState({ pauseInvites: closure_0 }));
};
export const setPauseDms = function setPauseDms(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_3.setState({ pauseDms: closure_0 }));
};
export const resetGuildIncidentsActionSheetStore = function resetGuildIncidentsActionSheetStore() {
  batchUpdates.batchUpdates(() => {
    state.setState({ time: closure_2, pauseInvites: true, pauseDms: true, hasTimeChanges: false });
  });
};