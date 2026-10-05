// discord_app/modules/app_database/stores/FileSystemStore.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let _self, c2;

let closure_3 = new LoggerDefault("FileSystemStore");
const tmp4 = new LoggerDefault("FileSystemStore");
const result = 10 * DurationsDefault.Millis.MINUTE;
const Store = get_initializedDefault.Store;
class FileSystemStore extends Store {
  constructor() {
    const obj = {
      APP_STATE_UPDATE(arg0) {
        return closure_0.handleAppStateUpdate(arg0);
      },
      POST_CONNECTION_OPEN() {
        return closure_0.handlePostConnectionOpen();
      },
    };
    const tmp32 = new tmp3(
      DispatcherDefault,
      obj,
      new.target,
      tmp3,
      tmp2,
      this,
      importDefault,
      undefined,
      tmp,
      dependencyMap,
    );
    let closure_0 = tmp32;
    tmp32.isLowDisk = false;
    tmp32.refresh();
    tmp32.waitFor(DatabaseDaosDefault);
    const timerId = setInterval(() => closure_0.refresh(), result);
    return tmp32;
  }
  handlePostConnectionOpen() {
    this.refresh();
    return false;
  }
  handleAppStateUpdate(state) {
    if ("active" !== state.state) {
      const self = this;
      this.refresh();
    }
    return false;
  }
}
function refresh() {
  const self = this;
  return (async () => {
    let closure_0;
    let isLowDisk;
    if (isLowDisk === 2) {
      isLowDisk = 3;
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
        let closure_1;
        let closure_2;
        isLowDisk = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            isLowDisk = 3;
            throw value;
          } else if (arg0 === 2) {
            isLowDisk = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            _self = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            isLowDisk = undefined;
            const obj5 = _self(closure_1[5]);
            const databaseResult = obj5.database();
            let catchPromise;
            if (databaseResult != null) {
              const fsInfoResult = databaseResult.fsInfo();
              if (fsInfoResult != null) {
                catchPromise = fsInfoResult.catch((error) => logger.warn("couldn't get fs info", error));
              }
            }
            c2 = 1;
            isLowDisk = 1;
            const obj4 = { value: catchPromise, done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          isLowDisk = 3;
          throw value;
        } else if (arg0 === 2) {
          isLowDisk = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          _self = value;
          if (null != _self) {
            const tmp7 =
              _self.fs.available < 268435456 ||
              _self.fs.available < 3 * _self.database.used ||
              _self.fs.available < 2 * _self.database.total;
            closure_1 = tmp7;
            const tmp13 =
              _self.fs.available > 805306368 &&
              _self.fs.available > 4 * _self.database.used &&
              _self.fs.available > 4 * _self.database.total;
            closure_2 = tmp13;
            let tmp22 = closure_1;
            if (!tmp22) {
              const tmp24 = !closure_2 && null;
              tmp22 = tmp24;
            }
            isLowDisk = tmp22;
            const tmp26 = null != isLowDisk && closure_129_0.isLowDisk !== isLowDisk;
            if (tmp26) {
              closure_129_0.isLowDisk = isLowDisk;
              closure_129_0.emitChange();
            }
          }
          isLowDisk = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp37) {
        isLowDisk = 3;
        throw tmp37;
      }
    }
  })();
}
FileSystemStore.prototype["refresh"] = refresh;
let obj = {
  APP_STATE_UPDATE(arg0) {
    return closure_0.handleAppStateUpdate(arg0);
  },
  POST_CONNECTION_OPEN() {
    return closure_0.handlePostConnectionOpen();
  },
};
const tmp3 = new tmp(
  DispatcherDefault,
  obj,
  tmp2,
  FileSystemStore,
  tmp,
  Object,
  importDefault,
  this,
  undefined,
  globalThis,
  refresh,
  dependencyMap,
);
const React = tmp3;
tmp3.isLowDisk = false;
tmp3.refresh();
const DatabaseDaos = tmp3.waitFor(DatabaseDaosDefault);
let timerId = setInterval(() => closure_0.refresh(), result);
const result1 = size.fileFinishedImporting("modules/app_database/stores/FileSystemStore.tsx");

export default tmp3;
