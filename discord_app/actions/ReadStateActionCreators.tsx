// discord_app/actions/ReadStateActionCreators.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import ActiveJoinedThreadsStore from "../modules/threads/ActiveJoinedThreadsStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildCategoryStore from "../stores/GuildCategoryStore.tsx";
import UserStore from "../stores/UserStore.tsx";

function ack(channelId, location, arg2, arg3) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = arg3;
  if (arg3 === undefined) {
    flag2 = false;
  }
  DispatcherDefault.dispatch({
    type: "CHANNEL_ACK",
    channelId,
    messageId,
    immediate: flag,
    force: flag2,
    context: CURRENT_APP_CONTEXT,
    location,
  });
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
        const found = categories[id].filter((channel) => isReadableType(channel.channel.type));
        mapped = found.map((channel) => channel.channel.id);
        const item = found.forEach((channel) => {
          channel = channel.channel;
          let guild_id = channel.guild_id;
          if (guild_id == null) {
            guild_id = channel.guild_id;
          }
          const activeJoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedThreadsForParent(
            guild_id,
            channel.id,
          );
          for (const key10011 in activeJoinedThreadsForParent) {
            let arr = mapped.push(key10011);
            continue;
          }
        });
        for (const item10022 of mapped) {
          let tmp11 = ack(item10022, arg1, flag, flag2);
          continue;
        }
      }
    }
  }
}
const isReadableType = fn(2045).isReadableType;
const CURRENT_APP_CONTEXT = fn(1074).CURRENT_APP_CONTEXT;
const size = fn(2);
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
      const fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(Date.now());
      const obj = {
        type: "CHANNEL_ACK",
        channelId: id,
        messageId: fromTimestampResult,
        immediate: true,
        force: true,
        context: CURRENT_APP_CONTEXT,
        location,
      };
      DispatcherDefault.dispatch(obj);
      const tmpResult3 = DispatcherDefault;
    } else {
      const obj2 = {
        type: "CHANNEL_ACK",
        channelId: id,
        messageId: "y",
        immediate: true,
        force: true,
        context: CURRENT_APP_CONTEXT,
        location,
      };
      DispatcherDefault.dispatch(obj2);
      const tmpResult4 = DispatcherDefault;
    }
  }
};
export const bulkAck = function bulkAck(mapped, onFinished) {
  DispatcherDefault.dispatch({ type: "BULK_ACK", channels: mapped, context: CURRENT_APP_CONTEXT, onFinished });
};
export const localAck = function localAck(channelId) {
  DispatcherDefault.dispatch({ type: "CHANNEL_LOCAL_ACK", channelId });
};
export const enableAutomaticAck = function enableAutomaticAck(channelId, windowId) {
  DispatcherDefault.dispatch({ type: "ENABLE_AUTOMATIC_ACK", channelId, windowId });
};
export const registerVisibleInlineChannel = function registerVisibleInlineChannel(channelId, windowId) {
  DispatcherDefault.dispatch({ type: "REGISTER_VISIBLE_INLINE_CHANNEL", channelId, windowId });
};
export const unregisterVisibleInlineChannel = function unregisterVisibleInlineChannel(channelId, windowId) {
  DispatcherDefault.dispatch({ type: "UNREGISTER_VISIBLE_INLINE_CHANNEL", channelId, windowId });
};
export const disableAutomaticAck = function disableAutomaticAck(channelId, windowId) {
  DispatcherDefault.dispatch({ type: "DISABLE_AUTOMATIC_ACK", channelId, windowId });
};
export const ackGuildFeature = function ackGuildFeature(guildId, GUILD_EVENT, tmp12Result) {
  DispatcherDefault.dispatch({
    type: "GUILD_FEATURE_ACK",
    id: guildId,
    ackType: GUILD_EVENT,
    ackedId: tmp12Result,
    local: false,
  });
};
export const ackUserFeature = function ackUserFeature(NOTIFICATION_CENTER, ackedId) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null != id) {
    const obj2 = { type: "USER_NON_CHANNEL_ACK", ackType: NOTIFICATION_CENTER, ackedId, local: false };
    DispatcherDefault.dispatch(obj2);
  }
};
export const clearOldestUnreadMessageId = function clearOldestUnreadMessageId(current) {
  DispatcherDefault.dispatch({ type: "CLEAR_OLDEST_UNREAD_MESSAGE", channelId: current });
};
