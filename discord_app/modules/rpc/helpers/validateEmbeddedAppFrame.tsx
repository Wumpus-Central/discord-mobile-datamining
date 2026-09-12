// === Module 14550: validateEmbeddedAppFrame ===

// Module 14550 (validateEmbeddedAppFrame)
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8981 */;
import RPCErrorDefault from "RPCError" /* 9684 */;
import RPCHelpers from "RPCHelpers" /* 9689 */;
import FramesStore from "FramesStore" /* 9640 */;
import VibegrationsBuilderPreviewStore from "VibegrationsBuilderPreviewStore" /* 14551 */;

require = fn;
function validateEmbeddedAppFrame(transport) {
  let obj = RPCHelpers;
  const result = obj.validatePostMessageTransport(transport.transport);
  let obj1 = RPCHelpers;
  let obj2 = ApplicationFlagUtils;
  if (obj2.hasApplicationFlag(transport.application, constants.EMBEDDED)) {
    if (transport.source.type !== TransportTypes.POST_MESSAGE) {
      obj = { errorCode: constants2.INVALID_COMMAND };
      const tmp31 = new RPCErrorDefault(obj, "command requires an embedded app frame");
      throw tmp31;
    } else {
      const tmp35 = React6(FramesStore.getFrameByIframeId(transport.source.iframeId));
      let tmp13 = null;
      if (null != tmp35) {
        const type = tmp35.surface.type;
        if (constants3.APP_CHANNEL !== type) {
          if (constants3.VOICE_CHANNEL !== type) {
            if (constants3.MAIN === type) {
              if (tmp35.applicationId === VibegrationsBuilderPreviewStore.getBuilderPreviewApplicationId()) {
                obj = { channelId: "Array", guildId: "PX_16" };
              } else {
                obj = null;
              }
              tmp13 = obj;
            } else {
              const surface = tmp35.surface;
              tmp13 = null;
            }
          }
        }
        obj1 = { channelId: tmp35.surface.channelId, guildId: tmp35.surface.guildId };
        tmp13 = obj1;
      }
      if (null == tmp13) {
        obj2 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
        const tmp24 = new RPCErrorDefault(obj2, "Command not available for this application");
        throw tmp24;
      } else {
        const obj3 = { applicationId: validateApplicationResult, iframeId: transport.source.iframeId };
        const merged = Object.assign(tmp13);
        return obj3;
      }
    }
  } else {
    const obj4 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
    const tmp9 = new RPCErrorDefault(obj4, "This application cannot access this API");
    throw tmp9;
  }
  validateApplicationResult = obj1.validateApplication(transport.application);
}
const TransportTypes = fn(4541).TransportTypes;
const Constants = fn(1074);
({ ApplicationFlags: metroRequire, RPCErrors: closure_7 } = Constants);
const FramesConstants = fn(9641);
({ asLaunched: closure_8, EmbeddedSurfaceType: closure_9 } = FramesConstants);
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