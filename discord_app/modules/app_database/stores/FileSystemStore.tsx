// === Module 7171: result ===

// Module 7171 (result)
import timestampDefault from "timestamp" /* 3 */;
import initializeDefault from "initialize" /* 589 */;
import setDefault from "set" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import itemsDefault from "items" /* 1957 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;

let closure_0 = importDefault;
let closure_3 = new timestampDefault("FileSystemStore");
const result = 10 * setDefault.Millis.MINUTE;
let c4 = result;
const Store = initializeDefault.Store;
class FileSystemStore extends Store {
  constructor() {
    closure_0 = undefined;
    obj = {
      APP_STATE_UPDATE(arg0) {
            return obj.handleAppStateUpdate(arg0);
          },
      POST_CONNECTION_OPEN() {
            return obj.handlePostConnectionOpen();
          }
    };
    tmp3 = new tmp3(require("dispatcher"), obj, new.target, tmp3, tmp2, new.target, closure_0, undefined, tmp, closure_1);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp3;
    tmp3.isLowDisk = false;
    refreshResult = tmp3.refresh();
    waitForResult = tmp3.waitFor(require("items"));
    timerId = setInterval(() => obj.refresh(), closure_4);
    return tmp3;
  }
}
const prototype = FileSystemStore.prototype;
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  this.refresh();
  return false;
};
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  if ("active" !== state.state) {
    const self = this;
    this.refresh();
  }
  return false;
};
function refresh() {
  const self = this;
  return callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === closure_2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp4;
            closure_0 = tmp4;
            closure_0 = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            c3 = undefined;
            const databaseResult = closure_1_0(closure_1_1[5]).database();
            let catchPromise;
            if (databaseResult != null) {
              const fsInfoResult = databaseResult.fsInfo();
              if (fsInfoResult != null) {
                catchPromise = fsInfoResult.catch((arg0) => logger.warn("couldn't get fs info", arg0));
              }
            }
            closure_2 = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = catchPromise;
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          if (null != closure_0) {
            let tmp8 = closure_0.fs.available < 268435456;
            if (!tmp8) {
              tmp8 = closure_0.fs.available < 3 * closure_0.database.used;
            }
            if (!tmp8) {
              tmp8 = closure_0.fs.available < 2 * closure_0.database.total;
            }
            closure_1 = tmp8;
            let tmp14 = closure_0.fs.available > 805306368;
            if (tmp14) {
              tmp14 = closure_0.fs.available > 4 * closure_0.database.used;
            }
            if (tmp14) {
              tmp14 = closure_0.fs.available > 4 * closure_0.database.total;
            }
            closure_2 = tmp14;
            let tmp23 = closure_1;
            if (!tmp23) {
              let tmp25 = !closure_2;
              if (!closure_2) {
                tmp25 = null;
              }
              tmp23 = tmp25;
            }
            c3 = tmp23;
            let tmp27 = null != c3;
            if (tmp27) {
              tmp27 = closure_0.isLowDisk !== c3;
            }
            if (tmp27) {
              closure_0.isLowDisk = c3;
              closure_0.emitChange();
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp38) {
        c3 = tmp;
        throw tmp38;
      }
    }
  })();
}
prototype["refresh"] = refresh;
closure_0 = undefined;
tmp = new tmp(dispatcherDefault, {
  APP_STATE_UPDATE(arg0) {
    return obj.handleAppStateUpdate(arg0);
  },
  POST_CONNECTION_OPEN() {
    return obj.handlePostConnectionOpen();
  }
}, tmp2, FileSystemStore, tmp, Object, importDefault, new.target, undefined, globalThis, refresh, dependencyMap);
// ThrowIfThisInitialized (0x7c)
closure_0 = tmp;
tmp.isLowDisk = false;
tmp.refresh();
tmp.waitFor(itemsDefault);
let timerId = setInterval(() => obj.refresh(), result);
let obj = {
  APP_STATE_UPDATE(arg0) {
    return obj.handleAppStateUpdate(arg0);
  },
  POST_CONNECTION_OPEN() {
    return obj.handlePostConnectionOpen();
  }
};
const tmp4 = new timestampDefault("FileSystemStore");
const result1 = require("set").fileFinishedImporting("modules/app_database/stores/FileSystemStore.tsx");

export default tmp;