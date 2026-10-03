// === Module 15282: VideoUploadQualitySetting ===

// Module 15282 (VideoUploadQualitySetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import UserSettingsText from "UserSettingsText" /* 15281 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;

require = fn;
const VideoQualitySettings = fn(1195).VideoQualitySettings;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnsyncedUserSettingsStore];
    const fn = function l() {
      return videoUploadQuality.videoUploadQuality;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UnsyncedUserSettingsStore];
  return initialize.useStateFromStores(items, () => videoUploadQuality.videoUploadQuality);
});
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.PXq9f1);
  },
  parent: fn(7634).MobileUserSettings.CHAT,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UnsyncedUserSettingsStore];
      const fn = function l() {
        return videoUploadQuality.videoUploadQuality;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (() => {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => videoUploadQuality.videoUploadQuality);
  }),
  onValueChange: function onVideoUploadQualitySettingValueChange(videoUploadQuality) {
    const obj3 = { videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    obj3.viewImageDescriptions = ViewImageDescriptions.getSetting();
    ({ lowQualityImageMode: obj2.lowQualityImageMode, dataSavingMode: obj2.dataSavingMode } = UnsyncedUserSettingsStore);
    const result = UserSettingsText.setVideoUploadQuality(obj3);
  },
  useOptions: function useVideoUploadQualitySettingOptions() {
    const obj = { label: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.cWGW5d);
    obj.value = VideoQualitySettings.BEST;
    const items = [obj, , ];
    const obj2 = { label: null, value: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t["5hKnyC"]);
    obj2.value = VideoQualitySettings.STANDARD;
    items[1] = obj2;
    const obj3 = { label: null, value: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t.y5k4ZJ);
    obj3.value = VideoQualitySettings.DATA_SAVER;
    items[2] = obj3;
    return items;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/VideoUploadQualitySetting.tsx");

export default radio;