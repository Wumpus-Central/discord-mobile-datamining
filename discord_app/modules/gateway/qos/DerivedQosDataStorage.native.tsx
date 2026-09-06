// discord_app/modules/gateway/qos/DerivedQosDataStorage.native.tsx
import timestampDefault from "../../debug/Logger.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";

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
