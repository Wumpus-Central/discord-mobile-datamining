// discord_app/modules/channel/ChannelMuteUtils.tsx
import set from "../../../_runtime/00002_set.js";
import hooksDefault from "../../../_runtime/04075_hooks.js";

const result = set.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = hooksDefault();
    toISOStringResult = hooksDefault().add(selected_time_window, "second").toISOString();
    const addResult = hooksDefault().add(selected_time_window, "second");
  }
  mute_config[1] = toISOStringResult;
  return { muted: true, mute_config };
};
