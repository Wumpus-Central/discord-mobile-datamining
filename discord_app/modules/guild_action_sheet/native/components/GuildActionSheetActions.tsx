// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import UserSettings from "../../../user_settings/UserSettings.tsx";
import UserSettingsProtoActionCreators from "../../../user_settings/UserSettingsProtoActionCreators.tsx";
import _modDef2391 from "../../../game_organization_invites/GameOrganizationInvitesUntranslated.messages.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import GuildOnboardingConstants from "../../../guild_onboarding/native/GuildOnboardingConstants.tsx";
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import ConnectionsUtils from "../../../connections/ConnectionsUtils.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import TidaWebformExperimentDefault from "../../../guild/TidaWebformExperiment.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import useGuildOnboardingAvailableDefault from "../../../guild_onboarding/useGuildOnboardingAvailable.tsx";
import ChannelListState from "../../../guild_sidebar/ChannelListState.tsx";
import GuildTagConstants from "../../../guild_tag/GuildTagConstants.tsx";
import GuildAntiRaidTypes from "../../../guild_antiraid/GuildAntiRaidTypes.tsx";
import ReportModals from "../../../in_app_reports/ReportModals.tsx";
import useCanCreateAnEventDefault from "../../../guild_scheduled_events/useCanCreateAnEvent.tsx";
import GuildScheduledEventModalActionCreators from "../../../guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../../actions/native/CreateChannelModalActionCreators.tsx";
import DiscordTagDefault from "../../../user_profile/native/DiscordTag.tsx";
import useOpenProfileSettingsDefault from "../../../profile_customization/useOpenProfileSettings.tsx";
import ChannelCollapseActionCreatorsDefault from "../../../../actions/ChannelCollapseActionCreators.tsx";
import OptInOnboardingUtils from "../../../opt_in_channels/OptInOnboardingUtils.tsx";
import GuildRoleConnectionsModalActionCreators from "../../../connections/native/GuildRoleConnectionsModalActionCreators.tsx";
import useIsServerThemeAvailableForGuildDefault from "../../../premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx";
import markGuildsAsReadDefault from "../../../guild/markGuildsAsRead.tsx";
import GuildAntiRaidModalActionCreators from "../../../guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import NewChannelsStore from "../../../recent_channels/NewChannelsStore.tsx";
import UserSettingsProtoStore from "../../../user_settings/UserSettingsProtoStore.tsx";
import GuildRecord from "../../../../records/GuildRecord.tsx";
import GuildReadStateStore from "../../../../stores/GuildReadStateStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, hideActionSheetResult, obj1, openAlertResult;

