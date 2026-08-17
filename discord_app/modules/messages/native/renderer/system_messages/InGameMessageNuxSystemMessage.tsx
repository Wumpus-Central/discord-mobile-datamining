// discord_app/modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx
import getSystemLocale from "getSystemLocale" /* 1236 */;
import resultDefault from "result" /* 8178 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8185 */;
import closure_3 from "addApplication" /* 4478 */;
import { HelpdeskArticles } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx");

export const createInGameMessageNuxSystemMessage = function createInGameMessageNuxSystemMessage(message) {
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
    let obj = getMessageAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    obj = { username: null, usernameOnClick: null, gameName: null, urlOnClick: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj = { message: null, author: null, roleStyle: null };
    obj[0] = message;
    obj[1] = messageAuthorWithProcessedColor;
    obj[2] = roleStyle;
    obj[1] = tmp(8187)(obj);
    obj[2] = application.name;
    obj1 = { action: "bindOpenUrl", url: null, linkColor: null, medium: true };
    obj1[1] = tmp(1993).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS);
    obj1[2] = tmp3.linkColor;
    obj[3] = obj1;
    const obj2 = { content: null };
    const intl = getSystemLocale.intl;
    obj2[0] = intl.formatToParts(getSystemLocale.t["92erOB"], obj);
    const merged = Object.assign(tmp(8188)(message));
    return obj2;
  }
  tmp3 = resultDefault(theme);
};