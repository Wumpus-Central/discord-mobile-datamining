// === Module 15530: LaunchpadSetting ===

// Module 15530 (LaunchpadSetting)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11464 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11465 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.JqV7IC);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: useLaunchPadTypeDefault,
  onValueChange: function onLaunchpadSettingValueChange(arg0) {
    if (LaunchPadTypes.GESTURE_FULL === arg0) {
      const LaunchPadModeSetting3 = UserSettings.LaunchPadModeSetting;
      LaunchPadModeSetting3.updateSetting(preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN);
    } else if (tmp.GESTURE_EDGE === arg0) {
      const LaunchPadModeSetting2 = UserSettings.LaunchPadModeSetting;
      LaunchPadModeSetting2.updateSetting(preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE);
    } else if (tmp.PULL_TAB === arg0) {
      const LaunchPadModeSetting = UserSettings.LaunchPadModeSetting;
      LaunchPadModeSetting.updateSetting(preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_PULL_TAB);
    } else if (tmp.DISABLED === arg0) {
      const LaunchPadModeSetting4 = UserSettings.LaunchPadModeSetting;
      LaunchPadModeSetting4.updateSetting(preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_DISABLED);
    }
  },
  useOptions: function useLaunchpadSettingOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.Q3abNB);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t["/gdTGA"]);
    obj.value = LaunchPadTypes.GESTURE_FULL;
    const items = [obj, , , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t.dQN6qS);
    const intl4 = util.intl;
    obj.subLabel = intl4.string(util.t["W+cPjG"]);
    obj.value = LaunchPadTypes.GESTURE_EDGE;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = util.intl;
    obj.label = intl5.string(util.t["PgDGl+"]);
    const intl6 = util.intl;
    obj.subLabel = intl6.string(util.t.uVc5MG);
    obj.value = LaunchPadTypes.PULL_TAB;
    items[2] = obj;
    const obj1 = { label: null, subLabel: null, value: null };
    const intl7 = util.intl;
    obj1.label = intl7.string(util.t.HnzBCZ);
    const intl8 = util.intl;
    obj1.subLabel = intl8.string(util.t.It18o2);
    obj1.value = LaunchPadTypes.DISABLED;
    items[3] = obj1;
    return items;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LaunchpadSetting.tsx");

export default radio;