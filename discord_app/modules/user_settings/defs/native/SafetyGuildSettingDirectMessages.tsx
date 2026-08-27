// === Module 15254: toggle ===

// Module 15254 (toggle)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import setDefault from "set" /* 4809 */;
import componentDidMountDefault from "componentDidMount" /* 4899 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14379 */;
import useDefaultGuildsRestricted from "useDefaultGuildsRestricted" /* 15255 */;
import useAllowFriendsFromMutualGuildsOnly from "useAllowFriendsFromMutualGuildsOnly" /* 15256 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 15248 */;
import { GUILD_SELECT_ALL_SERVERS_OPTION_ID as closure_6 } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 10989 */;
import createToggle from "createToggle" /* 10988 */;

require = arg1;
({ getSelectedGuildId: c4, useUserSafetySettingsSelectedGuildStore: c5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
createToggle = {
  useTitle() {
    const allowFriendsFromMutualGuildsOnly = useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
    const intl = getSystemLocale.intl;
    const string = intl.string;
    const t = getSystemLocale.t;
    if (allowFriendsFromMutualGuildsOnly) {
      let stringResult = string(t.PMsfcH);
    } else {
      stringResult = string(t.RAQUSN);
    }
    return stringResult;
  },
  useDescription() {
    const allowFriendsFromMutualGuildsOnly = useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
    if (callback2().selectedGuildId === closure_6) {
      const intl2 = tmp(1236).intl;
      const string2 = intl2.string;
      let XXGmuB = tmp(1236).t;
      if (allowFriendsFromMutualGuildsOnly) {
        XXGmuB = XXGmuB.XXGmuB;
        let string2Result = string2(XXGmuB);
      } else {
        string2Result = string2(XXGmuB.wbYDfT);
      }
    } else {
      const intl = tmp(1236).intl;
      const string = intl.string;
      const t = tmp(1236).t;
      if (allowFriendsFromMutualGuildsOnly) {
        let stringResult = string(t.F9WY3f);
      } else {
        stringResult = string(t.G7c3Xo);
      }
      return stringResult;
    }
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = callback2().selectedGuildId;
    const obj = useDefaultGuildsRestricted;
    const RestrictedGuildIds = explicitContentFromProto.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let tmp2 = !setting.includes(selectedGuildId);
    if (selectedGuildId === closure_6) {
      tmp2 = tmp;
    }
    return tmp2;
  },
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const tmp = callback();
    if (tmp === closure_6) {
      const _require = !arg0;
      let obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null, onCancel: null };
      const intl = _require(1236).intl;
      obj[0] = intl.string(_require(1236).t.Hq4ApA);
      const intl2 = _require(1236).intl;
      obj[1] = intl2.string(_require(1236).t.qTCYun);
      const intl3 = _require(1236).intl;
      obj[2] = intl3.string(_require(1236).t.p89ACt);
      const intl4 = _require(1236).intl;
      obj[3] = intl4.string(_require(1236).t.gm1Vej);
      obj[4] = componentDidMountDefault.Colors.RED;
      obj[5] = function onConfirm() {
        const DefaultGuildsRestrictedV2 = callback(closure_1_2[6]).DefaultGuildsRestrictedV2;
        DefaultGuildsRestrictedV2.updateSetting(callback);
        const RestrictedGuildIds = callback(closure_1_2[6]).RestrictedGuildIds;
        if (callback) {
          let guildIds = closure_1_3.getGuildIds();
        } else {
          guildIds = [];
        }
        RestrictedGuildIds.updateSetting(guildIds);
      };
      obj[6] = function onCancel() {
        const DefaultGuildsRestrictedV2 = callback(closure_1_2[6]).DefaultGuildsRestrictedV2;
        DefaultGuildsRestrictedV2.updateSetting(callback);
      };
      setDefault.show(obj);
      const obj3 = setDefault;
    } else {
      obj = _require(6194);
      const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(tmp);
      } else {
        sanitizedRestrictedGuilds.add(tmp);
      }
      let RestrictedGuildIds = _require(4134).RestrictedGuildIds;
      const _Array = Array;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      const tmp2 = _require;
    }
  },
  useIsDisabled() {
    let isParentallyControlled = useParentalControlledExplicitContentSettings.useIsParentallyControlled();
    if (isParentallyControlled) {
      isParentallyControlled = tmp2 === closure_6;
    }
    return isParentallyControlled;
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx");

export default createToggle;