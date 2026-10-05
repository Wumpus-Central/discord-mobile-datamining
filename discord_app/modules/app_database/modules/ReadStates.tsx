// discord_app/modules/app_database/modules/ReadStates.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let set;

const tmp2 = new LoggerDefault("ReadStates");
const hasOwnProperty = tmp2;
class ReadStates {
  constructor() {
    const obj = Object.create(new.target.prototype);
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
      BACKGROUND_SYNC_FINISHED(messagesOnly, arg1) {
        if (!messagesOnly.messagesOnly) {
          obj.handleWriteCaches(arg1, false);
        }
      },
      WRITE_CACHES(arg0, arg1) {
        return obj.handleWriteCaches(arg1, true);
      },
    };
    return obj;
  }
  getAll(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c2;
      let c3;
      const value = tmp4;
      const _performance2 = performance;
      const tmp = performance.now();
      const obj6 = tmp(value[4]);
      const states = obj6.readStates(tmp);
      await states.getMany();
      const _performance = performance;
      let closure_2 = performance.now();
      const _HermesInternal = HermesInternal;
      logger.log("asynchronously loaded in " + closure_2 - tmp + "ms (readStates: " + value.length + ")");
      return value;
    })();
  }
  resetInMemoryState() {
    this.readStateVersion = null;
  }
  handleConnectionOpen(readState) {
    this.readStateVersion = readState.readState.version;
  }
  handleReadStateAction(version) {
    if (null != this.readStateVersion) {
      if (null != version.version) {
        tmp.readStateVersion = version.version;
      } else {
        logger.log("Received null read states version", version);
      }
    }
  }
  handleWriteCaches(database, arg1) {
    const allReadStates = ReadStateStore.getAllReadStates(false);
    const tmp = arg1;
    if (tmp) {
      if (null != this.readStateVersion) {
        let str2 = "0";
        const _Object = Object;
        const keys = Object.keys(ChannelStore.getMutablePrivateChannels());
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(keys);
        const obj10 = _modDef12(keys);
        const sorted = obj10.sort(SnowflakeUtilsDefault.compare);
        const iter2 = sorted.reverse();
        let str = iter2.value()[0];
        if (str == null) {
          str = "0";
        }
        let _lastMessageId = str;
        const iter = allReadStates[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp8 = nextResult;
          if (null != nextResult._lastMessageId) {
            let obj12 = SnowflakeUtilsDefault;
            if (1 === obj12.compare(tmp8._lastMessageId, str2)) {
              str2 = tmp8._lastMessageId;
            }
            let hasItem = set.has(tmp8.channelId);
            if (hasItem) {
              let tmp34Result = SnowflakeUtilsDefault;
              hasItem = 1 === tmp34Result.compare(tmp8._lastMessageId, _lastMessageId);
            }
            if (hasItem) {
              _lastMessageId = tmp8._lastMessageId;
            }
          }
          continue;
        }
        const obj2 = DatabaseDaosDefault;
        const result = obj2.nonGuildVersionsTransaction(database);
        const items = [{ id: "highest_last_message_id", versionString: str2 }, ,];
        const obj = { id: "highest_last_message_id", versionString: str2 };
        const obj3 = { id: "private_channels_version", versionString: _lastMessageId };
        items[1] = obj3;
        const obj4 = { id: "read_state_version", version: tmp2.readStateVersion };
        items[2] = obj4;
        result.putAll(items);
      }
    }
    const obj7 = DatabaseDaosDefault;
    const statesTransaction = obj7.readStatesTransaction(database);
    statesTransaction.delete();
    const item = allReadStates.forEach((type) => statesTransaction.put("" + type.type + "-" + type.channelId, type));
  }
}
const prototype = ReadStates.prototype;
let obj = Object.create(ReadStates.prototype);
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
  BACKGROUND_SYNC_FINISHED(messagesOnly, arg1) {
    if (!messagesOnly.messagesOnly) {
      obj.handleWriteCaches(arg1, false);
    }
  },
  WRITE_CACHES(arg0, arg1) {
    return obj.handleWriteCaches(arg1, true);
  },
};
let result = size.fileFinishedImporting("modules/app_database/modules/ReadStates.tsx");

export default obj;
