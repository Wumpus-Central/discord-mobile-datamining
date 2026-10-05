// discord_app/modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx
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
  "modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx",
);

export const createInGameMessageNuxSystemMessage = function createInGameMessageNuxSystemMessage(message) {
  let intl;
  let obj3;
  let obj4;
  let roleStyle;
  let theme;
  let tmpResult;
  message = message.message;
  ({ theme, roleStyle } = message);
  let str = message.applicationId;
  const getApplication = ApplicationStore.getApplication;
  const tmp3 = resolveMessageContentColorsDefault(theme);
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
      gameName: application.name,
      urlOnClick: obj4,
    };
    obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj4 = {
      action: "bindOpenUrl",
      url: tmpResult.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS),
      linkColor: tmp3.linkColor,
      medium: true,
    };
    tmpResult = HelpdeskUtilsDefault;
    const obj5 = { content: intl.formatToParts(intl2.t["92erOB"], obj2) };
    intl = intl2.intl;
    const merged = Object.assign(createCommonMessageDefault(message));
    return obj5;
  }
};
