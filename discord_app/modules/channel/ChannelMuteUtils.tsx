// === Module 10124: getMuteSettings ===

// Module 10124 (getMuteSettings)
import set from "set" /* 2 */;
import tDefault from "t" /* 3978 */;

const result = set.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = tDefault();
    toISOStringResult = tDefault().add(selected_time_window, "second").toISOString();
    const addResult = tDefault().add(selected_time_window, "second");
  }
  mute_config[1] = toISOStringResult;
  return { muted: true, mute_config };
};