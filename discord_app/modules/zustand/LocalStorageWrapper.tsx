// discord_app/modules/zustand/LocalStorageWrapper.tsx
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/zustand/LocalStorageWrapper.tsx");

export default frozen;
