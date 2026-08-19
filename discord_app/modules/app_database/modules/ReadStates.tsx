// discord_app/modules/app_database/modules/ReadStates.tsx
import timestampDefault from "../../debug/Logger.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import generateOldThreadCutoff from "../../../stores/ReadStateStore.tsx";
import obj132 from "../../../../_runtime/00002_obj132.js";

let obj132 = importDefault;
let closure_5 = new timestampDefault("ReadStates");
class ReadStates {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.readStateVersion = null;
    obj.actions = {
      CONNECTION_OPEN(arg0) {
            return obj.handleConnectionOpen(arg0);
          },
      CHANNEL_PINS_ACK(version) {
            return obj.handleReadStateAction(version);
          },
      MESSAGE_ACK(version) {
            return obj.handleReadStateAction(version);
          },
      BACKGROUND_SYNC_FINISHED(messagesOnly) {
            if (!messagesOnly.messagesOnly) {
              obj.handleWriteCaches(arg1, false);
            }
          },
      WRITE_CACHES(arg0, arg1) {
            return obj.handleWriteCaches(arg1, true);
          }
    };
    return obj;
  }
}
const prototype = ReadStates.prototype;
prototype["getAll"] = function getAll(arg0) {
  closure_0 = arg0;
  return callback(function*() {
    const _performance2 = performance;
    closure_0 = performance.now();
    const states = closure_1_0(closure_1_1[4]).readStates(closure_1_0);
    const length = yield states.getMany();
    const _performance = performance;
    const _HermesInternal = HermesInternal;
    closure_1_5.log("asynchronously loaded in " + closure_2 - closure_0 + "ms (readStates: " + length.length + ")");
    return length;
  })();
};
prototype["resetInMemoryState"] = function resetInMemoryState() {
  this.readStateVersion = null;
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(readState) {
  this.readStateVersion = readState.readState.version;
};
prototype["handleReadStateAction"] = function handleReadStateAction(version) {
  if (null != this.readStateVersion) {
    if (null != version.version) {
      tmp.readStateVersion = version.version;
    } else {
      logger.log("Received null read states version", version);
    }
  }
};
prototype["handleWriteCaches"] = function handleWriteCaches(database) {
  allReadStates = allReadStates.getAllReadStates(false);
  if (arg1) {
    if (null != this.readStateVersion) {
      let str2 = "0";
      const _Object = Object;
      const keys = Object.keys(mutablePrivateChannels.getMutablePrivateChannels());
      const _Set = Set;
      const set = new Set(keys);
      const sorted = statesTransaction(12)(keys).sort(statesTransaction(11).compare);
      const obj10 = statesTransaction(12)(keys);
      let str = sorted.reverse().value()[0];
      if (str == null) {
        str = "0";
      }
      let _lastMessageId = str;
      const iter = allReadStates[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = nextResult;
        if (null != nextResult._lastMessageId) {
          let tmp35 = statesTransaction;
          let obj12 = statesTransaction(11);
          if (1 === obj12.compare(tmp7._lastMessageId, str2)) {
            str2 = tmp7._lastMessageId;
          }
          let hasItem = set.has(tmp7.channelId);
          if (hasItem) {
            let tmp35Result = tmp35(11);
            hasItem = 1 === tmp35Result.compare(tmp7._lastMessageId, _lastMessageId);
          }
          if (hasItem) {
            _lastMessageId = tmp7._lastMessageId;
          }
        }
        continue;
      }
      obj1 = statesTransaction(1955);
      const result = obj1.nonGuildVersionsTransaction(database);
      let obj = { id: "highest_last_message_id", versionString: null };
      obj[1] = str2;
      const items = [obj, , ];
      obj = { id: "private_channels_version", versionString: null };
      obj[1] = _lastMessageId;
      items[1] = obj;
      obj1 = { id: "read_state_version", version: null };
      obj1[1] = tmp.readStateVersion;
      items[2] = obj1;
      result.putAll(items);
      const iter2 = sorted.reverse();
    }
  }
  statesTransaction = statesTransaction(1955).readStatesTransaction(database);
  statesTransaction.delete();
  const item = allReadStates.forEach((item, index) => statesTransaction.put("" + item.type + "-" + item.channelId, item));
  const obj7 = statesTransaction(1955);
};
obj132 = Object.create(ReadStates.prototype);
obj132.readStateVersion = null;
obj132.actions = {
  CONNECTION_OPEN(arg0) {
    return obj.handleConnectionOpen(arg0);
  },
  CHANNEL_PINS_ACK(version) {
    return obj.handleReadStateAction(version);
  },
  MESSAGE_ACK(version) {
    return obj.handleReadStateAction(version);
  },
  BACKGROUND_SYNC_FINISHED(messagesOnly) {
    if (!messagesOnly.messagesOnly) {
      obj.handleWriteCaches(arg1, false);
    }
  },
  WRITE_CACHES(arg0, arg1) {
    return obj.handleWriteCaches(arg1, true);
  }
};
let result = obj132.fileFinishedImporting("modules/app_database/modules/ReadStates.tsx");

export default obj132;