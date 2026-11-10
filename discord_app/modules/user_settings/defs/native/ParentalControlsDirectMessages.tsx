// === Module 18297: ParentalControlsDirectMessages ===

// Module 18297 (ParentalControlsDirectMessages)
import util from "util" /* 1113 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17065 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17066 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17070 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7794 */;

require = fn;
const SettingBuilders = fn(11694);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.RAQUSN);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.wbYDfT);
  },
  parent: fn(8507).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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