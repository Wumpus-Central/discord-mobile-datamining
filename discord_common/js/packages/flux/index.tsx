// === Module 586: initialize ===

// Module 586 (initialize)
import set from "set" /* 2 */;
import initialize2 from "initialize" /* 588 */;
import loggerDefault from "logger" /* 590 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 644 */;
import attach from "attach" /* 645 */;
import connectStoresDefault from "connectStores" /* 646 */;
import setDisplayName from "setDisplayName" /* 647 */;
import getClass from "getClass" /* 587 */;
import areStatesEqual from "areStatesEqual" /* 639 */;

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