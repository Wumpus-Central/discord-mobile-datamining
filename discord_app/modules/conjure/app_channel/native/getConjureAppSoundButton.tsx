// === Module 13803: getConjureAppSoundButton ===

// Module 13803 (getConjureAppSoundButton)
import _modDef4121 from "module_4121" /* 4121 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10582 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/conjure/app_channel/native/getConjureAppSoundButton.tsx");

export default function getConjureAppSoundButton(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const intl = require("util").intl;
  const tmp3 = _modDef4121;
  const obj = { label: intl.string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe), IconComponent: null, onPress: null };
  if (arg1) {
    let VoiceXIcon = tmp(6945).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(10941).VoiceXIcon;
  }
  obj.IconComponent = VoiceXIcon;
  obj.onPress = function onPress() {
    return FramesActionCreatorsDefault.setFrameUserMuted(closure_0, !closure_1);
  };
  return obj;
};