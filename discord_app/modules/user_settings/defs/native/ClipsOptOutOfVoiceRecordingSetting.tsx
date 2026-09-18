// discord_app/modules/user_settings/defs/native/ClipsOptOutOfVoiceRecordingSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _updateClipsAllowVoiceRecording(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp4;
          const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: ClipsAllowVoiceRecording.updateSetting(closure_0), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_129_1(closure_129_2[3]).dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
const SettingBuilders = fn(11714);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.AGDDkH);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["wW9/zQ"]);
  },
  parent: fn(8194).MobileUserSettings.CLIPS,
  useValue: fn(1936).ClipsAllowVoiceRecording.useSetting,
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ClipsOptOutOfVoiceRecordingSetting.tsx");

export default toggle;
