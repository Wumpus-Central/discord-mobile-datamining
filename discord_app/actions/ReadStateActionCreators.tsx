// discord_app/actions/ReadStateActionCreators.tsx
import DISCORD_EPOCHDefault from "../utils/SnowflakeUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import rebuild from "../modules/threads/ActiveJoinedThreadsStore.tsx";
import { isReadableType } from "../records/ChannelRecord.tsx";
import ensureGuildLoaded from "../stores/ChannelStore.tsx";
import setIndex from "../stores/GuildCategoryStore.tsx";
import mergeGuildAvatar from "../stores/UserStore.tsx";
import { CURRENT_APP_CONTEXT } from "../Constants.tsx";

function ack(channelId, location, arg2, arg3, messageId) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = arg3;
  if (arg3 === undefined) {
    flag2 = false;
  }
  const obj = { type: "CHANNEL_ACK", channelId, messageId, immediate: flag, force: flag2, context: CURRENT_APP_CONTEXT, location };
  obj.dispatch(obj);
}
function ackCategory(id, arg1, arg2, arg3) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = arg3;
  if (arg3 === undefined) {
    flag2 = false;
  }
  let channel;
  let mapped;
  channel = channel.getChannel(id);
  if (null != channel) {
    if (null != channel.guild_id) {
      categories = categories.getCategories(channel.guild_id);
      if (null != categories[id]) {
        const found = categories[id].filter((item, index) => callback(item.channel.type));
        mapped = found.map((item, index) => item.channel.id);
        const item = found.forEach((item, index) => {
          channel = item.channel;
          let guild_id = channel.guild_id;
          if (guild_id == null) {
            guild_id = channel.guild_id;
          }
          const activeJoinedThreadsForParent = closure_1_2.getActiveJoinedThreadsForParent(guild_id, channel.id);
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
const result = require("obj132").fileFinishedImporting("actions/ReadStateActionCreators.tsx");

export { ack };
export { ackCategory };
export const ackChannel = function ackChannel(channel, arg1) {
  if (channel.isCategory()) {
    ackCategory(channel.id, arg1, true, true);
  } else {
    const id = channel.id;
    if (channel.isForumLikeChannel()) {
      const _Date = Date;
      const tmpResult = dispatcherDefault;
      let obj = { type: "CHANNEL_ACK", channelId: null, messageId: null, immediate: null, force: null, context: null, location: null };
      obj[1] = id;
      obj[2] = tmpResult.fromTimestamp(Date.now());
      obj[3] = true;
      obj[4] = true;
      obj[5] = CURRENT_APP_CONTEXT;
      obj[6] = arg1;
      tmpResult.dispatch(obj);
      const fromTimestampResult = tmpResult.fromTimestamp(Date.now());
    } else {
      obj = { type: "CHANNEL_ACK", channelId: null, messageId: "y", immediate: 72, force: 180, context: null, location: null };
      obj[1] = id;
      obj[3] = true;
      obj[4] = true;
      obj[5] = CURRENT_APP_CONTEXT;
      obj[6] = arg1;
      dispatcherDefault.dispatch(obj);
      const tmpResult1 = dispatcherDefault;
    }
  }
};
export const bulkAck = function bulkAck(mapped, onFinished) {
  const obj = { type: "BULK_ACK", channels: mapped, context: CURRENT_APP_CONTEXT, onFinished };
  obj.dispatch(obj);
};
export const localAck = function localAck(channelId) {
  const obj = { type: "CHANNEL_LOCAL_ACK", channelId };
  obj.dispatch(obj);
};
export const enableAutomaticAck = function enableAutomaticAck(channelId, windowId) {
  const obj = { type: "ENABLE_AUTOMATIC_ACK", channelId, windowId };
  obj.dispatch(obj);
};
export const disableAutomaticAck = function disableAutomaticAck(channelId, windowId) {
  const obj = { type: "DISABLE_AUTOMATIC_ACK", channelId, windowId };
  obj.dispatch(obj);
};
export const ackGuildFeature = function ackGuildFeature(closure_0, GUILD_EVENT, closure_1_11) {
  const obj = { type: "GUILD_FEATURE_ACK", id: closure_0, ackType: GUILD_EVENT, ackedId: unpackModuleId, local: false };
  obj.dispatch(obj);
};
export const ackUserFeature = function ackUserFeature(NOTIFICATION_CENTER) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null != id) {
    const obj = { type: "USER_NON_CHANNEL_ACK", ackType: null, ackedId: null, local: false };
    obj[1] = NOTIFICATION_CENTER;
    obj[2] = arg1;
    obj.dispatch(obj);
  }
};
export const clearOldestUnreadMessageId = function clearOldestUnreadMessageId(current) {
  const obj = { type: "CLEAR_OLDEST_UNREAD_MESSAGE", channelId: current };
  obj.dispatch(obj);
};