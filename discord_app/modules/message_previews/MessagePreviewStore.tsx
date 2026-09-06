// discord_app/modules/message_previews/MessagePreviewStore.tsx
import LoggerDefault from "../debug/Logger.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import requireSortedDescending from "../app_database/modules/messages/requireSortedDescending.tsx";
import PreviewData from "PreviewData.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";

require = fn;
let c6 = -Infinity;
let closure_7 = new LoggerDefault("MessagePreviewStore");
const Store = initializeDefault.Store;
class MessagePreviewStore extends Store {
  constructor() {
    closure_0 = undefined;
    obj = {
      CONNECTION_OPEN(arg0) {
        return closure_0.handleConnectionOpen(arg0);
      },
      GUILD_CREATE(arg0) {
        return closure_0.handleGuildCreate(arg0);
      },
      GUILD_DELETE(arg0) {
        return closure_0.handleGuildDelete(arg0);
      },
      LOAD_MESSAGES_SUCCESS(arg0) {
        return closure_0.handleLoadMessagesSuccess(arg0);
      },
      LOCAL_MESSAGES_LOADED(arg0) {
        return closure_0.handleLocalMessagesLoaded(arg0);
      },
      LOGOUT(arg0) {
        return closure_0.handleLogout(arg0);
      },
      MESSAGE_CREATE(arg0) {
        return closure_0.handleMessageCreate(arg0);
      },
      MESSAGE_DELETE(arg0) {
        return closure_0.handleMessageDelete(arg0);
      },
      MESSAGE_PREVIEWS_LOADED(arg0) {
        return closure_0.handleMessagePreviewsLoaded(arg0);
      },
      MESSAGE_PREVIEWS_LOCALLY_LOADED(guildId) {
        return closure_0.handleMessagePreviewsLocallyLoaded(guildId);
      },
      MESSAGE_UPDATE(arg0) {
        return closure_0.handleMessageUpdate(arg0);
      },
      THREAD_LIST_SYNC(arg0) {
        return closure_0.handleThreadListSync(arg0);
      },
    };
    tmp2 = new tmp2(closure_1(closure_2[5]), obj, new.target, tmp2, tmp, new.target, undefined);
    closure_0 = tmp2;
    map = new Map();
    tmp2.guilds = map;
    tmp2.generation = 0;
    return tmp2;
  }
}
const prototype = MessagePreviewStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, MessageStore);
};
prototype["isLatest"] = function isLatest(arg0, arg1) {
  let tmp = arg0;
  const guilds = this.guilds;
  if (arg0 == null) {
    tmp = null;
  }
  value = guilds.get(tmp);
  let flag;
  if (value != null) {
    flag = value.isLatest(arg1, this.generation);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isLocalFetchNeeded"] = function isLocalFetchNeeded(arg0) {
  const guilds = this.guilds;
  value = guilds.get(arg0);
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
  value = guilds.get(arg0);
  let messageRecordResult;
  if (value != null) {
    messageRecordResult = value.messageRecord(arg1);
  }
  if (messageRecordResult == null) {
    messageRecordResult = null;
  }
  return messageRecordResult;
};
prototype["data"] = function data(guildId) {
  const self = this;
  const guilds = this.guilds;
  if (!guilds.has(guildId)) {
    const guilds2 = self.guilds;
    const previewData = new PreviewData.PreviewData();
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
    const messages = MessageStore.getMessages(guildId.channelId);
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
  const basicChannel = ChannelStore.getBasicChannel(channelId.channelId);
  if (null == basicChannel) {
    return false;
  } else {
    const self = this;
    const result = requireSortedDescending.requireSortedDescending(channelId.messages);
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
    let first1 = channelId.messages[0];
    if (first1 == null) {
      first1 = null;
    }
    self.data(basicChannel.guild_id).putNew(channelId.channelId, first1, self.generation);
    const dataResult1 = self.data(basicChannel.guild_id);
  }
};
prototype["handleLocalMessagesLoaded"] = function handleLocalMessagesLoaded(channelId) {
  const basicChannel = ChannelStore.getBasicChannel(channelId.channelId);
  if (null != basicChannel) {
    const self = this;
    const result = requireSortedDescending.requireSortedDescending(channelId.messages);
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
  closure_7.verbose(
    "adding remote previews (guildId: " + guildId.guildId + ", messages: " + guildId.messages.length + ")",
  );
  const dataResult = this.data(guildId.guildId);
  for (const item10024 of tmp2) {
    if (!dataResult.isLatest(item10024.channel_id, self.generation)) {
      let putResult = dataResult.put(item10024.channel_id, item10024, self.generation);
    }
    continue;
  }
};
prototype["handleMessagePreviewsLocallyLoaded"] = function handleMessagePreviewsLocallyLoaded(guildId) {
  closure_7.verbose(
    "adding local previews (guildId: " + guildId.guildId + ", messages: " + guildId.messages.length + ")",
  );
  const dataResult = this.data(guildId.guildId);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp8] = tmp5;
    if (!dataResult.has(tmp6)) {
      let putResult = dataResult.put(tmp6, tmp8, c6);
    }
    continue;
  }
  dataResult.localNeeded = false;
  tmp2 = guildId.messages[Symbol.iterator]();
};
function handleLogout() {
  const guilds = this.guilds;
  guilds.clear();
}
prototype["handleLogout"] = handleLogout;
const object = new Object(
  DispatcherDefault,
  {
    CONNECTION_OPEN(arg0) {
      return closure_0.handleConnectionOpen(arg0);
    },
    GUILD_CREATE(arg0) {
      return closure_0.handleGuildCreate(arg0);
    },
    GUILD_DELETE(arg0) {
      return closure_0.handleGuildDelete(arg0);
    },
    LOAD_MESSAGES_SUCCESS(arg0) {
      return closure_0.handleLoadMessagesSuccess(arg0);
    },
    LOCAL_MESSAGES_LOADED(arg0) {
      return closure_0.handleLocalMessagesLoaded(arg0);
    },
    LOGOUT(arg0) {
      return closure_0.handleLogout(arg0);
    },
    MESSAGE_CREATE(arg0) {
      return closure_0.handleMessageCreate(arg0);
    },
    MESSAGE_DELETE(arg0) {
      return closure_0.handleMessageDelete(arg0);
    },
    MESSAGE_PREVIEWS_LOADED(arg0) {
      return closure_0.handleMessagePreviewsLoaded(arg0);
    },
    MESSAGE_PREVIEWS_LOCALLY_LOADED(guildId) {
      return closure_0.handleMessagePreviewsLocallyLoaded(guildId);
    },
    MESSAGE_UPDATE(arg0) {
      return closure_0.handleMessageUpdate(arg0);
    },
    THREAD_LIST_SYNC(arg0) {
      return closure_0.handleThreadListSync(arg0);
    },
  },
  tmp,
  MessagePreviewStore,
  Object,
  prototype,
  new.target,
  undefined,
  handleLogout,
  globalThis,
  fn,
);
let closure_129_0 = object;
let obj = {
  CONNECTION_OPEN(arg0) {
    return closure_0.handleConnectionOpen(arg0);
  },
  GUILD_CREATE(arg0) {
    return closure_0.handleGuildCreate(arg0);
  },
  GUILD_DELETE(arg0) {
    return closure_0.handleGuildDelete(arg0);
  },
  LOAD_MESSAGES_SUCCESS(arg0) {
    return closure_0.handleLoadMessagesSuccess(arg0);
  },
  LOCAL_MESSAGES_LOADED(arg0) {
    return closure_0.handleLocalMessagesLoaded(arg0);
  },
  LOGOUT(arg0) {
    return closure_0.handleLogout(arg0);
  },
  MESSAGE_CREATE(arg0) {
    return closure_0.handleMessageCreate(arg0);
  },
  MESSAGE_DELETE(arg0) {
    return closure_0.handleMessageDelete(arg0);
  },
  MESSAGE_PREVIEWS_LOADED(arg0) {
    return closure_0.handleMessagePreviewsLoaded(arg0);
  },
  MESSAGE_PREVIEWS_LOCALLY_LOADED(guildId) {
    return closure_0.handleMessagePreviewsLocallyLoaded(guildId);
  },
  MESSAGE_UPDATE(arg0) {
    return closure_0.handleMessageUpdate(arg0);
  },
  THREAD_LIST_SYNC(arg0) {
    return closure_0.handleThreadListSync(arg0);
  },
};
const tmp3 = new LoggerDefault("MessagePreviewStore");
object.guilds = new Map();
object.generation = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/message_previews/MessagePreviewStore.tsx");

export default object;
