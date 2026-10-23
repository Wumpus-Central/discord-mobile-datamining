// === Module 15663: validateEmbeddedAppFrame ===

// Module 15663 (validateEmbeddedAppFrame)
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2031 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5612 */;
import getSocketFrameDefault from "getSocketFrame" /* 9233 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9234 */;
import RPCErrorDefault from "RPCError" /* 9240 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10705 */;
import RPCHelpers from "RPCHelpers" /* 11435 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15664 */;

require = fn;
function validateEmbeddedAppFrame(transport) {
  const result = RPCHelpers.validatePostMessageTransport(transport.transport);
  RPCHelpers.validateApplication(transport.application);
  if (obj3.isEmbeddedApplication(transport.application)) {
    if (isPostMessageSocketDefault(transport)) {
      const tmp18 = getSocketFrameDefault(transport);
      let tmp20 = null;
      if (null != tmp18) {
        tmp20 = null;
        if (tmp18.applicationId === transport.application.id) {
          const tmp21 = tmp18.applicationId === ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() || tmp18.data.runsInBackground;
          const type = tmp18.surface.type;
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
            if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
              tmp20 = tmp18;
              if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY !== type) {
                if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
                  let tmp22 = null;
                  if (tmp21) {
                    tmp22 = tmp18;
                  }
                  tmp20 = tmp22;
                } else {
                  tmp20 = null;
                  if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
                    const surface = tmp18.surface;
                    tmp20 = null;
                  }
                }
              }
            }
          }
          let tmp23 = tmp18;
          if (tmp18.surface.channelId === conjurePreviewSurface.CONJURE_UNKNOWN_CHANNEL) {
            let tmp24 = null;
            if (tmp21) {
              tmp24 = tmp18;
            }
            tmp23 = tmp24;
          }
          tmp20 = tmp23;
        }
      }
      if (null == tmp20) {
        const obj4 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
        const tmp29 = new RPCErrorDefault(obj4, "Command not available for this application");
        throw tmp29;
      } else {
        const obj5 = { frame: tmp20, iframeId: transport.source.iframeId };
        return obj5;
      }
    } else {
      const obj6 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp16 = new RPCErrorDefault(obj6, "command requires an embedded app frame");
      throw tmp16;
    }
  } else {
    const obj7 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
    const tmp10 = new RPCErrorDefault(obj7, "This application cannot access this API");
    throw tmp10;
  }
  obj3 = EmbeddedSurfaceUtils;
}
const RPCErrors = fn(1087).RPCErrors;
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