// discord_app/modules/guild_sidebar/native/VoiceUsers.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useIsUsingClientThemeDefault from "../../client_themes/native/useIsUsingClientTheme.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import ChannelListLayout from "../../main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx";
import HeadphonesIcon from "../../../design/components/Icon/native/redesign/generated/HeadphonesIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = {};
let closure_9 = [];
let c10 = "text-sm/medium";
const createStyles = fn(5005);
let closure_11 = createStyles.createStyles((arg0) => {
  const colors = nativeDefault.colors;
  if (arg0) {
    let BACKGROUND_BASE_LOWEST = colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT;
    let tmp4 = importDefault;
  } else {
    BACKGROUND_BASE_LOWEST = colors.BACKGROUND_BASE_LOWEST;
    tmp4 = importDefault;
  }
  const round = tmp4(587).radii.round;
  const obj = {
    listeners: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 4,
      marginTop: 4,
      marginLeft: -8,
    },
    listenersCollapsed: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: BACKGROUND_BASE_LOWEST,
      borderRadius: round,
      marginLeft: -16,
      marginTop: 4,
      paddingLeft: 2,
      paddingRight: 6,
    },
    listenersIconWrapper: null,
    listenersText: null,
    userCollapsedOverlap: null,
    headphonesIcon: null,
  };
  const merged = Object.assign(ChannelListLayout.makeSizeStyle(20));
  obj.listenersIconWrapper = {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BACKGROUND_BASE_LOWEST,
    marginRight: 8,
    marginLeft: 4,
    borderRadius: round,
  };
  obj.listenersText = { marginRight: 4 };
  obj.userCollapsedOverlap = { marginLeft: -20 };
  const obj2 = {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BACKGROUND_BASE_LOWEST,
    marginRight: 8,
    marginLeft: 4,
    borderRadius: round,
  };
  obj.headphonesIcon = ChannelListLayout.makeSizeStyle(14);
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_12 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoiceStateUserItem(collapsed) {
        const cResult = channel(576).c(24);
        ({ voiceState, channel } = collapsed);
        collapsed = collapsed.collapsed;
        const user = voiceState.user;
        ({ member, voiceState: voiceState2 } = voiceState);
        const obj = channel(576);
        const tmp4 = user;
        const tmp5 = closure_11(user(9775)());
        const localSelfMuteDeaf = channel(9203).useLocalSelfMuteDeaf();
        if (cResult[0] === voiceState2) {
          if (cResult[1] === localSelfMuteDeaf) {
            let tmp7 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [GuildMemberStore];
            cResult[3] = items;
            let tmp10 = items;
          } else {
            tmp10 = cResult[3];
          }
          if (cResult[4] === channel.guild_id) {
            if (cResult[5] === user.id) {
              let tmp12 = cResult[6];
              let tmp13 = cResult[7];
            }
            const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp10, tmp12, tmp13);
            const isGuest = stateFromStoresObject.isGuest;
            let userCollapsedOverlap = null;
            if (collapsed) {
              userCollapsedOverlap = null;
              if (!collapsed.isFirst) {
                userCollapsedOverlap = tmp5.userCollapsedOverlap;
              }
            }
            if (member == null) {
              member = stateFromStoresObject.storeMember;
            }
            if (cResult[8] === channel) {
              if (cResult[9] === collapsed) {
                if (cResult[10] === isGuest) {
                  if (cResult[11] === member) {
                    if (cResult[12] === user) {
                      if (cResult[13] === tmp7.deaf) {
                        if (cResult[14] === tmp7.mute) {
                          if (cResult[15] === tmp7.selfDeaf) {
                            if (cResult[16] === tmp7.selfMute) {
                              if (cResult[17] === tmp7.selfVideo) {
                                if (cResult[18] === tmp7.sessionId) {
                                  if (cResult[19] === tmp7.suppress) {
                                    let tmp17 = cResult[20];
                                  }
                                  if (cResult[21] === userCollapsedOverlap) {
                                    if (cResult[22] === tmp17) {
                                      let tmp20 = cResult[23];
                                    }
                                    return tmp20;
                                  }
                                  const obj3 = { style: userCollapsedOverlap, children: tmp17 };
                                  const tmp23 = closure_6(View, obj3);
                                  cResult[21] = userCollapsedOverlap;
                                  cResult[22] = tmp17;
                                  cResult[23] = tmp23;
                                  tmp20 = tmp23;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj4 = {
              user,
              member,
              mute: null,
              deaf: null,
              selfVideo: null,
              selfMute: null,
              selfDeaf: null,
              suppress: null,
              collapsed: null,
              sessionId: null,
              channel: null,
              isGuest: null,
            };
            ({
              mute: obj5.mute,
              deaf: obj5.deaf,
              selfVideo: obj5.selfVideo,
              selfMute: obj5.selfMute,
              selfDeaf: obj5.selfDeaf,
              suppress: obj5.suppress,
            } = tmp7);
            obj4.collapsed = collapsed;
            obj4.sessionId = tmp7.sessionId;
            obj4.channel = channel;
            obj4.isGuest = isGuest;
            const tmp19 = closure_6(tmp4(18060), obj4, user.id);
            cResult[8] = channel;
            cResult[9] = collapsed;
            cResult[10] = isGuest;
            cResult[11] = member;
            cResult[12] = user;
            cResult[13] = tmp7.deaf;
            cResult[14] = tmp7.mute;
            cResult[15] = tmp7.selfDeaf;
            cResult[16] = tmp7.selfMute;
            cResult[17] = tmp7.selfVideo;
            cResult[18] = tmp7.sessionId;
            cResult[19] = tmp7.suppress;
            cResult[20] = tmp19;
            tmp17 = tmp19;
            const tmpResult = channel(504);
          }
          const fn = function y() {
            return {
              storeMember: GuildMemberStore.getMember(channel.guild_id, user.id),
              isGuest: GuildMemberStore.isGuestOrLurker(channel.guild_id, user.id),
            };
          };
          const items1 = [channel.guild_id, user.id];
          cResult[4] = channel.guild_id;
          cResult[5] = user.id;
          cResult[6] = fn;
          cResult[7] = items1;
          tmp13 = items1;
          tmp12 = fn;
        }
        const obj2 = channel(9203);
        const result = channel(9203).withLocalSelfMuteDeaf(voiceState2, localSelfMuteDeaf);
        cResult[0] = voiceState2;
        cResult[1] = localSelfMuteDeaf;
        cResult[2] = result;
        tmp7 = result;
        const tmpResult2 = channel(9203);
      }
    : function VoiceStateUserItem(voiceState) {
        voiceState = voiceState.voiceState;
        const user = voiceState.user;
        let member = voiceState.member;
        const channel = voiceState.channel;
        const collapsed = voiceState.collapsed;
        const tmp = channel;
        const tmp3 = closure_11(channel(9775)());
        const obj = user(9203);
        const result = obj.withLocalSelfMuteDeaf(voiceState.voiceState, user(9203).useLocalSelfMuteDeaf());
        const obj2 = user(9203);
        const items = [GuildMemberStore];
        const items1 = [channel.guild_id, user.id];
        const stateFromStoresObject = user(504).useStateFromStoresObject(
          items,
          () => ({
            storeMember: GuildMemberStore.getMember(channel.guild_id, user.id),
            isGuest: GuildMemberStore.isGuestOrLurker(channel.guild_id, user.id),
          }),
          items1,
        );
        let userCollapsedOverlap = null;
        ({ storeMember, isGuest } = stateFromStoresObject);
        if (collapsed) {
          userCollapsedOverlap = null;
          if (!voiceState.isFirst) {
            userCollapsedOverlap = tmp3.userCollapsedOverlap;
          }
        }
        const obj4 = { style: userCollapsedOverlap, children: null };
        const obj7 = {
          user,
          member: null,
          mute: null,
          deaf: null,
          selfVideo: null,
          selfMute: null,
          selfDeaf: null,
          suppress: null,
          collapsed: null,
          sessionId: null,
          channel: null,
          isGuest: null,
        };
        const obj3 = user(504);
        if (member == null) {
          member = storeMember;
        }
        obj7.member = member;
        ({
          mute: obj5.mute,
          deaf: obj5.deaf,
          selfVideo: obj5.selfVideo,
          selfMute: obj5.selfMute,
          selfDeaf: obj5.selfDeaf,
          suppress: obj5.suppress,
        } = result);
        obj7.collapsed = collapsed;
        obj7.sessionId = result.sessionId;
        obj7.channel = channel;
        obj7.isGuest = isGuest;
        obj4.children = closure_6(tmp(18060), obj7, user.id);
        return closure_6(View, obj4);
      },
);
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AudienceItem(arg0) {
      const cResult = c.c(15);
      ({ audienceCount, collapsed } = arg0);
      const tmp4 = closure_11(useIsUsingClientThemeDefault());
      if (cResult[0] === audienceCount) {
        if (cResult[1] === collapsed) {
          let tmp5 = cResult[2];
        }
        const tmp7 = collapsed ? tmp4.listenersCollapsed : tmp4.listeners;
        if (cResult[3] !== tmp4.headphonesIcon) {
          const obj2 = { color: "redesign-channel-name-muted-text", size: "custom", style: tmp4.headphonesIcon };
          const tmp10 = timestampProducer(HeadphonesIcon.HeadphonesIcon, obj2);
          cResult[3] = tmp4.headphonesIcon;
          cResult[4] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp4.listenersIconWrapper) {
          if (cResult[6] === tmp8) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === tmp4.listenersText) {
            if (cResult[9] === tmp5) {
              let tmp15 = cResult[10];
            }
            if (cResult[11] === tmp7) {
              if (cResult[12] === tmp11) {
                if (cResult[13] === tmp15) {
                  let tmp19 = cResult[14];
                }
                return tmp19;
              }
            }
            const obj3 = { style: tmp7, children: null };
            const items = [tmp11, tmp15];
            obj3.children = items;
            const tmp22 = React5(View, obj3);
            cResult[11] = tmp7;
            cResult[12] = tmp11;
            cResult[13] = tmp15;
            cResult[14] = tmp22;
            tmp19 = tmp22;
          }
          const obj4 = {
            style: tmp4.listenersText,
            variant,
            color: "redesign-channel-name-muted-text",
            children: tmp5,
          };
          const tmp18 = timestampProducer(Text_Text.Text, obj4);
          cResult[8] = tmp4.listenersText;
          cResult[9] = tmp5;
          cResult[10] = tmp18;
          tmp15 = tmp18;
        }
        const obj5 = { style: tmp4.listenersIconWrapper, children: tmp8 };
        const tmp14 = timestampProducer(View, obj5);
        cResult[5] = tmp4.listenersIconWrapper;
        cResult[6] = tmp8;
        cResult[7] = tmp14;
        tmp11 = tmp14;
      }
      let formatToPlainStringResult = audienceCount;
      if (!collapsed) {
        const intl = util.intl;
        const obj6 = { count: audienceCount };
        formatToPlainStringResult = intl.formatToPlainString(util.t["+v2pN2"], obj6);
      }
      cResult[0] = audienceCount;
      cResult[1] = collapsed;
      cResult[2] = formatToPlainStringResult;
      tmp5 = formatToPlainStringResult;
    }
  : function AudienceItem(arg0) {
      ({ audienceCount, collapsed } = arg0);
      const tmp2 = closure_11(useIsUsingClientThemeDefault());
      let formatToPlainStringResult = audienceCount;
      if (!collapsed) {
        const intl = util.intl;
        const obj = { count: audienceCount };
        formatToPlainStringResult = intl.formatToPlainString(util.t["+v2pN2"], obj);
      }
      const obj2 = { style: collapsed ? tmp2.listenersCollapsed : tmp2.listeners, children: null };
      const obj3 = {
        style: tmp2.listenersIconWrapper,
        children: timestampProducer(HeadphonesIcon.HeadphonesIcon, {
          color: "redesign-channel-name-muted-text",
          size: "custom",
          style: tmp2.headphonesIcon,
        }),
      };
      const items = [
        timestampProducer(View, obj3),
        timestampProducer(Text_Text.Text, {
          style: tmp2.listenersText,
          variant,
          color: "redesign-channel-name-muted-text",
          children: formatToPlainStringResult,
        }),
      ];
      obj2.children = items;
      return React5(View, obj2);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUsers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VoiceUsers(collapsed) {
      let tmp2 = dependencyMap;
      const cResult = collapsed(576).c(19);
      collapsed = collapsed.collapsed;
      const channel = collapsed.channel;
      ({ voiceStates, audienceCount } = collapsed);
      const guild_id = channel.guild_id;
      if (cResult[0] === guild_id) {
        if (cResult[1] === voiceStates) {
          let tmp5 = channel;
          const arr2 = channel(18064)(cResult[2]);
          if (cResult[3] === guild_id) {
            if (cResult[4] === arr2) {
              const subscribeGuildMembers = tmp(7468).useSubscribeGuildMembers(cResult[5], "voice_channel_games");
              if (cResult[6] === channel) {
                if (cResult[7] === collapsed) {
                  let tmp10 = cResult[8];
                }
                if (0 === voiceStates.length) {
                  return null;
                } else {
                  if (cResult[9] === tmp10) {
                    if (cResult[10] === voiceStates) {
                      let tmp13 = cResult[11];
                    }
                    if (cResult[12] === audienceCount) {
                      if (cResult[13] === collapsed) {
                        let tmp15 = cResult[14];
                      }
                      if (cResult[15] === collapsed) {
                        if (cResult[16] === tmp13) {
                        }
                      }
                      tmp5 = tmp5(18067);
                      const obj2 = { collapsed, children: null };
                      const items = [tmp13, tmp15];
                      obj2.children = items;
                      tmp2 = closure_7(tmp5, obj2);
                      cResult[15] = collapsed;
                      cResult[16] = tmp13;
                      cResult[17] = tmp15;
                      cResult[18] = tmp2;
                    }
                    let tmp16 = null != audienceCount && audienceCount > 0;
                    if (tmp16) {
                      const obj3 = { audienceCount, collapsed };
                      tmp16 = closure_6(closure_13, obj3);
                    }
                    cResult[12] = audienceCount;
                    cResult[13] = collapsed;
                    cResult[14] = tmp16;
                    tmp15 = tmp16;
                  }
                  const mapped = voiceStates.map(tmp10);
                  cResult[9] = tmp10;
                  cResult[10] = voiceStates;
                  cResult[11] = mapped;
                  tmp13 = mapped;
                }
              }
              function renderVoiceState(voiceState, arg1) {
                return timestampProducer(
                  closure_12,
                  { voiceState, channel, collapsed, isFirst: 0 === arg1 },
                  "voice-user-item-" + voiceState.user.id + "-" + voiceState.voiceState.sessionId,
                );
              }
              cResult[6] = channel;
              cResult[7] = collapsed;
              cResult[8] = renderVoiceState;
              tmp10 = renderVoiceState;
              const tmpResult = tmp(7468);
            }
          }
          if (null == guild_id) {
            let tmp7 = closure_8;
            cResult[3] = guild_id;
            cResult[4] = arr2;
            cResult[5] = tmp7;
          }
          const obj4 = {};
          obj4[guild_id] = arr2;
          tmp7 = obj4;
        }
      }
      if (null != guild_id) {
        const substr = voiceStates.slice(0, tmp(7468).MAX_GUILD_MEMBER_SUBSCRIPTIONS);
        let mapped1 = substr.map((user) => user.user.id);
      } else {
        mapped1 = closure_9;
      }
      cResult[0] = guild_id;
      cResult[1] = voiceStates;
      cResult[2] = mapped1;
      const obj = collapsed(576);
    }
  : function VoiceUsers(collapsed) {
      collapsed = collapsed.collapsed;
      const channel = collapsed.channel;
      ({ voiceStates, audienceCount } = collapsed);
      noop = undefined;
      const guild_id = channel.guild_id;
      if (null != guild_id) {
        const substr = voiceStates.slice(0, collapsed(tmp2[17]).MAX_GUILD_MEMBER_SUBSCRIPTIONS);
        let mapped = substr.map((user) => user.user.id);
      } else {
        mapped = closure_9;
      }
      const tmp3Result = channel(guild_id[18])(mapped);
      noop = tmp3Result;
      const items = [guild_id, tmp3Result];
      const memo = noop.useMemo(() => {
        if (null != guild_id) {
          if (length.length > 0) {
            const obj = {};
            obj[tmp] = tmp2;
            let tmp3 = obj;
          }
          return tmp3;
        }
        tmp3 = closure_8;
      }, items);
      const tmp = channel;
      let tmp3 = channel(guild_id[18]);
      const subscribeGuildMembers = collapsed(guild_id[17]).useSubscribeGuildMembers(memo, "voice_channel_games");
      let tmp10Result = null;
      if (0 !== voiceStates.length) {
        const obj2 = { collapsed, children: null };
        const items1 = [
          voiceStates.map(function renderVoiceState(voiceState, index) {
            return timestampProducer(
              closure_12,
              { voiceState, channel, collapsed, isFirst: 0 === index },
              "voice-user-item-" + voiceState.user.id + "-" + voiceState.voiceState.sessionId,
            );
          }),
        ];
        let tmp12 = null != audienceCount && audienceCount > 0;
        if (tmp12) {
          const obj3 = { audienceCount, collapsed };
          tmp12 = closure_6(closure_13, obj3);
        }
        items1[1] = tmp12;
        obj2.children = items1;
        tmp10Result = closure_7(tmp(tmp2[19]), obj2);
        const tmpResult = tmp(tmp2[19]);
      }
      return tmp10Result;
    };
export function getAudienceItemHeight(fontScale) {
  return 8 + Math.max(20, useScaledTextLineHeight.scaleTextLineHeight(c10, fontScale));
}
