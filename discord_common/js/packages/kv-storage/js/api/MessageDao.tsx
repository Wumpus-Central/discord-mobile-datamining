// discord_common/js/packages/kv-storage/js/api/MessageDao.tsx
import Table from "Table.tsx";
import TableId from "../types/index.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

class MessageDao {
  constructor(messages, Messages, database) {
    const obj = Object.create(new.target.prototype);
    obj.originalPrefix = messages;
    const items = [messages];
    const table = new Table.Table(items, Messages, database, flag);
    obj.table = table;
    return obj;
  }
  withoutLogging() {
    const originalPrefix = this.originalPrefix;
    const tableId = this.table.tableId;
    const database = this.table.database;
    if (typeof MessageDao === "function") {
      const obj = Object.create(MessageDao.prototype);
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
  get(arg0, arg1, str) {
    const table = this.table;
    const items = [arg0, arg1];
    const get = table.get;
    items[2] = str.padStart(19, "0");
    return get(items);
  }
  getLatest(arg0, arg1, limit) {
    const table = this.table;
    const items = [arg0, arg1];
    const obj = { ordering: TableId.Ordering.Descending, limit };
    return table.getMany(items, obj);
  }
  getRange(arg0, arg1, str, str2, arg4) {
    const table = this.table;
    const items = [arg0, arg1];
    const getRange = table.getRange;
    items[2] = str.padStart(19, "0");
    const items1 = [arg0, arg1, str2.padStart(19, "0")];
    return getRange(items, items1, arg4);
  }
  getMostRecents(id) {
    const messages = this.table.messages;
    return messages.getLatest(id);
  }
  put(arg0, arg1, data) {
    let items;
    let Replace = arg3;
    if (arg3 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const table = this.table;
    const id = data.id;
    const put = table.put;
    const padStartResult = id.padStart(19, "0");
    const obj = { key: items, data, generation: padStartResult };
    items = [arg0, arg1, padStartResult];
    return put(obj, Replace);
  }
  putAll(arg0, arg1, arr) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let Replace = arg3;
    if (arg3 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const table = this.table;
    return table.putAll(
      arr.map((data) => {
        let items;
        const id = data.id;
        const padStartResult = id.padStart(19, "0");
        const obj = { key: items, data, generation: padStartResult };
        items = [closure_0, closure_1, padStartResult];
        return obj;
      }),
      Replace,
    );
  }
  deleteAll() {
    const table = this.table;
    return table.delete();
  }
  deleteGuild(arg0) {
    const table = this.table;
    const items = [arg0];
    return table.delete(items);
  }
  deleteChannel(arg0, arg1) {
    const table = this.table;
    const items = [arg0, arg1];
    return table.delete(items);
  }
  deleteMessage(arg0, arg1, str) {
    const table = this.table;
    const items = [arg0, arg1];
    const _delete = table.delete;
    items[2] = str.padStart(19, "0");
    return _delete(items);
  }
  transaction(arg0, arg1) {
    let closure_0 = arg0;
    const table = this.table;
    return table.transaction((transaction) => {
      if (typeof MessageDaoTransaction === "function") {
        const obj = Object.create(tmp2.prototype);
        obj.transaction = transaction;
        return tmp(obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, arg1);
  }
  upgradeTransaction(arg0) {
    if (typeof MessageDaoTransaction === "function") {
      const obj = Object.create(MessageDaoTransaction.prototype);
      obj.transaction = tmp2;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
Object.defineProperty(MessageDao.prototype, "prefix", {
  get: function prefix() {
    return this.table.prefix;
  },
  set: undefined,
});
class MessageDaoTransaction {
  constructor(transaction) {
    const obj = Object.create(new.target.prototype);
    obj.transaction = transaction;
    return obj;
  }
  static fromTableTransaction(transaction) {
    if (typeof MessageDaoTransaction === "function") {
      const obj = Object.create(tmp.prototype);
      obj.transaction = transaction;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static fromDatabaseTransaction(prefix, tableId, transaction) {
    const tableTransaction = new Table.TableTransaction(prefix, tableId, transaction);
    if (typeof MessageDaoTransaction === "function") {
      const obj = Object.create(MessageDaoTransaction.prototype);
      obj.transaction = tableTransaction;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  put(arg0, arg1, data) {
    let items;
    let Replace = arg3;
    if (arg3 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const transaction = this.transaction;
    const id = data.id;
    const put = transaction.put;
    const padStartResult = id.padStart(19, "0");
    const obj = { key: items, data, generation: padStartResult };
    items = [arg0, arg1, padStartResult];
    put(obj, Replace);
  }
  putAll(arg0, arg1, arr) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let Replace = arg3;
    if (arg3 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const transaction = this.transaction;
    transaction.putAll(
      arr.map((data) => {
        let items;
        const id = data.id;
        const padStartResult = id.padStart(19, "0");
        const obj = { key: items, data, generation: padStartResult };
        items = [closure_0, closure_1, padStartResult];
        return obj;
      }),
      Replace,
    );
  }
  replaceChannel(arg0, arg1, arg2) {
    this.deleteChannel(arg0, arg1);
    this.putAll(arg0, arg1, arg2);
  }
  deleteAll() {
    const transaction = this.transaction;
    transaction.delete();
  }
  deleteGuild(arg0) {
    const transaction = this.transaction;
    const items = [arg0];
    transaction.delete(items);
  }
  deleteChannel(arg0, arg1) {
    const transaction = this.transaction;
    const items = [arg0, arg1];
    transaction.delete(items);
  }
  deleteMessage(arg0, arg1, str) {
    const transaction = this.transaction;
    const items = [arg0, arg1];
    const _delete = transaction.delete;
    items[2] = str.padStart(19, "0");
    _delete(items);
  }
  trimOrphans(arg0) {
    const messages = this.transaction.messages;
    messages.trimOrphans(arg0);
  }
  trimChannel(arg0, arg1, arg2) {
    const messages = this.transaction.messages;
    const items = [arg0, arg1];
    messages.trimChannel(items, arg2);
  }
  trimChannelsIn(arg0, arg1) {
    const messages = this.transaction.messages;
    messages.trimChannelsIn(arg0, arg1);
  }
  trimChannelsNotIn(arg0, arg1) {
    const messages = this.transaction.messages;
    messages.trimChannelsNotIn(arg0, arg1);
  }
}
const prototype = MessageDaoTransaction.prototype;
const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/MessageDao.tsx");

export { MessageDao };
export { MessageDaoTransaction };
