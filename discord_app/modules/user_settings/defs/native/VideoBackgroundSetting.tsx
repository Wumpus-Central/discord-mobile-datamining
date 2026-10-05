// discord_app/modules/user_settings/defs/native/VideoBackgroundSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import applyBackgroundOption from "../../../video_backgrounds/applyBackgroundOption.tsx";
import VideoBackgroundActionCreators from "../../../video_backgrounds/VideoBackgroundActionCreators.tsx";
import LastUsedVideoBackgroundOption from "../../../video_backgrounds/LastUsedVideoBackgroundOption.tsx";
import useIsVideoBackgroundEnabledDefault from "../../../video_backgrounds/useIsVideoBackgroundEnabled.tsx";
import VideoBackgroundOptions from "../../../video_backgrounds/native/VideoBackgroundOptions.tsx";
import Constants from "../../../../Constants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AnalyticsSections: c3, NOOP: closure_4, AnalyticsPages: hasOwnProperty } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = LastUsedVideoBackgroundOption;
      const lastUsedVideoBackgroundOption = obj2.useLastUsedVideoBackgroundOption();
      if (cResult[0] !== lastUsedVideoBackgroundOption) {
        const tmpResult = VideoBackgroundOptions;
        const result = tmpResult.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
        cResult[0] = lastUsedVideoBackgroundOption;
        cResult[1] = result;
        tmp5 = result;
      } else {
        tmp5 = cResult[1];
      }
      return "" + tmp5;
    }
  : () => {
      const obj = LastUsedVideoBackgroundOption;
      const lastUsedVideoBackgroundOption = obj.useLastUsedVideoBackgroundOption();
      const obj2 = VideoBackgroundOptions;
      return "" + obj2.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.lZTUPs);
  },
  parent: MobileUserSettings.VOICE,
  usePredicate() {
    return useIsVideoBackgroundEnabledDefault("VideoBackgroundSetting");
  },
  useValue: tmp3,
  onValueChange: function onVideoBackgroundSettingChange(arg0) {
    let obj4;
    const fromVideoBackgroundRadioValue = VideoBackgroundOptions.fromVideoBackgroundRadioValue;
    VideoBackgroundOptions;
    const obj = VideoBackgroundOptions;
    const result = fromVideoBackgroundRadioValue(obj.parseVideoBackgroundRadioValue(arg0));
    const obj3 = { location: obj4 };
    obj4 = { page: hasOwnProperty.USER_SETTINGS, section: constants.SETTINGS_VOICE_AND_VIDEO };
    const obj2 = applyBackgroundOption;
    const result1 = obj2.applyBackgroundOptionLive(result, obj3);
    result1.catch(React3);
    const obj5 = VideoBackgroundActionCreators;
    const result2 = obj5.saveLastUsedBackgroundOption(result);
    result2.catch(React3);
  },
  useOptions: VideoBackgroundOptions.useVideoBackgroundRadioOptions,
};
const radio = SettingBuilders.createRadio(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/VideoBackgroundSetting.tsx");

export default radio;
