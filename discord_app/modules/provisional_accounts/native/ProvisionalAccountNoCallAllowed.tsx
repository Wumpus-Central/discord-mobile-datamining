// discord_app/modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx
import "noop";
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ header: { alignSelf: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx");

export default function ProvisionalAccountNoCallAllowed() {
  let obj = { header: null, title: null, content: null, actions: null };
  obj = { size: "lg", style: callback().header };
  obj[0] = jsx(require(7716) /* CircleErrorIcon */.CircleErrorIcon, { size: "lg", style: callback().header });
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["vh+Zpq"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj = { helpdeskArticle: null };
  const tmp = callback();
  obj[0] = importDefault(1945).getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
  obj[2] = intl2.format(require(1236) /* getSystemLocale */.t["tx08s+"], obj);
  const obj1 = { children: null };
  const obj2 = { variant: "secondary", text: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj2[1] = intl3.string(require(1236) /* getSystemLocale */.t["NX+WJN"]);
  obj1[0] = jsx(require(4628) /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary", text: null }, "got-it");
  obj[3] = jsx(require(4628) /* getAlertModalItemKey */.AlertActions, { children: null });
  return jsx(require(4628) /* getAlertModalItemKey */.AlertModal, { helpdeskArticle: null });
};