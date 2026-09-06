// === Module 7655: handlePostConnectionOpen ===

// Module 7655 (handlePostConnectionOpen)
import importDefaultResult from "result" /* 7479 */;

let obj = importDefault;
class LowDiskTrim {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.isLowDisk = false;
    obj.actions = {
      POST_CONNECTION_OPEN() {
            return obj.handlePostConnectionOpen();
          }
    };
    addChangeListenerResult = closure_2.addChangeListener(() => obj.handleFileSystemStoreChanged());
    return obj;
  }
}
const prototype = LowDiskTrim.prototype;
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  this.isLowDisk = false;
  const result = this.handleFileSystemStoreChanged();
};
prototype["handleFileSystemStoreChanged"] = function handleFileSystemStoreChanged() {
  const self = this;
  const isLowDisk = importDefaultResult.isLowDisk;
  let tmp = isLowDisk;
  if (isLowDisk) {
    tmp = self.isLowDisk !== isLowDisk;
  }
  if (tmp) {
    obj = obj(1986);
    const databaseResult = obj.database();
    if (databaseResult != null) {
      databaseResult.incrementalVacuum();
    }
  }
  self.isLowDisk = isLowDisk;
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
obj = Object.create(LowDiskTrim.prototype);
obj.isLowDisk = false;
obj.actions = {
  POST_CONNECTION_OPEN() {
    return obj.handlePostConnectionOpen();
  }
};
importDefaultResult.addChangeListener(() => obj.handleFileSystemStoreChanged());
let result = require("set").fileFinishedImporting("modules/app_database/modules/LowDiskTrim.tsx");

export default obj;