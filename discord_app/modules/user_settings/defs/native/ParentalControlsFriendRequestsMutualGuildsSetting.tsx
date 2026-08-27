// discord_app/modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualGuildsSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import hasFlagAll from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import result2 from "../../family_center/ParentalControlledUserSettings.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../parent_tools/FamilyCenterStore.tsx";
import { FriendSourceFlags } from "../../../../Constants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.mozb8f);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualGuildsSettingValue() {
    const selectedTeenId = controlledSetting(8699).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(14380).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return React.useMemo(() => controlledSetting(closure_1_2[6]).computeFlags(controlledSetting), items).mutualGuilds;
  },
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = result2.ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.getControlledSetting(selectedTeenId);
      const ParentalControlledFriendSourceFlags2 = result2.ParentalControlledFriendSourceFlags;
      const obj = hasFlagAll;
      if (arg0) {
        let addFlagResult = obj.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS);
      } else {
        addFlagResult = obj.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
      }
      const result = ParentalControlledFriendSourceFlags2.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualGuildsSetting.tsx");

export default createToggle;