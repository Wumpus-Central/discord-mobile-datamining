// === Module 15505: VideoBackgroundSetting ===

// Module 15505 (VideoBackgroundSetting)
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7412 */;
import applyBackgroundOption from "applyBackgroundOption" /* 9099 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 9101 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 9103 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 9427 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 9446 */;
import Constants from "Constants" /* 1074 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
import size from "module_2" /* 2 */;

({ AnalyticsSections: c2, NOOP: c3, AnalyticsPages: closure_4 } = Constants);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.lZTUPs);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  usePredicate: useIsVideoBackgroundSupportedDefault,
  useValue: function useVideoBackgroundSettingValue() {
    const lastUsedVideoBackgroundOption = LastUsedVideoBackgroundOption.useLastUsedVideoBackgroundOption();
    return "" + VideoBackgroundOptions.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
  },
  onValueChange: function onVideoBackgroundSettingChange(arg0) {
    const obj = VideoBackgroundOptions;
    const result = obj.fromVideoBackgroundRadioValue(VideoBackgroundOptions.parseVideoBackgroundRadioValue(arg0));
    const obj4 = { location: { page: constants2.USER_SETTINGS, section: constants.SETTINGS_VOICE_AND_VIDEO } };
    const result1 = applyBackgroundOption.applyBackgroundOptionLive(result, obj4);
    result1.catch(React3);
    const obj5 = { page: constants2.USER_SETTINGS, section: constants.SETTINGS_VOICE_AND_VIDEO };
    const result2 = VideoBackgroundActionCreators.saveLastUsedBackgroundOption(result);
    result2.catch(React3);
  },
  useOptions: VideoBackgroundOptions.useVideoBackgroundRadioOptions
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/VideoBackgroundSetting.tsx");

export default radio;