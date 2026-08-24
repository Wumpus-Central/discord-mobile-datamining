// discord_common/js/packages/kv-storage/js/api/Table.tsx
import combineKey from "../util/Key.tsx";
import TableId from "../types/index.tsx";
import closure_2 from "../../../../../../_runtime/00005_asyncGeneratorStep.js";

require = arg1;
let TableTransaction;
class TableTransaction {
  constructor(arg0, arg1, arg2) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.messages = {
      trimOrphans(arg0) {
            if (1 === obj.prefix.length) {
              if (1 === arg0.length) {
                const transaction = tmp.transaction;
                obj = { type: "messages.trim_orphans", table: null, channelKey: null, messageKey: null };
                obj[1] = tmp.tableId;
                obj[2] = arg0[0];
                obj[3] = tmp.prefix[0];
                transaction.add(obj);
              }
            }
            error = new Error("trimOrphans: only one prefix component is supported at this time");
            throw error;
          },
      trimChannel(key) {
            const transaction = obj.transaction;
            obj = { type: "messages.trim_channel", table: obj.tableId, key: obj(closure_1_1[1]).combineKey(obj.prefix, key), limit: arg1 };
            transaction.add(obj);
          },
      trimChannelsIn(arg0, arg1) {
            if (1 === obj.prefix.length) {
              if (1 === arg0.length) {
                const transaction = tmp.transaction;
                obj = { type: "messages.trim_channels_in", table: null, channelKey: null, messageKey: null, limit: null };
                obj[1] = tmp.tableId;
                obj[2] = arg0[0];
                obj[3] = tmp.prefix[0];
                obj[4] = arg1;
                transaction.add(obj);
              }
            }
            error = new Error("trimChannelsIn: only one prefix component is supported at this time");
            throw error;
          },
      trimChannelsNotIn(arg0, arg1) {
            if (1 === obj.prefix.length) {
              if (1 === arg0.length) {
                const transaction = tmp.transaction;
                obj = { type: "messages.trim_channels_not_in", table: null, channelKey: null, messageKey: null, limit: null };
                obj[1] = tmp.tableId;
                obj[2] = arg0[0];
                obj[3] = tmp.prefix[0];
                obj[4] = arg1;
                transaction.add(obj);
              }
            }
            error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
            throw error;
          }
    };
    obj.prefix = global;
    obj.tableId = arg1;
    obj.transaction = importDefault;
    return obj;
  }
}
const prototype = TableTransaction.prototype;
TableTransaction["fromDatabaseTransaction"] = function fromDatabaseTransaction(prefix, tableId, transaction) {
  if (typeof TableTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(TableTransaction.prototype);
  obj.messages = {
    trimOrphans(arg0) {
      if (1 === obj.prefix.length) {
        if (1 === arg0.length) {
          const transaction = tmp.transaction;
          obj = { type: "messages.trim_orphans", table: null, channelKey: null, messageKey: null };
          obj[1] = tmp.tableId;
          obj[2] = arg0[0];
          obj[3] = tmp.prefix[0];
          transaction.add(obj);
        }
      }
      error = new Error("trimOrphans: only one prefix component is supported at this time");
      throw error;
    },
    trimChannel(key) {
      const transaction = obj.transaction;
      obj = { type: "messages.trim_channel", table: obj.tableId, key: obj(closure_1_1[1]).combineKey(obj.prefix, key), limit: arg1 };
      transaction.add(obj);
    },
    trimChannelsIn(arg0, arg1) {
      if (1 === obj.prefix.length) {
        if (1 === arg0.length) {
          const transaction = tmp.transaction;
          obj = { type: "messages.trim_channels_in", table: null, channelKey: null, messageKey: null, limit: null };
          obj[1] = tmp.tableId;
          obj[2] = arg0[0];
          obj[3] = tmp.prefix[0];
          obj[4] = arg1;
          transaction.add(obj);
        }
      }
      error = new Error("trimChannelsIn: only one prefix component is supported at this time");
      throw error;
    },
    trimChannelsNotIn(arg0, arg1) {
      if (1 === obj.prefix.length) {
        if (1 === arg0.length) {
          const transaction = tmp.transaction;
          obj = { type: "messages.trim_channels_not_in", table: null, channelKey: null, messageKey: null, limit: null };
          obj[1] = tmp.tableId;
          obj[2] = arg0[0];
          obj[3] = tmp.prefix[0];
          obj[4] = arg1;
          transaction.add(obj);
        }
      }
      error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
      throw error;
    }
  };
  obj.prefix = prefix;
  obj.tableId = tableId;
  obj.transaction = transaction;
  return obj;
};
prototype["put"] = function put(key) {
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  const transaction = this.transaction;
  let obj = { type: "kv.put_one", table: this.tableId, cell: null, overwrite: null };
  const prefix = this.prefix;
  let tmp3 = key;
  if (0 !== prefix.length) {
    obj = { key: null, data: null, generation: null };
    obj[0] = combineKey.combineKey(prefix, key.key);
    ({ data: obj2[1], generation: obj2[2] } = key);
    tmp3 = obj;
    const obj3 = combineKey;
  }
  obj[2] = tmp3;
  obj[3] = Replace === TableId.ConflictOptions.Replace;
  transaction.add(obj);
};
prototype["putAll"] = function putAll(arr) {
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = prefix(1962).ConflictOptions.Replace;
  }
  const transaction = this.transaction;
  const obj = { type: "kv.put_many", table: this.tableId, cells: null, overwrite: null };
  prefix = this.prefix;
  let mapped = arr;
  if (0 !== prefix.length) {
    mapped = arr.map((key) => {
      let tmp2 = key;
      if (0 !== prefix.length) {
        const obj = { key: null, data: null, generation: null };
        obj[0] = prefix(closure_1_1[1]).combineKey(tmp, key.key);
        ({ data: obj[1], generation: obj[2] } = key);
        tmp2 = obj;
        const obj2 = prefix(closure_1_1[1]);
      }
      return tmp2;
    });
  }
  obj[2] = mapped;
  obj[3] = Replace === prefix(1962).ConflictOptions.Replace;
  transaction.add(obj);
};
prototype["delete"] = function delete(items) {
  if (items === undefined) {
    items = [];
  }
  const transaction = this.transaction;
  const obj = { type: "kv.delete_many", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items) };
  transaction.add(obj);
};
prototype["deleteRange"] = function deleteRange(key, key) {
  let obj = combineKey;
  const combineKeyResult = obj.combineKey(this.prefix, key);
  const transaction = this.transaction;
  obj = { type: "kv.delete_range", table: this.tableId, range: null };
  const items = [combineKeyResult, combineKey.combineKey(this.prefix, key)];
  obj[2] = items;
  transaction.add(obj);
};
prototype["deleteAllExcept"] = function deleteAllExcept(items) {
  if (items === undefined) {
    items = [];
  }
  const transaction = this.transaction;
  const obj = { type: "kv.delete_all_except", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items), retain: arg1 };
  transaction.add(obj);
};
prototype["deleteGeneration"] = function deleteGeneration(items) {
  if (items === undefined) {
    items = [];
  }
  const transaction = this.transaction;
  const obj = { type: "kv.delete_generation", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items), generation: arg2, comparer: arg1 };
  transaction.add(obj);
};
const result = require("set").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Table.tsx");
class Table {
  constructor(arg0, arg1, arg2, arg3) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.messages = {
      getLatest(guildId) {
            const database = obj.database;
            obj = { type: "messages.get_latest", table: obj.tableId, guildId };
            return database.execute(obj, obj.defaultDebugTag);
          }
    };
    obj.prefix = global;
    obj.tableId = arg1;
    obj.database = importDefault;
    tmp2 = null;
    obj.defaultDebugTag = tmp2;
    return obj;
  }
}
const prototype2 = Table.prototype;
prototype2["close"] = function close() {
  const database = this.database;
  database.close();
};
prototype2["get"] = function get(arg0) {
  closure_0 = arg0;
  const self = this;
  return callback(function*() {
    yield many.getMany(closure_1_0, { limit: 1 });
    const first = arg1[0];
    c0 = first;
    if (first == null) {
      c0 = null;
    }
    return c0;
  })();
};
prototype2["getMany"] = function getMany(items, ordering) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_many", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items), ordering: null, limit: null };
  ordering = undefined;
  if (ordering != null) {
    ordering = ordering.ordering;
  }
  obj[3] = ordering;
  let limit;
  if (ordering != null) {
    limit = ordering.limit;
  }
  obj[4] = limit;
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["getRange"] = function getRange(key, key, ordering) {
  let obj = combineKey;
  const combineKeyResult = obj.combineKey(this.prefix, key);
  const database = this.database;
  obj = { type: "kv.get_range", table: this.tableId, range: null, ordering: null, limit: null };
  const items = [combineKeyResult, combineKey.combineKey(this.prefix, key)];
  obj[2] = items;
  ordering = undefined;
  if (ordering != null) {
    ordering = ordering.ordering;
  }
  obj[3] = ordering;
  let limit;
  if (ordering != null) {
    limit = ordering.limit;
  }
  obj[4] = limit;
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["getKvEntries"] = function getKvEntries(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_kv_entries", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items) };
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["getMapEntries"] = function getMapEntries(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_map_entries", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items) };
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["getChildIds"] = function getChildIds(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_child_ids", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items) };
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["getParentId"] = function getParentId(key) {
  let items = key;
  if (key === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_parent_id", table: this.tableId, key: combineKey.combineKey(this.prefix, items) };
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["put"] = function put(key) {
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  const database = this.database;
  let obj = { type: "kv.put_one", table: this.tableId, cell: null, overwrite: null };
  const prefix = this.prefix;
  let tmp3 = key;
  if (0 !== prefix.length) {
    obj = { key: null, data: null, generation: null };
    obj[0] = combineKey.combineKey(prefix, key.key);
    ({ data: obj2[1], generation: obj2[2] } = key);
    tmp3 = obj;
    const obj3 = combineKey;
  }
  obj[2] = tmp3;
  obj[3] = Replace === TableId.ConflictOptions.Replace;
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["putAll"] = function putAll(arr) {
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = prefix(1962).ConflictOptions.Replace;
  }
  const database = this.database;
  let obj = { type: "kv.put_many", table: this.tableId, cells: null, overwrite: null };
  prefix = this.prefix;
  let mapped = arr;
  if (0 !== prefix.length) {
    mapped = arr.map((key) => {
      let tmp2 = key;
      if (0 !== prefix.length) {
        const obj = { key: null, data: null, generation: null };
        obj[0] = prefix(closure_1_1[1]).combineKey(tmp, key.key);
        ({ data: obj[1], generation: obj[2] } = key);
        tmp2 = obj;
        const obj2 = prefix(closure_1_1[1]);
      }
      return tmp2;
    });
  }
  obj[2] = mapped;
  obj[3] = Replace === prefix(1962).ConflictOptions.Replace;
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["replaceAll"] = function replaceAll(arg0) {
  closure_0 = arg0;
  return this.transaction((arg0) => {
    arg0.delete();
    arg0.putAll(closure_0);
  }, this.defaultDebugTag);
};
prototype2["delete"] = function delete(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.delete_many", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items) };
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["deleteRange"] = function deleteRange(key, key) {
  let obj = combineKey;
  const combineKeyResult = obj.combineKey(this.prefix, key);
  const database = this.database;
  obj = { type: "kv.delete_range", table: this.tableId, range: null };
  const items = [combineKeyResult, combineKey.combineKey(this.prefix, key)];
  obj[2] = items;
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["deleteGeneration"] = function deleteGeneration(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.delete_generation", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items), generation: arg2, comparer: arg1 };
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["transaction"] = function transaction(arg0, arg1) {
  const self = this;
  closure_0 = arg0;
  const database = this.database;
  return database.transaction((transaction) => {
    ({ prefix, tableId } = self);
    if (typeof closure_1_3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = Object.create(closure_1_3.prototype);
    obj.messages = {
      trimOrphans(arg0) {
        if (1 === obj.prefix.length) {
          if (1 === arg0.length) {
            const transaction = tmp.transaction;
            obj = { type: "messages.trim_orphans", table: null, channelKey: null, messageKey: null };
            obj[1] = tmp.tableId;
            obj[2] = arg0[0];
            obj[3] = tmp.prefix[0];
            transaction.add(obj);
          }
        }
        error = new Error("trimOrphans: only one prefix component is supported at this time");
        throw error;
      },
      trimChannel(key) {
        const transaction = obj.transaction;
        obj = { type: "messages.trim_channel", table: obj.tableId, key: obj(closure_1_1[1]).combineKey(obj.prefix, key), limit: arg1 };
        transaction.add(obj);
      },
      trimChannelsIn(arg0, arg1) {
        if (1 === obj.prefix.length) {
          if (1 === arg0.length) {
            const transaction = tmp.transaction;
            obj = { type: "messages.trim_channels_in", table: null, channelKey: null, messageKey: null, limit: null };
            obj[1] = tmp.tableId;
            obj[2] = arg0[0];
            obj[3] = tmp.prefix[0];
            obj[4] = arg1;
            transaction.add(obj);
          }
        }
        error = new Error("trimChannelsIn: only one prefix component is supported at this time");
        throw error;
      },
      trimChannelsNotIn(arg0, arg1) {
        if (1 === obj.prefix.length) {
          if (1 === arg0.length) {
            const transaction = tmp.transaction;
            obj = { type: "messages.trim_channels_not_in", table: null, channelKey: null, messageKey: null, limit: null };
            obj[1] = tmp.tableId;
            obj[2] = arg0[0];
            obj[3] = tmp.prefix[0];
            obj[4] = arg1;
            transaction.add(obj);
          }
        }
        error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
        throw error;
      }
    };
    obj.prefix = prefix;
    obj.tableId = tableId;
    obj.transaction = transaction;
    return obj(obj);
  }, arg1);
};
prototype2["upgradeTransaction"] = function upgradeTransaction(transaction) {
  ({ prefix, tableId } = this);
  if (typeof TableTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(TableTransaction.prototype);
  obj.messages = {
    trimOrphans(arg0) {
      if (1 === obj.prefix.length) {
        if (1 === arg0.length) {
          const transaction = tmp.transaction;
          obj = { type: "messages.trim_orphans", table: null, channelKey: null, messageKey: null };
          obj[1] = tmp.tableId;
          obj[2] = arg0[0];
          obj[3] = tmp.prefix[0];
          transaction.add(obj);
        }
      }
      error = new Error("trimOrphans: only one prefix component is supported at this time");
      throw error;
    },
    trimChannel(key) {
      const transaction = obj.transaction;
      obj = { type: "messages.trim_channel", table: obj.tableId, key: obj(closure_1_1[1]).combineKey(obj.prefix, key), limit: arg1 };
      transaction.add(obj);
    },
    trimChannelsIn(arg0, arg1) {
      if (1 === obj.prefix.length) {
        if (1 === arg0.length) {
          const transaction = tmp.transaction;
          obj = { type: "messages.trim_channels_in", table: null, channelKey: null, messageKey: null, limit: null };
          obj[1] = tmp.tableId;
          obj[2] = arg0[0];
          obj[3] = tmp.prefix[0];
          obj[4] = arg1;
          transaction.add(obj);
        }
      }
      error = new Error("trimChannelsIn: only one prefix component is supported at this time");
      throw error;
    },
    trimChannelsNotIn(arg0, arg1) {
      if (1 === obj.prefix.length) {
        if (1 === arg0.length) {
          const transaction = tmp.transaction;
          obj = { type: "messages.trim_channels_not_in", table: null, channelKey: null, messageKey: null, limit: null };
          obj[1] = tmp.tableId;
          obj[2] = arg0[0];
          obj[3] = tmp.prefix[0];
          obj[4] = arg1;
          transaction.add(obj);
        }
      }
      error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
      throw error;
    }
  };
  obj.prefix = prefix;
  obj.tableId = tableId;
  obj.transaction = transaction;
  return obj;
};
prototype2["getManySyncUnsafe"] = function getManySyncUnsafe(items, ordering) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_many", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items), ordering: null, limit: null };
  ordering = undefined;
  if (ordering != null) {
    ordering = ordering.ordering;
  }
  obj[3] = ordering;
  let limit;
  if (ordering != null) {
    limit = ordering.limit;
  }
  obj[4] = limit;
  return database.executeSync(obj);
};
prototype2["getMapEntriesSyncUnsafe"] = function getMapEntriesSyncUnsafe(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_map_entries", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items) };
  return database.executeSync(obj);
};
prototype2["deleteSyncUnsafe"] = function deleteSyncUnsafe(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.delete_many", table: this.tableId, key: combineKey.combineKeyPrefix(this.prefix, items) };
  database.executeSync(obj);
};

export { Table };
export { TableTransaction };