let Fonts;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_21;
let closure_22;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function BrowseChannelsOption(guild) {
  let stringResult;
  guild = guild.guild;
  const tmp2 = useGuildOnboardingAvailableDefault(guild);
  let obj = guild(4704);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(
    guild(2036).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX,
  );
  let obj2 = guild(504);
  const items = [ReadStateStore];
  const stateFromStores = obj2.useStateFromStores(items, () =>
    ReadStateStore.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION),
  );
  let obj3 = guild(504);
  const items1 = [NewChannelsStore];
  const items2 = [guild.id];
  const stateFromStores1 = obj3.useStateFromStores(
    items1,
    () => NewChannelsStore.getNewChannelIds(guild.id).size > ChannelListState.MAX_NEW_CHANNELS_TO_SHOW,
  );
  const features = guild.features;
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = ModalActionCreatorsDefault;
    const obj3 = { guildId: guild.id };
    obj2.pushLazy(asyncRequire(11179, dependencyMap.paths), obj3, closure_18);
  }, items2);
  let tmp9Result = null;
  if (features.has(constants2.COMMUNITY)) {
    if (result) {
      let tmp9Result2;
      if (!stateFromStores) {
        tmp9Result2 = null;
      }
      const obj4 = { trailing: tmp9Result2, onPress: callback, label: stringResult };
      const intl = tmp3(1126).intl;
      const string = intl.string;
      const t = tmp3(1126).t;
      if (tmp2) {
        stringResult = string(t.h9mGOP);
      } else {
        stringResult = string(t.et6wav);
      }
      tmp9Result = closure_21(tmp10, obj4);
    }
    tmp9Result2 = closure_21(tmp3(11933).NewBadge, {});
  }
  return tmp9Result;
}
function ServerTagOption(guild) {
  let intl;
  let items;
  let obj5;
  guild = guild.guild;
  const tmp2 = guild;
  const tmp = closure_23();
  let obj = guild(9285);
  [][0] = guild.id;
  const result = obj.canViewMobileServerTag(guild.id);
  if (result) {
    const profile = guild.profile;
    let badge;
    const getGuildTagBadgeUrl = tmp2(7847).getGuildTagBadgeUrl;
    const id = guild.id;
    tmp2(7847);
    if (profile != null) {
      badge = profile.badge;
    }
    const guildTagBadgeUrl = getGuildTagBadgeUrl(id, badge, GuildTagBadgeSize.SIZE_16);
    let obj2 = { style: tmp.serverTagLabel, children: items };
    const ActionSheetRow = tmp2(6704).ActionSheetRow;
    const profile2 = guild.profile;
    let tag;
    const BaseGuildTagChiplet = tmp2(9409).BaseGuildTagChiplet;
    if (profile2 != null) {
      tag = profile2.tag;
    }
    const obj3 = { label: closure_22(View, obj2), onPress: tmp5 };
    const obj4 = {
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: closure_21(BaseGuildTagChiplet, obj5),
    };
    obj5 = { guildTag: tag, guildBadge: guildTagBadgeUrl, badgeSize: GuildTagBadgeSize.SIZE_16 };
    items = [closure_21(View, obj4)];
    const obj6 = {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: intl.string(tmp2(1126).t["2QmKZ2"]),
    };
    const Text = tmp2(4892).Text;
    intl = tmp2(1126).intl;
    items[1] = closure_21(Text, obj6);
    return closure_21(ActionSheetRow, obj3);
  } else {
    return null;
  }
}
const View = react_native.View;
({ isGuildOwner: metroImportDefault, getGuildIconURL: metroImportAll } = GuildRecord);
({
  ChannelTypes: closure_14,
  GuildFeatures: closure_15,
  AnalyticsSections: closure_16,
  AVATAR_MAX_SIZE: closure_17,
  Fonts,
} = Constants);
let closure_18 = GuildOnboardingConstants.CHANNELS_AND_ROLES_MODAL_KEY;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  guildServerAvatar: { marginRight: 4 },
  identityName: obj2,
  identitySublabel: { flexDirection: "row" },
  serverTagLabel: obj3,
};
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
let closure_23 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let first;
      let tmp10;
      let tmp6;
      let tmp8;
      let obj = guild(576);
      const cResult = obj.c(9);
      guild = guild.guild;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserGuildSettingsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        const fn = function n() {
          return UserGuildSettingsStore.isGuildCollapsed(guild.id);
        };
        cResult[1] = guild.id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = guild(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guild(1126).t.UwOLJO);
        cResult[3] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== guild.id) {
        const fn2 = function u() {
          const obj = ChannelCollapseActionCreatorsDefault;
          return obj.toggleCollapseGuild(guild.id);
        };
        cResult[4] = guild.id;
        cResult[5] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === stateFromStores) {
        let tmp11;
        if (cResult[7] === tmp10) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
      const tmp12 = closure_21(guild(6704).ActionSheetSwitchRow, {
        label: tmp8,
        value: stateFromStores,
        onValueChange: tmp10,
      });
      cResult[6] = stateFromStores;
      cResult[7] = tmp10;
      cResult[8] = tmp12;
      tmp11 = tmp12;
    }
  : (guild) => {
      let intl;
      guild = guild.guild;
      let obj = guild(504);
      const items = [UserGuildSettingsStore];
      const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isGuildCollapsed(guild.id));
      const obj2 = {
        label: intl.string(guild(1126).t.UwOLJO),
        value: stateFromStores,
        onValueChange() {
          const obj = ChannelCollapseActionCreatorsDefault;
          return obj.toggleCollapseGuild(guild.id);
        },
      };
      const ActionSheetSwitchRow = guild(6704).ActionSheetSwitchRow;
      intl = guild(1126).intl;
      return closure_21(ActionSheetSwitchRow, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let guild;
      let items;
      let user;
      let obj = require("react");
      const cResult = obj.c(19);
      ({ guild, user } = arg0);
      const tmp4 = closure_23();
      if (cResult[0] === guild.id) {
        let tmp5;
        if (cResult[1] === user) {
          tmp5 = cResult[2];
        }
        const tmp8 = useAnalyticsLocationsDefault;
        const analyticsLocations = tmp8(AnalyticsLocationDefault.GUILD_SETTINGS).analyticsLocations;
        if (cResult[3] === analyticsLocations) {
          let tmp9;
          let tmp11;
          let tmp12;
          if (cResult[4] === guild) {
            tmp9 = cResult[5];
          }
          const tmp10 = useOpenProfileSettingsDefault(tmp9);
          _require = tmp10;
          if (cResult[6] !== tmp10) {
            const fn = function p() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              closure_0();
            };
            cResult[6] = tmp10;
            cResult[7] = fn;
            tmp11 = fn;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] !== guild.features) {
            const intl = tmp(1126).intl;
            const features = guild.features;
            const string = intl.string;
            const hasItem = features.has(constants2.HUB);
            const t = tmp(1126).t;
            const stringResult = string(hasItem ? t["+MWrWt"] : t["PKQB/H"]);
            cResult[8] = guild.features;
            cResult[9] = stringResult;
            tmp12 = stringResult;
          } else {
            tmp12 = cResult[9];
          }
          if (cResult[10] === guild.id) {
            if (cResult[11] === tmp5) {
              if (cResult[12] === tmp4) {
                let tmp16;
                if (cResult[13] === user) {
                  tmp16 = cResult[14];
                }
                if (cResult[15] === tmp11) {
                  if (cResult[16] === tmp12) {
                    let tmp22;
                    if (cResult[17] === tmp16) {
                      tmp22 = cResult[18];
                    }
                    return tmp22;
                  }
                }
                const obj3 = { label: tmp12, subLabel: tmp16, onPress: tmp11 };
                const tmp24 = closure_21(require("ActionSheetRow").ActionSheetRow, obj3);
                cResult[15] = tmp11;
                cResult[16] = tmp12;
                cResult[17] = tmp16;
                cResult[18] = tmp24;
                tmp22 = tmp24;
              }
            }
          }
          let tmp18 = tmp5;
          if (null != user) {
            tmp18 = tmp5;
            if (user.hasAvatarForGuild(guild.id)) {
              const obj4 = { style: tmp4.identitySublabel, children: items };
              const obj5 = {
                size: require("native").AvatarSizes.SIZE_16,
                style: tmp4.guildServerAvatar,
                user,
                guildId: guild.id,
              };
              const Avatar = tmp(1188).Avatar;
              items = [closure_21(Avatar, obj5)];
              const obj7 = { user, nick: tmp5, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
              ({
                identityName: obj6.usernameStyle,
                identityName: obj6.discriminatorStyle,
                identityName: obj6.nicknameStyle,
              } = tmp4);
              items[1] = closure_21(DiscordTagDefault, obj7);
              tmp18 = closure_22(View, obj4);
            }
          }
          cResult[10] = guild.id;
          cResult[11] = tmp5;
          cResult[12] = tmp4;
          cResult[13] = user;
          cResult[14] = tmp18;
          tmp16 = tmp18;
        }
        const obj12 = { guild, analyticsLocations };
        cResult[3] = analyticsLocations;
        cResult[4] = guild;
        cResult[5] = obj12;
        tmp9 = obj12;
      }
      const obj2 = NicknameUtilsDefault;
      const nickname = obj2.getNickname(guild.id, undefined, user);
      cResult[0] = guild.id;
      cResult[1] = user;
      cResult[2] = nickname;
      tmp5 = nickname;
    }
  : (arg0) => {
      let closure_0;
      let guild;
      let items;
      let tmp9;
      let user;
      ({ guild, user } = arg0);
      const tmp = closure_23();
      let obj = NicknameUtilsDefault;
      const nickname = obj.getNickname(guild.id, undefined, user);
      const tmp5 = useAnalyticsLocationsDefault;
      _require = useOpenProfileSettingsDefault({
        guild,
        analyticsLocations: tmp5(AnalyticsLocationDefault.GUILD_SETTINGS).analyticsLocations,
      });
      const ActionSheetRow = require("ActionSheetRow").ActionSheetRow;
      const intl = require("intl").intl;
      const features = guild.features;
      const string = intl.string;
      const hasItem = features.has(constants2.HUB);
      const t = require("intl").t;
      const obj2 = {
        label: string(hasItem ? t["+MWrWt"] : t["PKQB/H"]),
        subLabel: tmp9,
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_0();
        },
      };
      tmp9 = nickname;
      if (null != user) {
        tmp9 = nickname;
        if (user.hasAvatarForGuild(guild.id)) {
          const obj3 = { style: tmp.identitySublabel, children: items };
          const obj4 = {
            size: require("native").AvatarSizes.SIZE_16,
            style: tmp.guildServerAvatar,
            user,
            guildId: guild.id,
          };
          const Avatar = tmp7(1188).Avatar;
          items = [closure_21(Avatar, obj4)];
          const obj9 = { user, nick: nickname, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
          ({
            identityName: obj5.usernameStyle,
            identityName: obj5.discriminatorStyle,
            identityName: obj5.nicknameStyle,
          } = tmp);
          items[1] = closure_21(DiscordTagDefault, obj9);
          tmp9 = closure_22(View, obj3);
        }
      }
      return closure_21(ActionSheetRow, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let first;
      let tmp10;
      let tmp7;
      let tmp8;
      let tmp = guild;
      let obj = guild(576);
      const cResult = obj.c(10);
      guild = guild.guild;
      const tmp4 = useIsServerThemeAvailableForGuildDefault(guild.id, "GuildActionSheetActions");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        const fn = function n() {
          return UserSettingsProtoStore.resolveGuildThemeSourcePreference(guild.id);
        };
        const items1 = [guild.id];
        cResult[1] = guild.id;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] !== guild.id) {
        const fn2 = function h(arg0) {
          const GuildThemeSourcePreference = preloaded_user_settings.GuildThemeSourcePreference;
          const tmp = arg0 ? GuildThemeSourcePreference.GUILD : GuildThemeSourcePreference.PERSONAL;
          const obj = UserSettingsProtoActionCreators;
          const result = obj.setGuildThemeSourcePreferenceOverride(guild.id, tmp);
        };
        cResult[4] = guild.id;
        cResult[5] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
      }
      if (tmp4) {
        let tmp12;
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.CFzDOG);
          cResult[6] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[6];
        }
        const tmp14 = stateFromStores === tmp(1197).GuildThemeSourcePreference.GUILD;
        if (cResult[7] === tmp10) {
          let tmp15;
          if (cResult[8] === tmp14) {
            tmp15 = cResult[9];
          }
          return tmp15;
        }
        const obj2 = { label: tmp12, value: tmp14, onValueChange: tmp10 };
        const tmp17 = closure_21(tmp(6704).ActionSheetSwitchRow, obj2);
        cResult[7] = tmp10;
        cResult[8] = tmp14;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      } else {
        return null;
      }
    }
  : (guild) => {
      let intl;
      guild = guild.guild;
      const tmp2 = useIsServerThemeAvailableForGuildDefault(guild.id, "GuildActionSheetActions");
      let obj = guild(504);
      const items = [UserSettingsProtoStore];
      const items1 = [guild.id];
      [][0] = guild.id;
      const stateFromStores = obj.useStateFromStores(
        items,
        () => UserSettingsProtoStore.resolveGuildThemeSourcePreference(guild.id),
        items1,
      );
      let tmp6 = null;
      if (tmp2) {
        const obj2 = {
          label: intl.string(guild(1126).t.CFzDOG),
          value: stateFromStores === guild(1197).GuildThemeSourcePreference.GUILD,
          onValueChange: tmp5,
        };
        const ActionSheetSwitchRow = tmp3(6704).ActionSheetSwitchRow;
        intl = tmp3(1126).intl;
        tmp6 = closure_21(ActionSheetSwitchRow, obj2);
      }
      return tmp6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let obj = guild(576);
      const cResult = obj.c(12);
      guild = guild.guild;
      let RestrictedGuildIds = guild(2028).RestrictedGuildIds;
      const setting = RestrictedGuildIds.useSetting();
      if (cResult[0] === guild.id) {
        let tmp4;
        let tmp6;
        let tmp8;
        let tmp10;
        if (cResult[1] === setting) {
          tmp4 = cResult[2];
        }
        if (cResult[3] !== guild.id) {
          const fn = function s(arg0) {
            const obj = UserSettingsUtils;
            const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
            const tmp3 = arg0;
            if (tmp3) {
              sanitizedRestrictedGuilds.delete(guild.id);
            } else {
              sanitizedRestrictedGuilds.add(guild.id);
            }
            const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
            RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
          };
          cResult[3] = guild.id;
          cResult[4] = fn;
          tmp6 = fn;
        } else {
          tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(guild(1126).t.KXNTgb);
          cResult[5] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== guild.features) {
          let stringResult1;
          const features = guild.features;
          const hasItem = features.has(constants2.HUB);
          const intl2 = tmp(1126).intl;
          const string = intl2.string;
          const t = tmp(1126).t;
          if (hasItem) {
            stringResult1 = string(t["2YwzGs"]);
          } else {
            stringResult1 = string(t.jMFSQV);
          }
          cResult[6] = guild.features;
          cResult[7] = stringResult1;
          tmp10 = stringResult1;
        } else {
          tmp10 = cResult[7];
        }
        if (cResult[8] === tmp6) {
          if (cResult[9] === tmp10) {
            let tmp15;
            if (cResult[10] === !tmp4) {
              tmp15 = cResult[11];
            }
            return tmp15;
          }
        }
        const obj2 = { label: tmp8, subLabel: tmp10, value: !tmp4, onValueChange: tmp6 };
        const tmp17 = closure_21(guild(6704).ActionSheetSwitchRow, obj2);
        cResult[8] = tmp6;
        cResult[9] = tmp10;
        cResult[10] = !tmp4;
        cResult[11] = tmp17;
        tmp15 = tmp17;
      }
      const hasItem1 = setting.includes(guild.id);
      cResult[0] = guild.id;
      cResult[1] = setting;
      cResult[2] = hasItem1;
      tmp4 = hasItem1;
    }
  : (guild) => {
      let intl;
      let stringResult;
      guild = guild.guild;
      let RestrictedGuildIds = guild(2028).RestrictedGuildIds;
      const setting = RestrictedGuildIds.useSetting();
      const hasItem = setting.includes(guild.id);
      let obj = {
        label: intl.string(guild(1126).t.KXNTgb),
        subLabel: stringResult,
        value: !hasItem,
        onValueChange(arg0) {
          const obj = UserSettingsUtils;
          const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
          const tmp3 = arg0;
          if (tmp3) {
            sanitizedRestrictedGuilds.delete(guild.id);
          } else {
            sanitizedRestrictedGuilds.add(guild.id);
          }
          const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
          RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
        },
      };
      const ActionSheetSwitchRow = guild(6704).ActionSheetSwitchRow;
      intl = guild(1126).intl;
      const features = guild.features;
      const hasItem1 = features.has(constants2.HUB);
      const intl2 = guild(1126).intl;
      const string = intl2.string;
      const t = guild(1126).t;
      if (hasItem1) {
        stringResult = string(t["2YwzGs"]);
      } else {
        stringResult = string(t.jMFSQV);
      }
      return closure_21(ActionSheetSwitchRow, obj);
    };
