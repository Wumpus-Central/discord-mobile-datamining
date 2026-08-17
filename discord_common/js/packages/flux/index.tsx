// discord_common/js/packages/flux/index.tsx
import set from "../../../../_runtime/00002_set.js";
import initialize2 from "Store.tsx";
import loggerDefault from "Emitter.tsx";
import defaultAreStatesEqual from "useStateFromStores.tsx";
import attach from "BatchedStoreListener.tsx";
import connectStoresDefault from "connectStores.tsx";
import setDisplayName from "Dispatcher.tsx";
import getClass from "PersistedStore.tsx";
import areStatesEqual from "createFetchStore.tsx";

function initialize() {
  Store.initialize();
}
const PersistedStore = getClass.PersistedStore;
({ DeviceSettingsStore, OfflineCacheStore } = getClass);
const Store = initialize2.Store;
const obj = { Emitter: loggerDefault, Store, PersistedStore, DeviceSettingsStore, OfflineCacheStore, connectStores: connectStoresDefault, initialize };
({ createFetchStore, NO_DATA } = areStatesEqual);
Object.defineProperty(obj, "initialized", { get: () => Store.initialized, set: undefined });
const result = set.fileFinishedImporting("../discord_common/js/packages/flux/index.tsx");

export default obj;
export { NO_DATA };
export { Store };
export const Dispatcher = setDisplayName.Dispatcher;
export const BatchedStoreListener = attach.BatchedStoreListener;
export { createFetchStore };
export const statesWillNeverBeEqual = defaultAreStatesEqual.statesWillNeverBeEqual;
export const useStateFromStores = defaultAreStatesEqual.useStateFromStores;
export const useStateFromStoresObject = defaultAreStatesEqual.useStateFromStoresObject;
export const useStateFromStoresArray = defaultAreStatesEqual.useStateFromStoresArray;
export { initialize };
export const destroy = function destroy() {
  PersistedStore.destroy();
};