// discord_app/stores/NetworkStore.tsx
import ME from "ME";
import { Store } from "initialize";
import { awaitOnline } from "../utils/NetworkUtils.tsx";

function handleConnectionInfoChange(type) {
  if (null != type.type) {
    let UNKNOWN = type.type;
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
class NetworkStoreClass extends Store {
}
const prototype = NetworkStoreClass.prototype;
prototype["initialize"] = function initialize() {
  const networkInformation = awaitOnline.getNetworkInformation();
  networkInformation.then(handleConnectionInfoChange);
  const obj = awaitOnline;
  awaitOnline.addChangeCallback(handleConnectionInfoChange);
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
const networkStoreClass = new NetworkStoreClass(require("dispatcher"), {});
const result = require("awaitOnline").fileFinishedImporting("stores/NetworkStore.tsx");

export default networkStoreClass;