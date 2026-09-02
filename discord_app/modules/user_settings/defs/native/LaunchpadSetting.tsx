// === Module 15358: radio ===

// Module 15358 (radio)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import create from "create" /* 1305 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG" /* 11284 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11285 */;
import createToggle from "createToggle" /* 11288 */;

const LaunchPadTypes = LAUNCH_PAD_SPRING_CONFIG.LaunchPadTypes;
const radio = createToggle.createRadio({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.JqV7IC);
  },
  parent: MobileUserSettings.MobileUserSettings.ADVANCED,
  useValue: useLaunchPadTypeDefault,
  onValueChange: function onLaunchpadSettingValueChange(arg0) {
    if (LaunchPadTypes.GESTURE_FULL === arg0) {
      const LaunchPadModeSetting3 = explicitContentFromProto.LaunchPadModeSetting;
      LaunchPadModeSetting3.updateSetting(create.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN);
    } else if (tmp.GESTURE_EDGE === arg0) {
      const LaunchPadModeSetting2 = explicitContentFromProto.LaunchPadModeSetting;
      LaunchPadModeSetting2.updateSetting(create.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE);
    } else if (tmp.PULL_TAB === arg0) {
      const LaunchPadModeSetting = explicitContentFromProto.LaunchPadModeSetting;
      LaunchPadModeSetting.updateSetting(create.LaunchPadMode.LAUNCH_PAD_PULL_TAB);
    } else if (tmp.DISABLED === arg0) {
      const LaunchPadModeSetting4 = explicitContentFromProto.LaunchPadModeSetting;
      LaunchPadModeSetting4.updateSetting(create.LaunchPadMode.LAUNCH_PAD_DISABLED);
    }
  },
  useOptions: function useLaunchpadSettingOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.Q3abNB);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["/gdTGA"]);
    obj[2] = LaunchPadTypes.GESTURE_FULL;
    const items = [obj, , , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = getSystemLocale.intl;
    obj[0] = intl3.string(getSystemLocale.t.dQN6qS);
    const intl4 = getSystemLocale.intl;
    obj[1] = intl4.string(getSystemLocale.t["W+cPjG"]);
    obj[2] = LaunchPadTypes.GESTURE_EDGE;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = getSystemLocale.intl;
    obj[0] = intl5.string(getSystemLocale.t["PgDGl+"]);
    const intl6 = getSystemLocale.intl;
    obj[1] = intl6.string(getSystemLocale.t.uVc5MG);
    obj[2] = LaunchPadTypes.PULL_TAB;
    items[2] = obj;
    obj1 = { label: null, subLabel: null, value: null };
    const intl7 = getSystemLocale.intl;
    obj1[0] = intl7.string(getSystemLocale.t.HnzBCZ);
    const intl8 = getSystemLocale.intl;
    obj1[1] = intl8.string(getSystemLocale.t.It18o2);
    obj1[2] = LaunchPadTypes.DISABLED;
    items[3] = obj1;
    return items;
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.JqV7IC);
  },
  parent: MobileUserSettings.MobileUserSettings.ADVANCED,
  useValue: useLaunchPadTypeDefault,
  onValueChange: function onLaunchpadSettingValueChange(arg0) {
    if (LaunchPadTypes.GESTURE_FULL === arg0) {
      const LaunchPadModeSetting3 = explicitContentFromProto.LaunchPadModeSetting;
      LaunchPadModeSetting3.updateSetting(create.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN);
    } else if (tmp.GESTURE_EDGE === arg0) {
      const LaunchPadModeSetting2 = explicitContentFromProto.LaunchPadModeSetting;
      LaunchPadModeSetting2.updateSetting(create.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE);
    } else if (tmp.PULL_TAB === arg0) {
      const LaunchPadModeSetting = explicitContentFromProto.LaunchPadModeSetting;
      LaunchPadModeSetting.updateSetting(create.LaunchPadMode.LAUNCH_PAD_PULL_TAB);
    } else if (tmp.DISABLED === arg0) {
      const LaunchPadModeSetting4 = explicitContentFromProto.LaunchPadModeSetting;
      LaunchPadModeSetting4.updateSetting(create.LaunchPadMode.LAUNCH_PAD_DISABLED);
    }
  },
  useOptions: function useLaunchpadSettingOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.Q3abNB);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["/gdTGA"]);
    obj[2] = LaunchPadTypes.GESTURE_FULL;
    const items = [obj, , , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = getSystemLocale.intl;
    obj[0] = intl3.string(getSystemLocale.t.dQN6qS);
    const intl4 = getSystemLocale.intl;
    obj[1] = intl4.string(getSystemLocale.t["W+cPjG"]);
    obj[2] = LaunchPadTypes.GESTURE_EDGE;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = getSystemLocale.intl;
    obj[0] = intl5.string(getSystemLocale.t["PgDGl+"]);
    const intl6 = getSystemLocale.intl;
    obj[1] = intl6.string(getSystemLocale.t.uVc5MG);
    obj[2] = LaunchPadTypes.PULL_TAB;
    items[2] = obj;
    obj1 = { label: null, subLabel: null, value: null };
    const intl7 = getSystemLocale.intl;
    obj1[0] = intl7.string(getSystemLocale.t.HnzBCZ);
    const intl8 = getSystemLocale.intl;
    obj1[1] = intl8.string(getSystemLocale.t.It18o2);
    obj1[2] = LaunchPadTypes.DISABLED;
    items[3] = obj1;
    return items;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/LaunchpadSetting.tsx");

export default radio;