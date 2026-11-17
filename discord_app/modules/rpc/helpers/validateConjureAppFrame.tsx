// === Module 16949: validateConjureAppFrame ===

// Module 16949 (validateConjureAppFrame)
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 5947 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5971 */;
import isConjureApplicationDefault from "isConjureApplication" /* 7036 */;
import RPCErrorDefault from "RPCError" /* 7313 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 16950 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;
import ChannelStore from "ChannelStore" /* 5159 */;

require = fn;
const RPCErrors = fn(1072).RPCErrors;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/helpers/validateConjureAppFrame.tsx");

export default function validateConjureAppFrame(arg0) {
  const tmp3 = validateEmbeddedAppFrameDefault(arg0);
  if (isConjureApplicationDefault(tmp3.frame.applicationId)) {
    return tmp3;
  } else {
    const obj = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
    const tmp8 = new RPCErrorDefault(obj, "Only a Conjuring app can use this API");
    throw tmp8;
  }
};
export const isConjureApplication = isConjureApplicationDefault;
export function isUserScopedConjureApplication(applicationId) {
  const result = ConjureProjectStore.findProjectByApplicationId(applicationId);
  if (null != result) {
    return "user" === result.install_scope;
  } else {
    const application = ApplicationStore.getApplication(applicationId);
    let prop;
    if (application != null) {
      prop = application.integrationTypesConfig;
    }
    let result1 = null != prop;
    if (result1) {
      result1 = application.supportsIntegrationTypes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL);
    }
    if (result1) {
      result1 = !application.supportsIntegrationTypes(ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL);
    }
    return result1;
  }
}
export function isVoiceChannelInFrameGuild(frame, channelId) {
  let guildId;
  if (frame.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY) {
    guildId = frame.surface.guildId;
  }
  const channel = ChannelStore.getChannel(channelId);
  return null != guildId && null != channel && channel.isGuildVocal() && channel.getGuildId() === guildId;
}