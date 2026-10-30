// === Module 11053: ChannelMuteUtils ===

// Module 11053 (ChannelMuteUtils)
import _modDef2044 from "module_2044" /* 2044 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2044();
    toISOStringResult = _modDef2044().add(selected_time_window, "second").toISOString();
    const addResult = _modDef2044().add(selected_time_window, "second");
  }
  mute_config.end_time = toISOStringResult;
  return { muted: true, mute_config };
}