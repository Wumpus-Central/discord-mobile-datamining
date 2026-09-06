// === Module 8044: InGameMessageNuxSystemMessage ===

// Module 8044 (InGameMessageNuxSystemMessage)
import util from "util" /* 1114 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7953 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx");

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
    obj.usernameOnClick = tmp(7962)(obj);
    obj.gameName = application.name;
    const obj1 = { action: "bindOpenUrl", url: tmp(2024).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS), linkColor: tmp3.linkColor, medium: true };
    obj.urlOnClick = obj1;
    const obj2 = { content: null };
    const intl = util.intl;
    obj2.content = intl.formatToParts(util.t["92erOB"], obj);
    const merged = Object.assign(tmp(7964)(message));
    return obj2;
  }
  tmp3 = resolveMessageContentColorsDefault(theme);
};