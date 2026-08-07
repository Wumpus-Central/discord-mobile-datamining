// discord_app/modules/home_drawer/native/HomeDrawerGuildRow.tsx
import BellZIcon from "BellZIcon";
import { View } from "MobileHomeDrawerExperiment";
import storeThread from "storeThread";
import { isThread } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import upsertRelationship from "upsertRelationship";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";

let closure_15;
let closure_16;
let closure_18;
let closure_19;
const require = arg1;
function GuildRowWrapper(guild) {
  guild = guild.guild;
  const disableSubtitle = guild.disableSubtitle;
  const onActiveHookChange = guild.onActiveHookChange;
  let React;
  let stateFromStores;
  let stateFromStores1;
  let memo;
  let isHomeDrawerChannelMuted;
  let isHomeDrawerChannelInChannelList;
  let unreadChannel;
  let unreadChannelName;
  let unreadChannelCount;
  let mentionChannel;
  let mentionChannelName;
  let mentionChannelCount;
  let voiceUsers1;
  let streamingUser;
  let typingChannelId;
  let typingChannelName;
  let stateFromStores2;
  let c20;
  let callback2;
  let memo2;
  let tmp = callback2();
  React = tmp;
  let obj = guild(onActiveHookChange[16]);
  let items = [unreadChannel];
  stateFromStores = obj.useStateFromStores(items, () => unreadChannel.hasUnread(guild.id));
  let obj1 = guild(onActiveHookChange[16]);
  const items1 = [mentionChannelName];
  stateFromStores1 = obj1.useStateFromStores(items1, () => mentionChannelName.getMuteConfig(guild.id));
  const items2 = [stateFromStores1];
  memo = React.useMemo(() => {
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
      obj = { isMuted: null, isTemporary: null };
      obj[0] = tmp2;
      obj[1] = null != tmp.end_time;
    }
    return obj;
  }, items2);
  const items3 = [guild, memo, , ];
  ({ guildName: arr4[2], guildNameText: arr4[3] } = tmp);
  const memo1 = React.useMemo(() => {
    if (memo.isMuted) {
      let tmp3Result = onActiveHookChange;
      if (tmp.isTemporary) {
        tmp3Result = tmp3(tmp3Result[19]);
        let BellSlashIcon = tmp3Result.BellZIcon;
      } else {
        BellSlashIcon = tmp3(tmp3Result[20]).BellSlashIcon;
      }
    } else {
      let obj = { style: null, children: null };
      obj[0] = _undefined.guildName;
      obj = { variant: "text-md/medium", style: null, lineClamp: 1, color: null, children: null };
      obj[1] = _undefined.guildNameText;
      let str = "text-default";
      if (tmp.isMuted) {
        str = "text-muted";
      }
      obj[3] = str;
      obj[4] = guild.name;
      const items = [typingChannelName(guild(onActiveHookChange[21]).Text, obj), typingChannelName(streamingUser, { size: "xs", color: "icon-muted" })];
      obj[1] = items;
      return stateFromStores2(stateFromStores, obj);
    }
  }, items3);
  isHomeDrawerChannelMuted = guild(onActiveHookChange[22]).useIsHomeDrawerChannelMuted();
  const obj4 = guild(onActiveHookChange[22]);
  isHomeDrawerChannelInChannelList = guild(onActiveHookChange[23]).useIsHomeDrawerChannelInChannelList();
  const obj5 = guild(onActiveHookChange[23]);
  const items4 = [isHomeDrawerChannelInChannelList, isHomeDrawerChannelMuted, mentionChannelCount, mentionChannel, unreadChannelCount, mentionChannelName, stateFromStores1];
  const items5 = [guild.id, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  const stateFromStoresObject = guild(onActiveHookChange[16]).useStateFromStoresObject(items4, () => {
    const selectableChannelIds = isHomeDrawerChannelInChannelList.getSelectableChannelIds(guild.id);
    const found = selectableChannelIds.filter((id) => {
      const basicChannel = outer1_7.getBasicChannel(id);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        const tmp4 = callback(basicChannel);
        let tmp5 = !tmp4;
        if (!tmp4) {
          let tmp7 = outer1_6(basicChannel.type);
          if (tmp7) {
            tmp7 = !outer1_5.hasJoined(id);
          }
          let tmp9 = !tmp7;
          if (!tmp7) {
            let tmp11 = callback2(basicChannel);
            if (tmp11) {
              let hasUnreadResult = outer1_11.hasUnread(id);
              if (hasUnreadResult) {
                hasUnreadResult = outer1_13.resolveUnreadSetting(basicChannel) === outer1_17.ALL_MESSAGES;
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
      channel = isHomeDrawerChannelMuted.getChannel(found[0]);
    }
    const obj = { unreadChannel: channel, unreadChannelName: null, unreadChannelCount: null };
    let channelName;
    if (null != channel) {
      channelName = guild(onActiveHookChange[24]).computeChannelName(channel, mentionChannelCount, mentionChannel);
      const obj2 = guild(onActiveHookChange[24]);
    }
    obj[1] = channelName;
    obj[2] = found.length;
    return obj;
  }, items5);
  unreadChannel = stateFromStoresObject.unreadChannel;
  unreadChannelName = stateFromStoresObject.unreadChannelName;
  unreadChannelCount = stateFromStoresObject.unreadChannelCount;
  const obj6 = guild(onActiveHookChange[16]);
  const items6 = [unreadChannel, isHomeDrawerChannelMuted, mentionChannelCount, mentionChannel, stateFromStores1];
  const items7 = [guild.id, isHomeDrawerChannelInChannelList];
  const stateFromStoresObject1 = guild(onActiveHookChange[16]).useStateFromStoresObject(items6, () => {
    const tmp = unreadChannel.getMutableGuildStates()[guild.id];
    guild = tmp;
    if (null == tmp) {
      return { mentionChannel: "sa", mentionChannelName: "isArray", mentionChannelCount: null };
    } else {
      const keys = disableSubtitle(onActiveHookChange[25]).keys(tmp.mentionCounts);
      const found = keys.filter((id) => {
        if (tmp.mentionCounts[id].count <= 0) {
          return false;
        } else {
          const basicChannel = isHomeDrawerChannelMuted.getBasicChannel(id);
          let tmp4 = null != basicChannel;
          if (tmp4) {
            let tmp6 = memo(basicChannel.type);
            if (tmp6) {
              tmp6 = !stateFromStores1.hasJoined(id);
            }
            let tmp8 = !tmp6;
            if (!tmp6) {
              tmp8 = outer1_8(basicChannel);
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
      const obj = { mentionChannel: null, mentionChannelName: null, mentionChannelCount: null };
      obj[0] = channel;
      let channelName;
      if (null != channel) {
        channelName = guild(onActiveHookChange[24]).computeChannelName(channel, mentionChannelCount, mentionChannel);
        const obj2 = guild(onActiveHookChange[24]);
      }
      obj[1] = channelName;
      obj[2] = found.length;
      return obj;
    }
  }, items7);
  mentionChannel = stateFromStoresObject1.mentionChannel;
  mentionChannelName = stateFromStoresObject1.mentionChannelName;
  mentionChannelCount = stateFromStoresObject1.mentionChannelCount;
  const obj7 = guild(onActiveHookChange[16]);
  const voiceUsers = guild(onActiveHookChange[26]).useVoiceUsers(guild);
  voiceUsers1 = voiceUsers.voiceUsers;
  streamingUser = voiceUsers.streamingUser;
  const obj8 = guild(onActiveHookChange[26]);
  const homeDrawerGuildTyping = guild(onActiveHookChange[27]).useHomeDrawerGuildTyping(guild.id);
  typingChannelId = homeDrawerGuildTyping.typingChannelId;
  typingChannelName = homeDrawerGuildTyping.typingChannelName;
  const obj9 = guild(onActiveHookChange[27]);
  const items8 = [isHomeDrawerChannelMuted];
  const items9 = [typingChannelId];
  stateFromStores2 = guild(onActiveHookChange[16]).useStateFromStores(items8, () => isHomeDrawerChannelMuted.getChannel(typingChannelId), items9);
  let tmp16 = typingChannelId;
  const obj10 = guild(onActiveHookChange[16]);
  if (typingChannelId == null) {
    tmp16 = voiceUsers1;
  }
  obj = { channelId: tmp16, guildId: guild.id, typingUserIds: homeDrawerGuildTyping.typingUserIds };
  const tmp15Result = disableSubtitle(onActiveHookChange[28])(obj);
  c20 = tmp15Result;
  let tmp18 = memo.isMuted || disableSubtitle;
  if (!tmp18) {
    tmp18 = 0 === voiceUsers1.length;
  }
  callback2 = tmp19;
  const items10 = [!tmp18, streamingUser, disableSubtitle, mentionChannelName, mentionChannelCount, typingChannelId, tmp15Result, memo.isMuted, stateFromStores, unreadChannelName, unreadChannelCount];
  memo2 = obj3.useMemo(() => {
    if (c21) {
      if (null != streamingUser) {
        let VOICE = _undefined2.STREAMING;
      } else {
        VOICE = _undefined2.VOICE;
      }
    } else {
      if (disableSubtitle) {
        let TYPING = _undefined2.NONE;
      } else {
        if (null != mentionChannelName) {
          if (mentionChannelCount > 0) {
            TYPING = _undefined2.MENTION;
          }
        }
        if (null != typingChannelId) {
          if (null != _undefined2) {
            if (!memo.isMuted) {
              TYPING = _undefined2.TYPING;
            }
          }
        }
        if (stateFromStores) {
          if (null != unreadChannelName) {
            const UNREAD = _undefined2.UNREAD;
          }
        }
        const NONE = _undefined2.NONE;
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
    if (_undefined2.STREAMING === memo2) {
      let obj = { guildId: null, streamingUser: null };
      obj[0] = guild.id;
      obj[1] = streamingUser;
      return typingChannelName(disableSubtitle(onActiveHookChange[29]), obj);
    } else if (tmp2.VOICE === tmp) {
      obj = { guildId: null, voiceUsers: null };
      obj[0] = guild.id;
      obj[1] = voiceUsers1;
      return typingChannelName(disableSubtitle(onActiveHookChange[30]), obj);
    } else if (tmp2.MENTION === tmp) {
      let tmp20 = null;
      if (null != mentionChannelName) {
        const obj1 = { guild: null, channel: null, channelName: null, count: null };
        obj1[0] = guild;
        obj1[1] = mentionChannel;
        obj1[2] = tmp19;
        obj1[3] = mentionChannelCount;
        tmp20 = typingChannelName(disableSubtitle(onActiveHookChange[31]), obj1);
      }
      return tmp20;
    } else if (tmp2.TYPING === tmp) {
      const obj2 = { guild: null, channel: null, channelName: null, text: null };
      obj2[0] = guild;
      obj2[1] = stateFromStores2;
      obj2[2] = typingChannelName;
      obj2[3] = _undefined2;
      return typingChannelName(disableSubtitle(onActiveHookChange[32]), obj2);
    } else if (tmp2.UNREAD === tmp) {
      let tmp5 = null;
      if (null != unreadChannelName) {
        obj = { guild: null, channel: null, channelName: null, count: null };
        obj[0] = guild;
        obj[1] = unreadChannel;
        obj[2] = tmp4;
        obj[3] = unreadChannelCount;
        tmp5 = typingChannelName(disableSubtitle(onActiveHookChange[33]), obj);
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
        obj1 = { voiceUsers: null, streamingChannelId: null, streamingUser: null, guildId: null };
        obj1[0] = voiceUsers1;
        obj1[1] = voiceUsers.streamingChannelId;
        obj1[2] = streamingUser;
        obj1[3] = guild.id;
        tmp23Result = tmp23(tmp2(tmp3[26]).GuildVoiceState, obj1);
      }
    }
  }
  obj[2] = tmp23Result;
  return typingChannelName(guild(onActiveHookChange[34]).HomeDrawerSharedItem, obj);
}
({ EMPTY_STRING_SNOWFLAKE_ID: closure_15, NOOP: closure_16 } = ME);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let obj = { STREAMING: "streaming", VOICE: "voice", MENTION: "mention", TYPING: "typing", UNREAD: "unread", NONE: "none" };
let closure_21 = createCacheKey.createStyles({ guildName: { flexDirection: "row", alignItems: "center", gap: 4 }, guildNameText: { flexShrink: 1 } });
const result = require("storeThread").fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildRow.tsx");

export default function HomeDrawerGuildRow(guildId) {
  let disableSubtitle;
  let onActiveHookChange;
  guildId = guildId.guildId;
  ({ disableSubtitle, onActiveHookChange } = guildId);
  let obj = guildId(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getGuild(guildId));
  const MobileHomeDrawerExperiment = guildId(4158).MobileHomeDrawerExperiment;
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (MobileHomeDrawerExperiment.useConfig({ location: "guild-row" }).enableHome) {
      tmp3 = null;
      if (!tmp2) {
        obj = { guild: null, disableSubtitle: null, onActiveHookChange: null };
        obj[0] = stateFromStores;
        obj[1] = disableSubtitle;
        obj[2] = onActiveHookChange;
        tmp3 = callback(GuildRowWrapper, obj);
      }
    }
  }
  return tmp3;
};
export const HomeDrawerActiveHook = obj;