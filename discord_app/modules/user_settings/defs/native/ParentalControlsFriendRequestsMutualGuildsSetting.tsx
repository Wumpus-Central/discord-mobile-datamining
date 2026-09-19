// === Module 16217: ParentalControlsFriendRequestsMutualGuildsSetting ===

// Module 16217 (ParentalControlsFriendRequestsMutualGuildsSetting)
import util from "util" /* 1115 */;
import FlagUtilsAll from "FlagUtils" /* 1385 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7235 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15097 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7777 */;

require = fn;
const FriendSourceFlags = fn(1074).FriendSourceFlags;
const SettingBuilders = fn(11723);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mozb8f);
  },
  parent: fn(8232).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualGuildsSettingValue() {
    const selectedTeenId = controlledSetting(8924).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(15097).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).mutualGuilds;
  },
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.getControlledSetting(selectedTeenId);
      const ParentalControlledFriendSourceFlags2 = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const obj = FlagUtilsAll;
      if (arg0) {
        let addFlagResult = obj.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS);
      } else {
        addFlagResult = obj.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
      }
      const result = ParentalControlledFriendSourceFlags2.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualGuildsSetting.tsx");

export default toggle;