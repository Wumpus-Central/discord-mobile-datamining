// === Module 7457: frozen ===

// Module 7457 (frozen)
import obj132 from "obj132" /* 2 */;
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
const result = obj132.fileFinishedImporting("modules/zustand/LocalStorageWrapper.tsx");

export default frozen;