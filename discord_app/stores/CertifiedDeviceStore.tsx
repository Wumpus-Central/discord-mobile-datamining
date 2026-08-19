// === Module 4538: initialize ===

// Module 4538 (initialize)
import obj132 from "obj132" /* 2 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import Storage2 from "Storage" /* 595 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import DesktopSources from "DesktopSources" /* 4529 */;

const DeviceTypes = DesktopSources.DeviceTypes;
const CertifiedDeviceStore = "CertifiedDeviceStore";
let closure_5 = {};
let closure_6 = {};
let c7 = 0;
const Store = initializeDefault.Store;
class CertifiedDeviceStore extends Store {
}
const prototype = CertifiedDeviceStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage2.Storage;
  const value = Storage.get(CertifiedDeviceStore);
  if (null != value) {
    let item = applyDefault.forEach(value, (arr) => {
      const item = arr.forEach((item, index) => {
        if (tmp) {
          item.hardwareMute = false;
        }
      });
      if (null != table[arg1]) {
        const item1 = arr.forEach((item, index) => {
          delete tmp3[tmp2];
          return tmp;
        });
      }
      table[arg1] = table[arg1];
      const item2 = arr.forEach((item, index) => {
        closure_6[item.id] = item;
        return item;
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
  return applyDefault.find(closure_6, (type) => type.type === closure_0);
};
prototype["isHardwareMute"] = function isHardwareMute(arg0) {
  let flag = false;
  if (null != dependencyMap[arg0]) {
    flag = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.hardwareMute;
  }
  return flag;
};
prototype["hasEchoCancellation"] = function hasEchoCancellation(inputDeviceId) {
  let flag = false;
  if (null != dependencyMap[inputDeviceId]) {
    flag = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.echoCancellation;
  }
  return flag;
};
prototype["hasNoiseSuppression"] = function hasNoiseSuppression(inputDeviceId) {
  let flag = false;
  if (null != dependencyMap[inputDeviceId]) {
    flag = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.noiseSuppression;
  }
  return flag;
};
prototype["hasAutomaticGainControl"] = function hasAutomaticGainControl(inputDeviceId) {
  let flag = false;
  if (null != dependencyMap[inputDeviceId]) {
    flag = tmp.type === DeviceTypes.AUDIO_INPUT && tmp.automaticGainControl;
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
  return c7;
};
CertifiedDeviceStore.displayName = "CertifiedDeviceStore";
const certifiedDeviceStore = new CertifiedDeviceStore(dispatcherDefault, {
  CERTIFIED_DEVICES_SET: function handleSetCertifiedDevices(arg0) {
    ({ applicationId, devices } = arg0);
    if (null != table[applicationId]) {
      const item = arr.forEach((item, index) => {
        delete tmp3[tmp2];
        return tmp;
      });
    }
    table[applicationId] = devices;
    const item1 = devices.forEach((item, index) => {
      closure_6[item.id] = item;
      return item;
    });
    const Storage = Storage2.Storage;
    const result = Storage.set(CertifiedDeviceStore, table);
    closure_7 = closure_7 + 1;
  }
});
let result = obj132.fileFinishedImporting("stores/CertifiedDeviceStore.tsx");

export default certifiedDeviceStore;