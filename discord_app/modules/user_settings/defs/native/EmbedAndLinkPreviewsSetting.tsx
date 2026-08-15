// discord_app/modules/user_settings/defs/native/EmbedAndLinkPreviewsSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["5bK9vw"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: require("explicitContentFromProto").RenderEmbeds.useSetting,
  onValueChange: require("explicitContentFromProto").RenderEmbeds.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["5bK9vw"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: require("explicitContentFromProto").RenderEmbeds.useSetting,
  onValueChange: require("explicitContentFromProto").RenderEmbeds.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/EmbedAndLinkPreviewsSetting.tsx");

export default toggle;