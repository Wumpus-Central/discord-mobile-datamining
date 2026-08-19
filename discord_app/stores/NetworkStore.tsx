// === Module 4564: handleConnectionInfoChange ===

// Module 4564 (handleConnectionInfoChange)
import obj132 from "obj132" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import awaitOnlineDefault from "awaitOnline" /* 1474 */;
import ME from "ME" /* 676 */;

function handleConnectionInfoChange(type) {
  if (null != type.type) {
    UNKNOWN = type.type;
  } else {
    UNKNOWN = NetworkConnectionTypes.UNKNOWN;
  }
  let UNKNOWN2 = type.effectiveSpeed;
  if (UNKNOWN2 == null) {
    UNKNOWN2 = NetworkConnectionSpeeds.UNKNOWN;
  }
  const serviceProvider = type.serviceProvider;
  networkStoreClass.emitChange();
}
const NetworkConnectionTypes = ME.NetworkConnectionTypes;
const NetworkConnectionSpeeds = ME.NetworkConnectionSpeeds;
let UNKNOWN = NetworkConnectionSpeeds.UNKNOWN;
let c6 = null;
const Store = initializeDefault.Store;
class NetworkStoreClass extends Store {
}
const prototype = NetworkStoreClass.prototype;
prototype["initialize"] = function initialize() {
  const networkInformation = awaitOnlineDefault.getNetworkInformation();
  networkInformation.then(handleConnectionInfoChange);
  awaitOnlineDefault.addChangeCallback(handleConnectionInfoChange);
};
prototype["getType"] = function getType() {
  return UNKNOWN;
};
prototype["getEffectiveConnectionSpeed"] = function getEffectiveConnectionSpeed() {
  return UNKNOWN;
};
prototype["getServiceProvider"] = function getServiceProvider() {
  return c6;
};
NetworkStoreClass.displayName = "NetworkStore";
const networkStoreClass = new NetworkStoreClass(dispatcherDefault, {});
const result = obj132.fileFinishedImporting("stores/NetworkStore.tsx");

export default networkStoreClass;