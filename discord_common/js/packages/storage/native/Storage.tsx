// === Module 596: parseValue ===

// Module 596 (parseValue)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_3 from "enforcing" /* 597 */;
import set from "set" /* 2 */;

let set = importDefault;
function parseValue(arg0) {
  let parsed = arg0;
  if (null != arg0) {
    try {
      const _JSON = JSON;
      parsed = JSON.parse(parsed);
    } catch (err) {
    }
  }
  return parsed;
}
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
  let self = this;
  self = this;
  let items = arg0;
  if (arg0 === undefined) {
    items = [];
  }
  if (arg1 === undefined) {
    const _Set = Set;
    new Set();
  }
  self.secureKeys = new Set();
  const items1 = [closure_3.refresh(items), ];
  let refreshResult;
  if (DCDStrongboxManager != null) {
    const items2 = [];
    HermesBuiltin.arraySpread(self.secureKeys, 0);
    refreshResult = obj.refresh(items2);
  }
  items1[1] = refreshResult;
  obj = DCDStrongboxManager;
  const set1 = new Set();
  return Promise.all(items1).then((arg0) => {
    [tmp2, tmp3] = arg0;
    self(closure_1_1[3]).mark("\u{1F4BE}", "Storage.refresh() Promise Resolved");
    let num = 0;
    let num2 = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      num2 = num;
      while (keys[tmp] !== undefined) {
        let tmp12 = tmp7;
        let length = tmp2[tmp7].length;
        let sum = num + length;
        num = sum;
        if (length <= 10000) {
          continue;
        } else {
          let tmp8 = self;
          let tmp9 = closure_1_1;
          let obj2 = self(closure_1_1[3]);
          let addDetailResult = obj2.addDetail(tmp7, length);
          num = sum;
          continue;
        }
        continue;
      }
    }
    const obj = self(closure_1_1[3]);
    self(closure_1_1[3]).addDetail("TotalStorageSize", num2);
    self.hasLoaded = true;
    const items = [tmp2, tmp3];
    return items;
  });
};
prototype["parse"] = function parse(arg0) {
  let self = this;
  self = this;
  [tmp, tmp2] = arg0;
  self(598)(tmp2, (rawData) => {
    self.storage[arg1] = { parsed: false, rawData };
  });
  self(598)(tmp, (rawData) => {
    _self.storage[arg1] = { parsed: false, rawData };
    const secureKeys = _self.secureKeys;
    if (secureKeys.has(arg1)) {
      _self = arg1;
      const result = closure_1_4.setItem(arg1, rawData);
      result.then((arg0) => {
        if (arg0) {
          closure_1_3.removeItem(closure_0);
        }
      });
    }
  });
  self.parseResolve();
  return Promise.resolve();
};
prototype["get"] = function get(key10009) {
  const self = this;
  const storage = this.storage;
  if (storage.hasOwnProperty(key10009)) {
    let iter = tmp2;
    if (!self.storage[key10009].parsed) {
      const obj = { parsed: true, value: null };
      obj[1] = parseValue(tmp2.rawData);
      self.storage[key10009] = obj;
      iter = obj;
    }
    return iter.value;
  } else {
    return arg1;
  }
};
prototype["getAfterRefresh"] = function getAfterRefresh(closure_1_13) {
  closure_0 = closure_1_13;
  const self = this;
  return callback(function*() {
    yield parsePromise.then(() => c1.get(c0));
    return arg1;
  })();
};
prototype["asyncGet"] = function asyncGet(ContactSyncDMListCTADismissed, arg1) {
  const self = this;
  closure_1 = ContactSyncDMListCTADismissed;
  closure_2 = arg1;
  closure_0 = arg2;
  const secureKeys = this.secureKeys;
  if (secureKeys.has(ContactSyncDMListCTADismissed)) {
    let value = DCDStrongboxManager.getItem(ContactSyncDMListCTADismissed);
    value.then((arg0) => {
      if (null != arg0) {
        const _Date = Date;
        const timestamp = Date.now();
        const tmp7 = closure_1_5(arg0);
        const obj = { parsed: true, value: null };
        obj[1] = tmp7;
        self.storage[tmp] = obj;
        const _Date2 = Date;
        if (null != callback) {
          callback(ContactSyncDMListCTADismissed[3]).mark("\u{1F4BE}", tmp10, tmp9);
          const obj2 = callback(ContactSyncDMListCTADismissed[3]);
        }
        callback2(tmp7);
      } else {
        callback2(null);
      }
    });
  } else {
    value = self.getItem(ContactSyncDMListCTADismissed);
    value.then((arg0) => {
      if (null != arg0) {
        const _Date = Date;
        const timestamp = Date.now();
        const tmp7 = closure_1_5(arg0);
        const obj = { parsed: true, value: null };
        obj[1] = tmp7;
        self.storage[tmp] = obj;
        const _Date2 = Date;
        if (null != callback) {
          callback(ContactSyncDMListCTADismissed[3]).mark("\u{1F4BE}", tmp10, tmp9);
          const obj2 = callback(ContactSyncDMListCTADismissed[3]);
        }
        callback2(tmp7);
      } else {
        callback2(null);
      }
    });
  }
};
prototype["asyncGetRaw"] = function asyncGetRaw(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const self = this;
  return self(function*() {
    if (item === 2) {
      item = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        item = 2;
        if (0 === secureKeys) {
          if (arg0 === 1) {
            item = 3;
            throw arg1;
          } else if (arg0 === 2) {
            item = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp2;
            closure_0 = tmp5;
            closure_0 = undefined;
            if (null != closure_1_1) {
              closure_1_0(closure_1_1[3]).mark("\u{1F4BE}", "Get: " + closure_1_1);
              const obj4 = closure_1_0(closure_1_1[3]);
            }
            secureKeys = secureKeys.secureKeys;
            if (secureKeys.has(closure_1_0)) {
              let value = closure_1_4.getItem(tmp20);
            } else {
              value = item.getItem(tmp20);
            }
            secureKeys = 1;
            item = 1;
          }
        } else if (arg0 === 1) {
          item = 3;
          throw arg1;
        } else if (arg0 === 2) {
          item = 3;
          obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          closure_0 = arg1;
          let tmp14 = null;
          if (null != closure_0) {
            if (null != closure_1) {
              obj = closure_1_0(closure_1_1[3]);
              obj.mark("\u{1F4BE}", "Got: " + closure_1);
            }
            tmp14 = closure_0;
          }
          item = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = tmp14;
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
prototype["setRaw"] = function setRaw(str, str2) {
  if (typeof str !== "string") {
    const _Error2 = Error;
    error = new Error("Key must be a string");
    throw error;
  } else if (typeof str2 !== "string") {
    const _Error = Error;
    const error1 = new Error("value must be a string");
    throw error1;
  } else {
    const self = this;
    const obj = { parsed: false, rawData: null };
    obj[1] = str2;
    this.storage[str] = obj;
    const secureKeys = this.secureKeys;
    if (secureKeys.has(str)) {
      const result = DCDStrongboxManager.setItem(str, str2);
    } else {
      const result1 = closure_3.setItem(str, str2);
    }
  }
};
prototype["remove"] = function remove(arg0) {
  delete tmp2[tmp];
  const secureKeys = this.secureKeys;
  if (secureKeys.has(arg0)) {
    DCDStrongboxManager.removeItem(arg0);
  } else {
    closure_3.removeItem(arg0);
  }
};
prototype["clear"] = function clear() {
  this.storage = {};
  closure_3.clear();
  if (DCDStrongboxManager != null) {
    const items = [];
    HermesBuiltin.arraySpread(this.secureKeys, 0);
    DCDStrongboxManager.clear(items);
  }
};
set = Object.create(ProxyAsyncStorage.prototype);
set.parsePromise = new Promise((parseResolve) => {
  obj.parseResolve = parseResolve;
});
set.storage = {};
set = new Set();
set.secureKeys = set;
set.hasLoaded = false;
let result = set.fileFinishedImporting("../discord_common/js/packages/storage/native/Storage.tsx");

export const impl = set;