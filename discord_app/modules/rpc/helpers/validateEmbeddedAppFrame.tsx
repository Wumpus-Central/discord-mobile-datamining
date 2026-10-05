// discord_app/modules/rpc/helpers/validateEmbeddedAppFrame.tsx
import Constants from "../../../Constants.tsx";
import EmbeddedSurfaceUtils from "../../applications/utils/EmbeddedSurfaceUtils.tsx";
import Constants2 from "../Constants.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import FramesConstants from "../../frames/FramesConstants.tsx";
import RPCErrorDefault from "../RPCError.tsx";
import RPCHelpers from "../RPCHelpers.tsx";
import ConjureBuilderPreviewStore from "../../conjure/preview/ConjureBuilderPreviewStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function validateEmbeddedAppFrame(transport) {
  const obj = RPCHelpers;
  const result = obj.validatePostMessageTransport(transport.transport);
  const obj2 = RPCHelpers;
  const validateApplicationResult = obj2.validateApplication(transport.application);
  const obj3 = EmbeddedSurfaceUtils;
  if (obj3.isEmbeddedApplication(transport.application)) {
    if (transport.source.type !== TransportTypes.POST_MESSAGE) {
      const self5 = this;
      const self6 = this;
      const obj4 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp25 = new RPCErrorDefault(obj4, "command requires an embedded app frame");
      throw tmp25;
    } else {
      const tmp29 = asLaunched(FramesStore.getFrameByIframeId(transport.source.iframeId));
      let tmp11 = null;
      if (null != tmp29) {
        const type = tmp29.surface.type;
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
            if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
              let obj5;
              if (tmp29.applicationId === ConjureBuilderPreviewStore.getBuilderPreviewApplicationId()) {
                obj5 = { channelId: "Array", guildId: "Set" };
              } else {
                obj5 = null;
              }
              tmp11 = obj5;
            } else {
              const surface = tmp29.surface;
              tmp11 = null;
            }
          }
        }
        tmp11 = { channelId: tmp29.surface.channelId, guildId: tmp29.surface.guildId };
        const obj6 = { channelId: tmp29.surface.channelId, guildId: tmp29.surface.guildId };
      }
      if (null == tmp11) {
        const self3 = this;
        const self4 = this;
        const obj7 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
        const tmp20 = new RPCErrorDefault(obj7, "Command not available for this application");
        throw tmp20;
      } else {
        const obj8 = { applicationId: validateApplicationResult, iframeId: transport.source.iframeId };
        const merged = Object.assign(tmp11);
        return obj8;
      }
    }
  } else {
    const self = this;
    const self2 = this;
    const obj14 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
    const tmp8 = new RPCErrorDefault(obj14, "This application cannot access this API");
    throw tmp8;
  }
}
const TransportTypes = Constants2.TransportTypes;
const RPCErrors = Constants.RPCErrors;
const asLaunched = FramesConstants.asLaunched;
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
