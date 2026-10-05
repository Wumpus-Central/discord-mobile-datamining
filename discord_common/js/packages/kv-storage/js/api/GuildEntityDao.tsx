// === Module 2091: GuildEntityDao ===

// Module 2091 (GuildEntityDao)
import Table from "Table" /* 2083 */;
import TableId from "TableId" /* 2085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

class GuildEntityDao {
  constructor(guild_channels, KvCache, database) {
    const obj = Object.create(new.target.prototype);
    obj.originalPrefix = guild_channels;
    const items = [guild_channels];
    const table = new Table.Table(items, KvCache, database, flag);
    obj.table = table;
    return obj;
  }
  withoutLogging() {
    const originalPrefix = this.originalPrefix;
    const tableId = this.table.tableId;
    const database = this.table.database;
    if (typeof GuildEntityDao === "function") {
      const obj = Object.create(GuildEntityDao.prototype);
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
  get(arg0, arg1) {
    const table = this.table;
    const items = [arg0, arg1];
    return table.get(items);
  }
  getMany(arg0, arg1) {
    const table = this.table;
    const items = [arg0];
    return table.getMany(items, arg1);
  }
  getRange(arg0, arg1, arg2, arg3) {
    const table = this.table;
    const items = [arg0, arg1];
    const items1 = [arg0, arg2];
    return table.getRange(items, items1, arg3);
  }
  getKvEntries() {
    const table = this.table;
    return table.getKvEntries();
  }
  getMapEntries() {
    const table = this.table;
    return table.getMapEntries();
  }
  getIds(arg0) {
    const table = this.table;
    const items = [arg0];
    return table.getChildIds(items);
  }
  getGuildIds() {
    const table = this.table;
    return table.getChildIds([]);
  }
  getGuildId(arg0) {
    const table = this.table;
    const items = [null, arg0];
    return table.getParentId(items);
  }
  put(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let Replace = arg2;
    if (arg2 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    return this.transaction((put) => put.put(closure_0, closure_1, Replace), "" + this.prefix + " put");
  }
  putAll(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let Replace = arg2;
    if (arg2 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    return this.transaction((putAll) => putAll.putAll(closure_0, closure_1, Replace), "" + this.prefix + " putAll");
  }
  replaceAll(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return this.transaction((str) => str.replaceAll(closure_0, closure_1), "" + this.prefix + " replaceAll");
  }
  delete(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return this.transaction((arg0) => arg0.delete(closure_0, closure_1), "" + this.prefix + " delete");
  }
  deleteGeneration(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return this.transaction((deleteGeneration) => deleteGeneration.deleteGeneration(closure_0, closure_1), "" + this.prefix + " deleteGeneration");
  }
  transaction(arg0, arg1) {
    let closure_0 = arg0;
    const table = this.table;
    return table.transaction((transaction) => {
      if (typeof GuildEntityDaoTransaction === "function") {
        const obj = Object.create(tmp2.prototype);
        obj.transaction = transaction;
        return tmp(obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, arg1);
  }
  upgradeTransaction(arg0) {
    if (typeof GuildEntityDaoTransaction === "function") {
      const obj = Object.create(GuildEntityDaoTransaction.prototype);
      obj.transaction = tmp2;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getManySyncUnsafe(arg0, arg1) {
    const table = this.table;
    const items = [arg0];
    return table.getManySyncUnsafe(items, arg1);
  }
  getMapEntriesSyncUnsafe() {
    const table = this.table;
    return table.getMapEntriesSyncUnsafe();
  }
  deleteSyncUnsafe(arg0) {
    const table = this.table;
    const items = [arg0];
    return table.deleteSyncUnsafe(items);
  }
  static cell(arg0, data, generation) {
    let items;
    const obj = { key: items, data, generation };
    items = [arg0, data.id];
    return obj;
  }
}
Object.defineProperty(GuildEntityDao.prototype, "prefix", {
  get: function prefix() {
    return this.table.prefix;
  },
  set: undefined
});
class GuildEntityDaoTransaction {
  constructor(transaction) {
    const obj = Object.create(new.target.prototype);
    obj.transaction = transaction;
    return obj;
  }
  static fromDatabaseTransaction(prefix, tableId, transaction) {
    const tableTransaction = new Table.TableTransaction(prefix, tableId, transaction);
    if (typeof GuildEntityDaoTransaction === "function") {
      const obj = Object.create(GuildEntityDaoTransaction.prototype);
      obj.transaction = tableTransaction;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  put(arg0, arg1) {
    let Replace = arg2;
    if (arg2 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    return this.putWithGeneration(arg0, arg1, null, Replace);
  }
  putWithGeneration(arg0, arg1, arg2) {
    let Replace = arg3;
    if (arg3 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const transaction = this.transaction;
    return transaction.put(GuildEntityDao.cell(arg0, arg1, arg2), Replace);
  }
  putAll(arg0, arr) {
    let closure_0;
    _require = arg0;
    let Replace = arg2;
    if (arg2 === undefined) {
      Replace = require("TableId").ConflictOptions.Replace;
    }
    const transaction = this.transaction;
    return transaction.putAll(arr.map((item) => GuildEntityDao.cell(closure_0, item, null)), Replace);
  }
  replaceAll(arg0, arg1) {
    this.delete(arg0);
    this.putAll(arg0, arg1);
  }
  delete(arg0, arg1) {
    const length = arguments.length;
    const self = this;
    if (0 === length) {
      const transaction3 = self.transaction;
      return transaction3.delete([]);
    } else if (1 === length) {
      const transaction2 = self.transaction;
      const items = [arg0];
      return transaction2.delete(items);
    } else {
      const transaction = self.transaction;
      const items1 = [arg0, arg1];
      return transaction.delete(items1);
    }
  }
  deleteAllExcept(arg0) {
    const transaction = this.transaction;
    transaction.deleteAllExcept([], arg0);
  }
  deleteGeneration(arg0, arg1) {
    const transaction = this.transaction;
    return transaction.deleteGeneration([], arg0, arg1);
  }
}
const prototype = GuildEntityDaoTransaction.prototype;
const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/GuildEntityDao.tsx");

export { GuildEntityDao };
export { GuildEntityDaoTransaction };