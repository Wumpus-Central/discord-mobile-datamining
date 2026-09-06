// discord_app/modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";

require = fn;
const Constants = fn(1074);
({ AllFriendSourceFlags: closure_4, FriendSourceFlags: hasOwnProperty } = Constants);
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mGr3CX);
  },
  parent: fn(7975).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const selectedTeenId = controlledSetting(8647).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(14825).ParentalControlledFriendSourceFlags;
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
  unsearchable: true,
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx",
);

export default SettingBuilders;
