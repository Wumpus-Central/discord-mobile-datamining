// discord_common/js/packages/storage/native/Storage.tsx
import AppStartPerformanceDefault from "../../app-start-performance/AppStartPerformance.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import NativeCacheModule from "../../rtn-codegen/js/NativeCacheModule.tsx";

function parseValue(arg0) {
  let parsed = arg0;
  if (null != arg0) {
    try {
      const _JSON = JSON;
      parsed = JSON.parse(parsed);
    } catch (err) {}
  }
  return parsed;
}
get_ActivityIndicator = fn(17);
({ Platform, NativeModules } = get_ActivityIndicator);
const DCDStrongboxManager = NativeModules.DCDStrongboxManager;
class ProxyAsyncStorage {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    promise = new Promise((parseResolve) => {
      obj.parseResolve = parseResolve;
    });
    obj.parsePromise = promise;
    obj.storage = {};
    set = new Set();
    obj.secureKeys = set;
    obj.hasLoaded = false;
    return obj;
  }
}
const prototype = ProxyAsyncStorage.prototype;
prototype["refresh"] = function refresh() {
  const self = this;
  let items = arg0;
  if (arg0 === undefined) {
    items = [];
  }
  if (arg1 === undefined) {
    const _Set = Set;
    new Set();
  }
  self.secureKeys = new Set();
  const items1 = [NativeCacheModule.refresh(items)];
  let refreshResult;
  if (DCDStrongboxManager != null) {
    const items2 = [];
    HermesBuiltin.arraySpread(self.secureKeys, 0);
    refreshResult = DCDStrongboxManager.refresh(items2);
  }
  items1[1] = refreshResult;
  const set1 = new Set();
  return Promise.all(items1).then((result) => {
    [tmp2, tmp3] = result;
    AppStartPerformanceDefault.mark("\u{1F4BE}", "Storage.refresh() Promise Resolved");
    let num = 0;
    let num2 = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      num2 = num;
      while (keys[tmp] !== undefined) {
        let length = tmp2[tmp7].length;
        let sum = num + length;
        num = sum;
        if (length <= 10000) {
          continue;
        } else {
          let obj2 = AppStartPerformanceDefault;
          let addDetailResult = obj2.addDetail(tmp7, length);
          num = sum;
          continue;
        }
        continue;
      }
    }
    AppStartPerformanceDefault.addDetail("TotalStorageSize", num2);
    self.hasLoaded = true;
    const items = [tmp2, tmp3];
    return items;
  });
};
prototype["parse"] = function parse(arg0) {
  const self = this;
  [tmp, tmp2] = arg0;
  self(513)(tmp2, (rawData, arg1) => {
    self.storage[arg1] = { parsed: false, rawData };
  });
  self(513)(tmp, (rawData, arg1) => {
    self.storage[arg1] = { parsed: false, rawData };
    const secureKeys = self.secureKeys;
    if (secureKeys.has(arg1)) {
      closure_0 = arg1;
      const result = DCDStrongboxManager.setItem(arg1, rawData);
      result.then((result) => {
        if (result) {
          NativeCacheModule.removeItem(closure_0);
        }
      });
    }
  });
  self.parseResolve();
  return Promise.resolve();
};
prototype["get"] = function get(key10009, arg1) {
  const self = this;
  const storage = this.storage;
  if (storage.hasOwnProperty(key10009)) {
    let iter = tmp2;
    if (!self.storage[key10009].parsed) {
      const obj = { parsed: true, value: parseValue(tmp2.rawData) };
      self.storage[key10009] = obj;
      iter = obj;
    }
    return iter.value;
  } else {
    return arg1;
  }
};
prototype["getAfterRefresh"] = function getAfterRefresh(arg0) {
  closure_0 = arg0;
  const self = this;
  return (async () => {
    await self.parsePromise.then(() => closure_1_1.get(closure_1_0));
    return value;
  })();
};
prototype["asyncGet"] = function asyncGet(ContactSyncDMListCTADismissed, arg1, arg2) {
  const self = this;
  closure_1 = ContactSyncDMListCTADismissed;
  closure_2 = arg1;
  closure_0 = arg2;
  const secureKeys = this.secureKeys;
  if (secureKeys.has(ContactSyncDMListCTADismissed)) {
    value = DCDStrongboxManager.getItem(ContactSyncDMListCTADismissed);
    value.then((result) => {
      if (null != result) {
        const _Date = Date;
        const timestamp = Date.now();
        const tmp7 = parseValue(result);
        const obj = { parsed: true, value: tmp7 };
        self.storage[tmp] = obj;
        const _Date2 = Date;
        if (null != closure_0) {
          AppStartPerformanceDefault.mark("\u{1F4BE}", tmp10, tmp9);
        }
        closure_2(tmp7);
      } else {
        closure_2(null);
      }
    });
  } else {
    value = self.getItem(ContactSyncDMListCTADismissed);
    value.then((result) => {
      if (null != result) {
        const _Date = Date;
        const timestamp = Date.now();
        const tmp7 = parseValue(result);
        const obj = { parsed: true, value: tmp7 };
        self.storage[tmp] = obj;
        const _Date2 = Date;
        if (null != closure_0) {
          AppStartPerformanceDefault.mark("\u{1F4BE}", tmp10, tmp9);
        }
        closure_2(tmp7);
      } else {
        closure_2(null);
      }
    });
  }
};
prototype["asyncGetRaw"] = function asyncGetRaw(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const self = this;
  return self(function* () {
    if (item === 2) {
      item = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        item = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            item = 3;
            throw value;
          } else if (arg0 === 2) {
            item = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            if (null != tmp2) {
              tmp5(tmp2[3]).mark("\u{1F4BE}", "Get: " + tmp2);
              const obj4 = tmp5(tmp2[3]);
            }
            const secureKeys = self.secureKeys;
            if (secureKeys.has(tmp5)) {
              value = item2.getItem(tmp5);
            } else {
              value = item.getItem(tmp5);
            }
            c2 = 1;
            item = 1;
          }
        } else if (arg0 === 1) {
          item = 3;
          throw value;
        } else if (arg0 === 2) {
          item = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_128_0 = value;
          let tmp14 = null;
          if (null != closure_128_0) {
            if (null != closure_129_1) {
              obj = tmp5(tmp2[3]);
              obj.mark("\u{1F4BE}", "Got: " + closure_129_1);
            }
            tmp14 = closure_128_0;
          }
          item = 3;
          const obj2 = { value: tmp14, done: true };
          return obj2;
        }
      } catch (tmp25) {
        item = tmp;
        throw tmp25;
      }
    }
  })();
};
prototype["getRaw"] = function getRaw(key10009) {
  const storage = this.storage;
  if (storage.hasOwnProperty(key10009)) {
    let tmp2 = null;
    if (!this.storage[key10009].parsed) {
      let rawData = tmp.rawData;
      if (rawData == null) {
        rawData = null;
      }
      tmp2 = rawData;
    }
    return tmp2;
  } else {
    return null;
  }
};
prototype["set"] = function set(arg0, value) {
  this.setRaw(arg0, JSON.stringify(value));
  this.storage[arg0] = { parsed: true, value };
};
prototype["setRaw"] = function setRaw(str, rawData) {
  if (typeof str !== "string") {
    const _Error2 = Error;
    const error = new Error("Key must be a string");
    throw error;
  } else if (typeof rawData !== "string") {
    const _Error = Error;
    const error1 = new Error("value must be a string");
    throw error1;
  } else {
    const self = this;
    const obj = { parsed: false, rawData };
    this.storage[str] = obj;
    const secureKeys = this.secureKeys;
    if (secureKeys.has(str)) {
      const result = DCDStrongboxManager.setItem(str, rawData);
    } else {
      const result1 = NativeCacheModule.setItem(str, rawData);
    }
  }
};
prototype["remove"] = function remove(arg0) {
  delete tmp2[tmp];
  const secureKeys = this.secureKeys;
  if (secureKeys.has(arg0)) {
    DCDStrongboxManager.removeItem(arg0);
  } else {
    NativeCacheModule.removeItem(arg0);
  }
};
prototype["clear"] = function clear() {
  this.storage = {};
  NativeCacheModule.clear();
  if (DCDStrongboxManager != null) {
    const items = [];
    HermesBuiltin.arraySpread(this.secureKeys, 0);
    DCDStrongboxManager.clear(items);
  }
};
let size = Object.create(ProxyAsyncStorage.prototype);
let closure_129_0 = size;
size.parsePromise = new Promise((parseResolve) => {
  obj.parseResolve = parseResolve;
});
size.storage = {};
let promise = new Promise((parseResolve) => {
  obj.parseResolve = parseResolve;
});
size.secureKeys = new Set();
size.hasLoaded = false;
size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/storage/native/Storage.tsx");

export const impl = size;
