// === Module 15017: toggle ===

// Module 15017 (toggle)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import componentDidMountDefault from "componentDidMount" /* 4763 */;
import obj132Default from "obj132" /* 4827 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14181 */;
import useDefaultGuildsRestricted from "useDefaultGuildsRestricted" /* 15018 */;
import useAllowFriendsFromMutualGuildsOnly from "useAllowFriendsFromMutualGuildsOnly" /* 15019 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 15011 */;
import { GUILD_SELECT_ALL_SERVERS_OPTION_ID as closure_6 } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 10670 */;
import "createToggle";

require = fn;
({ getSelectedGuildId: c4, useUserSafetySettingsSelectedGuildStore: c5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
let createToggle = {
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
      const intl2 = getSystemLocale.intl;
      const string2 = intl2.string;
      let XXGmuB = getSystemLocale.t;
      if (allowFriendsFromMutualGuildsOnly) {
        XXGmuB = XXGmuB.XXGmuB;
        let string2Result = string2(XXGmuB);
      } else {
        string2Result = string2(XXGmuB.wbYDfT);
      }
    } else {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const t = getSystemLocale.t;
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
        const DefaultGuildsRestrictedV2 = callback(dependencyMap[6]).DefaultGuildsRestrictedV2;
        DefaultGuildsRestrictedV2.updateSetting(callback);
        const RestrictedGuildIds = callback(dependencyMap[6]).RestrictedGuildIds;
        if (callback) {
          let guildIds = closure_1_3.getGuildIds();
        } else {
          guildIds = [];
        }
        RestrictedGuildIds.updateSetting(guildIds);
      };
      obj[6] = function onCancel() {
        const DefaultGuildsRestrictedV2 = callback(dependencyMap[6]).DefaultGuildsRestrictedV2;
        DefaultGuildsRestrictedV2.updateSetting(callback);
      };
      obj132Default.show(obj);
    } else {
      obj = _require(7357);
      const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(tmp);
      } else {
        sanitizedRestrictedGuilds.add(tmp);
      }
      let RestrictedGuildIds = _require(4066).RestrictedGuildIds;
      const _Array = Array;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
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
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx");

export default createToggle;