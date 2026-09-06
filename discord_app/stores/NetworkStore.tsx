// === Module 4609: NetworkStore ===

// Module 4609 (NetworkStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import NetworkUtilsDefault from "NetworkUtils" /* 1461 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function handleConnectionInfoChange(type) {
  if (null != type.type) {
    UNKNOWN = type.type;
  } else {
    UNKNOWN = NetworkConnectionTypes.UNKNOWN;
  }
  UNKNOWN2 = type.effectiveSpeed;
  if (UNKNOWN2 == null) {
    UNKNOWN2 = NetworkConnectionSpeeds.UNKNOWN;
  }
  serviceProvider = type.serviceProvider;
  networkStoreClass.emitChange();
}
const NetworkConnectionTypes = Constants.NetworkConnectionTypes;
const NetworkConnectionSpeeds = Constants.NetworkConnectionSpeeds;
let UNKNOWN = NetworkConnectionTypes.UNKNOWN;
let UNKNOWN2 = NetworkConnectionSpeeds.UNKNOWN;
let serviceProvider = null;
const Store = initializeDefault.Store;
class NetworkStoreClass extends Store {
}
const prototype = NetworkStoreClass.prototype;
prototype["initialize"] = function initialize() {
  const networkInformation = NetworkUtilsDefault.getNetworkInformation();
  networkInformation.then(handleConnectionInfoChange);
  NetworkUtilsDefault.addChangeCallback(handleConnectionInfoChange);
};
prototype["getType"] = function getType() {
  return UNKNOWN;
};
prototype["getEffectiveConnectionSpeed"] = function getEffectiveConnectionSpeed() {
  return UNKNOWN2;
};
prototype["getServiceProvider"] = function getServiceProvider() {
  return serviceProvider;
};
NetworkStoreClass.displayName = "NetworkStore";
const networkStoreClass = new NetworkStoreClass(DispatcherDefault, {});
const result = size.fileFinishedImporting("stores/NetworkStore.tsx");

export default networkStoreClass;