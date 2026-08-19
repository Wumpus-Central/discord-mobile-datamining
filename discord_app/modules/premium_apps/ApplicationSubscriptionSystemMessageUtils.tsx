// === Module 8214: getApplicationSubscriptionSystemMessageASTContent ===

// Module 8214 (getApplicationSubscriptionSystemMessageASTContent)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

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