let closure_29 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let first;
      let tmp6;
      let obj = guild(576);
      const cResult = obj.c(3);
      guild = guild.guild;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guild(1126).t.HcoRu0);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        let obj2 = {
          label: first,
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = NotificationSettingsModalActionCreatorsDefault;
            obj2.open(guild.id);
          },
        };
        const tmp8 = closure_21(guild(6704).ActionSheetRow, obj2);
        cResult[1] = guild.id;
        cResult[2] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[2];
      }
      return tmp6;
    }
  : (guild) => {
      let intl;
      guild = guild.guild;
      let obj = {
        label: intl.string(guild(1126).t.HcoRu0),
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = NotificationSettingsModalActionCreatorsDefault;
          obj2.open(guild.id);
        },
      };
      const ActionSheetRow = guild(6704).ActionSheetRow;
      intl = guild(1126).intl;
      return closure_21(ActionSheetRow, obj);
    };
let closure_30 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let first;
      let tmp7;
      let obj = guild(576);
      const cResult = obj.c(22);
      guild = guild.guild;
      let obj2 = guild(13792);
      const canManageChannels = obj2.useGuildActionSheetPermissions(guild).canManageChannels;
      const tmp4 = useCanCreateAnEventDefault(guild.id);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        const fn = function l() {
          const obj = ConnectionsUtils;
          return obj.isVerifiedRolesChannelVisible(GuildRoleStore.getSortedRoles(guild.id));
        };
        cResult[1] = guild.id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = guild(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === tmp4) {
        if (cResult[4] === stateFromStores) {
          if (cResult[5] === canManageChannels) {
            let arr2;
            if (cResult[6] === guild) {
              arr2 = cResult[7];
            }
            let tmp33 = null;
            if (0 !== arr2.length) {
              let tmp34;
              if (cResult[20] !== arr2) {
                let obj3 = {
                  hasIcons: false,
                  children: arr2.map((children, index) => {
                    const obj = { children };
                    return closure_1_21(React.Fragment, obj, index);
                  }),
                };
                const Group = tmp(6704).ActionSheetRow.Group;
                const tmp36 = closure_21(Group, obj3);
                cResult[20] = arr2;
                cResult[21] = tmp36;
                tmp34 = tmp36;
              } else {
                tmp34 = cResult[21];
              }
              tmp33 = tmp34;
            }
            return tmp33;
          }
        }
      }
      const items1 = [];
      if (canManageChannels) {
        let tmp9;
        let tmp11;
        let tmp15;
        let tmp17;
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(guild(1126).t["fUYU+j"]);
          cResult[8] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[8];
        }
        if (cResult[9] !== guild.id) {
          const obj4 = {
            label: tmp9,
            onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const obj2 = CreateChannelModalActionCreatorsDefault;
              obj2.open(null, guild.id, null, null);
            },
          };
          const tmp13 = closure_21(guild(6704).ActionSheetRow, obj4);
          cResult[9] = guild.id;
          cResult[10] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[10];
        }
        items1.push(tmp11);
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(guild(1126).t["ISN+NM"]);
          cResult[11] = stringResult1;
          tmp15 = stringResult1;
        } else {
          tmp15 = cResult[11];
        }
        if (cResult[12] !== guild.id) {
          const obj5 = {
            label: tmp15,
            onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const obj2 = CreateChannelModalActionCreatorsDefault;
              obj2.open(constants.GUILD_CATEGORY, guild.id, null, null);
            },
          };
          const tmp19 = closure_21(guild(6704).ActionSheetRow, obj5);
          cResult[12] = guild.id;
          cResult[13] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[13];
        }
        items1.push(tmp17);
      }
      if (tmp4) {
        let tmp21;
        let tmp23;
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(guild(1126).t["60lJ0C"]);
          cResult[14] = stringResult2;
          tmp21 = stringResult2;
        } else {
          tmp21 = cResult[14];
        }
        if (cResult[15] !== guild) {
          const obj6 = {
            label: tmp21,
            onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const obj2 = GuildScheduledEventModalActionCreators;
              const result = obj2.openCreateOrEditGuildEventModal(guild, {});
            },
          };
          const tmp25 = closure_21(guild(6704).ActionSheetRow, obj6);
          cResult[15] = guild;
          cResult[16] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[16];
        }
        items1.push(tmp23);
      }
      if (stateFromStores) {
        let tmp27;
        let tmp29;
        const _Symbol4 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult3 = intl4.string(guild(1126).t.ghtnss);
          cResult[17] = stringResult3;
          tmp27 = stringResult3;
        } else {
          tmp27 = cResult[17];
        }
        if (cResult[18] !== guild.id) {
          const obj7 = {
            label: tmp27,
            onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const obj2 = GuildRoleConnectionsModalActionCreators;
              const obj3 = {
                guildId: guild.id,
                onClose() {},
              };
              const result = obj2.openGuildRoleConnectionsModal(obj3);
            },
          };
          const tmp31 = closure_21(guild(6704).ActionSheetRow, obj7);
          cResult[18] = guild.id;
          cResult[19] = tmp31;
          tmp29 = tmp31;
        } else {
          tmp29 = cResult[19];
        }
        items1.push(tmp29);
      }
      cResult[3] = tmp4;
      cResult[4] = stateFromStores;
      cResult[5] = canManageChannels;
      cResult[6] = guild;
      cResult[7] = items1;
      arr2 = items1;
    }
  : (guild) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      guild = guild.guild;
      let obj = guild(13792);
      const canManageChannels = obj.useGuildActionSheetPermissions(guild).canManageChannels;
      const tmp3 = useCanCreateAnEventDefault(guild.id);
      let obj2 = guild(504);
      const items = [GuildRoleStore];
      const items1 = [];
      const stateFromStores = obj2.useStateFromStores(items, () => {
        const obj = ConnectionsUtils;
        return obj.isVerifiedRolesChannelVisible(GuildRoleStore.getSortedRoles(guild.id));
      });
      if (canManageChannels) {
        const push = items1.push;
        let obj3 = {
          label: intl.string(guild(1126).t["fUYU+j"]),
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = CreateChannelModalActionCreatorsDefault;
            obj2.open(null, guild.id, null, null);
          },
        };
        const ActionSheetRow = tmp(6704).ActionSheetRow;
        intl = tmp(1126).intl;
        push(closure_21(ActionSheetRow, obj3));
        const push2 = items1.push;
        const obj4 = {
          label: intl2.string(guild(1126).t["ISN+NM"]),
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = CreateChannelModalActionCreatorsDefault;
            obj2.open(constants.GUILD_CATEGORY, guild.id, null, null);
          },
        };
        const ActionSheetRow2 = tmp(6704).ActionSheetRow;
        intl2 = tmp(1126).intl;
        push2(closure_21(ActionSheetRow2, obj4));
      }
      if (tmp3) {
        const push3 = items1.push;
        const obj5 = {
          label: intl3.string(guild(1126).t["60lJ0C"]),
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = GuildScheduledEventModalActionCreators;
            const result = obj2.openCreateOrEditGuildEventModal(guild, {});
          },
        };
        const ActionSheetRow3 = tmp(6704).ActionSheetRow;
        intl3 = tmp(1126).intl;
        push3(closure_21(ActionSheetRow3, obj5));
      }
      if (stateFromStores) {
        const push4 = items1.push;
        const obj6 = {
          label: intl4.string(guild(1126).t.ghtnss),
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = GuildRoleConnectionsModalActionCreators;
            const obj3 = {
              guildId: guild.id,
              onClose() {},
            };
            const result = obj2.openGuildRoleConnectionsModal(obj3);
          },
        };
        const ActionSheetRow4 = tmp(6704).ActionSheetRow;
        intl4 = tmp(1126).intl;
        push4(closure_21(ActionSheetRow4, obj6));
      }
      let tmp12 = null;
      if (0 !== items1.length) {
        const obj7 = {
          hasIcons: false,
          children: items1.map((children, index) => {
            const obj = { children };
            return closure_1_21(React.Fragment, obj, index);
          }),
        };
        const Group = tmp(6704).ActionSheetRow.Group;
        tmp12 = closure_21(Group, obj7);
      }
      return tmp12;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let tmp28;
      let tmp7;
      let obj = guild(576);
      const cResult = obj.c(16);
      guild = guild.guild;
      const currentUser = UserStore.getCurrentUser();
      _modDef38(null != currentUser, "GuildActionSheetDirectoryActions: user cannot be undefined");
      const tmp6 = closure_7(guild, currentUser);
      if (cResult[0] !== guild) {
        let obj2 = { guild };
        const tmp10 = closure_21(closure_30, obj2);
        cResult[0] = guild;
        cResult[1] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      const items = [];
      items.push(tmp7);
      if (cResult[2] === guild) {
        let tmp12;
        let tmp15;
        let tmp20;
        if (cResult[3] === currentUser) {
          tmp12 = cResult[4];
        }
        items.push(tmp12);
        if (cResult[5] !== guild) {
          let obj3 = { guild };
          const tmp18 = closure_21(closure_29, obj3);
          cResult[5] = guild;
          cResult[6] = tmp18;
          tmp15 = tmp18;
        } else {
          tmp15 = cResult[6];
        }
        items.push(tmp15);
        if (cResult[7] !== guild) {
          const obj4 = { guild };
          cResult[7] = guild;
          cResult[8] = obj4;
          tmp20 = obj4;
        } else {
          tmp20 = cResult[8];
        }
        const tmpResult = guild(13740);
        const messageRequestPrivacyOption = tmpResult.useMessageRequestPrivacyOption(tmp20);
        if (null != messageRequestPrivacyOption) {
          items.push(messageRequestPrivacyOption);
        }
        if (!tmp6) {
          let tmp23;
          if (cResult[9] !== guild.features) {
            let stringResult;
            const features = guild.features;
            const hasItem = features.has(constants2.HUB);
            const intl = tmp(1126).intl;
            const string = intl.string;
            const t = tmp(1126).t;
            if (hasItem) {
              stringResult = string(t.Dv8gFT);
            } else {
              stringResult = string(t.J2TBi3);
            }
            cResult[9] = guild.features;
            cResult[10] = stringResult;
            tmp23 = stringResult;
          } else {
            tmp23 = cResult[10];
          }
          if (cResult[11] !== guild) {
            class R {
              constructor() {
                obj = closure_1(closure_2[27]);
                hideActionSheetResult = obj.hideActionSheet();
                lazyResult = closure_3.lazy(() => guild(paths[30])(paths[62], paths.paths));
                obj2 = closure_0(closure_2[63]);
                obj1 = { guild };
                openAlertResult = obj2.openAlert("guild-action-sheet-leave-server", jsx(lazyResult, obj1));
                return;
              }
            }
            cResult[11] = guild;
            cResult[12] = R;
          } else {
            class R {
              constructor() {
                obj = closure_1(closure_2[27]);
                hideActionSheetResult = obj.hideActionSheet();
                lazyResult = closure_3.lazy(() => guild(paths[30])(paths[62], paths.paths));
                obj2 = closure_0(closure_2[63]);
                obj1 = { guild };
                openAlertResult = obj2.openAlert("guild-action-sheet-leave-server", jsx(lazyResult, obj1));
                return;
              }
            }
          }
          if (cResult[13] === tmp23) {
            class R {
              constructor() {
                obj = closure_1(closure_2[27]);
                hideActionSheetResult = obj.hideActionSheet();
                lazyResult = closure_3.lazy(() => guild(paths[30])(paths[62], paths.paths));
                obj2 = closure_0(closure_2[63]);
                obj1 = { guild };
                openAlertResult = obj2.openAlert("guild-action-sheet-leave-server", jsx(lazyResult, obj1));
                return;
              }
            }
            items.push(tmp28);
          }
          const obj5 = { label: tmp23, variant: "danger", onPress: R };
          const tmp30 = closure_21(guild(6704).ActionSheetRow, obj5);
          cResult[13] = tmp23;
          cResult[14] = R;
          cResult[15] = tmp30;
          tmp28 = tmp30;
        }
        let tmp32 = null;
        if (0 !== items.length) {
          class R {
            constructor() {
              obj = closure_1(closure_2[27]);
              hideActionSheetResult = obj.hideActionSheet();
              lazyResult = closure_3.lazy(() => guild(paths[30])(paths[62], paths.paths));
              obj2 = closure_0(closure_2[63]);
              obj1 = { guild };
              openAlertResult = obj2.openAlert("guild-action-sheet-leave-server", jsx(lazyResult, obj1));
              return;
            }
          }
          const obj6 = {
            hasIcons: false,
            children: items.map((children, index) => {
              const obj = { children };
              return closure_1_21(React.Fragment, obj, index);
            }),
          };
          const Group = tmp(6704).ActionSheetRow.Group;
          tmp32 = closure_21(Group, obj6);
        }
        return tmp32;
      }
      const tmp13 = closure_21(closure_26, { guild, user: currentUser });
      cResult[2] = guild;
      cResult[3] = currentUser;
      cResult[4] = tmp13;
      tmp12 = tmp13;
    }
  : (guild) => {
      guild = guild.guild;
      const currentUser = UserStore.getCurrentUser();
      _modDef38(null != currentUser, "GuildActionSheetDirectoryActions: user cannot be undefined");
      const items = [];
      const tmp4 = closure_7(guild, currentUser);
      items.push(closure_21(closure_30, { guild }));
      items.push(closure_21(closure_26, { guild, user: currentUser }));
      items.push(closure_21(closure_29, { guild }));
      let obj = guild(13740);
      const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
      if (null != messageRequestPrivacyOption) {
        items.push(messageRequestPrivacyOption);
      }
      if (!tmp4) {
        let stringResult;
        const push = items.push;
        const features = guild.features;
        const ActionSheetRow = tmp9(6704).ActionSheetRow;
        const hasItem = features.has(constants2.HUB);
        const intl = tmp9(1126).intl;
        const string = intl.string;
        const t = tmp9(1126).t;
        if (hasItem) {
          stringResult = string(t.Dv8gFT);
        } else {
          stringResult = string(t.J2TBi3);
        }
        let obj2 = {
          label: stringResult,
          variant: "danger",
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const lazyResult = react.lazy(() => guild(paths[30])(paths[62], paths.paths));
            const obj2 = useAlertStore;
            const obj3 = { guild };
            obj2.openAlert("guild-action-sheet-leave-server", closure_21(lazyResult, obj3));
          },
        };
        push(closure_21(ActionSheetRow, obj2));
      }
      let tmp5Result = null;
      if (0 !== items.length) {
        let obj3 = {
          hasIcons: false,
          children: items.map((children, index) => {
            const obj = { children };
            return closure_1_21(React.Fragment, obj, index);
          }),
        };
        const Group = tmp9(6704).ActionSheetRow.Group;
        tmp5Result = closure_21(Group, obj3);
      }
      return tmp5Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let tmp5;
      let tmp6;
      let tmp = guild;
      let obj = guild(576);
      const cResult = obj.c(18);
      guild = guild.guild;
      const DeveloperMode = guild(2028).DeveloperMode;
      const setting = DeveloperMode.useSetting();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { location: "GuildDeveloperOptionAction" };
        let obj3 = { autoTrackExposure: false };
        cResult[0] = obj2;
        cResult[1] = obj3;
        tmp5 = obj2;
        tmp6 = obj3;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj4 = TidaWebformExperimentDefault;
      const tidaWebformEnabled = obj4.useExperiment(tmp5, tmp6).tidaWebformEnabled;
      if (setting) {
        let tmp8;
        let tmp10;
        if (cResult[2] === guild) {
          let arr;
          let tmp27;
          let tmp29;
          if (cResult[3] === tidaWebformEnabled) {
            arr = cResult[4];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1126).intl;
            const stringResult = intl4.string(tmp(1126).t.ObIb1Q);
            cResult[15] = stringResult;
            tmp27 = stringResult;
          } else {
            tmp27 = cResult[15];
          }
          if (cResult[16] !== arr) {
            const obj5 = {
              hasIcons: false,
              title: tmp27,
              children: arr.map((children, index) => {
                const obj = { children };
                return closure_1_21(React.Fragment, obj, index);
              }),
            };
            const Group = tmp(6704).ActionSheetRow.Group;
            const tmp31 = closure_21(Group, obj5);
            cResult[16] = arr;
            cResult[17] = tmp31;
            tmp29 = tmp31;
          } else {
            tmp29 = cResult[17];
          }
          return tmp29;
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult1 = intl.string(tmp(1126).t["94lLD7"]);
          cResult[5] = stringResult1;
          tmp8 = stringResult1;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== guild.id) {
          const obj6 = {
            label: tmp8,
            onPress() {
              const obj = ClipboardUtils;
              obj.copy(guild.id);
              const obj2 = ToastUtils;
              obj2.presentIdCopied();
            },
          };
          const tmp12 = closure_21(tmp(6704).ActionSheetRow, obj6);
          cResult[6] = guild.id;
          cResult[7] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[7];
        }
        const items = [];
        items.push(tmp10);
        if (tidaWebformEnabled) {
          if (null != guild.icon) {
            let tmp15;
            let tmp17;
            const _Symbol3 = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult2 = intl2.string(tmp(1126).t["7H30wR"]);
              cResult[8] = stringResult2;
              tmp15 = stringResult2;
            } else {
              tmp15 = cResult[8];
            }
            if (cResult[9] !== guild) {
              const obj7 = {
                label: tmp15,
                onPress() {
                  const tmp = metroImportAll(guild, closure_17, true);
                  if (null != tmp) {
                    const obj = ClipboardUtils;
                    obj.copy(tmp);
                    const obj2 = ToastUtils;
                    obj2.presentLinkCopied();
                  }
                },
              };
              const tmp19 = closure_21(tmp(6704).ActionSheetRow, obj7);
              cResult[9] = guild;
              cResult[10] = tmp19;
              tmp17 = tmp19;
            } else {
              tmp17 = cResult[10];
            }
            items.push(tmp17);
          }
          if (null != guild.banner) {
            let tmp21;
            const _Symbol4 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1126).intl;
              const stringResult3 = intl3.string(tmp(1126).t["2FoUnk"]);
              cResult[11] = stringResult3;
              tmp21 = stringResult3;
            } else {
              tmp21 = cResult[11];
            }
            if (cResult[12] === guild.banner) {
              let tmp23;
              if (cResult[13] === guild.id) {
                tmp23 = cResult[14];
              }
              items.push(tmp23);
            }
            const obj8 = {
              label: tmp21,
              onPress() {
                const obj = AvatarUtilsDefault;
                const obj2 = { id: guild.id, banner: guild.banner };
                const guildBannerURL = obj.getGuildBannerURL(obj2, true);
                if (null != guildBannerURL) {
                  const obj3 = ClipboardUtils;
                  obj3.copy(guildBannerURL);
                  const obj4 = ToastUtils;
                  obj4.presentLinkCopied();
                }
              },
            };
            const tmp25 = closure_21(tmp(6704).ActionSheetRow, obj8);
            cResult[12] = guild.banner;
            cResult[13] = guild.id;
            cResult[14] = tmp25;
            tmp23 = tmp25;
          }
        }
        cResult[2] = guild;
        cResult[3] = tidaWebformEnabled;
        cResult[4] = items;
        arr = items;
      } else {
        return null;
      }
    }
  : (guild) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      guild = guild.guild;
      let tmp = guild;
      const DeveloperMode = guild(2028).DeveloperMode;
      const setting = DeveloperMode.useSetting();
      TidaWebformExperimentDefault;
      if (setting) {
        const items = [];
        const push = items.push;
        let obj = {
          label: intl.string(tmp(1126).t["94lLD7"]),
          onPress() {
            const obj = ClipboardUtils;
            obj.copy(guild.id);
            const obj2 = ToastUtils;
            obj2.presentIdCopied();
          },
        };
        const ActionSheetRow = tmp(6704).ActionSheetRow;
        intl = tmp(1126).intl;
        push(closure_21(ActionSheetRow, obj));
        if (tmp5) {
          if (null != guild.icon) {
            const push2 = items.push;
            let obj2 = {
              label: intl2.string(tmp(1126).t["7H30wR"]),
              onPress() {
                const tmp = metroImportAll(guild, closure_17, true);
                if (null != tmp) {
                  const obj = ClipboardUtils;
                  obj.copy(tmp);
                  const obj2 = ToastUtils;
                  obj2.presentLinkCopied();
                }
              },
            };
            const ActionSheetRow2 = tmp(6704).ActionSheetRow;
            intl2 = tmp(1126).intl;
            push2(closure_21(ActionSheetRow2, obj2));
          }
          if (null != guild.banner) {
            const push3 = items.push;
            let obj3 = {
              label: intl3.string(tmp(1126).t["2FoUnk"]),
              onPress() {
                const obj = AvatarUtilsDefault;
                const obj2 = { id: guild.id, banner: guild.banner };
                const guildBannerURL = obj.getGuildBannerURL(obj2, true);
                if (null != guildBannerURL) {
                  const obj3 = ClipboardUtils;
                  obj3.copy(guildBannerURL);
                  const obj4 = ToastUtils;
                  obj4.presentLinkCopied();
                }
              },
            };
            const ActionSheetRow3 = tmp(6704).ActionSheetRow;
            intl3 = tmp(1126).intl;
            push3(closure_21(ActionSheetRow3, obj3));
          }
        }
        let obj4 = {
          hasIcons: false,
          title: intl4.string(tmp(1126).t.ObIb1Q),
          children: items.map((children, index) => {
            const obj = { children };
            return closure_1_21(React.Fragment, obj, index);
          }),
        };
        const Group = tmp(6704).ActionSheetRow.Group;
        intl4 = tmp(1126).intl;
        return closure_21(Group, obj4);
      } else {
        return null;
      }
    };
