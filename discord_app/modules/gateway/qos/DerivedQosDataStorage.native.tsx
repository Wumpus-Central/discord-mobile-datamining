// discord_app/modules/gateway/qos/DerivedQosDataStorage.native.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const logger = new LoggerDefault("DerivedQosDataStorage");
new LoggerDefault("DerivedQosDataStorage");
const result = size.fileFinishedImporting("modules/gateway/qos/DerivedQosDataStorage.native.tsx");

export const setDerivedQosData = function setDerivedQosData(id, qosToken) {
  const obj = { userId: id, dataPresent: null != qosToken };
  logger.info("setDerivedQosData: userId: ", obj);
  if (null != id) {
    const obj2 = react_nativeDefault;
    obj2.setDerivedQosData(id, qosToken);
  }
};
