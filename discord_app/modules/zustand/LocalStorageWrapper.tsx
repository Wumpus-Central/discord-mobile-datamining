// discord_app/modules/zustand/LocalStorageWrapper.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";

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