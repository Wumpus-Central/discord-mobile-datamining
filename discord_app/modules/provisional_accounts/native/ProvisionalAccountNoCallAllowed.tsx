// discord_app/modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import combinedDefault from "../../../utils/HelpdeskUtils.tsx";
import getAlertModalItemKey from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import CircleErrorIcon from "../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import { HelpdeskArticles } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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