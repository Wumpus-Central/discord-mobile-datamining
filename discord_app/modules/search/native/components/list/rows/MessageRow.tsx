// discord_app/modules/search/native/components/list/rows/MessageRow.tsx
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import native from "../../../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../../../channel/useChannelName.tsx";
import useMessageAuthorDefault from "../../../../../messages/useMessageAuthor.tsx";
import ChannelListLayoutTypes from "../../../../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import BotTagDefault from "../../../../../applications/native/BotTag.tsx";
import _modDef10129 from "../../../../../../../_runtime/metro/10129__.js";
import _modDef11078 from "../../../../../../../_runtime/metro/11078__.js";
import ChannelRowPreview from "../../../../../main_tabs_v2/native/shared_components/ChannelRowPreview.tsx";
import BellZIcon from "../../../../../../design/components/Icon/native/redesign/generated/BellZIcon.tsx";
import SearchListRow from "../SearchListRow.tsx";
import useSearchMessageTimestamp from "../../../hooks/useSearchMessageTimestamp.tsx";
import PollBadgeDefault from "../../../../../polls/native/PollBadge.tsx";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import FavoriteStore from "../../../../../favorites/FavoriteStore.tsx";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
let closure_3 = ["message"];
let closure_4 = ["message"];
get_ActivityIndicator = fn(17);
({ Platform, View: closure_7 } = get_ActivityIndicator);
const MessageFlags = fn(1085).MessageFlags;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  channelIcon: { marginRight: 5, alignSelf: "center" },
  channelStatus: { marginLeft: 5, alignSelf: "center", tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT },
  labelContainer: { flexDirection: "row", width: "100%", marginBottom: 2, alignItems: "center" },
  authorRow: { flexShrink: 1, minWidth: 0, flexDirection: "row" },
  timestamp: { marginLeft: 8 },
  header: { flexDirection: "row", marginRight: 16, marginBottom: 12 },
  body: { alignItems: "flex-start" },
  pollBadge: { marginLeft: 8 },
  suppressNotificationsIcon: { marginLeft: 4 },
  spoilerText: { fontStyle: "italic" },
};
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(26);
      channel = channel.channel;
      ({ muted, isFavorite } = channel);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function n() {
          guild = GuildStore.getGuild(channel.guild_id);
          let rulesChannelId;
          if (guild != null) {
            rulesChannelId = guild.rulesChannelId;
          }
          return rulesChannelId;
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = channel(576);
      const tmp8 = channel(504).useStateFromStores(first, tmp7) === channel.id;
      if (cResult[3] === channel) {
        if (cResult[4] === tmp8) {
          let tmp9 = cResult[5];
        }
        const tmp12 = useChannelNameDefault(channel);
        if (cResult[6] === tmp9) {
          if (cResult[7] === tmp4.channelIcon) {
            let tmp13 = cResult[8];
          }
          if (cResult[9] !== tmp12) {
            const obj2 = {
              lineClamp: 1,
              variant: "text-sm/semibold",
              color: "interactive-text-default",
              children: tmp12,
            };
            const tmp18 = closure_14(tmp(4892).Text, obj2);
            cResult[9] = tmp12;
            cResult[10] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] === muted) {
            if (cResult[12] === tmp4.channelStatus) {
              let tmp19 = cResult[13];
            }
            if (cResult[14] === isFavorite) {
              if (cResult[15] === tmp4.channelStatus) {
                let tmp22 = cResult[16];
              }
              if (cResult[17] !== channel) {
                let isSystemDMResult = channel.isSystemDM();
                if (isSystemDMResult) {
                  const obj3 = { type: BotTagDefault.Types.SYSTEM_DM, verified: true };
                  isSystemDMResult = closure_14(BotTagDefault, obj3);
                  const tmp11Result = BotTagDefault;
                }
                cResult[17] = channel;
                cResult[18] = isSystemDMResult;
                let tmp25 = isSystemDMResult;
              } else {
                tmp25 = cResult[18];
              }
              if (cResult[19] === tmp4.header) {
                if (cResult[20] === tmp13) {
                  if (cResult[21] === tmp16) {
                    if (cResult[22] === tmp19) {
                      if (cResult[23] === tmp22) {
                        if (cResult[24] === tmp25) {
                          let tmp29 = cResult[25];
                        }
                        return tmp29;
                      }
                    }
                  }
                }
              }
              const obj4 = { style: tmp4.header, children: null };
              const items1 = [tmp13, tmp16, tmp19, tmp22, tmp25];
              obj4.children = items1;
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
            if (isFavorite) {
              const obj5 = { source: _modDef10129, size: tmp(1188).Icon.Sizes.EXTRA_SMALL, style: tmp4.channelStatus };
              tmp23 = closure_14(tmp(1188).Icon, obj5);
            }
            cResult[14] = isFavorite;
            cResult[15] = tmp4.channelStatus;
            cResult[16] = tmp23;
            tmp22 = tmp23;
          }
          let tmp20 = muted;
          if (muted) {
            const obj6 = { source: _modDef11078, size: tmp(1188).Icon.Sizes.EXTRA_SMALL, style: tmp4.channelStatus };
            tmp20 = closure_14(tmp(1188).Icon, obj6);
          }
          cResult[11] = muted;
          cResult[12] = tmp4.channelStatus;
          cResult[13] = tmp20;
          tmp19 = tmp20;
        }
        const obj7 = { source: tmp9, size: tmp(1188).Icon.Sizes.REFRESH_SMALL_16, style: tmp4.channelIcon };
        const tmp15 = closure_14(tmp(1188).Icon, obj7);
        cResult[6] = tmp9;
        cResult[7] = tmp4.channelIcon;
        cResult[8] = tmp15;
        tmp13 = tmp15;
      }
      const tmpResult = channel(504);
      const channelIcon = channel(5819).getChannelIcon(channel, { isRulesChannel: tmp8 });
      cResult[3] = channel;
      cResult[4] = tmp8;
      cResult[5] = channelIcon;
      tmp9 = channelIcon;
      const tmpResult2 = channel(5819);
    }
  : (channel) => {
      channel = channel.channel;
      ({ muted, isFavorite } = channel);
      const tmp = closure_16();
      const items = [GuildStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => {
        guild = GuildStore.getGuild(channel.guild_id);
        let rulesChannelId;
        if (guild != null) {
          rulesChannelId = guild.rulesChannelId;
        }
        return rulesChannelId;
      });
      const obj = channel(504);
      const channelIcon = channel(5819).getChannelIcon(channel, { isRulesChannel: stateFromStores === channel.id });
      const obj4 = { style: tmp.header, children: null };
      const obj2 = channel(5819);
      const obj3 = { isRulesChannel: stateFromStores === channel.id };
      const tmp7 = useChannelNameDefault(channel);
      const items1 = [
        closure_14(channel(1188).Icon, {
          source: channelIcon,
          size: channel(1188).Icon.Sizes.REFRESH_SMALL_16,
          style: tmp.channelIcon,
        }),
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
        const obj6 = { source: _modDef11078, size: tmp2(1188).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
        muted = closure_14(tmp2(1188).Icon, obj6);
      }
      items1[2] = muted;
      if (isFavorite) {
        const obj7 = { source: _modDef10129, size: tmp2(1188).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
        isFavorite = closure_14(tmp2(1188).Icon, obj7);
      }
      items1[3] = isFavorite;
      let isSystemDMResult = channel.isSystemDM();
      if (isSystemDMResult) {
        const obj8 = { type: BotTagDefault.Types.SYSTEM_DM, verified: true };
        isSystemDMResult = closure_14(BotTagDefault, obj8);
        const tmp6Result = BotTagDefault;
      }
      items1[4] = isSystemDMResult;
      obj4.children = items1;
      return closure_15(closure_7, obj4);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      ({ message, channel } = arg0);
      if (cResult[0] === channel.guild_id) {
        if (cResult[1] === message.author) {
          let tmp4 = cResult[2];
        }
        return tmp4;
      }
      const tmp5 = state(native.Avatar, {
        user: message.author,
        guildId: channel.guild_id,
        size: native.AvatarSizes.LARGE_48,
        avatarDecoration: message.author.avatarDecoration,
      });
      cResult[0] = channel.guild_id;
      cResult[1] = message.author;
      cResult[2] = tmp5;
      tmp4 = tmp5;
      const obj2 = {
        user: message.author,
        guildId: channel.guild_id,
        size: native.AvatarSizes.LARGE_48,
        avatarDecoration: message.author.avatarDecoration,
      };
    }
  : (guildId) => {
      const message = guildId.message;
      return state(native.Avatar, {
        user: message.author,
        guildId: guildId.channel.guild_id,
        size: native.AvatarSizes.LARGE_48,
        avatarDecoration: message.author.avatarDecoration,
      });
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (muted) => {
      const cResult = channel(576).c(33);
      ({ message, channel } = muted);
      muted = muted.muted;
      const tmp4 = closure_16();
      if (cResult[0] !== message.author) {
        const name = UserUtilsDefault.getName(message.author);
        cResult[0] = message.author;
        cResult[1] = name;
        let tmp5 = name;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== channel) {
        const fn = function p() {
          if (tmp) {
            const recipients = channel.recipients;
            const item = recipients.forEach((item) => channel(closure_1_2[23]).getUser(item));
          }
          tmp = channel.isDM() || channel.isGroupDM();
        };
        const items = [channel];
        cResult[2] = channel;
        cResult[3] = fn;
        cResult[4] = items;
        let tmp9 = items;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      const obj = channel(576);
      const searchMessageTimestamp = channel(16865).useSearchMessageTimestamp(message, channel);
      ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
      if (cResult[5] !== tmp5) {
        const obj3 = { lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: tmp5 };
        const tmp14 = closure_14(channel(4892).Text, obj3);
        cResult[5] = tmp5;
        cResult[6] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === muted) {
        if (cResult[8] === tmp4.channelStatus) {
          let tmp15 = cResult[9];
        }
        if (cResult[10] !== channel) {
          let isSystemDMResult = channel.isSystemDM();
          if (isSystemDMResult) {
            const obj4 = { type: BotTagDefault.Types.SYSTEM_DM, verified: true };
            isSystemDMResult = closure_14(BotTagDefault, obj4);
          }
          cResult[10] = channel;
          cResult[11] = isSystemDMResult;
          let tmp19 = isSystemDMResult;
        } else {
          tmp19 = cResult[11];
        }
        if (cResult[12] === tmp4.authorRow) {
          if (cResult[13] === tmp12) {
            if (cResult[14] === tmp15) {
              if (cResult[15] === tmp19) {
                let tmp24 = cResult[16];
              }
              if (cResult[17] === tmp4.timestamp) {
                if (cResult[18] === timestamp) {
                  if (cResult[19] === timestampAccessibilityLabel) {
                    let tmp28 = cResult[20];
                  }
                  if (cResult[21] === message) {
                    if (cResult[22] === tmp4.suppressNotificationsIcon) {
                      let tmp31 = cResult[23];
                    }
                    if (cResult[24] === message) {
                      if (cResult[25] === tmp4.pollBadge) {
                        let tmp35 = cResult[26];
                      }
                      if (cResult[27] === tmp4.labelContainer) {
                        if (cResult[28] === tmp35) {
                          if (cResult[29] === tmp24) {
                            if (cResult[30] === tmp28) {
                              if (cResult[31] === tmp31) {
                                let tmp39 = cResult[32];
                              }
                              return tmp39;
                            }
                          }
                        }
                      }
                      const obj5 = { style: tmp4.labelContainer, children: null };
                      const items1 = [tmp24, tmp28, tmp31, tmp35];
                      obj5.children = items1;
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
        const obj9 = { style: tmp4.authorRow, children: null };
        const items2 = [tmp12, tmp15, tmp19];
        obj9.children = items2;
        const tmp27 = closure_15(closure_7, obj9);
        cResult[12] = tmp4.authorRow;
        cResult[13] = tmp12;
        cResult[14] = tmp15;
        cResult[15] = tmp19;
        cResult[16] = tmp27;
        tmp24 = tmp27;
      }
      let tmp16 = muted;
      if (muted) {
        const obj10 = { source: _modDef11078, size: channel(1188).Icon.Sizes.EXTRA_SMALL, style: tmp4.channelStatus };
        tmp16 = closure_14(channel(1188).Icon, obj10);
      }
      cResult[7] = muted;
      cResult[8] = tmp4.channelStatus;
      cResult[9] = tmp16;
      tmp15 = tmp16;
      const tmpResult = channel(16865);
    }
  : (message) => {
      message = message.message;
      const channel = message.channel;
      let muted = message.muted;
      let tmp = closure_16();
      const items = [message.author];
      const items1 = [channel];
      const memo = noop.useMemo(() => UserUtilsDefault.getName(message.author), items);
      const effect = noop.useEffect(() => {
        if (tmp) {
          const recipients = channel.recipients;
          const item = recipients.forEach((item) => message(closure_1_2[23]).getUser(item));
        }
        tmp = channel.isDM() || channel.isGroupDM();
      }, items1);
      const searchMessageTimestamp = message(16865).useSearchMessageTimestamp(message, channel);
      const obj2 = { style: tmp.labelContainer, children: null };
      const obj3 = { style: tmp.authorRow, children: null };
      ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
      const items2 = [
        closure_14(message(4892).Text, {
          lineClamp: 1,
          variant: "text-md/semibold",
          color: "interactive-text-active",
          children: memo,
        }),
        ,
      ];
      if (muted) {
        const obj4 = { source: channel(11078), size: tmp4(1188).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
        muted = closure_14(tmp4(1188).Icon, obj4);
      }
      items2[1] = muted;
      let isSystemDMResult = channel.isSystemDM();
      if (isSystemDMResult) {
        const obj5 = { type: channel(8990).Types.SYSTEM_DM, verified: true };
        isSystemDMResult = closure_14(channel(8990), obj5);
        const tmp13 = channel(8990);
      }
      items2[2] = isSystemDMResult;
      obj3.children = items2;
      const items3 = [
        closure_15(closure_7, obj3),
        closure_14(message(4892).Text, {
          variant: "text-xs/medium",
          color: "interactive-text-active",
          lineClamp: 1,
          style: tmp.timestamp,
          accessibilityLabel: timestampAccessibilityLabel,
          children: timestamp,
        }),
        ,
      ];
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
      obj2.children = items3;
      return closure_15(closure_7, obj2);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(33);
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
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      const tmpResult = initialize;
      ({ nick, colorString, colorStrings } = useMessageAuthorDefault(message));
      if (cResult[2] === colorString) {
        if (cResult[3] === stateFromStores) {
          const processColorStringsArray =
            enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(colorStrings);
          const tmpResult5 = enhanced_role_colors_EnhancedRoleColorUtils;
          const isRoleStyleAndRoleColorsEligibleForERC = tmpResult5.useIsRoleStyleAndRoleColorsEligibleForERC(
            channel.guild_id,
            message.author.id,
            stateFromStores,
            processColorStringsArray,
          );
          const tmpResult4 = enhanced_role_colors_EnhancedRoleColorUtils;
          const searchMessageTimestamp = useSearchMessageTimestamp.useSearchMessageTimestamp(message, channel);
          ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
          if (cResult[5] === colorString) {
            if (cResult[6] === colorStrings) {
              if (cResult[7] === stateFromStores) {
                let tmp20 = cResult[8];
              }
              let tmp24;
              if (isRoleStyleAndRoleColorsEligibleForERC) {
                tmp24 = processColorStringsArray;
              }
              if (cResult[9] === tmp11) {
                if (cResult[10] === nick) {
                  if (cResult[11] === tmp24) {
                    let tmp25 = cResult[12];
                  }
                  if (cResult[13] === tmp4.authorRow) {
                    if (cResult[14] === tmp20) {
                      if (cResult[15] === tmp25) {
                        let tmp28 = cResult[16];
                      }
                      if (cResult[17] === tmp4.timestamp) {
                        if (cResult[18] === timestamp) {
                          if (cResult[19] === timestampAccessibilityLabel) {
                            let tmp32 = cResult[20];
                          }
                          if (cResult[21] === message) {
                            if (cResult[22] === tmp4.suppressNotificationsIcon) {
                              let tmp35 = cResult[23];
                            }
                            if (cResult[24] === message) {
                              if (cResult[25] === tmp4.pollBadge) {
                                let tmp39 = cResult[26];
                              }
                              if (cResult[27] === tmp4.labelContainer) {
                                if (cResult[28] === tmp39) {
                                  if (cResult[29] === tmp28) {
                                    if (cResult[30] === tmp32) {
                                      if (cResult[31] === tmp35) {
                                        let tmp42 = cResult[32];
                                      }
                                      return tmp42;
                                    }
                                  }
                                }
                              }
                              const obj2 = { style: tmp4.labelContainer, children: null };
                              const items1 = [tmp28, tmp32, tmp35, tmp39];
                              obj2.children = items1;
                              const tmp45 = closure_1_15(React5, obj2);
                              cResult[27] = tmp4.labelContainer;
                              cResult[28] = tmp39;
                              cResult[29] = tmp28;
                              cResult[30] = tmp32;
                              cResult[31] = tmp35;
                              cResult[32] = tmp45;
                              tmp42 = tmp45;
                            }
                            let tmp40 = null;
                            if (message.isPoll()) {
                              const obj3 = { style: tmp4.pollBadge };
                              tmp40 = state(PollBadgeDefault, obj3);
                            }
                            cResult[24] = message;
                            cResult[25] = tmp4.pollBadge;
                            cResult[26] = tmp40;
                            tmp39 = tmp40;
                          }
                          let tmp37 = null;
                          if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
                            const obj4 = { size: "xs", style: tmp4.suppressNotificationsIcon };
                            tmp37 = state(BellZIcon.BellZIcon, obj4);
                          }
                          cResult[21] = message;
                          cResult[22] = tmp4.suppressNotificationsIcon;
                          cResult[23] = tmp37;
                          tmp35 = tmp37;
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
                      const tmp34 = state(Text_Text.Text, obj5);
                      cResult[17] = tmp4.timestamp;
                      cResult[18] = timestamp;
                      cResult[19] = timestampAccessibilityLabel;
                      cResult[20] = tmp34;
                      tmp32 = tmp34;
                    }
                  }
                  const obj6 = { style: tmp4.authorRow, children: null };
                  const items2 = [tmp20, tmp25];
                  obj6.children = items2;
                  const tmp31 = closure_1_15(React5, obj6);
                  cResult[13] = tmp4.authorRow;
                  cResult[14] = tmp20;
                  cResult[15] = tmp25;
                  cResult[16] = tmp31;
                  tmp28 = tmp31;
                }
              }
              const obj7 = {
                variant: "text-sm/semibold",
                color: "interactive-text-active",
                lineClamp: 1,
                style: tmp11,
                gradientColors: tmp24,
                children: nick,
              };
              const tmp27 = state(Text_Text.Text, obj7);
              cResult[9] = tmp11;
              cResult[10] = nick;
              cResult[11] = tmp24;
              cResult[12] = tmp27;
              tmp25 = tmp27;
            }
          }
          let tmp21 = "dot" === stateFromStores;
          if (tmp21) {
            tmp21 = null != colorString;
          }
          if (tmp21) {
            const obj8 = { size: "small", color: colorString, colors: colorStrings };
            tmp21 = state(native.RoleDot, obj8);
          }
          cResult[5] = colorString;
          cResult[6] = colorStrings;
          cResult[7] = stateFromStores;
          cResult[8] = tmp21;
          tmp20 = tmp21;
          const tmpResult6 = useSearchMessageTimestamp;
        }
      }
      if ("username" !== stateFromStores) {
        let obj9 = {};
        cResult[2] = colorString;
        cResult[3] = stateFromStores;
        cResult[4] = obj9;
      }
      obj9 = { color: colorString };
      const tmp10 = useMessageAuthorDefault(message);
    }
  : (arg0) => {
      ({ message, channel } = arg0);
      const tmp = closure_16();
      const items = [AccessibilityStore];
      const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
      ({ colorString, colorStrings } = useMessageAuthorDefault(message));
      if ("username" === stateFromStores) {
        if (null != colorString) {
          const obj2 = { color: colorString };
        }
        const processColorStringsArray =
          enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(colorStrings);
        const tmp2Result3 = enhanced_role_colors_EnhancedRoleColorUtils;
        const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result3.useIsRoleStyleAndRoleColorsEligibleForERC(
          channel.guild_id,
          message.author.id,
          stateFromStores,
          processColorStringsArray,
        );
        const tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
        const searchMessageTimestamp = useSearchMessageTimestamp.useSearchMessageTimestamp(message, channel);
        const obj3 = { style: tmp.labelContainer, children: null };
        const obj4 = { style: tmp.authorRow, children: null };
        let tmp18 = "dot" === stateFromStores;
        ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
        if (tmp18) {
          tmp18 = null != colorString;
        }
        if (tmp18) {
          const obj5 = { size: "small", color: colorString, colors: colorStrings };
          tmp18 = state(native.RoleDot, obj5);
        }
        const items1 = [tmp18];
        const obj6 = {
          variant: "text-sm/semibold",
          color: "interactive-text-active",
          lineClamp: 1,
          style: {},
          gradientColors: null,
          children: null,
        };
        let tmp22;
        if (isRoleStyleAndRoleColorsEligibleForERC) {
          tmp22 = processColorStringsArray;
        }
        obj6.gradientColors = tmp22;
        obj6.children = tmp7;
        items1[1] = state(Text_Text.Text, obj6);
        obj4.children = items1;
        const items2 = [closure_1_15(React5, obj4), , ,];
        const obj7 = {
          variant: "text-xs/medium",
          color: "text-default",
          lineClamp: 1,
          style: tmp.timestamp,
          accessibilityLabel: timestampAccessibilityLabel,
          children: timestamp,
        };
        items2[1] = state(Text_Text.Text, obj7);
        let tmp21Result = null;
        if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
          const obj8 = { size: "xs", style: tmp.suppressNotificationsIcon };
          tmp21Result = state(BellZIcon.BellZIcon, obj8);
        }
        items2[2] = tmp21Result;
        let tmp21Result2 = null;
        if (message.isPoll()) {
          const obj9 = { style: tmp.pollBadge };
          tmp21Result2 = state(PollBadgeDefault, obj9);
        }
        items2[3] = tmp21Result2;
        obj3.children = items2;
        return closure_1_15(React5, obj3);
      }
      const tmp6 = useMessageAuthorDefault(message);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel_id) => {
      _require = channel_id;
      const cResult = require("c").c(16);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel_id.channel_id) {
        const fn = function n() {
          return ChannelStore.getChannel(channel_id.channel_id);
        };
        cResult[1] = channel_id.channel_id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [FavoriteStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === guild_id) {
        if (cResult[5] === channel_id.channel_id) {
          let tmp11 = cResult[6];
        }
        const stateFromStores1 = tmp(504).useStateFromStores(tmp9, tmp11);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [UserGuildSettingsStore];
          cResult[7] = items2;
          let tmp13 = items2;
        } else {
          tmp13 = cResult[7];
        }
        if (cResult[8] === guild_id) {
          if (cResult[9] === channel_id.channel_id) {
            let tmp15 = cResult[10];
          }
          const stateFromStores2 = tmp(504).useStateFromStores(tmp13, tmp15);
          const tmpResult5 = tmp(504);
          const isChannelSpoilerGated = tmp(6842).useIsChannelSpoilerGated(stateFromStores);
          if (cResult[11] === stateFromStores) {
            if (cResult[12] === stateFromStores1) {
              if (cResult[13] === isChannelSpoilerGated) {
                if (cResult[14] === stateFromStores2) {
                  let tmp18 = cResult[15];
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
          const tmpResult6 = tmp(6842);
        }
        const fn3 = function _() {
          return UserGuildSettingsStore.isChannelMuted(guild_id, channel_id.channel_id);
        };
        cResult[8] = guild_id;
        cResult[9] = channel_id.channel_id;
        cResult[10] = fn3;
        tmp15 = fn3;
        const tmpResult4 = tmp(504);
      }
      const fn2 = function c() {
        let isFavoriteResult = null != guild_id;
        if (isFavoriteResult) {
          isFavoriteResult = FavoriteStore.isFavorite(channel_id.channel_id);
        }
        return isFavoriteResult;
      };
      cResult[4] = guild_id;
      cResult[5] = channel_id.channel_id;
      cResult[6] = fn2;
      tmp11 = fn2;
      const tmpResult = require("initialize");
    }
  : (arg0) => {
      _require = arg0;
      const items = [ChannelStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        ChannelStore.getChannel(closure_0.channel_id),
      );
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      const obj = require("initialize");
      const items1 = [FavoriteStore];
      const obj2 = { channel: stateFromStores, muted: null, isFavorite: null, isSpoilerHidden: null };
      const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
        let isFavoriteResult = null != guild_id;
        if (isFavoriteResult) {
          isFavoriteResult = FavoriteStore.isFavorite(closure_0.channel_id);
        }
        return isFavoriteResult;
      });
      const tmpResult = require("initialize");
      const items2 = [UserGuildSettingsStore];
      obj2.muted = require("initialize").useStateFromStores(items2, () =>
        UserGuildSettingsStore.isChannelMuted(guild_id, closure_0.channel_id),
      );
      obj2.isFavorite = stateFromStores1;
      const tmpResult3 = require("initialize");
      obj2.isSpoilerHidden = require("SpoilerChannelUtils").useIsChannelSpoilerGated(stateFromStores);
      return obj2;
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      const cResult = c.c(26);
      message = message.message;
      ({ channel, muted, isSpoilerHidden, header, onPress } = message);
      ({ lineClamp, messageSizeCacheRef } = message);
      const tmp4 = closure_16();
      if (cResult[0] === message.channel_id) {
        if (cResult[1] === message.id) {
          if (cResult[2] === onPress) {
            let tmp5 = cResult[3];
          }
          const tmp7 = null == channel.guild_id ? closure_19 : closure_20;
          if (cResult[4] === channel) {
            if (cResult[5] === message) {
              let tmp8 = cResult[6];
            }
            if (cResult[7] === tmp7) {
              if (cResult[8] === channel) {
                if (cResult[9] === message) {
                  if (cResult[10] === muted) {
                    let tmp12 = cResult[11];
                  }
                  if (cResult[12] === channel) {
                    if (cResult[13] === isSpoilerHidden) {
                      if (cResult[14] === lineClamp) {
                        if (cResult[15] === message) {
                          if (cResult[16] === messageSizeCacheRef) {
                            if (cResult[17] === tmp4.spoilerText) {
                              if (cResult[19] === tmp5) {
                                if (cResult[20] === header) {
                                  if (cResult[21] === tmp4.body) {
                                    if (cResult[22] === tmp8) {
                                      if (cResult[23] === tmp12) {
                                        if (cResult[24] === tmp15) {
                                          let tmp19 = cResult[25];
                                        }
                                        return tmp19;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj2 = {
                                header,
                                icon: tmp8,
                                label: tmp12,
                                subLabel: cResult[18],
                                onPress: tmp5,
                                bodyStyle: tmp4.body,
                              };
                              const tmp21 = state(SearchListRow.SearchListRow, obj2);
                              cResult[19] = tmp5;
                              cResult[20] = header;
                              cResult[21] = tmp4.body;
                              cResult[22] = tmp8;
                              cResult[23] = tmp12;
                              cResult[24] = cResult[18];
                              cResult[25] = tmp21;
                              tmp19 = tmp21;
                            }
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
                      children: null,
                    };
                    const intl = util.intl;
                    obj3.children = intl.string(util.t["5uaI/7"]);
                    let tmp16Result = state(Text_Text.Text, obj3);
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
                    tmp16Result = state(ChannelRowPreview.NativeMessageChannelRowPreview, obj4);
                  }
                  cResult[12] = channel;
                  cResult[13] = isSpoilerHidden;
                  cResult[14] = lineClamp;
                  cResult[15] = message;
                  cResult[16] = messageSizeCacheRef;
                  messageSizeCacheRef = tmp4.spoilerText;
                  cResult[17] = messageSizeCacheRef;
                  cResult[18] = tmp16Result;
                }
              }
            }
            const obj5 = { message, channel, muted };
            const tmp14 = state(tmp7, obj5);
            cResult[7] = tmp7;
            cResult[8] = channel;
            cResult[9] = message;
            cResult[10] = muted;
            cResult[11] = tmp14;
            tmp12 = tmp14;
          }
          const obj6 = { message, channel };
          const tmp11 = state(closure_18, obj6);
          cResult[4] = channel;
          cResult[5] = message;
          cResult[6] = tmp11;
          tmp8 = tmp11;
        }
      }
      const fn = function l() {
        onPress({ channelId: message.channel_id, messageId: message.id });
      };
      cResult[0] = message.channel_id;
      cResult[1] = message.id;
      cResult[2] = onPress;
      cResult[3] = fn;
      tmp5 = fn;
    }
  : (message) => {
      message = message.message;
      ({ channel, onPress } = message);
      ({ muted, isSpoilerHidden, header, lineClamp, messageSizeCacheRef } = message);
      const tmp = closure_16();
      const items = [, ,];
      ({ channel_id: arr[0], id: arr[1] } = message);
      items[2] = onPress;
      const callback = noop.useCallback(() => {
        onPress({ channelId: message.channel_id, messageId: message.id });
      }, items);
      const obj = {
        header,
        icon: state(closure_18, { message, channel }),
        label: state(null == channel.guild_id ? closure_19 : closure_20, { message, channel, muted }),
        subLabel: null,
        onPress: null,
        bodyStyle: null,
      };
      if (isSpoilerHidden) {
        const obj2 = { variant: "text-sm/normal", color: "text-muted", style: tmp.spoilerText, children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t["5uaI/7"]);
        let tmp4Result = state(Text_Text.Text, obj2);
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
        tmp4Result = state(ChannelRowPreview.NativeMessageChannelRowPreview, obj3);
      }
      obj.subLabel = tmp4Result;
      obj.onPress = callback;
      obj.bodyStyle = tmp.body;
      return state(SearchListRow.SearchListRow, obj);
    };
fn(558);
let obj3 = { marginLeft: 5, alignSelf: "center", tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      const cResult = c.c(14);
      if (cResult[0] !== message) {
        message = message.message;
        const tmp6 = _objectWithoutProperties(message, closure_3);
        cResult[0] = message;
        cResult[1] = message;
        cResult[2] = tmp6;
        let tmp3 = tmp6;
        let tmp2 = message;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      ({ channel, muted, isFavorite, isSpoilerHidden } = closure_21(tmp2));
      if (cResult[3] === channel) {
        if (cResult[4] === isFavorite) {
          if (cResult[5] === muted) {
            let tmp8 = cResult[6];
          }
          if (null == channel) {
            return null;
          } else {
            if (cResult[7] === channel) {
              if (cResult[8] === tmp8) {
                if (cResult[9] === isSpoilerHidden) {
                  if (cResult[10] === tmp2) {
                    if (cResult[11] === muted) {
                    }
                  }
                }
              }
            }
            const obj2 = {};
            const merged = Object.assign(tmp3);
            obj2.message = tmp2;
            obj2.channel = channel;
            obj2.muted = muted;
            obj2.isSpoilerHidden = isSpoilerHidden;
            obj2.header = tmp8;
            const tmp20 = state(closure_22, obj2);
            cResult[7] = channel;
            cResult[8] = tmp8;
            cResult[9] = isSpoilerHidden;
            cResult[10] = tmp2;
            cResult[11] = muted;
            cResult[12] = tmp3;
            cResult[13] = tmp20;
          }
        }
      }
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      let tmp10 = null;
      if (null != guild_id) {
        const obj3 = { channel, muted, isFavorite };
        tmp10 = state(closure_17, obj3);
      }
      cResult[3] = channel;
      cResult[4] = isFavorite;
      cResult[5] = muted;
      cResult[6] = tmp10;
      tmp8 = tmp10;
      const tmp7 = closure_21(tmp2);
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
      if (null != channel) {
        let obj = {};
        const merged1 = Object.assign(merged);
        obj.message = message;
        obj.channel = channel;
        obj.muted = muted;
        obj.isSpoilerHidden = tmp3.isSpoilerHidden;
        obj.header = tmp4;
        tmp = closure_14(closure_22, obj);
      }
      return tmp;
    };
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (message) => {
        const cResult = c.c(9);
        if (cResult[0] !== message) {
          message = message.message;
          const tmp6 = _objectWithoutProperties(message, closure_4);
          cResult[0] = message;
          cResult[1] = message;
          cResult[2] = tmp6;
          let tmp3 = tmp6;
          let tmp2 = message;
        } else {
          tmp2 = cResult[1];
          tmp3 = cResult[2];
        }
        ({ channel, muted, isSpoilerHidden } = closure_21(tmp2));
        if (null == channel) {
          return null;
        } else {
          if (cResult[3] === channel) {
            if (cResult[4] === isSpoilerHidden) {
              if (cResult[5] === tmp2) {
                if (cResult[6] === muted) {
                }
              }
            }
          }
          const obj2 = {};
          const merged = Object.assign(tmp3);
          obj2.message = tmp2;
          obj2.channel = channel;
          obj2.muted = muted;
          obj2.isSpoilerHidden = isSpoilerHidden;
          obj2.header = null;
          const tmp14 = state(closure_22, obj2);
          cResult[3] = channel;
          cResult[4] = isSpoilerHidden;
          cResult[5] = tmp2;
          cResult[6] = muted;
          cResult[7] = tmp3;
          cResult[8] = tmp14;
        }
        const tmp7 = closure_21(tmp2);
      }
    : (message) => {
        message = message.message;
        const merged = Object.assign(message, Object.assign({ message: 0 }));
        const channel = closure_21(message).channel;
        let tmp5 = null;
        if (null != channel) {
          const obj = {};
          const merged1 = Object.assign(merged);
          obj.message = message;
          obj.channel = channel;
          obj.muted = tmp3;
          obj.isSpoilerHidden = tmp4;
          obj.header = null;
          tmp5 = state(closure_22, obj);
        }
        return tmp5;
      },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/MessageRow.tsx");

export default noop.memo(tmp4);
export const HeaderlessMessageRow = memoResult;
