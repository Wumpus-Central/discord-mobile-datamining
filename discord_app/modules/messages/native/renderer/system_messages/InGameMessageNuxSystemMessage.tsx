// === Module 8263: createInGameMessageNuxSystemMessage ===

// Module 8263 (createInGameMessageNuxSystemMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import resultDefault from "result" /* 8178 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8185 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8187 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;
import addApplication from "addApplication" /* 4478 */;
import { HelpdeskArticles } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx");

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
    obj[1] = formatUsernameOnClickDefault(obj);
    obj[2] = application.name;
    obj1 = { action: "bindOpenUrl", url: null, linkColor: null, medium: true };
    obj1[1] = combinedDefault.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS);
    obj1[2] = tmp3.linkColor;
    obj[3] = obj1;
    const obj2 = { content: null };
    const intl = getSystemLocale.intl;
    obj2[0] = intl.formatToParts(getSystemLocale.t["92erOB"], obj);
    const merged = Object.assign(createCommonMessageDefault(message));
    return obj2;
  }
  tmp3 = resultDefault(theme);
};