// === Module 14300: validateEmbeddedAppFrame ===

// Module 14300 (validateEmbeddedAppFrame)
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2016 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8514 */;
import RPCErrorDefault from "RPCError" /* 9026 */;
import RPCHelpers from "RPCHelpers" /* 9031 */;
import FramesStore from "FramesStore" /* 8703 */;
import VibegrationsBuilderPreviewStore from "VibegrationsBuilderPreviewStore" /* 14301 */;

require = fn;
function validateEmbeddedAppFrame(transport) {
  const result = RPCHelpers.validatePostMessageTransport(transport.transport);
  const validateApplicationResult = RPCHelpers.validateApplication(transport.application);
  if (obj3.isEmbeddedApplication(transport.application)) {
    if (transport.source.type !== TransportTypes.POST_MESSAGE) {
      const obj4 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp31 = new RPCErrorDefault(obj4, "command requires an embedded app frame");
      throw tmp31;
    } else {
      const tmp35 = asLaunched(FramesStore.getFrameByIframeId(transport.source.iframeId));
      let tmp13 = null;
      if (null != tmp35) {
        const type = tmp35.surface.type;
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
            if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
              if (tmp35.applicationId === VibegrationsBuilderPreviewStore.getBuilderPreviewApplicationId()) {
                let obj5 = { channelId: "Symbol", guildId: "current" };
              } else {
                obj5 = null;
              }
              tmp13 = obj5;
            } else {
              const surface = tmp35.surface;
              tmp13 = null;
            }
          }
        }
        const obj6 = { channelId: tmp35.surface.channelId, guildId: tmp35.surface.guildId };
        tmp13 = obj6;
      }
      if (null == tmp13) {
        const obj7 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
        const tmp24 = new RPCErrorDefault(obj7, "Command not available for this application");
        throw tmp24;
      } else {
        const obj8 = { applicationId: validateApplicationResult, iframeId: transport.source.iframeId };
        const merged = Object.assign(tmp13);
        return obj8;
      }
    }
  } else {
    const obj14 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
    const tmp10 = new RPCErrorDefault(obj14, "This application cannot access this API");
    throw tmp10;
  }
  obj3 = EmbeddedSurfaceUtils;
}
const TransportTypes = fn(5316).TransportTypes;
const RPCErrors = fn(1085).RPCErrors;
const asLaunched = fn(8704).asLaunched;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/helpers/validateEmbeddedAppFrame.tsx");

export default validateEmbeddedAppFrame;
export const tryValidateEmbeddedAppFrame = function tryValidateEmbeddedAppFrame(transport) {
  try {
    return validateEmbeddedAppFrame(transport);
  } catch (tmp3) {
    if (tmp3 instanceof RPCErrorDefault) {
      return null;
    } else {
      throw tmp3;
    }
  }
};