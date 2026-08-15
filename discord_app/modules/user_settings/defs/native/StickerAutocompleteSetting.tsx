// discord_app/modules/user_settings/defs/native/StickerAutocompleteSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["29xPVZ"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: require("explicitContentFromProto").IncludeStickersInAutocomplete.useSetting,
  onValueChange: require("UserSettingsText").setStickerAutocomplete
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["29xPVZ"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: require("explicitContentFromProto").IncludeStickersInAutocomplete.useSetting,
  onValueChange: require("UserSettingsText").setStickerAutocomplete
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/StickerAutocompleteSetting.tsx");

export default toggle;