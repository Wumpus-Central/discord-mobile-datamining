// discord_app/modules/libdiscore/stores/LibdiscoreStore.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty, map1, set, set2, state;

function identity(arg0) {
  return arg0;
}
let closure_3 = Symbol("version");
let closure_4 = Object.freeze({});
let tmp2 = new LoggerDefault("LibdiscoreStore");
let closure_5 = tmp2;
class SecondaryIndexMetadata {
  constructor(type, kkvDatabase, k1key, k2key, shouldIndex) {
    const obj = Object.create(new.target.prototype);
    obj.type = type;
    obj.kkvDatabase = kkvDatabase;
    obj.k1key = k1key;
    obj.k2key = k2key;
    obj.shouldIndex = shouldIndex;
    return obj;
  }
  getK1Key(nextResult1) {
    const self = this;
    let str = "0";
    if ("kv" !== this.type) {
      let k1keyResult;
      if (typeof self.k1key === "string") {
        k1keyResult = nextResult1[self.k1key];
      } else {
        k1keyResult = self.k1key(nextResult1);
      }
      str = k1keyResult;
    }
    return str;
  }
  getK2Key(nextResult1) {
    const self = this;
    const tmp = "kv" === this.type ? self.k1key : self.k2key;
    if (null == self.shouldIndex) {
      if (null != tmp) {
        let tmpResult;
        if (typeof tmp === "string") {
          tmpResult = nextResult1[tmp];
        } else {
          tmpResult = tmp(nextResult1);
        }
        return tmpResult;
      }
    }
  }
}
const prototype = SecondaryIndexMetadata.prototype;
class KVDatabase {
  constructor(kkvDatabase, partition) {
    const obj = Object.create(new.target.prototype);
    obj.kkvDatabase = kkvDatabase;
    obj.partition = partition;
    return obj;
  }
  set(id, arg1) {
    const kkvDatabase = this.kkvDatabase;
    kkvDatabase.setRecord(this.partition, id, arg1);
  }
  get(guildEveryoneRoleId) {
    const kkvDatabase = this.kkvDatabase;
    return kkvDatabase.getRecord(this.partition, guildEveryoneRoleId);
  }
  has(arg0) {
    const kkvDatabase = this.kkvDatabase;
    return kkvDatabase.hasRecord(this.partition, arg0);
  }
  getAllRecords() {
    const kkvDatabase = this.kkvDatabase;
    return kkvDatabase.getPartition(this.partition);
  }
  remove(clusteringKey) {
    const kkvDatabase = this.kkvDatabase;
    return kkvDatabase.removeRecord(this.partition, clusteringKey);
  }
  clear() {
    const kkvDatabase = this.kkvDatabase;
    kkvDatabase.removePartition(this.partition);
    const kkvDatabase2 = this.kkvDatabase;
    kkvDatabase2.setPartition(this.partition, {});
  }
  length() {
    const kkvDatabase = this.kkvDatabase;
    return kkvDatabase.partitionLength(this.partition);
  }
  version() {
    const kkvDatabase = this.kkvDatabase;
    let partitionVersionResult = kkvDatabase.partitionVersion(this.partition);
    if (partitionVersionResult == null) {
      const kkvDatabase2 = this.kkvDatabase;
      partitionVersionResult = kkvDatabase2.version();
    }
    return partitionVersionResult;
  }
  memoized(fn, arg1) {
    const kkvDatabase = this.kkvDatabase;
    return kkvDatabase.memoizedSinglePartition(this.partition, fn, arg1);
  }
}
const prototype2 = KVDatabase.prototype;
class KKVDatabase {
  constructor(nextVersion) {
    const merged = Object.assign({ secondaryIndexes: null });
    merged[0] = [];
    merged.nextVersion = nextVersion;
    merged.state = merged.emptyState();
    return merged;
  }
  addSecondaryKVIndex(id, shouldIndex) {
    if (typeof KKVDatabase === "function") {
      const merged = Object.assign({ secondaryIndexes: null });
      merged[0] = [];
      merged.nextVersion = tmp2;
      merged.state = merged.emptyState();
      const self = this;
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
  }
  addSecondaryKKVIndex(k1key, k2key, shouldIndex) {
    if (typeof KKVDatabase === "function") {
      const merged = Object.assign({ secondaryIndexes: null });
      merged[0] = [];
      merged.nextVersion = tmp2;
      merged.state = merged.emptyState();
      const self = this;
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
  }
  intoKV(arg0) {
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
  }
  version() {
    return this.state.version;
  }
  partitionVersion(arg0) {
    let versionResult;
    const self = this;
    if (null == this.state.root[arg0]) {
      versionResult = self.version();
    } else {
      versionResult = self._derivedVersion(tmp.derived.memoized);
    }
    return versionResult;
  }
  hasPartition(arg0) {
    return null != this.state.root[arg0];
  }
  hasRecord(partition, arg1) {
    let tmp2;
    if (this.state.root[partition] != null) {
      tmp2 = tmp.root[arg1];
    }
    return null != tmp2;
  }
  getRecord(id, guildEveryoneRoleId) {
    let tmp2;
    if (this.state.root[id] != null) {
      tmp2 = tmp.root[guildEveryoneRoleId];
    }
    return tmp2;
  }
  getManyRecords(guildId, selectedRoleIds) {
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
  }
  getPartition(guildId) {
    return null != this.state.root[guildId] ? this.state.root[guildId].root : closure_4;
  }
  getAllPartitions() {
    return this.state.root;
  }
  getPartitionKeys() {
    return Object.keys(this.state.root);
  }
  partitionLength(id) {
    let num = 0;
    if (null != this.state.root[id]) {
      num = tmp.derived.length;
    }
    return num;
  }
  length() {
    return this.state.derived.length;
  }
  numPartitions() {
    return this.state.derived.numPartitions;
  }
  getNullablePartition(id) {
    let root = null;
    if (null != this.state.root[id]) {
      root = tmp.root;
    }
    return root;
  }
  _derivedVersion(memoized) {
    let tmp2 = memoized[closure_3];
    if (null == tmp2) {
      const self = this;
      const nextVersionResult = this.nextVersion();
      memoized[tmp] = nextVersionResult;
      tmp2 = nextVersionResult;
    }
    return tmp2;
  }
  mapPartitions(toSerializedPartition) {
    const items = [];
    const root = this.state.root;
    for (const key10008 in root) {
      let obj = { partitionKey: key10008, values: toSerializedPartition(root[key10008].root, key10008) };
      let push = items.push;
      let arr = push(obj);
      continue;
    }
    return items;
  }
  memoizedPartition(fn, arg1) {
    const self = this;
    let closure_1 = fn;
    let tmp = arg1;
    let closure_2 = Symbol();
    if (undefined === arg1) {
      tmp = fn("", {});
    }
    let closure_0 = tmp;
    return (arg0) => {
      if (null == self.state.root[arg0]) {
        return closure_0;
      } else {
        const memoized = tmp.derived.memoized;
        let tmp3 = memoized[closure_2];
        const _Object = Object;
        hasOwnProperty = Object.hasOwnProperty;
        const root = tmp.root;
        if (!hasOwnProperty.call(memoized, closure_2)) {
          const tmp6 = fn(arg0, root);
          memoized[closure_2] = tmp6;
          tmp3 = tmp6;
        }
        return tmp3;
      }
    };
  }
  memoizedSinglePartition(partition, fn, arg2) {
    const self = this;
    let closure_1 = partition;
    let closure_2 = fn;
    let tmp = arg2;
    closure_3 = Symbol();
    if (undefined === arg2) {
      tmp = fn(closure_4);
    }
    let closure_0 = tmp;
    return () => {
      if (null == self.state.root[closure_1]) {
        return closure_0;
      } else {
        const memoized = tmp.derived.memoized;
        let tmp3 = memoized[closure_3];
        const _Object = Object;
        hasOwnProperty = Object.hasOwnProperty;
        const root = tmp.root;
        if (!hasOwnProperty.call(memoized, closure_3)) {
          const tmp6 = closure_2(root);
          memoized[closure_3] = tmp6;
          tmp3 = tmp6;
        }
        return tmp3;
      }
    };
  }
  memoized(arg0) {
    const self = this;
    let closure_1 = arg0;
    let closure_0 = Symbol();
    return () => {
      const memoized = self.state.derived.memoized;
      let tmp3 = memoized[closure_0];
      hasOwnProperty = Object.hasOwnProperty;
      if (!hasOwnProperty.call(memoized, closure_0)) {
        const tmp5 = closure_1(self.state.root);
        memoized[closure_0] = tmp5;
        tmp3 = tmp5;
      }
      return tmp3;
    };
  }
  emptyState() {
    const obj = { root: {}, version: this.nextVersion(), derived: { length: 0, numPartitions: 0, memoized: {} } };
    return obj;
  }
  emptyPartitionState(nextVersionResult) {
    const obj = { root: {}, version: nextVersionResult, derived: { length: 0, memoized: {} } };
    if (nextVersionResult == null) {
      const self = this;
      nextVersionResult = this.nextVersion();
    }
    return obj;
  }
  clear() {
    this.state = this.emptyState();
    const secondaryIndexes = this.secondaryIndexes;
    for (const item10008 of secondaryIndexes) {
      let kkvDatabase = item10008.kkvDatabase;
      let clearResult = kkvDatabase.clear();
      continue;
    }
  }
  removePartition(id, nextVersionResult) {
    const self = this;
    if (nextVersionResult == null) {
      nextVersionResult = self.nextVersion();
    }
    let flag = null != tmp3;
    if (flag) {
      const _Object = Object;
      const result = self.updateSecondaryIndexes(undefined, Object.values(tmp3.root), nextVersionResult);
      delete self.state.root[tmp2];
      const derived = self.state.derived;
      derived.numPartitions = derived.numPartitions - 1;
      self.state.version = nextVersionResult;
      self.state.derived.memoized = {};
      const derived1 = self.state.derived;
      derived1.length = derived1.length - self.state.root[id].derived.length;
      flag = true;
    }
    return flag;
  }
  removeRecord(guildId, clusteringKey, nextVersionResult) {
    const self = this;
    if (nextVersionResult == null) {
      nextVersionResult = self.nextVersion();
    }
    if (null == self.state.root[guildId]) {
      return false;
    } else {
      const tmp6 = self.state.root[guildId].root[clusteringKey];
      let flag = null != tmp6;
      if (flag) {
        const items = [tmp6];
        const result = self.updateSecondaryIndexes(undefined, items, nextVersionResult);
        delete self.state.root[guildId].root[tmp5];
        const derived1 = tmp3.derived;
        derived1.length = derived1.length - 1;
        if (0 === self.state.root[guildId].derived.length) {
          delete self.state.root[tmp2];
          const derived = self.state.derived;
          derived.numPartitions = derived.numPartitions - 1;
        } else {
          self.state.root[guildId].derived.memoized = {};
        }
        const derived2 = self.state.derived;
        derived2.length = derived2.length - 1;
        self.state.version = nextVersionResult;
        self.state.derived.memoized = {};
        flag = true;
      }
      return flag;
    }
  }
  updateRecord(partitionKey, clusteringKey, value, value2, nextVersionResult) {
    const self = this;
    if (nextVersionResult == null) {
      nextVersionResult = self.nextVersion();
    }
    if (null == self.state.root[partitionKey]) {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const self4 = this;
      const self5 = this;
      const error = new Error("Partition " + partitionKey + " does not exist");
      throw error;
    } else if (null == self.state.root[partitionKey].root[clusteringKey]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
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
  }
  touchPartition(partitionKey, nextVersionResult) {
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
  }
  setRecord(guildId, id, arg2, nextVersionResult) {
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
  }
  setPartition(id, filterRoleDeletesResult, nextVersionResult) {
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
  }
  updateSecondaryIndexes(items, items2, nextVersionResult) {
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
  }
}
const prototype3 = KKVDatabase.prototype;
const Store = get_initialized.Store;
class LibdiscoreStore extends Store {
  constructor(obj) {
    let fn;
    let str = arg1;
    if (arg1 === undefined) {
      str = "typescript";
    }
    let wrappedState;
    obj = {};
    if ("typescript" === str) {
      for (const key10008 in obj) {
        wrappedState = obj[key10008];
        fn = (arg0) => {
          if (wrappedState.wrappedState == null) {
            wrappedState.wrappedState = wrappedState.stateWrapper();
          }
          const _nextVersion = wrappedState._nextVersion;
          closure_0(arg0, wrappedState.wrappedState);
          if (wrappedState._nextVersion === _nextVersion) {
            return false;
          }
        };
        obj[key10008] = fn;
        continue;
      }
    }
    const tmp32 = new tmp3(DispatcherDefault, obj, tmp10, tmp4, fn, obj, new.target);
    tmp32._nextVersion = 0;
    tmp32.recordCreators = new Map();
    tmp32.wrappedState = null;
    tmp32.shadowDatabases = null;
    tmp32.shadowRecordCreators = null;
    tmp32.dualReadValidationDisabled = false;
    wrappedState = tmp32;
    tmp32.mode = str;
    tmp32.state = { databases: {} };
    new Map();
    if ("typescript-libdiscore-dual-read" === str) {
      tmp32.shadowDatabases = {};
      const _Map = Map;
      const self = this;
      const self2 = this;
      tmp32.shadowRecordCreators = new Map();
      map1 = new Map();
    }
    return tmp32;
  }
  getMode() {
    return this.mode;
  }
  disableDualReadValidation() {
    if ("typescript-libdiscore-dual-read" === this.mode) {
      tmp.dualReadValidationDisabled = true;
    }
  }
  connectWithLibdiscore(FLUX_API) {
    let keys;
    const self = this;
    if ("typescript" === this.mode) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("connectWithLibdiscore should not be called in TypeScript mode.");
      throw error;
    } else {
      const connectStore = FLUX_API.connectStore;
      const _Object = Object;
      const obj = { storeName: self.getName(), databases: keys.map((name) => ({ name, type: "kkv" })) };
      keys = Object.keys(self.state.databases);
      const connectStoreResult = connectStore(obj);
      const storeToken = connectStoreResult.storeToken;
      self.applyChanges(connectStoreResult.initialState);
      if ("typescript-libdiscore-dual-read" === self.mode) {
        const result = self.setupDualReadValidation();
      }
      return storeToken;
    }
  }
  setupDualReadValidation() {
    let logger;
    const self = this;
    let closure_2 = Symbol("didValidatePartition");
    let obj = { root: {}, derived: { length: 0, memoized: {} } };
    this.addChangeListener(() => {
      let closure_0;
      let closure_1;
      const shadowDatabases = self.shadowDatabases;
      if (null != shadowDatabases) {
        if (!self.dualReadValidationDisabled) {
          for (const key10013 in self.state.databases) {
            let obj2 = state;
            let obj3 = state.state.databases[key10013];
            let obj4 = shadowDatabases[key10013];
            if (null == obj4) {
              let _HermesInternal2 = HermesInternal;
              let warnResult = logger.warn("Shadow database " + key10013 + " not found for dual-read validation");
              continue;
            } else {
              let allPartitions = obj3.getAllPartitions();
              state = obj4.getAllPartitions();
              obj = obj(closure_2[3]);
              let _HermesInternal = HermesInternal;
              let result = obj.runDualReadValidation("" + obj2.getName() + ":" + key10013, "Kkv", (fn) => {
                const keys = Object.keys(closure_0);
                const keys1 = Object.keys(closure_1);
                const iter = keys[Symbol.iterator]();
                const nextResult = iter.next();
                while (iter !== undefined) {
                  let tmp6 = closure_0[nextResult];
                  let _Object = Object;
                  hasOwnProperty = Object.prototype.hasOwnProperty;
                  let tmp4 = nextResult;
                  if (hasOwnProperty.call(closure_1, nextResult)) {
                    let tmp14 = closure_1[tmp4];
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
                  let hasOwnProperty2 = Object.prototype.hasOwnProperty;
                  if (!hasOwnProperty2.call(closure_0, item10064)) {
                    let tmp31 = fn(obj, closure_1[item10064]);
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
  }
  addKKVDatabase(guildStickers, createGuildRoleRecordFromRust) {
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
      set = recordCreators.set;
      if (createGuildRoleRecordFromRust == null) {
        tmp6 = identity;
      }
      const result = set(guildStickers, tmp6);
      if (null != self.shadowDatabases) {
        const nextVersion = self.nextVersion;
        const self2 = this;
        if (typeof KKVDatabase === "function") {
          const merged1 = Object.assign({ secondaryIndexes: null });
          merged1[0] = [];
          merged1.nextVersion = tmp8;
          merged1.state = merged1.emptyState();
          self.shadowDatabases[guildStickers] = merged1;
          const shadowRecordCreators = self.shadowRecordCreators;
          set2 = shadowRecordCreators.set;
          if (tmp4 == null) {
            tmp4 = identity;
          }
          set2(guildStickers, tmp4);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  addKVDatabase(guilds, createGuildRecordFromRust) {
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
      const intoKVResult = merged.intoKV();
      set = recordCreators.set;
      if (createGuildRecordFromRust == null) {
        tmp7 = identity;
      }
      const result = set(guilds, tmp7);
      if (null != self.shadowDatabases) {
        const nextVersion = self.nextVersion;
        const self2 = this;
        if (typeof KKVDatabase === "function") {
          const merged1 = Object.assign({ secondaryIndexes: null });
          merged1[0] = [];
          merged1.nextVersion = tmp9;
          merged1.state = merged1.emptyState();
          self.shadowDatabases[guilds] = merged1;
          const shadowRecordCreators = self.shadowRecordCreators;
          set2 = shadowRecordCreators.set;
          if (tmp4 == null) {
            tmp4 = identity;
          }
          set2(guilds, tmp4);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return intoKVResult;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  applyChanges(databaseChanges) {
    const self = this;
    const tmp = "typescript-libdiscore-dual-read" === this.mode;
    const tmp2 = databaseChanges[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let result = self.executeDatabaseChange(tmp3, tmp);
      continue;
    }
  }
  clearAllDatabases() {
    for (const key10004 in this.state.databases) {
      let obj = tmp.state.databases[key10004];
      let clearResult = obj.clear();
      continue;
    }
  }
  markDirty() {
    this._nextVersion = this._nextVersion + 1;
  }
  executeDatabaseChange(arg0, arg1) {
    let databaseName;
    let databases;
    let opcodes;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const self = this;
    ({ databaseName, opcodes } = arg0);
    const nextVersionResult = this.nextVersion();
    if (flag) {
      databases = self.shadowDatabases;
    } else {
      databases = self.state.databases;
    }
    const obj = flag ? self.shadowRecordCreators : self.recordCreators;
    if (null == databases[databaseName]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const error = new Error("Database " + databaseName + " does not exist");
      throw error;
    } else {
      const value = obj.get(databaseName);
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
          let updateRecordResult = obj2.updateRecord(
            iter.partitionKey,
            iter.clusteringKey,
            iter.value,
            value,
            nextVersionResult,
          );
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
  }
  nextVersion() {
    this._nextVersion = +this._nextVersion + 1;
    return +this._nextVersion;
  }
}
const prototype4 = LibdiscoreStore.prototype;
let result = size.fileFinishedImporting("modules/libdiscore/stores/LibdiscoreStore.tsx");

export { KVDatabase };
export { KKVDatabase };
export { LibdiscoreStore };
