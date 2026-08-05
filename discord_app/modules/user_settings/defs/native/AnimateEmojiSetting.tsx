// discord_app/modules/user_settings/defs/native/AnimateEmojiSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.iIaOlc);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").AnimateEmoji.useSetting,
  onValueChange: require("explicitContentFromProto").AnimateEmoji.updateSetting
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.iIaOlc);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").AnimateEmoji.useSetting,
  onValueChange: require("explicitContentFromProto").AnimateEmoji.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AnimateEmojiSetting.tsx");

export default toggle;