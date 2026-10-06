// === Module 1111: TokenManager ===

// Module 1111 (TokenManager)
import Storage6 from "Storage" /* 510 */;
import Constants from "Constants" /* 1096 */;
import size from "module_2" /* 2 */;

let closure_8;

let c2;
let c3;
const f83215 = (acc, item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  acc[tmp] = tmp2;
  return acc;
};
function setSecondaryToken(token, __analytics__) {
  if (null != __analytics__) {
    closure_10[__analytics__] = token;
  }
  if (c9) {
    encryptAndStoreTokens();
  } else {
    closure_8 = c7;
    closure_11 = closure_10;
    if (c12) {
      const Storage4 = Storage6.Storage;
      Storage4.remove(_false);
      const Storage5 = Storage6.Storage;
      Storage5.remove(React2);
    } else {
      let tmp7;
      if (null != tmp4) {
        const Storage2 = Storage6.Storage;
        const result = Storage2.set(_false, closure_8);
        tmp7 = require;
      } else {
        tmp7 = require;
        const Storage = Storage6.Storage;
        Storage.remove(_false);
      }
      const Storage3 = tmp7(510).Storage;
      const result1 = Storage3.set(React2, closure_11);
    }
  }
}
function removeToken(__analytics__) {
  if (c13) {
    let tmp6 = c7;
    if (null != __analytics__) {
      tmp6 = closure_10[__analytics__];
      delete closure_10[__analytics__];
      delete closure_11[__analytics__];
    }
    const tmp9 = null != tmp6 && tmp6 === c7;
    if (tmp9) {
      c7 = null;
      closure_8 = null;
    }
    if (c12) {
      const Storage4 = Storage6.Storage;
      Storage4.remove(_false);
      const Storage5 = Storage6.Storage;
      Storage5.remove(React2);
    } else {
      let tmp13;
      if (null != closure_8) {
        const Storage2 = Storage6.Storage;
        const result = Storage2.set(_false, closure_8);
        tmp13 = require;
      } else {
        tmp13 = require;
        const Storage = Storage6.Storage;
        Storage.remove(_false);
      }
      const Storage3 = tmp13(510).Storage;
      const result1 = Storage3.set(React2, closure_11);
    }
    return null != tmp6;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("TokenManager must be initialized before mutation");
    throw error;
  }
}
function encryptAndStoreTokens() {
  if (c13) {
    let result;
    if (safeStorage != null) {
      result = safeStorage.isEncryptionAvailable();
    }
    if (result) {
      if (null != _null) {
        let result1;
        if (safeStorage != null) {
          result1 = safeStorage.isEncryptionAvailable();
        }
        let combined = _null;
        if (result1) {
          combined = _null;
          if (!_null.startsWith(c4)) {
            let _HermesInternal = HermesInternal;
            combined = "" + c4 + safeStorage.encryptString(_null);
          }
        }
        closure_8 = combined;
      }
      const _Object = Object;
      const entries = Object.entries(closure_10);
      let items = [];
      HermesBuiltin.arraySpread(items, entries.map((item) => {
        let obj;
        let tmp;
        [tmp, obj] = item;
        const items = [tmp, ];
        let result;
        if (safeStorage != null) {
          result = safeStorage.isEncryptionAvailable();
        }
        let combined = obj;
        if (result) {
          combined = obj;
          if (!obj.startsWith(closure_1_4)) {
            const _HermesInternal = HermesInternal;
            combined = "" + closure_1_4 + safeStorage.encryptString(obj);
          }
        }
        items[1] = combined;
        return items;
      }), 0);
      closure_11 = items.reduce(f83215, {});
      c9 = true;
    } else {
      closure_8 = _null;
      closure_11 = closure_10;
    }
    if (c12) {
      const Storage4 = Storage6.Storage;
      Storage4.remove(_false);
      const Storage5 = Storage6.Storage;
      Storage5.remove(React2);
    } else {
      let tmp20;
      if (null != closure_8) {
        const Storage2 = Storage6.Storage;
        const result2 = Storage2.set(_false, closure_8);
        tmp20 = require;
      } else {
        tmp20 = require;
        const Storage = Storage6.Storage;
        Storage.remove(_false);
      }
      const Storage3 = tmp20(510).Storage;
      const result3 = Storage3.set(React2, closure_11);
    }
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("TokenManager must be initialized before mutation");
    throw error;
  }
}
({ TOKENS_KEY: c2, TOKEN_KEY: c3 } = Constants);
let c4 = "dQw4w9WgXcQ:";
const __analytics__ = "__analytics__";
let safeStorage = null;
if (null != DiscordNative) {
  safeStorage = DiscordNative.safeStorage;
}
let c9 = false;
let closure_10 = {};
let closure_11 = {};
let c12 = false;
let c13 = false;
function getToken(id) {
  let tmp;
  if (null != id) {
    tmp = closure_10[id];
  } else {
    tmp = c7;
  }
  return tmp;
}
let result = size.fileFinishedImporting("../discord_common/js/shared/lib/TokenManager.tsx");

