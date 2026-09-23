// === Module 500: QosToken ===

// Module 500 (QosToken)
import LoggerDefault from "Logger" /* 3 */;
import ProtoUtils from "ProtoUtils" /* 1223 */;
import qos_token from "qos_token" /* 14561 */;
import DerivedQosDataStore from "DerivedQosDataStore" /* 501 */;

require = fn;
function buildQosTokenFromDerivedData(derivedQosData, isActive) {
  let derived;
  const ClientProvidedQosData = qos_token.ClientProvidedQosData;
  if (null != derivedQosData) {
    try {
      derived = ProtoUtils.b64ToProto(qos_token.DerivedQosData, derivedQosData);
      const tmp2Result = ProtoUtils;
    } catch (tmp5) {
      const _HermesInternal = HermesInternal;
      logger.warn("Failed to decode derived QOS data: " + tmp5);
    }
  }
  const obj = { isActive };
  const obj2 = ClientProvidedQosData.create({ isActive });
  const QosToken = qos_token.QosToken;
  return ProtoUtils.protoToB64(qos_token.QosToken, QosToken.create({ clientProvided: obj2, derived }));
}
const logger = new LoggerDefault("QOS");
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/qos/QosToken.tsx");

export { buildQosTokenFromDerivedData };
export const buildQosToken = function buildQosToken(userId, isUserActive) {
  return buildQosTokenFromDerivedData(DerivedQosDataStore.getForUser(userId), isUserActive);
};