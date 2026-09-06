// discord_app/modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualFriendsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import FlagUtilsAll from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";

require = fn;
const FriendSourceFlags = fn(1074).FriendSourceFlags;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IqlCSq);
  },
  parent: fn(7975).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    const selectedTeenId = controlledSetting(8647).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(14825).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).mutualFriends;
  },
  onValueChange: function onFriendRequestsMutualFriendsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.getControlledSetting(selectedTeenId);
      const ParentalControlledFriendSourceFlags2 = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const obj = FlagUtilsAll;
      if (arg0) {
        let addFlagResult = obj.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS);
      } else {
        addFlagResult = obj.removeFlags(
          controlledSetting,
          FriendSourceFlags.MUTUAL_FRIENDS,
          FriendSourceFlags.NO_RELATION,
        );
      }
      const result = ParentalControlledFriendSourceFlags2.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  },
  unsearchable: true,
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualFriendsSetting.tsx",
);

export default SettingBuilders;
