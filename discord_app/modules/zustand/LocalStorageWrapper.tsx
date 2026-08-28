// === Module 7399: frozen ===

// Module 7399 (frozen)
import set from "set" /* 2 */;
import Storage2 from "Storage" /* 595 */;

const frozen = Object.freeze({
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
});
const result = set.fileFinishedImporting("modules/zustand/LocalStorageWrapper.tsx");

export default frozen;