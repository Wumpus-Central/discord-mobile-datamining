// === Module 12680: ProvisionalAccountNoCallAllowed ===

// Module 12680 (ProvisionalAccountNoCallAllowed)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4660 */;
import CircleErrorIcon from "CircleErrorIcon" /* 8074 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_5 = createCacheKey.createStyles({ header: { alignSelf: "center" } });
const result = require("obj132").fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx");

export default function ProvisionalAccountNoCallAllowed() {
  let obj = { size: "lg", style: callback().header };
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