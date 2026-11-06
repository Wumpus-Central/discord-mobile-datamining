// === Module 19516: useSoundboardConfig ===

// Module 19516 (useSoundboardConfig)
import canChannelUseSoundboardDefault from "canChannelUseSoundboard" /* 7651 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19450 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 19470 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;

const require = globalThis.__r;

require = fn;
const SoundboardButtonLocation = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls", VOICE_PANEL_DOCK: "voice panel dock" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(channelId, analyticsSource) {
  _require = channelId;
  importDefault = analyticsSource;
  let tmp2 = useIsConnectedToVoiceChannelDefault(channelId);
  let obj = require("initialize");
  items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => deaf.isDeaf());
  if (tmp2) {
    if (obj.VOICE_CONTROLS !== analyticsSource) {
      if (tmp5.VOICE_PANEL_CONTROLS !== analyticsSource) {
        let flag = false;
      }
      tmp2 = flag;
    }
    flag = true;
    tmp5 = obj;
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
  let obj2 = { visible: tmp2, handlePress: callback, disabled: null, disabledAccessibilityHint: null };
  let tmp7 = stateFromStores;
  if (!stateFromStores) {
    tmp7 = !noop.useMemo(() => canChannelUseSoundboardDefault(ChannelStore.getChannel(closure_0)), items2);
  }
  obj2.disabled = tmp7;
  let stringResult;
  if (stateFromStores) {
    const intl = tmp3(1113).intl;
    stringResult = intl.string(tmp3(1113).t.X1lQli);
  }
  obj2.disabledAccessibilityHint = stringResult;
  return obj2;
};
export { SoundboardButtonLocation };