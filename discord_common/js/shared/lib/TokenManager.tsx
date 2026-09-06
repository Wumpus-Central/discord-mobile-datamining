// === Module 1099: TokenManager ===

// Module 1099 (TokenManager)
import Storage6 from "Storage" /* 510 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

function setSecondaryToken(token, __analytics__) {
  if (null != __analytics__) {
    closure_10[__analytics__] = token;
  }
  if (c9) {
    encryptAndStoreTokens();
  } else {
    closure_8 = global;
    closure_11 = closure_10;
    if (c12) {
      const Storage4 = Storage6.Storage;
      Storage4.remove(React3);
      const Storage5 = Storage6.Storage;
      Storage5.remove(React2);
    } else {
      if (null != tmp3) {
        const Storage2 = Storage6.Storage;
        const result = Storage2.set(React3, closure_8);
        let tmp6 = require;
      } else {
        tmp6 = require;
        const Storage = Storage6.Storage;
        Storage.remove(React3);
      }
      const Storage3 = tmp6(510).Storage;
      const result1 = Storage3.set(React2, closure_11);
    }
  }
}
function removeToken(__analytics__) {
  let tmp3 = global;
  if (null != __analytics__) {
    tmp3 = dependencyMap[__analytics__];
    delete tmp[tmp2];
    delete tmp[tmp2];
  }
  if (tmp3 === global) {
    global = null;
    closure_8 = null;
  }
  if (c12) {
    const Storage4 = Storage6.Storage;
    Storage4.remove(React3);
    const Storage5 = Storage6.Storage;
    Storage5.remove(React2);
  } else {
    if (null != closure_8) {
      const Storage2 = Storage6.Storage;
      const result = Storage2.set(React3, closure_8);
      let tmp8 = require;
    } else {
      tmp8 = require;
      const Storage = Storage6.Storage;
      Storage.remove(React3);
    }
    const Storage3 = tmp8(510).Storage;
    const result1 = Storage3.set(React2, closure_11);
  }
  return null != tmp3;
}
function encryptAndStoreTokens() {
  let result;
  if (safeStorage != null) {
    result = safeStorage.isEncryptionAvailable();
  }
  if (result) {
    if (null != global) {
      let result1;
      if (safeStorage != null) {
        result1 = safeStorage.isEncryptionAvailable();
      }
      let combined = global;
      if (result1) {
        combined = global;
        if (!global.startsWith(c4)) {
          let _HermesInternal = HermesInternal;
          combined = "" + c4 + safeStorage.encryptString(global);
        }
      }
      closure_8 = combined;
    }
    const _Object = Object;
    const entries = Object.entries(closure_10);
    let items = [];
    HermesBuiltin.arraySpread(entries.map((item) => {
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
    closure_11 = items.reduce((acc, item) => {
      [tmp, tmp2] = item;
      acc[tmp] = tmp2;
      return acc;
    }, {});
    c9 = true;
  } else {
    closure_8 = global;
    closure_11 = closure_10;
  }
  if (c12) {
    const Storage4 = Storage6.Storage;
    Storage4.remove(React3);
    const Storage5 = Storage6.Storage;
    Storage5.remove(React2);
  } else {
    if (null != closure_8) {
      const Storage2 = Storage6.Storage;
      const result2 = Storage2.set(React3, closure_8);
      let tmp13 = require;
    } else {
      tmp13 = require;
      const Storage = Storage6.Storage;
      Storage.remove(React3);
    }
    const Storage3 = tmp13(510).Storage;
    const result3 = Storage3.set(React2, closure_11);
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
const dependencyMap = {};
let closure_11 = {};
let c12 = false;
let c13 = false;
function getToken(id) {
  if (null != id) {
    let tmp = dependencyMap[id];
  } else {
    tmp = global;
  }
  return tmp;
}
let result = size.fileFinishedImporting("../discord_common/js/shared/lib/TokenManager.tsx");

export const init = function init() {
  if (!c13) {
    const Storage = Storage6.Storage;
    closure_8 = Storage.get(React3);
    const Storage2 = Storage6.Storage;
    closure_11 = Storage2.get(React2) || {};
    if (null != closure_8) {
      if (0 !== arr.length) {
        let obj = safeStorage;
        let result;
        if (safeStorage != null) {
          result = obj.isEncryptionAvailable();
        }
        if (result) {
          if (arr.startsWith(c4)) {
            obj = { decryptedToken: null, wasEncrypted: true };
            obj.decryptedToken = obj.decryptString(arr.substring(12));
          }
        }
        obj = { decryptedToken: arr, wasEncrypted: false };
      }
      ({ wasEncrypted: c9, decryptedToken: global } = obj);
      const _Object = Object;
      const entries = Object.entries(closure_11);
      const mapped = entries.map((item) => {
        [tmp, arr] = item;
        if (null != arr) {
          if (0 !== arr.length) {
            let obj = safeStorage;
            let result;
            if (safeStorage != null) {
              result = obj.isEncryptionAvailable();
            }
            if (result) {
              if (arr.startsWith(closure_1_4)) {
                obj = { decryptedToken: null, wasEncrypted: true };
                obj.decryptedToken = obj.decryptString(arr.substring(12));
              }
            }
            obj = { decryptedToken: arr, wasEncrypted: false };
          }
          ({ wasEncrypted, decryptedToken } = obj);
          const items = [tmp, decryptedToken];
          return items;
        }
        obj = { decryptedToken: null, wasEncrypted: false };
      });
      let items = [];
      HermesBuiltin.arraySpread(mapped.filter((item) => {
        [, tmp] = item;
        return null != tmp;
      }), 0);
      closure_10 = items.reduce((acc, item) => {
        [tmp, tmp2] = item;
        acc[tmp] = tmp2;
        return acc;
      }, {});
      c13 = true;
    }
    obj = { decryptedToken: null, wasEncrypted: false };
    const tmp5 = Storage2.get(React2) || {};
  }
};
export const getAnalyticsToken = function getAnalyticsToken() {
  if (null != __analytics__) {
    let tmp2 = dependencyMap[tmp];
  } else {
    tmp2 = global;
  }
  return tmp2;
};
export { getToken };
export const setAnalyticsToken = function setAnalyticsToken(analyticsToken) {
  if (null != analyticsToken) {
    setSecondaryToken(analyticsToken, __analytics__);
  } else {
    removeToken(__analytics__);
  }
};
export const setToken = function setToken(token, id) {
  if (null != token) {
    global = token;
    setSecondaryToken(token, id);
  } else {
    removeToken(id);
  }
};
export const hideToken = function hideToken() {
  if (!c12) {
    c12 = true;
    const Storage = Storage6.Storage;
    Storage.remove(React3);
    const Storage2 = Storage6.Storage;
    Storage2.remove(React2);
  }
};
export const showToken = function showToken() {
  if (c12) {
    c12 = false;
    if (null != closure_8) {
      const Storage2 = Storage6.Storage;
      const result = Storage2.set(React3, closure_8);
      let tmp3 = require;
    } else {
      tmp3 = require;
      const Storage = Storage6.Storage;
      Storage.remove(React3);
    }
    const Storage3 = tmp3(510).Storage;
    const result1 = Storage3.set(React2, closure_11);
  }
};
export { removeToken };
export const removeAnalyticsToken = function removeAnalyticsToken() {
  return removeToken(__analytics__);
};
export { encryptAndStoreTokens };