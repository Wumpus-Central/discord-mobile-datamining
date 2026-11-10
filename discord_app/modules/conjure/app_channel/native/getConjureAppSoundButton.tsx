// === Module 14658: getConjureAppSoundButton ===

// Module 14658 (getConjureAppSoundButton)
import _modDef4028 from "module_4028" /* 4028 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11070 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/conjure/app_channel/native/getConjureAppSoundButton.tsx");

export default function getConjureAppSoundButton(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const intl = require("util").intl;
  const tmp3 = _modDef4028;
  const obj = { label: intl.string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe), IconComponent: null, onPress: null };
  if (arg1) {
    let VoiceXIcon = tmp(8750).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(12125).VoiceXIcon;
  }
  obj.IconComponent = VoiceXIcon;
  obj.onPress = function onPress() {
    return FramesActionCreatorsDefault.setFrameUserMuted(closure_0, !closure_1);
  };
  return obj;
};