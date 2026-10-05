// discord_app/stores/NetworkStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
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
const Store = get_initializedDefault.Store;
class NetworkStoreClass extends Store {
  initialize() {
    const obj = NetworkUtilsDefault;
    const networkInformation = obj.getNetworkInformation();
    networkInformation.then(handleConnectionInfoChange);
    const obj2 = NetworkUtilsDefault;
    obj2.addChangeCallback(handleConnectionInfoChange);
  }
  getType() {
    return UNKNOWN;
  }
  getEffectiveConnectionSpeed() {
    return UNKNOWN2;
  }
  getServiceProvider() {
    return serviceProvider;
  }
}
const prototype = NetworkStoreClass.prototype;
NetworkStoreClass.displayName = "NetworkStore";
const networkStoreClass = new NetworkStoreClass(DispatcherDefault, {});
const result = size.fileFinishedImporting("stores/NetworkStore.tsx");

export default networkStoreClass;
