// discord_app/modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import combinedDefault from "../../utils/HelpdeskUtils.tsx";
import ME from "../../Constants.tsx";

({ HelpdeskArticles: c3, NOOP: c4 } = ME);
const result = obj132.fileFinishedImporting("modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx");

export const getPrivateChannelIntegrationAddedSystemMessageContent = function getPrivateChannelIntegrationAddedSystemMessageContent(applicationNameHook) {
  ({ application, username, usernameHook } = applicationNameHook);
  if (usernameHook === undefined) {
    usernameHook = closure_4;
  }
  applicationNameHook = applicationNameHook.applicationNameHook;
  if (applicationNameHook === undefined) {
    applicationNameHook = closure_4;
  }
  if (null != application) {
    const intl2 = getSystemLocale.intl;
    let obj = { username: null, otherUsername: null, usernameHook: null, otherUsernameHook: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = application.name;
    obj[2] = usernameHook;
    obj[3] = applicationNameHook;
    obj[4] = combinedDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    let formatResult = intl2.format(getSystemLocale.t.J8SaGy, obj);
  } else {
    const intl = getSystemLocale.intl;
    obj = { username: null, usernameHook: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = usernameHook;
    obj[2] = combinedDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    formatResult = intl.format(getSystemLocale.t["+6V2sd"], obj);
  }
  return formatResult;
};
export const getPrivateChannelIntegrationRemovedSystemMessageContent = function getPrivateChannelIntegrationRemovedSystemMessageContent(applicationNameHook) {
  ({ application, username, usernameHook } = applicationNameHook);
  if (usernameHook === undefined) {
    usernameHook = closure_4;
  }
  applicationNameHook = applicationNameHook.applicationNameHook;
  if (applicationNameHook === undefined) {
    applicationNameHook = closure_4;
  }
  if (null != application) {
    const intl2 = getSystemLocale.intl;
    let obj = { username: null, otherUsername: null, usernameHook: null, otherUsernameHook: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = application.name;
    obj[2] = usernameHook;
    obj[3] = applicationNameHook;
    obj[4] = combinedDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    let formatResult = intl2.format(getSystemLocale.t.eGCDak, obj);
  } else {
    const intl = getSystemLocale.intl;
    obj = { username: null, usernameHook: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = usernameHook;
    obj[2] = combinedDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    formatResult = intl.format(getSystemLocale.t.sAX6rs, obj);
  }
  return formatResult;
};
export const getPrivateChannelIntegrationAddedSystemMessageASTContent = function getPrivateChannelIntegrationAddedSystemMessageASTContent(arg0) {
  ({ application, username, usernameOnClick, medium } = arg0);
  if (null != application) {
    const intl = getSystemLocale.intl;
    let obj = { username: null, otherUsername: null, usernameOnClick: null, otherUsernameOnClick: null, medium: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = application.name;
    obj[2] = usernameOnClick;
    obj[3] = tmp;
    obj[4] = medium;
    obj = { url: null };
    obj[0] = combinedDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    obj[5] = obj;
    let formatToPartsResult = intl.formatToParts(getSystemLocale.t["8r+Z+I"], obj);
  } else {
    const intl2 = getSystemLocale.intl;
    obj = { username: null, usernameOnClick: null, medium: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = usernameOnClick;
    obj[2] = medium;
    obj1 = { url: null };
    obj1[0] = combinedDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    obj[3] = obj1;
    formatToPartsResult = intl2.formatToParts(getSystemLocale.t.ojysqe, obj);
  }
  return formatToPartsResult;
};
export const getPrivateChannelIntegrationRemovedSystemMessageASTContent = function getPrivateChannelIntegrationRemovedSystemMessageASTContent(arg0) {
  ({ application, username, usernameOnClick, medium } = arg0);
  if (null != application) {
    const intl = getSystemLocale.intl;
    let obj = { username: null, otherUsername: null, usernameOnClick: null, otherUsernameOnClick: null, medium: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = application.name;
    obj[2] = usernameOnClick;
    obj[3] = tmp;
    obj[4] = medium;
    obj = { url: null };
    obj[0] = combinedDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    obj[5] = obj;
    let formatToPartsResult = intl.formatToParts(getSystemLocale.t.zmc0mq, obj);
  } else {
    const intl2 = getSystemLocale.intl;
    obj = { username: null, usernameOnClick: null, medium: null, helpCenterLink: null };
    obj[0] = username;
    obj[1] = usernameOnClick;
    obj[2] = medium;
    obj1 = { url: null };
    obj1[0] = combinedDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS);
    obj[3] = obj1;
    formatToPartsResult = intl2.formatToParts(getSystemLocale.t["x2CN/Z"], obj);
  }
  return formatToPartsResult;
};