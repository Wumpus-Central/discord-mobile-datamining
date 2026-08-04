// discord_common/js/packages/flux/index.tsx
import getClass from "getClass";
import { Store } from "initialize";
import areStatesEqual from "areStatesEqual";

let DeviceSettingsStore;
let NO_DATA;
let OfflineCacheStore;
let createFetchStore;
function initialize() {
  Store.initialize();
}
const PersistedStore = getClass.PersistedStore;
({ DeviceSettingsStore, OfflineCacheStore } = getClass);
const obj = { Emitter: require("logger"), Store, PersistedStore, DeviceSettingsStore, OfflineCacheStore, connectStores: require("connectStores"), initialize };
({ createFetchStore, NO_DATA } = areStatesEqual);
Object.defineProperty(obj, "initialized", { get: () => Store.initialized, set: undefined });
const result = require("areStatesEqual").fileFinishedImporting("../discord_common/js/packages/flux/index.tsx");

export default obj;
export { NO_DATA };
export { Store };
export const Dispatcher = require("setDisplayName").Dispatcher;
export const BatchedStoreListener = require("attach").BatchedStoreListener;
export { createFetchStore };
export const statesWillNeverBeEqual = require("defaultAreStatesEqual").statesWillNeverBeEqual;
export const useStateFromStores = require("defaultAreStatesEqual").useStateFromStores;
export const useStateFromStoresObject = require("defaultAreStatesEqual").useStateFromStoresObject;
export const useStateFromStoresArray = require("defaultAreStatesEqual").useStateFromStoresArray;
export { initialize };
export const destroy = function destroy() {
  PersistedStore.destroy();
};