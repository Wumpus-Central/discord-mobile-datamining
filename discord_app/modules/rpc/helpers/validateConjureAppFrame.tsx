// === Module 15487: validateConjureAppFrame ===

// Module 15487 (validateConjureAppFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 6297 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6331 */;
import RPCErrorDefault from "RPCError" /* 9169 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 9536 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 15488 */;
import ApplicationStore from "ApplicationStore" /* 5540 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6293 */;
import ChannelStore from "ChannelStore" /* 2068 */;

require = fn;
const RPCErrors = fn(1087).RPCErrors;
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
export const isUserScopedConjureApplication = function isUserScopedConjureApplication(applicationId) {
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
};
export const isVoiceChannelInFrameGuild = function isVoiceChannelInFrameGuild(frame, channelId) {
  let guildId;
  if (frame.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY) {
    guildId = frame.surface.guildId;
  }
  const channel = ChannelStore.getChannel(channelId);
  return null != guildId && null != channel && channel.isGuildVocal() && channel.getGuildId() === guildId;
};