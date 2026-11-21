// === Module 10363: ChannelMuteUtils ===

// Module 10363 (ChannelMuteUtils)
import _modDef2168 from "module_2168" /* 2168 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2168();
    toISOStringResult = _modDef2168().add(selected_time_window, "second").toISOString();
    const addResult = _modDef2168().add(selected_time_window, "second");
  }
  mute_config.end_time = toISOStringResult;
  return { muted: true, mute_config };
}