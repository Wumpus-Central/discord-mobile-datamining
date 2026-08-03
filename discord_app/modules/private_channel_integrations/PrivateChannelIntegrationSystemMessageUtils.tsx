// === Module 7901: getPrivateChannelIntegrationAddedSystemMessageContent ===

// Module 7901 (getPrivateChannelIntegrationAddedSystemMessageContent)
import ME from "ME";

let c3;
let c4;
({ HelpdeskArticles: c3, NOOP: c4 } = ME);
const result = require("combined").fileFinishedImporting("modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx");

export const getPrivateChannelIntegrationAddedSystemMessageContent = function getPrivateChannelIntegrationAddedSystemMessageContent(applicationNameHook) {
  let application;
  let username;
  let usernameHook;
  ({ application, username, usernameHook } = applicationNameHook);
  if (usernameHook === undefined) {
    usernameHook = closure_4;
  }
  applicationNameHook = applicationNameHook.applicationNameHook;
  if (applicationNameHook === undefined) {
    applicationNameHook = closure_4;
  }
  if (null != application) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    let obj = { username: null, otherUsername: null, usernameHook: null, otherUsernameHook: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = application.name;
    obj[2] = usernameHook;
    obj[3] = applicationNameHook;
    obj[4] = importDefault(1945).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    let formatResult = intl2.format(require(1236) /* getSystemLocale */.t.J8SaGy, obj);
    const obj4 = importDefault(1945);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    obj = { username: null, usernameHook: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = usernameHook;
    obj[2] = importDefault(1945).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    formatResult = intl.format(require(1236) /* getSystemLocale */.t["+6V2sd"], obj);
    const obj2 = importDefault(1945);
  }
  return formatResult;
};
export const getPrivateChannelIntegrationRemovedSystemMessageContent = function getPrivateChannelIntegrationRemovedSystemMessageContent(applicationNameHook) {
  let application;
  let username;
  let usernameHook;
  ({ application, username, usernameHook } = applicationNameHook);
  if (usernameHook === undefined) {
    usernameHook = closure_4;
  }
  applicationNameHook = applicationNameHook.applicationNameHook;
  if (applicationNameHook === undefined) {
    applicationNameHook = closure_4;
  }
  if (null != application) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    let obj = { username: null, otherUsername: null, usernameHook: null, otherUsernameHook: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = application.name;
    obj[2] = usernameHook;
    obj[3] = applicationNameHook;
    obj[4] = importDefault(1945).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    let formatResult = intl2.format(require(1236) /* getSystemLocale */.t.eGCDak, obj);
    const obj4 = importDefault(1945);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    obj = { username: null, usernameHook: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = usernameHook;
    obj[2] = importDefault(1945).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    formatResult = intl.format(require(1236) /* getSystemLocale */.t.sAX6rs, obj);
    const obj2 = importDefault(1945);
  }
  return formatResult;
};
export const getPrivateChannelIntegrationAddedSystemMessageASTContent = function getPrivateChannelIntegrationAddedSystemMessageASTContent(arg0) {
  let application;
  let medium;
  let username;
  let usernameOnClick;
  ({ application, username, usernameOnClick, medium } = arg0);
  if (null != application) {
    const intl = require(1236) /* getSystemLocale */.intl;
    let obj = { username: null, otherUsername: null, usernameOnClick: null, otherUsernameOnClick: null, medium: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = application.name;
    obj[2] = usernameOnClick;
    obj[3] = tmp;
    obj[4] = medium;
    obj = { url: null };
    obj[0] = importDefault(1945).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    obj[5] = obj;
    let formatToPartsResult = intl.formatToParts(require(1236) /* getSystemLocale */.t["8r+Z+I"], obj);
    const obj3 = importDefault(1945);
  } else {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj = { username: null, usernameOnClick: null, medium: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = usernameOnClick;
    obj[2] = medium;
    const obj1 = { url: null };
    obj1[0] = importDefault(1945).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    obj[3] = obj1;
    formatToPartsResult = intl2.formatToParts(require(1236) /* getSystemLocale */.t.ojysqe, obj);
    const obj6 = importDefault(1945);
  }
  return formatToPartsResult;
};
export const getPrivateChannelIntegrationRemovedSystemMessageASTContent = function getPrivateChannelIntegrationRemovedSystemMessageASTContent(arg0) {
  let application;
  let medium;
  let username;
  let usernameOnClick;
  ({ application, username, usernameOnClick, medium } = arg0);
  if (null != application) {
    const intl = require(1236) /* getSystemLocale */.intl;
    let obj = { username: null, otherUsername: null, usernameOnClick: null, otherUsernameOnClick: null, medium: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = application.name;
    obj[2] = usernameOnClick;
    obj[3] = tmp;
    obj[4] = medium;
    obj = { url: null };
    obj[0] = importDefault(1945).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    obj[5] = obj;
    let formatToPartsResult = intl.formatToParts(require(1236) /* getSystemLocale */.t.zmc0mq, obj);
    const obj3 = importDefault(1945);
  } else {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj = { username: null, usernameOnClick: null, medium: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = usernameOnClick;
    obj[2] = medium;
    const obj1 = { url: null };
    obj1[0] = importDefault(1945).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    obj[3] = obj1;
    formatToPartsResult = intl2.formatToParts(require(1236) /* getSystemLocale */.t["x2CN/Z"], obj);
    const obj6 = importDefault(1945);
  }
  return formatToPartsResult;
};