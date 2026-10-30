// === Module 14707: DynamicLinkTemplates ===

// Module 14707 (DynamicLinkTemplates)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx");

export function getInviteDynamicLinkTemplate(baseCode) {
  return "" + location.protocol + "//" + window.GLOBAL_ENV.INVITE_HOST + "/" + baseCode;
}
export function getGuildTemplateDynamicLinkTemplate(arg0) {
  return "" + location.protocol + "//" + window.GLOBAL_ENV.GUILD_TEMPLATE_HOST + "/" + arg0;
}
export function getDefaultDynamicLinkTemplate() {
  return "" + location.protocol + "//" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/channels/@me";
}
export function getChannelDynamicLinkTemplate(arg0) {
  let str = arg0;
  if (!arg0) {
    str = "@me";
  }
  return "" + location.protocol + "//" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/channels/" + str;
}