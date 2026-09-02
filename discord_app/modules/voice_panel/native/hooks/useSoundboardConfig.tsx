// === Module 17015: useSoundboardConfig ===

// Module 17015 (useSoundboardConfig)
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 16853 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import closure_5 from "_detectH265HardwareDecode" /* 4529 */;

const require = arg1;
let obj = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls" };
let result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(arg0, arg1) {
  const _require = arg0;
  importDefault = arg1;
  let tmp2 = useIsConnectedToVoiceChannelDefault(arg0);
  obj = _require(586);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => deaf.isDeaf());
  const obj2 = _require(4298);
  if (tmp2) {
    if (obj.VOICE_CONTROLS === arg1) {
      let flag = true;
    } else {
      flag = false;
    }
    tmp2 = flag;
  }
  const items1 = [arg0, arg1];
  const items2 = [arg0];
  const callback = React.useCallback(() => {
    const channel = closure_1_4.getChannel(callback);
    if (null != channel) {
      obj = callback(closure_1_2[7]);
      obj = { channel: null, analyticsSource: null };
      obj[0] = channel;
      obj[1] = closure_1;
      const result = obj.showSoundboardSoundPickerActionSheet(obj);
    }
  }, items1);
  obj = { visible: tmp2, handlePress: callback, disabled: null, disabledAccessibilityHint: null, showIndicator: null };
  let tmp8 = stateFromStores;
  if (!stateFromStores) {
    tmp8 = !React.useMemo(() => callback2(closure_1_2[8])(closure_1_4.getChannel(closure_0)), items2);
  }
  obj[2] = tmp8;
  let stringResult;
  if (stateFromStores) {
    const intl = tmp3(1233).intl;
    stringResult = intl.string(tmp3(1233).t.X1lQli);
  }
  obj[3] = stringResult;
  obj[4] = !_require(4298).useIsDismissibleContentDismissed_UNSAFE(_require(1372).DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  return obj;
};
export const SoundboardButtonLocation = obj;