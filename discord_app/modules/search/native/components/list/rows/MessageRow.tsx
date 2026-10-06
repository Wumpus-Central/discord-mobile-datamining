// discord_app/modules/search/native/components/list/rows/MessageRow.tsx
import get_initialized from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../Constants.tsx";
import intl2 from "../../../../../../intl/index.native.tsx";
import native from "../../../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../../../channel/useChannelName.tsx";
import useMessageAuthorDefault from "../../../../../messages/useMessageAuthor.tsx";
import ChannelListLayoutTypes from "../../../../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import BotTagDefault from "../../../../../applications/native/BotTag.tsx";
import AssetRegistryDefault from "../../../../../../../_runtime/10129_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../../../_runtime/11078_AssetRegistry.js";
import ChannelRowPreview from "../../../../../main_tabs_v2/native/shared_components/ChannelRowPreview.tsx";
import BellZIcon from "../../../../../../design/components/Icon/native/redesign/generated/BellZIcon.tsx";
import SearchListRow2 from "../SearchListRow.tsx";
import useSearchMessageTimestamp from "../../../hooks/useSearchMessageTimestamp.tsx";
import PollBadgeDefault from "../../../../../polls/native/PollBadge.tsx";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import FavoriteStore from "../../../../../favorites/FavoriteStore.tsx";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../../../../stores/UserGuildSettingsStore.tsx";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let Platform;
let closure_14;
let closure_15;
let metroImportDefault;
let obj2;
let closure_3 = ["message"];
let closure_4 = ["message"];
({ Platform, View: metroImportDefault } = react_native);
const MessageFlags = Constants.MessageFlags;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = {
  channelIcon: { marginRight: 5, alignSelf: "center" },
  channelStatus: obj2,
  labelContainer: { flexDirection: "row", width: "100%", marginBottom: 2, alignItems: "center" },
  authorRow: { flexShrink: 1, minWidth: 0, flexDirection: "row" },
  timestamp: { marginLeft: 8 },
  header: { flexDirection: "row", marginRight: 16, marginBottom: 12 },
  body: { alignItems: "flex-start" },
  pollBadge: { marginLeft: 8 },
  suppressNotificationsIcon: { marginLeft: 4 },
  spoilerText: { fontStyle: "italic" },
};
obj2 = { marginLeft: 5, alignSelf: "center", tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let isFavorite;
      let items1;
      let muted;
      let tmp7;
      const obj = channel(576);
      const cResult = obj.c(26);
      channel = channel.channel;
      ({ muted, isFavorite } = channel);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function n() {
          const guild = GuildStore.getGuild(channel.guild_id);
          let rulesChannelId;
          if (guild != null) {
            rulesChannelId = guild.rulesChannelId;
          }
          return rulesChannelId;
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = channel(504);
      const tmp8 = tmpResult.useStateFromStores(first, tmp7) === channel.id;
      if (cResult[3] === channel) {
        let tmp9;
        if (cResult[4] === tmp8) {
          tmp9 = cResult[5];
        }
        const tmp12 = useChannelNameDefault(channel);
        if (cResult[6] === tmp9) {
          let tmp13;
          let tmp16;
          if (cResult[7] === tmp4.channelIcon) {
            tmp13 = cResult[8];
          }
          if (cResult[9] !== tmp12) {
            const obj2 = {
              lineClamp: 1,
              variant: "text-sm/semibold",
              color: "interactive-text-default",
              children: tmp12,
            };
            const tmp18 = closure_14(channel(4892).Text, obj2);
            cResult[9] = tmp12;
            cResult[10] = tmp18;
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] === muted) {
            let tmp19;
            if (cResult[12] === tmp4.channelStatus) {
              tmp19 = cResult[13];
            }
            if (cResult[14] === isFavorite) {
              let tmp22;
              let tmp25;
              if (cResult[15] === tmp4.channelStatus) {
                tmp22 = cResult[16];
              }
              if (cResult[17] !== channel) {
                let isSystemDMResult = channel.isSystemDM();
                if (isSystemDMResult) {
                  const obj3 = { type: BotTagDefault.Types.SYSTEM_DM, verified: true };
                  const tmp11Result = BotTagDefault;
                  isSystemDMResult = closure_14(tmp11Result, obj3);
                }
                cResult[17] = channel;
                cResult[18] = isSystemDMResult;
                tmp25 = isSystemDMResult;
              } else {
                tmp25 = cResult[18];
              }
              if (cResult[19] === tmp4.header) {
                if (cResult[20] === tmp13) {
                  if (cResult[21] === tmp16) {
                    if (cResult[22] === tmp19) {
                      if (cResult[23] === tmp22) {
                        let tmp29;
                        if (cResult[24] === tmp25) {
                          tmp29 = cResult[25];
                        }
                        return tmp29;
                      }
                    }
                  }
                }
              }
              const obj4 = { style: tmp4.header, children: items1 };
              items1 = [tmp13, tmp16, tmp19, tmp22, tmp25];
              const tmp32 = closure_15(closure_7, obj4);
              cResult[19] = tmp4.header;
              cResult[20] = tmp13;
              cResult[21] = tmp16;
              cResult[22] = tmp19;
              cResult[23] = tmp22;
              cResult[24] = tmp25;
              cResult[25] = tmp32;
              tmp29 = tmp32;
            }
            let tmp23 = isFavorite;
            if (tmp23) {
              const obj5 = {
                source: AssetRegistryDefault,
                size: channel(1188).Icon.Sizes.EXTRA_SMALL,
                style: tmp4.channelStatus,
              };
              const Icon3 = tmp(1188).Icon;
              tmp23 = closure_14(Icon3, obj5);
            }
            cResult[14] = isFavorite;
            cResult[15] = tmp4.channelStatus;
            cResult[16] = tmp23;
            tmp22 = tmp23;
          }
          let tmp20 = muted;
          if (tmp20) {
            const obj6 = {
              source: AssetRegistryDefault2,
              size: channel(1188).Icon.Sizes.EXTRA_SMALL,
              style: tmp4.channelStatus,
            };
            const Icon2 = tmp(1188).Icon;
            tmp20 = closure_14(Icon2, obj6);
          }
          cResult[11] = muted;
          cResult[12] = tmp4.channelStatus;
          cResult[13] = tmp20;
          tmp19 = tmp20;
        }
        const obj7 = { source: tmp9, size: channel(1188).Icon.Sizes.REFRESH_SMALL_16, style: tmp4.channelIcon };
        const Icon = tmp(1188).Icon;
        const tmp15 = closure_14(Icon, obj7);
        cResult[6] = tmp9;
        cResult[7] = tmp4.channelIcon;
        cResult[8] = tmp15;
        tmp13 = tmp15;
      }
      const tmpResult2 = channel(5819);
      const channelIcon = tmpResult2.getChannelIcon(channel, { isRulesChannel: tmp8 });
      cResult[3] = channel;
      cResult[4] = tmp8;
      cResult[5] = channelIcon;
      tmp9 = channelIcon;
    }
  : (channel) => {
      let isFavorite;
      let items1;
      let muted;
      channel = channel.channel;
      ({ muted, isFavorite } = channel);
      const tmp = closure_16();
      const items = [GuildStore];
      const obj = channel(504);
      const stateFromStores = obj.useStateFromStores(items, () => {
        const guild = GuildStore.getGuild(channel.guild_id);
        let rulesChannelId;
        if (guild != null) {
          rulesChannelId = guild.rulesChannelId;
        }
        return rulesChannelId;
      });
      const obj2 = channel(5819);
      const obj3 = { isRulesChannel: stateFromStores === channel.id };
      const channelIcon = obj2.getChannelIcon(channel, obj3);
      const obj4 = { style: tmp.header, children: items1 };
      const obj5 = { source: channelIcon, size: channel(1188).Icon.Sizes.REFRESH_SMALL_16, style: tmp.channelIcon };
      const tmp7 = useChannelNameDefault(channel);
      const Icon = channel(1188).Icon;
      items1 = [
        closure_14(Icon, obj5),
        closure_14(channel(4892).Text, {
          lineClamp: 1,
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: tmp7,
        }),
        ,
        ,
      ];
      if (muted) {
        const obj6 = {
          source: AssetRegistryDefault2,
          size: channel(1188).Icon.Sizes.EXTRA_SMALL,
          style: tmp.channelStatus,
        };
        const Icon2 = tmp2(1188).Icon;
        muted = closure_14(Icon2, obj6);
      }
      items1[2] = muted;
      if (isFavorite) {
        const obj7 = {
          source: AssetRegistryDefault,
          size: channel(1188).Icon.Sizes.EXTRA_SMALL,
          style: tmp.channelStatus,
        };
        const Icon3 = tmp2(1188).Icon;
        isFavorite = closure_14(Icon3, obj7);
      }
      items1[3] = isFavorite;
      let isSystemDMResult = channel.isSystemDM();
      if (isSystemDMResult) {
        const obj8 = { type: BotTagDefault.Types.SYSTEM_DM, verified: true };
        const tmp6Result = BotTagDefault;
        isSystemDMResult = closure_14(tmp6Result, obj8);
      }
      items1[4] = isSystemDMResult;
      return closure_15(closure_7, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let message;
      const obj = react2;
      const cResult = obj.c(3);
      ({ message, channel } = arg0);
      if (cResult[0] === channel.guild_id) {
        let tmp4;
        if (cResult[1] === message.author) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      const obj2 = {
        user: message.author,
        guildId: channel.guild_id,
        size: native.AvatarSizes.LARGE_48,
        avatarDecoration: message.author.avatarDecoration,
      };
      const Avatar = native.Avatar;
      const tmp5 = authStore2(Avatar, obj2);
      cResult[0] = channel.guild_id;
      cResult[1] = message.author;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (guildId) => {
      const message = guildId.message;
      const obj = {
        user: message.author,
        guildId: guildId.channel.guild_id,
        size: native.AvatarSizes.LARGE_48,
        avatarDecoration: message.author.avatarDecoration,
      };
      const Avatar = native.Avatar;
      return authStore2(Avatar, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (muted) => {
      let channel;
      let items1;
      let items2;
      let message;
      let timestamp;
      let timestampAccessibilityLabel;
      let tmp12;
      let tmp5;
      let tmp8;
      let tmp9;
      let obj = channel(576);
      const cResult = obj.c(33);
      ({ message, channel } = muted);
      muted = muted.muted;
      const tmp4 = closure_16();
      if (cResult[0] !== message.author) {
        const obj2 = UserUtilsDefault;
        const name = obj2.getName(message.author);
        cResult[0] = message.author;
        cResult[1] = name;
        tmp5 = name;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== channel) {
        const fn = function p() {
          const tmp = channel.isDM() || channel.isGroupDM();
          if (tmp) {
            const recipients = channel.recipients;
            const item = recipients.forEach((item) => {
              const obj = channel(closure_1_2[23]);
              return obj.getUser(item);
            });
          }
        };
        const items = [channel];
        cResult[2] = channel;
        cResult[3] = fn;
        cResult[4] = items;
        tmp9 = items;
        tmp8 = fn;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const effect = react.useEffect(tmp8, tmp9);
      const tmpResult = channel(16865);
      const searchMessageTimestamp = tmpResult.useSearchMessageTimestamp(message, channel);
      ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
      if (cResult[5] !== tmp5) {
        const obj3 = { lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: tmp5 };
        const tmp14 = closure_14(channel(4892).Text, obj3);
        cResult[5] = tmp5;
        cResult[6] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === muted) {
        let tmp15;
        let tmp19;
        if (cResult[8] === tmp4.channelStatus) {
          tmp15 = cResult[9];
        }
        if (cResult[10] !== channel) {
          let isSystemDMResult = channel.isSystemDM();
          if (isSystemDMResult) {
            const obj4 = { type: BotTagDefault.Types.SYSTEM_DM, verified: true };
            const tmp23 = BotTagDefault;
            isSystemDMResult = closure_14(tmp23, obj4);
          }
          cResult[10] = channel;
          cResult[11] = isSystemDMResult;
          tmp19 = isSystemDMResult;
        } else {
          tmp19 = cResult[11];
        }
        if (cResult[12] === tmp4.authorRow) {
          if (cResult[13] === tmp12) {
            if (cResult[14] === tmp15) {
              let tmp24;
              if (cResult[15] === tmp19) {
                tmp24 = cResult[16];
              }
              if (cResult[17] === tmp4.timestamp) {
                if (cResult[18] === timestamp) {
                  let tmp28;
                  if (cResult[19] === timestampAccessibilityLabel) {
                    tmp28 = cResult[20];
                  }
                  if (cResult[21] === message) {
                    let tmp31;
                    if (cResult[22] === tmp4.suppressNotificationsIcon) {
                      tmp31 = cResult[23];
                    }
                    if (cResult[24] === message) {
                      let tmp35;
                      if (cResult[25] === tmp4.pollBadge) {
                        tmp35 = cResult[26];
                      }
                      if (cResult[27] === tmp4.labelContainer) {
                        if (cResult[28] === tmp35) {
                          if (cResult[29] === tmp24) {
                            if (cResult[30] === tmp28) {
                              let tmp39;
                              if (cResult[31] === tmp31) {
                                tmp39 = cResult[32];
                              }
                              return tmp39;
                            }
                          }
                        }
                      }
                      const obj5 = { style: tmp4.labelContainer, children: items1 };
                      items1 = [tmp24, tmp28, tmp31, tmp35];
                      const tmp42 = closure_15(closure_7, obj5);
                      cResult[27] = tmp4.labelContainer;
                      cResult[28] = tmp35;
                      cResult[29] = tmp24;
                      cResult[30] = tmp28;
                      cResult[31] = tmp31;
                      cResult[32] = tmp42;
                      tmp39 = tmp42;
                    }
                    let tmp36 = null;
                    if (message.isPoll()) {
                      const obj6 = { style: tmp4.pollBadge };
                      tmp36 = closure_14(PollBadgeDefault, obj6);
                    }
                    cResult[24] = message;
                    cResult[25] = tmp4.pollBadge;
                    cResult[26] = tmp36;
                    tmp35 = tmp36;
                  }
                  let tmp33 = null;
                  if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
                    const obj7 = { size: "xs", style: tmp4.suppressNotificationsIcon };
                    tmp33 = closure_14(channel(13148).BellZIcon, obj7);
                  }
                  cResult[21] = message;
                  cResult[22] = tmp4.suppressNotificationsIcon;
                  cResult[23] = tmp33;
                  tmp31 = tmp33;
                }
              }
              const obj8 = {
                variant: "text-xs/medium",
                color: "interactive-text-active",
                lineClamp: 1,
                style: tmp4.timestamp,
                accessibilityLabel: timestampAccessibilityLabel,
                children: timestamp,
              };
              const tmp30 = closure_14(channel(4892).Text, obj8);
              cResult[17] = tmp4.timestamp;
              cResult[18] = timestamp;
              cResult[19] = timestampAccessibilityLabel;
              cResult[20] = tmp30;
              tmp28 = tmp30;
            }
          }
        }
        const obj9 = { style: tmp4.authorRow, children: items2 };
        items2 = [tmp12, tmp15, tmp19];
        const tmp27 = closure_15(closure_7, obj9);
        cResult[12] = tmp4.authorRow;
        cResult[13] = tmp12;
        cResult[14] = tmp15;
        cResult[15] = tmp19;
        cResult[16] = tmp27;
        tmp24 = tmp27;
      }
      let tmp16 = muted;
      if (tmp16) {
        const obj10 = {
          source: AssetRegistryDefault2,
          size: channel(1188).Icon.Sizes.EXTRA_SMALL,
          style: tmp4.channelStatus,
        };
        const Icon = channel(1188).Icon;
        tmp16 = closure_14(Icon, obj10);
      }
      cResult[7] = muted;
      cResult[8] = tmp4.channelStatus;
      cResult[9] = tmp16;
      tmp15 = tmp16;
    }
  : (message) => {
      let items2;
      let items3;
      let timestamp;
      let timestampAccessibilityLabel;
      message = message.message;
      const channel = message.channel;
      let muted = message.muted;
      let tmp = closure_16();
      const items = [message.author];
      const items1 = [channel];
      const memo = react.useMemo(() => {
        const obj = UserUtilsDefault;
        return obj.getName(message.author);
      }, items);
      const effect = react.useEffect(() => {
        const tmp = channel.isDM() || channel.isGroupDM();
        if (tmp) {
          const recipients = channel.recipients;
          const item = recipients.forEach((item) => {
            const obj = message(closure_1_2[23]);
            return obj.getUser(item);
          });
        }
      }, items1);
      let obj = message(16865);
      const searchMessageTimestamp = obj.useSearchMessageTimestamp(message, channel);
      const obj2 = { style: tmp.labelContainer, children: items3 };
      const obj3 = { style: tmp.authorRow, children: items2 };
      ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
      items2 = [
        closure_14(message(4892).Text, {
          lineClamp: 1,
          variant: "text-md/semibold",
          color: "interactive-text-active",
          children: memo,
        }),
        ,
      ];
      if (muted) {
        const obj4 = { source: channel(11078), size: message(1188).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
        const Icon = tmp4(1188).Icon;
        muted = closure_14(Icon, obj4);
      }
      items2[1] = muted;
      let isSystemDMResult = channel.isSystemDM();
      if (isSystemDMResult) {
        const obj5 = { type: channel(8990).Types.SYSTEM_DM, verified: true };
        const tmp13 = channel(8990);
        isSystemDMResult = closure_14(tmp13, obj5);
      }
      items2[2] = isSystemDMResult;
      items3 = [closure_15(closure_7, obj3), , ,];
      const obj6 = {
        variant: "text-xs/medium",
        color: "interactive-text-active",
        lineClamp: 1,
        style: tmp.timestamp,
        accessibilityLabel: timestampAccessibilityLabel,
        children: timestamp,
      };
      items3[1] = closure_14(message(4892).Text, obj6);
      let tmp9Result = null;
      if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
        const obj7 = { size: "xs", style: tmp.suppressNotificationsIcon };
        tmp9Result = closure_14(tmp4(13148).BellZIcon, obj7);
      }
      items3[2] = tmp9Result;
      let tmp9Result2 = null;
      if (message.isPoll()) {
        const obj8 = { style: tmp.pollBadge };
        tmp9Result2 = closure_14(channel(16866), obj8);
      }
      items3[3] = tmp9Result2;
      return closure_15(closure_7, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let colorString;
      let colorStrings;
      let items1;
      let items2;
      let message;
      let nick;
      let roleStyle;
      let timestamp;
      let timestampAccessibilityLabel;
      let tmp11;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(33);
      ({ message, channel } = arg0);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function n() {
          return roleStyle.roleStyle;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      ({ nick, colorString, colorStrings } = useMessageAuthorDefault(message));
      useMessageAuthorDefault(message);
      if (cResult[2] === colorString) {
        if (cResult[3] === stateFromStores) {
          tmp11 = cResult[4];
        }
        const tmpResult4 = enhanced_role_colors_EnhancedRoleColorUtils;
        const processColorStringsArray = tmpResult4.useProcessColorStringsArray(colorStrings);
        const tmpResult5 = enhanced_role_colors_EnhancedRoleColorUtils;
        const isRoleStyleAndRoleColorsEligibleForERC = tmpResult5.useIsRoleStyleAndRoleColorsEligibleForERC(
          channel.guild_id,
          message.author.id,
          stateFromStores,
          processColorStringsArray,
        );
        const tmpResult6 = useSearchMessageTimestamp;
        const searchMessageTimestamp = tmpResult6.useSearchMessageTimestamp(message, channel);
        ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
        if (cResult[5] === colorString) {
          if (cResult[6] === colorStrings) {
            let tmp19;
            if (cResult[7] === stateFromStores) {
              tmp19 = cResult[8];
            }
            let tmp23;
            if (isRoleStyleAndRoleColorsEligibleForERC) {
              tmp23 = processColorStringsArray;
            }
            if (cResult[9] === tmp11) {
              if (cResult[10] === nick) {
                let tmp24;
                if (cResult[11] === tmp23) {
                  tmp24 = cResult[12];
                }
                if (cResult[13] === tmp4.authorRow) {
                  if (cResult[14] === tmp19) {
                    let tmp27;
                    if (cResult[15] === tmp24) {
                      tmp27 = cResult[16];
                    }
                    if (cResult[17] === tmp4.timestamp) {
                      if (cResult[18] === timestamp) {
                        let tmp31;
                        if (cResult[19] === timestampAccessibilityLabel) {
                          tmp31 = cResult[20];
                        }
                        if (cResult[21] === message) {
                          let tmp34;
                          if (cResult[22] === tmp4.suppressNotificationsIcon) {
                            tmp34 = cResult[23];
                          }
                          if (cResult[24] === message) {
                            let tmp38;
                            if (cResult[25] === tmp4.pollBadge) {
                              tmp38 = cResult[26];
                            }
                            if (cResult[27] === tmp4.labelContainer) {
                              if (cResult[28] === tmp38) {
                                if (cResult[29] === tmp27) {
                                  if (cResult[30] === tmp31) {
                                    let tmp41;
                                    if (cResult[31] === tmp34) {
                                      tmp41 = cResult[32];
                                    }
                                    return tmp41;
                                  }
                                }
                              }
                            }
                            const obj2 = { style: tmp4.labelContainer, children: items1 };
                            items1 = [tmp27, tmp31, tmp34, tmp38];
                            const tmp44 = closure_15(metroImportDefault, obj2);
                            cResult[27] = tmp4.labelContainer;
                            cResult[28] = tmp38;
                            cResult[29] = tmp27;
                            cResult[30] = tmp31;
                            cResult[31] = tmp34;
                            cResult[32] = tmp44;
                            tmp41 = tmp44;
                          }
                          let tmp39 = null;
                          if (message.isPoll()) {
                            const obj3 = { style: tmp4.pollBadge };
                            tmp39 = authStore2(PollBadgeDefault, obj3);
                          }
                          cResult[24] = message;
                          cResult[25] = tmp4.pollBadge;
                          cResult[26] = tmp39;
                          tmp38 = tmp39;
                        }
                        let tmp36 = null;
                        if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
                          const obj4 = { size: "xs", style: tmp4.suppressNotificationsIcon };
                          tmp36 = authStore2(BellZIcon.BellZIcon, obj4);
                        }
                        cResult[21] = message;
                        cResult[22] = tmp4.suppressNotificationsIcon;
                        cResult[23] = tmp36;
                        tmp34 = tmp36;
                      }
                    }
                    const obj5 = {
                      variant: "text-xs/medium",
                      color: "text-default",
                      lineClamp: 1,
                      style: tmp4.timestamp,
                      accessibilityLabel: timestampAccessibilityLabel,
                      children: timestamp,
                    };
                    const tmp33 = authStore2(Text_Text.Text, obj5);
                    cResult[17] = tmp4.timestamp;
                    cResult[18] = timestamp;
                    cResult[19] = timestampAccessibilityLabel;
                    cResult[20] = tmp33;
                    tmp31 = tmp33;
                  }
                }
                const obj6 = { style: tmp4.authorRow, children: items2 };
                items2 = [tmp19, tmp24];
                const tmp30 = closure_15(metroImportDefault, obj6);
                cResult[13] = tmp4.authorRow;
                cResult[14] = tmp19;
                cResult[15] = tmp24;
                cResult[16] = tmp30;
                tmp27 = tmp30;
              }
            }
            const obj7 = {
              variant: "text-sm/semibold",
              color: "interactive-text-active",
              lineClamp: 1,
              style: tmp11,
              gradientColors: tmp23,
              children: nick,
            };
            const tmp26 = authStore2(Text_Text.Text, obj7);
            cResult[9] = tmp11;
            cResult[10] = nick;
            cResult[11] = tmp23;
            cResult[12] = tmp26;
            tmp24 = tmp26;
          }
        }
        let tmp20 = "dot" === stateFromStores && null != colorString;
        if (tmp20) {
          const obj8 = { size: "small", color: colorString, colors: colorStrings };
          tmp20 = authStore2(native.RoleDot, obj8);
        }
        cResult[5] = colorString;
        cResult[6] = colorStrings;
        cResult[7] = stateFromStores;
        cResult[8] = tmp20;
        tmp19 = tmp20;
      }
      if ("username" === stateFromStores) {
        let obj10;
        if (null != colorString) {
          obj10 = { color: colorString };
          const obj9 = { color: colorString };
        }
        cResult[2] = colorString;
        cResult[3] = stateFromStores;
        cResult[4] = obj10;
        tmp11 = obj10;
      }
      obj10 = {};
    }
  : (arg0) => {
      let channel;
      let colorString;
      let colorStrings;
      let items1;
      let items2;
      let message;
      let roleStyle;
      let timestamp;
      let timestampAccessibilityLabel;
      let tmp22;
      ({ message, channel } = arg0);
      const tmp = closure_16();
      const items = [AccessibilityStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
      ({ colorString, colorStrings } = useMessageAuthorDefault(message));
      useMessageAuthorDefault(message);
      if ("username" === stateFromStores) {
        const tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
        const processColorStringsArray = tmp2Result.useProcessColorStringsArray(colorStrings);
        const tmp2Result3 = enhanced_role_colors_EnhancedRoleColorUtils;
        const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result3.useIsRoleStyleAndRoleColorsEligibleForERC(
          channel.guild_id,
          message.author.id,
          stateFromStores,
          processColorStringsArray,
        );
        const tmp2Result4 = useSearchMessageTimestamp;
        const searchMessageTimestamp = tmp2Result4.useSearchMessageTimestamp(message, channel);
        let tmp18 = "dot" === stateFromStores;
        const obj3 = { style: tmp.labelContainer, children: items2 };
        const obj4 = { style: tmp.authorRow, children: items1 };
        ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
        if (tmp18) {
          tmp18 = null != colorString;
        }
        if (tmp18) {
          const obj5 = { size: "small", color: colorString, colors: colorStrings };
          tmp18 = authStore2(native.RoleDot, obj5);
        }
        items1 = [tmp18];
        const obj6 = {
          variant: "text-sm/semibold",
          color: "interactive-text-active",
          lineClamp: 1,
          style: {},
          gradientColors: tmp22,
          children: tmp7,
        };
        tmp22 = undefined;
        const Text = Text_Text.Text;
        if (isRoleStyleAndRoleColorsEligibleForERC) {
          tmp22 = processColorStringsArray;
        }
        items1[1] = authStore2(Text, obj6);
        items2 = [closure_15(metroImportDefault, obj4), , ,];
        const obj7 = {
          variant: "text-xs/medium",
          color: "text-default",
          lineClamp: 1,
          style: tmp.timestamp,
          accessibilityLabel: timestampAccessibilityLabel,
          children: timestamp,
        };
        items2[1] = authStore2(Text_Text.Text, obj7);
        let tmp21Result = null;
        if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
          const obj8 = { size: "xs", style: tmp.suppressNotificationsIcon };
          tmp21Result = authStore2(BellZIcon.BellZIcon, obj8);
        }
        items2[2] = tmp21Result;
        let tmp21Result2 = null;
        if (message.isPoll()) {
          const obj9 = { style: tmp.pollBadge };
          tmp21Result2 = authStore2(PollBadgeDefault, obj9);
        }
        items2[3] = tmp21Result2;
        return closure_15(metroImportDefault, obj3);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel_id) => {
      let first;
      let tmp6;
      let tmp9;
      _require = channel_id;
      const obj = require("react");
      const cResult = obj.c(16);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel_id.channel_id) {
        const fn = function n() {
          return ChannelStore.getChannel(channel_id.channel_id);
        };
        cResult[1] = channel_id.channel_id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [FavoriteStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === guild_id) {
        let tmp11;
        let tmp13;
        if (cResult[5] === channel_id.channel_id) {
          tmp11 = cResult[6];
        }
        const tmpResult4 = require("get initialized");
        const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp11);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [UserGuildSettingsStore];
          cResult[7] = items2;
          tmp13 = items2;
        } else {
          tmp13 = cResult[7];
        }
        if (cResult[8] === guild_id) {
          let tmp15;
          if (cResult[9] === channel_id.channel_id) {
            tmp15 = cResult[10];
          }
          const tmpResult5 = require("get initialized");
          const stateFromStores2 = tmpResult5.useStateFromStores(tmp13, tmp15);
          const tmpResult6 = require("SpoilerChannelUtils");
          const isChannelSpoilerGated = tmpResult6.useIsChannelSpoilerGated(stateFromStores);
          if (cResult[11] === stateFromStores) {
            if (cResult[12] === stateFromStores1) {
              if (cResult[13] === isChannelSpoilerGated) {
                let tmp18;
                if (cResult[14] === stateFromStores2) {
                  tmp18 = cResult[15];
                }
                return tmp18;
              }
            }
          }
          const obj2 = {
            channel: stateFromStores,
            muted: stateFromStores2,
            isFavorite: stateFromStores1,
            isSpoilerHidden: isChannelSpoilerGated,
          };
          cResult[11] = stateFromStores;
          cResult[12] = stateFromStores1;
          cResult[13] = isChannelSpoilerGated;
          cResult[14] = stateFromStores2;
          cResult[15] = obj2;
          tmp18 = obj2;
        }
        const fn3 = function _() {
          return UserGuildSettingsStore.isChannelMuted(guild_id, channel_id.channel_id);
        };
        cResult[8] = guild_id;
        cResult[9] = channel_id.channel_id;
        cResult[10] = fn3;
        tmp15 = fn3;
      }
      const fn2 = function c() {
        const isFavoriteResult = null != guild_id && FavoriteStore.isFavorite(channel_id.channel_id);
        return isFavoriteResult;
      };
      cResult[4] = guild_id;
      cResult[5] = channel_id.channel_id;
      cResult[6] = fn2;
      tmp11 = fn2;
    }
  : (arg0) => {
      let closure_0;
      let items2;
      let stateFromStores1;
      let tmpResult3;
      let tmpResult4;
      _require = arg0;
      const items = [ChannelStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0.channel_id));
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      const items1 = [FavoriteStore];
      const obj2 = {
        channel: stateFromStores,
        muted: tmpResult3.useStateFromStores(items2, () =>
          UserGuildSettingsStore.isChannelMuted(guild_id, closure_0.channel_id),
        ),
        isFavorite: stateFromStores1,
        isSpoilerHidden: tmpResult4.useIsChannelSpoilerGated(stateFromStores),
      };
      const tmpResult = require("get initialized");
      stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
        const isFavoriteResult = null != guild_id && FavoriteStore.isFavorite(closure_0.channel_id);
        return isFavoriteResult;
      });
      items2 = [UserGuildSettingsStore];
      tmpResult3 = require("get initialized");
      tmpResult4 = require("SpoilerChannelUtils");
      return obj2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let channel;
      let header;
      let intl;
      let isSpoilerHidden;
      let lineClamp;
      let messageSizeCacheRef;
      let muted;
      let onPress;
      let obj = react2;
      const cResult = obj.c(26);
      message = message.message;
      ({ channel, muted, isSpoilerHidden, header, onPress } = message);
      ({ lineClamp, messageSizeCacheRef } = message);
      const tmp4 = closure_16();
      if (cResult[0] === message.channel_id) {
        if (cResult[1] === message.id) {
          let tmp5;
          if (cResult[2] === onPress) {
            tmp5 = cResult[3];
          }
          const tmp7 = null == channel.guild_id ? closure_19 : closure_20;
          if (cResult[4] === channel) {
            let tmp8;
            if (cResult[5] === message) {
              tmp8 = cResult[6];
            }
            if (cResult[7] === tmp7) {
              if (cResult[8] === channel) {
                if (cResult[9] === message) {
                  let tmp12;
                  let tmp16Result;
                  if (cResult[10] === muted) {
                    tmp12 = cResult[11];
                  }
                  if (cResult[12] === channel) {
                    if (cResult[13] === isSpoilerHidden) {
                      if (cResult[14] === lineClamp) {
                        if (cResult[15] === message) {
                          if (cResult[16] === messageSizeCacheRef) {
                            let tmp15;
                            if (cResult[17] === tmp4.spoilerText) {
                              tmp15 = cResult[18];
                            }
                            if (cResult[19] === tmp5) {
                              if (cResult[20] === header) {
                                if (cResult[21] === tmp4.body) {
                                  if (cResult[22] === tmp8) {
                                    if (cResult[23] === tmp12) {
                                      let tmp18;
                                      if (cResult[24] === tmp15) {
                                        tmp18 = cResult[25];
                                      }
                                      return tmp18;
                                    }
                                  }
                                }
                              }
                            }
                            const obj2 = {
                              header,
                              icon: tmp8,
                              label: tmp12,
                              subLabel: tmp15,
                              onPress: tmp5,
                              bodyStyle: tmp4.body,
                            };
                            const tmp20 = authStore2(SearchListRow2.SearchListRow, obj2);
                            cResult[19] = tmp5;
                            cResult[20] = header;
                            cResult[21] = tmp4.body;
                            cResult[22] = tmp8;
                            cResult[23] = tmp12;
                            cResult[24] = tmp15;
                            cResult[25] = tmp20;
                            tmp18 = tmp20;
                          }
                        }
                      }
                    }
                  }
                  if (isSpoilerHidden) {
                    const obj3 = {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      style: tmp4.spoilerText,
                      children: intl.string(intl2.t["5uaI/7"]),
                    };
                    const Text = Text_Text.Text;
                    intl = intl2.intl;
                    tmp16Result = authStore2(Text, obj3);
                  } else {
                    const obj4 = {
                      message,
                      channel,
                      muted: false,
                      layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY,
                      color: "interactive-text-default",
                      lineClamp,
                      messageSizeCacheRef,
                    };
                    const NativeMessageChannelRowPreview = ChannelRowPreview.NativeMessageChannelRowPreview;
                    tmp16Result = authStore2(NativeMessageChannelRowPreview, obj4);
                  }
                  cResult[12] = channel;
                  cResult[13] = isSpoilerHidden;
                  cResult[14] = lineClamp;
                  cResult[15] = message;
                  cResult[16] = messageSizeCacheRef;
                  cResult[17] = tmp4.spoilerText;
                  cResult[18] = tmp16Result;
                  tmp15 = tmp16Result;
                }
              }
            }
            const obj5 = { message, channel, muted };
            const tmp14 = authStore2(tmp7, obj5);
            cResult[7] = tmp7;
            cResult[8] = channel;
            cResult[9] = message;
            cResult[10] = muted;
            cResult[11] = tmp14;
            tmp12 = tmp14;
          }
          const obj6 = { message, channel };
          const tmp11 = authStore2(closure_18, obj6);
          cResult[4] = channel;
          cResult[5] = message;
          cResult[6] = tmp11;
          tmp8 = tmp11;
        }
      }
      const fn = function l() {
        const obj = { channelId: message.channel_id, messageId: message.id };
        onPress(obj);
      };
      cResult[0] = message.channel_id;
      cResult[1] = message.id;
      cResult[2] = onPress;
      cResult[3] = fn;
      tmp5 = fn;
    }
  : (message) => {
      let channel;
      let header;
      let intl;
      let isSpoilerHidden;
      let lineClamp;
      let messageSizeCacheRef;
      let muted;
      let onPress;
      let tmp3;
      let tmp4Result;
      message = message.message;
      ({ channel, onPress } = message);
      ({ muted, isSpoilerHidden, header, lineClamp, messageSizeCacheRef } = message);
      const tmp = closure_16();
      const items = [, ,];
      ({ channel_id: arr[0], id: arr[1] } = message);
      items[2] = onPress;
      const callback = react.useCallback(() => {
        const obj = { channelId: message.channel_id, messageId: message.id };
        onPress(obj);
      }, items);
      let obj = {
        header,
        icon: authStore2(closure_18, { message, channel }),
        label: authStore2(tmp3, { message, channel, muted }),
        subLabel: tmp4Result,
        onPress: callback,
        bodyStyle: tmp.body,
      };
      tmp3 = null == channel.guild_id ? closure_19 : closure_20;
      const SearchListRow = SearchListRow2.SearchListRow;
      if (isSpoilerHidden) {
        const obj2 = {
          variant: "text-sm/normal",
          color: "text-muted",
          style: tmp.spoilerText,
          children: intl.string(intl2.t["5uaI/7"]),
        };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        tmp4Result = authStore2(Text, obj2);
      } else {
        const obj3 = {
          message,
          channel,
          muted: false,
          layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY,
          color: "interactive-text-default",
          lineClamp,
          messageSizeCacheRef,
        };
        const NativeMessageChannelRowPreview = ChannelRowPreview.NativeMessageChannelRowPreview;
        tmp4Result = authStore2(NativeMessageChannelRowPreview, obj3);
      }
      return authStore2(SearchListRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let channel;
      let isFavorite;
      let isSpoilerHidden;
      let muted;
      let tmp2;
      let tmp3;
      const obj = react2;
      const cResult = obj.c(14);
      if (cResult[0] !== message) {
        message = message.message;
        const tmp6 = _objectWithoutProperties(message, closure_3);
        cResult[0] = message;
        cResult[1] = message;
        cResult[2] = tmp6;
        tmp3 = tmp6;
        tmp2 = message;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      ({ channel, muted, isFavorite, isSpoilerHidden } = closure_21(tmp2));
      closure_21(tmp2);
      if (cResult[3] === channel) {
        if (cResult[4] === isFavorite) {
          let tmp8;
          if (cResult[5] === muted) {
            tmp8 = cResult[6];
          }
          let tmp13 = null;
          if (null != channel) {
            if (cResult[7] === channel) {
              if (cResult[8] === tmp8) {
                if (cResult[9] === isSpoilerHidden) {
                  if (cResult[10] === tmp2) {
                    if (cResult[11] === muted) {
                      let tmp14;
                      if (cResult[12] === tmp3) {
                        tmp14 = cResult[13];
                      }
                      tmp13 = tmp14;
                    }
                  }
                }
              }
            }
            const obj2 = { message: tmp2, channel, muted, isSpoilerHidden, header: tmp8 };
            const merged = Object.assign(tmp3);
            const tmp20 = authStore2(closure_22, obj2);
            cResult[7] = channel;
            cResult[8] = tmp8;
            cResult[9] = isSpoilerHidden;
            cResult[10] = tmp2;
            cResult[11] = muted;
            cResult[12] = tmp3;
            cResult[13] = tmp20;
            tmp14 = tmp20;
          }
          return tmp13;
        }
      }
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      let tmp10 = null;
      if (null != guild_id) {
        const obj3 = { channel, muted, isFavorite };
        tmp10 = authStore2(closure_17, obj3);
      }
      cResult[3] = channel;
      cResult[4] = isFavorite;
      cResult[5] = muted;
      cResult[6] = tmp10;
      tmp8 = tmp10;
    }
  : (message) => {
      message = message.message;
      let tmp = null;
      const merged = Object.assign(message, Object.assign({ message: 0 }));
      let tmp3 = closure_21(message);
      const channel = tmp3.channel;
      const muted = tmp3.muted;
      const isFavorite = tmp3.isFavorite;
      const items = [channel, isFavorite, muted];
      const isSpoilerHidden = tmp3.isSpoilerHidden;
      if (null != channel) {
        let obj = { message, channel, muted, isSpoilerHidden, header: tmp4 };
        const merged1 = Object.assign(merged);
        tmp = closure_14(closure_22, obj);
      }
      return tmp;
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (message) => {
        let channel;
        let isSpoilerHidden;
        let muted;
        let tmp2;
        let tmp3;
        const obj = react2;
        const cResult = obj.c(9);
        if (cResult[0] !== message) {
          message = message.message;
          const tmp6 = _objectWithoutProperties(message, closure_4);
          cResult[0] = message;
          cResult[1] = message;
          cResult[2] = tmp6;
          tmp3 = tmp6;
          tmp2 = message;
        } else {
          tmp2 = cResult[1];
          tmp3 = cResult[2];
        }
        ({ channel, muted, isSpoilerHidden } = closure_21(tmp2));
        let tmp8 = null;
        closure_21(tmp2);
        if (null != channel) {
          if (cResult[3] === channel) {
            if (cResult[4] === isSpoilerHidden) {
              if (cResult[5] === tmp2) {
                if (cResult[6] === muted) {
                  let tmp9;
                  if (cResult[7] === tmp3) {
                    tmp9 = cResult[8];
                  }
                  tmp8 = tmp9;
                }
              }
            }
          }
          const obj2 = { message: tmp2, channel, muted, isSpoilerHidden, header: null };
          const merged = Object.assign(tmp3);
          const tmp15 = authStore2(closure_22, obj2);
          cResult[3] = channel;
          cResult[4] = isSpoilerHidden;
          cResult[5] = tmp2;
          cResult[6] = muted;
          cResult[7] = tmp3;
          cResult[8] = tmp15;
          tmp9 = tmp15;
        }
        return tmp8;
      }
    : (message) => {
        message = message.message;
        const merged = Object.assign(message, Object.assign({ message: 0 }));
        const channel = closure_21(message).channel;
        let tmp5 = null;
        closure_21(message);
        if (null != channel) {
          const obj = { message, channel, muted: tmp3, isSpoilerHidden: tmp4, header: null };
          const merged1 = Object.assign(merged);
          tmp5 = authStore2(closure_22, obj);
        }
        return tmp5;
      },
);
const memoResult1 = react.memo(tmp4);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/MessageRow.tsx");

export default memoResult1;
export const HeaderlessMessageRow = memoResult;
