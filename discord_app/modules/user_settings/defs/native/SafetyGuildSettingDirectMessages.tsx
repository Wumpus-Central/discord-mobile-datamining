// discord_app/modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import DefultGuildsRestrictedSetting from "../../privacy_and_safety/DefultGuildsRestrictedSetting.tsx";
import useAllowFriendsFromMutualGuildsOnly from "../../content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const UserSettingsSafetySelectedGuildStore = fn(16074);
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: hasOwnProperty } =
  UserSettingsSafetySelectedGuildStore);
let closure_6 = fn(11263).GUILD_SELECT_ALL_SERVERS_OPTION_ID;
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsDisabled() {
      let isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
      if (isParentallyControlled) {
        isParentallyControlled = tmp2 === closure_6;
      }
      return isParentallyControlled;
    }
  : function useIsDisabled() {
      let isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
      if (isParentallyControlled) {
        isParentallyControlled = tmp2 === closure_6;
      }
      return isParentallyControlled;
    };
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useValue() {
      const cResult = c.c(3);
      const selectedGuildId = hasOwnProperty().selectedGuildId;
      let tmp2 = !DefultGuildsRestrictedSetting.useDefaultGuildsRestricted();
      const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
      const setting = RestrictedGuildIds.useSetting();
      if (cResult[0] === selectedGuildId) {
        if (cResult[1] === setting) {
          let tmp3 = cResult[2];
        }
        if (selectedGuildId !== closure_6) {
          tmp2 = !tmp3;
        }
        return tmp2;
      }
      const hasItem = setting.includes(selectedGuildId);
      cResult[0] = selectedGuildId;
      cResult[1] = setting;
      cResult[2] = hasItem;
      tmp3 = hasItem;
    }
  : function useValue() {
      const selectedGuildId = hasOwnProperty().selectedGuildId;
      const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
      const setting = RestrictedGuildIds.useSetting();
      let tmp2 = !setting.includes(selectedGuildId);
      if (selectedGuildId === closure_6) {
        tmp2 = tmp;
      }
      return tmp2;
    };
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDescription() {
      const cResult = c.c(4);
      const allowFriendsFromMutualGuildsOnly =
        useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
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
        cResult[0] = allowFriendsFromMutualGuildsOnly;
        cResult[1] = string2Result;
      } else if (cResult[2] !== allowFriendsFromMutualGuildsOnly) {
        const intl = util.intl;
        const string = intl.string;
        let F9WY3f = util.t;
        if (allowFriendsFromMutualGuildsOnly) {
          F9WY3f = F9WY3f.F9WY3f;
          let stringResult = string(F9WY3f);
        } else {
          stringResult = string(F9WY3f.G7c3Xo);
        }
        cResult[2] = allowFriendsFromMutualGuildsOnly;
        cResult[3] = stringResult;
      } else {
        return cResult[3];
      }
    }
  : function useDescription() {
      const allowFriendsFromMutualGuildsOnly =
        useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
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
    };
const SettingBuilders = fn(11262);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTitle() {
      const cResult = c.c(2);
      const allowFriendsFromMutualGuildsOnly =
        useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
      if (cResult[0] !== allowFriendsFromMutualGuildsOnly) {
        const intl = util.intl;
        const string = intl.string;
        let PMsfcH = util.t;
        if (allowFriendsFromMutualGuildsOnly) {
          PMsfcH = PMsfcH.PMsfcH;
          let stringResult = string(PMsfcH);
        } else {
          stringResult = string(PMsfcH.RAQUSN);
        }
        cResult[0] = allowFriendsFromMutualGuildsOnly;
        cResult[1] = stringResult;
      } else {
        return cResult[1];
      }
    }
  : function useTitle() {
      const allowFriendsFromMutualGuildsOnly =
        useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (allowFriendsFromMutualGuildsOnly) {
        let stringResult = string(t.PMsfcH);
      } else {
        stringResult = string(t.RAQUSN);
      }
      return stringResult;
    };
const toggle = SettingBuilders.createToggle({
  useTitle: ReactCompilerGating.isReactCompilerEnabled()
    ? function useTitle() {
        const cResult = c.c(2);
        const allowFriendsFromMutualGuildsOnly =
          useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
        if (cResult[0] !== allowFriendsFromMutualGuildsOnly) {
          const intl = util.intl;
          const string = intl.string;
          let PMsfcH = util.t;
          if (allowFriendsFromMutualGuildsOnly) {
            PMsfcH = PMsfcH.PMsfcH;
            let stringResult = string(PMsfcH);
          } else {
            stringResult = string(PMsfcH.RAQUSN);
          }
          cResult[0] = allowFriendsFromMutualGuildsOnly;
          cResult[1] = stringResult;
        } else {
          return cResult[1];
        }
      }
    : function useTitle() {
        const allowFriendsFromMutualGuildsOnly =
          useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
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
  useDescription: tmp5,
  parent: fn(7966).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: tmp4,
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const tmp = closure_4();
    if (tmp === closure_6) {
      _require = !arg0;
      const obj2 = {
        title: null,
        body: null,
        confirmText: null,
        cancelText: null,
        confirmColor: null,
        onConfirm: null,
        onCancel: null,
        isDismissable: false,
      };
      const intl = require("util").intl;
      obj2.title = intl.string(require("util").t.Hq4ApA);
      const intl2 = require("util").intl;
      obj2.body = intl2.string(require("util").t.qTCYun);
      const intl3 = require("util").intl;
      obj2.confirmText = intl3.string(require("util").t.p89ACt);
      const intl4 = require("util").intl;
      obj2.cancelText = intl4.string(require("util").t.gm1Vej);
      obj2.confirmColor = common_AlertDefault.Colors.RED;
      obj2.onConfirm = function onConfirm() {
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
      obj2.onCancel = function onCancel() {
        const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
        DefaultGuildsRestrictedV2.updateSetting(closure_0);
      };
      AlertActionCreatorsDefault.show(obj2);
    } else {
      const sanitizedRestrictedGuilds = require("UserSettingsUtils").getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(tmp);
      } else {
        sanitizedRestrictedGuilds.add(tmp);
      }
      let RestrictedGuildIds = require("UserSettings").RestrictedGuildIds;
      const _Array = Array;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      const obj = require("UserSettingsUtils");
    }
  },
  useIsDisabled: tmp3,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx");

export default toggle;
