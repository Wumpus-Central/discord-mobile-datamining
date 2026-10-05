// === Module 16257: HomeDrawerGuildRow ===

// Module 16257 (HomeDrawerGuildRow)
import react_native from "react-native" /* 17 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import Text_Text from "Text/Text" /* 4886 */;
import useChannelName from "useChannelName" /* 5043 */;
import ReadStateConstants from "ReadStateConstants" /* 5072 */;
import BellSlashIcon2 from "BellSlashIcon" /* 9813 */;
import BellZIcon from "BellZIcon" /* 13129 */;
import StreamingSubtitleDefault from "StreamingSubtitle" /* 16262 */;
import VoiceSubtitleDefault from "VoiceSubtitle" /* 16263 */;
import MentionSubtitleDefault from "MentionSubtitle" /* 16264 */;
import TypingSubtitleDefault from "TypingSubtitle" /* 16266 */;
import UnreadSubtitleDefault from "UnreadSubtitle" /* 16267 */;
import react_mod from "react" /* 19 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7121 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guild, guildId;

let closure_15;
let closure_16;
let closure_18;
let closure_19;
let react = react_mod;
const View = react_native.View;
const isThread = ChannelRecord.isThread;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_15, NOOP: closure_16 } = Constants);
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
const HomeDrawerActiveHook = { STREAMING: "streaming", VOICE: "voice", MENTION: "mention", TYPING: "typing", UNREAD: "unread", NONE: "none" };
let closure_21 = createStyles.createStyles({ guildName: { flexDirection: "row", alignItems: "center", gap: 4 }, guildNameText: { flexShrink: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let disableSubtitle;
  let first;
  let onActiveHookChange;
  let tmp6;
  let tmp8;
  const obj = guildId(576);
  const cResult = obj.c(8);
  guildId = guildId.guildId;
  ({ disableSubtitle, onActiveHookChange } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "guild-row" };
    cResult[3] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  const MobileHomeDrawerExperiment = tmp(4742).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig(tmp8).enableHome;
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (enableHome) {
      tmp10 = null;
      if (!tmp9) {
        if (cResult[4] === disableSubtitle) {
          if (cResult[5] === stateFromStores) {
            let tmp11;
            if (cResult[6] === onActiveHookChange) {
              tmp11 = cResult[7];
            }
            tmp10 = tmp11;
          }
        }
        const obj3 = { guild: stateFromStores, disableSubtitle, onActiveHookChange };
        const tmp14 = closure_18(closure_22, obj3);
        cResult[4] = disableSubtitle;
        cResult[5] = stateFromStores;
        cResult[6] = onActiveHookChange;
        cResult[7] = tmp14;
        tmp11 = tmp14;
      }
    }
  }
  return tmp10;
}) : ((guildId) => {
  let disableSubtitle;
  let onActiveHookChange;
  guildId = guildId.guildId;
  ({ disableSubtitle, onActiveHookChange } = guildId);
  const items = [GuildStore];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const MobileHomeDrawerExperiment = guildId(4742).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guild-row" }).enableHome;
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (enableHome) {
      tmp3 = null;
      if (!tmp2) {
        const obj2 = { guild: stateFromStores, disableSubtitle, onActiveHookChange };
        tmp3 = closure_18(closure_22, obj2);
      }
    }
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let disableSubtitle;
  let first;
  let mutableGuildStates;
  let onActiveHookChange;
  let tmp12;
  let tmp16;
  let tmp9;
  let tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(77);
  guild = guild.guild;
  ({ disableSubtitle, onActiveHookChange } = guild);
  let tmp4 = closure_21();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildReadStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    class E {
      constructor() {
        return closure_9.hasUnread(guild.id);
      }
    }
    cResult[1] = guild.id;
    cResult[2] = E;
  } else {
    class E {
      constructor() {
        return closure_9.hasUnread(guild.id);
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, E);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return closure_9.hasUnread(guild.id);
      }
    }
    const items1 = [UserGuildSettingsStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    class E {
      constructor() {
        return closure_9.hasUnread(guild.id);
      }
    }
  }
  if (cResult[4] !== guild.id) {
    class G {
      constructor() {
        return closure_13.getMuteConfig(guild.id);
      }
    }
    cResult[4] = guild.id;
    cResult[5] = G;
  } else {
    class G {
      constructor() {
        return closure_13.getMuteConfig(guild.id);
      }
    }
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, G);
  if (null != stateFromStores1) {
    class G {
      constructor() {
        return closure_13.getMuteConfig(guild.id);
      }
    }
    if (cResult[9] === tmp14) {
      class G {
        constructor() {
          return closure_13.getMuteConfig(guild.id);
        }
      }
      tmp12 = tmp16;
    }
    let obj2 = { isMuted: tmp14, isTemporary: null != stateFromStores1.end_time };
    cResult[9] = tmp14;
    cResult[10] = null != stateFromStores1.end_time;
    cResult[11] = obj2;
    tmp16 = obj2;
  } else {
    class G {
      constructor() {
        return closure_13.getMuteConfig(guild.id);
      }
    }
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          return closure_13.getMuteConfig(guild.id);
        }
      }
      cResult[6] = tmp13;
      tmp12 = tmp13;
    } else {
      class G {
        constructor() {
          return closure_13.getMuteConfig(guild.id);
        }
      }
    }
  }
  if (tmp12.isMuted) {
    class G {
      constructor() {
        return closure_13.getMuteConfig(guild.id);
      }
    }
  } else {
    class G {
      constructor() {
        return closure_13.getMuteConfig(guild.id);
      }
    }
  }
  if (tmp12.isMuted) {
    class G {
      constructor() {
        return closure_13.getMuteConfig(guild.id);
      }
    }
  }
  if (cResult[12] === guild.name) {
    class G {
      constructor() {
        return closure_13.getMuteConfig(guild.id);
      }
    }
  }
  let obj3 = { variant: "text-md/medium", style: tmp4.guildNameText, lineClamp: 1, color: str, children: guild.name };
  cResult[12] = guild.name;
  cResult[13] = tmp4.guildNameText;
  cResult[14] = "text-default";
  cResult[15] = closure_18(tmp(4886).Text, obj3);
  closure_18(tmp(4886).Text, obj3);
}) : ((guild) => {
  let closure_3;
  let tmp23Result;
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
  react = tmp;
  let tmp2 = guild;
  let obj = guild(onActiveHookChange[18]);
  let items = [unreadChannel];
  const stateFromStores = obj.useStateFromStores(items, () => GuildReadStateStore.hasUnread(guild.id));
  let obj2 = guild(onActiveHookChange[18]);
  const items1 = [mentionChannelName];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserGuildSettingsStore.getMuteConfig(guild.id));
  let obj3 = react;
  const items2 = [stateFromStores1];
  const memo = react.useMemo(function() {
    let obj;
    if (null == stateFromStores1) {
      obj = { isMuted: false, isTemporary: false };
    } else {
      let tmp2 = null == stateFromStores1.end_time;
      if (!tmp2) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date = new Date(stateFromStores1.end_time);
        tmp2 = date > new Date();
        const date1 = new Date();
      }
      obj = { isMuted: tmp2, isTemporary: null != stateFromStores1.end_time };
    }
    return obj;
  }, items2);
  const items3 = [guild, memo, , ];
  ({ guildName: arr4[2], guildNameText: arr4[3] } = tmp);
  const memo1 = react.useMemo(() => {
    let items;
    let str;
    let tmp2;
    if (memo.isMuted) {
      let BellSlashIcon;
      if (memo.isTemporary) {
        BellSlashIcon = BellZIcon.BellZIcon;
      } else {
        BellSlashIcon = BellSlashIcon2.BellSlashIcon;
      }
      tmp2 = BellSlashIcon;
    } else {
      tmp2 = authStore3;
    }
    const obj2 = { variant: "text-md/medium", style: closure_3.guildNameText, lineClamp: 1, color: str, children: guild.name };
    str = "text-default";
    const obj = { style: closure_3.guildName, children: items };
    const Text = Text_Text.Text;
    if (memo.isMuted) {
      str = "text-muted";
    }
    items = [authStore4(Text, obj2), authStore4(tmp2, { size: "xs", color: "icon-muted" })];
    return stateFromStores2(View, obj);
  }, items3);
  let obj4 = guild(onActiveHookChange[24]);
  const isHomeDrawerChannelMuted = obj4.useIsHomeDrawerChannelMuted();
  let obj5 = guild(onActiveHookChange[25]);
  const isHomeDrawerChannelInChannelList = obj5.useIsHomeDrawerChannelInChannelList();
  const items4 = [isHomeDrawerChannelInChannelList, isHomeDrawerChannelMuted, mentionChannelCount, mentionChannel, unreadChannelCount, mentionChannelName, stateFromStores1];
  const items5 = [guild.id, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  const obj6 = guild(onActiveHookChange[18]);
  const stateFromStoresObject = obj6.useStateFromStoresObject(items4, () => {
    let channelName;
    const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(guild.id);
    const found = selectableChannelIds.filter((item) => {
      const basicChannel = isHomeDrawerChannelMuted.getBasicChannel(item);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        let tmp5 = !closure_1_7(basicChannel);
        closure_1_7(basicChannel);
        if (tmp5) {
          let tmp9 = !(memo(basicChannel.type) && !stateFromStores1.hasJoined(item));
          const tmp7 = memo(basicChannel.type) && !stateFromStores1.hasJoined(item);
          if (tmp9) {
            let tmp11 = isHomeDrawerChannelInChannelList(basicChannel);
            if (tmp11) {
              tmp11 = unreadChannelCount.hasUnread(item) && mentionChannelName.resolveUnreadSetting(basicChannel) === typingChannelId.ALL_MESSAGES;
              const hasUnreadResult = unreadChannelCount.hasUnread(item) && mentionChannelName.resolveUnreadSetting(basicChannel) === typingChannelId.ALL_MESSAGES;
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
    const obj = { unreadChannel: channel, unreadChannelName: channelName, unreadChannelCount: found.length };
    channelName = undefined;
    if (null != channel) {
      const obj2 = useChannelName;
      channelName = obj2.computeChannelName(channel, UserStore, RelationshipStore);
    }
    return obj;
  }, items5);
  unreadChannel = stateFromStoresObject.unreadChannel;
  const unreadChannelName = stateFromStoresObject.unreadChannelName;
  unreadChannelCount = stateFromStoresObject.unreadChannelCount;
  const items6 = [unreadChannel, isHomeDrawerChannelMuted, mentionChannelCount, mentionChannel, stateFromStores1];
  const items7 = [guild.id, isHomeDrawerChannelInChannelList];
  const obj7 = guild(onActiveHookChange[18]);
  const stateFromStoresObject1 = obj7.useStateFromStoresObject(items6, () => {
    let channelName;
    let mentionCounts;
    const tmp = unreadChannel.getMutableGuildStates()[guild.id];
    guild = tmp;
    if (null == tmp) {
      return { mentionChannel: "duration", mentionChannelName: "toCharArray$esjava$1", mentionChannelCount: null };
    } else {
      const obj3 = disableSubtitle(onActiveHookChange[27]);
      const keys = obj3.keys(tmp.mentionCounts);
      const found = keys.filter((item) => {
        if (mentionCounts.mentionCounts[item].count <= 0) {
          return false;
        } else {
          const basicChannel = ChannelStore.getBasicChannel(item);
          let tmp4 = null != basicChannel;
          if (tmp4) {
            const tmp6 = isThread(basicChannel.type) && !JoinedThreadsStore.hasJoined(item);
            tmp4 = !tmp6 && isHomeDrawerChannelInChannelList(basicChannel);
            const tmp8 = !tmp6 && isHomeDrawerChannelInChannelList(basicChannel);
          }
          return tmp4;
        }
      });
      let channel;
      if (found.length > 0) {
        channel = isHomeDrawerChannelMuted.getChannel(found[0]);
      }
      const obj = { mentionChannel: channel, mentionChannelName: channelName, mentionChannelCount: found.length };
      channelName = undefined;
      if (null != channel) {
        const obj2 = guild(onActiveHookChange[26]);
        channelName = obj2.computeChannelName(channel, mentionChannelCount, mentionChannel);
      }
      return obj;
    }
  }, items7);
  mentionChannel = stateFromStoresObject1.mentionChannel;
  mentionChannelName = stateFromStoresObject1.mentionChannelName;
  mentionChannelCount = stateFromStoresObject1.mentionChannelCount;
  const obj8 = guild(onActiveHookChange[28]);
  const voiceUsers = obj8.useVoiceUsers(guild);
  const voiceUsers1 = voiceUsers.voiceUsers;
  const streamingUser = voiceUsers.streamingUser;
  const streamingChannelId = voiceUsers.streamingChannelId;
  const obj9 = guild(onActiveHookChange[29]);
  const homeDrawerGuildTyping = obj9.useHomeDrawerGuildTyping(guild.id);
  const typingChannelId = homeDrawerGuildTyping.typingChannelId;
  const typingChannelName = homeDrawerGuildTyping.typingChannelName;
  const typingUserIds = homeDrawerGuildTyping.typingUserIds;
  const items8 = [isHomeDrawerChannelMuted];
  const items9 = [typingChannelId];
  const obj10 = guild(onActiveHookChange[18]);
  const stateFromStores2 = obj10.useStateFromStores(items8, () => ChannelStore.getChannel(typingChannelId), items9);
  let tmp16 = typingChannelId;
  const tmp15 = disableSubtitle(onActiveHookChange[30]);
  if (typingChannelId == null) {
    tmp16 = voiceUsers1;
  }
  const obj11 = { channelId: tmp16, guildId: guild.id, typingUserIds };
  const tmp15Result = tmp15(obj11);
  text = tmp15Result;
  let tmp18 = memo.isMuted || disableSubtitle;
  if (!tmp18) {
    tmp18 = 0 === voiceUsers1.length;
  }
  const tmp19 = !tmp18;
  closure_21 = tmp19;
  const items10 = [tmp19, streamingUser, disableSubtitle, mentionChannelName, mentionChannelCount, typingChannelId, tmp15Result, memo.isMuted, stateFromStores, unreadChannelName, unreadChannelCount];
  memo2 = obj3.useMemo(() => {
    let TYPING;
    if (closure_21) {
      let VOICE;
      if (null != streamingUser) {
        VOICE = obj.STREAMING;
      } else {
        VOICE = obj.VOICE;
      }
      TYPING = VOICE;
    } else if (disableSubtitle) {
      TYPING = obj.NONE;
    } else {
      if (null != mentionChannelName) {
        if (mentionChannelCount > 0) {
          TYPING = obj.MENTION;
        }
      }
      if (null != typingChannelId) {
        if (null != HomeDrawerActiveHook) {
          if (!memo.isMuted) {
            TYPING = obj.TYPING;
          }
        }
      }
      if (stateFromStores) {
        if (null != unreadChannelName) {
          let NONE;
          if (unreadChannelCount > 0) {
            NONE = obj.UNREAD;
          }
          TYPING = NONE;
        }
      }
      NONE = obj.NONE;
    }
    return TYPING;
  }, items10);
  const items11 = [memo2, onActiveHookChange];
  const effect = obj3.useEffect(() => {
    if (onActiveHookChange != null) {
      tmp(memo2);
    }
  }, items11);
  const items12 = [memo2, guild, streamingUser, voiceUsers1, mentionChannel, mentionChannelName, mentionChannelCount, stateFromStores2, typingChannelName, tmp15Result, unreadChannel, unreadChannelName, unreadChannelCount];
  const memo3 = obj3.useMemo(() => {
    let obj;
    if (obj.STREAMING === memo2) {
      const obj2 = { guildId: guild.id, streamingUser };
      return authStore4(StreamingSubtitleDefault, obj2);
    } else if (obj.VOICE === memo2) {
      const obj3 = { guildId: guild.id, voiceUsers: voiceUsers1 };
      return authStore4(VoiceSubtitleDefault, obj3);
    } else if (obj.MENTION === memo2) {
      let tmp20 = null;
      if (null != mentionChannelName) {
        const obj4 = { guild, channel: mentionChannel, channelName: tmp19, count: mentionChannelCount };
        tmp20 = authStore4(MentionSubtitleDefault, obj4);
      }
      return tmp20;
    } else if (obj.TYPING === memo2) {
      const obj5 = { guild, channel: stateFromStores2, channelName: typingChannelName, text };
      return authStore4(TypingSubtitleDefault, obj5);
    } else if (obj.UNREAD === memo2) {
      let tmp5 = null;
      if (null != unreadChannelName) {
        obj = { guild, channel: unreadChannel, channelName: tmp4, count: unreadChannelCount };
        tmp5 = authStore4(UnreadSubtitleDefault, obj);
      }
      return tmp5;
    } else if (obj.NONE === memo2) {
      return null;
    }
  }, items12);
  const obj12 = { title: memo1, subtitle: memo3, right: tmp23Result };
  tmp23Result = null;
  const HomeDrawerSharedItem = tmp2(tmp3[36]).HomeDrawerSharedItem;
  if (!memo.isMuted) {
    tmp23Result = null;
    if (!disableSubtitle) {
      tmp23Result = null;
      if (0 !== voiceUsers1.length) {
        const obj13 = { voiceUsers: voiceUsers1, streamingChannelId, streamingUser, guildId: guild.id };
        tmp23Result = tmp23(tmp2(tmp3[28]).GuildVoiceState, obj13);
      }
    }
  }
  return typingChannelName(HomeDrawerSharedItem, obj12);
});
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildRow.tsx");

export default tmp4;
export { HomeDrawerActiveHook };