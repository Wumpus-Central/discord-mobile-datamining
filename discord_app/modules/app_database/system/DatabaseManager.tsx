// discord_app/modules/app_database/system/DatabaseManager.tsx
import getUserId from "getUserId";
import fetchFingerprint from "fetchFingerprint";
import { Store } from "initialize";
import importDefaultResult from "dispatcher";

let c0 = arg1;
function databaseName(arg0) {
  return "@account." + arg0;
}
function _trySpeculativelyOpenDatabaseAsync() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              let closure_1 = tmp7;
              const tmp26 = outer1_7(callback);
              const _HermesInternal = HermesInternal;
              c6.verbose("speculatively opening " + tmp26);
              let c4 = 1;
              const Database = callback(outer1_3[6]).Database;
              c5 = 2;
              c6 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = Database.open(tmp26);
              return obj1;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            callback = closure_3;
            c6.warn("couldn't speculatively open database.", callback);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp15) {
          closure_3 = tmp15;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp15;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _trySpeculativelyOpenDatabaseAsync = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_6 = new require("initialize")("DatabaseManager");
class DatabaseManager extends Store {
  constructor() {
    DispatchBand = undefined;
    tmp2 = require("dispatcher");
    obj = {
      CLEAR_CACHES(arg0) {
            return obj.handleClearCaches(arg0);
          },
      CONNECTION_CLOSED() {
            return obj.handleAuthenticationStoreChanged();
          },
      CONNECTION_OPEN() {
            return obj.handleConnectionOpen();
          },
      LOGOUT: null
    };
    class LOGOUT {
      constructor() {
        return obj.handleAuthenticationStoreChanged();
      }
    }
    obj[3] = LOGOUT;
    tmp = new tmp(tmp2, obj, require("dispatcher").DispatchBand.Early, LOGOUT, new.target, tmp, tmp2);
    // ThrowIfThisInitialized (0x7c)
    DispatchBand = tmp;
    map = new Map();
    tmp.databases = map;
    tmp.activeUserId = null;
    tmp.preventWritingCachesAgainThisSession = false;
    return tmp;
  }
}
const prototype = DatabaseManager.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  this.waitFor(store);
  const result = this.carefullySpeculativelyOpen(importAll(1953).getUserId());
  const result1 = this.handleAuthenticationStoreChanged();
  store.addChangeListener(() => self.handleAuthenticationStoreChanged());
};
prototype["databaseName"] = function databaseName(arg0) {
  return "@account." + arg0;
};
prototype["database"] = function database(arg0) {
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
};
prototype["carefullyOpenDatabase"] = function carefullyOpenDatabase(id) {
  const self = this;
  if (this.preventWritingCachesAgainThisSession) {
    tmp3.verbose("Not opening database because caches have been manually cleared.");
    return null;
  } else {
    if (null != id) {
      const databases2 = self.databases;
      if (!databases2.has(id)) {
        const _HermesInternal = HermesInternal;
        const combined = "@account." + id;
        const _HermesInternal2 = HermesInternal;
        tmp3.verbose("synchronously opening " + combined);
        const tmp6 = (function tryUntil(arg0, arg1) {
          let num = 0;
          if (0 >= 50) {
            return null;
          } else {
            try {
              return arg1();
            } catch (tmp7) {
              logger.error(tmp2 + tmp5, tmp7);
              num = tmp5 + tmp;
            }
          }
        })(50, () => {
          const Database = combined(outer1_3[6]).Database;
          return Database.openSyncUnsafe(combined, { invalidateDisabledHandles: true });
        });
        const _HermesInternal3 = HermesInternal;
        tmp3.verbose("added database (" + id + " \u2192 " + tmp6 + ")");
        const databases = self.databases;
        const result = databases.set(id, tmp6);
        self.emitChange();
      }
    }
    return self.database(id);
  }
};
prototype["replaceDisableAllDatabases"] = function replaceDisableAllDatabases(arg0) {
  const self = this;
  tmp3.info("disabling and nulling all databases (reason: " + arg0 + ")");
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
    let tmp6 = value;
    if (obj2 != null) {
      let closeResult = obj2.close();
    }
    let databases3 = self.databases;
    let tmp8 = nextResult;
    let result = databases3.set(tmp4, null);
    continue;
  }
  self.emitChange();
};
prototype["remove"] = function remove(arg0) {
  const self = this;
  const databases = this.databases;
  const value = databases.get(arg0);
  tmp3.log("removing database (user: " + arg0 + ", database: " + value + ")");
  if (value != null) {
    value.close();
  }
  const databases2 = self.databases;
  databases2.delete(arg0);
  self.emitChange();
};
prototype["handleClearCaches"] = function handleClearCaches(preventWritingCachesAgainThisSession) {
  const self = this;
  if (preventWritingCachesAgainThisSession.preventWritingCachesAgainThisSession) {
    self.preventWritingCachesAgainThisSession = true;
  }
  const result = self.replaceDisableAllDatabases("DatabaseManager (" + preventWritingCachesAgainThisSession.reason + ")");
};
prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  const self = this;
  const id = store.getId();
  const databases = this.databases;
  const value = databases.get(id);
  if (value != null) {
    const stateResult = value.state();
  }
  let tmp3 = null == value;
  if (tmp3) {
    tmp3 = stateResult !== _undefined(1937).DatabaseState.Open;
  }
  if (tmp3) {
    self.remove(id);
  }
  const result = self.carefullyOpenDatabase(id);
};
prototype["handleAuthenticationStoreChanged"] = function handleAuthenticationStoreChanged() {
  const self = this;
  const id = store.getId();
  const activeUserId = this.activeUserId;
  if (id !== activeUserId) {
    const databases2 = self.databases;
    const value = databases2.get(activeUserId);
    const _HermesInternal = HermesInternal;
    tmp3.verbose("active user changed (now: " + id + ", was: " + activeUserId + ", was: " + value + ")");
    if (value != null) {
      value.close();
    }
    importAll(1953).setUserId(id);
    self.activeUserId = id;
    const databases = self.databases;
    databases.delete(activeUserId);
    const obj = importAll(1953);
  }
};
function carefullySpeculativelyOpen(userId) {
  let closure_0 = userId;
  let self = this;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c3 = 2;
        let verboseResult = 0;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp2;
            let closure_0 = tmp3;
            closure_0 = undefined;
            if (outer1_1.preventWritingCachesAgainThisSession) {
              verboseResult = outer1_6.verbose("Not opening database because caches have been manually cleared.");
            } else if (null != outer1_0) {
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = (function trySpeculativelyOpenDatabaseAsync(outer1_0) {
                const self = this;
                const apply = closure_8.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(outer1_0);
              return obj1;
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          verboseResult = null;
          if (null != closure_0) {
            const databases2 = closure_1.databases;
            if (!databases2.has(closure_0)) {
              const _HermesInternal = HermesInternal;
              outer1_6.verbose("added speculative database (" + closure_0 + " \u2192 " + closure_0 + ")");
              const databases = closure_1.databases;
              const result = databases.set(closure_0, closure_0);
              closure_1.emitChange();
            }
          }
        }
        const _HermesInternal2 = HermesInternal;
        outer1_6.verbose("discarding speculative database (" + closure_0 + " \u2192 " + closure_0 + ")");
        obj = closure_0;
        if (closure_0 != verboseResult) {
          verboseResult = obj.close();
        }
      } catch (tmp32) {
        c3 = tmp;
        throw tmp32;
      }
    }
  })();
}
prototype["carefullySpeculativelyOpen"] = carefullySpeculativelyOpen;
c0 = undefined;
let obj = {
  CLEAR_CACHES(arg0) {
    return obj.handleClearCaches(arg0);
  },
  CONNECTION_CLOSED() {
    return obj.handleAuthenticationStoreChanged();
  },
  CONNECTION_OPEN() {
    return obj.handleConnectionOpen();
  },
  LOGOUT() {
    return obj.handleAuthenticationStoreChanged();
  }
};
tmp = new tmp(importDefaultResult, obj, require("dispatcher").DispatchBand.Early, DatabaseManager, tmp, importDefaultResult, obj, new.target, undefined, carefullySpeculativelyOpen, globalThis, arg1);
// ThrowIfThisInitialized (0x7c)
c0 = tmp;
let tmp3 = new require("initialize")("DatabaseManager");
tmp.databases = new Map();
tmp.activeUserId = null;
tmp.preventWritingCachesAgainThisSession = false;
const map = new Map();
let result = require("timestamp").fileFinishedImporting("modules/app_database/system/DatabaseManager.tsx");

export default tmp;