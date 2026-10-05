// discord_app/modules/forums/ForumPostUnreadCountStore.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ActiveThreadsStore from "../threads/ActiveThreadsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_5;

const hasOwnProperty = {};
let set = new Set();
const Store = get_initializedDefault.Store;
class ForumPostUnreadCountStore extends Store {
  initialize() {
    this.waitFor(ActiveThreadsStore, ChannelStore, ReadStateStore);
  }
  getCount(arg0) {
    return closure_5[arg0];
  }
  getThreadIdsMissingCounts(guild_id, threadIds) {
    let tmp = _modDef38;
    tmp(ActiveThreadsStore.hasLoaded(guild_id), "must wait for THREAD_LIST_SYNC before calling this");
    return threadIds.filter((item) => {
      const tmp = !(item in closure_1_5) && !set.has(item);
      return tmp;
    });
  }
}
const prototype = ForumPostUnreadCountStore.prototype;
ForumPostUnreadCountStore.displayName = "ForumPostUnreadCountStore";
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
    set = new Set();
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    let isNewlyCreated = channel.isNewlyCreated;
    if (isNewlyCreated) {
      const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
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
    let tmp = !optimistic && !isPushNotification.isPushNotification;
    if (tmp) {
      if (channelId in closure_5) {
        closure_5[channelId] = +closure_5[channelId] + 1;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  FORUM_UNREADS: function handleForumUnreads(threads) {
    threads = threads.threads;
    const item = threads.forEach((count) => {
      if (null != count.count) {
        closure_1_5[count.threadId] = count.count;
      }
    });
  },
  MESSAGE_ACK: function handleMessageAck(channelId) {
    channelId = channelId.channelId;
    if (!(channelId in closure_5)) {
      const channel = ChannelStore.getChannel(channelId);
      let parent_id;
      const getChannel = ChannelStore.getChannel;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      const channel1 = getChannel(parent_id);
      let isForumLikeChannelResult;
      if (channel1 != null) {
        isForumLikeChannelResult = channel1.isForumLikeChannel();
      }
      if (!isForumLikeChannelResult) {
        return false;
      }
    }
    closure_5[channelId] = ReadStateStore.getUnreadCount(channelId);
  },
  REQUEST_FORUM_UNREADS: function handleRequestForumUnreads(threads) {
    threads = threads.threads;
    const item = threads.forEach((threadId) => set.add(threadId.threadId));
  },
};
const forumPostUnreadCountStore = new ForumPostUnreadCountStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/forums/ForumPostUnreadCountStore.tsx");

export default forumPostUnreadCountStore;