export const init = function init() {
  let c7;
  let wasEncrypted;
  const tmp2 = c13;
  if (!tmp2) {
    const Storage = Storage6.Storage;
    closure_8 = Storage.get(_false);
    const Storage2 = Storage6.Storage;
    closure_11 = Storage2.get(React2) || {};
    const arr = closure_8;
    Storage2.get(React2) || {};
    if (null != closure_8) {
      let obj3;
      if (0 !== arr.length) {
        let result;
        if (safeStorage != null) {
          result = safeStorage.isEncryptionAvailable();
        }
        if (result) {
          if (arr.startsWith(c4)) {
            let obj2 = { decryptedToken: safeStorage.decryptString(arr.substring(12)), wasEncrypted: true };
            obj3 = obj2;
          }
        }
        obj3 = { decryptedToken: arr, wasEncrypted: false };
      }
      ({ wasEncrypted: c9, decryptedToken: c7 } = obj3);
      const _Object = Object;
      const entries = Object.entries(closure_11);
      const mapped = entries.map((item) => {
        let arr;
        let decryptedToken;
        let tmp;
        [tmp, arr] = item;
        if (null != arr) {
          let obj3;
          if (0 !== arr.length) {
            let result;
            if (safeStorage != null) {
              result = safeStorage.isEncryptionAvailable();
            }
            if (result) {
              if (arr.startsWith(closure_1_4)) {
                obj3 = { decryptedToken: safeStorage.decryptString(arr.substring(12)), wasEncrypted: true };
                const obj2 = { decryptedToken: safeStorage.decryptString(arr.substring(12)), wasEncrypted: true };
              }
            }
            obj3 = { decryptedToken: arr, wasEncrypted: false };
          }
          ({ wasEncrypted, decryptedToken } = obj3);
          const items = [tmp, decryptedToken];
          return items;
        }
        obj3 = { decryptedToken: null, wasEncrypted: false };
      });
      let items = [];
      HermesBuiltin.arraySpread(items, mapped.filter((item) => {
        let tmp;
        [, tmp] = item;
        return null != tmp;
      }), 0);
      closure_10 = items.reduce(f83215, {});
      c13 = true;
    }
    obj3 = { decryptedToken: null, wasEncrypted: false };
  }
};
export const getAnalyticsToken = function getAnalyticsToken() {
  let tmp2;
  if (null != __analytics__) {
    tmp2 = closure_10[tmp];
  } else {
    tmp2 = c7;
  }
  return tmp2;
};
export { getToken };
export const setAnalyticsToken = function setAnalyticsToken(analyticsToken) {
  if (null != analyticsToken) {
    if (c13) {
      setSecondaryToken(analyticsToken, __analytics__);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("TokenManager must be initialized before mutation");
      throw error;
    }
  } else {
    removeToken(__analytics__);
  }
};
export const setToken = function setToken(token, id) {
  if (null != token) {
    if (c13) {
      let c7 = token;
      setSecondaryToken(token, id);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("TokenManager must be initialized before mutation");
      throw error;
    }
  } else {
    removeToken(id);
  }
};
export const hideToken = function hideToken() {
  const tmp = c12;
  if (!tmp) {
    if (c13) {
      c12 = true;
      const Storage = Storage6.Storage;
      Storage.remove(_false);
      const Storage2 = Storage6.Storage;
      Storage2.remove(React2);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("TokenManager must be initialized before mutation");
      throw error;
    }
  }
};
export const showToken = function showToken() {
  const tmp = c12;
  if (tmp) {
    if (c13) {
      let tmp8;
      c12 = false;
      if (null != closure_8) {
        const Storage2 = Storage6.Storage;
        const result = Storage2.set(_false, closure_8);
        tmp8 = require;
      } else {
        tmp8 = require;
        const Storage = Storage6.Storage;
        Storage.remove(_false);
      }
      const Storage3 = tmp8(510).Storage;
      const result1 = Storage3.set(React2, closure_11);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("TokenManager must be initialized before mutation");
      throw error;
    }
  }
};
export { removeToken };
export const removeAnalyticsToken = function removeAnalyticsToken() {
  return removeToken(__analytics__);
};
export { encryptAndStoreTokens };