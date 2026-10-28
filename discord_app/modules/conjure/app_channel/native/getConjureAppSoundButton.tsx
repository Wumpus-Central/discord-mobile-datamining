// discord_app/modules/conjure/app_channel/native/getConjureAppSoundButton.tsx
import _modDef3863 from "../../intl/ConjureUntranslated.messages.js";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/conjure/app_channel/native/getConjureAppSoundButton.tsx");

export default function getConjureAppSoundButton(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const intl = require("util").intl;
  const tmp3 = _modDef3863;
  const obj = { label: intl.string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe), IconComponent: null, onPress: null };
  if (arg1) {
    let VoiceXIcon = tmp(8609).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(11664).VoiceXIcon;
  }
  obj.IconComponent = VoiceXIcon;
  obj.onPress = function onPress() {
    return FramesActionCreatorsDefault.setFrameUserMuted(closure_0, !closure_1);
  };
  return obj;
}
