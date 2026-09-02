// === Module 13595: isLatest ===

// Module 13595 (isLatest)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4737 */;
import closure_3 from "hasFlag" /* 4131 */;
import closure_4 from "generateOldThreadCutoff" /* 4493 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/message_previews/PreviewData.tsx");
class PreviewData {
  constructor() {
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj[1] = map;
    return obj;
  }
}
const prototype = PreviewData.prototype;
prototype["isLatest"] = function isLatest(arg0, generation) {
  return this.messageGeneration(arg0, generation) === generation;
};
prototype["messageGeneration"] = function messageGeneration(arg0, generation) {
  let self = this;
  const messages = this.messages;
  let merged = messages.get(arg0);
  if (null == merged) {
    return -Infinity;
  } else {
    if (merged.generation !== generation) {
      const messages2 = self.messages;
      const obj = {};
      merged = Object.assign(merged);
      obj.generation = generation;
      self = messages2.set(arg0, obj);
    }
    generation = merged.generation;
  }
};
prototype["messageId"] = function messageId(channelType, arg1) {
  const messages = this.messages;
  const value = messages.get(channelType);
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
};
prototype["messageRecord"] = function messageRecord(arg0) {
  const messages = this.messages;
  const value = messages.get(arg0);
  let tmp2 = null == value || null == value.message;
  if (!tmp2) {
    tmp2 = value.message instanceof closure_3;
  }
  if (!tmp2) {
    value.message = createMinimalMessageRecord.createMessageRecord(value.message);
    const obj = createMinimalMessageRecord;
  }
  let message;
  if (value != null) {
    message = value.message;
  }
  if (message == null) {
    message = null;
  }
  return message;
};
prototype["has"] = function has(arg0) {
  const messages = this.messages;
  return messages.has(arg0);
};
prototype["put"] = function put(arg0, message, generation) {
  const messages = this.messages;
  const result = messages.set(arg0, { message, generation });
};
prototype["putNew"] = function putNew(channelId, first, c6) {
  const self = this;
  const messages = this.messages;
  const value = messages.get(channelId);
  let tmp2 = null != first;
  if (tmp2) {
    let id;
    if (value != null) {
      const message = value.message;
      if (message != null) {
        id = message.id;
      }
    }
    let tmp4 = null == id;
    if (!tmp4) {
      tmp4 = DISCORD_EPOCHDefault.compare(first.id, id) > 0;
      const obj = DISCORD_EPOCHDefault;
    }
    tmp2 = tmp4;
  }
  if (tmp2) {
    self.put(channelId, first, c6);
  }
};
prototype["putMany"] = function putMany(arg0, arg1) {
  const self = this;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let putResult = self.put(nextResult.channel_id, nextResult, arg1);
    continue;
  }
};
prototype["update"] = function update(id) {
  if (null != id.id) {
    if (null != id.channel_id) {
      let self = this;
      const channel_id = id.channel_id;
      const messages2 = this.messages;
      let merged = messages2.get(channel_id);
      id = undefined;
      if (merged != null) {
        const message = merged.message;
        if (message != null) {
          id = message.id;
        }
      }
      if (id === id.id) {
        let obj = createMinimalMessageRecord;
        if (tmp3) {
          let updateMessageRecordResult = obj.updateMessageRecord(merged.message, id);
        } else {
          updateMessageRecordResult = obj.updateServerMessage(merged.message, id);
        }
        const messages = self.messages;
        obj = {};
        merged = Object.assign(merged);
        obj.message = updateMessageRecordResult;
        self = messages.set(channel_id, obj);
        tmp3 = merged.message instanceof closure_3;
      }
    }
  }
};
prototype["delete"] = function delete(arg0) {
  const messages = this.messages;
  messages.delete(arg0);
};

export { PreviewData };