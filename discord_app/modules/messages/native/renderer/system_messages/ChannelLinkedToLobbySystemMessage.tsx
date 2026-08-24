// === Module 8302: createChannelLinkedToLobbySystemMessage ===

// Module 8302 (createChannelLinkedToLobbySystemMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import resultDefault from "result" /* 8218 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8225 */;
import closure_3 from "addApplication" /* 4482 */;
import { HelpdeskArticles } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx");

export const createChannelLinkedToLobbySystemMessage = function createChannelLinkedToLobbySystemMessage(message) {
  message = message.message;
  ({ roleStyle, theme } = message);
  const tmp3 = resultDefault(theme);
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
    obj = { username: null, usernameOnClick: null, applicationName: null, applicationNameOnClick: null, urlOnClick: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj = { message: null, author: null, roleStyle: null };
    obj[0] = message;
    obj[1] = messageAuthorWithProcessedColor;
    obj[2] = roleStyle;
    obj[1] = tmp(8227)(obj);
    obj[2] = application.name;
    obj1 = { linkColor: null, medium: true };
    obj1[0] = tmp3.defaultUsernameColor;
    obj[3] = obj1;
    const obj2 = { action: "bindOpenUrl", url: null, linkColor: null, medium: true };
    obj2[1] = tmp(1994).getArticleURL(HelpdeskArticles.LINKED_LOBBIES);
    obj2[2] = tmp3.linkColor;
    obj[4] = obj2;
    const obj3 = { content: null };
    const intl = getSystemLocale.intl;
    obj3[0] = intl.formatToParts(getSystemLocale.t.gZfhOw, obj);
    const merged = Object.assign(tmp(8228)(message));
    return obj3;
  }
};