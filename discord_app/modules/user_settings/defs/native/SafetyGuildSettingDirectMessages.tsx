// discord_app/modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import setDefault from "../../../../actions/AlertActionCreators.tsx";
import componentDidMountDefault from "../../../../components_native/common/Alert.tsx";
import useParentalControlledExplicitContentSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import useDefaultGuildsRestricted from "../../privacy_and_safety/DefultGuildsRestrictedSetting.tsx";
import useAllowFriendsFromMutualGuildsOnly from "../../content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx";
import closure_3 from "../../../../stores/GuildStore.tsx";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "../../privacy_and_safety/UserSettingsSafetySelectedGuildStore.tsx";
import { GUILD_SELECT_ALL_SERVERS_OPTION_ID as closure_6 } from "../../../settings/native/renderer/SettingRendererConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { getSanitizedRestrictedGuilds } from "../../../../utils/UserSettingsUtils.tsx";

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
      const intl = require("../../../../intl/index.native.tsx").intl;
      obj[0] = intl.string(require("../../../../intl/index.native.tsx").t.Hq4ApA);
      const intl2 = require("../../../../intl/index.native.tsx").intl;
      obj[1] = intl2.string(require("../../../../intl/index.native.tsx").t.qTCYun);
      const intl3 = require("../../../../intl/index.native.tsx").intl;
      obj[2] = intl3.string(require("../../../../intl/index.native.tsx").t.p89ACt);
      const intl4 = require("../../../../intl/index.native.tsx").intl;
      obj[3] = intl4.string(require("../../../../intl/index.native.tsx").t.gm1Vej);
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
      obj = getSanitizedRestrictedGuilds;
      const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(tmp);
      } else {
        sanitizedRestrictedGuilds.add(tmp);
      }
      let RestrictedGuildIds = require("../../UserSettings.tsx").RestrictedGuildIds;
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