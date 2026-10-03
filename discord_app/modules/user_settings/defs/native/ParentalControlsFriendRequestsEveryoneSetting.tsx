// === Module 15801: ParentalControlsFriendRequestsEveryoneSetting ===

// Module 15801 (ParentalControlsFriendRequestsEveryoneSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6491 */;
import useSelectedTeen from "useSelectedTeen" /* 8297 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14622 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;

require = fn;
const Constants = fn(1085);
({ AllFriendSourceFlags: closure_4, FriendSourceFlags: hasOwnProperty } = Constants);
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
  return tmp6.all;
}) : (() => {
  const selectedTeenId = controlledSetting(8297).useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = controlledSetting(14622).ParentalControlledFriendSourceFlags;
  controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
  const items = [controlledSetting];
  return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).all;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mGr3CX);
  },
  parent: fn(7634).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
    return tmp6.all;
  }) : (() => {
    const selectedTeenId = controlledSetting(8297).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(14622).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).all;
  }),
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default toggle;