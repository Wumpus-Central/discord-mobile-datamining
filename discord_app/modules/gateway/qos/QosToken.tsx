// discord_app/modules/gateway/qos/QosToken.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import qos_token from "../../../../discord_common/js/packages/protos/discord_protos/qos_token/v1/qos_token.tsx";
import DerivedQosDataStore from "DerivedQosDataStore.tsx";

require = fn;
function buildQosTokenFromDerivedData(derivedQosData, isActive) {
  let derived;
  const ClientProvidedQosData = qos_token.ClientProvidedQosData;
  let clientProvided = { isActive };
  clientProvided = ClientProvidedQosData.create(clientProvided);
  if (null != derivedQosData) {
    try {
      let tmp2Result = tmp2(1224);
      derived = tmp2Result.b64ToProto(tmp2(14195).DerivedQosData, derivedQosData);
    } catch (tmp5) {
      const _HermesInternal = HermesInternal;
      logger.warn("Failed to decode derived QOS data: " + tmp5);
    }
  }
  tmp2Result = tmp2(1224);
  const QosToken = tmp2(14195).QosToken;
  return tmp2Result.protoToB64(qos_token.QosToken, QosToken.create({ clientProvided, derived }));
}
const logger = new LoggerDefault("QOS");
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/qos/QosToken.tsx");

export { buildQosTokenFromDerivedData };
export const buildQosToken = function buildQosToken(userId, isUserActive) {
  return buildQosTokenFromDerivedData(DerivedQosDataStore.getForUser(userId), isUserActive);
};
