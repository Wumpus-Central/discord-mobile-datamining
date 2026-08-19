// discord_app/modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";

const result = obj132.fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx");

export const getApplicationSubscriptionSystemMessageASTContent = function getApplicationSubscriptionSystemMessageASTContent(arg0) {
  ({ application, username, usernameOnClick } = arg0);
  if (null != application) {
    const intl2 = getSystemLocale.intl;
    let obj = { username: null, applicationName: null, usernameOnClick: null };
    obj[0] = username;
    obj[1] = application.name;
    obj[2] = usernameOnClick;
    let formatToPartsResult = intl2.formatToParts(getSystemLocale.t.Tes5Ou, obj);
  } else {
    const intl = getSystemLocale.intl;
    obj = { username: null, usernameOnClick: null };
    obj[0] = username;
    obj[1] = usernameOnClick;
    formatToPartsResult = intl.formatToParts(getSystemLocale.t.PUJtgi, obj);
  }
  return formatToPartsResult;
};