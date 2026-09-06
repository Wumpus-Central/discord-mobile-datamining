// === Module 9090: CertifiedDeviceStore ===

// Module 9090 (CertifiedDeviceStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 4585 */;
import size from "module_2" /* 2 */;

const DeviceTypes = Constants.DeviceTypes;
const CertifiedDeviceStore = "CertifiedDeviceStore";
let closure_5 = {};
const dependencyMap = {};
let closure_7 = 0;
const Store = initializeDefault.Store;
class CertifiedDeviceStore extends Store {
}
const prototype = CertifiedDeviceStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage2.Storage;
  value = Storage.get(CertifiedDeviceStore);
  if (null != value) {
    let item = _modDef12.forEach(value, (arr, arg1) => {
      const item = arr.forEach((type) => {
        if (tmp) {
          type.hardwareMute = false;
        }
      });
      if (null != closure_1_5[arg1]) {
        const item1 = arr.forEach((item) => {
          delete tmp3[tmp2];
          return tmp;
        });
      }
      closure_1_5[arg1] = arr;
      const item2 = arr.forEach((id) => {
        closure_1_6[id.id] = id;
        return id;
      });
    });
  }
};
prototype["isCertified"] = function isCertified(found) {
  return null != dependencyMap[found];
};
prototype["getCertifiedDevice"] = function getCertifiedDevice(inputDeviceId) {
  return dependencyMap[inputDeviceId];
};
prototype["getCertifiedDeviceName"] = function getCertifiedDeviceName(inputDeviceId, name) {
  let combined = name;
  const certifiedDevice = this.getCertifiedDevice(inputDeviceId);
  if (null != certifiedDevice) {
    const _HermesInternal = HermesInternal;
    combined = "" + certifiedDevice.vendor.name + " " + certifiedDevice.model.name;
  }
  return combined;
};
prototype["getCertifiedDeviceByType"] = function getCertifiedDeviceByType(arg0) {
  closure_0 = arg0;
  return _modDef12.find(closure_6, (type) => type.type === closure_0);
};
prototype["isHardwareMute"] = function isHardwareMute(arg0) {
  let flag = false;
  if (null != dependencyMap[arg0]) {
    flag = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.hardwareMute;
    const tmp3 = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.hardwareMute;
  }
  return flag;
};
prototype["hasEchoCancellation"] = function hasEchoCancellation(inputDeviceId) {
  let flag = false;
  if (null != dependencyMap[inputDeviceId]) {
    flag = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.echoCancellation;
    const tmp3 = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.echoCancellation;
  }
  return flag;
};
prototype["hasNoiseSuppression"] = function hasNoiseSuppression(inputDeviceId) {
  let flag = false;
  if (null != dependencyMap[inputDeviceId]) {
    flag = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.noiseSuppression;
    const tmp3 = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.noiseSuppression;
  }
  return flag;
};
prototype["hasAutomaticGainControl"] = function hasAutomaticGainControl(inputDeviceId) {
  let flag = false;
  if (null != dependencyMap[inputDeviceId]) {
    flag = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.automaticGainControl;
    const tmp3 = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.automaticGainControl;
  }
  return flag;
};
prototype["getVendor"] = function getVendor(arg0) {
  let vendor = null;
  if (null != dependencyMap[arg0]) {
    vendor = tmp.vendor;
  }
  return vendor;
};
prototype["getModel"] = function getModel(arg0) {
  let model = null;
  if (null != dependencyMap[arg0]) {
    model = tmp.model;
  }
  return model;
};
prototype["getRevision"] = function getRevision() {
  return closure_7;
};
CertifiedDeviceStore.displayName = "CertifiedDeviceStore";
const certifiedDeviceStore = new CertifiedDeviceStore(DispatcherDefault, {
  CERTIFIED_DEVICES_SET: function handleSetCertifiedDevices(arg0) {
    ({ applicationId, devices } = arg0);
    if (null != closure_5[applicationId]) {
      const item = arr.forEach((item) => {
        delete tmp3[tmp2];
        return tmp;
      });
    }
    closure_5[applicationId] = devices;
    const item1 = devices.forEach((id) => {
      closure_1_6[id.id] = id;
      return id;
    });
    const Storage = Storage2.Storage;
    const result = Storage.set(CertifiedDeviceStore, tmp);
    closure_7 = closure_7 + 1;
  }
});
let result = size.fileFinishedImporting("stores/CertifiedDeviceStore.tsx");

export default certifiedDeviceStore;