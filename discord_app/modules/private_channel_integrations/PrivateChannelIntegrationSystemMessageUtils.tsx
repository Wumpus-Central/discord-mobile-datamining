// discord_app/modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx
import util from "../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ HelpdeskArticles: c3, NOOP: closure_4 } = Constants);
const result = size.fileFinishedImporting(
  "modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx",
);

export const getPrivateChannelIntegrationAddedSystemMessageContent =
  function getPrivateChannelIntegrationAddedSystemMessageContent(applicationNameHook) {
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
      let obj = {
        username,
        otherUsername: application.name,
        usernameHook,
        otherUsernameHook: applicationNameHook,
        helpCenterLink: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS),
      };
      let formatResult = intl2.format(util.t.J8SaGy, obj);
    } else {
      const intl = util.intl;
      obj = {
        username,
        usernameHook,
        helpCenterLink: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS),
      };
      formatResult = intl.format(util.t["+6V2sd"], obj);
    }
    return formatResult;
  };
export const getPrivateChannelIntegrationRemovedSystemMessageContent =
  function getPrivateChannelIntegrationRemovedSystemMessageContent(applicationNameHook) {
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
      let obj = {
        username,
        otherUsername: application.name,
        usernameHook,
        otherUsernameHook: applicationNameHook,
        helpCenterLink: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS),
      };
      let formatResult = intl2.format(util.t.eGCDak, obj);
    } else {
      const intl = util.intl;
      obj = {
        username,
        usernameHook,
        helpCenterLink: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS),
      };
      formatResult = intl.format(util.t.sAX6rs, obj);
    }
    return formatResult;
  };
export const getPrivateChannelIntegrationAddedSystemMessageASTContent =
  function getPrivateChannelIntegrationAddedSystemMessageASTContent(arg0) {
    ({ application, username, usernameOnClick, medium } = arg0);
    if (null != application) {
      const intl = util.intl;
      let obj = {
        username,
        otherUsername: application.name,
        usernameOnClick,
        otherUsernameOnClick: tmp,
        medium,
        helpCenterLink: null,
      };
      obj = { url: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
      obj.helpCenterLink = obj;
      let formatToPartsResult = intl.formatToParts(util.t["8r+Z+I"], obj);
    } else {
      const intl2 = util.intl;
      obj = { username, usernameOnClick, medium, helpCenterLink: null };
      const obj1 = { url: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
      obj.helpCenterLink = obj1;
      formatToPartsResult = intl2.formatToParts(util.t.ojysqe, obj);
    }
    return formatToPartsResult;
  };
export const getPrivateChannelIntegrationRemovedSystemMessageASTContent =
  function getPrivateChannelIntegrationRemovedSystemMessageASTContent(arg0) {
    ({ application, username, usernameOnClick, medium } = arg0);
    if (null != application) {
      const intl = util.intl;
      let obj = {
        username,
        otherUsername: application.name,
        usernameOnClick,
        otherUsernameOnClick: tmp,
        medium,
        helpCenterLink: null,
      };
      obj = { url: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
      obj.helpCenterLink = obj;
      let formatToPartsResult = intl.formatToParts(util.t.zmc0mq, obj);
    } else {
      const intl2 = util.intl;
      obj = { username, usernameOnClick, medium, helpCenterLink: null };
      const obj1 = { url: HelpdeskUtilsDefault.getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
      obj.helpCenterLink = obj1;
      formatToPartsResult = intl2.formatToParts(util.t["x2CN/Z"], obj);
    }
    return formatToPartsResult;
  };
