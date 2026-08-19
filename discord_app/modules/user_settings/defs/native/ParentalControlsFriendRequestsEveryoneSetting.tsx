// === Module 15036: toggle ===

// Module 15036 (toggle)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import result2 from "result" /* 14182 */;
import noop from "noop" /* 19 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;
import ME from "ME" /* 676 */;
import "createToggle";

require = fn;
({ AllFriendSourceFlags: c4, FriendSourceFlags: c5 } = ME);
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.mGr3CX);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const selectedTeenId = controlledSetting(7623).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(14182).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return React.useMemo(() => controlledSetting(dependencyMap[6]).computeFlags(controlledSetting), items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = result2.ParentalControlledFriendSourceFlags;
      if (arg0) {
        let tmp7 = closure_4;
      } else {
        tmp7 = closure_4 & ~constants.NO_RELATION;
      }
      const result = ParentalControlledFriendSourceFlags.updateControlledSetting(selectedTeenId, tmp7);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default createToggle;