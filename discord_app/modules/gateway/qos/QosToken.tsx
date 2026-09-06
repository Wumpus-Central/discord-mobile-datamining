// discord_app/modules/gateway/qos/QosToken.tsx
import timestampDefault from "../../debug/Logger.tsx";
import defineProperty from "../../../../discord_common/js/packages/protos/discord_protos/qos_token/v1/qos_token.tsx";
import closure_2 from "DerivedQosDataStore.tsx";

require = arg1;
function buildQosTokenFromDerivedData(derivedQosData, isActive) {
  let derived;
  const ClientProvidedQosData = defineProperty.ClientProvidedQosData;
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
  return tmp2Result.protoToB64(defineProperty.QosToken, QosToken.create({ clientProvided, derived }));
}
let closure_3 = new timestampDefault("QOS");
const tmp2 = new timestampDefault("QOS");
const result = require("set").fileFinishedImporting("modules/gateway/qos/QosToken.tsx");

export { buildQosTokenFromDerivedData };
export const buildQosToken = function buildQosToken(userId, isUserActive) {
  return buildQosTokenFromDerivedData(forUser.getForUser(userId), isUserActive);
};
