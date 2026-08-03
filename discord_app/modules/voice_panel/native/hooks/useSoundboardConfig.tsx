import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
let obj = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls" };
let result = require("useIsConnectedToVoiceChannel").fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default function useSoundboardConfig(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  const tmp = importDefault(15949)(arg0);
  let obj = _require(4071);
  let tmp3 = tmp;
  if (tmp) {
    if (obj.VOICE_CONTROLS === arg1) {
      let flag = true;
    } else {
      flag = false;
    }
    tmp3 = flag;
  }
  obj = {
    visible: tmp3,
    handlePress: React.useCallback(() => {
      const channel = outer1_4.getChannel(callback);
      if (null != channel) {
        let obj = callback(outer1_2[5]);
        obj = { channel: null, analyticsSource: null };
        obj[0] = channel;
        obj[1] = closure_1;
        const result = obj.showSoundboardSoundPickerActionSheet(obj);
      }
    }, items),
    disabled: React.useMemo(() => !callback2(outer1_2[6])(outer1_4.getChannel(closure_0)), items1),
    showIndicator: !obj.useIsDismissibleContentDismissed_UNSAFE(_require(1358).DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE)
  };
  items = [arg0, arg1];
  items1 = [arg0];
  return obj;
};
export const SoundboardButtonLocation = obj;