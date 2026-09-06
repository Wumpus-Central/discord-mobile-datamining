// === Module 14194: DerivedQosDataStorage ===

// Module 14194 (DerivedQosDataStorage)
import LoggerDefault from "Logger" /* 3 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13637 */;

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