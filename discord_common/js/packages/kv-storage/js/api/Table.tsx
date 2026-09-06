// discord_common/js/packages/kv-storage/js/api/Table.tsx
import Key from "../util/Key.tsx";
import TableId from "../types/index.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
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
                obj = { type: "messages.trim_orphans", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0] };
                transaction.add(obj);
              }
            }
            const error = new Error("trimOrphans: only one prefix component is supported at this time");
            throw error;
          },
      trimChannel(key, limit) {
            const transaction = obj.transaction;
            obj = { type: "messages.trim_channel", table: obj.tableId, key: messages(self[1]).combineKey(obj.prefix, key), limit };
            transaction.add(obj);
          },
      trimChannelsIn(arg0, limit) {
            if (1 === obj.prefix.length) {
              if (1 === arg0.length) {
                const transaction = tmp.transaction;
                obj = { type: "messages.trim_channels_in", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0], limit };
                transaction.add(obj);
              }
            }
            const error = new Error("trimChannelsIn: only one prefix component is supported at this time");
            throw error;
          },
      trimChannelsNotIn(arg0, limit) {
            if (1 === obj.prefix.length) {
              if (1 === arg0.length) {
                const transaction = tmp.transaction;
                obj = { type: "messages.trim_channels_not_in", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0], limit };
                transaction.add(obj);
              }
            }
            const error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
            throw error;
          }
    };
    obj.prefix = global;
    obj.tableId = fn;
    obj.transaction = importDefault;
    return obj;
  }
}
const prototype = TableTransaction.prototype;
TableTransaction["fromDatabaseTransaction"] = function fromDatabaseTransaction(prefix, tableId, transaction) {
  if (typeof TableTransaction === "function") {
    Object.create(tmp.prototype);
    const messages = {
      trimOrphans(arg0) {
          if (1 === obj.prefix.length) {
            if (1 === arg0.length) {
              const transaction = tmp.transaction;
              obj = { type: "messages.trim_orphans", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0] };
              transaction.add(obj);
            }
          }
          const error = new Error("trimOrphans: only one prefix component is supported at this time");
          throw error;
        },
      trimChannel(key, limit) {
          const transaction = obj.transaction;
          obj = { type: "messages.trim_channel", table: obj.tableId, key: messages(self[1]).combineKey(obj.prefix, key), limit };
          transaction.add(obj);
        },
      trimChannelsIn(arg0, limit) {
          if (1 === obj.prefix.length) {
            if (1 === arg0.length) {
              const transaction = tmp.transaction;
              obj = { type: "messages.trim_channels_in", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0], limit };
              transaction.add(obj);
            }
          }
          const error = new Error("trimChannelsIn: only one prefix component is supported at this time");
          throw error;
        },
      trimChannelsNotIn(arg0, limit) {
          if (1 === obj.prefix.length) {
            if (1 === arg0.length) {
              const transaction = tmp.transaction;
              obj = { type: "messages.trim_channels_not_in", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0], limit };
              transaction.add(obj);
            }
          }
          const error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
          throw error;
        }
    };
    messages.messages = messages;
    messages.prefix = prefix;
    messages.tableId = tableId;
    messages.transaction = transaction;
    return messages;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
    obj = { key: Key.combineKey(prefix, key.key), data: null, generation: null };
    ({ data: obj2.data, generation: obj2.generation } = key);
    tmp3 = obj;
  }
  obj.cell = tmp3;
  obj.overwrite = Replace === TableId.ConflictOptions.Replace;
  transaction.add(obj);
};
prototype["putAll"] = function putAll(arr) {
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = prefix(1993).ConflictOptions.Replace;
  }
  const transaction = this.transaction;
  const obj = { type: "kv.put_many", table: this.tableId, cells: null, overwrite: null };
  prefix = this.prefix;
  let mapped = arr;
  if (0 !== prefix.length) {
    mapped = arr.map((key) => {
      let tmp2 = key;
      if (0 !== prefix.length) {
        const obj = { key: Key.combineKey(tmp, key.key), data: null, generation: null };
        ({ data: obj.data, generation: obj.generation } = key);
        tmp2 = obj;
      }
      return tmp2;
    });
  }
  obj.cells = mapped;
  obj.overwrite = Replace === prefix(1993).ConflictOptions.Replace;
  transaction.add(obj);
};
prototype["delete"] = function delete(items) {
  if (items === undefined) {
    items = [];
  }
  const transaction = this.transaction;
  const obj = { type: "kv.delete_many", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items) };
  transaction.add(obj);
};
prototype["deleteRange"] = function deleteRange(key, key) {
  let obj = Key;
  const combineKeyResult = obj.combineKey(this.prefix, key);
  const transaction = this.transaction;
  obj = { type: "kv.delete_range", table: this.tableId, range: null };
  const items = [combineKeyResult, Key.combineKey(this.prefix, key)];
  obj.range = items;
  transaction.add(obj);
};
prototype["deleteAllExcept"] = function deleteAllExcept(items, retain) {
  if (items === undefined) {
    items = [];
  }
  const transaction = this.transaction;
  const obj = { type: "kv.delete_all_except", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items), retain };
  transaction.add(obj);
};
prototype["deleteGeneration"] = function deleteGeneration(items, comparer, generation) {
  if (items === undefined) {
    items = [];
  }
  const transaction = this.transaction;
  const obj = { type: "kv.delete_generation", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items), generation, comparer };
  transaction.add(obj);
};
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Table.tsx");
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
    obj.tableId = fn;
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
  return (async () => {
    await self.getMany(closure_0, { limit: 1 });
    const first = arg1[0];
    value = first;
    if (first == null) {
      value = null;
    }
    return value;
  })();
};
prototype2["getMany"] = function getMany(items, ordering) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_many", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items), ordering: null, limit: null };
  ordering = undefined;
  if (ordering != null) {
    ordering = ordering.ordering;
  }
  obj.ordering = ordering;
  let limit;
  if (ordering != null) {
    limit = ordering.limit;
  }
  obj.limit = limit;
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["getRange"] = function getRange(key, key, ordering) {
  let obj = Key;
  const combineKeyResult = obj.combineKey(this.prefix, key);
  const database = this.database;
  obj = { type: "kv.get_range", table: this.tableId, range: null, ordering: null, limit: null };
  const items = [combineKeyResult, Key.combineKey(this.prefix, key)];
  obj.range = items;
  ordering = undefined;
  if (ordering != null) {
    ordering = ordering.ordering;
  }
  obj.ordering = ordering;
  let limit;
  if (ordering != null) {
    limit = ordering.limit;
  }
  obj.limit = limit;
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["getKvEntries"] = function getKvEntries(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_kv_entries", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items) };
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["getMapEntries"] = function getMapEntries(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_map_entries", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items) };
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["getChildIds"] = function getChildIds(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_child_ids", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items) };
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["getParentId"] = function getParentId(key) {
  let items = key;
  if (key === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_parent_id", table: this.tableId, key: Key.combineKey(this.prefix, items) };
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
    obj = { key: Key.combineKey(prefix, key.key), data: null, generation: null };
    ({ data: obj2.data, generation: obj2.generation } = key);
    tmp3 = obj;
  }
  obj.cell = tmp3;
  obj.overwrite = Replace === TableId.ConflictOptions.Replace;
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["putAll"] = function putAll(arr) {
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = prefix(1993).ConflictOptions.Replace;
  }
  const database = this.database;
  let obj = { type: "kv.put_many", table: this.tableId, cells: null, overwrite: null };
  prefix = this.prefix;
  let mapped = arr;
  if (0 !== prefix.length) {
    mapped = arr.map((key) => {
      let tmp2 = key;
      if (0 !== prefix.length) {
        const obj = { key: Key.combineKey(tmp, key.key), data: null, generation: null };
        ({ data: obj.data, generation: obj.generation } = key);
        tmp2 = obj;
      }
      return tmp2;
    });
  }
  obj.cells = mapped;
  obj.overwrite = Replace === prefix(1993).ConflictOptions.Replace;
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
  const obj = { type: "kv.delete_many", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items) };
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["deleteRange"] = function deleteRange(key, key) {
  let obj = Key;
  const combineKeyResult = obj.combineKey(this.prefix, key);
  const database = this.database;
  obj = { type: "kv.delete_range", table: this.tableId, range: null };
  const items = [combineKeyResult, Key.combineKey(this.prefix, key)];
  obj.range = items;
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["deleteGeneration"] = function deleteGeneration(items, comparer, generation) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.delete_generation", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items), generation, comparer };
  return database.execute(obj, this.defaultDebugTag);
};
prototype2["transaction"] = function transaction(arg0, arg1) {
  const self = this;
  closure_0 = arg0;
  const database = this.database;
  return database.transaction((transaction) => {
    if (typeof TableTransaction === "function") {
      Object.create(tmp2.prototype);
      const messages = {
        trimOrphans(arg0) {
            if (1 === obj.prefix.length) {
              if (1 === arg0.length) {
                const transaction = tmp.transaction;
                obj = { type: "messages.trim_orphans", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0] };
                transaction.add(obj);
              }
            }
            const error = new Error("trimOrphans: only one prefix component is supported at this time");
            throw error;
          },
        trimChannel(key, limit) {
            const transaction = obj.transaction;
            obj = { type: "messages.trim_channel", table: obj.tableId, key: messages(self[1]).combineKey(obj.prefix, key), limit };
            transaction.add(obj);
          },
        trimChannelsIn(arg0, limit) {
            if (1 === obj.prefix.length) {
              if (1 === arg0.length) {
                const transaction = tmp.transaction;
                obj = { type: "messages.trim_channels_in", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0], limit };
                transaction.add(obj);
              }
            }
            const error = new Error("trimChannelsIn: only one prefix component is supported at this time");
            throw error;
          },
        trimChannelsNotIn(arg0, limit) {
            if (1 === obj.prefix.length) {
              if (1 === arg0.length) {
                const transaction = tmp.transaction;
                obj = { type: "messages.trim_channels_not_in", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0], limit };
                transaction.add(obj);
              }
            }
            const error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
            throw error;
          }
      };
      messages.messages = messages;
      messages.prefix = tmp3;
      messages.tableId = tmp4;
      messages.transaction = transaction;
      return tmp(messages);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, arg1);
};
prototype2["upgradeTransaction"] = function upgradeTransaction(transaction) {
  if (typeof TableTransaction === "function") {
    Object.create(tmp.prototype);
    const messages = {
      trimOrphans(arg0) {
          if (1 === obj.prefix.length) {
            if (1 === arg0.length) {
              const transaction = tmp.transaction;
              obj = { type: "messages.trim_orphans", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0] };
              transaction.add(obj);
            }
          }
          const error = new Error("trimOrphans: only one prefix component is supported at this time");
          throw error;
        },
      trimChannel(key, limit) {
          const transaction = obj.transaction;
          obj = { type: "messages.trim_channel", table: obj.tableId, key: messages(self[1]).combineKey(obj.prefix, key), limit };
          transaction.add(obj);
        },
      trimChannelsIn(arg0, limit) {
          if (1 === obj.prefix.length) {
            if (1 === arg0.length) {
              const transaction = tmp.transaction;
              obj = { type: "messages.trim_channels_in", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0], limit };
              transaction.add(obj);
            }
          }
          const error = new Error("trimChannelsIn: only one prefix component is supported at this time");
          throw error;
        },
      trimChannelsNotIn(arg0, limit) {
          if (1 === obj.prefix.length) {
            if (1 === arg0.length) {
              const transaction = tmp.transaction;
              obj = { type: "messages.trim_channels_not_in", table: tmp.tableId, channelKey: arg0[0], messageKey: tmp.prefix[0], limit };
              transaction.add(obj);
            }
          }
          const error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
          throw error;
        }
    };
    messages.messages = messages;
    messages.prefix = tmp2;
    messages.tableId = tmp3;
    messages.transaction = transaction;
    return messages;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype2["getManySyncUnsafe"] = function getManySyncUnsafe(items, ordering) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_many", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items), ordering: null, limit: null };
  ordering = undefined;
  if (ordering != null) {
    ordering = ordering.ordering;
  }
  obj.ordering = ordering;
  let limit;
  if (ordering != null) {
    limit = ordering.limit;
  }
  obj.limit = limit;
  return database.executeSync(obj);
};
prototype2["getMapEntriesSyncUnsafe"] = function getMapEntriesSyncUnsafe(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.get_map_entries", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items) };
  return database.executeSync(obj);
};
prototype2["deleteSyncUnsafe"] = function deleteSyncUnsafe(items) {
  if (items === undefined) {
    items = [];
  }
  const database = this.database;
  const obj = { type: "kv.delete_many", table: this.tableId, key: Key.combineKeyPrefix(this.prefix, items) };
  database.executeSync(obj);
};

export { Table };
export { TableTransaction };