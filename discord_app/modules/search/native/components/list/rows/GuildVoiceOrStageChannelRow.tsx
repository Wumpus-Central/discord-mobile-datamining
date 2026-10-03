// discord_app/modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import util from "../../../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import StageChannelParticipants from "../../../../../stage_channels/StageChannelParticipants.tsx";
import StageChannelParticipantStoreHooks from "../../../../../stage_channels/StageChannelParticipantStoreHooks.tsx";
import ChannelListLayout from "../../../../../main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx";
import renderChannelBadge from "../../../../../channel_list_v2/native/components/index.tsx";
import guild_channels_ChannelSubtitle from "../../../../../main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx";
import guild_channels_VoiceOrStageSummaryRowDefault from "../../../../../main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx";
import GuildChannelRowDefault from "GuildChannelRow.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import StageInstanceStore from "../../../../../stage_channels/StageInstanceStore.tsx";

require = fn;
function getVoiceChannelSubtitle(voiceStates, messagesTabLayout) {
  if (obj.isLayoutCompact(messagesTabLayout)) {
    return null;
  } else if (0 === voiceStates.length) {
    return null;
  } else if (1 === length) {
    const intl2 = util.intl;
    const first = voiceStates[0];
    let nick;
    if (first != null) {
      const member5 = first.member;
      if (member5 != null) {
        nick = member5.nick;
      }
    }
    if (nick == null) {
      const first1 = voiceStates[0];
      let user;
      if (first1 != null) {
        user = first1.user;
      }
      nick = UserUtilsDefault.getName(user);
    }
    const obj3 = { a: nick };
    return intl2.formatToPlainString(util.t["/GCyII"], obj3);
  } else if (2 === length) {
    const intl = util.intl;
    const first2 = voiceStates[0];
    let nick1;
    if (first2 != null) {
      const member3 = first2.member;
      if (member3 != null) {
        nick1 = member3.nick;
      }
    }
    if (nick1 == null) {
      const first3 = voiceStates[0];
      let user1;
      if (first3 != null) {
        user1 = first3.user;
      }
      nick1 = UserUtilsDefault.getName(user1);
    }
    const obj6 = { a: nick1, b: null };
    let nick2;
    if (voiceStates[1] != null) {
      const member4 = tmp19.member;
      if (member4 != null) {
        nick2 = member4.nick;
      }
    }
    if (nick2 == null) {
      let user2;
      if (voiceStates[1] != null) {
        user2 = tmp22.user;
      }
      nick2 = UserUtilsDefault.getName(user2);
    }
    obj6.b = nick2;
    return intl.formatToPlainString(util.t["2efxiV"], obj6);
  } else {
    const intl3 = util.intl;
    const first4 = voiceStates[0];
    let nick3;
    if (first4 != null) {
      const member = first4.member;
      if (member != null) {
        nick3 = member.nick;
      }
    }
    if (nick3 == null) {
      const first5 = voiceStates[0];
      let user3;
      if (first5 != null) {
        user3 = first5.user;
      }
      nick3 = UserUtilsDefault.getName(user3);
    }
    const obj9 = { a: nick3, b: null, n: null };
    let nick4;
    if (voiceStates[1] != null) {
      const member2 = tmp8.member;
      if (member2 != null) {
        nick4 = member2.nick;
      }
    }
    if (nick4 == null) {
      let user4;
      if (voiceStates[1] != null) {
        user4 = tmp11.user;
      }
      nick4 = UserUtilsDefault.getName(user4);
    }
    obj9.b = nick4;
    obj9.n = voiceStates.length - 2;
    return intl3.formatToPlainString(util.t.o2nmbk, obj9);
  }
  obj = ChannelListLayout;
}
const View = fn(17).View;
const layout = fn(7513).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles({
  users: { marginTop: 4 },
  subtitle: { marginEnd: 16 },
  trailing: { paddingVertical: 4, alignItems: "center", alignSelf: "center" },
});
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(12);
      channel = channel.channel;
      const voiceStates = channel.voiceStates;
      ({ id, guild_id } = channel);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageInstanceStore];
        cResult[0] = items;
        let first = items;
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
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === id) {
        if (cResult[5] === guild_id) {
          if (cResult[6] === stateFromStores) {
            if (cResult[7] === voiceStates) {
              let tmp10 = cResult[8];
            }
            if (cResult[9] === tmp4.subtitle) {
              if (cResult[10] === tmp10) {
                let tmp15 = cResult[11];
              }
              return tmp15;
            }
            const obj2 = { style: tmp4.subtitle, children: tmp10 };
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
      const tmpResult = channel(504);
      const result = channel(16806).renderChannelSubtitle({
        subtitle: tmp11,
        muted: false,
        layout,
        channelId: id,
        guildId: guild_id,
      });
      cResult[4] = id;
      cResult[5] = guild_id;
      cResult[6] = stateFromStores;
      cResult[7] = voiceStates;
      cResult[8] = result;
      tmp10 = result;
      const obj3 = { subtitle: tmp11, muted: false, layout, channelId: id, guildId: guild_id };
      const tmpResult2 = channel(16806);
    }
  : (channel) => {
      channel = channel.channel;
      const voiceStates = channel.voiceStates;
      const id = channel.id;
      const guild_id = channel.guild_id;
      let tmp = closure_9();
      const items = [StageInstanceStore];
      const items1 = [channel.id];
      const stateFromStores = channel(id[11]).useStateFromStores(
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
      const obj = channel(id[11]);
      return (
        <stateFromStores style={tmp.subtitle}>
          {guild_id.useMemo(() => {
            let tmp = stateFromStores;
            if (null == stateFromStores) {
              tmp = getVoiceChannelSubtitle(voiceStates, layout);
            }
            return guild_channels_ChannelSubtitle.renderChannelSubtitle({
              subtitle: tmp,
              muted: false,
              layout,
              channelId: id,
              guildId: guild_id,
            });
          }, items2)}
        </stateFromStores>
      );
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(8);
      ({ channel, users } = arg0);
      const tmp3 = closure_9();
      const stageParticipantsCount = StageChannelParticipantStoreHooks.useStageParticipantsCount(
        channel.id,
        StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
      );
      if (cResult[0] === stageParticipantsCount) {
        if (cResult[1] === channel.guild_id) {
          if (cResult[2] === tmp3.users) {
            if (cResult[3] === users) {
              let tmp5 = cResult[4];
            }
            if (cResult[5] === tmp3.subtitle) {
              if (cResult[6] === tmp5) {
                let tmp11 = cResult[7];
              }
              return tmp11;
            }
            const obj3 = { style: tmp3.subtitle, children: tmp5 };
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
        const obj4 = { style: tmp3.users, children: null };
        const obj5 = { users, max: 5, guildId: channel.guild_id, layout, audienceCount: stageParticipantsCount };
        obj4.children = jsx(guild_channels_VoiceOrStageSummaryRowDefault, {
          users,
          max: 5,
          guildId: channel.guild_id,
          layout,
          audienceCount: stageParticipantsCount,
        });
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
      ({ channel, users } = arg0);
      const tmp = closure_9();
      StageChannelParticipantStoreHooks;
      const obj = { style: tmp.subtitle, children: null };
      let tmp5Result = 0 !== users.length;
      if (tmp5Result) {
        const obj2 = { style: tmp.users, children: null };
        const obj3 = { users, max: 5, guildId: channel.guild_id, layout, audienceCount: tmp4 };
        obj2.children = jsx(guild_channels_VoiceOrStageSummaryRowDefault, {
          users,
          max: 5,
          guildId: channel.guild_id,
          layout,
          audienceCount: tmp4,
        });
        tmp5Result = <View style={tmp.users}>{null}</View>;
      }
      obj.children = tmp5Result;
      return <View style={tmp.subtitle}>{null}</View>;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = c.c(26);
        channel = channel.channel;
        ({ voiceStates, trailing, onPress } = channel);
        const tmp4 = closure_9();
        if (channel.isGuildStageVoice()) {
          voiceStates = channel.speakerVoiceStates;
        }
        if (cResult[0] !== voiceStates) {
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function l(user) {
              return user.user;
            };
            cResult[2] = fn;
            let tmp7 = fn;
          } else {
            tmp7 = cResult[2];
          }
          const mapped = voiceStates.map(tmp7);
          cResult[0] = voiceStates;
          cResult[1] = mapped;
        } else {
          if (cResult[3] === channel.id) {
            if (cResult[4] === onPress) {
              let tmp10 = cResult[5];
            }
            if (cResult[6] === channel) {
              if (cResult[7] === voiceStates) {
                if (cResult[8] === tmp5) {
                  let tmp11 = cResult[9];
                }
                if (cResult[10] === channel) {
                  if (cResult[11] === voiceStates) {
                    if (cResult[12] === tmp4) {
                      if (cResult[13] === trailing) {
                        let tmp14 = cResult[14];
                      }
                      if (cResult[15] === channel) {
                        if (cResult[16] === voiceStates) {
                          if (cResult[17] === tmp5) {
                            let tmp19 = cResult[18];
                          }
                          if (cResult[19] === channel) {
                            if (cResult[20] === voiceStates) {
                              if (cResult[21] === tmp10) {
                                if (cResult[22] === tmp11) {
                                  if (cResult[23] === tmp14) {
                                    if (cResult[24] === tmp19) {
                                      let tmp22 = cResult[25];
                                    }
                                    return tmp22;
                                  }
                                }
                              }
                            }
                          }
                          class I {
                            constructor() {
                              tmp = onPress(channel.id);
                              return;
                            }
                          }
                          const obj2 = {
                            onPress: tmp10,
                            voiceStates,
                            channel,
                            subtitle: tmp11,
                            trailing: tmp14,
                            extras: tmp19,
                          };
                          const tmp24 = jsx(GuildChannelRowDefault, {
                            onPress: tmp10,
                            voiceStates,
                            channel,
                            subtitle: tmp11,
                            trailing: tmp14,
                            extras: tmp19,
                          });
                          cResult[19] = channel;
                          cResult[20] = voiceStates;
                          cResult[21] = tmp10;
                          cResult[22] = tmp11;
                          cResult[23] = tmp14;
                          cResult[24] = tmp19;
                          cResult[25] = tmp24;
                          tmp22 = tmp24;
                        }
                      }
                      class I {
                        constructor() {
                          tmp = onPress(channel.id);
                          return;
                        }
                      }
                      const obj3 = { channel, voiceStates, users: tmp5 };
                      const tmp21 = <closure_11 channel={channel} voiceStates={voiceStates} users={tmp5} />;
                      cResult[15] = channel;
                      cResult[16] = voiceStates;
                      cResult[17] = tmp5;
                      cResult[18] = tmp21;
                      tmp19 = tmp21;
                    }
                  }
                }
                class I {
                  constructor() {
                    tmp = onPress(channel.id);
                    return;
                  }
                }
                let tmp15 = trailing;
                if (null == trailing) {
                  class I {
                    constructor() {
                      tmp = onPress(channel.id);
                      return;
                    }
                  }
                  tmp18[0] = tmp4.trailing;
                  const obj4 = { channel, voiceStates };
                  tmp18[1] = jsx(renderChannelBadge.VocalChannelJoinButton, { channel, voiceStates });
                  tmp15 = <View {...tmp18} />;
                }
                cResult[10] = channel;
                cResult[11] = voiceStates;
                cResult[12] = tmp4;
                cResult[13] = trailing;
                cResult[14] = tmp15;
                tmp14 = tmp15;
              }
            }
            class I {
              constructor() {
                tmp = onPress(channel.id);
                return;
              }
            }
            const obj5 = { channel, voiceStates, users: tmp5 };
            const tmp13 = <closure_10 channel={channel} voiceStates={voiceStates} users={tmp5} />;
            cResult[6] = channel;
            cResult[7] = voiceStates;
            cResult[8] = tmp5;
            cResult[9] = tmp13;
            tmp11 = tmp13;
          }
          class I {
            constructor() {
              tmp = onPress(channel.id);
              return;
            }
          }
          cResult[3] = channel.id;
          cResult[4] = onPress;
          cResult[5] = I;
          tmp10 = I;
        }
      }
    : (channel) => {
        channel = channel.channel;
        ({ voiceStates, trailing, onPress } = channel);
        if (channel.isGuildStageVoice()) {
          voiceStates = channel.speakerVoiceStates;
        }
        const mapped = voiceStates.map((user) => user.user);
        const items = [channel.id, onPress];
        const callback = noop.useCallback(() => {
          onPress(channel.id);
        }, items);
        const obj = { onPress: callback, voiceStates, channel, subtitle: null, trailing: null, extras: null };
        const tmp = closure_9();
        obj.subtitle = <closure_10 channel={channel} voiceStates={voiceStates} users={mapped} />;
        if (null == trailing) {
          const obj2 = { style: tmp.trailing, children: null };
          const obj3 = { channel, voiceStates };
          obj2.children = jsx(renderChannelBadge.VocalChannelJoinButton, { channel, voiceStates });
          trailing = <View style={tmp.trailing}>{null}</View>;
        }
        obj.trailing = trailing;
        obj.extras = <closure_11 channel={channel} voiceStates={voiceStates} users={mapped} />;
        return jsx(GuildChannelRowDefault, {
          onPress: callback,
          voiceStates,
          channel,
          subtitle: null,
          trailing: null,
          extras: null,
        });
      },
);
