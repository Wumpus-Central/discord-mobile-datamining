// === Module 16040: VoiceUsers ===

// Module 16040 (VoiceUsers)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7508 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10723 */;
import ChannelListLayout from "ChannelListLayout" /* 11698 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12187 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = {};
let closure_9 = [];
let c10 = "text-sm/medium";
const createStyles = fn(4890);
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
  const obj = { listeners: { display: "flex", flexDirection: "row", alignItems: "center", padding: 4, marginTop: 4, marginLeft: -8 }, listenersCollapsed: { flexDirection: "row", alignItems: "center", backgroundColor: BACKGROUND_BASE_LOWEST, borderRadius: round, marginLeft: -16, marginTop: 4, paddingLeft: 2, paddingRight: 6 }, listenersIconWrapper: null, listenersText: null, userCollapsedOverlap: null, headphonesIcon: null };
  const merged = Object.assign(ChannelListLayout.makeSizeStyle(20));
  obj.listenersIconWrapper = { alignItems: "center", justifyContent: "center", backgroundColor: BACKGROUND_BASE_LOWEST, marginRight: 8, marginLeft: 4, borderRadius: round };
  obj.listenersText = { marginRight: 4 };
  obj.userCollapsedOverlap = { marginLeft: -20 };
  const obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: BACKGROUND_BASE_LOWEST, marginRight: 8, marginLeft: 4, borderRadius: round };
  obj.headphonesIcon = ChannelListLayout.makeSizeStyle(14);
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_12 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((collapsed) => {
  const cResult = channel(576).c(21);
  ({ voiceState, channel } = collapsed);
  collapsed = collapsed.collapsed;
  const user = voiceState.user;
  ({ member, voiceState: voiceState2 } = voiceState);
  const obj = channel(576);
  const tmp4 = user;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    if (cResult[2] === user.id) {
      let tmp8 = cResult[3];
      let tmp9 = cResult[4];
    }
    const stateFromStoresObject = channel(504).useStateFromStoresObject(first, tmp8, tmp9);
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
    if (cResult[5] === channel) {
      if (cResult[6] === collapsed) {
        if (cResult[7] === isGuest) {
          if (cResult[8] === member) {
            if (cResult[9] === user) {
              if (cResult[10] === voiceState2.deaf) {
                if (cResult[11] === voiceState2.mute) {
                  if (cResult[12] === voiceState2.selfDeaf) {
                    if (cResult[13] === voiceState2.selfMute) {
                      if (cResult[14] === voiceState2.selfVideo) {
                        if (cResult[15] === voiceState2.sessionId) {
                          if (cResult[16] === voiceState2.suppress) {
                            let tmp13 = cResult[17];
                          }
                          if (cResult[18] === userCollapsedOverlap) {
                            if (cResult[19] === tmp13) {
                              let tmp16 = cResult[20];
                            }
                            return tmp16;
                          }
                          const obj2 = { style: userCollapsedOverlap, children: tmp13 };
                          const tmp19 = closure_6(View, obj2);
                          cResult[18] = userCollapsedOverlap;
                          cResult[19] = tmp13;
                          cResult[20] = tmp19;
                          tmp16 = tmp19;
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
    const obj4 = { user, member, mute: null, deaf: null, selfVideo: null, selfMute: null, selfDeaf: null, suppress: null, collapsed: null, sessionId: null, channel: null, isGuest: null };
    ({ mute: obj3.mute, deaf: obj3.deaf, selfVideo: obj3.selfVideo, selfMute: obj3.selfMute, selfDeaf: obj3.selfDeaf, suppress: obj3.suppress } = voiceState2);
    obj4.collapsed = collapsed;
    obj4.sessionId = voiceState2.sessionId;
    obj4.channel = channel;
    obj4.isGuest = isGuest;
    const tmp15 = closure_6(tmp4(16041), obj4, user.id);
    cResult[5] = channel;
    cResult[6] = collapsed;
    cResult[7] = isGuest;
    cResult[8] = member;
    cResult[9] = user;
    cResult[10] = voiceState2.deaf;
    cResult[11] = voiceState2.mute;
    cResult[12] = voiceState2.selfDeaf;
    cResult[13] = voiceState2.selfMute;
    cResult[14] = voiceState2.selfVideo;
    cResult[15] = voiceState2.sessionId;
    cResult[16] = voiceState2.suppress;
    cResult[17] = tmp15;
    tmp13 = tmp15;
    const tmpResult = channel(504);
  }
  const fn = function u() {
    return { storeMember: GuildMemberStore.getMember(channel.guild_id, user.id), isGuest: GuildMemberStore.isGuestOrLurker(channel.guild_id, user.id) };
  };
  const items1 = [channel.guild_id, user.id];
  cResult[1] = channel.guild_id;
  cResult[2] = user.id;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = fn;
  tmp5 = closure_11(user(7508)());
}) : ((voiceState) => {
  voiceState = voiceState.voiceState;
  const user = voiceState.user;
  ({ member, voiceState: voiceState2 } = voiceState);
  const channel = voiceState.channel;
  const collapsed = voiceState.collapsed;
  const tmp = channel;
  const tmp3 = closure_11(channel(7508)());
  const items = [GuildMemberStore];
  const items1 = [channel.guild_id, user.id];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => ({ storeMember: GuildMemberStore.getMember(channel.guild_id, user.id), isGuest: GuildMemberStore.isGuestOrLurker(channel.guild_id, user.id) }), items1);
  let userCollapsedOverlap = null;
  ({ storeMember, isGuest } = stateFromStoresObject);
  if (collapsed) {
    userCollapsedOverlap = null;
    if (!voiceState.isFirst) {
      userCollapsedOverlap = tmp3.userCollapsedOverlap;
    }
  }
  const obj2 = { style: userCollapsedOverlap, children: null };
  const obj5 = { user, member: null, mute: null, deaf: null, selfVideo: null, selfMute: null, selfDeaf: null, suppress: null, collapsed: null, sessionId: null, channel: null, isGuest: null };
  const obj = user(504);
  if (member == null) {
    member = storeMember;
  }
  obj5.member = member;
  ({ mute: obj3.mute, deaf: obj3.deaf, selfVideo: obj3.selfVideo, selfMute: obj3.selfMute, selfDeaf: obj3.selfDeaf, suppress: obj3.suppress } = voiceState2);
  obj5.collapsed = collapsed;
  obj5.sessionId = voiceState2.sessionId;
  obj5.channel = channel;
  obj5.isGuest = isGuest;
  obj2.children = closure_6(tmp(16041), obj5, user.id);
  return closure_6(View, obj2);
}));
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
      const obj4 = { style: tmp4.listenersText, variant, color: "redesign-channel-name-muted-text", children: tmp5 };
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
}) : ((arg0) => {
  ({ audienceCount, collapsed } = arg0);
  const tmp2 = closure_11(useIsUsingClientThemeDefault());
  let formatToPlainStringResult = audienceCount;
  if (!collapsed) {
    const intl = util.intl;
    const obj = { count: audienceCount };
    formatToPlainStringResult = intl.formatToPlainString(util.t["+v2pN2"], obj);
  }
  const obj2 = { style: collapsed ? tmp2.listenersCollapsed : tmp2.listeners, children: null };
  const obj3 = { style: tmp2.listenersIconWrapper, children: timestampProducer(HeadphonesIcon.HeadphonesIcon, { color: "redesign-channel-name-muted-text", size: "custom", style: tmp2.headphonesIcon }) };
  const items = [timestampProducer(View, obj3), timestampProducer(Text_Text.Text, { style: tmp2.listenersText, variant, color: "redesign-channel-name-muted-text", children: formatToPlainStringResult })];
  obj2.children = items;
  return React5(View, obj2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUsers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((collapsed) => {
  let tmp2 = dependencyMap;
  const cResult = collapsed(576).c(20);
  collapsed = collapsed.collapsed;
  const channel = collapsed.channel;
  ({ voiceStates, audienceCount } = collapsed);
  let tmp4 = channel;
  const tmp5 = channel(9391)("channel_list");
  const guild_id = channel.guild_id;
  if (cResult[0] === tmp5) {
    if (cResult[1] === guild_id) {
      if (cResult[2] === voiceStates) {
        const arr2 = tmp4(16045)(cResult[3]);
        if (cResult[4] === guild_id) {
          if (cResult[5] === arr2) {
            const subscribeGuildMembers = tmp(6814).useSubscribeGuildMembers(cResult[6], "voice_channel_games");
            if (cResult[7] === channel) {
              if (cResult[8] === collapsed) {
                let tmp13 = cResult[9];
              }
              if (0 === voiceStates.length) {
                return null;
              } else {
                if (cResult[10] === tmp13) {
                  if (cResult[11] === voiceStates) {
                    let tmp16 = cResult[12];
                  }
                  if (cResult[13] === audienceCount) {
                    if (cResult[14] === collapsed) {
                      let tmp18 = cResult[15];
                    }
                    if (cResult[16] === collapsed) {
                      if (cResult[17] === tmp16) {
                      }
                    }
                    tmp4 = tmp4(16048);
                    const obj2 = { collapsed, children: null };
                    const items = [tmp16, tmp18];
                    obj2.children = items;
                    tmp2 = closure_7(tmp4, obj2);
                    cResult[16] = collapsed;
                    cResult[17] = tmp16;
                    cResult[18] = tmp18;
                    cResult[19] = tmp2;
                  }
                  let tmp19 = null != audienceCount && audienceCount > 0;
                  if (tmp19) {
                    const obj3 = { audienceCount, collapsed };
                    tmp19 = closure_6(closure_13, obj3);
                  }
                  cResult[13] = audienceCount;
                  cResult[14] = collapsed;
                  cResult[15] = tmp19;
                  tmp18 = tmp19;
                }
                const mapped = voiceStates.map(tmp13);
                cResult[10] = tmp13;
                cResult[11] = voiceStates;
                cResult[12] = mapped;
                tmp16 = mapped;
              }
            }
            const fn = function x(voiceState, arg1) {
              return timestampProducer(closure_12, { voiceState, channel, collapsed, isFirst: 0 === arg1 }, "voice-user-item-" + voiceState.user.id + "-" + voiceState.voiceState.sessionId);
            };
            cResult[7] = channel;
            cResult[8] = collapsed;
            cResult[9] = fn;
            tmp13 = fn;
            const tmpResult = tmp(6814);
          }
        }
        if (null == guild_id) {
          let tmp10 = closure_8;
          cResult[4] = guild_id;
          cResult[5] = arr2;
          cResult[6] = tmp10;
        }
        const obj4 = {};
        obj4[guild_id] = arr2;
        tmp10 = obj4;
      }
    }
  }
  if (!tmp5) {
    let mapped1 = closure_9;
    cResult[0] = tmp5;
    cResult[1] = guild_id;
    cResult[2] = voiceStates;
    cResult[3] = mapped1;
  }
  const substr = voiceStates.slice(0, tmp(6814).MAX_GUILD_MEMBER_SUBSCRIPTIONS);
  mapped1 = substr.map((user) => user.user.id);
  const obj = collapsed(576);
}) : ((collapsed) => {
  collapsed = collapsed.collapsed;
  const channel = collapsed.channel;
  ({ voiceStates, audienceCount } = collapsed);
  noop = undefined;
  const guild_id = channel.guild_id;
  if (tmp3) {
    if (null != guild_id) {
      const substr = voiceStates.slice(0, collapsed(tmp2[17]).MAX_GUILD_MEMBER_SUBSCRIPTIONS);
      let mapped = substr.map((user) => user.user.id);
    }
    const tmp4Result = tmp4(mapped);
    noop = tmp4Result;
    const items = [guild_id, tmp4Result];
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
    const subscribeGuildMembers = collapsed(tmp2[17]).useSubscribeGuildMembers(memo, "voice_channel_games");
    let tmp15Result = null;
    if (0 !== voiceStates.length) {
      const obj2 = { collapsed, children: null };
      const items1 = [voiceStates.map((voiceState, index) => timestampProducer(closure_12, { voiceState, channel, collapsed, isFirst: 0 === index }, "voice-user-item-" + voiceState.user.id + "-" + voiceState.voiceState.sessionId)), ];
      let tmp17 = null != audienceCount && audienceCount > 0;
      if (tmp17) {
        const obj3 = { audienceCount, collapsed };
        tmp17 = closure_6(closure_13, obj3);
      }
      items1[1] = tmp17;
      obj2.children = items1;
      tmp15Result = closure_7(tmp(tmp2[19]), obj2);
      const tmpResult = tmp(tmp2[19]);
    }
    return tmp15Result;
  }
  mapped = closure_9;
  tmp = channel;
  tmp3 = channel(guild_id[16])("channel_list");
});
export const getAudienceItemHeight = function getAudienceItemHeight(fontScale) {
  return 8 + Math.max(20, useScaledTextLineHeight.scaleTextLineHeight(c10, fontScale));
};