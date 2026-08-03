import items from "items";
import { Store } from "initialize";

let c0 = importDefault;
let c3 = new require("initialize")("FileSystemStore");
const result = 10 * require("set").Millis.MINUTE;
let c4 = result;
class FileSystemStore extends Store {
  constructor() {
    c0 = undefined;
    obj = {
      APP_STATE_UPDATE(arg0) {
            return obj.handleAppStateUpdate(arg0);
          },
      POST_CONNECTION_OPEN() {
            return obj.handlePostConnectionOpen();
          }
    };
    tmp3 = new tmp3(require("dispatcher"), obj, new.target, tmp3, tmp2, new.target, c0, undefined, tmp, closure_1);
    // ThrowIfThisInitialized (0x7c)
    c0 = tmp3;
    tmp3.isLowDisk = false;
    refreshResult = tmp3.refresh();
    waitForResult = tmp3.waitFor(require("items"));
    timerId = setInterval(() => obj.refresh(), c4);
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
  return callback(function*() {
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
            let c1 = tmp4;
            let closure_0 = tmp4;
            closure_0 = undefined;
            c1 = undefined;
            c2 = undefined;
            c3 = undefined;
            const databaseResult = outer1_0(outer1_1[5]).database();
            let catchPromise;
            if (databaseResult != null) {
              const fsInfoResult = databaseResult.fsInfo();
              if (fsInfoResult != null) {
                catchPromise = fsInfoResult.catch((arg0) => logger.warn("couldn't get fs info", arg0));
              }
            }
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
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
            c1 = tmp8;
            let tmp14 = closure_0.fs.available > 805306368;
            if (tmp14) {
              tmp14 = closure_0.fs.available > 4 * closure_0.database.used;
            }
            if (tmp14) {
              tmp14 = closure_0.fs.available > 4 * closure_0.database.total;
            }
            c2 = tmp14;
            let tmp23 = c1;
            if (!tmp23) {
              let tmp25 = !c2;
              if (!c2) {
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
c0 = undefined;
tmp = new tmp(require("dispatcher"), {
  APP_STATE_UPDATE(arg0) {
    return obj.handleAppStateUpdate(arg0);
  },
  POST_CONNECTION_OPEN() {
    return obj.handlePostConnectionOpen();
  }
}, tmp2, FileSystemStore, tmp, Object, importDefault, new.target, undefined, globalThis, refresh, dependencyMap);
// ThrowIfThisInitialized (0x7c)
c0 = tmp;
tmp.isLowDisk = false;
tmp.refresh();
tmp.waitFor(require("items"));
let timerId = setInterval(() => obj.refresh(), result);
let obj = {
  APP_STATE_UPDATE(arg0) {
    return obj.handleAppStateUpdate(arg0);
  },
  POST_CONNECTION_OPEN() {
    return obj.handlePostConnectionOpen();
  }
};
const tmp4 = new require("initialize")("FileSystemStore");
const result1 = require("set").fileFinishedImporting("modules/app_database/stores/FileSystemStore.tsx");

export default tmp;