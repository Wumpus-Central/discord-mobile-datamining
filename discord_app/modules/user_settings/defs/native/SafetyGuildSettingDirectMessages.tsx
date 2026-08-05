// discord_app/modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { GUILD_SELECT_ALL_SERVERS_OPTION_ID as closure_6 } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import createToggle from "createToggle";
import { set } from "../../../../actions/AlertActionCreators.tsx";
import { componentDidMount } from "../../../../components_native/common/Alert.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getSanitizedRestrictedGuilds } from "../../../../utils/UserSettingsUtils.tsx";
import { useParentalControlledExplicitContentSettings } from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import { useAllowFriendsFromMutualGuildsOnly } from "../../content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx";
import { useDefaultGuildsRestricted } from "../../privacy_and_safety/DefultGuildsRestrictedSetting.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";

let c4;
let c5;
const require = arg1;
({ getSelectedGuildId: c4, useUserSafetySettingsSelectedGuildStore: c5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
createToggle = {
  useTitle() {
    const allowFriendsFromMutualGuildsOnly = useAllowFriendsFromMutualGuildsOnly /* useAllowFriendsFromMutualGuildsOnly */.useAllowFriendsFromMutualGuildsOnly();
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const string = intl.string;
    const t = getSystemLocale /* getSystemLocale */.t;
    if (allowFriendsFromMutualGuildsOnly) {
      let stringResult = string(t.PMsfcH);
    } else {
      stringResult = string(t.RAQUSN);
    }
    return stringResult;
  },
  useDescription() {
    const allowFriendsFromMutualGuildsOnly = useAllowFriendsFromMutualGuildsOnly /* useAllowFriendsFromMutualGuildsOnly */.useAllowFriendsFromMutualGuildsOnly();
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
    const obj = useDefaultGuildsRestricted /* useDefaultGuildsRestricted */;
    const RestrictedGuildIds = explicitContentFromProto /* explicitContentFromProto */.RestrictedGuildIds;
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
      const intl = _getSystemLocale.intl;
      obj[0] = intl.string(_getSystemLocale.t.Hq4ApA);
      const intl2 = _getSystemLocale.intl;
      obj[1] = intl2.string(_getSystemLocale.t.qTCYun);
      const intl3 = _getSystemLocale.intl;
      obj[2] = intl3.string(_getSystemLocale.t.p89ACt);
      const intl4 = _getSystemLocale.intl;
      obj[3] = intl4.string(_getSystemLocale.t.gm1Vej);
      obj[4] = componentDidMount.Colors.RED;
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
      set.show(obj);
      const obj3 = set;
    } else {
      obj = _getSanitizedRestrictedGuilds;
      const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(tmp);
      } else {
        sanitizedRestrictedGuilds.add(tmp);
      }
      let RestrictedGuildIds = _explicitContentFromProto.RestrictedGuildIds;
      const _Array = Array;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      const tmp2 = _require;
    }
  },
  useIsDisabled() {
    let isParentallyControlled = useParentalControlledExplicitContentSettings /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
    if (isParentallyControlled) {
      isParentallyControlled = tmp2 === closure_6;
    }
    return isParentallyControlled;
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx");

export default createToggle;