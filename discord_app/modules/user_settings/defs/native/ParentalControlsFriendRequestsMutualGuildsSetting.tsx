// discord_app/modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualGuildsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import FlagUtilsAll from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import useSelectedTeen from "../../../parent_tools/hooks/useSelectedTeen.tsx";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";

require = fn;
const FriendSourceFlags = fn(1085).FriendSourceFlags;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFriendRequestsMutualGuildsSettingValue() {
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
      return tmp6.mutualGuilds;
    }
  : function useFriendRequestsMutualGuildsSettingValue() {
      const selectedTeenId = controlledSetting(7722).useSelectedTeenId();
      const ParentalControlledFriendSourceFlags = controlledSetting(15015).ParentalControlledFriendSourceFlags;
      controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
      const items = [controlledSetting];
      return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).mutualGuilds;
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mozb8f);
  },
  parent: fn(7974).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useFriendRequestsMutualGuildsSettingValue() {
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
        return tmp6.mutualGuilds;
      }
    : function useFriendRequestsMutualGuildsSettingValue() {
        const selectedTeenId = controlledSetting(7722).useSelectedTeenId();
        const ParentalControlledFriendSourceFlags = controlledSetting(15015).ParentalControlledFriendSourceFlags;
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
        addFlagResult = obj.removeFlags(
          controlledSetting,
          FriendSourceFlags.MUTUAL_GUILDS,
          FriendSourceFlags.NO_RELATION,
        );
      }
      const result = ParentalControlledFriendSourceFlags2.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  },
  unsearchable: true,
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualGuildsSetting.tsx",
);

export default toggle;
