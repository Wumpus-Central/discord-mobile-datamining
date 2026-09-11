// discord_app/modules/channel/ChannelMuteUtils.tsx
import _modDef4198 from "../../../_runtime/metro/04198__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/channel/ChannelMuteUtils.tsx");

export const getMuteSettings = function getMuteSettings(selected_time_window) {
  const mute_config = { selected_time_window, end_time: null };
  let toISOStringResult = null;
  if (selected_time_window > 0) {
    const obj2 = _modDef4198();
    toISOStringResult = _modDef4198().add(selected_time_window, "second").toISOString();
    const addResult = _modDef4198().add(selected_time_window, "second");
  }
  mute_config.end_time = toISOStringResult;
  return { muted: true, mute_config };
};
