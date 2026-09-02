// === Module 15720: toggle ===

// Module 15720 (toggle)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14653 */;
import result2 from "result" /* 14654 */;
import closure_2 from "freshTeenActivityWithMap" /* 7291 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.RAQUSN);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.wbYDfT);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    return !useParentalControlledExplicitContentSettings.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledDefaultGuildsRestrictedV2 = result2.ParentalControlledDefaultGuildsRestrictedV2;
      const result = ParentalControlledDefaultGuildsRestrictedV2.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsDirectMessages.tsx");

export default createToggle;
export const ParentalControlsDirectMessages = createToggle;