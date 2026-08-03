import addApplication from "addApplication";
import { HelpdeskArticles } from "ME";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx");

export const createInGameMessageNuxSystemMessage = function createInGameMessageNuxSystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ theme, roleStyle } = message);
  let str = message.applicationId;
  if (str == null) {
    str = "";
  }
  application = application.getApplication(str);
  if (null == application) {
    return null;
  } else {
    let obj = require(7867) /* getMessageAuthorWithProcessedColor */;
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    obj = { username: null, usernameOnClick: null, gameName: null, urlOnClick: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj = { message: null, author: null, roleStyle: null };
    obj[0] = message;
    obj[1] = messageAuthorWithProcessedColor;
    obj[2] = roleStyle;
    obj[1] = tmp(7869)(obj);
    obj[2] = application.name;
    const obj1 = { action: "bindOpenUrl", url: null, linkColor: null, medium: true };
    obj1[1] = tmp(1945).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS);
    obj1[2] = tmp3.linkColor;
    obj[3] = obj1;
    const obj2 = { content: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj2[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t["92erOB"], obj);
    const merged = Object.assign(tmp(7870)(message));
    return obj2;
  }
  tmp3 = importDefault(7860)(theme);
};