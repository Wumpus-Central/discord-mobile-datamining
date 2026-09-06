// === Module 504: initialize ===

// Module 504 (initialize)
import Store2 from "Store" /* 506 */;
import flux_EmitterDefault from "flux/Emitter" /* 508 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import BatchedStoreListener from "BatchedStoreListener" /* 564 */;
import connectStoresDefault from "connectStores" /* 565 */;
import flux_Dispatcher from "flux/Dispatcher" /* 566 */;
import PersistedStore from "PersistedStore" /* 505 */;
import createFetchStore from "createFetchStore" /* 557 */;
import size from "module_2" /* 2 */;

function initialize() {
  Store.initialize();
}
PersistedStore = PersistedStore.PersistedStore;
({ DeviceSettingsStore, OfflineCacheStore } = PersistedStore);
const Store = Store2.Store;
const obj = { Emitter: flux_EmitterDefault, Store, PersistedStore, DeviceSettingsStore, OfflineCacheStore, connectStores: connectStoresDefault, initialize };
({ createFetchStore, NO_DATA } = createFetchStore);
Object.defineProperty(obj, "initialized", { get: () => Store.initialized, set: undefined });
const result = size.fileFinishedImporting("../discord_common/js/packages/flux/index.tsx");

export default obj;
export { NO_DATA };
export { Store };
export const Dispatcher = flux_Dispatcher.Dispatcher;
export const BatchedStoreListener = BatchedStoreListener.BatchedStoreListener;
export { createFetchStore };
export const statesWillNeverBeEqual = useStateFromStores.statesWillNeverBeEqual;
export const useStateFromStores = useStateFromStores.useStateFromStores;
export const useStateFromStoresObject = useStateFromStores.useStateFromStoresObject;
export const useStateFromStoresArray = useStateFromStores.useStateFromStoresArray;
export { initialize };
export const destroy = function destroy() {
  PersistedStore.destroy();
};