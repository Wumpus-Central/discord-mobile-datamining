// === Module 13268: ProvisionalAccountNoCallAllowed ===

// Module 13268 (ProvisionalAccountNoCallAllowed)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1995 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4750 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7938 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles({ header: { alignSelf: "center" } });
const result = require("set").fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx");

export default function ProvisionalAccountNoCallAllowed() {
  let obj = { header: null, title: null, content: null, actions: null };
  obj = { size: "lg", style: callback().header };
  obj[0] = jsx(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: callback().header });
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["vh+Zpq"]);
  const intl2 = getSystemLocale.intl;
  obj = { helpdeskArticle: null };
  const tmp = callback();
  obj[0] = combinedDefault.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
  obj[2] = intl2.format(getSystemLocale.t["tx08s+"], obj);
  obj1 = { children: null };
  const obj2 = { variant: "secondary", text: null };
  const intl3 = getSystemLocale.intl;
  obj2[1] = intl3.string(getSystemLocale.t["NX+WJN"]);
  obj1[0] = jsx(getAlertModalItemKey.AlertActionButton, { variant: "secondary", text: null }, "got-it");
  obj[3] = jsx(getAlertModalItemKey.AlertActions, { children: null });
  return jsx(getAlertModalItemKey.AlertModal, { helpdeskArticle: null });
};