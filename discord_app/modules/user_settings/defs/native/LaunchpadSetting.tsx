// === Module 14512: radio ===

// Module 14512 (radio)
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";
import createToggle from "createToggle";

const radio = createToggle.createRadio({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.JqV7IC);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("useLaunchPadType"),
  onValueChange: function onLaunchpadSettingValueChange(arg0) {
    if (LaunchPadTypes.GESTURE_FULL === arg0) {
      const LaunchPadModeSetting3 = require(3866) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting3.updateSetting(require(1306) /* create */.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN);
    } else if (tmp.GESTURE_EDGE === arg0) {
      const LaunchPadModeSetting2 = require(3866) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting2.updateSetting(require(1306) /* create */.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE);
    } else if (tmp.PULL_TAB === arg0) {
      const LaunchPadModeSetting = require(3866) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting.updateSetting(require(1306) /* create */.LaunchPadMode.LAUNCH_PAD_PULL_TAB);
    } else if (tmp.DISABLED === arg0) {
      const LaunchPadModeSetting4 = require(3866) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting4.updateSetting(require(1306) /* create */.LaunchPadMode.LAUNCH_PAD_DISABLED);
    }
  },
  useOptions: function useLaunchpadSettingOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t.Q3abNB);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["/gdTGA"]);
    obj[2] = LaunchPadTypes.GESTURE_FULL;
    const items = [obj, , , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.dQN6qS);
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl4.string(require(1236) /* getSystemLocale */.t["W+cPjG"]);
    obj[2] = LaunchPadTypes.GESTURE_EDGE;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl5.string(require(1236) /* getSystemLocale */.t["PgDGl+"]);
    const intl6 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl6.string(require(1236) /* getSystemLocale */.t.uVc5MG);
    obj[2] = LaunchPadTypes.PULL_TAB;
    items[2] = obj;
    const obj1 = { label: null, subLabel: null, value: null };
    const intl7 = require(1236) /* getSystemLocale */.intl;
    obj1[0] = intl7.string(require(1236) /* getSystemLocale */.t.HnzBCZ);
    const intl8 = require(1236) /* getSystemLocale */.intl;
    obj1[1] = intl8.string(require(1236) /* getSystemLocale */.t.It18o2);
    obj1[2] = LaunchPadTypes.DISABLED;
    items[3] = obj1;
    return items;
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.JqV7IC);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("useLaunchPadType"),
  onValueChange: function onLaunchpadSettingValueChange(arg0) {
    if (LaunchPadTypes.GESTURE_FULL === arg0) {
      const LaunchPadModeSetting3 = require(3866) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting3.updateSetting(require(1306) /* create */.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN);
    } else if (tmp.GESTURE_EDGE === arg0) {
      const LaunchPadModeSetting2 = require(3866) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting2.updateSetting(require(1306) /* create */.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE);
    } else if (tmp.PULL_TAB === arg0) {
      const LaunchPadModeSetting = require(3866) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting.updateSetting(require(1306) /* create */.LaunchPadMode.LAUNCH_PAD_PULL_TAB);
    } else if (tmp.DISABLED === arg0) {
      const LaunchPadModeSetting4 = require(3866) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting4.updateSetting(require(1306) /* create */.LaunchPadMode.LAUNCH_PAD_DISABLED);
    }
  },
  useOptions: function useLaunchpadSettingOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t.Q3abNB);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["/gdTGA"]);
    obj[2] = LaunchPadTypes.GESTURE_FULL;
    const items = [obj, , , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.dQN6qS);
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl4.string(require(1236) /* getSystemLocale */.t["W+cPjG"]);
    obj[2] = LaunchPadTypes.GESTURE_EDGE;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl5.string(require(1236) /* getSystemLocale */.t["PgDGl+"]);
    const intl6 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl6.string(require(1236) /* getSystemLocale */.t.uVc5MG);
    obj[2] = LaunchPadTypes.PULL_TAB;
    items[2] = obj;
    const obj1 = { label: null, subLabel: null, value: null };
    const intl7 = require(1236) /* getSystemLocale */.intl;
    obj1[0] = intl7.string(require(1236) /* getSystemLocale */.t.HnzBCZ);
    const intl8 = require(1236) /* getSystemLocale */.intl;
    obj1[1] = intl8.string(require(1236) /* getSystemLocale */.t.It18o2);
    obj1[2] = LaunchPadTypes.DISABLED;
    items[3] = obj1;
    return items;
  }
};
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/LaunchpadSetting.tsx");

export default radio;