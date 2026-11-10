// === Module 18301: ParentalControlsFriendRequestsMutualGuildsSetting ===

// Module 18301 (ParentalControlsFriendRequestsMutualGuildsSetting)
import util from "util" /* 1113 */;
import FlagUtilsAll from "FlagUtils" /* 1403 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7230 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17066 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17070 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7794 */;

require = fn;
const FriendSourceFlags = fn(1072).FriendSourceFlags;
const SettingBuilders = fn(11694);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mozb8f);
  },
  parent: fn(8507).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualGuildsSettingValue() {
    const selectedTeenId = controlledSetting(8446).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(17066).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    items = [controlledSetting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).mutualGuilds;
  },
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.getControlledSetting(selectedTeenId);
      const ParentalControlledFriendSourceFlags2 = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const obj2 = FlagUtilsAll;
      if (arg0) {
        let addFlagResult = obj2.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS);
      } else {
        addFlagResult = obj2.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
      }
      FamilyCenterSaveErrorUtils.showToastIfSaveFails(ParentalControlledFriendSourceFlags2.updateControlledSetting(selectedTeenId, addFlagResult));
    }
  },
  unsearchable: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualGuildsSetting.tsx");

export default toggle;