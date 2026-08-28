// discord_app/modules/user_settings/defs/native/FriendRequestsMutualGuildsSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import hasFlagAll from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import useParentalControlledExplicitContentSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { FriendSourceFlags } from "../../../../Constants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.mozb8f);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsMutualGuildsSettingValue() {
    const FriendSourceFlagsSetting = setting(4135).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return React.useMemo(() => setting(closure_1_2[5]).computeFlags(setting), items).mutualGuilds;
  },
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = explicitContentFromProto.FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.getSetting();
    const FriendSourceFlagsSetting2 = explicitContentFromProto.FriendSourceFlagsSetting;
    const obj = hasFlagAll;
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, FriendSourceFlags.MUTUAL_GUILDS);
    } else {
      addFlagResult = obj.removeFlags(setting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
    }
    FriendSourceFlagsSetting2.updateSetting(addFlagResult);
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualGuildsSetting.tsx");

export default createToggle;