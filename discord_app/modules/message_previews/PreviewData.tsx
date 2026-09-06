// discord_app/modules/message_previews/PreviewData.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import MessageRecord from "../../records/MessageRecord.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/message_previews/PreviewData.tsx");
class PreviewData {
  constructor() {
    merged = Object.assign({ localNeeded: true, messages: null });
    map = new Map();
    merged[1] = map;
    return merged;
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
prototype["messageId"] = function messageId(dependencyMap) {
  const messages = this.messages;
  value = messages.get(dependencyMap);
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
  value = messages.get(arg0);
  let tmp2 = null == value || null == value.message;
  if (!tmp2) {
    tmp2 = value.message instanceof MessageRecord;
  }
  if (!tmp2) {
    value.message = MessageRecordUtils.createMessageRecord(value.message);
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
prototype["putNew"] = function putNew(channelId, first1, c6) {
  const self = this;
  const messages = this.messages;
  value = messages.get(channelId);
  let tmp2 = null != first1;
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
      tmp4 = SnowflakeUtilsDefault.compare(first1.id, id) > 0;
    }
    tmp2 = tmp4;
  }
  if (tmp2) {
    self.put(channelId, first1, c6);
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
        let obj = MessageRecordUtils;
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
        tmp3 = merged.message instanceof MessageRecord;
      }
    }
  }
};
prototype["delete"] = function delete(arg0) {
  const messages = this.messages;
  messages.delete(arg0);
};

export { PreviewData };