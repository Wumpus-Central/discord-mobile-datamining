// === Module 9795: ChannelMuteUtils ===

// Module 9795 (ChannelMuteUtils)
import _modDef4450 from "module_4450" /* 4450 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef4450();
    toISOStringResult = _modDef4450().add(selected_time_window, "second").toISOString();
    const addResult = _modDef4450().add(selected_time_window, "second");
  }
  mute_config.end_time = toISOStringResult;
  return { muted: true, mute_config };
};