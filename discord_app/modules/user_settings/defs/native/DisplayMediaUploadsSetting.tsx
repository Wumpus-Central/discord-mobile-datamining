// discord_app/modules/user_settings/defs/native/DisplayMediaUploadsSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.VP11No);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").InlineAttachmentMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineAttachmentMedia.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.VP11No);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").InlineAttachmentMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineAttachmentMedia.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaUploadsSetting.tsx");

export default toggle;