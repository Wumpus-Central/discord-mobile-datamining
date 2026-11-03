// === Module 20278: NitroFetchExperiment ===

// Module 20278 (NitroFetchExperiment)
import _mod20279 from "module_20279" /* 20279 */;
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

function synchronizeNetworkLayer() {
  const tmp = "nitro_fetch" === closure_3.getConfig({ location: "android_network_layer" }).networkLayer;
  if (tmp !== closure_6) {
    if (tmp) {
      global.XMLHttpRequest = _mod20279.XMLHttpRequest;
    } else {
      global.XMLHttpRequest = XMLHttpRequest;
    }
    closure_6 = tmp;
  }
}
const obj = { networkLayer: "react_native", messagePrefetchEnabled: false };
let closure_3 = ApexExperiment.createApexExperiment({ name: "2026-10-android-nitro-fetch", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { networkLayer: "nitro_fetch", messagePrefetchEnabled: false } } });
const XMLHttpRequest = global.XMLHttpRequest;
let c5 = false;
let closure_6 = null;
const result = size.fileFinishedImporting("modules/network/NitroFetchExperiment.tsx");

export function initializeNitroFetchExperiment() {
  if (!c5) {
    c5 = true;
    let tmp = require;
    let _XMLHttpRequest = dependencyMap;
    const ApexExperimentStore = ApexExperiment.ApexExperimentStore;
    ApexExperimentStore.addChangeListener(synchronizeNetworkLayer);
    const tmp5 = "nitro_fetch" === closure_3.getConfig({ location: "android_network_layer" }).networkLayer;
    if (tmp5 !== closure_6) {
      if (tmp5) {
        tmp = global;
        _XMLHttpRequest = tmp(20279).XMLHttpRequest;
        global.XMLHttpRequest = _XMLHttpRequest;
        const tmpResult = tmp(20279);
      } else {
        global.XMLHttpRequest = XMLHttpRequest;
      }
      closure_6 = tmp5;
    }
  }
}