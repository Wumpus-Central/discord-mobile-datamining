// === Module 12936: DynamicLinkTemplates ===

// Module 12936 (DynamicLinkTemplates)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx");

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