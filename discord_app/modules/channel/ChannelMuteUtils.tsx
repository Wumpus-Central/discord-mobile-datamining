// === Module 10746: ChannelMuteUtils ===

// Module 10746 (ChannelMuteUtils)
import _modDef2050 from "module_2050" /* 2050 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2050();
    toISOStringResult = _modDef2050().add(selected_time_window, "second").toISOString();
    const addResult = _modDef2050().add(selected_time_window, "second");
  }
  mute_config.end_time = toISOStringResult;
  return { muted: true, mute_config };
};