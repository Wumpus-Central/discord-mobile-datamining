// === Module 13546: PreviewData ===

// Module 13546 (PreviewData)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5118 */;
import MessageRecord from "MessageRecord" /* 4526 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import size from "module_2" /* 2 */;

let set;

let result = size.fileFinishedImporting("modules/message_previews/PreviewData.tsx");
class PreviewData {
  constructor() {
    const merged = Object.assign({ localNeeded: true, messages: null });
    merged[1] = new Map();
    new Map();
    return merged;
  }
  isLatest(arg0, generation) {
    return this.messageGeneration(arg0, generation) === generation;
  }
  messageGeneration(arg0, generation) {
    const messages = this.messages;
    const value = messages.get(arg0);
    let num = -Infinity;
    if (null != value) {
      if (value.generation !== generation) {
        if (null != value.message) {
          if (value.message.id === ReadStateStore.lastMessageId(arg0)) {
            const messages2 = this.messages;
            const obj = { generation };
            set = messages2.set;
            const merged = Object.assign(value);
            const result = set(arg0, obj);
          }
          num = generation;
        }
      }
      generation = value.generation;
    }
    return num;
  }
  messageId(dependencyMap) {
    const messages = this.messages;
    const value = messages.get(dependencyMap);
    let id;
    if (value != null) {
      const message = value.message;
      if (message != null) {
        id = message.id;
      }
    }
    if (id == null) {
      id = null;
    }
    return id;
  }
  messageRecord(arg0) {
    const messages = this.messages;
    const value = messages.get(arg0);
    const tmp2 = null == value || null == value.message || value.message instanceof MessageRecord;
    if (!tmp2) {
      const obj = MessageRecordUtils;
      value.message = obj.createMessageRecord(value.message);
    }
    let message;
    if (value != null) {
      message = value.message;
    }
    if (message == null) {
      message = null;
    }
    return message;
  }
  has(arg0) {
    const messages = this.messages;
    return messages.has(arg0);
  }
  put(arg0, message, generation) {
    const messages = this.messages;
    const obj = { message, generation };
    const result = messages.set(arg0, obj);
  }
  putNew(channelId, first1, c6) {
    const self = this;
    const messages = this.messages;
    const value = messages.get(channelId);
    let tmp2 = null != first1;
    if (tmp2) {
      let id1;
      const id = first1.id;
      if (value != null) {
        const message = value.message;
        if (message != null) {
          id1 = message.id;
        }
      }
      let tmp4 = null == id1;
      if (!tmp4) {
        const obj = SnowflakeUtilsDefault;
        tmp4 = obj.compare(id, id1) > 0;
      }
      tmp2 = tmp4;
    }
    if (tmp2) {
      self.put(channelId, first1, c6);
    }
  }
  putMany(arg0, arg1) {
    const self = this;
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let putResult = self.put(nextResult.channel_id, nextResult, arg1);
      continue;
    }
  }
  update(id) {
    if (null != id.id) {
      if (null != id.channel_id) {
        const channel_id = id.channel_id;
        const messages2 = this.messages;
        const self = this;
        const value = messages2.get(channel_id);
        id = undefined;
        if (value != null) {
          const message = value.message;
          if (message != null) {
            id = message.id;
          }
        }
        if (id === id.id) {
          let updateMessageRecordResult;
          const tmp3 = value.message instanceof MessageRecord;
          const obj = MessageRecordUtils;
          if (tmp3) {
            updateMessageRecordResult = obj.updateMessageRecord(value.message, id);
          } else {
            updateMessageRecordResult = obj.updateServerMessage(value.message, id);
          }
          const messages = self.messages;
          const obj2 = { message: updateMessageRecordResult };
          set = messages.set;
          const merged = Object.assign(value);
          const result = set(channel_id, obj2);
        }
      }
    }
  }
  delete(arg0) {
    const messages = this.messages;
    messages.delete(arg0);
  }
}
const prototype = PreviewData.prototype;

export { PreviewData };