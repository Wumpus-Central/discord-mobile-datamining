// === Module 14320: validateEmbeddedAppFrame ===

// Module 14320 (validateEmbeddedAppFrame)
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2016 */;
import RPCErrorDefault from "RPCError" /* 9059 */;
import RPCHelpers from "RPCHelpers" /* 9064 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14321 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;
import FramesStore from "FramesStore" /* 9000 */;

const EmbeddedSurfaceType = getConjurePreviewGuildId(8547);
const conjurePreviewSurface = getConjurePreviewGuildId(8999);
require = fn;
function validateEmbeddedAppFrame(transport) {
  let getConjurePreviewGuildId = require;
  const result = RPCHelpers.validatePostMessageTransport(transport.transport);
  const validateApplicationResult = RPCHelpers.validateApplication(transport.application);
  if (obj3.isEmbeddedApplication(transport.application)) {
    if (transport.source.type !== TransportTypes.POST_MESSAGE) {
      const obj4 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp35 = new RPCErrorDefault(obj4, "command requires an embedded app frame");
      throw tmp35;
    } else {
      const tmp39 = asLaunched(FramesStore.getFrameByIframeId(transport.source.iframeId));
      let tmp13 = null;
      if (null != tmp39) {
        let obj5 = tmp39.applicationId === ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() || tmp39.data.prefersPictureInPictureOnNavigateAway;
        const applicationId = tmp39.applicationId;
        const type = tmp39.surface.type;
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL === type) {
          if (null == tmp39.surface.channelId) {
            if (obj5) {
              obj5 = { channelId: "Array", guildId: 0 };
              const conjurePreviewGuildId = conjurePreviewSurface;
              getConjurePreviewGuildId = conjurePreviewGuildId.getConjurePreviewGuildId;
              obj5.guildId = getConjurePreviewGuildId(ConjureProjectStore.findProjectByApplicationId(applicationId));
            }
          } else {
            const obj6 = { channelId: tmp39.surface.channelId, guildId: tmp39.surface.guildId };
          }
        } else if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL === type) {
          const obj7 = { channelId: tmp39.surface.channelId, guildId: tmp39.surface.guildId };
          tmp13 = obj7;
        } else if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
          let tmp14 = null;
          if (obj5) {
            const obj8 = { channelId: "Array", guildId: 0 };
            const conjurePreviewGuildId1 = conjurePreviewSurface;
            obj8.guildId = conjurePreviewGuildId1.getConjurePreviewGuildId(ConjureProjectStore.findProjectByApplicationId(applicationId));
            tmp14 = obj8;
          }
          tmp13 = tmp14;
        } else {
          const surface = tmp39.surface;
          tmp13 = null;
        }
      }
      if (null == tmp13) {
        const obj9 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
        const tmp28 = new RPCErrorDefault(obj9, "Command not available for this application");
        throw tmp28;
      } else {
        const obj10 = { applicationId: validateApplicationResult, iframeId: transport.source.iframeId };
        const merged = Object.assign(tmp13);
        return obj10;
      }
    }
  } else {
    const obj11 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
    const tmp9 = new RPCErrorDefault(obj11, "This application cannot access this API");
    throw tmp9;
  }
  obj3 = EmbeddedSurfaceUtils;
}
const TransportTypes = fn(5323).TransportTypes;
const RPCErrors = fn(1085).RPCErrors;
const asLaunched = fn(8738).asLaunched;
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