// === Module 16467: GuildVoiceOrStageChannelRow ===

// Module 16467 (GuildVoiceOrStageChannelRow)
import util from "util" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5743 */;
import ChannelListLayout from "ChannelListLayout" /* 9580 */;
import renderChannelBadge from "renderChannelBadge" /* 11774 */;
import guild_channels_ChannelSubtitle from "guild_channels/ChannelSubtitle" /* 16468 */;
import guild_channels_VoiceOrStageSummaryRowDefault from "guild_channels/VoiceOrStageSummaryRow" /* 16469 */;
import GuildChannelRowDefault from "GuildChannelRow" /* 16471 */;
import noop from "module_19" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;

require = fn;
function GuildVoiceChannelSubtitle(channel) {
  channel = channel.channel;
  const voiceStates = channel.voiceStates;
  const id = channel.id;
  const guild_id = channel.guild_id;
  const tmp = closure_8();
  const items = [StageInstanceStore];
  const items1 = [channel.id];
  const stateFromStores = channel(id[9]).useStateFromStores(items, () => {
    const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
    let topic;
    if (stageInstanceByChannel != null) {
      topic = stageInstanceByChannel.topic;
    }
    return topic;
  }, items1);
  const items2 = [stateFromStores, voiceStates, id, guild_id];
  let obj = channel(id[9]);
  return <stateFromStores style={tmp.subtitle}>{guild_id.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj2 = { subtitle: tmp, muted: false, layout, channelId: id, guildId: guild_id };
      return guild_channels_ChannelSubtitle.renderChannelSubtitle(obj2);
    } else {
      let obj5 = voiceStates;
      let formatToPlainStringResult = null;
      if (!obj11.isLayoutCompact(layout)) {
        formatToPlainStringResult = null;
        if (0 !== obj5.length) {
          if (1 === length) {
            const intl2 = util.intl;
            const first = obj5[0];
            let nick;
            if (first != tmp2) {
              const member5 = first.member;
              if (member5 != tmp2) {
                nick = member5.nick;
              }
            }
            if (nick == tmp2) {
              const first1 = obj5[0];
              tmp2 = first1 == tmp2;
              let user;
              if (!tmp2) {
                user = first1.user;
              }
              nick = UserUtilsDefault.getName(user);
            }
            obj5 = { a: nick };
            formatToPlainStringResult = intl2.formatToPlainString(util.t["/GCyII"], obj5);
          } else if (2 !== length) {
            const intl3 = util.intl;
            const first2 = obj5[0];
            let nick1;
            if (first2 != tmp2) {
              const member = first2.member;
              if (member != tmp2) {
                nick1 = member.nick;
              }
            }
            if (nick1 == tmp2) {
              const first3 = obj5[0];
              let user1;
              if (first3 != tmp2) {
                user1 = first3.user;
              }
              nick1 = UserUtilsDefault.getName(user1);
            }
            const obj8 = { a: nick1, b: null, n: null };
            let nick2;
            if (obj5[1] != tmp2) {
              const member2 = tmp9.member;
              if (member2 != tmp2) {
                nick2 = member2.nick;
              }
            }
            if (nick2 == tmp2) {
              let user2;
              if (obj5[1] != tmp2) {
                user2 = tmp13.user;
              }
              nick2 = UserUtilsDefault.getName(user2);
            }
            obj8.b = nick2;
            obj8.n = obj5.length - 2;
            formatToPlainStringResult = intl3.formatToPlainString(util.t.o2nmbk, obj8);
          }
        }
        const intl = util.intl;
        const first4 = obj5[0];
        let nick3;
        if (first4 != tmp2) {
          const member3 = first4.member;
          if (member3 != tmp2) {
            nick3 = member3.nick;
          }
        }
        if (nick3 == tmp2) {
          const first5 = obj5[0];
          let user3;
          if (first5 != tmp2) {
            user3 = first5.user;
          }
          nick3 = UserUtilsDefault.getName(user3);
        }
        const obj10 = { a: nick3, b: null };
        let nick4;
        if (obj5[1] != tmp2) {
          const member4 = tmp25.member;
          if (member4 != tmp2) {
            nick4 = member4.nick;
          }
        }
        if (nick4 == tmp2) {
          let user4;
          if (obj5[1] != tmp2) {
            user4 = tmp29.user;
          }
          nick4 = UserUtilsDefault.getName(user4);
        }
        obj10.b = nick4;
        formatToPlainStringResult = intl.formatToPlainString(util.t["2efxiV"], obj10);
      }
      obj11 = ChannelListLayout;
    }
  }, items2)}</stateFromStores>;
}
function GuildVoiceChannelExtras(arg0) {
  ({ channel, users } = arg0);
  const tmp = closure_8();
  StageChannelParticipantStoreHooks;
  const obj = { style: tmp.subtitle, children: null };
  let tmp5Result = 0 !== users.length;
  if (tmp5Result) {
    const obj2 = { style: tmp.users, children: null };
    const obj3 = { users, max: 5, guildId: channel.guild_id, layout, audienceCount: tmp4 };
    obj2.children = jsx(guild_channels_VoiceOrStageSummaryRowDefault, { users, max: 5, guildId: channel.guild_id, layout, audienceCount: tmp4 });
    tmp5Result = <View style={tmp.users}>{null}</View>;
  }
  obj.children = tmp5Result;
  return <View style={tmp.subtitle}>{null}</View>;
}
const View = fn(17).View;
const layout = fn(7303).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
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
  const obj = { onPress: callback, voiceStates, channel, subtitle: null, trailing: null, extras: null };
  const tmp = closure_8();
  obj.subtitle = <GuildVoiceChannelSubtitle channel={channel} voiceStates={voiceStates} users={mapped} />;
  if (null == trailing) {
    const obj2 = { style: tmp.trailing, children: null };
    const obj3 = { channel, voiceStates };
    obj2.children = jsx(renderChannelBadge.VocalChannelJoinButton, { channel, voiceStates });
    trailing = <View style={tmp.trailing}>{null}</View>;
  }
  obj.trailing = trailing;
  obj.extras = <GuildVoiceChannelExtras channel={channel} voiceStates={voiceStates} users={mapped} />;
  return jsx(GuildChannelRowDefault, { onPress: callback, voiceStates, channel, subtitle: null, trailing: null, extras: null });
});