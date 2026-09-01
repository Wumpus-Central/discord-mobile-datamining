// discord_app/stores/MobileCacheSnapshotStore.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../discord_common/js/packages/storage/Storage.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

require = arg1;
let MobileCacheSnapshotStore;
const Store = initializeDefault.Store;
class MobileCacheSnapshotStore extends Store {
  constructor(arg0, arg1) {
    closure_0 = undefined;
    tmp3 = require("dispatcher");
    obj = {};
    merged = Object.assign(global);
    obj.CLEAR_CACHES = function CLEAR_CACHES() {
      obj.clear();
      return false;
    };
    obj.WRITE_CACHES = function WRITE_CACHES() {
      obj.save();
      return false;
    };
    tmp2 = new tmp2(tmp3, obj, arg1, new.target, tmp2, tmp3, obj, new.target, undefined, tmp, global, closure_1);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp2;
    tmp5 = require("../../_runtime/metro/00038__.js");
    tmp5Result = tmp5(null != tmp2.getClass().displayName, "Snapshot stores need a display name");
    tmp7 = require("../../_runtime/metro/00038__.js")(
      !("CLEAR_CACHES" in global),
      "MobileCacheSnapshotStores cannot use the 'CLEAR_CACHES' action",
    );
    tmp8 = require("../../_runtime/metro/00038__.js")(
      !("WRITE_CACHES" in global),
      "MobileCacheSnapshotStores cannot use the 'WRITE_CACHES' action",
    );
    allStores = MobileCacheSnapshotStore.allStores;
    arr = allStores.push(tmp2);
    return tmp2;
  }
}
const prototype = MobileCacheSnapshotStore.prototype;
MobileCacheSnapshotStore["clearAll"] = function clearAll() {
  const allStores = MobileCacheSnapshotStore.allStores;
  const item = allStores.forEach((clear) => clear.clear());
};
Object.defineProperty(prototype, "persistKey", {
  get: function persistKey() {
    return "" + this.getClass().displayName + "-snapshot";
  },
  set: undefined,
});
prototype["clear"] = function clear() {
  const Storage = Storage2.Storage;
  Storage.remove(this.persistKey);
};
prototype["save"] = function save() {
  const Storage = Storage2.Storage;
  const result = Storage.set(this.persistKey, this.takeSnapshot());
};
prototype["readSnapshot"] = function readSnapshot(LATEST_SNAPSHOT_VERSION) {
  const Storage = Storage2.Storage;
  const value = Storage.get(this.persistKey);
  let data = null;
  if (null != value) {
    data = null;
    if (value.version === LATEST_SNAPSHOT_VERSION) {
      data = value.data;
    }
  }
  return data;
};
prototype["getClass"] = function getClass() {
  return this.constructor;
};
MobileCacheSnapshotStore.allStores = [];
let result = require("set").fileFinishedImporting("stores/MobileCacheSnapshotStore.tsx");

export default MobileCacheSnapshotStore;
