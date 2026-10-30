// discord_app/modules/rpc/helpers/validateEmbeddedAppFrame.tsx
import EmbeddedSurfaceUtils from "../../applications/utils/EmbeddedSurfaceUtils.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import getSocketFrameDefault from "getSocketFrame.tsx";
import isPostMessageSocketDefault from "isPostMessageSocket.tsx";
import RPCErrorDefault from "../RPCError.tsx";
import conjurePreviewSurface from "../../conjure/preview/conjurePreviewSurface.tsx";
import RPCHelpers from "../RPCHelpers.tsx";
import ConjureBuilderPreviewStore from "../../conjure/preview/ConjureBuilderPreviewStore.tsx";

require = fn;
function validateEmbeddedAppFrame(socket) {
  return validateFrame(socket, false);
}
function validateFrame(transport, arg1) {
  const result = RPCHelpers.validatePostMessageTransport(transport.transport);
  RPCHelpers.validateApplication(transport.application);
  if (obj3.isEmbeddedApplication(transport.application)) {
    if (isPostMessageSocketDefault(transport)) {
      const tmp19 = getSocketFrameDefault(transport);
      if (arg1) {
        let tmp26 = null;
        if (null != tmp19) {
          tmp26 = null;
          if (tmp19.applicationId === transport.application.id) {
            tmp26 = tmp19;
          }
        }
        let tmp21 = tmp26;
      } else {
        tmp21 = null;
        if (null != tmp19) {
          tmp21 = null;
          if (tmp19.applicationId === transport.application.id) {
            const tmp22 =
              tmp19.applicationId === ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() ||
              tmp19.data.runsInBackground;
            const type = tmp19.surface.type;
            if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
              if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
                tmp21 = tmp19;
                if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY !== type) {
                  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
                    let tmp23 = null;
                    if (tmp22) {
                      tmp23 = tmp19;
                    }
                    tmp21 = tmp23;
                  } else {
                    tmp21 = null;
                    if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
                      const surface = tmp19.surface;
                      tmp21 = null;
                    }
                  }
                }
              }
            }
            let tmp24 = tmp19;
            if (tmp19.surface.channelId === conjurePreviewSurface.CONJURE_UNKNOWN_CHANNEL) {
              let tmp25 = null;
              if (tmp22) {
                tmp25 = tmp19;
              }
              tmp24 = tmp25;
            }
            tmp21 = tmp24;
          }
        }
      }
      if (null == tmp21) {
        const obj4 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
        const tmp31 = new RPCErrorDefault(obj4, "Command not available for this application");
        throw tmp31;
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
const RPCErrors = fn(1072).RPCErrors;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/helpers/validateEmbeddedAppFrame.tsx");

export default validateEmbeddedAppFrame;
export function validateEmbeddedAppFrameOnAnySurface(require) {
  return validateFrame(require, true);
}
export function tryValidateEmbeddedAppFrame(socket) {
  try {
    return validateEmbeddedAppFrame(socket);
  } catch (tmp3) {
    if (tmp3 instanceof RPCErrorDefault) {
      return null;
    } else {
      throw tmp3;
    }
  }
}
