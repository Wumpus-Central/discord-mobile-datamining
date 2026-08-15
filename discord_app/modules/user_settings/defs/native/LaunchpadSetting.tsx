// discord_app/modules/user_settings/defs/native/LaunchpadSetting.tsx
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";
import createToggle from "createToggle";
import { create } from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";

const radio = createToggle.createRadio({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.JqV7IC);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ADVANCED,
  useValue: require("useLaunchPadType"),
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
    const obj1 = { label: null, subLabel: null, value: null };
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
  parent: require("MobileUserSettings").MobileUserSettings.ADVANCED,
  useValue: require("useLaunchPadType"),
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
    const obj1 = { label: null, subLabel: null, value: null };
    const intl7 = getSystemLocale.intl;
    obj1[0] = intl7.string(getSystemLocale.t.HnzBCZ);
    const intl8 = getSystemLocale.intl;
    obj1[1] = intl8.string(getSystemLocale.t.It18o2);
    obj1[2] = LaunchPadTypes.DISABLED;
    items[3] = obj1;
    return items;
  }
};
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/LaunchpadSetting.tsx");

export default radio;