// === Module 14735: toggle ===

// Module 14735 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4069 */;
import MobileUserSettings from "MobileUserSettings" /* 8238 */;
import createToggle from "createToggle" /* 10708 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cSb1ub);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.HappeningNowCardsDisabled.useSetting,
  onValueChange: explicitContentFromProto.HappeningNowCardsDisabled.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cSb1ub);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.HappeningNowCardsDisabled.useSetting,
  onValueChange: explicitContentFromProto.HappeningNowCardsDisabled.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DmsHappeningNowCardsSetting.tsx");

export default toggle;