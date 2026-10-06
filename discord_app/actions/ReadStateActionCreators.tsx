// === Module 6612: ReadStateActionCreators ===

// Module 6612 (ReadStateActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5698 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6613 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

function ack(channelId, location, arg2, arg3) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = arg3;
  if (arg3 === undefined) {
    flag2 = false;
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_ACK", channelId, messageId, immediate: flag, force: flag2, context: CURRENT_APP_CONTEXT, location };
  obj.dispatch(obj2);
}
function ackCategory(id, location, arg2, arg3) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = arg3;
  if (arg3 === undefined) {
    flag2 = false;
  }
  let mapped;
  let channel = ChannelStore.getChannel(id);
  if (null != channel) {
    if (null != channel.guild_id) {
      const categories = GuildCategoryStore.getCategories(channel.guild_id);
      if (null != categories[id]) {
        let arr = categories[id];
        const found = arr.filter((channel) => isReadableType(channel.channel.type));
        mapped = found.map((channel) => channel.channel.id);
        const item = found.forEach((channel) => {
          channel = channel.channel;
          let guild_id = channel.guild_id;
          if (guild_id == null) {
            guild_id = channel.guild_id;
          }
          const activeJoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedThreadsForParent(guild_id, channel.id);
          for (const key10011 in activeJoinedThreadsForParent) {
            let arr = mapped.push(key10011);
            continue;
          }
        });
        for (const item10022 of mapped) {
          let tmp11 = ack(item10022, location, flag, flag2);
          continue;
        }
      }
    }
  }
}
const isReadableType = ChannelRecord.isReadableType;
const CURRENT_APP_CONTEXT = Constants.CURRENT_APP_CONTEXT;
const result = size.fileFinishedImporting("actions/ReadStateActionCreators.tsx");

export { ack };
export { ackCategory };
export const ackChannel = function ackChannel(channel, location) {
  if (channel.isCategory()) {
    ackCategory(channel.id, location, true, true);
  } else {
    const id = channel.id;
    if (channel.isForumLikeChannel()) {
      const _Date = Date;
      const tmpResult = SnowflakeUtilsDefault;
      const obj = { type: "CHANNEL_ACK", channelId: id, messageId: tmpResult.fromTimestamp(Date.now()), immediate: true, force: true, context: CURRENT_APP_CONTEXT, location };
      const tmpResult3 = DispatcherDefault;
      tmpResult3.dispatch(obj);
    } else {
      const obj2 = { type: "CHANNEL_ACK", channelId: id, messageId: "y", immediate: true, force: true, context: CURRENT_APP_CONTEXT, location };
      const tmpResult4 = DispatcherDefault;
      tmpResult4.dispatch(obj2);
    }
  }
};
export const bulkAck = function bulkAck(mapped, onFinished) {
  const obj = DispatcherDefault;
  const obj2 = { type: "BULK_ACK", channels: mapped, context: CURRENT_APP_CONTEXT, onFinished };
  obj.dispatch(obj2);
};
export const localAck = function localAck(channelId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_LOCAL_ACK", channelId };
  obj.dispatch(obj2);
};
export const enableAutomaticAck = function enableAutomaticAck(channelId, windowId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ENABLE_AUTOMATIC_ACK", channelId, windowId };
  obj.dispatch(obj2);
};
export const registerVisibleInlineChannel = function registerVisibleInlineChannel(channelId, windowId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "REGISTER_VISIBLE_INLINE_CHANNEL", channelId, windowId };
  obj.dispatch(obj2);
};
export const unregisterVisibleInlineChannel = function unregisterVisibleInlineChannel(channelId, windowId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UNREGISTER_VISIBLE_INLINE_CHANNEL", channelId, windowId };
  obj.dispatch(obj2);
};
export const disableAutomaticAck = function disableAutomaticAck(channelId, windowId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DISABLE_AUTOMATIC_ACK", channelId, windowId };
  obj.dispatch(obj2);
};
export const ackGuildFeature = function ackGuildFeature(guildId, GUILD_EVENT, tmp13Result) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_FEATURE_ACK", id: guildId, ackType: GUILD_EVENT, ackedId: tmp13Result, local: false };
  obj.dispatch(obj2);
};
export const ackUserFeature = function ackUserFeature(NOTIFICATION_CENTER, ackedId) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null != id) {
    const obj2 = { type: "USER_NON_CHANNEL_ACK", ackType: NOTIFICATION_CENTER, ackedId, local: false };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};
export const clearOldestUnreadMessageId = function clearOldestUnreadMessageId(current) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CLEAR_OLDEST_UNREAD_MESSAGE", channelId: current };
  obj.dispatch(obj2);
};