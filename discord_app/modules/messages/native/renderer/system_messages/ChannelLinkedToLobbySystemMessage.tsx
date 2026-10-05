// discord_app/modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx
import Constants from "../../../../../Constants.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import resolveMessageContentColorsDefault from "../resolveMessageContentColors.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import ApplicationStore from "../../../../applications/ApplicationStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx",
);

export const createChannelLinkedToLobbySystemMessage = function createChannelLinkedToLobbySystemMessage(message) {
  let intl;
  let obj3;
  let obj4;
  let obj5;
  let roleStyle;
  let theme;
  let tmpResult;
  message = message.message;
  ({ roleStyle, theme } = message);
  const tmp3 = resolveMessageContentColorsDefault(theme);
  let str = message.applicationId;
  const getApplication = ApplicationStore.getApplication;
  if (str == null) {
    str = "";
  }
  const application = getApplication(str);
  if (null == application) {
    return null;
  } else {
    const obj = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    const obj2 = {
      username: messageAuthorWithProcessedColor.nick,
      usernameOnClick: formatUsernameOnClickDefault(obj3),
      applicationName: application.name,
      applicationNameOnClick: obj4,
      urlOnClick: obj5,
    };
    obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj4 = { linkColor: tmp3.defaultUsernameColor, medium: true };
    obj5 = {
      action: "bindOpenUrl",
      url: tmpResult.getArticleURL(HelpdeskArticles.LINKED_LOBBIES),
      linkColor: tmp3.linkColor,
      medium: true,
    };
    tmpResult = HelpdeskUtilsDefault;
    const obj6 = { content: intl.formatToParts(intl2.t.gZfhOw, obj2) };
    intl = intl2.intl;
    const merged = Object.assign(createCommonMessageDefault(message));
    return obj6;
  }
};
