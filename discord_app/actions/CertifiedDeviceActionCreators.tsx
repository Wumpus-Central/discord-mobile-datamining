// === Module 14470: CertifiedDeviceActionCreators ===

// Module 14470 (CertifiedDeviceActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  const obj = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj);
};