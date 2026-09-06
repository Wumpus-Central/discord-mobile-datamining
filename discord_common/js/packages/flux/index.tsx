// === Module 504: initialize ===

// Module 504 (initialize)
import set from "set" /* 2 */;
import initialize2 from "initialize" /* 506 */;
import loggerDefault from "logger" /* 508 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 563 */;
import attach from "attach" /* 564 */;
import connectStoresDefault from "connectStores" /* 565 */;
import setDisplayName from "setDisplayName" /* 566 */;
import getClass from "getClass" /* 505 */;
import areStatesEqual from "areStatesEqual" /* 557 */;

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