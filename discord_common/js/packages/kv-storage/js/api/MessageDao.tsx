let MessageDao;
class MessageDao {
  constructor(arg0, arg1, arg2) {
    flag = importAll;
    if (importAll === undefined) {
      flag = true;
    }
    obj = Object.create(new.target.prototype);
    obj.originalPrefix = global;
    items = [];
    items[0] = global;
    table = new require("fromDatabaseTransaction").Table(items, require, importDefault, flag);
    obj.table = table;
    return obj;
  }
}
const prototype = MessageDao.prototype;
Object.defineProperty(prototype, "prefix", {
  get: function prefix() {
    return this.table.prefix;
  },
  set: undefined
});
prototype["withoutLogging"] = function withoutLogging() {
  const originalPrefix = this.originalPrefix;
  if (typeof MessageDao !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(MessageDao.prototype);
  obj.originalPrefix = originalPrefix;
  const items = [originalPrefix];
  const table = new require(1912) /* fromDatabaseTransaction */.Table(items, this.table.tableId, this.table.database, false);
  obj.table = table;
  return obj;
};
prototype["get"] = function get(arg0, arg1, str) {
  const table = this.table;
  const items = [arg0, arg1, str.padStart(19, "0")];
  return table.get(items);
};
prototype["getLatest"] = function getLatest(arg0, arg1, limit) {
  const table = this.table;
  const items = [arg0, arg1];
  return table.getMany(items, { ordering: require(1914) /* TableId */.Ordering.Descending, limit });
};
prototype["getRange"] = function getRange(arg0, arg1, str, str2) {
  const table = this.table;
  const items = [arg0, arg1, str.padStart(19, "0")];
  const items1 = [arg0, arg1, str2.padStart(19, "0")];
  return table.getRange(items, items1, arg4);
};
prototype["getMostRecents"] = function getMostRecents(outer1_0) {
  const messages = this.table.messages;
  return messages.getLatest(outer1_0);
};
prototype["put"] = function put(arg0, arg1, data) {
  let Replace = arg3;
  if (arg3 === undefined) {
    Replace = require(1914) /* TableId */.ConflictOptions.Replace;
  }
  const table = this.table;
  const id = data.id;
  const padStartResult = id.padStart(19, "0");
  const items = [arg0, arg1, padStartResult];
  return table.put({ key: items, data, generation: padStartResult }, Replace);
};
prototype["putAll"] = function putAll(arg0, arg1, arr) {
  const _require = arg0;
  const dependencyMap = arg1;
  let Replace = arg3;
  if (arg3 === undefined) {
    Replace = _require(1914).ConflictOptions.Replace;
  }
  const table = this.table;
  return table.putAll(arr.map((data) => {
    const id = data.id;
    const padStartResult = id.padStart(19, "0");
    const items = [closure_0, closure_1, padStartResult];
    return { key: items, data, generation: padStartResult };
  }), Replace);
};
prototype["deleteAll"] = function deleteAll() {
  const table = this.table;
  return table.delete();
};
prototype["deleteGuild"] = function deleteGuild(arg0) {
  const table = this.table;
  const items = [arg0];
  return table.delete(items);
};
prototype["deleteChannel"] = function deleteChannel(arg0, arg1) {
  const table = this.table;
  const items = [arg0, arg1];
  return table.delete(items);
};
prototype["deleteMessage"] = function deleteMessage(arg0, arg1, str) {
  const table = this.table;
  const items = [arg0, arg1, str.padStart(19, "0")];
  return table.delete(items);
};
prototype["transaction"] = function transaction(arg0, arg1) {
  let closure_0 = arg0;
  const table = this.table;
  return table.transaction((transaction) => {
    if (typeof outer1_2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(outer1_2.prototype);
    obj.transaction = transaction;
    return closure_0(obj);
  }, arg1);
};
prototype["upgradeTransaction"] = function upgradeTransaction(arg0) {
  const table = this.table;
  if (typeof MessageDaoTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(MessageDaoTransaction.prototype);
  obj.transaction = table.upgradeTransaction(arg0);
  return obj;
};
let MessageDaoTransaction;
class MessageDaoTransaction {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.transaction = global;
    return obj;
  }
}
const prototype2 = MessageDaoTransaction.prototype;
MessageDaoTransaction["fromTableTransaction"] = function fromTableTransaction(transaction) {
  if (typeof MessageDaoTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(MessageDaoTransaction.prototype);
  obj.transaction = transaction;
  return obj;
};
MessageDaoTransaction["fromDatabaseTransaction"] = function fromDatabaseTransaction(prefix, tableId, transaction) {
  const tableTransaction = new require(1912) /* fromDatabaseTransaction */.TableTransaction(prefix, tableId, transaction);
  if (typeof MessageDaoTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(MessageDaoTransaction.prototype);
  obj.transaction = tableTransaction;
  return obj;
};
prototype2["put"] = function put(arg0, arg1, data) {
  let Replace = arg3;
  if (arg3 === undefined) {
    Replace = require(1914) /* TableId */.ConflictOptions.Replace;
  }
  const transaction = this.transaction;
  const id = data.id;
  const padStartResult = id.padStart(19, "0");
  const items = [arg0, arg1, padStartResult];
  transaction.put({ key: items, data, generation: padStartResult }, Replace);
};
prototype2["putAll"] = function putAll(arg0, arg1, arr) {
  const _require = arg0;
  const dependencyMap = arg1;
  let Replace = arg3;
  if (arg3 === undefined) {
    Replace = _require(1914).ConflictOptions.Replace;
  }
  const transaction = this.transaction;
  transaction.putAll(arr.map((data) => {
    const id = data.id;
    const padStartResult = id.padStart(19, "0");
    const items = [closure_0, closure_1, padStartResult];
    return { key: items, data, generation: padStartResult };
  }), Replace);
};
prototype2["replaceChannel"] = function replaceChannel(arg0, arg1, arg2) {
  this.deleteChannel(arg0, arg1);
  this.putAll(arg0, arg1, arg2);
};
prototype2["deleteAll"] = function deleteAll() {
  const transaction = this.transaction;
  transaction.delete();
};
prototype2["deleteGuild"] = function deleteGuild(arg0) {
  const transaction = this.transaction;
  const items = [arg0];
  transaction.delete(items);
};
prototype2["deleteChannel"] = function deleteChannel(arg0, arg1) {
  const transaction = this.transaction;
  const items = [arg0, arg1];
  transaction.delete(items);
};
prototype2["deleteMessage"] = function deleteMessage(arg0, arg1, str) {
  const transaction = this.transaction;
  const items = [arg0, arg1, str.padStart(19, "0")];
  transaction.delete(items);
};
prototype2["trimOrphans"] = function trimOrphans(arg0) {
  const messages = this.transaction.messages;
  messages.trimOrphans(arg0);
};
prototype2["trimChannel"] = function trimChannel(arg0, arg1, arg2) {
  const messages = this.transaction.messages;
  const items = [arg0, arg1];
  messages.trimChannel(items, arg2);
};
prototype2["trimChannelsIn"] = function trimChannelsIn(arg0, arg1) {
  const messages = this.transaction.messages;
  messages.trimChannelsIn(arg0, arg1);
};
prototype2["trimChannelsNotIn"] = function trimChannelsNotIn(arg0, arg1) {
  const messages = this.transaction.messages;
  messages.trimChannelsNotIn(arg0, arg1);
};
const result = require("set").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/MessageDao.tsx");

export { MessageDao };
export { MessageDaoTransaction };