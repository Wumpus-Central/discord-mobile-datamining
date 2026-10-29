// === Module 16207: validateConjureAppFrame ===

// Module 16207 (validateConjureAppFrame)
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 5640 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6841 */;
import RPCErrorDefault from "RPCError" /* 9300 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 16208 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import ChannelStore from "ChannelStore" /* 4857 */;

require = fn;
const RPCErrors = fn(1084).RPCErrors;
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