// === Module 5993: frozen ===

// Module 5993 (frozen)
const frozen = Object.freeze({
  getItem(arg0) {
    const Storage = require(595) /* Storage */.Storage;
    let value = Storage.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  },
  setItem(arg0, arg1) {
    const Storage = require(595) /* Storage */.Storage;
    return Storage.set(arg0, arg1);
  },
  removeItem(arg0) {
    const Storage = require(595) /* Storage */.Storage;
    return Storage.remove(arg0);
  }
});
const result = require("set").fileFinishedImporting("modules/zustand/LocalStorageWrapper.tsx");

export default frozen;