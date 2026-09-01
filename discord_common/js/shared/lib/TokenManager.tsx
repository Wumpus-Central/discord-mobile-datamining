// discord_common/js/shared/lib/TokenManager.tsx
import set from "../../../../_runtime/00002_set.js";
import Storage6 from "../../packages/storage/Storage.tsx";
import sum from "../Constants.tsx";

function setSecondaryToken(token, __analytics__) {
  if (null != __analytics__) {
    closure_10[__analytics__] = token;
  }
  if (c9) {
    encryptAndStoreTokens();
  } else {
    closure_8 = closure_7;
    closure_11 = closure_10;
    if (c12) {
      const Storage4 = Storage6.Storage;
      Storage4.remove(closure_3);
      const Storage5 = Storage6.Storage;
      Storage5.remove(closure_2);
    } else {
      if (null != tmp3) {
        const Storage2 = Storage6.Storage;
        const result = Storage2.set(closure_3, closure_8);
        let tmp6 = require;
      } else {
        tmp6 = require;
        const Storage = Storage6.Storage;
        Storage.remove(closure_3);
      }
      const Storage3 = tmp6(595).Storage;
      const result1 = Storage3.set(closure_2, closure_11);
    }
  }
}
function removeToken(__analytics__) {
  let tmp3 = c7;
  if (null != __analytics__) {
    tmp3 = dependencyMap[__analytics__];
    delete tmp[tmp2];
    delete tmp[tmp2];
  }
  if (tmp3 === c7) {
    c7 = null;
    c8 = null;
  }
  if (c12) {
    const Storage4 = Storage6.Storage;
    Storage4.remove(closure_3);
    const Storage5 = Storage6.Storage;
    Storage5.remove(closure_2);
  } else {
    if (null != c8) {
      const Storage2 = Storage6.Storage;
      const result = Storage2.set(closure_3, c8);
      let tmp8 = require;
    } else {
      tmp8 = require;
      const Storage = Storage6.Storage;
      Storage.remove(closure_3);
    }
    const Storage3 = tmp8(595).Storage;
    const result1 = Storage3.set(closure_2, closure_11);
  }
  return null != tmp3;
}
function encryptAndStoreTokens() {
  let result;
  if (safeStorage != null) {
    result = obj.isEncryptionAvailable();
  }
  if (result) {
    if (null != tmp2) {
      let result1;
      if (obj != null) {
        result1 = obj.isEncryptionAvailable();
      }
      let combined = obj2;
      if (result1) {
        combined = obj2;
        if (!obj2.startsWith(c4)) {
          let _HermesInternal = HermesInternal;
          combined = "" + tmp6 + obj.encryptString(obj2);
        }
        tmp6 = c4;
      }
      closure_8 = combined;
    }
    const _Object = Object;
    const entries = Object.entries(closure_10);
    let items = [];
    HermesBuiltin.arraySpread(
      entries.map((arg0) => {
        [tmp, obj] = arg0;
        const items = [tmp];
        let result;
        if (closure_6 != null) {
          result = obj2.isEncryptionAvailable();
        }
        let combined = obj;
        if (result) {
          combined = obj;
          if (!obj.startsWith(closure_4)) {
            const _HermesInternal = HermesInternal;
            combined = "" + tmp4 + obj2.encryptString(obj);
          }
          tmp4 = closure_4;
        }
        items[1] = combined;
        return items;
      }),
      0,
    );
    closure_11 = items.reduce((arg0, arg1) => {
      [tmp, tmp2] = arg1;
      arg0[tmp] = tmp2;
      return arg0;
    }, {});
    c9 = true;
  } else {
    closure_8 = tmp2;
    closure_11 = closure_10;
  }
  if (c12) {
    const Storage4 = Storage6.Storage;
    Storage4.remove(closure_3);
    const Storage5 = Storage6.Storage;
    Storage5.remove(closure_2);
  } else {
    if (null != closure_8) {
      const Storage2 = Storage6.Storage;
      const result2 = Storage2.set(closure_3, closure_8);
      let tmp13 = require;
    } else {
      tmp13 = require;
      const Storage = Storage6.Storage;
      Storage.remove(closure_3);
    }
    const Storage3 = tmp13(595).Storage;
    const result3 = Storage3.set(closure_2, closure_11);
  }
}
({ TOKENS_KEY: obj1, TOKEN_KEY: c3 } = sum);
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
function getToken(arg0) {
  if (null != arg0) {
    let tmp = dependencyMap[arg0];
  } else {
    tmp = closure_7;
  }
  return tmp;
}
let result = set.fileFinishedImporting("../discord_common/js/shared/lib/TokenManager.tsx");

export const init = function init() {
  if (!c13) {
    const Storage = Storage6.Storage;
    closure_8 = Storage.get(closure_3);
    const Storage2 = Storage6.Storage;
    closure_11 = Storage2.get(closure_2) || {};
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
            obj[0] = obj.decryptString(arr.substring(12));
          }
        }
        obj = { decryptedToken: null, wasEncrypted: false };
        obj[0] = arr;
      }
      ({ wasEncrypted: c9, decryptedToken: closure_7 } = obj);
      const _Object = Object;
      const entries = Object.entries(closure_11);
      const mapped = entries.map((arg0) => {
        [tmp, arr] = arg0;
        if (null != arr) {
          if (0 !== arr.length) {
            let obj = closure_6;
            let result;
            if (closure_6 != null) {
              result = obj.isEncryptionAvailable();
            }
            if (result) {
              if (arr.startsWith(closure_4)) {
                obj = { decryptedToken: null, wasEncrypted: true };
                obj[0] = obj.decryptString(arr.substring(12));
              }
            }
            obj = { decryptedToken: null, wasEncrypted: false };
            obj[0] = arr;
          }
          ({ wasEncrypted, decryptedToken } = obj);
          const items = [tmp, decryptedToken];
          return items;
        }
        obj = { decryptedToken: null, wasEncrypted: false };
      });
      let items = [];
      HermesBuiltin.arraySpread(
        mapped.filter((arg0) => {
          [, tmp] = arg0;
          return null != tmp;
        }),
        0,
      );
      closure_10 = items.reduce((arg0, arg1) => {
        [tmp, tmp2] = arg1;
        arg0[tmp] = tmp2;
        return arg0;
      }, {});
      c13 = true;
    }
    obj = { decryptedToken: null, wasEncrypted: false };
    const tmp5 = Storage2.get(closure_2) || {};
  }
};
export const getAnalyticsToken = function getAnalyticsToken() {
  if (null != __analytics__) {
    let tmp2 = dependencyMap[tmp];
  } else {
    tmp2 = closure_7;
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
    closure_7 = token;
    setSecondaryToken(token, id);
  } else {
    removeToken(id);
  }
};
export const hideToken = function hideToken() {
  if (!c12) {
    c12 = true;
    const Storage = Storage6.Storage;
    Storage.remove(closure_3);
    const Storage2 = Storage6.Storage;
    Storage2.remove(closure_2);
  }
};
export const showToken = function showToken() {
  if (c12) {
    c12 = false;
    if (null != closure_8) {
      const Storage2 = Storage6.Storage;
      const result = Storage2.set(closure_3, closure_8);
      let tmp3 = require;
    } else {
      tmp3 = require;
      const Storage = Storage6.Storage;
      Storage.remove(closure_3);
    }
    const Storage3 = tmp3(595).Storage;
    const result1 = Storage3.set(closure_2, closure_11);
  }
};
export { removeToken };
export const removeAnalyticsToken = function removeAnalyticsToken() {
  return removeToken(__analytics__);
};
export { encryptAndStoreTokens };
