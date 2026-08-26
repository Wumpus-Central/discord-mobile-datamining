// discord_app/actions/ReadStateActionCreators.tsx
import dispatcherDefault from "../Dispatcher.tsx";
import closure_2 from "../modules/threads/ActiveJoinedThreadsStore.tsx";
import { isReadableType } from "../records/ChannelRecord.tsx";
import closure_4 from "../stores/ChannelStore.tsx";
import closure_5 from "../stores/GuildCategoryStore.tsx";
import closure_6 from "../stores/UserStore.tsx";
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
  let obj = dispatcherDefault;
  obj = { type: "CHANNEL_ACK", channelId, messageId, immediate: flag, force: flag2, context: CURRENT_APP_CONTEXT, location };
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
        const found = categories[id].filter((channel) => callback(channel.channel.type));
        mapped = found.map((channel) => channel.channel.id);
        const item = found.forEach((channel) => {
          channel = channel.channel;
          let guild_id = channel.guild_id;
          if (guild_id == null) {
            guild_id = channel.guild_id;
          }
          const activeJoinedThreadsForParent = closure_1_2.getActiveJoinedThreadsForParent(guild_id, channel.id);
          for (const key10011 in activeJoinedThreadsForParent) {
            let tmp3 = key10011;
            let tmp4 = mapped;
            let arr = mapped.push(key10011);
            continue;
          }
        });
        for (const item10022 of mapped) {
          let tmp6 = ack;
          let tmp7 = item10022;
          let tmp8 = arg1;
          let tmp9 = flag;
          let tmp10 = flag2;
          let tmp11 = ack(item10022, arg1, flag, flag2);
          continue;
        }
        let arr = categories[id];
      }
    }
  }
}
const result = require("set").fileFinishedImporting("actions/ReadStateActionCreators.tsx");

export { ack };
export { ackCategory };
export const ackChannel = function ackChannel(channel, arg1) {
  if (channel.isCategory()) {
    ackCategory(channel.id, arg1, true, true);
  } else {
    const id = channel.id;
    if (channel.isForumLikeChannel()) {
      let tmpResult = tmp(11);
      const _Date = Date;
      tmpResult = tmp(709);
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
      obj = { type: "CHANNEL_ACK", channelId: null, messageId: "y", immediate: "md", force: null, context: null, location: 80.672 };
      obj[1] = id;
      obj[3] = true;
      obj[4] = true;
      obj[5] = CURRENT_APP_CONTEXT;
      obj[6] = arg1;
      tmp(709).dispatch(obj);
      const tmpResult1 = tmp(709);
    }
  }
};
export const bulkAck = function bulkAck(mapped, onFinished) {
  let obj = dispatcherDefault;
  obj = { type: "BULK_ACK", channels: mapped, context: CURRENT_APP_CONTEXT, onFinished };
  obj.dispatch(obj);
};
export const localAck = function localAck(channelId) {
  let obj = dispatcherDefault;
  obj = { type: "CHANNEL_LOCAL_ACK", channelId };
  obj.dispatch(obj);
};
export const enableAutomaticAck = function enableAutomaticAck(channelId, windowId) {
  let obj = dispatcherDefault;
  obj = { type: "ENABLE_AUTOMATIC_ACK", channelId, windowId };
  obj.dispatch(obj);
};
export const registerVisibleInlineChannel = function registerVisibleInlineChannel(channelId, windowId) {
  let obj = dispatcherDefault;
  obj = { type: "REGISTER_VISIBLE_INLINE_CHANNEL", channelId, windowId };
  obj.dispatch(obj);
};
export const unregisterVisibleInlineChannel = function unregisterVisibleInlineChannel(channelId, windowId) {
  let obj = dispatcherDefault;
  obj = { type: "UNREGISTER_VISIBLE_INLINE_CHANNEL", channelId, windowId };
  obj.dispatch(obj);
};
export const disableAutomaticAck = function disableAutomaticAck(channelId, windowId) {
  let obj = dispatcherDefault;
  obj = { type: "DISABLE_AUTOMATIC_ACK", channelId, windowId };
  obj.dispatch(obj);
};
export const ackGuildFeature = function ackGuildFeature(closure_0, GUILD_EVENT, closure_1_11) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_FEATURE_ACK", id: closure_0, ackType: GUILD_EVENT, ackedId: closure_1_11, local: false };
  obj.dispatch(obj);
};
export const ackUserFeature = function ackUserFeature(NOTIFICATION_CENTER) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null != id) {
    let obj = dispatcherDefault;
    obj = { type: "USER_NON_CHANNEL_ACK", ackType: null, ackedId: null, local: false };
    obj[1] = NOTIFICATION_CENTER;
    obj[2] = arg1;
    obj.dispatch(obj);
  }
};
export const clearOldestUnreadMessageId = function clearOldestUnreadMessageId(current) {
  let obj = dispatcherDefault;
  obj = { type: "CLEAR_OLDEST_UNREAD_MESSAGE", channelId: current };
  obj.dispatch(obj);
};