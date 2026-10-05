// === Module 500: QosToken ===

// Module 500 (QosToken)
import LoggerDefault from "Logger" /* 3 */;
import ProtoUtils from "ProtoUtils" /* 1234 */;
import qos_token from "qos_token" /* 13959 */;
import DerivedQosDataStore from "DerivedQosDataStore" /* 501 */;
import size from "module_2" /* 2 */;

function buildQosTokenFromDerivedData(derivedQosData, isActive) {
  let derived;
  const ClientProvidedQosData = qos_token.ClientProvidedQosData;
  const obj = { isActive };
  const obj2 = ClientProvidedQosData.create(obj);
  if (null != derivedQosData) {
    try {
      const tmp2Result = ProtoUtils;
      derived = tmp2Result.b64ToProto(qos_token.DerivedQosData, derivedQosData);
    } catch (tmp5) {
      const _HermesInternal = HermesInternal;
      logger.warn("Failed to decode derived QOS data: " + tmp5);
    }
  }
  const tmp2Result2 = ProtoUtils;
  return tmp2Result2.protoToB64(qos_token.QosToken, { clientProvided: obj2, derived });
}
const logger = new LoggerDefault("QOS");
new LoggerDefault("QOS");
const result = size.fileFinishedImporting("modules/gateway/qos/QosToken.tsx");

export { buildQosTokenFromDerivedData };
export const buildQosToken = function buildQosToken(userId, isUserActive) {
  return buildQosTokenFromDerivedData(DerivedQosDataStore.getForUser(userId), isUserActive);
};