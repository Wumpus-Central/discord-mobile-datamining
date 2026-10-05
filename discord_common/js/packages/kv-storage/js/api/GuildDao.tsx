// discord_common/js/packages/kv-storage/js/api/GuildDao.tsx
import Table from "Table.tsx";
import TableId from "../types/index.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

class GuildDao {
  constructor(guild_channels_temp, KvCache, database) {
    const obj = Object.create(new.target.prototype);
    obj.originalPrefix = guild_channels_temp;
    const items = [guild_channels_temp];
    const table = new Table.Table(items, KvCache, database, flag);
    obj.table = table;
    return obj;
  }
  withoutLogging() {
    const originalPrefix = this.originalPrefix;
    const tableId = this.table.tableId;
    const database = this.table.database;
    if (typeof GuildDao === "function") {
      const obj = Object.create(GuildDao.prototype);
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
  put(arg0, arg1, arg2) {
    let Replace = arg3;
    if (arg3 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    return this.putWithGeneration(arg0, arg1, arg2, null, Replace);
  }
  putWithGeneration(arg0, arg1, data, generation) {
    let items;
    let Replace = arg4;
    if (arg4 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const table = this.table;
    const obj = { key: items, data, generation };
    items = [arg0, arg1];
    return table.put(obj, Replace);
  }
  delete(arg0, arg1) {
    const length = arguments.length;
    const self = this;
    if (0 === length) {
      const table3 = self.table;
      return table3.delete([]);
    } else if (1 === length) {
      const table2 = self.table;
      const items = [arg0];
      return table2.delete(items);
    } else {
      const table = self.table;
      const items1 = [arg0, arg1];
      return table.delete(items1);
    }
  }
  deleteGeneration(arg0, arg1) {
    const table = this.table;
    return table.deleteGeneration([], arg0, arg1);
  }
  transaction(arg0, arg1) {
    let closure_0 = arg0;
    const table = this.table;
    return table.transaction((state) => {
      if (typeof GuildDaoTransaction === "function") {
        const obj = Object.create(tmp2.prototype);
        obj.state = state;
        return tmp(obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, arg1);
  }
  upgradeTransaction(arg0) {
    if (typeof GuildDaoTransaction === "function") {
      const obj = Object.create(GuildDaoTransaction.prototype);
      obj.state = tmp2;
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
}
Object.defineProperty(GuildDao.prototype, "prefix", {
  get: function prefix() {
    return this.table.prefix;
  },
  set: undefined,
});
class GuildDaoTransaction {
  constructor(state) {
    const obj = Object.create(new.target.prototype);
    obj.state = state;
    return obj;
  }
  static fromDatabaseTransaction(prefix, tableId, transaction) {
    const tableTransaction = new Table.TableTransaction(prefix, tableId, transaction);
    if (typeof GuildDaoTransaction === "function") {
      const obj = Object.create(GuildDaoTransaction.prototype);
      obj.state = tableTransaction;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  put(arg0, arg1, arg2) {
    let Replace = arg3;
    if (arg3 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    this.putWithGeneration(arg0, arg1, arg2, null, Replace);
  }
  putWithGeneration(arg0, arg1, data, generation) {
    let items;
    let Replace = arg4;
    if (arg4 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const state = this.state;
    const obj = { key: items, data, generation };
    items = [arg0, arg1];
    return state.put(obj, Replace);
  }
  delete(arg0, arg1) {
    const length = arguments.length;
    const self = this;
    if (0 === length) {
      const state3 = self.state;
      state3.delete([]);
    } else if (1 === length) {
      const state2 = self.state;
      const items = [arg0];
      state2.delete(items);
    } else {
      const state = self.state;
      const items1 = [arg0, arg1];
      state.delete(items1);
    }
  }
  deleteGeneration(arg0, arg1) {
    const state = this.state;
    return state.deleteGeneration([], arg0, arg1);
  }
}
const prototype = GuildDaoTransaction.prototype;
const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/GuildDao.tsx");

export { GuildDao };
export { GuildDaoTransaction };
