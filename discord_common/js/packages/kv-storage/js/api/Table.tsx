// discord_common/js/packages/kv-storage/js/api/Table.tsx
import Key from "../util/Key.tsx";
import TableId from "../types/index.tsx";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../../../_runtime/metro/00002__.js";

class TableTransaction {
  constructor(prefix, tableId, transaction) {
    const obj = Object.create(new.target.prototype);
    obj.messages = {
      trimOrphans(arg0) {
        if (1 === obj2.prefix.length) {
          if (1 === arg0.length) {
            const transaction = obj2.transaction;
            const obj = {
              type: "messages.trim_orphans",
              table: obj2.tableId,
              channelKey: arg0[0],
              messageKey: obj2.prefix[0],
            };
            transaction.add(obj);
          }
        }
        const error = new Error("trimOrphans: only one prefix component is supported at this time");
        throw error;
      },
      trimChannel(key, limit) {
        const transaction = obj2.transaction;
        const add = transaction.add;
        const obj = {
          type: "messages.trim_channel",
          table: obj2.tableId,
          key: obj2.combineKey(obj2.prefix, key),
          limit,
        };
        obj2 = closure_2_0(self[1]);
        add(obj);
      },
      trimChannelsIn(arg0, limit) {
        if (1 === obj2.prefix.length) {
          if (1 === arg0.length) {
            const transaction = obj2.transaction;
            const obj = {
              type: "messages.trim_channels_in",
              table: obj2.tableId,
              channelKey: arg0[0],
              messageKey: obj2.prefix[0],
              limit,
            };
            transaction.add(obj);
          }
        }
        const error = new Error("trimChannelsIn: only one prefix component is supported at this time");
        throw error;
      },
      trimChannelsNotIn(arg0, limit) {
        if (1 === obj2.prefix.length) {
          if (1 === arg0.length) {
            const transaction = obj2.transaction;
            const obj = {
              type: "messages.trim_channels_not_in",
              table: obj2.tableId,
              channelKey: arg0[0],
              messageKey: obj2.prefix[0],
              limit,
            };
            transaction.add(obj);
          }
        }
        const error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
        throw error;
      },
    };
    obj.prefix = prefix;
    obj.tableId = tableId;
    obj.transaction = transaction;
    return obj;
  }
  static fromDatabaseTransaction(prefix, tableId, transaction) {
    if (typeof TableTransaction === "function") {
      const obj2 = Object.create(tmp.prototype);
      const obj = {
        trimOrphans(arg0) {
          if (1 === obj2.prefix.length) {
            if (1 === arg0.length) {
              const transaction = obj2.transaction;
              const obj = {
                type: "messages.trim_orphans",
                table: obj2.tableId,
                channelKey: arg0[0],
                messageKey: obj2.prefix[0],
              };
              transaction.add(obj);
            }
          }
          const error = new Error("trimOrphans: only one prefix component is supported at this time");
          throw error;
        },
        trimChannel(key, limit) {
          const transaction = obj2.transaction;
          const add = transaction.add;
          const obj = {
            type: "messages.trim_channel",
            table: obj2.tableId,
            key: obj2.combineKey(obj2.prefix, key),
            limit,
          };
          obj2 = closure_2_0(self[1]);
          add(obj);
        },
        trimChannelsIn(arg0, limit) {
          if (1 === obj2.prefix.length) {
            if (1 === arg0.length) {
              const transaction = obj2.transaction;
              const obj = {
                type: "messages.trim_channels_in",
                table: obj2.tableId,
                channelKey: arg0[0],
                messageKey: obj2.prefix[0],
                limit,
              };
              transaction.add(obj);
            }
          }
          const error = new Error("trimChannelsIn: only one prefix component is supported at this time");
          throw error;
        },
        trimChannelsNotIn(arg0, limit) {
          if (1 === obj2.prefix.length) {
            if (1 === arg0.length) {
              const transaction = obj2.transaction;
              const obj = {
                type: "messages.trim_channels_not_in",
                table: obj2.tableId,
                channelKey: arg0[0],
                messageKey: obj2.prefix[0],
                limit,
              };
              transaction.add(obj);
            }
          }
          const error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
          throw error;
        },
      };
      obj2.messages = obj;
      obj2.prefix = prefix;
      obj2.tableId = tableId;
      obj2.transaction = transaction;
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  put(key) {
    let obj3;
    let tmp3;
    let Replace = arg1;
    if (arg1 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const transaction = this.transaction;
    const prefix = this.prefix;
    const obj = {
      type: "kv.put_one",
      table: this.tableId,
      cell: tmp3,
      overwrite: Replace === TableId.ConflictOptions.Replace,
    };
    tmp3 = key;
    const add = transaction.add;
    if (0 !== prefix.length) {
      const obj4 = { key: obj3.combineKey(prefix, key.key), data: null, generation: null };
      ({ data: obj2.data, generation: obj2.generation } = key);
      tmp3 = obj4;
      obj3 = Key;
    }
    add(obj);
  }
  putAll(arr) {
    let mapped;
    let prefix;
    let Replace = arg1;
    if (arg1 === undefined) {
      Replace = prefix(2085).ConflictOptions.Replace;
    }
    const transaction = this.transaction;
    const obj = {
      type: "kv.put_many",
      table: this.tableId,
      cells: mapped,
      overwrite: Replace === prefix(2085).ConflictOptions.Replace,
    };
    prefix = this.prefix;
    mapped = arr;
    const add = transaction.add;
    if (0 !== prefix.length) {
      mapped = arr.map((key) => {
        let obj2;
        let tmp2 = key;
        if (0 !== prefix.length) {
          const obj = { key: obj2.combineKey(tmp, key.key), data: null, generation: null };
          ({ data: obj.data, generation: obj.generation } = key);
          tmp2 = obj;
          obj2 = Key;
        }
        return tmp2;
      });
    }
    add(obj);
  }
  delete() {
    let items;
    let obj2;
    if (items === undefined) {
      items = [];
    }
    const transaction = this.transaction;
    const add = transaction.add;
    const obj = { type: "kv.delete_many", table: this.tableId, key: obj2.combineKeyPrefix(this.prefix, items) };
    obj2 = Key;
    add(obj);
  }
  deleteRange(key, key2) {
    let items;
    const obj = Key;
    const transaction = this.transaction;
    const obj3 = { type: "kv.delete_range", table: this.tableId, range: items };
    items = [obj.combineKey(this.prefix, key)];
    const combineKeyResult = obj.combineKey(this.prefix, key);
    const obj2 = Key;
    items[1] = obj2.combineKey(this.prefix, key);
    transaction.add(obj3);
  }
  deleteAllExcept() {
    let items;
    let obj2;
    if (items === undefined) {
      items = [];
    }
    const transaction = this.transaction;
    const add = transaction.add;
    const obj = {
      type: "kv.delete_all_except",
      table: this.tableId,
      key: obj2.combineKeyPrefix(this.prefix, items),
      retain,
    };
    obj2 = Key;
    add(obj);
  }
  deleteGeneration() {
    let items;
    let obj2;
    if (items === undefined) {
      items = [];
    }
    const transaction = this.transaction;
    const add = transaction.add;
    const obj = {
      type: "kv.delete_generation",
      table: this.tableId,
      key: obj2.combineKeyPrefix(this.prefix, items),
      generation,
      comparer,
    };
    obj2 = Key;
    add(obj);
  }
}
const prototype = TableTransaction.prototype;
const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Table.tsx");
class Table {
  constructor(items, tableId, database, flag) {
    let obj = Object.create(new.target.prototype);
    obj.messages = {
      getLatest(guildId) {
        const database = obj.database;
        obj = { type: "messages.get_latest", table: obj.tableId, guildId };
        return database.execute(obj, obj.defaultDebugTag);
      },
    };
    obj.prefix = items;
    obj.tableId = tableId;
    obj.database = database;
    obj.defaultDebugTag = null;
    return obj;
  }
  close() {
    const database = this.database;
    database.close();
  }
  get(arg0) {
    let closure_0 = arg0;
    const self = this;
    return (async () => {
      let c1;
      let c2;
      let value;
      await self.getMany(closure_0, { limit: 1 });
      const first = value[0];
      value = first;
      if (first == null) {
        value = null;
      }
      return value;
    })();
  }
  getMany() {
    let items;
    let limit;
    let obj2;
    let ordering;
    if (items === undefined) {
      items = [];
    }
    const database = this.database;
    const execute = database.execute;
    const obj = {
      type: "kv.get_many",
      table: this.tableId,
      key: obj2.combineKeyPrefix(this.prefix, items),
      ordering,
      limit,
    };
    ordering = undefined;
    obj2 = Key;
    if (ordering != null) {
      ordering = ordering.ordering;
    }
    limit = undefined;
    if (ordering != null) {
      limit = ordering.limit;
    }
    return execute(obj, this.defaultDebugTag);
  }
  getRange(key, key2, ordering) {
    let items;
    let limit;
    const obj = Key;
    const database = this.database;
    const obj3 = { type: "kv.get_range", table: this.tableId, range: items, ordering, limit };
    items = [obj.combineKey(this.prefix, key)];
    const combineKeyResult = obj.combineKey(this.prefix, key);
    const obj2 = Key;
    items[1] = obj2.combineKey(this.prefix, key);
    ordering = undefined;
    const execute = database.execute;
    if (ordering != null) {
      ordering = ordering.ordering;
    }
    limit = undefined;
    if (ordering != null) {
      limit = ordering.limit;
    }
    return execute(obj3, this.defaultDebugTag);
  }
  getKvEntries() {
    let items;
    let obj2;
    if (items === undefined) {
      items = [];
    }
    const database = this.database;
    const execute = database.execute;
    const obj = { type: "kv.get_kv_entries", table: this.tableId, key: obj2.combineKeyPrefix(this.prefix, items) };
    obj2 = Key;
    return execute(obj, this.defaultDebugTag);
  }
  getMapEntries() {
    let items;
    let obj2;
    if (items === undefined) {
      items = [];
    }
    const database = this.database;
    const execute = database.execute;
    const obj = { type: "kv.get_map_entries", table: this.tableId, key: obj2.combineKeyPrefix(this.prefix, items) };
    obj2 = Key;
    return execute(obj, this.defaultDebugTag);
  }
  getChildIds() {
    let items;
    let obj2;
    if (items === undefined) {
      items = [];
    }
    const database = this.database;
    const execute = database.execute;
    const obj = { type: "kv.get_child_ids", table: this.tableId, key: obj2.combineKeyPrefix(this.prefix, items) };
    obj2 = Key;
    return execute(obj, this.defaultDebugTag);
  }
  getParentId() {
    let obj2;
    let items = key;
    if (key === undefined) {
      items = [];
    }
    const database = this.database;
    const execute = database.execute;
    const obj = { type: "kv.get_parent_id", table: this.tableId, key: obj2.combineKey(this.prefix, items) };
    obj2 = Key;
    return execute(obj, this.defaultDebugTag);
  }
  put(key) {
    let obj3;
    let tmp3;
    let Replace = arg1;
    if (arg1 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const database = this.database;
    const prefix = this.prefix;
    const obj = {
      type: "kv.put_one",
      table: this.tableId,
      cell: tmp3,
      overwrite: Replace === TableId.ConflictOptions.Replace,
    };
    tmp3 = key;
    const execute = database.execute;
    if (0 !== prefix.length) {
      const obj4 = { key: obj3.combineKey(prefix, key.key), data: null, generation: null };
      ({ data: obj2.data, generation: obj2.generation } = key);
      tmp3 = obj4;
      obj3 = Key;
    }
    return execute(obj, this.defaultDebugTag);
  }
  putAll(arr) {
    let mapped;
    let prefix;
    let Replace = arg1;
    if (arg1 === undefined) {
      const tmp = prefix;
      Replace = prefix(2085).ConflictOptions.Replace;
    }
    const database = this.database;
    let obj = {
      type: "kv.put_many",
      table: this.tableId,
      cells: mapped,
      overwrite: Replace === prefix(2085).ConflictOptions.Replace,
    };
    prefix = this.prefix;
    mapped = arr;
    const execute = database.execute;
    if (0 !== prefix.length) {
      mapped = arr.map((key) => {
        let obj2;
        let tmp2 = key;
        if (0 !== prefix.length) {
          const obj = { key: obj2.combineKey(tmp, key.key), data: null, generation: null };
          ({ data: obj.data, generation: obj.generation } = key);
          tmp2 = obj;
          obj2 = Key;
        }
        return tmp2;
      });
    }
    return execute(obj, this.defaultDebugTag);
  }
  replaceAll(arg0) {
    let closure_0 = arg0;
    return this.transaction((arg0) => {
      arg0.delete();
      arg0.putAll(closure_0);
    }, this.defaultDebugTag);
  }
  delete() {
    let items;
    let obj2;
    if (items === undefined) {
      items = [];
    }
    const database = this.database;
    const execute = database.execute;
    const obj = { type: "kv.delete_many", table: this.tableId, key: obj2.combineKeyPrefix(this.prefix, items) };
    obj2 = Key;
    return execute(obj, this.defaultDebugTag);
  }
  deleteRange(key, key2) {
    let items;
    const obj = Key;
    const database = this.database;
    const obj3 = { type: "kv.delete_range", table: this.tableId, range: items };
    items = [obj.combineKey(this.prefix, key)];
    const combineKeyResult = obj.combineKey(this.prefix, key);
    const obj2 = Key;
    items[1] = obj2.combineKey(this.prefix, key);
    return database.execute(obj3, this.defaultDebugTag);
  }
  deleteGeneration() {
    let items;
    let obj2;
    if (items === undefined) {
      items = [];
    }
    const database = this.database;
    const execute = database.execute;
    const obj = {
      type: "kv.delete_generation",
      table: this.tableId,
      key: obj2.combineKeyPrefix(this.prefix, items),
      generation,
      comparer,
    };
    obj2 = Key;
    return execute(obj, this.defaultDebugTag);
  }
  transaction(arg0, arg1) {
    const self = this;
    let closure_0 = arg0;
    const database = this.database;
    return database.transaction((transaction) => {
      if (typeof TableTransaction === "function") {
        let obj2 = Object.create(tmp2.prototype);
        let obj = {
          trimOrphans(arg0) {
            if (1 === obj2.prefix.length) {
              if (1 === arg0.length) {
                const transaction = obj2.transaction;
                const obj = {
                  type: "messages.trim_orphans",
                  table: obj2.tableId,
                  channelKey: arg0[0],
                  messageKey: obj2.prefix[0],
                };
                transaction.add(obj);
              }
            }
            const error = new Error("trimOrphans: only one prefix component is supported at this time");
            throw error;
          },
          trimChannel(key, limit) {
            const transaction = obj2.transaction;
            const add = transaction.add;
            const obj = {
              type: "messages.trim_channel",
              table: obj2.tableId,
              key: obj2.combineKey(obj2.prefix, key),
              limit,
            };
            obj2 = closure_2_0(self[1]);
            add(obj);
          },
          trimChannelsIn(arg0, limit) {
            if (1 === obj2.prefix.length) {
              if (1 === arg0.length) {
                const transaction = obj2.transaction;
                const obj = {
                  type: "messages.trim_channels_in",
                  table: obj2.tableId,
                  channelKey: arg0[0],
                  messageKey: obj2.prefix[0],
                  limit,
                };
                transaction.add(obj);
              }
            }
            const error = new Error("trimChannelsIn: only one prefix component is supported at this time");
            throw error;
          },
          trimChannelsNotIn(arg0, limit) {
            if (1 === obj2.prefix.length) {
              if (1 === arg0.length) {
                const transaction = obj2.transaction;
                const obj = {
                  type: "messages.trim_channels_not_in",
                  table: obj2.tableId,
                  channelKey: arg0[0],
                  messageKey: obj2.prefix[0],
                  limit,
                };
                transaction.add(obj);
              }
            }
            const error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
            throw error;
          },
        };
        obj2.messages = obj;
        obj2.prefix = tmp3;
        obj2.tableId = tmp4;
        obj2.transaction = transaction;
        return tmp(obj2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, arg1);
  }
  upgradeTransaction(transaction) {
    if (typeof TableTransaction === "function") {
      const obj2 = Object.create(tmp.prototype);
      const obj = {
        trimOrphans(arg0) {
          if (1 === obj2.prefix.length) {
            if (1 === arg0.length) {
              const transaction = obj2.transaction;
              const obj = {
                type: "messages.trim_orphans",
                table: obj2.tableId,
                channelKey: arg0[0],
                messageKey: obj2.prefix[0],
              };
              transaction.add(obj);
            }
          }
          const error = new Error("trimOrphans: only one prefix component is supported at this time");
          throw error;
        },
        trimChannel(key, limit) {
          const transaction = obj2.transaction;
          const add = transaction.add;
          const obj = {
            type: "messages.trim_channel",
            table: obj2.tableId,
            key: obj2.combineKey(obj2.prefix, key),
            limit,
          };
          obj2 = closure_2_0(self[1]);
          add(obj);
        },
        trimChannelsIn(arg0, limit) {
          if (1 === obj2.prefix.length) {
            if (1 === arg0.length) {
              const transaction = obj2.transaction;
              const obj = {
                type: "messages.trim_channels_in",
                table: obj2.tableId,
                channelKey: arg0[0],
                messageKey: obj2.prefix[0],
                limit,
              };
              transaction.add(obj);
            }
          }
          const error = new Error("trimChannelsIn: only one prefix component is supported at this time");
          throw error;
        },
        trimChannelsNotIn(arg0, limit) {
          if (1 === obj2.prefix.length) {
            if (1 === arg0.length) {
              const transaction = obj2.transaction;
              const obj = {
                type: "messages.trim_channels_not_in",
                table: obj2.tableId,
                channelKey: arg0[0],
                messageKey: obj2.prefix[0],
                limit,
              };
              transaction.add(obj);
            }
          }
          const error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
          throw error;
        },
      };
      obj2.messages = obj;
      obj2.prefix = tmp2;
      obj2.tableId = tmp3;
      obj2.transaction = transaction;
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getManySyncUnsafe() {
    let items;
    let limit;
    let obj2;
    let ordering;
    if (items === undefined) {
      items = [];
    }
    const database = this.database;
    const executeSync = database.executeSync;
    const obj = {
      type: "kv.get_many",
      table: this.tableId,
      key: obj2.combineKeyPrefix(this.prefix, items),
      ordering,
      limit,
    };
    ordering = undefined;
    obj2 = Key;
    if (ordering != null) {
      ordering = ordering.ordering;
    }
    limit = undefined;
    if (ordering != null) {
      limit = ordering.limit;
    }
    return executeSync(obj);
  }
  getMapEntriesSyncUnsafe() {
    let items;
    let obj2;
    if (items === undefined) {
      items = [];
    }
    const database = this.database;
    const executeSync = database.executeSync;
    const obj = { type: "kv.get_map_entries", table: this.tableId, key: obj2.combineKeyPrefix(this.prefix, items) };
    obj2 = Key;
    return executeSync(obj);
  }
  deleteSyncUnsafe() {
    let items;
    let obj2;
    if (items === undefined) {
      items = [];
    }
    const database = this.database;
    const executeSync = database.executeSync;
    const obj = { type: "kv.delete_many", table: this.tableId, key: obj2.combineKeyPrefix(this.prefix, items) };
    obj2 = Key;
    executeSync(obj);
  }
}
const prototype2 = Table.prototype;

export { Table };
export { TableTransaction };
