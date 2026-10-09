// === Module 14640: validateEmbeddedAppFrame ===

// Module 14640 (validateEmbeddedAppFrame)
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2029 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8594 */;
import RPCErrorDefault from "RPCError" /* 10896 */;
import RPCHelpers from "RPCHelpers" /* 10905 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11373 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 14642 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14641 */;
import FramesStore from "FramesStore" /* 10772 */;

require = fn;
function validateEmbeddedAppFrame(transport) {
  const result = RPCHelpers.validatePostMessageTransport(transport.transport);
  RPCHelpers.validateApplication(transport.application);
  if (obj3.isEmbeddedApplication(transport.application)) {
    if (isPostMessageSocketDefault(transport)) {
      const frameByEmbeddedContext = FramesStore.getFrameByEmbeddedContext(transport.context, transport.source.iframeId);
      let tmp21 = null;
      if (null != frameByEmbeddedContext) {
        tmp21 = null;
        if (frameByEmbeddedContext.applicationId === transport.application.id) {
          const tmp22 = frameByEmbeddedContext.applicationId === ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() || frameByEmbeddedContext.data.prefersPictureInPictureOnNavigateAway;
          const type = frameByEmbeddedContext.surface.type;
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
            if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
              tmp21 = frameByEmbeddedContext;
              if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY !== type) {
                if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
                  let tmp23 = null;
                  if (tmp22) {
                    tmp23 = frameByEmbeddedContext;
                  }
                  tmp21 = tmp23;
                } else {
                  tmp21 = null;
                  if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
                    const surface = frameByEmbeddedContext.surface;
                    tmp21 = null;
                  }
                }
              }
            }
          }
          let tmp24 = frameByEmbeddedContext;
          if (frameByEmbeddedContext.surface.channelId === conjurePreviewSurface.CONJURE_UNKNOWN_CHANNEL) {
            let tmp25 = null;
            if (tmp22) {
              tmp25 = frameByEmbeddedContext;
            }
            tmp24 = tmp25;
          }
          tmp21 = tmp24;
        }
      }
      if (null == tmp21) {
        const obj4 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
        const tmp30 = new RPCErrorDefault(obj4, "Command not available for this application");
        throw tmp30;
      } else {
        const obj5 = { frame: tmp21, iframeId: transport.source.iframeId };
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
const RPCErrors = fn(1085).RPCErrors;
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