import { getAlertModalItemKey } from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { CircleErrorIcon } from "../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { combined } from "../../../utils/HelpdeskUtils.tsx";
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
  obj[0] = jsx(CircleErrorIcon /* CircleErrorIcon */.CircleErrorIcon, { size: "lg", style: callback().header });
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t["vh+Zpq"]);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj = { helpdeskArticle: null };
  const tmp = callback();
  obj[0] = combined.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
  obj[2] = intl2.format(getSystemLocale /* getSystemLocale */.t["tx08s+"], obj);
  const obj1 = { children: null };
  const obj2 = { variant: "secondary", text: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj2[1] = intl3.string(getSystemLocale /* getSystemLocale */.t["NX+WJN"]);
  obj1[0] = jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary", text: null }, "got-it");
  obj[3] = jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertActions, { children: null });
  return jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, { helpdeskArticle: null });
};