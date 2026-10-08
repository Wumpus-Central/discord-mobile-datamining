// === Module 16102: ParentalControlsFriendRequestsMutualFriendsSetting ===

// Module 16102 (ParentalControlsFriendRequestsMutualFriendsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import FlagUtilsAll from "FlagUtils" /* 1402 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6675 */;
import useSelectedTeen from "useSelectedTeen" /* 7713 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14903 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;

require = fn;
const FriendSourceFlags = fn(1085).FriendSourceFlags;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11262);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendRequestsMutualFriendsSettingValue() {
  const cResult = c.c(2);
  const selectedTeenId = useSelectedTeen.useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
  const controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
  if (cResult[0] !== controlledSetting) {
    const flags = UserSettingsUtils.computeFlags(controlledSetting);
    cResult[0] = controlledSetting;
    cResult[1] = flags;
    let tmp6 = flags;
    const tmpResult = UserSettingsUtils;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6.mutualFriends;
}) : (function useFriendRequestsMutualFriendsSettingValue() {
  const selectedTeenId = controlledSetting(7713).useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = controlledSetting(14903).ParentalControlledFriendSourceFlags;
  controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
  const items = [controlledSetting];
  return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).mutualFriends;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IqlCSq);
  },
  parent: fn(7966).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendRequestsMutualFriendsSettingValue() {
    const cResult = c.c(2);
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
    const controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    if (cResult[0] !== controlledSetting) {
      const flags = UserSettingsUtils.computeFlags(controlledSetting);
      cResult[0] = controlledSetting;
      cResult[1] = flags;
      let tmp6 = flags;
      const tmpResult = UserSettingsUtils;
    } else {
      tmp6 = cResult[1];
    }
    return tmp6.mutualFriends;
  }) : (function useFriendRequestsMutualFriendsSettingValue() {
    const selectedTeenId = controlledSetting(7713).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(14903).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).mutualFriends;
  }),
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
        addFlagResult = obj.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
      }
      const result = ParentalControlledFriendSourceFlags2.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualFriendsSetting.tsx");

export default toggle;