// discord_app/modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../../activity_privacy/ActivityPrivacy.messages.js";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.WhdCGP);
  },
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.UQ9RHJ);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").ShowCurrentGame.useSetting,
  onValueChange: require("explicitContentFromProto").ShowCurrentGame.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.WhdCGP);
  },
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.UQ9RHJ);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").ShowCurrentGame.useSetting,
  onValueChange: require("explicitContentFromProto").ShowCurrentGame.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;