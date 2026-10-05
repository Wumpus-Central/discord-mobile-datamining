// === Module 1084: MobileCacheSnapshotStore ===

// Module 1084 (MobileCacheSnapshotStore)
import _modDef38 from "module_38" /* 38 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const Store = get_initializedDefault.Store;
class MobileCacheSnapshotStore extends Store {
  constructor(arg0, arg1) {
    const tmp3 = DispatcherDefault;
    const obj = {
      CLEAR_CACHES() {
        closure_0.clear();
        return false;
      },
      WRITE_CACHES() {
        closure_0.save();
        return false;
      }
    };
    const merged = Object.assign(arg0);
    const tmp22 = new tmp2(tmp3, obj, arg1, new.target, tmp2, tmp3, obj, this, undefined, tmp, arg0, importDefault);
    let closure_0 = tmp22;
    const tmp5 = _modDef38;
    tmp5(null != tmp22.getClass().displayName, "Snapshot stores need a display name");
    _modDef38(!("CLEAR_CACHES" in arg0), "MobileCacheSnapshotStores cannot use the 'CLEAR_CACHES' action");
    _modDef38(!("WRITE_CACHES" in arg0), "MobileCacheSnapshotStores cannot use the 'WRITE_CACHES' action");
    const allStores = MobileCacheSnapshotStore.allStores;
    allStores.push(tmp22);
    return tmp22;
  }
  static clearAll() {
    const allStores = MobileCacheSnapshotStore.allStores;
    const item = allStores.forEach((clear) => clear.clear());
  }
  clear() {
    const Storage = Storage2.Storage;
    Storage.remove(this.persistKey);
  }
  save() {
    const Storage = Storage2.Storage;
    const result = Storage.set(this.persistKey, this.takeSnapshot());
  }
  readSnapshot(LATEST_SNAPSHOT_VERSION) {
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
  }
  getClass() {
    return this.constructor;
  }
}
Object.defineProperty(MobileCacheSnapshotStore.prototype, "persistKey", {
  get: function persistKey() {
    return "" + this.getClass().displayName + "-snapshot";
  },
  set: undefined
});
MobileCacheSnapshotStore.allStores = [];
let result = size.fileFinishedImporting("stores/MobileCacheSnapshotStore.tsx");

export default MobileCacheSnapshotStore;