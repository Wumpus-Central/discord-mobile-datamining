// discord_app/modules/channel/ChannelMuteUtils.tsx
import { t } from "../../../_runtime/03902_t.js";
const result = require("set").fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = t();
    toISOStringResult = t().add(selected_time_window, "second").toISOString();
    const addResult = t().add(selected_time_window, "second");
  }
  mute_config[1] = toISOStringResult;
  return { muted: true, mute_config };
};