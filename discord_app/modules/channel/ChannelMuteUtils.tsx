// === Module 11213: ChannelMuteUtils ===

// Module 11213 (ChannelMuteUtils)
import _modDef2166 from "module_2166" /* 2166 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef2166();
    toISOStringResult = _modDef2166().add(selected_time_window, "second").toISOString();
    const addResult = _modDef2166().add(selected_time_window, "second");
  }
  mute_config.end_time = toISOStringResult;
  return { muted: true, mute_config };
}