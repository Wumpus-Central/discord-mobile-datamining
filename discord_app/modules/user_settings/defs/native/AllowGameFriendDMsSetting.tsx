// === Module 15027: toggle ===

// Module 15027 (toggle)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import useIsAllowGameFriendDMsSettingVisible from "useIsAllowGameFriendDMsSettingVisible" /* 15028 */;
import createToggle from "createToggle" /* 10669 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XpBObB);
  },
  parent: MobileUserSettings.MobileUserSettings.CONNECTED_GAMES,
  useValue: explicitContentFromProto.AllowGameFriendDmsInDiscord.useSetting,
  onValueChange: explicitContentFromProto.AllowGameFriendDmsInDiscord.updateSetting,
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.XpBObB)];
    return items;
  },
  usePredicate: useIsAllowGameFriendDMsSettingVisible.useIsAllowGameFriendDMsSettingVisible
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AllowGameFriendDMsSetting.tsx");

export default toggle;