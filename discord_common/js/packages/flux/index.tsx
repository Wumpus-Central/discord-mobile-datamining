// discord_common/js/packages/flux/index.tsx
import Store2 from "Store.tsx";
import EmitterDefault from "Emitter.tsx";
import useStateFromStores from "useStateFromStores.tsx";
import BatchedStoreListener from "BatchedStoreListener.tsx";
import connectStoresDefault from "connectStores.tsx";
import flux_Dispatcher from "Dispatcher.tsx";
import PersistedStore_mod from "PersistedStore.tsx";
import createFetchStore_mod from "createFetchStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let DeviceSettingsStore;
let NO_DATA;
let OfflineCacheStore;
let createFetchStore;
function initialize() {
  Store.initialize();
}
let PersistedStore = PersistedStore_mod;
PersistedStore = PersistedStore.PersistedStore;
({ DeviceSettingsStore, OfflineCacheStore } = PersistedStore);
const Store = Store2.Store;
createFetchStore = createFetchStore_mod;
const obj = {
  Emitter: EmitterDefault,
  Store,
  PersistedStore,
  DeviceSettingsStore,
  OfflineCacheStore,
  connectStores: connectStoresDefault,
  initialize,
};
({ createFetchStore, NO_DATA } = createFetchStore);
Object.defineProperty(obj, "initialized", { get: () => Store.initialized, set: undefined });
const result = size.fileFinishedImporting("../discord_common/js/packages/flux/index.tsx");
const BatchedStoreListener_export = BatchedStoreListener.BatchedStoreListener;
const useStateFromStores_export = useStateFromStores.useStateFromStores;

export default obj;
export { NO_DATA };
export { Store };
export const Dispatcher = flux_Dispatcher.Dispatcher;
export const DispatchBand = flux_Dispatcher.DispatchBand;
export { BatchedStoreListener_export as BatchedStoreListener };
export { createFetchStore };
export const statesWillNeverBeEqual = useStateFromStores.statesWillNeverBeEqual;
export { useStateFromStores_export as useStateFromStores };
export const useStateFromStoresObject = useStateFromStores.useStateFromStoresObject;
export const useStateFromStoresArray = useStateFromStores.useStateFromStoresArray;
export { initialize };
export const destroy = function destroy() {
  PersistedStore.destroy();
};
