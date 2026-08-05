// discord_app/modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { GUILD_SELECT_ALL_SERVERS_OPTION_ID as closure_6 } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import createToggle from "createToggle";

let c4;
let c5;
const require = arg1;
({ getSelectedGuildId: c4, useUserSafetySettingsSelectedGuildStore: c5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
createToggle = {
  useTitle() {
    const allowFriendsFromMutualGuildsOnly = require("../../content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx") /* useAllowFriendsFromMutualGuildsOnly */.useAllowFriendsFromMutualGuildsOnly();
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const string = intl.string;
    const t = require("../../../../intl/index.native.tsx") /* getSystemLocale */.t;
    if (allowFriendsFromMutualGuildsOnly) {
      let stringResult = string(t.PMsfcH);
    } else {
      stringResult = string(t.RAQUSN);
    }
    return stringResult;
  },
  useDescription() {
    const allowFriendsFromMutualGuildsOnly = require("../../content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx") /* useAllowFriendsFromMutualGuildsOnly */.useAllowFriendsFromMutualGuildsOnly();
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
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = callback2().selectedGuildId;
    const obj = require("../../privacy_and_safety/DefultGuildsRestrictedSetting.tsx") /* useDefaultGuildsRestricted */;
    const RestrictedGuildIds = require("../../UserSettings.tsx") /* explicitContentFromProto */.RestrictedGuildIds;
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
      const intl = _require("../../../../intl/index.native.tsx").intl;
      obj[0] = intl.string(_require("../../../../intl/index.native.tsx").t.Hq4ApA);
      const intl2 = _require("../../../../intl/index.native.tsx").intl;
      obj[1] = intl2.string(_require("../../../../intl/index.native.tsx").t.qTCYun);
      const intl3 = _require("../../../../intl/index.native.tsx").intl;
      obj[2] = intl3.string(_require("../../../../intl/index.native.tsx").t.p89ACt);
      const intl4 = _require("../../../../intl/index.native.tsx").intl;
      obj[3] = intl4.string(_require("../../../../intl/index.native.tsx").t.gm1Vej);
      obj[4] = require("../../../../components_native/common/Alert.tsx").Colors.RED;
      obj[5] = function onConfirm() {
        const DefaultGuildsRestrictedV2 = callback(outer1_2[6]).DefaultGuildsRestrictedV2;
        DefaultGuildsRestrictedV2.updateSetting(callback);
        const RestrictedGuildIds = callback(outer1_2[6]).RestrictedGuildIds;
        if (callback) {
          let guildIds = outer1_3.getGuildIds();
        } else {
          guildIds = [];
        }
        RestrictedGuildIds.updateSetting(guildIds);
      };
      obj[6] = function onCancel() {
        const DefaultGuildsRestrictedV2 = callback(outer1_2[6]).DefaultGuildsRestrictedV2;
        DefaultGuildsRestrictedV2.updateSetting(callback);
      };
      require("../../../../actions/AlertActionCreators.tsx").show(obj);
      const obj3 = require("../../../../actions/AlertActionCreators.tsx");
    } else {
      obj = _require("../../../../utils/UserSettingsUtils.tsx");
      const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(tmp);
      } else {
        sanitizedRestrictedGuilds.add(tmp);
      }
      let RestrictedGuildIds = _require("../../UserSettings.tsx").RestrictedGuildIds;
      const _Array = Array;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      const tmp2 = _require;
    }
  },
  useIsDisabled() {
    let isParentallyControlled = require("../../../parent_tools/hooks/useParentalControlSettings.tsx") /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
    if (isParentallyControlled) {
      isParentallyControlled = tmp2 === closure_6;
    }
    return isParentallyControlled;
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx");

export default createToggle;