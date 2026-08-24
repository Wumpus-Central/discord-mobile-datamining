// discord_app/stores/NetworkStore.tsx
import set from "../../_runtime/00002_set.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import awaitOnlineDefault from "../utils/NetworkUtils.tsx";
import ME from "../Constants.tsx";

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
let UNKNOWN = NetworkConnectionTypes.UNKNOWN;
UNKNOWN = NetworkConnectionSpeeds.UNKNOWN;
let c6 = null;
const Store = initializeDefault.Store;
class NetworkStoreClass extends Store {
}
const prototype = NetworkStoreClass.prototype;
prototype["initialize"] = function initialize() {
  const networkInformation = awaitOnlineDefault.getNetworkInformation();
  networkInformation.then(handleConnectionInfoChange);
  const obj = awaitOnlineDefault;
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
const result = set.fileFinishedImporting("stores/NetworkStore.tsx");

export default networkStoreClass;