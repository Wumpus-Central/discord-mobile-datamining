// === Module 17199: useSoundboardConfig ===

// Module 17199 (useSoundboardConfig)
import canChannelUseSoundboardDefault from "canChannelUseSoundboard" /* 7375 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 17037 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 17059 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const SoundboardButtonLocation = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(arg0, analyticsSource) {
  _require = arg0;
  importDefault = analyticsSource;
  let tmp2 = useIsConnectedToVoiceChannelDefault(arg0);
  let obj = require("initialize");
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => deaf.isDeaf());
  const obj2 = require("DismissibleContentUnsafeUtils");
  if (tmp2) {
    if (obj.VOICE_CONTROLS === analyticsSource) {
      let flag = true;
    } else {
      flag = false;
    }
    tmp2 = flag;
  }
  const items1 = [arg0, analyticsSource];
  const items2 = [arg0];
  const callback = noop.useCallback(() => {
    const channel = ChannelStore.getChannel(closure_0);
    if (null != channel) {
      const obj = { channel, analyticsSource };
      const result = obj.showSoundboardSoundPickerActionSheet(obj);
    }
  }, items1);
  obj = { visible: tmp2, handlePress: callback, disabled: null, disabledAccessibilityHint: null, showIndicator: null };
  let tmp8 = stateFromStores;
  if (!stateFromStores) {
    tmp8 = !noop.useMemo(() => canChannelUseSoundboardDefault(ChannelStore.getChannel(closure_0)), items2);
  }
  obj.disabled = tmp8;
  let stringResult;
  if (stateFromStores) {
    const intl = tmp3(1114).intl;
    stringResult = intl.string(tmp3(1114).t.X1lQli);
  }
  obj.disabledAccessibilityHint = stringResult;
  obj.showIndicator = !require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  return obj;
};
export { SoundboardButtonLocation };