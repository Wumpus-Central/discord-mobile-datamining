// discord_app/modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualFriendsSetting.tsx
import noop from "noop";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import { FriendSourceFlags } from "ME";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { result } from "../../family_center/ParentalControlledUserSettings.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.IqlCSq);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    const selectedTeenId = controlledSetting(7261).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(13975).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return React.useMemo(() => controlledSetting(outer1_2[6]).computeFlags(controlledSetting), items).mutualFriends;
  },
  onValueChange: function onFriendRequestsMutualFriendsSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = result /* result */.ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.getControlledSetting(selectedTeenId);
      const ParentalControlledFriendSourceFlags2 = result /* result */.ParentalControlledFriendSourceFlags;
      const obj = importAll(1384);
      if (arg0) {
        let addFlagResult = obj.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS);
      } else {
        addFlagResult = obj.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
      }
      const result = ParentalControlledFriendSourceFlags2.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualFriendsSetting.tsx");

export default createToggle;