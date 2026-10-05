// discord_app/modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import intl4 from "../../../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import StageChannelParticipants from "../../../../../stage_channels/StageChannelParticipants.tsx";
import StageChannelParticipantStoreHooks from "../../../../../stage_channels/StageChannelParticipantStoreHooks.tsx";
import SearchConstants from "../../../../SearchConstants.tsx";
import ChannelListLayout from "../../../../../main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx";
import guild_channels_ChannelSubtitle from "../../../../../main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx";
import GuildChannelRowDefault from "GuildChannelRow.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import StageInstanceStore from "../../../../../stage_channels/StageInstanceStore.tsx";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

function getVoiceChannelSubtitle(voiceStates, messagesTabLayout) {
  let nick2;
  let nick4;
  const obj = ChannelListLayout;
  if (obj.isLayoutCompact(messagesTabLayout)) {
    return null;
  } else if (0 === voiceStates.length) {
    return null;
  } else if (1 === voiceStates.length) {
    const intl2 = intl4.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const first = voiceStates[0];
    let nick;
    const prop = intl4.t["/GCyII"];
    if (first != null) {
      const member5 = first.member;
      if (member5 != null) {
        nick = member5.nick;
      }
    }
    if (nick == null) {
      const first1 = voiceStates[0];
      let user;
      const getName5 = UserUtilsDefault.getName;
      UserUtilsDefault;
      if (first1 != null) {
        user = first1.user;
      }
      nick = getName5(user);
    }
    const obj2 = { a: nick };
    return formatToPlainString2(prop, obj2);
  } else if (2 === voiceStates.length) {
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const first2 = voiceStates[0];
    let nick1;
    const v2efxiV = intl4.t["2efxiV"];
    if (first2 != null) {
      const member3 = first2.member;
      if (member3 != null) {
        nick1 = member3.nick;
      }
    }
    if (nick1 == null) {
      const first3 = voiceStates[0];
      let user1;
      const getName3 = UserUtilsDefault.getName;
      UserUtilsDefault;
      if (first3 != null) {
        user1 = first3.user;
      }
      nick1 = getName3(user1);
    }
    const obj3 = { a: nick1, b: nick2 };
    nick2 = undefined;
    if (voiceStates[1] != null) {
      const member4 = tmp23.member;
      if (member4 != null) {
        nick2 = member4.nick;
      }
    }
    if (nick2 == null) {
      let user2;
      const getName4 = UserUtilsDefault.getName;
      UserUtilsDefault;
      if (voiceStates[1] != null) {
        user2 = tmp27.user;
      }
      nick2 = getName4(user2);
    }
    return formatToPlainString(v2efxiV, obj3);
  } else {
    const intl3 = intl4.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const first4 = voiceStates[0];
    let nick3;
    const o2nmbk = intl4.t.o2nmbk;
    if (first4 != null) {
      const member = first4.member;
      if (member != null) {
        nick3 = member.nick;
      }
    }
    if (nick3 == null) {
      const first5 = voiceStates[0];
      let user3;
      const getName = UserUtilsDefault.getName;
      UserUtilsDefault;
      if (first5 != null) {
        user3 = first5.user;
      }
      nick3 = getName(user3);
    }
    const obj4 = { a: nick3, b: nick4, n: voiceStates.length - 2 };
    nick4 = undefined;
    if (voiceStates[1] != null) {
      const member2 = tmp9.member;
      if (member2 != null) {
        nick4 = member2.nick;
      }
    }
    if (nick4 == null) {
      let user4;
      const getName2 = UserUtilsDefault.getName;
      UserUtilsDefault;
      if (voiceStates[1] != null) {
        user4 = tmp13.user;
      }
      nick4 = getName2(user4);
    }
    return formatToPlainString3(o2nmbk, obj4);
  }
}
const View = react_native.View;
const layout = SearchConstants.CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({
  users: { marginTop: 4 },
  subtitle: { marginEnd: 16 },
  trailing: { paddingVertical: 4, alignItems: "center", alignSelf: "center" },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let guild_id;
      let id;
      let tmp7;
      let tmp8;
      const obj = channel(576);
      const cResult = obj.c(12);
      channel = channel.channel;
      const voiceStates = channel.voiceStates;
      ({ id, guild_id } = channel);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageInstanceStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn = function o() {
          const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
          let topic;
          if (stageInstanceByChannel != null) {
            topic = stageInstanceByChannel.topic;
          }
          return topic;
        };
        const items1 = [channel.id];
        cResult[1] = channel.id;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === id) {
        if (cResult[5] === guild_id) {
          if (cResult[6] === stateFromStores) {
            let tmp10;
            if (cResult[7] === voiceStates) {
              tmp10 = cResult[8];
            }
            if (cResult[9] === tmp4.subtitle) {
              let tmp15;
              if (cResult[10] === tmp10) {
                tmp15 = cResult[11];
              }
              return tmp15;
            }
            const tmp18 = <View style={tmp4.subtitle}>{tmp10}</View>;
            cResult[9] = tmp4.subtitle;
            cResult[10] = tmp10;
            cResult[11] = tmp18;
            tmp15 = tmp18;
          }
        }
      }
      let tmp11 = stateFromStores;
      if (null == stateFromStores) {
        tmp11 = getVoiceChannelSubtitle(voiceStates, layout);
      }
      const obj3 = { subtitle: tmp11, muted: false, layout, channelId: id, guildId: guild_id };
      const tmpResult2 = channel(16825);
      const result = tmpResult2.renderChannelSubtitle(obj3);
      cResult[4] = id;
      cResult[5] = guild_id;
      cResult[6] = stateFromStores;
      cResult[7] = voiceStates;
      cResult[8] = result;
      tmp10 = result;
    }
  : (channel) => {
      channel = channel.channel;
      const voiceStates = channel.voiceStates;
      const id = channel.id;
      const guild_id = channel.guild_id;
      let tmp = closure_9();
      let obj = channel(id[11]);
      const items = [StageInstanceStore];
      const items1 = [channel.id];
      const stateFromStores = obj.useStateFromStores(
        items,
        () => {
          const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
          let topic;
          if (stageInstanceByChannel != null) {
            topic = stageInstanceByChannel.topic;
          }
          return topic;
        },
        items1,
      );
      const items2 = [stateFromStores, voiceStates, id, guild_id];
      return (
        <stateFromStores style={tmp.subtitle}>
          {guild_id.useMemo(() => {
            let tmp = stateFromStores;
            if (null == stateFromStores) {
              tmp = getVoiceChannelSubtitle(voiceStates, layout);
            }
            const obj = guild_channels_ChannelSubtitle;
            const obj2 = { subtitle: tmp, muted: false, layout, channelId: id, guildId: guild_id };
            return obj.renderChannelSubtitle(obj2);
          }, items2)}
        </stateFromStores>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let users;
      const obj = react2;
      const cResult = obj.c(8);
      ({ channel, users } = arg0);
      const tmp3 = closure_9();
      const obj2 = StageChannelParticipantStoreHooks;
      const stageParticipantsCount = obj2.useStageParticipantsCount(
        channel.id,
        StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
      );
      if (cResult[0] === stageParticipantsCount) {
        if (cResult[1] === channel.guild_id) {
          if (cResult[2] === tmp3.users) {
            let tmp5;
            if (cResult[3] === users) {
              tmp5 = cResult[4];
            }
            if (cResult[5] === tmp3.subtitle) {
              let tmp11;
              if (cResult[6] === tmp5) {
                tmp11 = cResult[7];
              }
              return tmp11;
            }
            const tmp14 = <View style={tmp3.subtitle}>{tmp5}</View>;
            cResult[5] = tmp3.subtitle;
            cResult[6] = tmp5;
            cResult[7] = tmp14;
            tmp11 = tmp14;
          }
        }
      }
      let tmp6 = 0 !== users.length;
      if (tmp6) {
        tmp6 = <View style={tmp3.users}>{null}</View>;
      }
      cResult[0] = stageParticipantsCount;
      cResult[1] = channel.guild_id;
      cResult[2] = tmp3.users;
      cResult[3] = users;
      cResult[4] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let channel;
      let users;
      ({ channel, users } = arg0);
      const tmp = closure_9();
      StageChannelParticipantStoreHooks;
      let tmp5Result = 0 !== users.length;
      if (tmp5Result) {
        tmp5Result = <View style={tmp.users}>{null}</View>;
      }
      return <View style={tmp.subtitle}>{tmp5Result}</View>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let onPress;
        let tmp5;
        let trailing;
        let voiceStates;
        const obj = react2;
        const cResult = obj.c(26);
        channel = channel.channel;
        ({ voiceStates, trailing, onPress } = channel);
        const speakerVoiceStates = channel.speakerVoiceStates;
        const tmp4 = closure_9();
        if (channel.isGuildStageVoice()) {
          voiceStates = speakerVoiceStates;
        }
        if (cResult[0] !== voiceStates) {
          let tmp7;
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function l(user) {
              return user.user;
            };
            cResult[2] = fn;
            tmp7 = fn;
          } else {
            tmp7 = cResult[2];
          }
          const mapped = voiceStates.map(tmp7);
          cResult[0] = voiceStates;
          cResult[1] = mapped;
          tmp5 = mapped;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[3] === channel.id) {
          let tmp9;
          if (cResult[4] === onPress) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === channel) {
            if (cResult[7] === voiceStates) {
              let tmp10;
              if (cResult[8] === tmp5) {
                tmp10 = cResult[9];
              }
              if (cResult[10] === channel) {
                if (cResult[11] === voiceStates) {
                  if (cResult[12] === tmp4) {
                    let tmp14;
                    if (cResult[13] === trailing) {
                      tmp14 = cResult[14];
                    }
                    if (cResult[15] === channel) {
                      if (cResult[16] === voiceStates) {
                        let tmp19;
                        if (cResult[17] === tmp5) {
                          tmp19 = cResult[18];
                        }
                        if (cResult[19] === channel) {
                          if (cResult[20] === voiceStates) {
                            if (cResult[21] === tmp9) {
                              if (cResult[22] === tmp10) {
                                if (cResult[23] === tmp14) {
                                  let tmp23;
                                  if (cResult[24] === tmp19) {
                                    tmp23 = cResult[25];
                                  }
                                  return tmp23;
                                }
                              }
                            }
                          }
                        }
                        const tmp26 = jsx(GuildChannelRowDefault, {
                          onPress: tmp9,
                          voiceStates,
                          channel,
                          subtitle: tmp10,
                          trailing: tmp14,
                          extras: tmp19,
                        });
                        cResult[19] = channel;
                        cResult[20] = voiceStates;
                        cResult[21] = tmp9;
                        class I {
                          constructor() {
                            onPress(channel.id);
                          }
                        }
                        cResult[23] = tmp14;
                        cResult[24] = tmp19;
                        cResult[25] = tmp26;
                        tmp23 = tmp26;
                      }
                    }
                    const tmp22 = <closure_11 channel={channel} voiceStates={voiceStates} users={tmp5} />;
                    cResult[15] = channel;
                    cResult[16] = voiceStates;
                    cResult[17] = tmp5;
                    cResult[18] = tmp22;
                    tmp19 = tmp22;
                  }
                }
              }
              let tmp16 = trailing;
              if (null == trailing) {
                tmp16 = <View style={tmp4.trailing}>{null}</View>;
              }
              cResult[10] = channel;
              cResult[11] = voiceStates;
              cResult[12] = tmp4;
              cResult[13] = trailing;
              cResult[14] = tmp16;
              tmp14 = tmp16;
            }
          }
          const tmp13 = <closure_10 channel={channel} voiceStates={voiceStates} users={tmp5} />;
          cResult[6] = channel;
          cResult[7] = voiceStates;
          cResult[8] = tmp5;
          cResult[9] = tmp13;
          tmp10 = tmp13;
        }
        class I {
          constructor() {
            onPress(channel.id);
          }
        }
        cResult[3] = channel.id;
        cResult[4] = onPress;
        cResult[5] = I;
        tmp9 = I;
      }
    : (channel) => {
        let onPress;
        let trailing;
        let voiceStates;
        channel = channel.channel;
        ({ voiceStates, trailing, onPress } = channel);
        const speakerVoiceStates = channel.speakerVoiceStates;
        const tmp = closure_9();
        if (channel.isGuildStageVoice()) {
          voiceStates = speakerVoiceStates;
        }
        const mapped = voiceStates.map((user) => user.user);
        const items = [channel.id, onPress];
        const callback = react.useCallback(() => {
          onPress(channel.id);
        }, items);
        GuildChannelRowDefault;
        if (null == trailing) {
          trailing = <View style={tmp.trailing}>{null}</View>;
        }
        return (
          <tmp6
            onPress={callback}
            voiceStates={voiceStates}
            channel={channel}
            subtitle={null}
            trailing={trailing}
            extras={null}
          />
        );
      },
);
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx");

export default memoResult;