function handleLeaveServer(guild) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const lazyResult = react.lazy(() => guild(paths[30])(paths[62], paths.paths));
  const obj2 = useAlertStore;
  const obj3 = { guild };
  obj2.openAlert("guild-action-sheet-leave-server", closure_21(lazyResult, obj3));
}
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx");

export const RestrictedGuildPrivacyOption = tmp6;
export const NotificationAction = tmp7;
export const GuildUnreadAction = function GuildUnreadAction(guild) {
  let intl;
  guild = guild.guild;
  let stateFromStores1;
  let obj = guild(stateFromStores1[19]);
  let items = [GuildReadStateStore];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => GuildReadStateStore.getGuildHasUnreadIgnoreMuted(guild.id),
    items1,
  );
  let obj2 = guild(stateFromStores1[49]);
  let shouldUseNewNotificationSystem = obj2.useShouldUseNewNotificationSystem("GuildUnreadAction");
  const items2 = [guild.id];
  let closure_1 = react.useCallback(() => {
    const obj = NotificationSettingsModalActionCreatorsDefault;
    const result = obj.updateGuildNotificationSettings(
      guild.id,
      { muted: false },
      NotificationSettingsUtils.NotificationLabels.Unmuted,
    );
  }, items2);
  const items3 = [UserGuildSettingsStore];
  const obj3 = guild(stateFromStores1[19]);
  stateFromStores1 = obj3.useStateFromStores(items3, () => UserGuildSettingsStore.isMuted(guild.id));
  const Group = guild(stateFromStores1[22]).ActionSheetRow.Group;
  const obj4 = {
    label: intl.string(guild(stateFromStores1[20]).t.e6RscS),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const items = [guild.id];
      markGuildsAsReadDefault(items, constants.GUILD_POPOUT);
    },
    disabled: !stateFromStores,
  };
  const ActionSheetRow = guild(stateFromStores1[22]).ActionSheetRow;
  intl = guild(stateFromStores1[20]).intl;
  const children = [closure_21(ActionSheetRow, obj4), ,];
  if (shouldUseNewNotificationSystem) {
    let stringResult;
    const ActionSheetRow2 = tmp(tmp2[22]).ActionSheetRow;
    const intl2 = tmp(tmp2[20]).intl;
    const string = intl2.string;
    const t = tmp(tmp2[20]).t;
    if (stateFromStores1) {
      stringResult = string(t.De0BTC);
    } else {
      stringResult = string(t.vRzp7P);
    }
    const obj5 = {
      label: stringResult,
      onPress() {
        if (stateFromStores1) {
          closure_1();
        } else {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const _HermesInternal = HermesInternal;
          ActionSheetActionCreatorsDefault;
          const obj2 = { guildId: guild.id };
          const tmp7 = asyncRequire(11077, dependencyMap.paths);
          openLazy(tmp7, "muteSettings" + guild.id, obj2);
        }
      },
    };
    shouldUseNewNotificationSystem = closure_21(ActionSheetRow2, obj5);
  }
  children[1] = shouldUseNewNotificationSystem;
  const features = guild.features;
  let tmp7Result = null;
  if (features.has(constants2.COMMUNITY)) {
    const obj6 = { guild };
    tmp7Result = closure_21(BrowseChannelsOption, obj6);
  }
  children[2] = tmp7Result;
  return closure_22(Group, { hasIcons: false, children });
};
export const GuildActionSheetPrimaryActions = tmp8;
export const GuildActionSheetGameOrganizationActions = function GuildActionSheetGameOrganizationActions(guild) {
  let ActionSheetRow;
  let EnTIIr;
  let formatToPlainString;
  let intl2;
  let obj3;
  let obj4;
  guild = guild.guild;
  let obj = guild(13083);
  let tmp3 = null;
  if (obj.useLinkedGameOrgInvitesEnabled("guild_action_sheet")) {
    let obj2 = { hasIcons: false, children: closure_21(ActionSheetRow, obj3) };
    const Group = tmp(6704).ActionSheetRow.Group;
    obj3 = {
      label: formatToPlainString(EnTIIr, obj4),
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = ActionSheetActionCreatorsDefault;
        const obj3 = { guildId: guild.id };
        obj2.openLazy(asyncRequire(13793, dependencyMap.paths), "GameOrganizationInviteActionSheet", obj3);
      },
    };
    ActionSheetRow = tmp(6704).ActionSheetRow;
    const intl = tmp(1126).intl;
    formatToPlainString = intl.formatToPlainString;
    obj4 = { noun: intl2.string(_modDef2391.nVMqjA) };
    EnTIIr = _modDef2391.EnTIIr;
    intl2 = tmp(1126).intl;
    tmp3 = closure_21(Group, obj2);
  }
  return tmp3;
};
export { handleLeaveServer };
export const GuildActionSheetDirectoryActions = tmp9;
export const GuildActionSheetSecondaryActions = function GuildActionSheetSecondaryActions(guild) {
  let intl;
  let intl2;
  let intl3;
  let isUnderLockdown;
  let shouldShowIncidentActions;
  guild = guild.guild;
  const currentUser = UserStore.getCurrentUser();
  const tmp2 = closure_7(guild, currentUser);
  let obj = guild(12496);
  const canReportRaid = obj.useCanReportRaid(guild);
  let obj2 = guild(12495);
  const guildIncidentsState = obj2.useGuildIncidentsState(guild.id);
  const items = [];
  ({ shouldShowIncidentActions, isUnderLockdown } = guildIncidentsState);
  let obj3 = guild(7059);
  const optInEnabledForGuild = obj3.useOptInEnabledForGuild(guild.id);
  items.push(closure_21(closure_26, { guild, user: currentUser }));
  items.push(closure_21(closure_27, { guild }));
  items.push(closure_21(ServerTagOption, { guild }));
  const features = guild.features;
  if (features.has(constants2.COMMUNITY)) {
    const push = items.push;
    let obj4 = {
      label: intl.string(guild(1126).t.FB2ZZV),
      value: !optInEnabledForGuild,
      onValueChange() {
        const obj = OptInOnboardingUtils;
        return obj.toggleShowAllChannels(guild.id);
      },
    };
    const ActionSheetSwitchRow = tmp3(6704).ActionSheetSwitchRow;
    intl = tmp3(1126).intl;
    push(closure_21(ActionSheetSwitchRow, obj4));
  }
  items.push(closure_21(closure_24, { guild }));
  items.push(closure_21(closure_29, { guild }));
  const tmp3Result = guild(13740);
  const messageRequestPrivacyOption = tmp3Result.useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (canReportRaid) {
    const push2 = items.push;
    const obj5 = {
      label: intl2.string(guild(1126).t.cswId3),
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = GuildAntiRaidModalActionCreators;
        obj2.openReportRaidModal(guild.id);
      },
    };
    const ActionSheetRow = tmp3(6704).ActionSheetRow;
    intl2 = tmp3(1126).intl;
    push2(closure_21(ActionSheetRow, obj5));
  }
  if (!tmp2) {
    const push3 = items.push;
    const obj6 = {
      label: intl3.string(guild(1126).t.Aen9eh),
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = ReportModals;
        const result = obj2.showReportModalForGuild(guild);
      },
    };
    const ActionSheetRow2 = tmp3(6704).ActionSheetRow;
    intl3 = tmp3(1126).intl;
    push3(closure_21(ActionSheetRow2, obj6));
  }
  if (shouldShowIncidentActions) {
    let stringResult;
    const push4 = items.push;
    const ActionSheetRow3 = tmp3(6704).ActionSheetRow;
    const intl4 = tmp3(1126).intl;
    const string = intl4.string;
    const t = tmp3(1126).t;
    if (isUnderLockdown) {
      stringResult = string(t["+tSVi3"]);
    } else {
      stringResult = string(t.EPlEdu);
    }
    const obj7 = {
      label: stringResult,
      variant: "danger",
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = { source: GuildAntiRaidTypes.GuildIncidentActionSources.GUILD_PROFILE };
        const obj3 = ActionSheetActionCreatorsDefault;
        const obj4 = { guild, analyticsData: obj2 };
        obj3.openLazy(asyncRequire(11452, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
      },
    };
    push4(closure_21(ActionSheetRow3, obj7));
  }
  if (!tmp2) {
    let string2Result;
    const push5 = items.push;
    const features2 = guild.features;
    const ActionSheetRow4 = tmp3(6704).ActionSheetRow;
    const hasItem = features2.has(constants2.HUB);
    const intl5 = tmp3(1126).intl;
    const string2 = intl5.string;
    const t2 = tmp3(1126).t;
    if (hasItem) {
      string2Result = string2(t2.Dv8gFT);
    } else {
      string2Result = string2(t2.J2TBi3);
    }
    const obj8 = {
      label: string2Result,
      variant: "danger",
      onPress() {
        let paths;
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const lazyResult = react.lazy(() => guild(paths[30])(paths[62], paths.paths));
        const obj2 = useAlertStore;
        const obj3 = { guild };
        obj2.openAlert("guild-action-sheet-leave-server", closure_21(lazyResult, obj3));
      },
    };
    push5(closure_21(ActionSheetRow4, obj8));
  }
  let tmp8Result = null;
  if (0 !== items.length) {
    const obj9 = {
      hasIcons: false,
      children: items.map((children, index) => {
        const obj = { children };
        return closure_1_21(React.Fragment, obj, index);
      }),
    };
    const Group = tmp3(6704).ActionSheetRow.Group;
    tmp8Result = closure_21(Group, obj9);
  }
  return tmp8Result;
};
export const GuildDeveloperOptionAction = tmp10;
