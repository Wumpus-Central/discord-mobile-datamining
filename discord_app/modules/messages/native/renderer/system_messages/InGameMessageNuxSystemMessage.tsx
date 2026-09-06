// discord_app/modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import resolveMessageContentColorsDefault from "../resolveMessageContentColors.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import ApplicationStore from "../../../../applications/ApplicationStore.tsx";

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx",
);

export const createInGameMessageNuxSystemMessage = function createInGameMessageNuxSystemMessage(message) {
  message = message.message;
  ({ theme, roleStyle } = message);
  let str = message.applicationId;
  if (str == null) {
    str = "";
  }
  const application = ApplicationStore.getApplication(str);
  if (null == application) {
    return null;
  } else {
    let obj = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, gameName: null, urlOnClick: null };
    obj = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj.usernameOnClick = formatUsernameOnClickDefault(obj);
    obj.gameName = application.name;
    const obj1 = {
      action: "bindOpenUrl",
      url: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS),
      linkColor: tmp3.linkColor,
      medium: true,
    };
    obj.urlOnClick = obj1;
    const obj2 = { content: null };
    const intl = util.intl;
    obj2.content = intl.formatToParts(util.t["92erOB"], obj);
    const merged = Object.assign(createCommonMessageDefault(message));
    return obj2;
  }
  tmp3 = resolveMessageContentColorsDefault(theme);
};
