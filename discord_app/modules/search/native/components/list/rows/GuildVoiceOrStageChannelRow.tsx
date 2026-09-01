// === Module 16239: GuildVoiceChannelSubtitle ===

// Module 16239 (GuildVoiceChannelSubtitle)
import useStageParticipants from "useStageParticipants" /* 5374 */;
import _modDef16241 from "module_16241" /* 16241 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "handleStageInstanceCreateOrUpdate" /* 1392 */;
import { CHANNEL_LIST_SEARCH_LAYOUT as closure_6 } from "MessageEmbedTypes" /* 7622 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function GuildVoiceChannelSubtitle(channel) {
  channel = channel.channel;
  const voiceStates = channel.voiceStates;
  let id;
  let guild_id;
  let stateFromStores;
  id = channel.id;
  guild_id = channel.guild_id;
  let obj = channel(id[9]);
  const items = [closure_5];
  const items1 = [channel.id];
  stateFromStores = obj.useStateFromStores(items, () => {
    const stageInstanceByChannel = closure_1_5.getStageInstanceByChannel(channel.id);
    let topic;
    if (stageInstanceByChannel != null) {
      topic = stageInstanceByChannel.topic;
    }
    return topic;
  }, items1);
  const items2 = [stateFromStores, voiceStates, id, guild_id];
  obj = {
    style: callback().subtitle,
    children: guild_id.useMemo(() => {
      let tmp2 = null;
      if (null != stateFromStores) {
        let obj = { subtitle: null, muted: false, layout: null, channelId: null, guildId: null };
        obj[0] = tmp;
        obj[2] = closure_1_6;
        obj[3] = id;
        obj[4] = guild_id;
        return channel(id[10]).renderChannelSubtitle(obj);
      } else {
        obj = voiceStates;
        let formatToPlainStringResult = null;
        if (!obj11.isLayoutCompact(closure_1_6)) {
          formatToPlainStringResult = null;
          if (0 !== obj.length) {
            if (1 === length) {
              const intl2 = channel(id[7]).intl;
              const first = obj[0];
              let nick;
              if (first != tmp2) {
                const member5 = first.member;
                if (member5 != tmp2) {
                  nick = member5.nick;
                }
              }
              if (nick == tmp2) {
                const first1 = obj[0];
                tmp2 = first1 == tmp2;
                let user;
                if (!tmp2) {
                  user = first1.user;
                }
                nick = voiceStates(id[6]).getName(user);
                const obj7 = voiceStates(id[6]);
              }
              obj = { a: null };
              obj[0] = nick;
              formatToPlainStringResult = intl2.formatToPlainString(channel(id[7]).t["/GCyII"], obj);
            } else if (2 !== length) {
              const intl3 = channel(id[7]).intl;
              const first2 = obj[0];
              let nick1;
              if (first2 != tmp2) {
                const member = first2.member;
                if (member != tmp2) {
                  nick1 = member.nick;
                }
              }
              if (nick1 == tmp2) {
                obj = voiceStates(id[6]);
                const first3 = obj[0];
                let user1;
                if (first3 != tmp2) {
                  user1 = first3.user;
                }
                nick1 = obj.getName(user1);
              }
              obj1 = { a: null, b: null, n: null };
              obj1[0] = nick1;
              let nick2;
              if (obj[1] != tmp2) {
                const member2 = tmp9.member;
                if (member2 != tmp2) {
                  nick2 = member2.nick;
                }
              }
              if (nick2 == tmp2) {
                let obj2 = voiceStates(id[6]);
                let user2;
                if (obj[1] != tmp2) {
                  user2 = tmp13.user;
                }
                nick2 = obj2.getName(user2);
              }
              obj1[1] = nick2;
              obj1[2] = obj.length - 2;
              formatToPlainStringResult = intl3.formatToPlainString(channel(id[7]).t.o2nmbk, obj1);
            }
          }
          const intl = channel(id[7]).intl;
          const first4 = obj[0];
          let nick3;
          if (first4 != tmp2) {
            const member3 = first4.member;
            if (member3 != tmp2) {
              nick3 = member3.nick;
            }
          }
          if (nick3 == tmp2) {
            const first5 = obj[0];
            let user3;
            if (first5 != tmp2) {
              user3 = first5.user;
            }
            nick3 = voiceStates(id[6]).getName(user3);
            const obj4 = voiceStates(id[6]);
          }
          obj2 = { a: null, b: null };
          obj2[0] = nick3;
          let nick4;
          if (obj[1] != tmp2) {
            const member4 = tmp25.member;
            if (member4 != tmp2) {
              nick4 = member4.nick;
            }
          }
          if (nick4 == tmp2) {
            let user4;
            if (obj[1] != tmp2) {
              user4 = tmp29.user;
            }
            nick4 = voiceStates(id[6]).getName(user4);
            const obj6 = voiceStates(id[6]);
          }
          obj2[1] = nick4;
          formatToPlainStringResult = intl.formatToPlainString(channel(id[7]).t["2efxiV"], obj2);
        }
        obj11 = channel(id[5]);
      }
    }, items2)
  };
  return <stateFromStores style={callback().subtitle}>{guild_id.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      let obj = { subtitle: null, muted: false, layout: null, channelId: null, guildId: null };
      obj[0] = tmp;
      obj[2] = closure_1_6;
      obj[3] = id;
      obj[4] = guild_id;
      return channel(id[10]).renderChannelSubtitle(obj);
    } else {
      obj = voiceStates;
      let formatToPlainStringResult = null;
      if (!obj11.isLayoutCompact(closure_1_6)) {
        formatToPlainStringResult = null;
        if (0 !== obj.length) {
          if (1 === length) {
            const intl2 = channel(id[7]).intl;
            const first = obj[0];
            let nick;
            if (first != tmp2) {
              const member5 = first.member;
              if (member5 != tmp2) {
                nick = member5.nick;
              }
            }
            if (nick == tmp2) {
              const first1 = obj[0];
              tmp2 = first1 == tmp2;
              let user;
              if (!tmp2) {
                user = first1.user;
              }
              nick = voiceStates(id[6]).getName(user);
              const obj7 = voiceStates(id[6]);
            }
            obj = { a: null };
            obj[0] = nick;
            formatToPlainStringResult = intl2.formatToPlainString(channel(id[7]).t["/GCyII"], obj);
          } else if (2 !== length) {
            const intl3 = channel(id[7]).intl;
            const first2 = obj[0];
            let nick1;
            if (first2 != tmp2) {
              const member = first2.member;
              if (member != tmp2) {
                nick1 = member.nick;
              }
            }
            if (nick1 == tmp2) {
              obj = voiceStates(id[6]);
              const first3 = obj[0];
              let user1;
              if (first3 != tmp2) {
                user1 = first3.user;
              }
              nick1 = obj.getName(user1);
            }
            obj1 = { a: null, b: null, n: null };
            obj1[0] = nick1;
            let nick2;
            if (obj[1] != tmp2) {
              const member2 = tmp9.member;
              if (member2 != tmp2) {
                nick2 = member2.nick;
              }
            }
            if (nick2 == tmp2) {
              let obj2 = voiceStates(id[6]);
              let user2;
              if (obj[1] != tmp2) {
                user2 = tmp13.user;
              }
              nick2 = obj2.getName(user2);
            }
            obj1[1] = nick2;
            obj1[2] = obj.length - 2;
            formatToPlainStringResult = intl3.formatToPlainString(channel(id[7]).t.o2nmbk, obj1);
          }
        }
        const intl = channel(id[7]).intl;
        const first4 = obj[0];
        let nick3;
        if (first4 != tmp2) {
          const member3 = first4.member;
          if (member3 != tmp2) {
            nick3 = member3.nick;
          }
        }
        if (nick3 == tmp2) {
          const first5 = obj[0];
          let user3;
          if (first5 != tmp2) {
            user3 = first5.user;
          }
          nick3 = voiceStates(id[6]).getName(user3);
          const obj4 = voiceStates(id[6]);
        }
        obj2 = { a: null, b: null };
        obj2[0] = nick3;
        let nick4;
        if (obj[1] != tmp2) {
          const member4 = tmp25.member;
          if (member4 != tmp2) {
            nick4 = member4.nick;
          }
        }
        if (nick4 == tmp2) {
          let user4;
          if (obj[1] != tmp2) {
            user4 = tmp29.user;
          }
          nick4 = voiceStates(id[6]).getName(user4);
          const obj6 = voiceStates(id[6]);
        }
        obj2[1] = nick4;
        formatToPlainStringResult = intl.formatToPlainString(channel(id[7]).t["2efxiV"], obj2);
      }
      obj11 = channel(id[5]);
    }
  }, items2)}</stateFromStores>;
}
function GuildVoiceChannelExtras(arg0) {
  ({ channel, users } = arg0);
  const tmp = callback();
  useStageParticipants;
  let obj = { style: tmp.subtitle, children: null };
  let tmp5Result = 0 !== users.length;
  if (tmp5Result) {
    obj = { style: null, children: null };
    obj[0] = tmp.users;
    obj = { users: null, max: 5, guildId: null, layout: null, audienceCount: null };
    obj[0] = users;
    obj[2] = channel.guild_id;
    obj[3] = closure_6;
    obj[4] = tmp4;
    obj[1] = tmp5(_modDef16241, obj);
    tmp5Result = tmp5(tmp6, obj);
  }
  obj[1] = tmp5Result;
  return <View style={tmp.subtitle}>{null}</View>;
}
let c3 = importAllResult;
let closure_8 = createCacheKey.createStyles({ users: { marginTop: 4 }, subtitle: { marginEnd: 16 }, trailing: { paddingVertical: 4, alignItems: "center", alignSelf: "center" } });
const memoResult = importAllResult.memo(function GuildVoiceChannelRow(channel) {
  channel = channel.channel;
  ({ voiceStates, trailing, onPress } = channel);
  if (channel.isGuildStageVoice()) {
    voiceStates = channel.speakerVoiceStates;
  }
  const mapped = voiceStates.map((user) => user.user);
  const items = [channel.id, onPress];
  const callback = importAllResult.useCallback(() => {
    onPress(channel.id);
  }, items);
  let obj = { onPress: callback, voiceStates, channel, subtitle: null, trailing: null, extras: null };
  const tmp = callback();
  obj[3] = <GuildVoiceChannelSubtitle channel={channel} voiceStates={voiceStates} users={mapped} />;
  if (null == trailing) {
    obj = { style: null, children: null };
    obj[0] = tmp.trailing;
    obj = { channel: null, voiceStates: null };
    obj[0] = channel;
    obj[1] = voiceStates;
    obj[1] = tmp4(channel(11858).VocalChannelJoinButton, obj);
    trailing = tmp4(View, obj);
  }
  obj[4] = trailing;
  obj[5] = <GuildVoiceChannelExtras channel={channel} voiceStates={voiceStates} users={mapped} />;
  return jsx(onPress(16243), { onPress: callback, voiceStates, channel, subtitle: null, trailing: null, extras: null });
});
const result = require("set").fileFinishedImporting("modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx");

export default memoResult;