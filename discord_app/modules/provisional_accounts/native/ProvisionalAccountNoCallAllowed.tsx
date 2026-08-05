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
  obj[0] = jsx(require("../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx") /* CircleErrorIcon */.CircleErrorIcon, { size: "lg", style: callback().header });
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["vh+Zpq"]);
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = { helpdeskArticle: null };
  const tmp = callback();
  obj[0] = require("../../../utils/HelpdeskUtils.tsx").getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
  obj[2] = intl2.format(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["tx08s+"], obj);
  const obj1 = { children: null };
  const obj2 = { variant: "secondary", text: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[1] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["NX+WJN"]);
  obj1[0] = jsx(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary", text: null }, "got-it");
  obj[3] = jsx(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActions, { children: null });
  return jsx(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertModal, { helpdeskArticle: null });
};