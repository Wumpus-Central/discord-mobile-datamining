// discord_app/actions/CertifiedDeviceActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  const obj = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj);
};
