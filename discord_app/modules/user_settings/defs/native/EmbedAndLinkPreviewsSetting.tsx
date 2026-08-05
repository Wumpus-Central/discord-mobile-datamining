// discord_app/modules/user_settings/defs/native/EmbedAndLinkPreviewsSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["5bK9vw"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").RenderEmbeds.useSetting,
  onValueChange: require("explicitContentFromProto").RenderEmbeds.updateSetting
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["5bK9vw"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").RenderEmbeds.useSetting,
  onValueChange: require("explicitContentFromProto").RenderEmbeds.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/EmbedAndLinkPreviewsSetting.tsx");

export default toggle;