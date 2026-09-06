// === Module 14194: setDerivedQosData ===

// Module 14194 (setDerivedQosData)
import timestampDefault from "timestamp" /* 3 */;
import enforcingDefault from "enforcing" /* 13637 */;

let closure_2 = new timestampDefault("DerivedQosDataStorage");
const tmp2 = new timestampDefault("DerivedQosDataStorage");
const result = require("set").fileFinishedImporting("modules/gateway/qos/DerivedQosDataStorage.native.tsx");

export const setDerivedQosData = function setDerivedQosData(id, qosToken) {
  logger.info("setDerivedQosData: userId: ", { userId: id, dataPresent: null != qosToken });
  if (null != id) {
    enforcingDefault.setDerivedQosData(id, qosToken);
    const obj2 = enforcingDefault;
  }
};