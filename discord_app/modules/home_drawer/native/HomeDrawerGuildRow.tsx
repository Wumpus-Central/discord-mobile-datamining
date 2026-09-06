// === Module 16316: HomeDrawerGuildRow ===

// Module 16316 (HomeDrawerGuildRow)
import Text_Text from "Text/Text" /* 4556 */;
import useChannelName from "useChannelName" /* 4713 */;
import StreamingSubtitleDefault from "StreamingSubtitle" /* 16321 */;
import VoiceSubtitleDefault from "VoiceSubtitle" /* 16322 */;
import MentionSubtitleDefault from "MentionSubtitle" /* 16323 */;
import TypingSubtitleDefault from "TypingSubtitle" /* 16325 */;
import UnreadSubtitleDefault from "UnreadSubtitle" /* 16326 */;
import noop from "module_19" /* 19 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7636 */;
import GuildStore from "GuildStore" /* 1979 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function GuildRowWrapper(guild) {
  guild = guild.guild;
  const disableSubtitle = guild.disableSubtitle;
  const onActiveHookChange = guild.onActiveHookChange;
  let unreadChannel;
  let unreadChannelCount;
  let mentionChannel;
  let mentionChannelName;
  let mentionChannelCount;
  let text;
  closure_21 = undefined;
  let memo2;
  let tmp = closure_21();
  noop = tmp;
  let obj = guild(onActiveHookChange[16]);
  let items = [unreadChannel];
  const stateFromStores = obj.useStateFromStores(items, () => GuildReadStateStore.hasUnread(guild.id));
  let obj1 = guild(onActiveHookChange[16]);
  const items1 = [mentionChannelName];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => UserGuildSettingsStore.getMuteConfig(guild.id));
  const items2 = [stateFromStores1];
  const memo = noop.useMemo(() => {
    if (null == stateFromStores1) {
      let obj = { isMuted: false, isTemporary: false };
    } else {
      let tmp2 = null == tmp.end_time;
      if (!tmp2) {
        const _Date = Date;
        const date = new Date(tmp.end_time);
        const _Date2 = Date;
        const date1 = new Date();
        tmp2 = date > date1;
      }
      obj = { isMuted: tmp2, isTemporary: null != tmp.end_time };
    }
    return obj;
  }, items2);
  const items3 = [guild, memo, , ];
  ({ guildName: arr4[2], guildNameText: arr4[3] } = tmp);
  const memo1 = noop.useMemo(() => {
    if (memo.isMuted) {
      let tmp3Result = dependencyMap;
      if (tmp.isTemporary) {
        tmp3Result = tmp3(13287);
        let BellSlashIcon = tmp3Result.BellZIcon;
      } else {
        BellSlashIcon = tmp3(9059).BellSlashIcon;
      }
    } else {
      let obj = { style: closure_3.guildName, children: null };
      obj = { variant: "text-md/medium", style: closure_3.guildNameText, lineClamp: 1, color: null, children: null };
      let str = "text-default";
      if (tmp.isMuted) {
        str = "text-muted";
      }
      obj.color = str;
      obj.children = guild.name;
      const items = [collapsedCategories(Text_Text.Text, obj), collapsedCategories(value2, { size: "xs", color: "icon-muted" })];
      obj.children = items;
      return closure_2_19(View, obj);
    }
  }, items3);
  const isHomeDrawerChannelMuted = guild(onActiveHookChange[22]).useIsHomeDrawerChannelMuted();
  const obj4 = guild(onActiveHookChange[22]);
  const isHomeDrawerChannelInChannelList = guild(onActiveHookChange[23]).useIsHomeDrawerChannelInChannelList();
  const obj5 = guild(onActiveHookChange[23]);
  const items4 = [isHomeDrawerChannelInChannelList, isHomeDrawerChannelMuted, mentionChannelCount, mentionChannel, unreadChannelCount, mentionChannelName, stateFromStores1];
  const items5 = [guild.id, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  const stateFromStoresObject = guild(onActiveHookChange[16]).useStateFromStoresObject(items4, () => {
    const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(guild.id);
    const found = selectableChannelIds.filter((item) => {
      const basicChannel = isHomeDrawerChannelMuted.getBasicChannel(item);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        const tmp4 = closure_1_7(basicChannel);
        let tmp5 = !tmp4;
        if (!tmp4) {
          let tmp7 = memo(basicChannel.type);
          if (tmp7) {
            tmp7 = !stateFromStores1.hasJoined(item);
          }
          let tmp9 = !tmp7;
          if (!tmp7) {
            let tmp11 = isHomeDrawerChannelInChannelList(basicChannel);
            if (tmp11) {
              let hasUnreadResult = unreadChannelCount.hasUnread(item);
              if (hasUnreadResult) {
                hasUnreadResult = mentionChannelName.resolveUnreadSetting(basicChannel) === typingChannelId.ALL_MESSAGES;
              }
              tmp11 = hasUnreadResult;
            }
            tmp9 = tmp11;
          }
          tmp5 = tmp9;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    });
    let channel;
    if (found.length > 0) {
      channel = ChannelStore.getChannel(found[0]);
    }
    const obj = { unreadChannel: channel, unreadChannelName: null, unreadChannelCount: null };
    let channelName;
    if (null != channel) {
      channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
    }
    obj.unreadChannelName = channelName;
    obj.unreadChannelCount = found.length;
    return obj;
  }, items5);
  unreadChannel = stateFromStoresObject.unreadChannel;
  const unreadChannelName = stateFromStoresObject.unreadChannelName;
  unreadChannelCount = stateFromStoresObject.unreadChannelCount;
  const obj6 = guild(onActiveHookChange[16]);
  const items6 = [unreadChannel, isHomeDrawerChannelMuted, mentionChannelCount, mentionChannel, stateFromStores1];
  const items7 = [guild.id, isHomeDrawerChannelInChannelList];
  const stateFromStoresObject1 = guild(onActiveHookChange[16]).useStateFromStoresObject(items6, () => {
    const tmp = unreadChannel.getMutableGuildStates()[guild.id];
    guild = tmp;
    if (null == tmp) {
      return { mentionChannel: "ip", mentionChannelName: "isArray", mentionChannelCount: null };
    } else {
      const keys = disableSubtitle(onActiveHookChange[25]).keys(tmp.mentionCounts);
      const found = keys.filter((item) => {
        if (mentionCounts.mentionCounts[item].count <= 0) {
          return false;
        } else {
          const basicChannel = ChannelStore.getBasicChannel(item);
          let tmp4 = null != basicChannel;
          if (tmp4) {
            let tmp6 = isThread(basicChannel.type);
            if (tmp6) {
              tmp6 = !JoinedThreadsStore.hasJoined(item);
            }
            let tmp8 = !tmp6;
            if (!tmp6) {
              tmp8 = isHomeDrawerChannelInChannelList(basicChannel);
            }
            tmp4 = tmp8;
          }
          return tmp4;
        }
      });
      let channel;
      if (found.length > 0) {
        channel = isHomeDrawerChannelMuted.getChannel(found[0]);
      }
      const obj = { mentionChannel: channel, mentionChannelName: null, mentionChannelCount: null };
      let channelName;
      if (null != channel) {
        channelName = guild(onActiveHookChange[24]).computeChannelName(channel, mentionChannelCount, mentionChannel);
        const obj2 = guild(onActiveHookChange[24]);
      }
      obj.mentionChannelName = channelName;
      obj.mentionChannelCount = found.length;
      return obj;
    }
  }, items7);
  mentionChannel = stateFromStoresObject1.mentionChannel;
  mentionChannelName = stateFromStoresObject1.mentionChannelName;
  mentionChannelCount = stateFromStoresObject1.mentionChannelCount;
  const obj7 = guild(onActiveHookChange[16]);
  const voiceUsers = guild(onActiveHookChange[26]).useVoiceUsers(guild);
  const voiceUsers1 = voiceUsers.voiceUsers;
  const streamingUser = voiceUsers.streamingUser;
  const obj8 = guild(onActiveHookChange[26]);
  const homeDrawerGuildTyping = guild(onActiveHookChange[27]).useHomeDrawerGuildTyping(guild.id);
  const typingChannelId = homeDrawerGuildTyping.typingChannelId;
  const typingChannelName = homeDrawerGuildTyping.typingChannelName;
  const obj9 = guild(onActiveHookChange[27]);
  const items8 = [isHomeDrawerChannelMuted];
  const items9 = [typingChannelId];
  const stateFromStores2 = guild(onActiveHookChange[16]).useStateFromStores(items8, () => ChannelStore.getChannel(typingChannelId), items9);
  let tmp16 = typingChannelId;
  const obj10 = guild(onActiveHookChange[16]);
  if (typingChannelId == null) {
    tmp16 = voiceUsers1;
  }
  obj = { channelId: tmp16, guildId: guild.id, typingUserIds: homeDrawerGuildTyping.typingUserIds };
  const tmp15Result = disableSubtitle(onActiveHookChange[28])(obj);
  text = tmp15Result;
  let tmp18 = memo.isMuted || disableSubtitle;
  if (!tmp18) {
    tmp18 = 0 === voiceUsers1.length;
  }
  closure_21 = tmp19;
  const items10 = [!tmp18, streamingUser, disableSubtitle, mentionChannelName, mentionChannelCount, typingChannelId, tmp15Result, memo.isMuted, stateFromStores, unreadChannelName, unreadChannelCount];
  memo2 = obj3.useMemo(() => {
    if (closure_21) {
      if (null != streamingUser) {
        let VOICE = obj.STREAMING;
      } else {
        VOICE = obj.VOICE;
      }
    } else {
      if (disableSubtitle) {
        let TYPING = obj.NONE;
      } else {
        if (null != mentionChannelName) {
          if (mentionChannelCount > 0) {
            TYPING = obj.MENTION;
          }
        }
        if (null != typingChannelId) {
          if (null != closure_20) {
            if (!memo.isMuted) {
              TYPING = obj.TYPING;
            }
          }
        }
        if (stateFromStores) {
          if (null != unreadChannelName) {
            const UNREAD = obj.UNREAD;
          }
        }
        const NONE = obj.NONE;
      }
      return TYPING;
    }
  }, items10);
  const items11 = [memo2, onActiveHookChange];
  const effect = obj3.useEffect(() => {
    if (onActiveHookChange != null) {
      tmp(memo2);
    }
  }, items11);
  const items12 = [memo2, guild, streamingUser, voiceUsers1, mentionChannel, mentionChannelName, mentionChannelCount, stateFromStores2, typingChannelName, tmp15Result, unreadChannel, unreadChannelName, unreadChannelCount];
  const memo3 = obj3.useMemo(() => {
    if (obj.STREAMING === memo2) {
      obj = { guildId: guild.id, streamingUser };
      return collapsedCategories(StreamingSubtitleDefault, obj);
    } else if (tmp2.VOICE === tmp) {
      obj = { guildId: guild.id, voiceUsers: voiceUsers1 };
      return collapsedCategories(VoiceSubtitleDefault, obj);
    } else if (tmp2.MENTION === tmp) {
      let tmp20 = null;
      if (null != mentionChannelName) {
        const obj1 = { guild, channel: mentionChannel, channelName: tmp19, count: mentionChannelCount };
        tmp20 = collapsedCategories(MentionSubtitleDefault, obj1);
      }
      return tmp20;
    } else if (tmp2.TYPING === tmp) {
      const obj2 = { guild, channel: stateFromStores2, channelName: typingChannelName, text };
      return collapsedCategories(TypingSubtitleDefault, obj2);
    } else if (tmp2.UNREAD === tmp) {
      let tmp5 = null;
      if (null != unreadChannelName) {
        obj = { guild, channel: unreadChannel, channelName: tmp4, count: unreadChannelCount };
        tmp5 = collapsedCategories(UnreadSubtitleDefault, obj);
      }
      return tmp5;
    } else if (tmp2.NONE === tmp) {
      return null;
    }
  }, items12);
  obj = { title: memo1, subtitle: memo3, right: null };
  let tmp23Result = null;
  if (!memo.isMuted) {
    tmp23Result = null;
    if (!disableSubtitle) {
      tmp23Result = null;
      if (0 !== voiceUsers1.length) {
        obj1 = { voiceUsers: voiceUsers1, streamingChannelId: voiceUsers.streamingChannelId, streamingUser, guildId: guild.id };
        tmp23Result = tmp23(tmp2(tmp3[26]).GuildVoiceState, obj1);
      }
    }
  }
  obj.right = tmp23Result;
  return typingChannelName(guild(onActiveHookChange[34]).HomeDrawerSharedItem, obj);
}
const View = fn(17).View;
const isThread = fn(1961).isThread;
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_15, NOOP: closure_16 } = Constants);
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const HomeDrawerActiveHook = { STREAMING: "streaming", VOICE: "voice", MENTION: "mention", TYPING: "typing", UNREAD: "unread", NONE: "none" };
const createStyles = fn(4560);
let closure_21 = createStyles.createStyles({ guildName: { flexDirection: "row", alignItems: "center", gap: 4 }, guildNameText: { flexShrink: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildRow.tsx");

export default function HomeDrawerGuildRow(guildId) {
  guildId = guildId.guildId;
  ({ disableSubtitle, onActiveHookChange } = guildId);
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const MobileHomeDrawerExperiment = guildId(4423).MobileHomeDrawerExperiment;
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (MobileHomeDrawerExperiment.useConfig({ location: "guild-row" }).enableHome) {
      tmp3 = null;
      if (!tmp2) {
        obj = { guild: stateFromStores, disableSubtitle, onActiveHookChange };
        tmp3 = closure_18(GuildRowWrapper, obj);
      }
    }
  }
  return tmp3;
};
export { HomeDrawerActiveHook };