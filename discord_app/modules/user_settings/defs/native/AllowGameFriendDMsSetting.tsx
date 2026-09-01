// === Module 15483: toggle ===

// Module 15483 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7884 */;
import useIsAllowGameFriendDMsSettingVisible from "useIsAllowGameFriendDMsSettingVisible" /* 15484 */;
import createToggle from "createToggle" /* 11068 */;

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
const obj = {
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
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AllowGameFriendDMsSetting.tsx");

export default toggle;