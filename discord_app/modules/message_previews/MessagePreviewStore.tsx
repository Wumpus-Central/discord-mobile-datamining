// === Module 13529: message_previews/MessagePreviewStore ===

// Module 13529 (message_previews/MessagePreviewStore)
import LoggerDefault from "Logger" /* 3 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import requireSortedDescending from "requireSortedDescending" /* 5435 */;
import PreviewData from "PreviewData" /* 13530 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5110 */;
import size from "module_2" /* 2 */;

let set;

let tmp;
let c6 = -Infinity;
const tmp3 = new LoggerDefault("MessagePreviewStore");
const metroImportDefault = tmp3;
const Store = get_initializedDefault.Store;
class MessagePreviewStore extends Store {
  constructor() {
    const obj = {
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
      }
    };
    const tmp22 = new tmp2(DispatcherDefault, obj, new.target, tmp2, tmp, this, undefined);
    let closure_0 = tmp22;
    tmp22.guilds = new Map();
    tmp22.generation = 0;
    new Map();
    return tmp22;
  }
  initialize() {
    this.waitFor(ChannelStore, MessageStore);
  }
  isLatest(arg0, arg1) {
    let tmp = arg0;
    const guilds = this.guilds;
    const get = guilds.get;
    if (arg0 == null) {
      tmp = null;
    }
    const value = get(tmp);
    let flag;
    if (value != null) {
      flag = value.isLatest(arg1, this.generation);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isLocalFetchNeeded(id) {
    const guilds = this.guilds;
    const value = guilds.get(id);
    let flag;
    if (value != null) {
      flag = value.localNeeded;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  }
  message(arg0, arg1) {
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
  }
  data(guildId) {
    const self = this;
    const guilds = this.guilds;
    if (!guilds.has(guildId)) {
      const guilds2 = self.guilds;
      const self2 = this;
      const self3 = this;
      set = guilds2.set;
      const previewData = new PreviewData.PreviewData();
      const result = set(guildId, previewData);
    }
    const guilds3 = self.guilds;
    return guilds3.get(guildId);
  }
  handleOneGuildCreate(id) {
    const self = this;
    const dataResult = this.data(id.id);
    let lastMessages = id.lastMessages;
    const putMany = dataResult.putMany;
    if (lastMessages == null) {
      lastMessages = [];
    }
    putMany(lastMessages, self.generation);
    let threadMessages = id.threadMessages;
    const putMany2 = dataResult.putMany;
    if (threadMessages == null) {
      threadMessages = [];
    }
    putMany2(threadMessages, self.generation);
    if (null != id.lastMessages) {
      dataResult.localNeeded = false;
    }
  }
  handleConnectionOpen(guilds) {
    const self = this;
    this.generation = this.generation + 1;
    guilds = guilds.guilds;
    for (const item10010 of guilds) {
      let handleOneGuildCreateResult = self.handleOneGuildCreate(item10010);
      continue;
    }
  }
  handleGuildCreate(guild) {
    this.handleOneGuildCreate(guild.guild);
  }
  handleGuildDelete(guild) {
    const guilds = this.guilds;
    guilds.delete(guild.guild.id);
  }
  handleMessageCreate(optimistic) {
    if (!optimistic.optimistic) {
      if (!optimistic.isPushNotification) {
        const self = this;
        let guildId = optimistic.guildId;
        const data = this.data;
        if (guildId == null) {
          guildId = null;
        }
        const dataResult = data(guildId);
        dataResult.put(optimistic.message.channel_id, optimistic.message, self.generation);
      }
    }
    return false;
  }
  handleMessageDelete(guildId) {
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
        const dataResult1 = self.data(guildId);
        dataResult1.put(guildId.channelId, lastResult, self.generation);
      } else {
        const dataResult2 = self.data(guildId);
        dataResult2.delete(guildId.channelId);
      }
    }
  }
  handleMessageUpdate(guildId) {
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
  }
  handleThreadListSync(guildId) {
    let mostRecentMessages = guildId.mostRecentMessages;
    const putMany = this.data(guildId.guildId).putMany;
    this.data(guildId.guildId);
    if (mostRecentMessages == null) {
      mostRecentMessages = [];
    }
    putMany(mostRecentMessages, this.generation);
  }
  handleLoadMessagesSuccess(channelId) {
    const basicChannel = ChannelStore.getBasicChannel(channelId.channelId);
    if (null == basicChannel) {
      return false;
    } else {
      const self = this;
      const obj = requireSortedDescending;
      const result = obj.requireSortedDescending(channelId.messages);
      if (!channelId.isAfter) {
        if (!channelId.isBefore) {
          if (!channelId.hasMoreAfter) {
            let first = channelId.messages[0];
            const put = self.data(basicChannel.guild_id).put;
            channelId = channelId.channelId;
            self.data(basicChannel.guild_id);
            if (first == null) {
              first = null;
            }
            put(channelId, first, self.generation);
          }
        }
      }
      let first1 = channelId.messages[0];
      const putNew = self.data(basicChannel.guild_id).putNew;
      const channelId2 = channelId.channelId;
      self.data(basicChannel.guild_id);
      if (first1 == null) {
        first1 = null;
      }
      putNew(channelId2, first1, self.generation);
    }
  }
  handleLocalMessagesLoaded(channelId) {
    const basicChannel = ChannelStore.getBasicChannel(channelId.channelId);
    if (null != basicChannel) {
      const self = this;
      const obj = requireSortedDescending;
      const result = obj.requireSortedDescending(channelId.messages);
      let first = channelId.messages[0];
      const putNew = this.data(basicChannel.guild_id).putNew;
      channelId = channelId.channelId;
      this.data(basicChannel.guild_id);
      if (first == null) {
        first = null;
      }
      putNew(channelId, first, c6);
    }
  }
  handleMessagePreviewsLoaded(guildId) {
    const self = this;
    closure_7.verbose("adding remote previews (guildId: " + guildId.guildId + ", messages: " + guildId.messages.length + ")");
    const dataResult = this.data(guildId.guildId);
    const messages = guildId.messages;
    for (const item10024 of messages) {
      if (!dataResult.isLatest(item10024.channel_id, self.generation)) {
        let putResult = dataResult.put(item10024.channel_id, item10024, self.generation);
      }
      continue;
    }
  }
  handleMessagePreviewsLocallyLoaded(guildId) {
    let tmp6;
    let tmp8;
    closure_7.verbose("adding local previews (guildId: " + guildId.guildId + ", messages: " + guildId.messages.length + ")");
    const dataResult = this.data(guildId.guildId);
    const tmp2 = guildId.messages[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp8] = tmp5;
      if (!dataResult.has(tmp6)) {
        let putResult = dataResult.put(tmp6, tmp8, c6);
      }
      continue;
    }
    dataResult.localNeeded = false;
  }
}
const prototype = MessagePreviewStore.prototype;
function handleLogout() {
  const guilds = this.guilds;
  guilds.clear();
}
prototype["handleLogout"] = handleLogout;
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
  }
};
const object = new Object(DispatcherDefault, obj, tmp, MessagePreviewStore, Object, prototype, this, undefined, handleLogout, globalThis, require);
const map = new Map();
object.guilds = map;
object.generation = 0;
let result = size.fileFinishedImporting("modules/message_previews/MessagePreviewStore.tsx");

export default object;