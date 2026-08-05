import { getSystemLocale } from "../../intl/index.native.tsx";
// discord_app/modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx
const result = require("set").fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx");

export const getApplicationSubscriptionSystemMessageASTContent = function getApplicationSubscriptionSystemMessageASTContent(arg0) {
  let application;
  let username;
  let usernameOnClick;
  ({ application, username, usernameOnClick } = arg0);
  if (null != application) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    let obj = { username: null, applicationName: null, usernameOnClick: null };
    obj[0] = username;
    obj[1] = application.name;
    obj[2] = usernameOnClick;
    let formatToPartsResult = intl2.formatToParts(getSystemLocale /* getSystemLocale */.t.Tes5Ou, obj);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj = { username: null, usernameOnClick: null };
    obj[0] = username;
    obj[1] = usernameOnClick;
    formatToPartsResult = intl.formatToParts(getSystemLocale /* getSystemLocale */.t.PUJtgi, obj);
  }
  return formatToPartsResult;
};