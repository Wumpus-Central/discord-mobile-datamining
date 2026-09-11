// === Module 15961: ParentalControlsFriendRequestsEveryoneSetting ===

// Module 15961 (ParentalControlsFriendRequestsEveryoneSetting)
import util from "util" /* 1114 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7068 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14880 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7610 */;

require = fn;
const Constants = fn(1074);
({ AllFriendSourceFlags: closure_4, FriendSourceFlags: hasOwnProperty } = Constants);
fn(11562);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mGr3CX);
  },
  parent: fn(8049).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const selectedTeenId = controlledSetting(8738).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(14880).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      if (arg0) {
        let tmp7 = React4;
      } else {
        tmp7 = React4 & ~constants.NO_RELATION;
      }
      const result = ParentalControlledFriendSourceFlags.updateControlledSetting(selectedTeenId, tmp7);
    }
  },
  unsearchable: true
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default SettingBuilders;