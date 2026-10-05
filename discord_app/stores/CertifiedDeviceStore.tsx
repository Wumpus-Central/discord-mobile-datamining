// === Module 9307: CertifiedDeviceStore ===

// Module 9307 (CertifiedDeviceStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 4915 */;
import size from "module_2" /* 2 */;

const f100236 = (id) => {
  closure_1_6[id.id] = id;
  return id;
};
const DeviceTypes = Constants.DeviceTypes;
const CertifiedDeviceStore_str = "CertifiedDeviceStore";
let closure_5 = {};
const metroRequire = {};
let closure_7 = 0;
const Store = get_initializedDefault.Store;
class CertifiedDeviceStore extends Store {
  initialize() {
    const Storage = Storage2.Storage;
    const value = Storage.get(CertifiedDeviceStore_str);
    if (null != value) {
      const arr = _modDef12;
      let item = arr.forEach(value, (arr, arg1) => {
        const item = arr.forEach((type) => {
          const tmp = "audioinput" === type.type && type.hardwareMute;
          if (tmp) {
            type.hardwareMute = false;
          }
        });
        if (null != closure_1_5[arg1]) {
          const item1 = arr.forEach((item) => {
            delete closure_1_6[item.id];
            return tmp;
          });
        }
        closure_1_5[arg1] = closure_1_5[arg1];
        const item2 = arr.forEach(f100236);
      });
    }
  }
  isCertified(found) {
    return null != closure_6[found];
  }
  getCertifiedDevice(inputDeviceId) {
    return closure_6[inputDeviceId];
  }
  getCertifiedDeviceName(inputDeviceId, name) {
    let combined = name;
    const certifiedDevice = this.getCertifiedDevice(inputDeviceId);
    if (null != certifiedDevice) {
      const _HermesInternal = HermesInternal;
      combined = "" + certifiedDevice.vendor.name + " " + certifiedDevice.model.name;
    }
    return combined;
  }
  getCertifiedDeviceByType(arg0) {
    let closure_0 = arg0;
    const arr = _modDef12;
    return arr.find(closure_6, (type) => type.type === closure_0);
  }
  isHardwareMute(arg0) {
    let flag = false;
    if (null != closure_6[arg0]) {
      flag = closure_6[arg0].type === DeviceTypes.AUDIO_INPUT && closure_6[arg0].hardwareMute;
    }
    return flag;
  }
  hasEchoCancellation(inputDeviceId) {
    let flag = false;
    if (null != closure_6[inputDeviceId]) {
      flag = closure_6[inputDeviceId].type === DeviceTypes.AUDIO_INPUT && closure_6[inputDeviceId].echoCancellation;
    }
    return flag;
  }
  hasNoiseSuppression(inputDeviceId) {
    let flag = false;
    if (null != closure_6[inputDeviceId]) {
      flag = closure_6[inputDeviceId].type === DeviceTypes.AUDIO_INPUT && closure_6[inputDeviceId].noiseSuppression;
    }
    return flag;
  }
  hasAutomaticGainControl(inputDeviceId) {
    let flag = false;
    if (null != closure_6[inputDeviceId]) {
      flag = closure_6[inputDeviceId].type === DeviceTypes.AUDIO_INPUT && closure_6[inputDeviceId].automaticGainControl;
    }
    return flag;
  }
  getVendor(arg0) {
    let vendor = null;
    if (null != closure_6[arg0]) {
      vendor = tmp.vendor;
    }
    return vendor;
  }
  getModel(arg0) {
    let model = null;
    if (null != closure_6[arg0]) {
      model = tmp.model;
    }
    return model;
  }
  getRevision() {
    return closure_7;
  }
}
const prototype = CertifiedDeviceStore.prototype;
CertifiedDeviceStore.displayName = "CertifiedDeviceStore";
const obj = {
  CERTIFIED_DEVICES_SET: function handleSetCertifiedDevices(arg0) {
    let applicationId;
    let devices;
    ({ applicationId, devices } = arg0);
    if (null != closure_5[applicationId]) {
      const item = arr.forEach((item) => {
        delete closure_1_6[item.id];
        return tmp;
      });
    }
    closure_5[applicationId] = devices;
    const item1 = devices.forEach(f100236);
    const Storage = Storage2.Storage;
    const result = Storage.set(CertifiedDeviceStore_str, closure_5);
    closure_7 = closure_7 + 1;
  }
};
const certifiedDeviceStore = new CertifiedDeviceStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/CertifiedDeviceStore.tsx");

export default certifiedDeviceStore;