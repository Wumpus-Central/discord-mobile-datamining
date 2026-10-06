// === Module 15372: LaunchpadSetting ===

// Module 15372 (LaunchpadSetting)
import intl9 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 2028 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11138 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11139 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
let obj = {
  useTitle() {
    const intl = intl9.intl;
    return intl.string(intl9.t.JqV7IC);
  },
  parent: MobileUserSettings.ADVANCED,
  useValue: useLaunchPadTypeDefault,
  onValueChange: function onLaunchpadSettingValueChange(arg0) {
    if (LaunchPadTypes.GESTURE_FULL === arg0) {
      const LaunchPadModeSetting3 = UserSettings.LaunchPadModeSetting;
      LaunchPadModeSetting3.updateSetting(preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN);
    } else if (LaunchPadTypes.GESTURE_EDGE === arg0) {
      const LaunchPadModeSetting2 = UserSettings.LaunchPadModeSetting;
      LaunchPadModeSetting2.updateSetting(preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE);
    } else if (LaunchPadTypes.PULL_TAB === arg0) {
      const LaunchPadModeSetting = UserSettings.LaunchPadModeSetting;
      LaunchPadModeSetting.updateSetting(preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_PULL_TAB);
    } else if (LaunchPadTypes.DISABLED === arg0) {
      const LaunchPadModeSetting4 = UserSettings.LaunchPadModeSetting;
      LaunchPadModeSetting4.updateSetting(preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_DISABLED);
    }
  },
  useOptions: function useLaunchpadSettingOptions() {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    const obj = { label: intl.string(intl9.t.Q3abNB), subLabel: intl2.string(intl9.t["/gdTGA"]), value: LaunchPadTypes.GESTURE_FULL };
    intl = intl9.intl;
    intl2 = intl9.intl;
    const items = [obj, , , ];
    const obj2 = { label: intl3.string(intl9.t.dQN6qS), subLabel: intl4.string(intl9.t["W+cPjG"]), value: LaunchPadTypes.GESTURE_EDGE };
    intl3 = intl9.intl;
    intl4 = intl9.intl;
    items[1] = obj2;
    const obj3 = { label: intl5.string(intl9.t["PgDGl+"]), subLabel: intl6.string(intl9.t.uVc5MG), value: LaunchPadTypes.PULL_TAB };
    intl5 = intl9.intl;
    intl6 = intl9.intl;
    items[2] = obj3;
    const obj4 = { label: intl7.string(intl9.t.HnzBCZ), subLabel: intl8.string(intl9.t.It18o2), value: LaunchPadTypes.DISABLED };
    intl7 = intl9.intl;
    intl8 = intl9.intl;
    items[3] = obj4;
    return items;
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LaunchpadSetting.tsx");

export default radio;