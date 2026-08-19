// === Module 12833: getInviteDynamicLinkTemplate ===

// Module 12833 (getInviteDynamicLinkTemplate)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("../discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx");

export const getInviteDynamicLinkTemplate = function getInviteDynamicLinkTemplate(baseCode) {
  return "" + location.protocol + "//" + window.GLOBAL_ENV.INVITE_HOST + "/" + baseCode;
};
export const getGuildTemplateDynamicLinkTemplate = function getGuildTemplateDynamicLinkTemplate(arg0) {
  return "" + location.protocol + "//" + window.GLOBAL_ENV.GUILD_TEMPLATE_HOST + "/" + arg0;
};
export const getDefaultDynamicLinkTemplate = function getDefaultDynamicLinkTemplate() {
  return "" + location.protocol + "//" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/channels/@me";
};
export const getChannelDynamicLinkTemplate = function getChannelDynamicLinkTemplate(arg0) {
  let str = arg0;
  if (!arg0) {
    str = "@me";
  }
  return "" + location.protocol + "//" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/channels/" + str;
};