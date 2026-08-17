// discord_app/modules/libdiscore/stores/LibdiscoreStore.tsx
import timestampDefault from "timestamp" /* 3 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import { Store } from "initialize" /* 589 */;

const require = arg1;
function identity(arg0) {
  return arg0;
}
let closure_3 = Symbol("version");
let closure_4 = Object.freeze({});
let closure_5 = new timestampDefault("LibdiscoreStore");
class SecondaryIndexMetadata {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    obj = Object.create(new.target.prototype);
    obj.type = global;
    obj.kkvDatabase = arg1;
    obj.k1key = importDefault;
    obj.k2key = importAll;
    obj.shouldIndex = module;
    return obj;
  }
}
const prototype = SecondaryIndexMetadata.prototype;
prototype["getK1Key"] = function getK1Key(nextResult1) {
  let self = this;
  if ("kv" === this.type) {
    return "0";
  } else if (typeof self.k1key === "string") {
    self = self.k1key;
    let k1keyResult = nextResult1[self];
  } else {
    k1keyResult = self.k1key(nextResult1);
  }
};
prototype["getK2Key"] = function getK2Key(nextResult1) {
  const self = this;
  const tmp = "kv" === this.type ? self.k1key : self.k2key;
  if (null == self.shouldIndex) {
    if (null != tmp) {
      if (typeof tmp === "string") {
        let tmpResult = nextResult1[tmp];
      } else {
        tmpResult = tmp(nextResult1);
      }
      return tmpResult;
    }
  }
};
class KVDatabase {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.kkvDatabase = global;
    obj.partition = arg1;
    return obj;
  }
}
const prototype2 = KVDatabase.prototype;
prototype2["set"] = function set(id) {
  const kkvDatabase = this.kkvDatabase;
  kkvDatabase.setRecord(this.partition, id, arg1);
};
prototype2["get"] = function get(guildEveryoneRoleId) {
  const kkvDatabase = this.kkvDatabase;
  return kkvDatabase.getRecord(this.partition, guildEveryoneRoleId);
};
prototype2["has"] = function has(arg0) {
  const kkvDatabase = this.kkvDatabase;
  return kkvDatabase.hasRecord(this.partition, arg0);
};
prototype2["getAllRecords"] = function getAllRecords() {
  const kkvDatabase = this.kkvDatabase;
  return kkvDatabase.getPartition(this.partition);
};
prototype2["remove"] = function remove(clusteringKey) {
  const kkvDatabase = this.kkvDatabase;
  return kkvDatabase.removeRecord(this.partition, clusteringKey);
};
prototype2["clear"] = function clear() {
  const kkvDatabase = this.kkvDatabase;
  kkvDatabase.removePartition(this.partition);
  const kkvDatabase2 = this.kkvDatabase;
  kkvDatabase2.setPartition(this.partition, {});
};
prototype2["length"] = function length() {
  const kkvDatabase = this.kkvDatabase;
  return kkvDatabase.partitionLength(this.partition);
};
prototype2["version"] = function version() {
  const kkvDatabase = this.kkvDatabase;
  let partitionVersionResult = kkvDatabase.partitionVersion(this.partition);
  if (partitionVersionResult == null) {
    const kkvDatabase2 = this.kkvDatabase;
    partitionVersionResult = kkvDatabase2.version();
  }
  return partitionVersionResult;
};
prototype2["memoized"] = function memoized(arg0, arg1) {
  const kkvDatabase = this.kkvDatabase;
  return kkvDatabase.memoizedSinglePartition(this.partition, arg0, arg1);
};
let KKVDatabase;
class KKVDatabase {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    obj.nextVersion = global;
    obj.state = obj.emptyState();
    return obj;
  }
}
const prototype3 = KKVDatabase.prototype;
prototype3["addSecondaryKVIndex"] = function addSecondaryKVIndex(id) {
  if (typeof KKVDatabase !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let obj = Object.create(KKVDatabase.prototype);
  obj[0] = [];
  obj.nextVersion = this.nextVersion;
  obj.state = obj.emptyState();
  if (typeof SecondaryIndexMetadata !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(SecondaryIndexMetadata.prototype);
  obj.type = "kv";
  obj.kkvDatabase = obj;
  obj.k1key = id;
  obj.k2key = undefined;
  obj.shouldIndex = arg1;
  const secondaryIndexes = this.secondaryIndexes;
  secondaryIndexes.push(obj);
  return obj.intoKV();
};
prototype3["addSecondaryKKVIndex"] = function addSecondaryKKVIndex(k1key, k2key, shouldIndex) {
  if (typeof KKVDatabase !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let obj = Object.create(KKVDatabase.prototype);
  obj[0] = [];
  obj.nextVersion = this.nextVersion;
  obj.state = obj.emptyState();
  if (typeof SecondaryIndexMetadata !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(SecondaryIndexMetadata.prototype);
  obj.type = "kkv";
  obj.kkvDatabase = obj;
  obj.k1key = k1key;
  obj.k2key = k2key;
  obj.shouldIndex = shouldIndex;
  const secondaryIndexes = this.secondaryIndexes;
  secondaryIndexes.push(obj);
  return obj;
};
prototype3["intoKV"] = function intoKV(arg0) {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  if (typeof KVDatabase !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(KVDatabase.prototype);
  obj.kkvDatabase = this;
  obj.partition = str;
  return obj;
};
prototype3["version"] = function version() {
  return this.state.version;
};
prototype3["partitionVersion"] = function partitionVersion(arg0) {
  const self = this;
  if (null == this.state.root[arg0]) {
    let versionResult = self.version();
  } else {
    versionResult = self._derivedVersion(tmp.derived.memoized);
  }
  return versionResult;
};
prototype3["hasPartition"] = function hasPartition(arg0) {
  return null != this.state.root[arg0];
};
prototype3["hasRecord"] = function hasRecord(partition, arg1) {
  let tmp2;
  if (this.state.root[partition] != null) {
    tmp2 = tmp.root[arg1];
  }
  return null != tmp2;
};
prototype3["getRecord"] = function getRecord(id, guildEveryoneRoleId) {
  let tmp2;
  if (this.state.root[id] != null) {
    tmp2 = tmp.root[guildEveryoneRoleId];
  }
  return tmp2;
};
prototype3["getManyRecords"] = function getManyRecords(guildId, selectedRoleIds) {
  if (null == this.state.root[guildId]) {
    return [];
  } else {
    const items = [];
    const tmp4 = selectedRoleIds[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp8 = tmp.root[tmp6];
      if (null != tmp8) {
        let tmp10 = tmp8;
        let arr = items.push(tmp9);
      }
      continue;
    }
    return items;
  }
};
prototype3["getPartition"] = function getPartition(guildId) {
  return null != this.state.root[guildId] ? this.state.root[guildId].root : closure_4;
};
prototype3["getAllPartitions"] = function getAllPartitions() {
  return this.state.root;
};
prototype3["getPartitionKeys"] = function getPartitionKeys() {
  return Object.keys(this.state.root);
};
prototype3["partitionLength"] = function partitionLength(id) {
  let num = 0;
  if (null != this.state.root[id]) {
    num = tmp.derived.length;
  }
  return num;
};
prototype3["length"] = function length() {
  return this.state.derived.length;
};
prototype3["numPartitions"] = function numPartitions() {
  return this.state.derived.numPartitions;
};
prototype3["getNullablePartition"] = function getNullablePartition(id) {
  let root = null;
  if (null != this.state.root[id]) {
    root = tmp.root;
  }
  return root;
};
prototype3["_derivedVersion"] = function _derivedVersion(memoized) {
  let tmp2 = memoized[closure_3];
  if (null == tmp2) {
    const self = this;
    const nextVersionResult = this.nextVersion();
    memoized[tmp] = nextVersionResult;
    tmp2 = nextVersionResult;
  }
  return tmp2;
};
prototype3["mapPartitions"] = function mapPartitions(toSerializedPartition) {
  const items = [];
  const root = this.state.root;
  for (const key10008 in root) {
    let tmp = key10008;
    let obj = { partitionKey: null, values: null };
    obj[0] = key10008;
    obj[1] = arg0(root[key10008].root, key10008);
    let arr = items.push(obj);
    continue;
  }
  return items;
};
prototype3["memoizedPartition"] = function memoizedPartition(arg0) {
  const self = this;
  closure_1 = arg0;
  let tmp = arg1;
  closure_2 = Symbol();
  if (undefined === arg1) {
    tmp = arg0("", {});
  }
  closure_0 = tmp;
  return (arg0) => {
    if (null == self.state.root[arg0]) {
      return closure_0;
    } else {
      const memoized = tmp.derived.memoized;
      let tmp3 = memoized[closure_2];
      const _Object = Object;
      const call = hasOwnProperty.call;
      if (!(typeof call === "unknown" ? hasOwnProperty(closure_2) : call(memoized, closure_2))) {
        const tmp6 = callback(arg0, tmp.root);
        memoized[tmp2] = tmp6;
        tmp3 = tmp6;
      }
      return tmp3;
    }
  };
};
prototype3["memoizedSinglePartition"] = function memoizedSinglePartition(partition, arg1, arg2) {
  const self = this;
  closure_1 = partition;
  closure_2 = arg1;
  let tmp = arg2;
  closure_3 = Symbol();
  if (undefined === arg2) {
    tmp = arg1(self);
  }
  closure_0 = tmp;
  return () => {
    if (null == self.state.root[closure_1]) {
      return closure_0;
    } else {
      const memoized = tmp.derived.memoized;
      let tmp3 = memoized[closure_3];
      const _Object = Object;
      const call = hasOwnProperty.call;
      if (!(typeof call === "unknown" ? hasOwnProperty(closure_3) : call(memoized, closure_3))) {
        const tmp6 = callback(tmp.root);
        memoized[tmp2] = tmp6;
        tmp3 = tmp6;
      }
      return tmp3;
    }
  };
};
prototype3["memoized"] = function memoized(arg0) {
  const self = this;
  closure_1 = arg0;
  closure_0 = Symbol();
  return () => {
    const memoized = self.state.derived.memoized;
    let tmp3 = memoized[closure_0];
    const call = hasOwnProperty.call;
    if (!(typeof call === "unknown" ? hasOwnProperty(closure_0) : call(memoized, closure_0))) {
      const tmp5 = callback(self.state.root);
      memoized[tmp2] = tmp5;
      tmp3 = tmp5;
    }
    return tmp3;
  };
};
prototype3["emptyState"] = function emptyState() {
  return { root: {}, version: this.nextVersion(), derived: { length: 0, numPartitions: 0, memoized: {} } };
};
prototype3["emptyPartitionState"] = function emptyPartitionState(nextVersionResult) {
  const obj = { root: {}, version: null, derived: null };
  if (nextVersionResult == null) {
    const self = this;
    nextVersionResult = this.nextVersion();
  }
  obj[1] = nextVersionResult;
  obj[2] = { length: 0, memoized: {} };
  return obj;
};
prototype3["clear"] = function clear() {
  this.state = this.emptyState();
  for (const item10008 of tmp) {
    let kkvDatabase = item10008.kkvDatabase;
    let clearResult = kkvDatabase.clear();
    continue;
  }
};
prototype3["removePartition"] = function removePartition(id, nextVersionResult) {
  const self = this;
  if (nextVersionResult == null) {
    nextVersionResult = self.nextVersion();
  }
  let flag = null != tmp4;
  if (flag) {
    const _Object = Object;
    const result = self.updateSecondaryIndexes(undefined, Object.values(tmp4.root), nextVersionResult);
    const root = self.state.root;
    delete tmp[tmp2];
    let derived = self.state.derived;
    derived.numPartitions = derived.numPartitions - 1;
    self.state.version = nextVersionResult;
    self.state.derived.memoized = {};
    derived = self.state.derived;
    derived.length = derived.length - tmp4.derived.length;
    flag = true;
  }
  return flag;
};
prototype3["removeRecord"] = function removeRecord(guildId, clusteringKey, nextVersionResult) {
  let obj = this;
  if (nextVersionResult == null) {
    nextVersionResult = obj.nextVersion();
  }
  if (null == obj.state.root[guildId]) {
    return false;
  } else if (null == tmp6.root[clusteringKey]) {
    return tmp10;
  } else {
    const items = [tmp9];
    const result = obj.updateSecondaryIndexes(undefined, items, nextVersionResult);
    const root = tmp6.root;
    delete tmp3[tmp4];
    let derived = tmp6.derived;
    derived.length = derived.length - 1;
    if (0 === tmp6.derived.length) {
      const root2 = obj.state.root;
      delete tmp[tmp2];
      derived = obj.state.derived;
      derived.numPartitions = derived.numPartitions - 1;
    } else {
      tmp6.derived.memoized = {};
    }
    const derived1 = obj.state.derived;
    derived1.length = derived1.length - 1;
    obj.state.version = nextVersionResult;
    obj = {};
    obj.state.derived.memoized = obj;
  }
};
prototype3["updateRecord"] = function updateRecord(partitionKey, clusteringKey, value, value2, nextVersionResult) {
  const self = this;
  if (nextVersionResult == null) {
    nextVersionResult = self.nextVersion();
  }
  if (null == self.state.root[partitionKey]) {
    const _Error2 = Error;
    const _HermesInternal2 = HermesInternal;
    error = new Error("Partition " + partitionKey + " does not exist");
    throw error;
  } else if (null == self.state.root[partitionKey].root[clusteringKey]) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Record " + clusteringKey + " does not exist in partition " + partitionKey);
    throw error1;
  } else {
    const tmp4 = self.state.root[partitionKey].root[clusteringKey];
    const obj = {};
    const merged = Object.assign(tmp4);
    const merged1 = Object.assign(value);
    const tmp11 = value2(obj);
    const items = [tmp11];
    const items1 = [tmp4];
    const result = self.updateSecondaryIndexes(items, items1, nextVersionResult);
    self.touchPartition(partitionKey, nextVersionResult).root[clusteringKey] = tmp11;
    return true;
  }
};
prototype3["touchPartition"] = function touchPartition(partitionKey, nextVersionResult) {
  const self = this;
  if (nextVersionResult == null) {
    nextVersionResult = self.nextVersion();
  }
  if (null == self.state.root[partitionKey]) {
    self.state.root[partitionKey] = self.emptyPartitionState(nextVersionResult);
    const derived = self.state.derived;
    derived.numPartitions = derived.numPartitions + 1;
  } else {
    self.state.root[partitionKey].version = nextVersionResult;
    self.state.root[partitionKey].derived.memoized = {};
  }
  self.state.version = nextVersionResult;
  self.state.derived.memoized = {};
  return self.state.root[partitionKey];
};
prototype3["setRecord"] = function setRecord(guildId, id, arg2, nextVersionResult) {
  const self = this;
  if (nextVersionResult == null) {
    nextVersionResult = self.nextVersion();
  }
  const touchPartitionResult = self.touchPartition(guildId, nextVersionResult);
  if (null == touchPartitionResult.root[id]) {
    const derived = touchPartitionResult.derived;
    derived.length = derived.length + 1;
    const derived1 = self.state.derived;
    derived1.length = derived1.length + 1;
  }
  touchPartitionResult.root[id] = arg2;
  const items = [arg2];
  const result = self.updateSecondaryIndexes(items, undefined, nextVersionResult);
  return true;
};
prototype3["setPartition"] = function setPartition(id, filterRoleDeletesResult, nextVersionResult) {
  const self = this;
  if (nextVersionResult == null) {
    nextVersionResult = self.nextVersion();
  }
  self.removePartition(id, nextVersionResult);
  const length = Object.keys(filterRoleDeletesResult).length;
  if (0 === length) {
    return true;
  } else {
    const _Object = Object;
    const result = self.updateSecondaryIndexes(Object.values(filterRoleDeletesResult), undefined, nextVersionResult);
    const touchPartitionResult = self.touchPartition(id, nextVersionResult);
    touchPartitionResult.root = filterRoleDeletesResult;
    touchPartitionResult.derived.length = length;
    const derived = self.state.derived;
    derived.length = derived.length + length;
    return true;
  }
};
prototype3["updateSecondaryIndexes"] = function updateSecondaryIndexes(items, items2, nextVersionResult) {
  const iter = this.secondaryIndexes[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    if (undefined !== items2) {
      let tmp2 = items2;
      let iter2 = items2[Symbol.iterator]();
      let tmp3 = items2;
      let nextResult1 = iter2.next();
      let tmp5 = iter2;
      while (iter2 !== undefined) {
        let tmp6 = nextResult;
        let k1Key = obj.getK1Key(nextResult1);
        let tmp8 = k1Key;
        let k2Key = obj.getK2Key(nextResult1);
        let tmp10 = null != k1Key;
        if (tmp10) {
          let tmp11 = k2Key;
          tmp10 = null != k2Key;
        }
        if (tmp10) {
          let tmp12 = nextResult;
          let kkvDatabase = obj.kkvDatabase;
          let tmp13 = k1Key;
          let tmp14 = k2Key;
          let removeRecordResult = kkvDatabase.removeRecord(tmp8, k2Key, nextVersionResult);
        }
        continue;
      }
    }
    if (undefined !== items) {
      let tmp16 = items;
      let iter3 = items[Symbol.iterator]();
      let tmp17 = items;
      let nextResult2 = iter3.next();
      let tmp19 = iter3;
      while (iter3 !== undefined) {
        let tmp21 = nextResult;
        let tmp20 = nextResult2;
        let k1Key1 = obj.getK1Key(nextResult2);
        let tmp23 = k1Key1;
        let k2Key1 = obj.getK2Key(nextResult2);
        let tmp25 = null != k1Key1;
        if (tmp25) {
          let tmp26 = k2Key1;
          tmp25 = null != k2Key1;
        }
        if (tmp25) {
          let tmp27 = nextResult;
          let kkvDatabase2 = obj.kkvDatabase;
          let tmp28 = k1Key1;
          let tmp29 = k2Key1;
          let tmp30 = nextResult2;
          let tmp31 = kkvDatabase2;
          let tmp32 = nextVersionResult;
          let setRecordResult = kkvDatabase2.setRecord(tmp23, k2Key1, tmp20, nextVersionResult);
        }
        continue;
      }
    }
    continue;
  }
};
class LibdiscoreStore extends Store {
  constructor(arg0) {
    str = arg1;
    if (arg1 === undefined) {
      str = "typescript";
    }
    closure_0 = undefined;
    obj = {};
    if ("typescript" === str) {
      tmp = global;
      tmp2 = global;
      for (const key10008 in arg0) {
        tmp11 = key10008;
        closure_0 = arg0[key10008];
        fn = (arg0) => {
          if (lib.wrappedState == null) {
            obj.wrappedState = obj.stateWrapper();
          }
          lib(arg0, lib.wrappedState);
          if (lib._nextVersion === lib._nextVersion) {
            return false;
          }
        };
        obj[key10008] = fn;
        continue;
      }
    } else {
      str2 = "typescript-libdiscore-dual-read";
    }
    tmp3 = new tmp3(require("dispatcher"), obj, tmp12, tmp4, fn, obj, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp3._nextVersion = 0;
    map = new Map();
    tmp3.recordCreators = map;
    tmp3.wrappedState = null;
    tmp3.shadowDatabases = null;
    tmp3.shadowRecordCreators = null;
    tmp3.dualReadValidationDisabled = false;
    closure_0 = tmp3;
    tmp3.mode = str;
    tmp3.state = { databases: {} };
    if ("typescript-libdiscore-dual-read" === str) {
      tmp3.shadowDatabases = {};
      _Map = Map;
      tmp7 = new.target;
      tmp8 = new.target;
      map1 = new Map();
      tmp10 = map1;
      tmp3.shadowRecordCreators = map1;
    }
    return tmp3;
  }
}
const prototype4 = LibdiscoreStore.prototype;
prototype4["getMode"] = function getMode() {
  return this.mode;
};
prototype4["disableDualReadValidation"] = function disableDualReadValidation() {
  if ("typescript-libdiscore-dual-read" === this.mode) {
    tmp.dualReadValidationDisabled = true;
  }
};
prototype4["connectWithLibdiscore"] = function connectWithLibdiscore(FLUX_API) {
  const self = this;
  if ("typescript" === this.mode) {
    const _Error = Error;
    error = new Error("connectWithLibdiscore should not be called in TypeScript mode.");
    throw error;
  } else {
    const obj = { storeName: null, databases: null };
    obj[0] = self.getName();
    const _Object = Object;
    const keys = Object.keys(self.state.databases);
    obj[1] = keys.map((name) => ({ name, type: "kkv" }));
    const connectStoreResult = FLUX_API.connectStore(obj);
    self.applyChanges(connectStoreResult.initialState);
    if ("typescript-libdiscore-dual-read" === self.mode) {
      const result = self.setupDualReadValidation();
    }
    return connectStoreResult.storeToken;
  }
};
prototype4["setupDualReadValidation"] = function setupDualReadValidation() {
  let self = this;
  self = this;
  closure_2 = Symbol("didValidatePartition");
  closure_0 = { root: {}, derived: { length: 0, memoized: {} } };
  this.addChangeListener(() => {
    const shadowDatabases = self.shadowDatabases;
    if (null != shadowDatabases) {
      if (!tmp.dualReadValidationDisabled) {
        for (const key10013 in tmp.state.databases) {
          let tmp8 = key10013;
          let obj2 = _self;
          let obj3 = _self.state.databases[key10013];
          let obj4 = shadowDatabases[key10013];
          if (null == obj4) {
            let tmp6 = closure_1_5;
            let _HermesInternal2 = HermesInternal;
            let warnResult = closure_1_5.warn("Shadow database " + key10013 + " not found for dual-read validation");
            continue;
          } else {
            let callback = obj3.getAllPartitions();
            let _self = obj4.getAllPartitions();
            let tmp3 = callback;
            let tmp4 = table;
            let obj = callback(table[3]);
            let _HermesInternal = HermesInternal;
            let result = obj.runDualReadValidation("" + obj2.getName() + ":" + key10013, "Kkv", (arg0) => {
              const keys = Object.keys(table);
              const keys1 = Object.keys(table2);
              const iter = keys[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp5 = table;
                let tmp6 = table[nextResult];
                let _Object = Object;
                let call = hasOwnProperty.call;
                let tmp7 = table2;
                let tmp4 = nextResult;
                let tmp8 = table2;
                if (typeof call === "unknown" ? hasOwnProperty(nextResult) : call(tmp7, nextResult)) {
                  let tmp12 = tmp7;
                  let tmp13 = nextResult;
                  let tmp14 = tmp8[tmp4];
                  let tmp15 = tmp14;
                  let tmp16 = tmp6;
                  let tmp17 = closure_1_2;
                  let tmp18 = tmp6.derived.memoized[closure_1_2];
                  let tmp20 = tmp14.derived.memoized[closure_1_2];
                  if (null == tmp18) {
                    let tmp23 = tmp6;
                    let tmp24 = tmp14;
                    let tmp25 = arg0(tmp6, tmp15);
                    let obj = {};
                    tmp6.derived.memoized[tmp17] = obj;
                    tmp15.derived.memoized[tmp17] = obj;
                  } else {
                    let tmp21 = tmp18;
                    let tmp22 = tmp20;
                  }
                } else {
                  let tmp9 = tmp6;
                  let tmp10 = table;
                  let tmp11 = arg0(tmp6, table);
                }
                continue;
              }
              for (const item10064 of keys1) {
                let _Object2 = Object;
                let call2 = hasOwnProperty2.call;
                let tmp27 = table;
                let tmp26 = item10064;
                if (typeof call2 === "unknown") {
                  let hasOwnProperty2Result = hasOwnProperty2(item10064);
                } else {
                  hasOwnProperty2Result = call2(tmp27, item10064);
                }
                if (!hasOwnProperty2Result) {
                  let tmp29 = table2;
                  let tmp30 = table2;
                  let tmp31 = item10064;
                  let tmp32 = table;
                  let tmp33 = arg0(table, table2[tmp26]);
                }
                continue;
              }
            });
            continue;
          }
          continue;
        }
      }
    }
  });
};
prototype4["addKKVDatabase"] = function addKKVDatabase(guildStickers, createGuildRoleRecordFromRust) {
  const self = this;
  const nextVersion = this.nextVersion;
  if (typeof KKVDatabase !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp3 = createGuildRoleRecordFromRust;
  let obj = Object.create(tmp.prototype);
  obj[0] = [];
  obj.nextVersion = nextVersion.bind(this);
  obj.state = obj.emptyState();
  self.state.databases[guildStickers] = obj;
  const recordCreators = self.recordCreators;
  let tmp4 = createGuildRoleRecordFromRust;
  if (createGuildRoleRecordFromRust == null) {
    tmp4 = identity;
  }
  const result = recordCreators.set(guildStickers, tmp4);
  if (null != self.shadowDatabases) {
    const nextVersion2 = self.nextVersion;
    if (typeof tmp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(tmp.prototype);
    obj[0] = [];
    obj.nextVersion = nextVersion2.bind(self);
    obj.state = obj.emptyState();
    self.shadowDatabases[guildStickers] = obj;
    const shadowRecordCreators = self.shadowRecordCreators;
    if (tmp3 == null) {
      tmp3 = identity;
    }
    const result1 = shadowRecordCreators.set(guildStickers, tmp3);
    const bindResult1 = nextVersion2.bind(self);
  }
  return obj;
};
prototype4["addKVDatabase"] = function addKVDatabase(guilds, createGuildRecordFromRust) {
  const self = this;
  const nextVersion = this.nextVersion;
  if (typeof KKVDatabase !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp3 = createGuildRecordFromRust;
  let obj = Object.create(tmp.prototype);
  obj[0] = [];
  obj.nextVersion = nextVersion.bind(this);
  obj.state = obj.emptyState();
  self.state.databases[guilds] = obj;
  const recordCreators = self.recordCreators;
  let tmp5 = createGuildRecordFromRust;
  const bindResult = nextVersion.bind(this);
  if (createGuildRecordFromRust == null) {
    tmp5 = identity;
  }
  const result = recordCreators.set(guilds, tmp5);
  if (null != self.shadowDatabases) {
    const nextVersion2 = self.nextVersion;
    if (typeof tmp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(tmp.prototype);
    obj[0] = [];
    obj.nextVersion = nextVersion2.bind(self);
    obj.state = obj.emptyState();
    self.shadowDatabases[guilds] = obj;
    const shadowRecordCreators = self.shadowRecordCreators;
    if (tmp3 == null) {
      tmp3 = identity;
    }
    const result1 = shadowRecordCreators.set(guilds, tmp3);
    const bindResult1 = nextVersion2.bind(self);
  }
  return obj.intoKV();
};
prototype4["applyChanges"] = function applyChanges(databaseChanges) {
  const self = this;
  while (tmp2 !== undefined) {
    let result = self.executeDatabaseChange(tmp3, tmp);
    continue;
  }
};
prototype4["clearAllDatabases"] = function clearAllDatabases() {
  for (const key10004 in this.state.databases) {
    let tmp2 = key10004;
    let obj = tmp.state.databases[key10004];
    let clearResult = obj.clear();
    continue;
  }
};
prototype4["markDirty"] = function markDirty() {
  this._nextVersion = this._nextVersion + 1;
};
prototype4["executeDatabaseChange"] = function executeDatabaseChange(arg0, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const self = this;
  ({ databaseName, opcodes } = arg0);
  const nextVersionResult = this.nextVersion();
  if (flag) {
    let databases = self.shadowDatabases;
  } else {
    databases = self.state.databases;
  }
  if (null == databases[databaseName]) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Database " + databaseName + " does not exist");
    throw error;
  } else {
    const value = obj.get(databaseName);
    const iter2 = opcodes[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let iter = nextResult;
      let opcode = nextResult.opcode;
      if ("removePartition" === opcode) {
        let tmp23 = nextResult;
        let removePartitionResult = obj2.removePartition(iter.partitionKey, nextVersionResult);
      } else if ("setPartition" === opcode) {
        let tmp17 = nextResult;
        let partition = iter.partition;
        let tmp18 = partition;
        let tmp19 = partition;
        for (const key10048 in partition) {
          let tmp33 = key10048;
          let tmp34 = partition;
          tmp18[key10048] = value(tmp18[key10048]);
          continue;
        }
        let tmp20 = nextResult;
        let tmp21 = partition;
        let setPartitionResult = obj2.setPartition(iter.partitionKey, tmp18, nextVersionResult);
      } else if ("updateRecord" === opcode) {
        let tmp12 = nextResult;
        let tmp13 = obj2;
        let tmp14 = value;
        let tmp15 = nextVersionResult;
        let updateRecordResult = obj2.updateRecord(iter.partitionKey, iter.clusteringKey, iter.value, value, nextVersionResult);
      } else if ("setRecord" === opcode) {
        let tmp7 = nextResult;
        let partitionKey = iter.partitionKey;
        let tmp8 = obj2;
        let tmp9 = partitionKey;
        let tmp10 = nextVersionResult;
        let setRecordResult = obj2.setRecord(partitionKey, iter.clusteringKey, value(iter.value), nextVersionResult);
      } else if ("removeRecord" === opcode) {
        let tmp5 = nextResult;
        let removeRecordResult = obj2.removeRecord(iter.partitionKey, iter.clusteringKey, nextVersionResult);
      } else if ("clearDatabase" === opcode) {
        let clearResult = obj2.clear();
      }
      continue;
    }
  }
  obj = flag ? self.shadowRecordCreators : self.recordCreators;
};
prototype4["nextVersion"] = function nextVersion() {
  this._nextVersion = +this._nextVersion + 1;
  return +this._nextVersion;
};
let tmp2 = new timestampDefault("LibdiscoreStore");
let result = require("set").fileFinishedImporting("modules/libdiscore/stores/LibdiscoreStore.tsx");

export { KVDatabase };
export { KKVDatabase };
export { LibdiscoreStore };