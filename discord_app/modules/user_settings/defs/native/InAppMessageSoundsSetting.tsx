// discord_app/modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx
import isInAppMessageSoundsEnabled from "isInAppMessageSoundsEnabled";
import createToggle from "createToggle";

let setInAppMessageSoundsEnabled;
let useInAppMessageSoundsEnabled;
({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = isInAppMessageSoundsEnabled);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.jLCRyj);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["wls+Ax"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled,
  usePredicate: require("isMetaQuest").isMetaQuest
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.jLCRyj);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["wls+Ax"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled,
  usePredicate: require("isMetaQuest").isMetaQuest
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;