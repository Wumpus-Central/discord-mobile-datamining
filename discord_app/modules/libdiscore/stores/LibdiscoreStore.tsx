// === Module 1980: LibdiscoreStore ===

// Module 1980 (LibdiscoreStore)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const require = fn;
function identity(arg0) {
  return arg0;
}
let closure_3 = Symbol("version");
let closure_4 = Object.freeze({});
let closure_5 = new LoggerDefault("LibdiscoreStore");
class SecondaryIndexMetadata {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    obj = Object.create(new.target.prototype);
    obj.type = global;
    obj.kkvDatabase = fn;
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
    obj.partition = fn;
    return obj;
  }
}
const prototype2 = KVDatabase.prototype;
prototype2["set"] = function set(id, arg1) {
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
prototype2["memoized"] = function memoized(fn, arg1) {
  const kkvDatabase = this.kkvDatabase;
  return kkvDatabase.memoizedSinglePartition(this.partition, fn, arg1);
};
let KKVDatabase;
class KKVDatabase {
  constructor(arg0) {
    merged = Object.assign({ secondaryIndexes: null });
    merged[0] = [];
    merged.nextVersion = global;
    merged.state = merged.emptyState();
    return merged;
  }
}
const prototype3 = KKVDatabase.prototype;
prototype3["addSecondaryKVIndex"] = function addSecondaryKVIndex(id, shouldIndex) {
  if (typeof KKVDatabase === "function") {
    const merged = Object.assign({ secondaryIndexes: null });
    merged[0] = [];
    merged.nextVersion = tmp2;
    merged.state = merged.emptyState();
    if (typeof SecondaryIndexMetadata === "function") {
      const obj = Object.create(tmp3.prototype);
      obj.type = "kv";
      obj.kkvDatabase = merged;
      obj.k1key = id;
      obj.k2key = undefined;
      obj.shouldIndex = shouldIndex;
      const secondaryIndexes = tmp.secondaryIndexes;
      secondaryIndexes.push(obj);
      return merged.intoKV();
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype3["addSecondaryKKVIndex"] = function addSecondaryKKVIndex(k1key, k2key, shouldIndex) {
  if (typeof KKVDatabase === "function") {
    const merged = Object.assign({ secondaryIndexes: null });
    merged[0] = [];
    merged.nextVersion = tmp2;
    merged.state = merged.emptyState();
    if (typeof SecondaryIndexMetadata === "function") {
      const obj = Object.create(tmp3.prototype);
      obj.type = "kkv";
      obj.kkvDatabase = merged;
      obj.k1key = k1key;
      obj.k2key = k2key;
      obj.shouldIndex = shouldIndex;
      const secondaryIndexes = tmp.secondaryIndexes;
      secondaryIndexes.push(obj);
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype3["intoKV"] = function intoKV(arg0) {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  if (typeof KVDatabase === "function") {
    const self = this;
    const obj = Object.create(KVDatabase.prototype);
    obj.kkvDatabase = this;
    obj.partition = str;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
    let obj = { partitionKey: key10008, values: arg0(root[key10008].root, key10008) };
    let arr = items.push(obj);
    continue;
  }
  return items;
};
prototype3["memoizedPartition"] = function memoizedPartition(fn, arg1) {
  const self = this;
  closure_1 = fn;
  let tmp = arg1;
  closure_2 = Symbol();
  if (undefined === arg1) {
    tmp = fn("", {});
  }
  closure_0 = tmp;
  return (arg0) => {
    if (null == self.state.root[arg0]) {
      return closure_0;
    } else {
      const memoized = tmp.derived.memoized;
      let tmp3 = memoized[closure_2];
      const _Object = Object;
      hasOwnProperty = Object.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (!(typeof call === "unknown" ? hasOwnProperty(closure_2) : call(memoized, closure_2))) {
        const tmp6 = closure_1(arg0, tmp.root);
        memoized[closure_2] = tmp6;
        tmp3 = tmp6;
      }
      return tmp3;
    }
  };
};
prototype3["memoizedSinglePartition"] = function memoizedSinglePartition(partition, fn, arg2) {
  const self = this;
  closure_1 = partition;
  closure_2 = fn;
  let tmp = arg2;
  closure_3 = Symbol();
  if (undefined === arg2) {
    tmp = fn(closure_4);
  }
  closure_0 = tmp;
  return () => {
    if (null == self.state.root[closure_1]) {
      return closure_0;
    } else {
      const memoized = tmp.derived.memoized;
      let tmp3 = memoized[closure_3];
      const _Object = Object;
      hasOwnProperty = Object.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (!(typeof call === "unknown" ? hasOwnProperty(closure_3) : call(memoized, closure_3))) {
        const tmp6 = closure_2(tmp.root);
        memoized[closure_3] = tmp6;
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
    hasOwnProperty = Object.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (!(typeof call === "unknown" ? hasOwnProperty(closure_0) : call(memoized, closure_0))) {
      const tmp5 = closure_1(self.state.root);
      memoized[closure_0] = tmp5;
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
  obj.version = nextVersionResult;
  obj.derived = { length: 0, memoized: {} };
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
    const error = new Error("Partition " + partitionKey + " does not exist");
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
      let iter2 = items2[Symbol.iterator]();
      let nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let k1Key = obj.getK1Key(nextResult1);
        let tmp8 = k1Key;
        let k2Key = obj.getK2Key(nextResult1);
        let tmp10 = null != k1Key;
        if (tmp10) {
          tmp10 = null != k2Key;
        }
        if (tmp10) {
          let kkvDatabase = obj.kkvDatabase;
          let removeRecordResult = kkvDatabase.removeRecord(tmp8, k2Key, nextVersionResult);
        }
        continue;
      }
    }
    if (undefined !== items) {
      let iter3 = items[Symbol.iterator]();
      let nextResult2 = iter3.next();
      while (iter3 !== undefined) {
        let tmp20 = nextResult2;
        let k1Key1 = obj.getK1Key(nextResult2);
        let tmp23 = k1Key1;
        let k2Key1 = obj.getK2Key(nextResult2);
        let tmp25 = null != k1Key1;
        if (tmp25) {
          tmp25 = null != k2Key1;
        }
        if (tmp25) {
          let kkvDatabase2 = obj.kkvDatabase;
          let setRecordResult = kkvDatabase2.setRecord(tmp23, k2Key1, tmp20, nextVersionResult);
        }
        continue;
      }
    }
    continue;
  }
};
const Store = fn(504).Store;
class LibdiscoreStore extends Store {
  constructor(arg0) {
    str = fn;
    if (fn === undefined) {
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
          if (require.wrappedState == null) {
            require.wrappedState = require.stateWrapper();
          }
          closure_0(arg0, require.wrappedState);
          if (require._nextVersion === require._nextVersion) {
            return false;
          }
        };
        obj[key10008] = fn;
        continue;
      }
    } else {
      str2 = "typescript-libdiscore-dual-read";
    }
    tmp3 = new tmp3(closure_1(closure_2[2]), obj, tmp12, tmp4, fn, obj, new.target);
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
    const error = new Error("connectWithLibdiscore should not be called in TypeScript mode.");
    throw error;
  } else {
    const obj = { storeName: self.getName(), databases: null };
    const _Object = Object;
    const keys = Object.keys(self.state.databases);
    obj.databases = keys.map((name) => ({ name, type: "kkv" }));
    const connectStoreResult = FLUX_API.connectStore(obj);
    self.applyChanges(connectStoreResult.initialState);
    if ("typescript-libdiscore-dual-read" === self.mode) {
      const result = self.setupDualReadValidation();
    }
    return connectStoreResult.storeToken;
  }
};
prototype4["setupDualReadValidation"] = function setupDualReadValidation() {
  const self = this;
  closure_2 = Symbol("didValidatePartition");
  let obj = { root: {}, derived: { length: 0, memoized: {} } };
  this.addChangeListener(() => {
    const shadowDatabases = self.shadowDatabases;
    if (null != shadowDatabases) {
      if (!self.dualReadValidationDisabled) {
        for (const key10013 in tmp.state.databases) {
          let obj2 = _self;
          let obj3 = _self.state.databases[key10013];
          let obj4 = shadowDatabases[key10013];
          if (null == obj4) {
            let _HermesInternal2 = HermesInternal;
            let warnResult = logger.warn("Shadow database " + key10013 + " not found for dual-read validation");
            continue;
          } else {
            let allPartitions = obj3.getAllPartitions();
            _self = obj4.getAllPartitions();
            obj = obj(closure_2[3]);
            let _HermesInternal = HermesInternal;
            let result = obj.runDualReadValidation("" + obj2.getName() + ":" + key10013, "Kkv", (fn) => {
              const keys = Object.keys(closure_0);
              const keys1 = Object.keys(dependencyMap);
              const iter = keys[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp6 = closure_0[nextResult];
                let _Object = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
                let call = hasOwnProperty.call;
                let tmp4 = nextResult;
                if (typeof call === "unknown" ? hasOwnProperty(nextResult) : call(dependencyMap, nextResult)) {
                  let tmp14 = dependencyMap[tmp4];
                  let tmp15 = tmp14;
                  let tmp18 = tmp6.derived.memoized[closure_2];
                  if (null == tmp18) {
                    let tmp25 = fn(tmp6, tmp15);
                    obj = {};
                    tmp6.derived.memoized[closure_2] = obj;
                    tmp15.derived.memoized[closure_2] = obj;
                  }
                } else {
                  let tmp11 = fn(tmp6, obj);
                }
                continue;
              }
              for (const item10064 of keys1) {
                let _Object2 = Object;
                let call2 = hasOwnProperty2.call;
                if (typeof call2 === "unknown") {
                  let hasOwnProperty2Result = hasOwnProperty2(item10064);
                } else {
                  hasOwnProperty2Result = call2(closure_0, item10064);
                }
                if (!hasOwnProperty2Result) {
                  let tmp33 = arg0(obj, dependencyMap[item10064]);
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
  if (typeof KKVDatabase === "function") {
    let tmp4 = createGuildRoleRecordFromRust;
    const merged = Object.assign({ secondaryIndexes: null });
    merged[0] = [];
    merged.nextVersion = tmp2;
    merged.state = merged.emptyState();
    self.state.databases[guildStickers] = merged;
    const recordCreators = self.recordCreators;
    let tmp6 = createGuildRoleRecordFromRust;
    if (createGuildRoleRecordFromRust == null) {
      tmp6 = identity;
    }
    const result = recordCreators.set(guildStickers, tmp6);
    if (null != self.shadowDatabases) {
      const nextVersion = self.nextVersion;
      if (typeof KKVDatabase === "function") {
        const merged1 = Object.assign({ secondaryIndexes: null });
        merged1[0] = [];
        merged1.nextVersion = tmp8;
        merged1.state = merged1.emptyState();
        self.shadowDatabases[guildStickers] = merged1;
        const shadowRecordCreators = self.shadowRecordCreators;
        if (tmp4 == null) {
          tmp4 = identity;
        }
        const result1 = shadowRecordCreators.set(guildStickers, tmp4);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return merged;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype4["addKVDatabase"] = function addKVDatabase(guilds, createGuildRecordFromRust) {
  const self = this;
  if (typeof KKVDatabase === "function") {
    let tmp4 = createGuildRecordFromRust;
    const merged = Object.assign({ secondaryIndexes: null });
    merged[0] = [];
    merged.nextVersion = tmp2;
    merged.state = merged.emptyState();
    self.state.databases[guilds] = merged;
    const recordCreators = self.recordCreators;
    let tmp7 = createGuildRecordFromRust;
    if (createGuildRecordFromRust == null) {
      tmp7 = identity;
    }
    const result = recordCreators.set(guilds, tmp7);
    if (null != self.shadowDatabases) {
      const nextVersion = self.nextVersion;
      if (typeof KKVDatabase === "function") {
        const merged1 = Object.assign({ secondaryIndexes: null });
        merged1[0] = [];
        merged1.nextVersion = tmp9;
        merged1.state = merged1.emptyState();
        self.shadowDatabases[guilds] = merged1;
        const shadowRecordCreators = self.shadowRecordCreators;
        if (tmp4 == null) {
          tmp4 = identity;
        }
        const result1 = shadowRecordCreators.set(guilds, tmp4);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return merged.intoKV();
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
    const error = new Error("Database " + databaseName + " does not exist");
    throw error;
  } else {
    value = obj.get(databaseName);
    const iter2 = opcodes[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let iter = nextResult;
      let opcode = nextResult.opcode;
      if ("removePartition" === opcode) {
        let removePartitionResult = obj2.removePartition(iter.partitionKey, nextVersionResult);
      } else if ("setPartition" === opcode) {
        let partition = iter.partition;
        let tmp18 = partition;
        for (const key10048 in partition) {
          tmp18[key10048] = value(tmp18[key10048]);
          continue;
        }
        let setPartitionResult = obj2.setPartition(iter.partitionKey, tmp18, nextVersionResult);
      } else if ("updateRecord" === opcode) {
        let updateRecordResult = obj2.updateRecord(iter.partitionKey, iter.clusteringKey, iter.value, value, nextVersionResult);
      } else if ("setRecord" === opcode) {
        let partitionKey = iter.partitionKey;
        let setRecordResult = obj2.setRecord(partitionKey, iter.clusteringKey, value(iter.value), nextVersionResult);
      } else if ("removeRecord" === opcode) {
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/libdiscore/stores/LibdiscoreStore.tsx");

export { KVDatabase };
export { KKVDatabase };
export { LibdiscoreStore };