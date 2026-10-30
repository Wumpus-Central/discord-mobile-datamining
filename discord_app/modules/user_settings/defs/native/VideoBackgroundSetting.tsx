// discord_app/modules/user_settings/defs/native/VideoBackgroundSetting.tsx
import util from "../../../../intl/index.native.tsx";
import applyBackgroundOption from "../../../video_backgrounds/applyBackgroundOption.tsx";
import VideoBackgroundActionCreators from "../../../video_backgrounds/VideoBackgroundActionCreators.tsx";
import LastUsedVideoBackgroundOption from "../../../video_backgrounds/LastUsedVideoBackgroundOption.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useIsVideoBackgroundEnabledDefault from "../../../video_backgrounds/useIsVideoBackgroundEnabled.tsx";
import VideoBackgroundOptions from "../../../video_backgrounds/native/VideoBackgroundOptions.tsx";
import Constants from "../../../../Constants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  useOptions: VideoBackgroundOptions.useVideoBackgroundRadioOptions,
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/VideoBackgroundSetting.tsx");

export default radio;
