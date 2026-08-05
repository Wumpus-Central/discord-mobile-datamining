// discord_app/modules/forums/ForumPostUnreadCountStore.tsx
import handleThreadCreateOrUpdate from "handleThreadCreateOrUpdate";
import ensureGuildLoaded from "ensureGuildLoaded";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { Store } from "initialize";
import set from "generateOldThreadCutoff";

let closure_5 = {};
let set = new Set();
class ForumPostUnreadCountStore extends Store {
}
const prototype = ForumPostUnreadCountStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(handleThreadCreateOrUpdate, ensureGuildLoaded, generateOldThreadCutoff);
};
prototype["getCount"] = function getCount(arg0) {
  return dependencyMap[arg0];
};
prototype["getThreadIdsMissingCounts"] = function getThreadIdsMissingCounts(guild_id, threadIds) {
  require("../../../_runtime/metro/00038__.js")(handleThreadCreateOrUpdate.hasLoaded(guild_id), "must wait for THREAD_LIST_SYNC before calling this");
  return threadIds.filter((arg0) => {
    let tmp = !(arg0 in closure_5);
    if (tmp) {
      tmp = !set.has(arg0);
    }
    return tmp;
  });
};
ForumPostUnreadCountStore.displayName = "ForumPostUnreadCountStore";
const forumPostUnreadCountStore = new ForumPostUnreadCountStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_5 = {};
    const set = new Set();
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    let isNewlyCreated = channel.isNewlyCreated;
    if (isNewlyCreated) {
      const hasLoadedResult = handleThreadCreateOrUpdate.hasLoaded(channel.guild_id);
      if (hasLoadedResult) {
        closure_5[channel.id] = 0;
      }
      isNewlyCreated = hasLoadedResult;
    }
    return isNewlyCreated;
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    let channelId;
    let optimistic;
    ({ channelId, optimistic } = isPushNotification);
    let tmp = !optimistic;
    if (!optimistic) {
      tmp = !isPushNotification.isPushNotification;
    }
    if (tmp) {
      if (channelId in dependencyMap) {
        dependencyMap[channelId] = +dependencyMap[channelId] + 1;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  FORUM_UNREADS: function handleForumUnreads(threads) {
    threads = threads.threads;
    const item = threads.forEach((count) => {
      if (null != count.count) {
        closure_5[count.threadId] = count.count;
      }
    });
  },
  MESSAGE_ACK: function handleMessageAck(channelId) {
    channelId = channelId.channelId;
    if (!(channelId in closure_5)) {
      const channel = store.getChannel(channelId);
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      const channel1 = store.getChannel(parent_id);
      let isForumLikeChannelResult;
      if (channel1 != null) {
        isForumLikeChannelResult = channel1.isForumLikeChannel();
      }
      if (!isForumLikeChannelResult) {
        return false;
      }
    }
    closure_5[channelId] = unreadCount.getUnreadCount(channelId);
  },
  REQUEST_FORUM_UNREADS: function handleRequestForumUnreads(threads) {
    threads = threads.threads;
    const item = threads.forEach((threadId) => set.add(threadId.threadId));
  }
});
const result = set.fileFinishedImporting("modules/forums/ForumPostUnreadCountStore.tsx");

export default forumPostUnreadCountStore;