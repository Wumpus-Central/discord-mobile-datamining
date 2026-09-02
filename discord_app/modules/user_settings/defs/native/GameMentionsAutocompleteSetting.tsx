// === Module 15148: toggle ===

// Module 15148 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.c0oFDw);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: explicitContentFromProto.IncludeGameMentionsInAutocomplete.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.c0oFDw);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: explicitContentFromProto.IncludeGameMentionsInAutocomplete.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;