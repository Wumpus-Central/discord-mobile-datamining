// discord_app/modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx
import intl3 from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx");

export const getApplicationSubscriptionSystemMessageASTContent =
  function getApplicationSubscriptionSystemMessageASTContent(arg0) {
    let application;
    let formatToPartsResult;
    let username;
    let usernameOnClick;
    ({ application, username, usernameOnClick } = arg0);
    if (null != application) {
      const intl2 = intl3.intl;
      const obj2 = { username, applicationName: application.name, usernameOnClick };
      formatToPartsResult = intl2.formatToParts(intl3.t.Tes5Ou, obj2);
    } else {
      const intl = intl3.intl;
      const obj = { username, usernameOnClick };
      formatToPartsResult = intl.formatToParts(intl3.t.PUJtgi, obj);
    }
    return formatToPartsResult;
  };
