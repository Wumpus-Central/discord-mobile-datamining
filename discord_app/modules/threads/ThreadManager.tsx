// discord_app/modules/threads/ThreadManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import ForumActionCreatorsDefault from "../forums/ForumActionCreators.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

class ThreadManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = {
      CHANNEL_DELETE: applyArgumentsResult.handleChannelDelete,
      MESSAGE_CREATE: applyArgumentsResult.handleMessageCreate,
      GUILD_DELETE: applyArgumentsResult.handleGuildDelete,
    };
    return applyArgumentsResult;
  }
}
const prototype = ThreadManager.prototype;
prototype["handleChannelDelete"] = function handleChannelDelete(channel) {
  channel = channel.channel;
  let allThreadsForParent;
  if (null != channel.guild_id) {
    allThreadsForParent = ChannelStore.getAllThreadsForParent(channel.id);
    if (allThreadsForParent.length > 0) {
      const Emitter = allThreadsForParent(504).Emitter;
      Emitter.batched(() => {
        for (const item10005 of allThreadsForParent) {
          let obj = DispatcherDefault;
          obj = { type: "THREAD_DELETE", channel: item10005 };
          let dispatchResult = obj.dispatch(obj);
          continue;
        }
      });
    }
  }
};
prototype["handleMessageCreate"] = function handleMessageCreate(channelId) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  const author = channelId.message.author;
  let id;
  if (author != null) {
    id = author.id;
  }
  if (id === AuthenticationStore.getId()) {
    let isActiveThreadResult;
    if (channel != null) {
      isActiveThreadResult = channel.isActiveThread();
    }
    if (isActiveThreadResult) {
      const threadMetadata = channel.threadMetadata;
      let num;
      if (threadMetadata != null) {
        num = threadMetadata.archiveTimestamp;
      }
      if (num == null) {
        num = 0;
      }
      const date = new Date(num);
      const _Date = Date;
      const time = date.getTime();
      if (Date.now() - time < 5000) {
        ForumActionCreatorsDefault.resort(channel.parent_id);
      }
    }
  }
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  guild = guild.guild;
  let allThreadsForGuild;
  if (!guild.unavailable) {
    allThreadsForGuild = ChannelStore.getAllThreadsForGuild(guild.id);
    if (0 !== allThreadsForGuild.length) {
      const Emitter = allThreadsForGuild(504).Emitter;
      Emitter.batched(() => {
        for (const item10005 of allThreadsForGuild) {
          let obj = DispatcherDefault;
          obj = { type: "THREAD_DELETE", channel: item10005 };
          let dispatchResult = obj.dispatch(obj);
          continue;
        }
      });
    }
  }
};
const threadManager = new ThreadManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/ThreadManager.tsx");

export default threadManager;
