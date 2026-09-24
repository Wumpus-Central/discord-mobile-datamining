// discord_app/modules/rpc/helpers/validateEmbeddedAppFrame.tsx
import ApplicationFlagUtils from "../../applications/utils/ApplicationFlagUtils.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import RPCErrorDefault from "../RPCError.tsx";
import RPCHelpers from "../RPCHelpers.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import VibegrationsBuilderPreviewStore from "../../vibegrations/stores/VibegrationsBuilderPreviewStore.tsx";

require = fn;
function validateEmbeddedAppFrame(transport) {
  const result = RPCHelpers.validatePostMessageTransport(transport.transport);
  const validateApplicationResult = RPCHelpers.validateApplication(transport.application);
  if (obj3.hasApplicationFlag(transport.application, constants.EMBEDDED)) {
    if (transport.source.type !== TransportTypes.POST_MESSAGE) {
      const obj4 = { errorCode: constants2.INVALID_COMMAND };
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
                let obj5 = { channelId: "channel", guildId: "channelId" };
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
        const obj7 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
        const tmp24 = new RPCErrorDefault(obj7, "Command not available for this application");
        throw tmp24;
      } else {
        const obj8 = { applicationId: validateApplicationResult, iframeId: transport.source.iframeId };
        const merged = Object.assign(tmp13);
        return obj8;
      }
    }
  } else {
    const obj14 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
    const tmp10 = new RPCErrorDefault(obj14, "This application cannot access this API");
    throw tmp10;
  }
  obj3 = ApplicationFlagUtils;
}
const TransportTypes = fn(4733).TransportTypes;
const Constants = fn(1074);
({ ApplicationFlags: metroRequire, RPCErrors: closure_7 } = Constants);
const asLaunched = fn(9394).asLaunched;
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
