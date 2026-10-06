// discord_app/modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useSelectedTeen from "../../../parent_tools/hooks/useSelectedTeen.tsx";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import react from "../../../../../_runtime/00019_react.js";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";
import Constants from "../../../../Constants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AllFriendSourceFlags: closure_4, FriendSourceFlags: hasOwnProperty } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp6;
      const obj = react2;
      const cResult = obj.c(2);
      const obj2 = useSelectedTeen;
      const selectedTeenId = obj2.useSelectedTeenId();
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
      if (cResult[0] !== controlledSetting) {
        const tmpResult = UserSettingsUtils;
        const flags = tmpResult.computeFlags(controlledSetting);
        cResult[0] = controlledSetting;
        cResult[1] = flags;
        tmp6 = flags;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6.all;
    }
  : () => {
      let controlledSetting;
      let obj = controlledSetting(8330);
      const selectedTeenId = obj.useSelectedTeenId();
      const ParentalControlledFriendSourceFlags = controlledSetting(14642).ParentalControlledFriendSourceFlags;
      controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
      const items = [controlledSetting];
      return react.useMemo(() => {
        const obj = UserSettingsUtils;
        return obj.computeFlags(controlledSetting);
      }, items).all;
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.mGr3CX);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp3,
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let tmp7;
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const updateControlledSetting = ParentalControlledFriendSourceFlags.updateControlledSetting;
      if (arg0) {
        tmp7 = React3;
      } else {
        tmp7 = React3 & ~hasOwnProperty.NO_RELATION;
      }
      const result = updateControlledSetting(selectedTeenId, tmp7);
    }
  },
  unsearchable: true,
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx",
);

export default toggle;
