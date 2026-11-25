// === Module 17539: ParentalControlsDirectMessages ===

// Module 17539 (ParentalControlsDirectMessages)
import util from "util" /* 1112 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16272 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16273 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16277 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8170 */;

require = fn;
const SettingBuilders = fn(11914);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.RAQUSN);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.wbYDfT);
  },
  parent: fn(9513).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    return !useParentalControlSettings.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledDefaultGuildsRestrictedV2 = ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
      FamilyCenterSaveErrorUtils.showToastIfSaveFails(ParentalControlledDefaultGuildsRestrictedV2.updateControlledSetting(selectedTeenId, !arg0));
    }
  },
  unsearchable: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsDirectMessages.tsx");

export default toggle;
export const ParentalControlsDirectMessages = toggle;