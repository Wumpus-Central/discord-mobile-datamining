// === Module 18198: VideoBackgroundSetting ===

// Module 18198 (VideoBackgroundSetting)
import util from "util" /* 1113 */;
import applyBackgroundOption from "applyBackgroundOption" /* 6060 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 6063 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 6065 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import useIsVideoBackgroundEnabledDefault from "useIsVideoBackgroundEnabled" /* 12140 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 12160 */;
import Constants from "Constants" /* 1072 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

({ AnalyticsSections: c3, NOOP: closure_4, AnalyticsPages: hasOwnProperty } = Constants);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.lZTUPs);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  usePredicate() {
    return useIsVideoBackgroundEnabledDefault("VideoBackgroundSetting");
  },
  useValue: function useVideoBackgroundSettingValue() {
    const lastUsedVideoBackgroundOption = LastUsedVideoBackgroundOption.useLastUsedVideoBackgroundOption();
    return "" + VideoBackgroundOptions.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
  },
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