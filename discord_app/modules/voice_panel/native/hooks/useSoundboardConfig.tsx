// discord_app/modules/voice_panel/native/hooks/useSoundboardConfig.tsx
import canChannelUseSoundboardDefault from "../../../soundboard/canChannelUseSoundboard.tsx";
import soundboard_SoundboardActionCreators from "../../../soundboard/native/SoundboardActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

const require = globalThis.__r;

require = fn;
const SoundboardButtonLocation = {
  VOICE_CONTROLS: "call control drawer",
  VOICE_PANEL_CONTROLS: "voice panel controls",
  VOICE_PANEL_DOCK: "voice panel dock",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(channelId, analyticsSource) {
  _require = channelId;
  let obj = require("initialize");
  items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => deaf.isDeaf());
  if (obj.VOICE_CONTROLS !== analyticsSource) {
    if (tmp4.VOICE_PANEL_CONTROLS !== analyticsSource) {
      let flag = false;
    }
    const items1 = [channelId, analyticsSource];
    const items2 = [channelId];
    const callback = noop.useCallback(() => {
      const channel = ChannelStore.getChannel(closure_0);
      if (null != channel) {
        const obj = soundboard_SoundboardActionCreators;
        const obj2 = { channel, analyticsSource, startExpanded: null };
        let flag = true;
        if (obj.VOICE_CONTROLS !== analyticsSource) {
          flag = true;
          if (tmp5.VOICE_PANEL_CONTROLS !== analyticsSource) {
            flag = true;
            if (tmp5.VOICE_PANEL_DOCK === analyticsSource) {
              flag = false;
            }
          }
        }
        obj2.startExpanded = flag;
        const result = obj.showSoundboardSoundPickerActionSheet(obj2);
      }
    }, items1);
    let obj2 = { visible: flag, handlePress: callback, disabled: null, disabledAccessibilityHint: null };
    let tmp7 = stateFromStores;
    if (!stateFromStores) {
      tmp7 = !noop.useMemo(() => canChannelUseSoundboardDefault(ChannelStore.getChannel(closure_0)), items2);
    }
    obj2.disabled = tmp7;
    let stringResult;
    if (stateFromStores) {
      const intl = tmp(1113).intl;
      stringResult = intl.string(tmp(1113).t.X1lQli);
    }
    obj2.disabledAccessibilityHint = stringResult;
    return obj2;
  }
  flag = true;
  tmp4 = obj;
}
export { SoundboardButtonLocation };
