// discord_app/modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../activity_privacy/ActivityPrivacy.messages.js").WhdCGP);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../activity_privacy/ActivityPrivacy.messages.js").UQ9RHJ);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").ShowCurrentGame.useSetting,
  onValueChange: require("explicitContentFromProto").ShowCurrentGame.updateSetting
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../activity_privacy/ActivityPrivacy.messages.js").WhdCGP);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../activity_privacy/ActivityPrivacy.messages.js").UQ9RHJ);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").ShowCurrentGame.useSetting,
  onValueChange: require("explicitContentFromProto").ShowCurrentGame.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;