// === Module 9801: ChannelMuteUtils ===

// Module 9801 (ChannelMuteUtils)
import _modDef4461 from "module_4461" /* 4461 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef4461();
    toISOStringResult = _modDef4461().add(selected_time_window, "second").toISOString();
    const addResult = _modDef4461().add(selected_time_window, "second");
  }
  mute_config.end_time = toISOStringResult;
  return { muted: true, mute_config };
};