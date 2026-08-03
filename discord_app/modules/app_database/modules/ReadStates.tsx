import apply from "apply";
import ensureGuildLoaded from "ensureGuildLoaded";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import set from "generateOldThreadCutoff";

let c5 = new require("timestamp")("ReadStates");
class ReadStates {
  constructor() {
    obj = Object.create(new.target.prototype);
    ReadStates = obj;
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
  let closure_0 = arg0;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === apply) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let length = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            length = undefined;
            apply = undefined;
            const _performance2 = performance;
            closure_0 = performance.now();
            const states = outer1_0(outer1_1[4]).readStates(outer1_0);
            apply = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = states.getMany();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          length = arg1;
          const _performance = performance;
          apply = performance.now();
          const _HermesInternal = HermesInternal;
          outer1_5.log("asynchronously loaded in " + apply - closure_0 + "ms (readStates: " + length.length + ")");
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = length;
          return obj;
        }
      } catch (tmp6) {
        c3 = tmp;
        throw tmp6;
      }
    }
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
      tmp2.log("Received null read states version", version);
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
          let tmp34 = statesTransaction;
          let tmp35 = statesTransaction;
          let tmp36 = dependencyMap;
          let tmp37 = dependencyMap;
          let obj12 = statesTransaction(11);
          let tmp38 = nextResult;
          let tmp39 = str2;
          if (1 === obj12.compare(tmp7._lastMessageId, str2)) {
            let tmp8 = nextResult;
            str2 = tmp7._lastMessageId;
          }
          let tmp9 = nextResult;
          let hasItem = set.has(tmp7.channelId);
          if (hasItem) {
            let tmp11 = tmp34;
            let tmp12 = tmp36;
            let tmp35Result = tmp35(11);
            let tmp13 = nextResult;
            let tmp14 = _lastMessageId;
            hasItem = 1 === tmp35Result.compare(tmp7._lastMessageId, _lastMessageId);
          }
          if (hasItem) {
            let tmp15 = nextResult;
            _lastMessageId = tmp7._lastMessageId;
          }
        }
        continue;
      }
      let obj1 = statesTransaction(1907);
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
  statesTransaction = statesTransaction(1907).readStatesTransaction(database);
  statesTransaction.delete();
  const item = allReadStates.forEach((type) => statesTransaction.put("" + type.type + "-" + type.channelId, type));
};
let set = Object.create(ReadStates.prototype);
set.readStateVersion = null;
set.actions = {
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
let result = set.fileFinishedImporting("modules/app_database/modules/ReadStates.tsx");

export default set;