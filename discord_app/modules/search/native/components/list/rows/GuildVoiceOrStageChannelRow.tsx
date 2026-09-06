// === Module 16655: GuildVoiceOrStageChannelRow ===

// Module 16655 (GuildVoiceOrStageChannelRow)
import util from "util" /* 1114 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5431 */;
import ChannelListLayout from "ChannelListLayout" /* 10121 */;
import renderChannelBadge from "renderChannelBadge" /* 12291 */;
import guild_channels_ChannelSubtitle from "guild_channels/ChannelSubtitle" /* 16656 */;
import guild_channels_VoiceOrStageSummaryRowDefault from "guild_channels/VoiceOrStageSummaryRow" /* 16657 */;
import GuildChannelRowDefault from "GuildChannelRow" /* 16659 */;
import noop from "module_19" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;

require = fn;
function GuildVoiceChannelSubtitle(channel) {
  channel = channel.channel;
  const voiceStates = channel.voiceStates;
  const id = channel.id;
  const guild_id = channel.guild_id;
  let obj = channel(id[9]);
  const items = [StageInstanceStore];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
    let topic;
    if (stageInstanceByChannel != null) {
      topic = stageInstanceByChannel.topic;
    }
    return topic;
  }, items1);
  const items2 = [stateFromStores, voiceStates, id, guild_id];
  obj = {
    style: closure_8().subtitle,
    children: guild_id.useMemo(() => {
      let tmp2 = null;
      if (null != stateFromStores) {
        let obj = { subtitle: tmp, muted: false, layout, channelId: id, guildId: guild_id };
        return guild_channels_ChannelSubtitle.renderChannelSubtitle(obj);
      } else {
        obj = voiceStates;
        let formatToPlainStringResult = null;
        if (!obj11.isLayoutCompact(layout)) {
          formatToPlainStringResult = null;
          if (0 !== obj.length) {
            if (1 === length) {
              const intl2 = util.intl;
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
                nick = UserUtilsDefault.getName(user);
              }
              obj = { a: nick };
              formatToPlainStringResult = intl2.formatToPlainString(util.t["/GCyII"], obj);
            } else if (2 !== length) {
              const intl3 = util.intl;
              const first2 = obj[0];
              let nick1;
              if (first2 != tmp2) {
                const member = first2.member;
                if (member != tmp2) {
                  nick1 = member.nick;
                }
              }
              if (nick1 == tmp2) {
                obj = UserUtilsDefault;
                const first3 = obj[0];
                let user1;
                if (first3 != tmp2) {
                  user1 = first3.user;
                }
                nick1 = obj.getName(user1);
              }
              const obj1 = { a: nick1, b: null, n: null };
              let nick2;
              if (obj[1] != tmp2) {
                const member2 = tmp9.member;
                if (member2 != tmp2) {
                  nick2 = member2.nick;
                }
              }
              if (nick2 == tmp2) {
                let obj2 = UserUtilsDefault;
                let user2;
                if (obj[1] != tmp2) {
                  user2 = tmp13.user;
                }
                nick2 = obj2.getName(user2);
              }
              obj1.b = nick2;
              obj1.n = obj.length - 2;
              formatToPlainStringResult = intl3.formatToPlainString(util.t.o2nmbk, obj1);
            }
          }
          const intl = util.intl;
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
            nick3 = UserUtilsDefault.getName(user3);
          }
          obj2 = { a: nick3, b: null };
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
            nick4 = UserUtilsDefault.getName(user4);
          }
          obj2.b = nick4;
          formatToPlainStringResult = intl.formatToPlainString(util.t["2efxiV"], obj2);
        }
        obj11 = ChannelListLayout;
      }
    }, items2)
  };
  return <stateFromStores style={closure_8().subtitle}>{guild_id.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      let obj = { subtitle: tmp, muted: false, layout, channelId: id, guildId: guild_id };
      return guild_channels_ChannelSubtitle.renderChannelSubtitle(obj);
    } else {
      obj = voiceStates;
      let formatToPlainStringResult = null;
      if (!obj11.isLayoutCompact(layout)) {
        formatToPlainStringResult = null;
        if (0 !== obj.length) {
          if (1 === length) {
            const intl2 = util.intl;
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
              nick = UserUtilsDefault.getName(user);
            }
            obj = { a: nick };
            formatToPlainStringResult = intl2.formatToPlainString(util.t["/GCyII"], obj);
          } else if (2 !== length) {
            const intl3 = util.intl;
            const first2 = obj[0];
            let nick1;
            if (first2 != tmp2) {
              const member = first2.member;
              if (member != tmp2) {
                nick1 = member.nick;
              }
            }
            if (nick1 == tmp2) {
              obj = UserUtilsDefault;
              const first3 = obj[0];
              let user1;
              if (first3 != tmp2) {
                user1 = first3.user;
              }
              nick1 = obj.getName(user1);
            }
            const obj1 = { a: nick1, b: null, n: null };
            let nick2;
            if (obj[1] != tmp2) {
              const member2 = tmp9.member;
              if (member2 != tmp2) {
                nick2 = member2.nick;
              }
            }
            if (nick2 == tmp2) {
              let obj2 = UserUtilsDefault;
              let user2;
              if (obj[1] != tmp2) {
                user2 = tmp13.user;
              }
              nick2 = obj2.getName(user2);
            }
            obj1.b = nick2;
            obj1.n = obj.length - 2;
            formatToPlainStringResult = intl3.formatToPlainString(util.t.o2nmbk, obj1);
          }
        }
        const intl = util.intl;
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
          nick3 = UserUtilsDefault.getName(user3);
        }
        obj2 = { a: nick3, b: null };
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
          nick4 = UserUtilsDefault.getName(user4);
        }
        obj2.b = nick4;
        formatToPlainStringResult = intl.formatToPlainString(util.t["2efxiV"], obj2);
      }
      obj11 = ChannelListLayout;
    }
  }, items2)}</stateFromStores>;
}
function GuildVoiceChannelExtras(arg0) {
  ({ channel, users } = arg0);
  const tmp = closure_8();
  StageChannelParticipantStoreHooks;
  let obj = { style: tmp.subtitle, children: null };
  let tmp5Result = 0 !== users.length;
  if (tmp5Result) {
    obj = { style: tmp.users, children: null };
    obj = { users, max: 5, guildId: channel.guild_id, layout, audienceCount: tmp4 };
    obj.children = tmp5(guild_channels_VoiceOrStageSummaryRowDefault, obj);
    tmp5Result = tmp5(tmp6, obj);
  }
  obj.children = tmp5Result;
  return <View style={tmp.subtitle}>{null}</View>;
}
const View = fn(17).View;
const layout = fn(7878).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ users: { marginTop: 4 }, subtitle: { marginEnd: 16 }, trailing: { paddingVertical: 4, alignItems: "center", alignSelf: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx");

export default noop.memo(function GuildVoiceChannelRow(channel) {
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
  let obj = { onPress: callback, voiceStates, channel, subtitle: null, trailing: null, extras: null };
  const tmp = closure_8();
  obj.subtitle = <GuildVoiceChannelSubtitle channel={channel} voiceStates={voiceStates} users={mapped} />;
  if (null == trailing) {
    obj = { style: tmp.trailing, children: null };
    obj = { channel, voiceStates };
    obj.children = tmp4(renderChannelBadge.VocalChannelJoinButton, obj);
    trailing = tmp4(View, obj);
  }
  obj.trailing = trailing;
  obj.extras = <GuildVoiceChannelExtras channel={channel} voiceStates={voiceStates} users={mapped} />;
  return jsx(GuildChannelRowDefault, { onPress: callback, voiceStates, channel, subtitle: null, trailing: null, extras: null });
});