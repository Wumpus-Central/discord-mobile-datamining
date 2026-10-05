// discord_app/modules/gateway/qos/QosToken.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import ProtoUtils from "../../../utils/ProtoUtils.tsx";
import qos_token from "../../../../discord_common/js/packages/protos/discord_protos/qos_token/v1/qos_token.tsx";
import DerivedQosDataStore from "DerivedQosDataStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
