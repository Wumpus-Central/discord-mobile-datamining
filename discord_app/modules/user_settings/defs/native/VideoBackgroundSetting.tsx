// === Module 16304: VideoBackgroundSetting ===

// Module 16304 (VideoBackgroundSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import applyBackgroundOption from "applyBackgroundOption" /* 5253 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 5256 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 5258 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import useIsVideoBackgroundEnabledDefault from "useIsVideoBackgroundEnabled" /* 11076 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 11096 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

({ AnalyticsSections: c3, NOOP: closure_4, AnalyticsPages: hasOwnProperty } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVideoBackgroundSettingValue() {
  const cResult = c.c(2);
  const lastUsedVideoBackgroundOption = LastUsedVideoBackgroundOption.useLastUsedVideoBackgroundOption();
  if (cResult[0] !== lastUsedVideoBackgroundOption) {
    const result = VideoBackgroundOptions.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
    cResult[0] = lastUsedVideoBackgroundOption;
    cResult[1] = result;
    let tmp5 = result;
    const tmpResult = VideoBackgroundOptions;
  } else {
    tmp5 = cResult[1];
  }
  return "" + tmp5;
}) : (function useVideoBackgroundSettingValue() {
  const lastUsedVideoBackgroundOption = LastUsedVideoBackgroundOption.useLastUsedVideoBackgroundOption();
  return "" + VideoBackgroundOptions.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
});
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.lZTUPs);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  usePredicate() {
    return useIsVideoBackgroundEnabledDefault("VideoBackgroundSetting");
  },
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useVideoBackgroundSettingValue() {
    const cResult = c.c(2);
    const lastUsedVideoBackgroundOption = LastUsedVideoBackgroundOption.useLastUsedVideoBackgroundOption();
    if (cResult[0] !== lastUsedVideoBackgroundOption) {
      const result = VideoBackgroundOptions.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
      cResult[0] = lastUsedVideoBackgroundOption;
      cResult[1] = result;
      let tmp5 = result;
      const tmpResult = VideoBackgroundOptions;
    } else {
      tmp5 = cResult[1];
    }
    return "" + tmp5;
  }) : (function useVideoBackgroundSettingValue() {
    const lastUsedVideoBackgroundOption = LastUsedVideoBackgroundOption.useLastUsedVideoBackgroundOption();
    return "" + VideoBackgroundOptions.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
  }),
  onValueChange: function onVideoBackgroundSettingChange(arg0) {
    const obj = VideoBackgroundOptions;
    const result = obj.fromVideoBackgroundRadioValue(VideoBackgroundOptions.parseVideoBackgroundRadioValue(arg0));
    const obj4 = { location: { page: constants2.USER_SETTINGS, section: constants.SETTINGS_VOICE_AND_VIDEO } };
    const result1 = applyBackgroundOption.applyBackgroundOptionLive(result, obj4);
    result1.catch(React4);
    const obj5 = { page: constants2.USER_SETTINGS, section: constants.SETTINGS_VOICE_AND_VIDEO };
    const result2 = VideoBackgroundActionCreators.saveLastUsedBackgroundOption(result);
    result2.catch(React4);
  },
  useOptions: VideoBackgroundOptions.useVideoBackgroundRadioOptions
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/VideoBackgroundSetting.tsx");

export default radio;