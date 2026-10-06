// === Module 16083: VoiceUsers ===

// Module 16083 (VoiceUsers)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7519 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10736 */;
import ChannelListLayout from "ChannelListLayout" /* 11712 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12202 */;
import react_mod from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = {};
let closure_9 = [];
let c10 = "text-sm/medium";
let closure_11 = createStyles.createStyles((arg0) => {
  let BACKGROUND_BASE_LOWEST;
  let obj2;
  let obj4;
  let tmp5;
  const colors = nativeDefault.colors;
  const tmp3 = arg0;
  if (tmp3) {
    BACKGROUND_BASE_LOWEST = colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT;
    tmp5 = importDefault;
  } else {
    BACKGROUND_BASE_LOWEST = colors.BACKGROUND_BASE_LOWEST;
    tmp5 = importDefault;
  }
  const round = tmp5(587).radii.round;
  const obj = { listeners: { display: "flex", flexDirection: "row", alignItems: "center", padding: 4, marginTop: 4, marginLeft: -8 }, listenersCollapsed: { flexDirection: "row", alignItems: "center", backgroundColor: BACKGROUND_BASE_LOWEST, borderRadius: round, marginLeft: -16, marginTop: 4, paddingLeft: 2, paddingRight: 6 }, listenersIconWrapper: obj2, listenersText: { marginRight: 4 }, userCollapsedOverlap: { marginLeft: -20 }, headphonesIcon: obj4.makeSizeStyle(14) };
  obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: BACKGROUND_BASE_LOWEST, marginRight: 8, marginLeft: 4, borderRadius: round };
  const obj3 = ChannelListLayout;
  const merged = Object.assign(obj3.makeSizeStyle(20));
  obj4 = ChannelListLayout;
  return obj;
});
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((collapsed) => {
  let channel;
  let first;
  let member;
  let voiceState;
  let voiceState2;
  let obj = channel(576);
  const cResult = obj.c(21);
  ({ voiceState, channel } = collapsed);
  collapsed = collapsed.collapsed;
  const user = voiceState.user;
  ({ member, voiceState: voiceState2 } = voiceState);
  const isFirst = collapsed.isFirst;
  const tmp4 = user;
  const tmp5 = closure_11(user(7519)());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    let tmp8;
    let tmp9;
    if (cResult[2] === user.id) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = channel(504);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
    const isGuest = stateFromStoresObject.isGuest;
    let userCollapsedOverlap = null;
    const storeMember = stateFromStoresObject.storeMember;
    if (collapsed) {
      userCollapsedOverlap = null;
      if (!isFirst) {
        userCollapsedOverlap = tmp5.userCollapsedOverlap;
      }
    }
    if (member == null) {
      member = storeMember;
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
                          let tmp13;
                          if (cResult[16] === voiceState2.suppress) {
                            tmp13 = cResult[17];
                          }
                          if (cResult[18] === userCollapsedOverlap) {
                            let tmp16;
                            if (cResult[19] === tmp13) {
                              tmp16 = cResult[20];
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
    const obj4 = { user, member, mute: null, deaf: null, selfVideo: null, selfMute: null, selfDeaf: null, suppress: null, collapsed, sessionId: voiceState2.sessionId, channel, isGuest };
    ({ mute: obj3.mute, deaf: obj3.deaf, selfVideo: obj3.selfVideo, selfMute: obj3.selfMute, selfDeaf: obj3.selfDeaf, suppress: obj3.suppress } = voiceState2);
    const tmp15 = closure_6(tmp4(16084), obj4, user.id);
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
  }
  const fn = function u() {
    const obj = { storeMember: GuildMemberStore.getMember(channel.guild_id, user.id), isGuest: GuildMemberStore.isGuestOrLurker(channel.guild_id, user.id) };
    return obj;
  };
  const items1 = [channel.guild_id, user.id];
  cResult[1] = channel.guild_id;
  cResult[2] = user.id;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = fn;
}) : ((voiceState) => {
  let isGuest;
  let member;
  let obj5;
  let storeMember;
  let tmpResult;
  let voiceState2;
  voiceState = voiceState.voiceState;
  const user = voiceState.user;
  ({ member, voiceState: voiceState2 } = voiceState);
  const channel = voiceState.channel;
  const collapsed = voiceState.collapsed;
  const isFirst = voiceState.isFirst;
  const tmp3 = closure_11(channel(7519)());
  let obj = user(504);
  const items = [GuildMemberStore];
  const items1 = [channel.guild_id, user.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { storeMember: GuildMemberStore.getMember(channel.guild_id, user.id), isGuest: GuildMemberStore.isGuestOrLurker(channel.guild_id, user.id) };
    return obj;
  }, items1);
  let userCollapsedOverlap = null;
  ({ storeMember, isGuest } = stateFromStoresObject);
  const tmp = channel;
  if (collapsed) {
    userCollapsedOverlap = null;
    if (!isFirst) {
      userCollapsedOverlap = tmp3.userCollapsedOverlap;
    }
  }
  const obj2 = { style: userCollapsedOverlap, children: closure_6(tmpResult, obj5, user.id) };
  obj5 = { user, member, mute: null, deaf: null, selfVideo: null, selfMute: null, selfDeaf: null, suppress: null, collapsed, sessionId: voiceState2.sessionId, channel, isGuest };
  tmpResult = tmp(16084);
  if (member == null) {
    member = storeMember;
  }
  ({ mute: obj3.mute, deaf: obj3.deaf, selfVideo: obj3.selfVideo, selfMute: obj3.selfMute, selfDeaf: obj3.selfDeaf, suppress: obj3.suppress } = voiceState2);
  return closure_6(View, obj2);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let audienceCount;
  let collapsed;
  let items;
  const obj = react2;
  const cResult = obj.c(15);
  ({ audienceCount, collapsed } = arg0);
  const tmp4 = closure_11(useIsUsingClientThemeDefault());
  if (cResult[0] === audienceCount) {
    let tmp5;
    let tmp8;
    if (cResult[1] === collapsed) {
      tmp5 = cResult[2];
    }
    const tmp7 = collapsed ? tmp4.listenersCollapsed : tmp4.listeners;
    if (cResult[3] !== tmp4.headphonesIcon) {
      const obj2 = { color: "redesign-channel-name-muted-text", size: "custom", style: tmp4.headphonesIcon };
      const tmp10 = metroRequire(HeadphonesIcon.HeadphonesIcon, obj2);
      cResult[3] = tmp4.headphonesIcon;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.listenersIconWrapper) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp4.listenersText) {
        let tmp15;
        if (cResult[9] === tmp5) {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp7) {
          if (cResult[12] === tmp11) {
            let tmp19;
            if (cResult[13] === tmp15) {
              tmp19 = cResult[14];
            }
            return tmp19;
          }
        }
        const obj3 = { style: tmp7, children: items };
        items = [tmp11, tmp15];
        const tmp22 = metroImportDefault(View, obj3);
        cResult[11] = tmp7;
        cResult[12] = tmp11;
        cResult[13] = tmp15;
        cResult[14] = tmp22;
        tmp19 = tmp22;
      }
      const obj4 = { style: tmp4.listenersText, variant, color: "redesign-channel-name-muted-text", children: tmp5 };
      const tmp18 = metroRequire(Text_Text.Text, obj4);
      cResult[8] = tmp4.listenersText;
      cResult[9] = tmp5;
      cResult[10] = tmp18;
      tmp15 = tmp18;
    }
    const obj5 = { style: tmp4.listenersIconWrapper, children: tmp8 };
    const tmp14 = metroRequire(View, obj5);
    cResult[5] = tmp4.listenersIconWrapper;
    cResult[6] = tmp8;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
  let formatToPlainStringResult = audienceCount;
  if (!collapsed) {
    const intl = intl2.intl;
    const obj6 = { count: audienceCount };
    formatToPlainStringResult = intl.formatToPlainString(intl2.t["+v2pN2"], obj6);
  }
  cResult[0] = audienceCount;
  cResult[1] = collapsed;
  cResult[2] = formatToPlainStringResult;
  tmp5 = formatToPlainStringResult;
}) : ((arg0) => {
  let audienceCount;
  let collapsed;
  let items;
  let obj4;
  ({ audienceCount, collapsed } = arg0);
  const tmp2 = closure_11(useIsUsingClientThemeDefault());
  let formatToPlainStringResult = audienceCount;
  if (!collapsed) {
    const intl = intl2.intl;
    const obj = { count: audienceCount };
    formatToPlainStringResult = intl.formatToPlainString(intl2.t["+v2pN2"], obj);
  }
  const obj2 = { style: collapsed ? tmp2.listenersCollapsed : tmp2.listeners, children: items };
  const obj3 = { style: tmp2.listenersIconWrapper, children: metroRequire(HeadphonesIcon.HeadphonesIcon, obj4) };
  obj4 = { color: "redesign-channel-name-muted-text", size: "custom", style: tmp2.headphonesIcon };
  items = [metroRequire(View, obj3), ];
  const obj5 = { style: tmp2.listenersText, variant, color: "redesign-channel-name-muted-text", children: formatToPlainStringResult };
  items[1] = metroRequire(Text_Text.Text, obj5);
  return metroImportDefault(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((collapsed) => {
  let audienceCount;
  let items;
  let tmp6;
  let voiceStates;
  let obj = collapsed(576);
  const cResult = obj.c(20);
  collapsed = collapsed.collapsed;
  const channel = collapsed.channel;
  ({ voiceStates, audienceCount } = collapsed);
  const tmp5 = channel(9405)("channel_list");
  const guild_id = channel.guild_id;
  if (cResult[0] === tmp5) {
    if (cResult[1] === guild_id) {
      let tmp9;
      if (cResult[2] === voiceStates) {
        tmp6 = cResult[3];
      }
      const arr2 = channel(16088)(tmp6);
      if (cResult[4] === guild_id) {
        if (cResult[5] === arr2) {
          tmp9 = cResult[6];
        }
        const tmpResult = collapsed(6824);
        const subscribeGuildMembers = tmpResult.useSubscribeGuildMembers(tmp9, "voice_channel_games");
        if (cResult[7] === channel) {
          let tmp13;
          if (cResult[8] === collapsed) {
            tmp13 = cResult[9];
          }
          let tmp15 = null;
          if (0 !== voiceStates.length) {
            if (cResult[10] === tmp13) {
              let tmp16;
              if (cResult[11] === voiceStates) {
                tmp16 = cResult[12];
              }
              if (cResult[13] === audienceCount) {
                let tmp18;
                if (cResult[14] === collapsed) {
                  tmp18 = cResult[15];
                }
                if (cResult[16] === collapsed) {
                  if (cResult[17] === tmp16) {
                    let tmp22;
                    if (cResult[18] === tmp18) {
                      tmp22 = cResult[19];
                    }
                    tmp15 = tmp22;
                  }
                }
                const obj2 = { collapsed, children: items };
                items = [tmp16, tmp18];
                const tmp24 = closure_7(channel(16091), obj2);
                cResult[16] = collapsed;
                cResult[17] = tmp16;
                cResult[18] = tmp18;
                cResult[19] = tmp24;
                tmp22 = tmp24;
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
          return tmp15;
        }
        const fn = function x(voiceState, arg1) {
          const obj = { voiceState, channel, collapsed, isFirst: 0 === arg1 };
          return metroRequire(closure_12, obj, "voice-user-item-" + voiceState.user.id + "-" + voiceState.voiceState.sessionId);
        };
        cResult[7] = channel;
        cResult[8] = collapsed;
        cResult[9] = fn;
        tmp13 = fn;
      }
      if (null != guild_id) {
        let tmp11;
        if (arr2.length > 0) {
          const obj4 = {};
          obj4[guild_id] = arr2;
          tmp11 = obj4;
        }
        cResult[4] = guild_id;
        cResult[5] = arr2;
        cResult[6] = tmp11;
        tmp9 = tmp11;
      }
      tmp11 = closure_8;
    }
  }
  if (tmp5) {
    let mapped1;
    if (null != guild_id) {
      const substr = voiceStates.slice(0, tmp(6824).MAX_GUILD_MEMBER_SUBSCRIPTIONS);
      mapped1 = substr.map((user) => user.user.id);
    }
    cResult[0] = tmp5;
    cResult[1] = guild_id;
    cResult[2] = voiceStates;
    cResult[3] = mapped1;
    tmp6 = mapped1;
  }
  mapped1 = closure_9;
}) : ((collapsed) => {
  let audienceCount;
  let items1;
  let length;
  let voiceStates;
  collapsed = collapsed.collapsed;
  const channel = collapsed.channel;
  ({ voiceStates, audienceCount } = collapsed);
  let guild_id;
  react = undefined;
  const tmp2 = guild_id;
  const tmp = channel;
  guild_id = channel.guild_id;
  let tmp3 = channel(guild_id[16])("channel_list");
  if (tmp3) {
    let mapped;
    if (null != guild_id) {
      const substr = voiceStates.slice(0, collapsed(tmp2[17]).MAX_GUILD_MEMBER_SUBSCRIPTIONS);
      mapped = substr.map((user) => user.user.id);
    }
    const tmp4Result = tmp4(mapped);
    react = tmp4Result;
    const items = [guild_id, tmp4Result];
    const memo = react.useMemo(() => {
      if (null != guild_id) {
        let tmp3;
        if (length.length > 0) {
          const obj = {};
          obj[tmp] = tmp2;
          tmp3 = obj;
        }
        return tmp3;
      }
      tmp3 = closure_8;
    }, items);
    let obj = collapsed(tmp2[17]);
    const subscribeGuildMembers = obj.useSubscribeGuildMembers(memo, "voice_channel_games");
    let tmp15Result = null;
    if (0 !== voiceStates.length) {
      const obj2 = { collapsed, children: items1 };
      items1 = [, ];
      const tmpResult = tmp(tmp2[19]);
      items1[0] = voiceStates.map((voiceState, index) => {
        const obj = { voiceState, channel, collapsed, isFirst: 0 === index };
        return metroRequire(closure_12, obj, "voice-user-item-" + voiceState.user.id + "-" + voiceState.voiceState.sessionId);
      });
      let tmp17 = null != audienceCount && audienceCount > 0;
      if (tmp17) {
        const obj3 = { audienceCount, collapsed };
        tmp17 = closure_6(closure_13, obj3);
      }
      items1[1] = tmp17;
      tmp15Result = closure_7(tmpResult, obj2);
    }
    return tmp15Result;
  }
  mapped = closure_9;
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUsers.tsx");

export default tmp4;
export const getAudienceItemHeight = function getAudienceItemHeight(fontScale) {
  const obj = useScaledTextLineHeight;
  return 8 + Math.max(20, obj.scaleTextLineHeight(c10, fontScale));
};