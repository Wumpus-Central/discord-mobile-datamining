// === Module 16227: CertifiedDeviceActionCreators ===

// Module 16227 (CertifiedDeviceActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export function setCertifiedDevices(id, devices) {
  DispatcherDefault.dispatch({ type: "CERTIFIED_DEVICES_SET", applicationId: id, devices });
}