// discord_app/modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import resolveMessageContentColorsDefault from "../resolveMessageContentColors.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import ApplicationStore from "../../../../applications/ApplicationStore.tsx";

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx",
);

export const createChannelLinkedToLobbySystemMessage = function createChannelLinkedToLobbySystemMessage(message) {
  message = message.message;
  ({ roleStyle, theme } = message);
  const tmp3 = resolveMessageContentColorsDefault(theme);
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
    obj = {
      username: messageAuthorWithProcessedColor.nick,
      usernameOnClick: null,
      applicationName: null,
      applicationNameOnClick: null,
      urlOnClick: null,
    };
    obj = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj.usernameOnClick = tmp(7962)(obj);
    obj.applicationName = application.name;
    const obj1 = { linkColor: tmp3.defaultUsernameColor, medium: true };
    obj.applicationNameOnClick = obj1;
    const obj2 = {
      action: "bindOpenUrl",
      url: tmp(2024).getArticleURL(HelpdeskArticles.LINKED_LOBBIES),
      linkColor: tmp3.linkColor,
      medium: true,
    };
    obj.urlOnClick = obj2;
    const obj3 = { content: null };
    const intl = util.intl;
    obj3.content = intl.formatToParts(util.t.gZfhOw, obj);
    const merged = Object.assign(tmp(7964)(message));
    return obj3;
  }
};
