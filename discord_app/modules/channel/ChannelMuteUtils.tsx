// === Module 9591: ChannelMuteUtils ===

// Module 9591 (ChannelMuteUtils)
import _modDef4418 from "module_4418" /* 4418 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef4418();
    toISOStringResult = _modDef4418().add(selected_time_window, "second").toISOString();
    const addResult = _modDef4418().add(selected_time_window, "second");
  }
  mute_config.end_time = toISOStringResult;
  return { muted: true, mute_config };
};