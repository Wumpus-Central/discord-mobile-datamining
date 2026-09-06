// discord_app/modules/user_settings/defs/native/ClipsOptOutOfVoiceRecordingSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _updateClipsAllowVoiceRecording(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp4;
          const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: ClipsAllowVoiceRecording.updateSetting(closure_0), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        obj = closure_129_1(closure_129_2[3]);
        obj.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.AGDDkH);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["wW9/zQ"]);
  },
  parent: fn(7975).MobileUserSettings.CLIPS,
  useValue: fn(1935).ClipsAllowVoiceRecording.useSetting,
  onValueChange: function updateClipsAllowVoiceRecording() {
    const self = this;
    const apply = closure_4.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ClipsOptOutOfVoiceRecordingSetting.tsx");

export default SettingBuilders;
