// === Module 15720: showMessageRequestRestrictionModal ===

// Module 15720 (showMessageRequestRestrictionModal)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import setDefault from "set" /* 4858 */;
import componentDidMountDefault from "componentDidMount" /* 4948 */;
import getSanitizedRestrictedGuilds from "getSanitizedRestrictedGuilds" /* 6252 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 8701 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 8703 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14668 */;
import useDefaultGuildsRestricted from "useDefaultGuildsRestricted" /* 15718 */;
import shouldAgeVerifyForDMDefaultOff from "shouldAgeVerifyForDMDefaultOff" /* 15721 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 15711 */;
import { GUILD_SELECT_ALL_SERVERS_OPTION_ID as closure_6 } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 11293 */;
import createToggle from "createToggle" /* 11292 */;

require = arg1;
function showMessageRequestRestrictionModal(arg0) {
  const _require = arg0;
  let obj = setDefault;
  obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null, onCancel: null };
  const intl = _require(1233).intl;
  obj[0] = intl.string(_require(1233).t.yAfu1p);
  const intl2 = _require(1233).intl;
  obj[1] = intl2.string(_require(1233).t.Ry2z74);
  const intl3 = _require(1233).intl;
  obj[2] = intl3.string(_require(1233).t.p89ACt);
  const intl4 = _require(1233).intl;
  obj[3] = intl4.string(_require(1233).t.gm1Vej);
  obj[4] = componentDidMountDefault.Colors.RED;
  obj[5] = function onConfirm() {
    const MessageRequestRestrictedDefault = callback(closure_1_2[4]).MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(callback);
    const MessageRequestRestrictedGuildIds = callback(closure_1_2[4]).MessageRequestRestrictedGuildIds;
    if (callback) {
      let guildIds = closure_1_3.getGuildIds();
    } else {
      guildIds = [];
    }
    MessageRequestRestrictedGuildIds.updateSetting(guildIds);
  };
  obj[6] = function onCancel() {
    const MessageRequestRestrictedDefault = callback(closure_1_2[4]).MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(callback);
  };
  obj.show(obj);
}
({ getSelectedGuildId: c4, useUserSafetySettingsSelectedGuildStore: c5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3o2ojh"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.o5fjz6);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = callback2().selectedGuildId;
    const defaultGuildsRestricted = useDefaultGuildsRestricted.useDefaultGuildsRestricted();
    const selectedGuildId2 = callback2().selectedGuildId;
    const RestrictedGuildIds = explicitContentFromProto.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId2);
    const obj = useDefaultGuildsRestricted;
    const tmp6 = selectedGuildId2 !== closure_6 || !useParentalControlledExplicitContentSettings.useIsParentallyControlled();
    let tmp7 = !tmp6;
    if (tmp6) {
      if (selectedGuildId2 === tmp5) {
        hasItem = defaultGuildsRestricted;
      }
      tmp7 = hasItem;
    }
    const MessageRequestRestrictedDefault = tmp(4166).MessageRequestRestrictedDefault;
    const obj3 = useParentalControlledExplicitContentSettings;
    const MessageRequestRestrictedGuildIds = tmp(4166).MessageRequestRestrictedGuildIds;
    const setting1 = MessageRequestRestrictedGuildIds.useSetting();
    let tmp9 = !setting1.includes(selectedGuildId);
    let tmp10 = !tmp7;
    if (!tmp7) {
      if (selectedGuildId === tmp5) {
        tmp9 = tmp8;
      }
      tmp10 = tmp9;
    }
    return tmp10;
  },
  useIsDisabled() {
    const defaultGuildsRestricted = useDefaultGuildsRestricted.useDefaultGuildsRestricted();
    const selectedGuildId = callback2().selectedGuildId;
    const RestrictedGuildIds = explicitContentFromProto.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId);
    const obj = useDefaultGuildsRestricted;
    let tmp4 = selectedGuildId !== closure_6;
    if (!tmp4) {
      tmp4 = !obj3.useIsParentallyControlled();
    }
    let tmp5 = !tmp4;
    if (tmp4) {
      if (selectedGuildId === closure_6) {
        hasItem = defaultGuildsRestricted;
      }
      tmp5 = hasItem;
    }
    return tmp5;
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    if (!arg0) {
      let obj = shouldAgeVerifyForDMDefaultOff;
      if (obj.shouldAgeVerifyForDMDefaultOff()) {
        obj = { entryPoint: null };
        obj[0] = AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
        const result = openIncodeAgeVerificationModalDefault.showAgeVerificationGetStartedModal(obj);
        const obj2 = openIncodeAgeVerificationModalDefault;
      }
    }
    const tmp5 = callback();
    if (tmp5 === closure_6) {
      showMessageRequestRestrictionModal(!arg0);
    } else {
      const sanitizedMessageRequestRestrictedGuilds = getSanitizedRestrictedGuilds.getSanitizedMessageRequestRestrictedGuilds();
      if (arg0) {
        sanitizedMessageRequestRestrictedGuilds.delete(tmp5);
      } else {
        sanitizedMessageRequestRestrictedGuilds.add(tmp5);
      }
      const MessageRequestRestrictedGuildIds = explicitContentFromProto.MessageRequestRestrictedGuildIds;
      const _Array = Array;
      MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
      const obj4 = getSanitizedRestrictedGuilds;
      const tmp6 = require;
    }
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx");

export default createToggle;
export { showMessageRequestRestrictionModal };