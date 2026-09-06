// discord_app/modules/app_database/modules/LowDiskTrim.tsx
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import FileSystemStore from "../stores/FileSystemStore.tsx";

class LowDiskTrim {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.isLowDisk = false;
    obj.actions = {
      POST_CONNECTION_OPEN() {
        return obj.handlePostConnectionOpen();
      },
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
  const isLowDisk = FileSystemStore.isLowDisk;
  let tmp = isLowDisk;
  if (isLowDisk) {
    tmp = self.isLowDisk !== isLowDisk;
  }
  if (tmp) {
    const databaseResult = DatabaseDaosDefault.database();
    if (databaseResult != null) {
      databaseResult.incrementalVacuum();
    }
  }
  self.isLowDisk = isLowDisk;
};
prototype["resetInMemoryState"] = function resetInMemoryState() {};
let obj = Object.create(LowDiskTrim.prototype);
let closure_129_0 = obj;
let closure_130_0 = obj;
obj.isLowDisk = false;
obj.actions = {
  POST_CONNECTION_OPEN() {
    return obj.handlePostConnectionOpen();
  },
};
FileSystemStore.addChangeListener(() => obj.handleFileSystemStoreChanged());
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/LowDiskTrim.tsx");

export default obj;
