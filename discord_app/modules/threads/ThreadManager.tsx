import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import "initialize";

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
      const Emitter = allThreadsForParent(589).Emitter;
      Emitter.batched(() => {
        for (const item10005 of allThreadsForParent) {
          let tmp = allThreadsForParent;
          let tmp2 = outer1_1;
          let obj = allThreadsForParent(outer1_1[4]);
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
        importDefault(9144).resort(channel.parent_id);
        const obj3 = importDefault(9144);
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
      const Emitter = allThreadsForGuild(589).Emitter;
      Emitter.batched(() => {
        for (const item10005 of allThreadsForGuild) {
          let tmp = allThreadsForGuild;
          let tmp2 = outer1_1;
          let obj = allThreadsForGuild(outer1_1[4]);
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
const result = require("initialize").fileFinishedImporting("modules/threads/ThreadManager.tsx");

export default threadManager;