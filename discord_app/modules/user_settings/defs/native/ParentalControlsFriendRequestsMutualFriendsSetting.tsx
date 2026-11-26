// === Module 17599: ParentalControlsFriendRequestsMutualFriendsSetting ===

// Module 17599 (ParentalControlsFriendRequestsMutualFriendsSetting)
import util from "util" /* 1112 */;
import FlagUtilsAll from "FlagUtils" /* 1405 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7351 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16324 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16328 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8212 */;

require = fn;
const FriendSourceFlags = fn(1071).FriendSourceFlags;
const SettingBuilders = fn(11962);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IqlCSq);
  },
  parent: fn(9555).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    const selectedTeenId = controlledSetting(8217).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(16324).ParentalControlledFriendSourceFlags;
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