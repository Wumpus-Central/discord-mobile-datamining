// === Module 18634: ParentalControlsFriendRequestsMutualFriendsSetting ===

// Module 18634 (ParentalControlsFriendRequestsMutualFriendsSetting)
import util from "util" /* 1113 */;
import FlagUtilsAll from "FlagUtils" /* 1406 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7823 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17384 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17388 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8751 */;

require = fn;
const FriendSourceFlags = fn(1072).FriendSourceFlags;
const SettingBuilders = fn(12612);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IqlCSq);
  },
  parent: fn(9213).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    const selectedTeenId = controlledSetting(9630).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(17384).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    items = [controlledSetting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).mutualFriends;
  },
  onValueChange: function onFriendRequestsMutualFriendsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.getControlledSetting(selectedTeenId);
      const ParentalControlledFriendSourceFlags2 = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const obj2 = FlagUtilsAll;
      if (arg0) {
        let addFlagResult = obj2.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS);
      } else {
        addFlagResult = obj2.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
      }
      FamilyCenterSaveErrorUtils.showToastIfSaveFails(ParentalControlledFriendSourceFlags2.updateControlledSetting(selectedTeenId, addFlagResult));
    }
  },
  unsearchable: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualFriendsSetting.tsx");

export default toggle;