// discord_app/modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import DefultGuildsRestrictedSetting from "../../privacy_and_safety/DefultGuildsRestrictedSetting.tsx";
import useAllowFriendsFromMutualGuildsOnly from "../../content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const UserSettingsSafetySelectedGuildStore = fn(15869);
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: hasOwnProperty } =
  UserSettingsSafetySelectedGuildStore);
let closure_6 = fn(11469).GUILD_SELECT_ALL_SERVERS_OPTION_ID;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const allowFriendsFromMutualGuildsOnly = useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (allowFriendsFromMutualGuildsOnly) {
      let stringResult = string(t.PMsfcH);
    } else {
      stringResult = string(t.RAQUSN);
    }
    return stringResult;
  },
  useDescription() {
    const allowFriendsFromMutualGuildsOnly = useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
    if (hasOwnProperty().selectedGuildId === closure_6) {
      const intl2 = util.intl;
      const string2 = intl2.string;
      let XXGmuB = util.t;
      if (allowFriendsFromMutualGuildsOnly) {
        XXGmuB = XXGmuB.XXGmuB;
        let string2Result = string2(XXGmuB);
      } else {
        string2Result = string2(XXGmuB.wbYDfT);
      }
    } else {
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (allowFriendsFromMutualGuildsOnly) {
        let stringResult = string(t.F9WY3f);
      } else {
        stringResult = string(t.G7c3Xo);
      }
      return stringResult;
    }
  },
  parent: fn(7975).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let tmp2 = !setting.includes(selectedGuildId);
    if (selectedGuildId === closure_6) {
      tmp2 = tmp;
    }
    return tmp2;
  },
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const tmp = closure_4();
    if (tmp === closure_6) {
      _require = !arg0;
      let obj = {
        title: null,
        body: null,
        confirmText: null,
        cancelText: null,
        confirmColor: null,
        onConfirm: null,
        onCancel: null,
      };
      const intl = require("util").intl;
      obj.title = intl.string(require("util").t.Hq4ApA);
      const intl2 = require("util").intl;
      obj.body = intl2.string(require("util").t.qTCYun);
      const intl3 = require("util").intl;
      obj.confirmText = intl3.string(require("util").t.p89ACt);
      const intl4 = require("util").intl;
      obj.cancelText = intl4.string(require("util").t.gm1Vej);
      obj.confirmColor = common_AlertDefault.Colors.RED;
      obj.onConfirm = function onConfirm() {
        const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
        DefaultGuildsRestrictedV2.updateSetting(closure_0);
        const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
        if (closure_0) {
          let guildIds = GuildStore.getGuildIds();
        } else {
          guildIds = [];
        }
        RestrictedGuildIds.updateSetting(guildIds);
      };
      obj.onCancel = function onCancel() {
        const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
        DefaultGuildsRestrictedV2.updateSetting(closure_0);
      };
      AlertActionCreatorsDefault.show(obj);
    } else {
      obj = require("UserSettingsUtils");
      const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(tmp);
      } else {
        sanitizedRestrictedGuilds.add(tmp);
      }
      let RestrictedGuildIds = require("UserSettings").RestrictedGuildIds;
      const _Array = Array;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
    }
  },
  useIsDisabled() {
    let isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
    if (isParentallyControlled) {
      isParentallyControlled = tmp2 === closure_6;
    }
    return isParentallyControlled;
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx");

export default SettingBuilders;
