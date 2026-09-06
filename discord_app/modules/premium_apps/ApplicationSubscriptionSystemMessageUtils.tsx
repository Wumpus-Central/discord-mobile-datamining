// discord_app/modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx
import util from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx");

export const getApplicationSubscriptionSystemMessageASTContent =
  function getApplicationSubscriptionSystemMessageASTContent(arg0) {
    ({ application, username, usernameOnClick } = arg0);
    if (null != application) {
      const intl2 = util.intl;
      let obj = { username, applicationName: application.name, usernameOnClick };
      let formatToPartsResult = intl2.formatToParts(util.t.Tes5Ou, obj);
    } else {
      const intl = util.intl;
      obj = { username, usernameOnClick };
      formatToPartsResult = intl.formatToParts(util.t.PUJtgi, obj);
    }
    return formatToPartsResult;
  };
