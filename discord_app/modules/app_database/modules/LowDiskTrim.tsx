// === Module 7139: LowDiskTrim ===

// Module 7139 (LowDiskTrim)
import DatabaseDaosDefault from "DatabaseDaos" /* 2078 */;
import FileSystemStore from "FileSystemStore" /* 6988 */;
import size from "module_2" /* 2 */;

class LowDiskTrim {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.isLowDisk = false;
    obj.actions = {
      POST_CONNECTION_OPEN() {
        return obj.handlePostConnectionOpen();
      }
    };
    FileSystemStore.addChangeListener(() => obj.handleFileSystemStoreChanged());
    return obj;
  }
  handlePostConnectionOpen() {
    this.isLowDisk = false;
    const result = this.handleFileSystemStoreChanged();
  }
  handleFileSystemStoreChanged() {
    const self = this;
    const isLowDisk = FileSystemStore.isLowDisk;
    const tmp = isLowDisk && self.isLowDisk !== isLowDisk;
    if (tmp) {
      const obj = DatabaseDaosDefault;
      const databaseResult = obj.database();
      if (databaseResult != null) {
        databaseResult.incrementalVacuum();
      }
    }
    self.isLowDisk = isLowDisk;
  }
  resetInMemoryState() {

  }
}
const prototype = LowDiskTrim.prototype;
let obj = Object.create(LowDiskTrim.prototype);
obj.isLowDisk = false;
obj.actions = {
  POST_CONNECTION_OPEN() {
    return obj.handlePostConnectionOpen();
  }
};
FileSystemStore.addChangeListener(() => obj.handleFileSystemStoreChanged());
let result = size.fileFinishedImporting("modules/app_database/modules/LowDiskTrim.tsx");

export default obj;