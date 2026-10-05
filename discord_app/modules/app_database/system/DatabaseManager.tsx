// === Module 2095: DatabaseManager ===

// Module 2095 (DatabaseManager)
import LoggerDefault from "Logger" /* 3 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Dispatcher2 from "Dispatcher" /* 584 */;
import _mod2079 from "module_2079" /* 2079 */;
import react_nativeAll from "react-native" /* 2096 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const Dispatcher = Dispatcher2;
let _require, c2, c3, c5, c6, closure_3;

let tmp;
function CLEAR_CACHES(arg0) {
  return closure_0.handleClearCaches(arg0);
}
function CONNECTION_CLOSED() {
  return closure_0.handleAuthenticationStoreChanged();
}
function CONNECTION_OPEN() {
  return closure_0.handleConnectionOpen();
}
function databaseName(arg0) {
  return "@account." + arg0;
}
let obj = function _trySpeculativelyOpenDatabaseAsync() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            const tmp21 = databaseName(closure_0);
            const _HermesInternal = HermesInternal;
            closure_2_6.verbose("speculatively opening " + tmp21);
            c4 = 1;
            const Database = require("module_2079").Database;
            c5 = 2;
            c6 = 1;
            const obj4 = { value: Database.open(tmp21), done: false };
            return obj4;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_0 = closure_3;
          closure_130_6.warn("couldn't speculatively open database.", closure_0);
          c6 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp12) {
        closure_3 = tmp12;
        if (0 === c4) {
          c6 = 3;
          throw tmp12;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let tmp3 = new LoggerDefault("DatabaseManager");
const metroRequire = tmp3;
const Store = get_initializedDefault.Store;
class DatabaseManager extends Store {
  constructor() {
    _require = undefined;
    const tmp2 = Dispatcher;
    obj = { CLEAR_CACHES, CONNECTION_CLOSED, CONNECTION_OPEN, LOGOUT };
    class LOGOUT {
      constructor() {
        return closure_0.handleAuthenticationStoreChanged();
      }
    }
    const tmp3 = new tmp(tmp2, obj, Dispatcher2.DispatchBand.Early, LOGOUT, new.target, tmp, tmp2);
    _require = tmp3;
    tmp3.databases = new Map();
    tmp3.activeUserId = null;
    tmp3.preventWritingCachesAgainThisSession = false;
    new Map();
    return tmp3;
  }
  initialize() {
    const self = this;
    this.waitFor(AuthenticationStore);
    const carefullySpeculativelyOpen = this.carefullySpeculativelyOpen;
    obj = react_nativeAll;
    const result = carefullySpeculativelyOpen(obj.getUserId());
    const result1 = this.handleAuthenticationStoreChanged();
    AuthenticationStore.addChangeListener(() => self.handleAuthenticationStoreChanged());
  }
  databaseName(arg0) {
    return "@account." + arg0;
  }
  database(arg0) {
    let tmp = null;
    if (null != arg0) {
      const self = this;
      const databases = this.databases;
      let value = databases.get(arg0);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
  carefullyOpenDatabase(id) {
    function tryUntil(arg0, fn) {
      let num = 0;
      if (0 >= 50) {
        return null;
      } else {
        let tmp2;
        try {
          tmp2 = fn();
        } catch (tmp3) {
          const _HermesInternal = HermesInternal;
          logger.error("tryUntil " + num, tmp3);
          num = num + 1;
        }
        return tmp2;
      }
    }
    const self = this;
    if (this.preventWritingCachesAgainThisSession) {
      logger.verbose("Not opening database because caches have been manually cleared.");
      return null;
    } else {
      if (null != id) {
        const databases2 = self.databases;
        if (!databases2.has(id)) {
          let tmp2 = globalThis;
          let _HermesInternal = HermesInternal;
          const combined = "@account." + id;
          const _HermesInternal2 = HermesInternal;
          logger.verbose("synchronously opening " + combined);
          let num = 50;
          const tmp6 = tryUntil(50, () => {
            const Database = _mod2079.Database;
            return Database.openSyncUnsafe(combined, { invalidateDisabledHandles: true });
          });
          const _HermesInternal3 = HermesInternal;
          logger.verbose("added database (" + id + " \u2192 " + tmp6 + ")");
          const databases = self.databases;
          const result = databases.set(id, tmp6);
          self.emitChange();
        }
      }
      return self.database(id);
    }
  }
  replaceDisableAllDatabases(arg0) {
    const self = this;
    closure_6.info("disabling and nulling all databases (reason: " + arg0 + ")");
    const databases = this.databases;
    const keys = databases.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let databases2 = self.databases;
      let tmp4 = nextResult;
      let value = databases2.get(nextResult);
      let obj2 = value;
      if (value != null) {
        let disableResult = value.disable(arg0);
      }
      if (obj2 != null) {
        let closeResult = obj2.close();
      }
      let databases3 = self.databases;
      let result = databases3.set(tmp4, null);
      continue;
    }
    self.emitChange();
  }
  remove(arg0) {
    const self = this;
    const databases = this.databases;
    const value = databases.get(arg0);
    closure_6.log("removing database (user: " + arg0 + ", database: " + value + ")");
    if (value != null) {
      value.close();
    }
    const databases2 = self.databases;
    databases2.delete(arg0);
    self.emitChange();
  }
  handleClearCaches(preventWritingCachesAgainThisSession) {
    const self = this;
    if (preventWritingCachesAgainThisSession.preventWritingCachesAgainThisSession) {
      self.preventWritingCachesAgainThisSession = true;
    }
    const result = self.replaceDisableAllDatabases("DatabaseManager (" + preventWritingCachesAgainThisSession.reason + ")");
  }
  handleConnectionOpen() {
    let stateResult;
    const self = this;
    const id = AuthenticationStore.getId();
    const databases = this.databases;
    const value = databases.get(id);
    if (value != null) {
      stateResult = value.state();
    }
    const tmp3 = null == value && stateResult !== _mod2079.DatabaseState.Open;
    if (tmp3) {
      self.remove(id);
    }
    const result = self.carefullyOpenDatabase(id);
  }
  handleAuthenticationStoreChanged() {
    const self = this;
    const id = AuthenticationStore.getId();
    const activeUserId = this.activeUserId;
    if (id !== activeUserId) {
      const databases2 = self.databases;
      const value = databases2.get(activeUserId);
      const _HermesInternal = HermesInternal;
      closure_6.verbose("active user changed (now: " + id + ", was: " + activeUserId + ", was: " + value + ")");
      if (value != null) {
        value.close();
      }
      obj = react_nativeAll;
      obj.setUserId(id);
      self.activeUserId = id;
      const databases = self.databases;
      databases.delete(activeUserId);
    }
  }
}
function carefullySpeculativelyOpen(userId) {
  let closure_0 = userId;
  const self = this;
  return (async () => {
    function trySpeculativelyOpenDatabaseAsync() {
      return closure_1_8(...arguments);
    }
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        let closure_0;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            if (self.preventWritingCachesAgainThisSession) {
              closure_1_6.verbose("Not opening database because caches have been manually cleared.");
            } else if (null != closure_0) {
              c2 = 1;
              c3 = 1;
              const obj4 = { value: trySpeculativelyOpenDatabaseAsync(closure_0), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_0 = value;
          if (null != closure_0) {
            const databases2 = closure_129_1.databases;
            if (!databases2.has(closure_129_0)) {
              const _HermesInternal = HermesInternal;
              closure_1_6.verbose("added speculative database (" + closure_129_0 + " \u2192 " + closure_0 + ")");
              const databases = closure_129_1.databases;
              const result = databases.set(closure_129_0, closure_0);
              closure_129_1.emitChange();
            }
          }
          const _HermesInternal2 = HermesInternal;
          closure_1_6.verbose("discarding speculative database (" + closure_129_0 + " \u2192 " + closure_0 + ")");
          obj = closure_0;
          if (closure_0 != null) {
            obj.close();
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp31) {
        c3 = 3;
        throw tmp31;
      }
    }
  })();
}
DatabaseManager.prototype["carefullySpeculativelyOpen"] = carefullySpeculativelyOpen;
obj = {
  CLEAR_CACHES,
  CONNECTION_CLOSED,
  CONNECTION_OPEN,
  LOGOUT() {
    return closure_0.handleAuthenticationStoreChanged();
  }
};
let tmp2 = new tmp(Dispatcher, obj, Dispatcher2.DispatchBand.Early, DatabaseManager, tmp, Dispatcher, obj, this, undefined, carefullySpeculativelyOpen, globalThis, require);
const React = tmp2;
const map = new Map();
tmp2.databases = map;
tmp2.activeUserId = null;
tmp2.preventWritingCachesAgainThisSession = false;
let result = size.fileFinishedImporting("modules/app_database/system/DatabaseManager.tsx");

export default tmp2;