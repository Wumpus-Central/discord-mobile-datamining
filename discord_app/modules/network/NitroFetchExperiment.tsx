// === Module 9981: NitroFetchExperiment ===

// Module 9981 (NitroFetchExperiment)
import ApexExperiment2 from "ApexExperiment" /* 1449 */;
import _mod9982 from "module_9982" /* 9982 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function synchronizeNetworkLayer() {
  const tmp = "nitro_fetch" === closure_4.getConfig({ location: "android_network_layer" }).networkLayer;
  if (tmp !== closure_7) {
    if (tmp) {
      if (null == closure_8) {
        closure_8 = _mod9982;
      }
      global.XMLHttpRequest = closure_8.XMLHttpRequest;
    } else {
      global.XMLHttpRequest = XMLHttpRequest;
    }
    closure_7 = tmp;
  }
}
const obj = { networkLayer: "react_native", messagePrefetchEnabled: false };
const ApexExperiment = fn(1449);
let closure_4 = ApexExperiment.createApexExperiment({ name: "2026-10-android-nitro-fetch", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { networkLayer: "nitro_fetch", messagePrefetchEnabled: false }, 2: { networkLayer: "nitro_fetch", messagePrefetchEnabled: true } } });
const XMLHttpRequest = global.XMLHttpRequest;
let c6 = false;
let closure_7 = null;
let closure_8 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/network/NitroFetchExperiment.tsx");

export function initializeNitroFetchExperiment() {
  if (!c6) {
    c6 = true;
    let tmp = require;
    let _XMLHttpRequest = dependencyMap;
    const ApexExperimentStore = ApexExperiment2.ApexExperimentStore;
    ApexExperimentStore.addChangeListener(synchronizeNetworkLayer);
    const tmp5 = "nitro_fetch" === closure_4.getConfig({ location: "android_network_layer" }).networkLayer;
    if (tmp5 !== closure_7) {
      if (tmp5) {
        if (null == closure_8) {
          closure_8 = tmp(9982);
        }
        tmp = global;
        _XMLHttpRequest = closure_8.XMLHttpRequest;
        global.XMLHttpRequest = _XMLHttpRequest;
      } else {
        global.XMLHttpRequest = XMLHttpRequest;
      }
      closure_7 = tmp5;
    }
  }
}
export function getMessagePrefetchKey(channelId) {
  const config = closure_4.getConfig({ location: "android_message_prefetch_join" });
  if ("nitro_fetch" === config.networkLayer) {
    if (config.messagePrefetchEnabled) {
      let id = null;
      if (AuthenticationStore.isAuthenticated()) {
        id = AuthenticationStore.getId();
      }
      if (null != id) {
        const _HermesInternal = HermesInternal;
        return "NativeAppStartup:" + id + ":" + channelId;
      }
    }
  }
}