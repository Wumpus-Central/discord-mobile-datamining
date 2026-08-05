// discord_app/modules/guild_antiraid/native/GuildIncidentsActionSheetStore.tsx
import { DEFAULT_LOCKDOWN_DURATION } from "GUILD_REPORT_RAID_MOBILE_KEY";
import keys from "keys";
import { batchUpdates } from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

const obj = keys.create(() => ({ time: DEFAULT_LOCKDOWN_DURATION, pauseInvites: true, pauseDms: true, hasTimeChanges: false }));
const result = require("batchUpdates").fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentsActionSheetStore.tsx");

export const useGuildIncidentsActionSheetStore = obj;
export const setTime = function setTime(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_3.setState({ time: closure_0, hasTimeChanges: true }));
};
export const setInitialTime = function setInitialTime(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_3.setState({ time: closure_0, hasTimeChanges: false }));
};
export const setPauseInvites = function setPauseInvites(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_3.setState({ pauseInvites: closure_0 }));
};
export const setPauseDms = function setPauseDms(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_3.setState({ pauseDms: closure_0 }));
};
export const resetGuildIncidentsActionSheetStore = function resetGuildIncidentsActionSheetStore() {
  batchUpdates.batchUpdates(() => {
    state.setState({ time: closure_2, pauseInvites: true, pauseDms: true, hasTimeChanges: false });
  });
};