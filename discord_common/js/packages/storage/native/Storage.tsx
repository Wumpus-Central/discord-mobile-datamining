// discord_common/js/packages/storage/native/Storage.tsx
import AppStartPerformanceDefault from "../../app-start-performance/AppStartPerformance.tsx";
import react_nativeDefault from "../../rtn-codegen/js/NativeCacheModule.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import size from "../../../../../_runtime/metro/00002__.js";

let c0, c1, dependencyMap, importDefault;

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
const DCDStrongboxManager = react_native.NativeModules.DCDStrongboxManager;
class ProxyAsyncStorage {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.parsePromise = new Promise((parseResolve) => {
      obj.parseResolve = parseResolve;
    });
    obj.storage = {};
    new Promise((parseResolve) => {
      obj.parseResolve = parseResolve;
    });
    obj.secureKeys = new Set();
    obj.hasLoaded = false;
    new Set();
    return obj;
  }
  refresh() {
    const self = this;
    let items = arg0;
    if (arg0 === undefined) {
      items = [];
    }
    if (arg1 === undefined) {
      const tmp = globalThis;
      const _Set = Set;
      const self2 = this;
      new Set();
    }
    self.secureKeys = new Set();
    new Set();
    let obj = self(512);
    const items1 = [obj.refresh(items)];
    let refreshResult;
    if (DCDStrongboxManager != null) {
      const items2 = [];
      let num = 0;
      const refresh = DCDStrongboxManager.refresh;
      HermesBuiltin.arraySpread(items2, self.secureKeys, 0);
      refreshResult = refresh(items2);
    }
    items1[1] = refreshResult;
    const allResult = all(items1);
    return allResult.then((result) => {
      let tmp2;
      let tmp3;
      [tmp2, tmp3] = result;
      const obj = AppStartPerformanceDefault;
      obj.mark("\u{1F4BE}", "Storage.refresh() Promise Resolved");
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
      const obj3 = AppStartPerformanceDefault;
      obj3.addDetail("TotalStorageSize", num2);
      self.hasLoaded = true;
      const items = [tmp2, tmp3];
      return items;
    });
  }
  parse(arg0) {
    let tmp;
    let tmp2;
    const self = this;
    [tmp, tmp2] = arg0;
    self(513)(tmp2, (rawData, arg1) => {
      const obj = { parsed: false, rawData };
      self.storage[arg1] = obj;
    });
    self(513)(tmp, (rawData, arg1) => {
      self.storage[arg1] = { parsed: false, rawData };
      const secureKeys = self.secureKeys;
      if (secureKeys.has(arg1)) {
        let closure_0 = arg1;
        const result = DCDStrongboxManager.setItem(arg1, rawData);
        result.then((result) => {
          const tmp = result;
          if (tmp) {
            const obj = self(closure_2_1[2]);
            obj.removeItem(closure_0);
          }
        });
      }
    });
    self.parseResolve();
    return Promise.resolve();
  }
  get(keys, arg1) {
    const self = this;
    const storage = this.storage;
    if (storage.hasOwnProperty(keys)) {
      let iter = tmp2;
      if (!self.storage[keys].parsed) {
        const obj = { parsed: true, value: parseValue(self.storage[keys].rawData) };
        const storage2 = self.storage;
        storage2[keys] = obj;
        iter = obj;
      }
      return iter.value;
    } else {
      return arg1;
    }
  }
  getAfterRefresh(arg0) {
    let closure_0 = arg0;
    const self = this;
    return (async () => {
      let parsePromise;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1 = 1;
              c0 = 1;
              const obj4 = { value: parsePromise.then(() => closure_1_1.get(closure_1_0)), done: false };
              parsePromise = self.parsePromise;
              return obj4;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp5) {
          c0 = 3;
          throw tmp5;
        }
      }
    })();
  }
  asyncGet(ContactSyncDMListCTADismissed, arg1, arg2) {
    let closure_0;
    const self = this;
    dependencyMap = ContactSyncDMListCTADismissed;
    let closure_2 = arg1;
    importDefault = arg2;
    const secureKeys = this.secureKeys;
    if (secureKeys.has(ContactSyncDMListCTADismissed)) {
      const value = self.getItem(ContactSyncDMListCTADismissed);
      value.then((result) => {
        if (null != result) {
          const _Date = Date;
          const timestamp = Date.now();
          const tmp7 = parseValue(result);
          const obj = { parsed: true, value: tmp7 };
          self.storage[tmp] = obj;
          const _Date2 = Date;
          if (null != closure_0) {
            const obj2 = AppStartPerformanceDefault;
            obj2.mark("\u{1F4BE}", tmp10, tmp9);
          }
          closure_2(tmp7);
        } else {
          closure_2(null);
        }
      });
    } else {
      const tmp = importDefault;
      let obj = react_nativeDefault;
      const value2 = obj.getItem(ContactSyncDMListCTADismissed);
      value2.then((result) => {
        if (null != result) {
          const _Date = Date;
          const timestamp = Date.now();
          const tmp7 = parseValue(result);
          const obj = { parsed: true, value: tmp7 };
          self.storage[tmp] = obj;
          const _Date2 = Date;
          if (null != closure_0) {
            const obj2 = AppStartPerformanceDefault;
            obj2.mark("\u{1F4BE}", tmp10, tmp9);
          }
          closure_2(tmp7);
        } else {
          closure_2(null);
        }
      });
    }
  }
  asyncGetRaw(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const self = this;
    return self(function* () {
      let c2;
      let tmp4;
      let value;
      closure_1 = tmp;
      if (null != closure_1) {
        const obj4 = tmp4(closure_1[3]);
        obj4.mark("\u{1F4BE}", "Get: " + closure_1);
      }
      const secureKeys = self.secureKeys;
      if (secureKeys.has(tmp4)) {
        value = item.getItem(tmp19);
      } else {
        const obj5 = tmp4(closure_1[2]);
        value = obj5.getItem(tmp19);
      }
      yield value;
      tmp4 = value;
      let tmp13 = null;
      if (null != tmp4) {
        if (null != closure_129_1) {
          const obj = tmp4(closure_1[3]);
          obj.mark("\u{1F4BE}", "Got: " + closure_129_1);
        }
        tmp13 = tmp4;
      }
      return tmp13;
    })();
  }
  getRaw(keys) {
    const storage = this.storage;
    if (storage.hasOwnProperty(keys)) {
      let tmp2 = null;
      if (!this.storage[keys].parsed) {
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
  }
  set(arg0, value) {
    this.setRaw(arg0, JSON.stringify(value));
    this.storage[arg0] = { parsed: true, value };
  }
  setRaw(str, rawData) {
    if (typeof str !== "string") {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("Key must be a string");
      throw error;
    } else if (typeof rawData !== "string") {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error1 = new Error("value must be a string");
      throw error1;
    } else {
      const self5 = this;
      const obj2 = { parsed: false, rawData };
      this.storage[str] = obj2;
      const secureKeys = this.secureKeys;
      if (secureKeys.has(str)) {
        const result = DCDStrongboxManager.setItem(str, rawData);
      } else {
        const obj = react_nativeDefault;
        const result1 = obj.setItem(str, rawData);
      }
    }
  }
  remove(arg0) {
    delete this.storage[arg0];
    const secureKeys = this.secureKeys;
    if (secureKeys.has(arg0)) {
      DCDStrongboxManager.removeItem(arg0);
    } else {
      const obj = react_nativeDefault;
      obj.removeItem(arg0);
    }
  }
  clear() {
    this.storage = {};
    const obj = react_nativeDefault;
    obj.clear();
    if (DCDStrongboxManager != null) {
      const items = [];
      const clear = DCDStrongboxManager.clear;
      HermesBuiltin.arraySpread(items, this.secureKeys, 0);
      clear(items);
    }
  }
}
const prototype = ProxyAsyncStorage.prototype;
let obj = Object.create(ProxyAsyncStorage.prototype);
const promise = new Promise((parseResolve) => {
  obj.parseResolve = parseResolve;
});
obj.parsePromise = promise;
obj.storage = {};
const set = new Set();
obj.secureKeys = set;
obj.hasLoaded = false;
let result = size.fileFinishedImporting("../discord_common/js/packages/storage/native/Storage.tsx");

export const impl = obj;
