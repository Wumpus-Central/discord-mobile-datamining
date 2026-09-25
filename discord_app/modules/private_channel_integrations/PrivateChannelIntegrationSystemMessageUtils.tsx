// === Module 7433: PrivateChannelIntegrationSystemMessageUtils ===

// Module 7433 (PrivateChannelIntegrationSystemMessageUtils)
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2110 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ HelpdeskArticles: c3, NOOP: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx");

export const getPrivateChannelIntegrationAddedSystemMessageContent = function getPrivateChannelIntegrationAddedSystemMessageContent(applicationNameHook) {
  ({ application, username, usernameHook } = applicationNameHook);
  if (usernameHook === undefined) {
    usernameHook = React4;
  }
  applicationNameHook = applicationNameHook.applicationNameHook;
  if (applicationNameHook === undefined) {
    applicationNameHook = React4;
  }
  if (null != application) {
    const intl2 = util.intl;
    const obj3 = { username, otherUsername: application.name, usernameHook, otherUsernameHook: applicationNameHook, helpCenterLink: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    let formatResult = intl2.format(util.t.J8SaGy, obj3);
  } else {
    const intl = util.intl;
    const obj = { username, usernameHook, helpCenterLink: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    formatResult = intl.format(util.t["+6V2sd"], obj);
  }
  return formatResult;
};
export const getPrivateChannelIntegrationRemovedSystemMessageContent = function getPrivateChannelIntegrationRemovedSystemMessageContent(applicationNameHook) {
  ({ application, username, usernameHook } = applicationNameHook);
  if (usernameHook === undefined) {
    usernameHook = React4;
  }
  applicationNameHook = applicationNameHook.applicationNameHook;
  if (applicationNameHook === undefined) {
    applicationNameHook = React4;
  }
  if (null != application) {
    const intl2 = util.intl;
    const obj3 = { username, otherUsername: application.name, usernameHook, otherUsernameHook: applicationNameHook, helpCenterLink: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    let formatResult = intl2.format(util.t.eGCDak, obj3);
  } else {
    const intl = util.intl;
    const obj = { username, usernameHook, helpCenterLink: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    formatResult = intl.format(util.t.sAX6rs, obj);
  }
  return formatResult;
};
export const getPrivateChannelIntegrationAddedSystemMessageASTContent = function getPrivateChannelIntegrationAddedSystemMessageASTContent(arg0) {
  ({ application, username, usernameOnClick, medium } = arg0);
  if (null != application) {
    const intl = util.intl;
    const obj = { username, otherUsername: application.name, usernameOnClick, otherUsernameOnClick: tmp, medium, helpCenterLink: null };
    const obj2 = { url: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj.helpCenterLink = obj2;
    let formatToPartsResult = intl.formatToParts(util.t["8r+Z+I"], obj);
  } else {
    const intl2 = util.intl;
    const obj4 = { username, usernameOnClick, medium, helpCenterLink: null };
    const obj5 = { url: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj4.helpCenterLink = obj5;
    formatToPartsResult = intl2.formatToParts(util.t.ojysqe, obj4);
  }
  return formatToPartsResult;
};
export const getPrivateChannelIntegrationRemovedSystemMessageASTContent = function getPrivateChannelIntegrationRemovedSystemMessageASTContent(arg0) {
  ({ application, username, usernameOnClick, medium } = arg0);
  if (null != application) {
    const intl = util.intl;
    const obj = { username, otherUsername: application.name, usernameOnClick, otherUsernameOnClick: tmp, medium, helpCenterLink: null };
    const obj2 = { url: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj.helpCenterLink = obj2;
    let formatToPartsResult = intl.formatToParts(util.t.zmc0mq, obj);
  } else {
    const intl2 = util.intl;
    const obj4 = { username, usernameOnClick, medium, helpCenterLink: null };
    const obj5 = { url: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj4.helpCenterLink = obj5;
    formatToPartsResult = intl2.formatToParts(util.t["x2CN/Z"], obj4);
  }
  return formatToPartsResult;
};