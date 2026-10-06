// === Module 7666: PrivateChannelIntegrationSystemMessageUtils ===

// Module 7666 (PrivateChannelIntegrationSystemMessageUtils)
import intl3 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ HelpdeskArticles: c3, NOOP: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx");

export const getPrivateChannelIntegrationAddedSystemMessageContent = function getPrivateChannelIntegrationAddedSystemMessageContent(applicationNameHook) {
  let application;
  let format2Result;
  let obj2;
  let obj4;
  let username;
  let usernameHook;
  ({ application, username, usernameHook } = applicationNameHook);
  if (usernameHook === undefined) {
    usernameHook = React3;
  }
  applicationNameHook = applicationNameHook.applicationNameHook;
  if (applicationNameHook === undefined) {
    applicationNameHook = React3;
  }
  if (null != application) {
    const intl2 = intl3.intl;
    const format2 = intl2.format;
    const obj3 = { username, otherUsername: application.name, usernameHook, otherUsernameHook: applicationNameHook, helpCenterLink: obj4.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    const J8SaGy = intl3.t.J8SaGy;
    obj4 = HelpdeskUtilsDefault;
    format2Result = format2(J8SaGy, obj3);
  } else {
    const intl = intl3.intl;
    const format = intl.format;
    const obj = { username, usernameHook, helpCenterLink: obj2.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    const prop = intl3.t["+6V2sd"];
    obj2 = HelpdeskUtilsDefault;
    format2Result = format(prop, obj);
  }
  return format2Result;
};
export const getPrivateChannelIntegrationRemovedSystemMessageContent = function getPrivateChannelIntegrationRemovedSystemMessageContent(applicationNameHook) {
  let application;
  let format2Result;
  let obj2;
  let obj4;
  let username;
  let usernameHook;
  ({ application, username, usernameHook } = applicationNameHook);
  if (usernameHook === undefined) {
    usernameHook = React3;
  }
  applicationNameHook = applicationNameHook.applicationNameHook;
  if (applicationNameHook === undefined) {
    applicationNameHook = React3;
  }
  if (null != application) {
    const intl2 = intl3.intl;
    const format2 = intl2.format;
    const obj3 = { username, otherUsername: application.name, usernameHook, otherUsernameHook: applicationNameHook, helpCenterLink: obj4.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    const eGCDak = intl3.t.eGCDak;
    obj4 = HelpdeskUtilsDefault;
    format2Result = format2(eGCDak, obj3);
  } else {
    const intl = intl3.intl;
    const format = intl.format;
    const obj = { username, usernameHook, helpCenterLink: obj2.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    const sAX6rs = intl3.t.sAX6rs;
    obj2 = HelpdeskUtilsDefault;
    format2Result = format(sAX6rs, obj);
  }
  return format2Result;
};
export const getPrivateChannelIntegrationAddedSystemMessageASTContent = function getPrivateChannelIntegrationAddedSystemMessageASTContent(arg0) {
  let application;
  let formatToPartsResult;
  let medium;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let username;
  let usernameOnClick;
  ({ application, username, usernameOnClick, medium } = arg0);
  if (null != application) {
    const intl = intl3.intl;
    const formatToParts = intl.formatToParts;
    const obj = { username, otherUsername: application.name, usernameOnClick, otherUsernameOnClick: tmp, medium, helpCenterLink: obj2 };
    obj2 = { url: obj3.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    const prop = intl3.t["8r+Z+I"];
    obj3 = HelpdeskUtilsDefault;
    formatToPartsResult = formatToParts(prop, obj);
  } else {
    const intl2 = intl3.intl;
    const formatToParts2 = intl2.formatToParts;
    const obj4 = { username, usernameOnClick, medium, helpCenterLink: obj5 };
    obj5 = { url: obj6.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    const ojysqe = intl3.t.ojysqe;
    obj6 = HelpdeskUtilsDefault;
    formatToPartsResult = formatToParts2(ojysqe, obj4);
  }
  return formatToPartsResult;
};
export const getPrivateChannelIntegrationRemovedSystemMessageASTContent = function getPrivateChannelIntegrationRemovedSystemMessageASTContent(arg0) {
  let application;
  let formatToPartsResult;
  let medium;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let username;
  let usernameOnClick;
  ({ application, username, usernameOnClick, medium } = arg0);
  if (null != application) {
    const intl = intl3.intl;
    const formatToParts = intl.formatToParts;
    const obj = { username, otherUsername: application.name, usernameOnClick, otherUsernameOnClick: tmp, medium, helpCenterLink: obj2 };
    obj2 = { url: obj3.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    const zmc0mq = intl3.t.zmc0mq;
    obj3 = HelpdeskUtilsDefault;
    formatToPartsResult = formatToParts(zmc0mq, obj);
  } else {
    const intl2 = intl3.intl;
    const formatToParts2 = intl2.formatToParts;
    const obj4 = { username, usernameOnClick, medium, helpCenterLink: obj5 };
    obj5 = { url: obj6.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    const prop = intl3.t["x2CN/Z"];
    obj6 = HelpdeskUtilsDefault;
    formatToPartsResult = formatToParts2(prop, obj4);
  }
  return formatToPartsResult;
};