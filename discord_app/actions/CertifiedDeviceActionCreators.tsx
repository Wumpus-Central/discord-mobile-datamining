// === Module 13840: setCertifiedDevices ===

// Module 13840 (setCertifiedDevices)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  const obj = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj);
};