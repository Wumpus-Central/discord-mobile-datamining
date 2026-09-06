// discord_app/stores/NetworkStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import NetworkUtilsDefault from "../utils/NetworkUtils.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

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
class NetworkStoreClass extends Store {}
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
