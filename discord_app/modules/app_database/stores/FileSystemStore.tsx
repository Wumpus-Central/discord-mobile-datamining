// discord_app/modules/app_database/stores/FileSystemStore.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

let closure_3 = new LoggerDefault("FileSystemStore");
const result = 10 * DurationsDefault.Millis.MINUTE;
const Store = initializeDefault.Store;
class FileSystemStore extends Store {
  constructor() {
    closure_0 = undefined;
    obj = {
      APP_STATE_UPDATE(arg0) {
        return closure_0.handleAppStateUpdate(arg0);
      },
      POST_CONNECTION_OPEN() {
        return closure_0.handlePostConnectionOpen();
      },
    };
    tmp3 = new tmp3(
      closure_0(closure_1[4]),
      obj,
      new.target,
      tmp3,
      tmp2,
      new.target,
      closure_0,
      undefined,
      tmp,
      closure_1,
    );
    closure_0 = tmp3;
    tmp3.isLowDisk = false;
    refreshResult = tmp3.refresh();
    waitForResult = tmp3.waitFor(closure_0(closure_1[5]));
    timerId = setInterval(() => closure_0.refresh(), closure_4);
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
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp4;
            _self = tmp4;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            const databaseResult = _self(closure_1[5]).database();
            let catchPromise;
            if (databaseResult != null) {
              const fsInfoResult = databaseResult.fsInfo();
              if (fsInfoResult != null) {
                catchPromise = fsInfoResult.catch((error) => logger.warn("couldn't get fs info", error));
              }
            }
            c2 = 1;
            c3 = 1;
            const obj1 = { value: catchPromise, done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          if (null != closure_128_0) {
            let tmp8 = closure_128_0.fs.available < 268435456;
            if (!tmp8) {
              tmp8 = closure_128_0.fs.available < 3 * closure_128_0.database.used;
            }
            if (!tmp8) {
              tmp8 = closure_128_0.fs.available < 2 * closure_128_0.database.total;
            }
            closure_128_1 = tmp8;
            let tmp14 = closure_128_0.fs.available > 805306368;
            if (tmp14) {
              tmp14 = closure_128_0.fs.available > 4 * closure_128_0.database.used;
            }
            if (tmp14) {
              tmp14 = closure_128_0.fs.available > 4 * closure_128_0.database.total;
            }
            closure_128_2 = tmp14;
            let tmp23 = closure_128_1;
            if (!tmp23) {
              let tmp25 = !closure_128_2;
              if (!closure_128_2) {
                tmp25 = null;
              }
              tmp23 = tmp25;
            }
            closure_128_3 = tmp23;
            let tmp27 = null != closure_128_3;
            if (tmp27) {
              tmp27 = closure_129_0.isLowDisk !== closure_128_3;
            }
            if (tmp27) {
              closure_129_0.isLowDisk = closure_128_3;
              closure_129_0.emitChange();
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
tmp = new tmp(
  DispatcherDefault,
  {
    APP_STATE_UPDATE(arg0) {
      return closure_0.handleAppStateUpdate(arg0);
    },
    POST_CONNECTION_OPEN() {
      return closure_0.handlePostConnectionOpen();
    },
  },
  tmp2,
  FileSystemStore,
  tmp,
  Object,
  importDefault,
  new.target,
  undefined,
  globalThis,
  refresh,
  dependencyMap,
);
let closure_129_0 = tmp;
tmp.isLowDisk = false;
tmp.refresh();
const DatabaseDaos = tmp.waitFor(DatabaseDaosDefault);
let timerId = setInterval(() => closure_0.refresh(), result);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/app_database/stores/FileSystemStore.tsx");

export default tmp;
