// === Module 17767: useSoundboardConfig ===

// Module 17767 (useSoundboardConfig)
import canChannelUseSoundboardDefault from "canChannelUseSoundboard" /* 7705 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 17604 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 17625 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

const require = globalThis.__r;

require = fn;
const SoundboardButtonLocation = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(channelId, analyticsSource) {
  _require = channelId;
  importDefault = analyticsSource;
  let tmp2 = useIsConnectedToVoiceChannelDefault(channelId);
  let obj = require("initialize");
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => deaf.isDeaf());
  if (tmp2) {
    if (obj.VOICE_CONTROLS === analyticsSource) {
      let flag = true;
    } else {
      flag = false;
    }
    tmp2 = flag;
  }
  const items1 = [channelId, analyticsSource];
  const items2 = [channelId];
  const callback = noop.useCallback(() => {
    const channel = ChannelStore.getChannel(closure_0);
    if (null != channel) {
      const obj2 = { channel, analyticsSource };
      const result = soundboard_SoundboardActionCreators.showSoundboardSoundPickerActionSheet(obj2);
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
    const intl = tmp3(1115).intl;
    stringResult = intl.string(tmp3(1115).t.X1lQli);
  }
  obj2.disabledAccessibilityHint = stringResult;
  return obj2;
};
export { SoundboardButtonLocation };