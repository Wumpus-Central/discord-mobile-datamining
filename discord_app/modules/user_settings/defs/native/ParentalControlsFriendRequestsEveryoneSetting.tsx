// === Module 18270: ParentalControlsFriendRequestsEveryoneSetting ===

// Module 18270 (ParentalControlsFriendRequestsEveryoneSetting)
import util from "util" /* 1113 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7227 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17039 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17043 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7791 */;

require = fn;
const Constants = fn(1072);
({ AllFriendSourceFlags: closure_4, FriendSourceFlags: hasOwnProperty } = Constants);
const SettingBuilders = fn(11685);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mGr3CX);
  },
  parent: fn(8503).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const selectedTeenId = controlledSetting(8442).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(17039).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    items = [controlledSetting];
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
      FamilyCenterSaveErrorUtils.showToastIfSaveFails(ParentalControlledFriendSourceFlags.updateControlledSetting(selectedTeenId, tmp7));
    }
  },
  unsearchable: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default toggle;