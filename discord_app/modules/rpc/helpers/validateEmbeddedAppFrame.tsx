// === Module 14462: validateEmbeddedAppFrame ===

// Module 14462 (validateEmbeddedAppFrame)
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8856 */;
import RPCErrorDefault from "RPCError" /* 9554 */;
import RPCHelpers from "RPCHelpers" /* 9559 */;
import FramesStore from "FramesStore" /* 9510 */;
import VibegrationsBuilderPreviewStore from "VibegrationsBuilderPreviewStore" /* 14463 */;

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
        if (constants3.APP_CHANNEL === type) {
          obj = { channelId: tmp35.surface.channelId, guildId: tmp35.surface.guildId };
          tmp13 = obj;
        } else {
          tmp13 = null;
          if (tmp12.MAIN === type) {
            if (tmp35.applicationId === VibegrationsBuilderPreviewStore.getBuilderPreviewApplicationId()) {
              obj1 = { channelId: "hash", guildId: "call" };
            } else {
              obj1 = null;
            }
            tmp13 = obj1;
          }
        }
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
const TransportTypes = fn(4465).TransportTypes;
const Constants = fn(1074);
({ ApplicationFlags: metroRequire, RPCErrors: closure_7 } = Constants);
const FramesConstants = fn(9511);
({ asLaunched: closure_8, EmbeddedSurfaceType: closure_9 } = FramesConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/helpers/validateEmbeddedAppFrame.tsx");

export default validateEmbeddedAppFrame;
export const tryValidateEmbeddedAppFrame = function tryValidateEmbeddedAppFrame(socket) {
  try {
    return validateEmbeddedAppFrame(socket);
  } catch (tmp3) {
    if (tmp3 instanceof RPCErrorDefault) {
      return null;
    } else {
      throw tmp3;
    }
  }
};