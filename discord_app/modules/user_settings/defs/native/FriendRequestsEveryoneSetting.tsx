// discord_app/modules/user_settings/defs/native/FriendRequestsEveryoneSetting.tsx
import noop from "noop";
import ME from "ME";
import createToggle from "createToggle";

let c3;
let c4;
const require = arg1;
({ AllFriendSourceFlags: c3, FriendSourceFlags: c4 } = ME);
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.mGr3CX);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const FriendSourceFlagsSetting = setting(3958).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return React.useMemo(() => setting(outer1_1[4]).computeFlags(setting), items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = require("../../UserSettings.tsx") /* explicitContentFromProto */.FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = tmp;
    } else {
      tmp3 = tmp & ~constants.NO_RELATION;
    }
    FriendSourceFlagsSetting.updateSetting(tmp3);
  },
  useIsDisabled() {
    return require("../../../parent_tools/hooks/useParentalControlSettings.tsx") /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsEveryoneSetting.tsx");

export default createToggle;