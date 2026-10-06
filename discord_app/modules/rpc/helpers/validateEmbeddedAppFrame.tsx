// discord_app/modules/rpc/helpers/validateEmbeddedAppFrame.tsx
import Constants from "../../../Constants.tsx";
import EmbeddedSurfaceUtils from "../../applications/utils/EmbeddedSurfaceUtils.tsx";
import Constants2 from "../Constants.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import FramesConstants from "../../frames/FramesConstants.tsx";
import conjurePreviewSurface from "../../conjure/preview/conjurePreviewSurface.tsx";
import RPCErrorDefault from "../RPCError.tsx";
import RPCHelpers from "../RPCHelpers.tsx";
import ConjureBuilderPreviewStore from "../../conjure/preview/ConjureBuilderPreviewStore.tsx";
import ConjureProjectStore from "../../conjure/projects/ConjureProjectStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function validateEmbeddedAppFrame(transport) {
  let tmpResult;
  let tmpResult2;
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
      const tmp29 = new RPCErrorDefault(obj4, "command requires an embedded app frame");
      throw tmp29;
    } else {
      const tmp33 = asLaunched(FramesStore.getFrameByIframeId(transport.source.iframeId));
      let tmp13 = null;
      if (null != tmp33) {
        const tmp12 =
          tmp33.applicationId === ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() ||
          tmp33.data.prefersPictureInPictureOnNavigateAway;
        const applicationId = tmp33.applicationId;
        const type = tmp33.surface.type;
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL === type) {
          let obj6;
          if (null == tmp33.surface.channelId) {
            let tmp16 = null;
            if (tmp12) {
              const obj5 = {
                channelId: "Array",
                guildId: tmpResult.getConjurePreviewGuildId(
                  ConjureProjectStore.findProjectByApplicationId(applicationId),
                ),
              };
              tmp16 = obj5;
              tmpResult = conjurePreviewSurface;
            }
            obj6 = tmp16;
          } else {
            obj6 = { channelId: tmp33.surface.channelId, guildId: tmp33.surface.guildId };
          }
          tmp13 = obj6;
        } else if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL === type) {
          tmp13 = { channelId: tmp33.surface.channelId, guildId: tmp33.surface.guildId };
          const obj7 = { channelId: tmp33.surface.channelId, guildId: tmp33.surface.guildId };
        } else if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
          let tmp14 = null;
          if (tmp12) {
            const obj8 = {
              channelId: "Array",
              guildId: tmpResult2.getConjurePreviewGuildId(
                ConjureProjectStore.findProjectByApplicationId(applicationId),
              ),
            };
            tmp14 = obj8;
            tmpResult2 = conjurePreviewSurface;
          }
          tmp13 = tmp14;
        } else {
          const surface = tmp33.surface;
          tmp13 = null;
        }
      }
      if (null == tmp13) {
        const self3 = this;
        const self4 = this;
        const obj9 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
        const tmp24 = new RPCErrorDefault(obj9, "Command not available for this application");
        throw tmp24;
      } else {
        const obj10 = { applicationId: validateApplicationResult, iframeId: transport.source.iframeId };
        const merged = Object.assign(tmp13);
        return obj10;
      }
    }
  } else {
    const self = this;
    const self2 = this;
    const obj11 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
    const tmp8 = new RPCErrorDefault(obj11, "This application cannot access this API");
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
