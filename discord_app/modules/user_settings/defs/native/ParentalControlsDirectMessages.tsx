// === Module 16282: ParentalControlsDirectMessages ===

// Module 16282 (ParentalControlsDirectMessages)
import util from "util" /* 1126 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15073 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15074 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;

require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(10663);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.RAQUSN);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.wbYDfT);
  },
  parent: fn(7992).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    return !useParentalControlSettings.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledDefaultGuildsRestrictedV2 = ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
      const result = ParentalControlledDefaultGuildsRestrictedV2.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsDirectMessages.tsx");

export default toggle;
export const ParentalControlsDirectMessages = toggle;