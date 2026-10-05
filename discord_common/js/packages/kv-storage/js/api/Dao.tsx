// discord_common/js/packages/kv-storage/js/api/Dao.tsx
import Table from "Table.tsx";
import TableId from "../types/index.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

class Dao {
  constructor(basic_channels, KvCache, database) {
    const obj = Object.create(new.target.prototype);
    obj.originalPrefix = basic_channels;
    const items = [basic_channels];
    const table = new Table.Table(items, KvCache, database, flag);
    obj.table = table;
    return obj;
  }
  withoutLogging() {
    const originalPrefix = this.originalPrefix;
    const tableId = this.table.tableId;
    const database = this.table.database;
    if (typeof Dao === "function") {
      const obj = Object.create(Dao.prototype);
      obj.originalPrefix = originalPrefix;
      const items = [originalPrefix];
      const self = this;
      const self2 = this;
      const table = new Table.Table(items, tableId, database, false);
      obj.table = table;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  get(arg0) {
    const table = this.table;
    const items = [arg0];
    return table.get(items);
  }
  getMany(arg0) {
    const table = this.table;
    return table.getMany([], arg0);
  }
  getRange(arg0, arg1, arg2) {
    const table = this.table;
    const items = [arg0];
    const items1 = [arg1];
    return table.getRange(items, items1, arg2);
  }
  getKvEntries() {
    const table = this.table;
    return table.getKvEntries();
  }
  getMapEntries() {
    const table = this.table;
    return table.getMapEntries();
  }
  getIds() {
    const table = this.table;
    return table.getChildIds([]);
  }
  getParentId(arg0) {
    const table = this.table;
    const items = [null, arg0];
    return table.getParentId(items);
  }
  put(arg0, data) {
    let items;
    let Replace = arg2;
    if (arg2 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const table = this.table;
    const obj = { key: items, data, generation: null };
    items = [arg0];
    return table.put(obj, Replace);
  }
  delete(arg0) {
    let deleteResult;
    const self = this;
    if (0 === arguments.length) {
      const table2 = self.table;
      deleteResult = table2.delete();
    } else {
      const table = self.table;
      const items = [arg0];
      deleteResult = table.delete(items);
    }
    return deleteResult;
  }
  transaction(arg0, arg1) {
    let closure_0 = arg0;
    const table = this.table;
    return table.transaction((transaction) => {
      if (typeof DaoTransaction === "function") {
        const obj = Object.create(tmp2.prototype);
        obj.transaction = transaction;
        return tmp(obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, arg1);
  }
  upgradeTransaction(arg0) {
    if (typeof DaoTransaction === "function") {
      const obj = Object.create(DaoTransaction.prototype);
      obj.transaction = tmp2;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getManySyncUnsafe(arg0) {
    const table = this.table;
    return table.getManySyncUnsafe([], arg0);
  }
  getMapEntriesSyncUnsafe() {
    const table = this.table;
    return table.getMapEntriesSyncUnsafe();
  }
}
Object.defineProperty(Dao.prototype, "prefix", {
  get: function prefix() {
    return this.table.prefix;
  },
  set: undefined,
});
class DaoTransaction {
  constructor(transaction) {
    const obj = Object.create(new.target.prototype);
    obj.transaction = transaction;
    return obj;
  }
  static fromDatabaseTransaction(prefix, tableId, transaction) {
    const tableTransaction = new Table.TableTransaction(prefix, tableId, transaction);
    if (typeof DaoTransaction === "function") {
      const obj = Object.create(DaoTransaction.prototype);
      obj.transaction = tableTransaction;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  put(arg0, data) {
    let items;
    let Replace = arg2;
    if (arg2 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const transaction = this.transaction;
    const obj = { key: items, data, generation: null };
    items = [arg0];
    transaction.put(obj, Replace);
  }
  delete(arg0) {
    let deleteResult;
    const self = this;
    if (0 === arguments.length) {
      const transaction2 = self.transaction;
      deleteResult = transaction2.delete();
    } else {
      const transaction = self.transaction;
      const items = [arg0];
      deleteResult = transaction.delete(items);
    }
    return deleteResult;
  }
}
const prototype = DaoTransaction.prototype;
const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Dao.tsx");

export { Dao };
export { DaoTransaction };
