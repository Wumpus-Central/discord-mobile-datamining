// discord_app/modules/zustand/LocalStorageWrapper.tsx
const frozen = Object.freeze({
  getItem(arg0) {
    const Storage = require("../../../discord_common/js/packages/storage/Storage.tsx") /* Storage */.Storage;
    let value = Storage.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  },
  setItem(arg0, arg1) {
    const Storage = require("../../../discord_common/js/packages/storage/Storage.tsx") /* Storage */.Storage;
    return Storage.set(arg0, arg1);
  },
  removeItem(arg0) {
    const Storage = require("../../../discord_common/js/packages/storage/Storage.tsx") /* Storage */.Storage;
    return Storage.remove(arg0);
  }
});
const result = require("set").fileFinishedImporting("modules/zustand/LocalStorageWrapper.tsx");

export default frozen;