// === Module 17494: handleChannelDelete ===

// Module 17494 (handleChannelDelete)
import initializeDefault from "initialize" /* 7118 */;
import withErrorHandlingDefault from "withErrorHandling" /* 7898 */;
import closure_2 from "fetchFingerprint" /* 502 */;
import closure_3 from "ensureGuildLoaded" /* 1957 */;

initializeDefault;
class ThreadManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { CHANNEL_DELETE: applyArgumentsResult.handleChannelDelete, MESSAGE_CREATE: applyArgumentsResult.handleMessageCreate, GUILD_DELETE: applyArgumentsResult.handleGuildDelete };
    return applyArgumentsResult;
  }
}
const prototype = ThreadManager.prototype;
prototype["handleChannelDelete"] = function handleChannelDelete(channel) {
  channel = channel.channel;
  let allThreadsForParent;
  if (null != channel.guild_id) {
    allThreadsForParent = store.getAllThreadsForParent(channel.id);
    if (allThreadsForParent.length > 0) {
      const Emitter = allThreadsForParent(504).Emitter;
      Emitter.batched(() => {
        for (const item10005 of allThreadsForParent) {
          let tmp = allThreadsForParent;
          let tmp2 = closure_1_1;
          let obj = allThreadsForParent(closure_1_1[4]);
          obj = { type: "THREAD_DELETE", channel: null };
          obj[1] = item10005;
          let dispatchResult = obj.dispatch(obj);
          continue;
        }
      });
    }
  }
};
prototype["handleMessageCreate"] = function handleMessageCreate(channelId) {
  const channel = store.getChannel(channelId.channelId);
  const author = channelId.message.author;
  let id;
  if (author != null) {
    id = author.id;
  }
  if (id === id.getId()) {
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
        withErrorHandlingDefault.resort(channel.parent_id);
        const obj3 = withErrorHandlingDefault;
      }
    }
  }
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  guild = guild.guild;
  let allThreadsForGuild;
  if (!guild.unavailable) {
    allThreadsForGuild = store.getAllThreadsForGuild(guild.id);
    if (0 !== allThreadsForGuild.length) {
      const Emitter = allThreadsForGuild(504).Emitter;
      Emitter.batched(() => {
        for (const item10005 of allThreadsForGuild) {
          let tmp = allThreadsForGuild;
          let tmp2 = closure_1_1;
          let obj = allThreadsForGuild(closure_1_1[4]);
          obj = { type: "THREAD_DELETE", channel: null };
          obj[1] = item10005;
          let dispatchResult = obj.dispatch(obj);
          continue;
        }
      });
    }
  }
};
const threadManager = new ThreadManager();
const result = require("set").fileFinishedImporting("modules/threads/ThreadManager.tsx");

export default threadManager;