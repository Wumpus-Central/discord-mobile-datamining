// === Module 11016: ChannelMuteUtils ===

// Module 11016 (ChannelMuteUtils)
import _modDef2047 from "module_2047" /* 2047 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2047();
    toISOStringResult = _modDef2047().add(selected_time_window, "second").toISOString();
    const addResult = _modDef2047().add(selected_time_window, "second");
  }
  mute_config.end_time = toISOStringResult;
  return { muted: true, mute_config };
}