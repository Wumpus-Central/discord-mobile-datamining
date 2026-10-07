// discord_app/modules/gateway/qos/DerivedQosDataStorage.native.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import NativeFastConnectModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";

const logger = new LoggerDefault("DerivedQosDataStorage");
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/qos/DerivedQosDataStorage.native.tsx");

export const setDerivedQosData = function setDerivedQosData(id, qosToken) {
  logger.info("setDerivedQosData: userId: ", { userId: id, dataPresent: null != qosToken });
  if (null != id) {
    NativeFastConnectModuleDefault.setDerivedQosData(id, qosToken);
  }
  const obj = { userId: id, dataPresent: null != qosToken };
};
