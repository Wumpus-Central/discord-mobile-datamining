// === Module 14334: toggle ===

// Module 14334 (toggle)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import hasFlagAll from "hasFlag" /* 1403 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14181 */;
import noop from "noop" /* 19 */;
import { FriendSourceFlags } from "ME" /* 676 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.IqlCSq);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    const FriendSourceFlagsSetting = setting(4066).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return React.useMemo(() => setting(dependencyMap[5]).computeFlags(setting), items).mutualFriends;
  },
  onValueChange: function onFriendRequestsMutualFriendsSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = explicitContentFromProto.FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.getSetting();
    const FriendSourceFlagsSetting2 = explicitContentFromProto.FriendSourceFlagsSetting;
    const obj = hasFlagAll;
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, FriendSourceFlags.MUTUAL_FRIENDS);
    } else {
      addFlagResult = obj.removeFlags(setting, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
    }
    FriendSourceFlagsSetting2.updateSetting(addFlagResult);
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualFriendsSetting.tsx");

export default createToggle;