// discord_app/modules/message_previews/MessagePreviewStore.tsx
import timestampDefault from "../debug/Logger.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../stores/ChannelStore.tsx";
import closure_5 from "../../stores/MessageStore.tsx";

let object = arg1;
let c6 = -Infinity;
let closure_7 = new timestampDefault("MessagePreviewStore");
const Store = initializeDefault.Store;
class MessagePreviewStore extends Store {
  constructor() {
    closure_0 = undefined;
    obj = {
      CONNECTION_OPEN(arg0) {
            return obj.handleConnectionOpen(arg0);
          },
      GUILD_CREATE(arg0) {
            return obj.handleGuildCreate(arg0);
          },
      GUILD_DELETE(arg0) {
            return obj.handleGuildDelete(arg0);
          },
      LOAD_MESSAGES_SUCCESS(arg0) {
            return obj.handleLoadMessagesSuccess(arg0);
          },
      LOCAL_MESSAGES_LOADED(arg0) {
            return obj.handleLocalMessagesLoaded(arg0);
          },
      LOGOUT(arg0) {
            return obj.handleLogout(arg0);
          },
      MESSAGE_CREATE(arg0) {
            return obj.handleMessageCreate(arg0);
          },
      MESSAGE_DELETE(arg0) {
            return obj.handleMessageDelete(arg0);
          },
      MESSAGE_PREVIEWS_LOADED(arg0) {
            return obj.handleMessagePreviewsLoaded(arg0);
          },
      MESSAGE_PREVIEWS_LOCALLY_LOADED(guildId) {
            return obj.handleMessagePreviewsLocallyLoaded(guildId);
          },
      MESSAGE_UPDATE(arg0) {
            return obj.handleMessageUpdate(arg0);
          },
      THREAD_LIST_SYNC(arg0) {
            return obj.handleThreadListSync(arg0);
          }
    };
    tmp2 = new tmp2(require("dispatcher"), obj, new.target, tmp2, tmp, new.target, undefined);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp2;
    map = new Map();
    tmp2.guilds = map;
    tmp2.generation = 0;
    return tmp2;
  }
}
const prototype = MessagePreviewStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_5);
};
prototype["isLatest"] = function isLatest(arg0, arg1) {
  let tmp = arg0;
  const guilds = this.guilds;
  if (arg0 == null) {
    tmp = null;
  }
  const value = guilds.get(tmp);
  let flag;
  if (value != null) {
    flag = value.isLatest(arg1, this.generation);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isLocalFetchNeeded"] = function isLocalFetchNeeded(closure_1_0) {
  const guilds = this.guilds;
  const value = guilds.get(closure_1_0);
  let flag;
  if (value != null) {
    flag = value.localNeeded;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
};
prototype["message"] = function message(arg0, arg1) {
  const guilds = this.guilds;
  const value = guilds.get(arg0);
  let messageRecordResult;
  if (value != null) {
    messageRecordResult = value.messageRecord(arg1);
  }
  if (messageRecordResult == null) {
    messageRecordResult = null;
  }
  return messageRecordResult;
};
prototype["data"] = function data(guildId, items, arg2) {
  const self = this;
  const guilds = this.guilds;
  if (!guilds.has(guildId)) {
    const guilds2 = self.guilds;
    const previewData = new object(13324).PreviewData();
    const result = guilds2.set(guildId, previewData);
  }
  const guilds3 = self.guilds;
  return guilds3.get(guildId);
};
prototype["handleOneGuildCreate"] = function handleOneGuildCreate(id) {
  const self = this;
  const dataResult = this.data(id.id);
  let lastMessages = id.lastMessages;
  if (lastMessages == null) {
    lastMessages = [];
  }
  dataResult.putMany(lastMessages, self.generation);
  let threadMessages = id.threadMessages;
  if (threadMessages == null) {
    threadMessages = [];
  }
  dataResult.putMany(threadMessages, self.generation);
  if (null != id.lastMessages) {
    dataResult.localNeeded = false;
  }
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(arg0) {
  const self = this;
  this.generation = this.generation + 1;
  for (const item10010 of tmp) {
    let handleOneGuildCreateResult = self.handleOneGuildCreate(item10010);
    continue;
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild) {
  this.handleOneGuildCreate(guild.guild);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  const guilds = this.guilds;
  guilds.delete(guild.guild.id);
};
prototype["handleMessageCreate"] = function handleMessageCreate(optimistic) {
  if (!optimistic.optimistic) {
    if (!optimistic.isPushNotification) {
      const self = this;
      let guildId = optimistic.guildId;
      if (guildId == null) {
        guildId = null;
      }
      this.data(guildId).put(optimistic.message.channel_id, optimistic.message, self.generation);
    }
  }
  return false;
};
prototype["handleMessageDelete"] = function handleMessageDelete(guildId) {
  guildId = guildId.guildId;
  if (guildId == null) {
    guildId = null;
  }
  const self = this;
  const dataResult = this.data(guildId);
  let messageIdResult;
  if (dataResult != null) {
    messageIdResult = dataResult.messageId(guildId.channelId);
  }
  if (messageIdResult === guildId.id) {
    messages = messages.getMessages(guildId.channelId);
    let lastResult = null;
    if (!messages.hasMoreAfter) {
      lastResult = messages.last();
    }
    if (null != lastResult) {
      self.data(guildId).put(guildId.channelId, lastResult, self.generation);
      const dataResult1 = self.data(guildId);
    } else {
      self.data(guildId).delete(guildId.channelId);
      const dataResult2 = self.data(guildId);
    }
  }
};
prototype["handleMessageUpdate"] = function handleMessageUpdate(guildId) {
  guildId = guildId.guildId;
  if (guildId == null) {
    guildId = null;
  }
  const channel_id = guildId.message.channel_id;
  const id = guildId.message.id;
  if (null != channel_id) {
    if (null != id) {
      const self = this;
      const dataResult = this.data(guildId);
      let messageIdResult;
      if (dataResult != null) {
        messageIdResult = dataResult.messageId(channel_id);
      }
      if (messageIdResult !== id) {
        return false;
      } else if (dataResult != null) {
        dataResult.update(guildId.message);
      }
    }
  }
  return false;
};
prototype["handleThreadListSync"] = function handleThreadListSync(guildId) {
  let mostRecentMessages = guildId.mostRecentMessages;
  if (mostRecentMessages == null) {
    mostRecentMessages = [];
  }
  this.data(guildId.guildId).putMany(mostRecentMessages, this.generation);
};
prototype["handleLoadMessagesSuccess"] = function handleLoadMessagesSuccess(channelId) {
  const basicChannel = store.getBasicChannel(channelId.channelId);
  if (null == basicChannel) {
    return false;
  } else {
    const self = this;
    const result = object(5005).requireSortedDescending(channelId.messages);
    if (!channelId.isAfter) {
      if (!channelId.isBefore) {
        if (!channelId.hasMoreAfter) {
          let first = channelId.messages[0];
          if (first == null) {
            first = null;
          }
          self.data(basicChannel.guild_id).put(channelId.channelId, first, self.generation);
          const dataResult = self.data(basicChannel.guild_id);
        }
      }
    }
    const obj3 = object(5005);
    let first1 = channelId.messages[0];
    if (first1 == null) {
      first1 = null;
    }
    self.data(basicChannel.guild_id).putNew(channelId.channelId, first1, self.generation);
    const dataResult1 = self.data(basicChannel.guild_id);
  }
};
prototype["handleLocalMessagesLoaded"] = function handleLocalMessagesLoaded(channelId) {
  const basicChannel = store.getBasicChannel(channelId.channelId);
  if (null != basicChannel) {
    const self = this;
    const result = object(5005).requireSortedDescending(channelId.messages);
    const obj = object(5005);
    let first = channelId.messages[0];
    if (first == null) {
      first = null;
    }
    this.data(basicChannel.guild_id).putNew(channelId.channelId, first, c6);
    const dataResult = this.data(basicChannel.guild_id);
  }
};
prototype["handleMessagePreviewsLoaded"] = function handleMessagePreviewsLoaded(guildId) {
  const self = this;
  closure_7.verbose("adding remote previews (guildId: " + guildId.guildId + ", messages: " + guildId.messages.length + ")");
  const dataResult = this.data(guildId.guildId);
  for (const item10024 of tmp2) {
    let tmp3 = item10024;
    if (!dataResult.isLatest(item10024.channel_id, self.generation)) {
      let tmp4 = item10024;
      let putResult = dataResult.put(tmp3.channel_id, tmp3, self.generation);
    }
    continue;
  }
};
prototype["handleMessagePreviewsLocallyLoaded"] = function handleMessagePreviewsLocallyLoaded(guildId) {
  closure_7.verbose("adding local previews (guildId: " + guildId.guildId + ", messages: " + guildId.messages.length + ")");
  const dataResult = this.data(guildId.guildId);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp8] = tmp5;
    let tmp7 = tmp6;
    if (!dataResult.has(tmp6)) {
      let tmp9 = tmp6;
      let tmp10 = tmp8;
      let tmp11 = c6;
      let putResult = dataResult.put(tmp7, tmp8, c6);
    }
    continue;
  }
  dataResult.localNeeded = false;
};
function handleLogout() {
  const guilds = this.guilds;
  guilds.clear();
}
prototype["handleLogout"] = handleLogout;
object = undefined;
object = new Object(dispatcherDefault, {
  CONNECTION_OPEN(arg0) {
    return obj.handleConnectionOpen(arg0);
  },
  GUILD_CREATE(arg0) {
    return obj.handleGuildCreate(arg0);
  },
  GUILD_DELETE(arg0) {
    return obj.handleGuildDelete(arg0);
  },
  LOAD_MESSAGES_SUCCESS(arg0) {
    return obj.handleLoadMessagesSuccess(arg0);
  },
  LOCAL_MESSAGES_LOADED(arg0) {
    return obj.handleLocalMessagesLoaded(arg0);
  },
  LOGOUT(arg0) {
    return obj.handleLogout(arg0);
  },
  MESSAGE_CREATE(arg0) {
    return obj.handleMessageCreate(arg0);
  },
  MESSAGE_DELETE(arg0) {
    return obj.handleMessageDelete(arg0);
  },
  MESSAGE_PREVIEWS_LOADED(arg0) {
    return obj.handleMessagePreviewsLoaded(arg0);
  },
  MESSAGE_PREVIEWS_LOCALLY_LOADED(guildId) {
    return obj.handleMessagePreviewsLocallyLoaded(guildId);
  },
  MESSAGE_UPDATE(arg0) {
    return obj.handleMessageUpdate(arg0);
  },
  THREAD_LIST_SYNC(arg0) {
    return obj.handleThreadListSync(arg0);
  }
}, tmp, MessagePreviewStore, Object, prototype, new.target, undefined, handleLogout, globalThis, arg1);
// ThrowIfThisInitialized (0x7c)
let obj = {
  CONNECTION_OPEN(arg0) {
    return obj.handleConnectionOpen(arg0);
  },
  GUILD_CREATE(arg0) {
    return obj.handleGuildCreate(arg0);
  },
  GUILD_DELETE(arg0) {
    return obj.handleGuildDelete(arg0);
  },
  LOAD_MESSAGES_SUCCESS(arg0) {
    return obj.handleLoadMessagesSuccess(arg0);
  },
  LOCAL_MESSAGES_LOADED(arg0) {
    return obj.handleLocalMessagesLoaded(arg0);
  },
  LOGOUT(arg0) {
    return obj.handleLogout(arg0);
  },
  MESSAGE_CREATE(arg0) {
    return obj.handleMessageCreate(arg0);
  },
  MESSAGE_DELETE(arg0) {
    return obj.handleMessageDelete(arg0);
  },
  MESSAGE_PREVIEWS_LOADED(arg0) {
    return obj.handleMessagePreviewsLoaded(arg0);
  },
  MESSAGE_PREVIEWS_LOCALLY_LOADED(guildId) {
    return obj.handleMessagePreviewsLocallyLoaded(guildId);
  },
  MESSAGE_UPDATE(arg0) {
    return obj.handleMessageUpdate(arg0);
  },
  THREAD_LIST_SYNC(arg0) {
    return obj.handleThreadListSync(arg0);
  }
};
let tmp3 = new timestampDefault("MessagePreviewStore");
object.guilds = new Map();
object.generation = 0;
const map = new Map();
let result = require("set").fileFinishedImporting("modules/message_previews/MessagePreviewStore.tsx");

export default object;