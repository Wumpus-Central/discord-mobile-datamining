// === Module 7191: LocalStorageWrapper ===

// Module 7191 (LocalStorageWrapper)
import Storage2 from "Storage" /* 510 */;
import size from "module_2" /* 2 */;

const obj = {
  getItem(arg0) {
    const Storage = Storage2.Storage;
    let value = Storage.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  },
  setItem(arg0, arg1) {
    const Storage = Storage2.Storage;
    return Storage.set(arg0, arg1);
  },
  removeItem(arg0) {
    const Storage = Storage2.Storage;
    return Storage.remove(arg0);
  }
};
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/zustand/LocalStorageWrapper.tsx");

export default frozen;