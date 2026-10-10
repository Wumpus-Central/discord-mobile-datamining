// === Module 14693: validateConjureAppFrame ===

// Module 14693 (validateConjureAppFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8610 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 9234 */;
import RPCErrorDefault from "RPCError" /* 10936 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 14694 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10651 */;
import ChannelStore from "ChannelStore" /* 2065 */;

require = fn;
const RPCErrors = fn(1085).RPCErrors;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/helpers/validateConjureAppFrame.tsx");

export default function validateConjureAppFrame(arg0) {
  const tmp3 = validateEmbeddedAppFrameDefault(arg0);
  const applicationId = tmp3.frame.applicationId;
  const application = ApplicationStore.getApplication(applicationId);
  let prop;
  if (application != null) {
    prop = application.vibegrationsProjectId;
  }
  let result = null != prop;
  if (!result) {
    result = ConjureProjectStore.isConjureProjectApplication(applicationId);
  }
  if (result) {
    return tmp3;
  } else {
    const obj = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
    const tmp12 = new RPCErrorDefault(obj, "Only a Conjuring app can use this API");
    throw tmp12;
  }
};
export const isConjureApplication = function isConjureApplication(applicationId) {
  const application = ApplicationStore.getApplication(applicationId);
  let prop;
  if (application != null) {
    prop = application.vibegrationsProjectId;
  }
  let result = null != prop;
  if (!result) {
    result = ConjureProjectStore.isConjureProjectApplication(applicationId);
  }
  return result;
};
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