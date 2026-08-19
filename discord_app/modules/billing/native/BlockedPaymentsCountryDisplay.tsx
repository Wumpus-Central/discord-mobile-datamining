// discord_app/modules/billing/native/BlockedPaymentsCountryDisplay.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import combinedDefault from "../../../utils/HelpdeskUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import registerAssetDefault from "../../../../_runtime/07690_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/07691_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { HelpdeskArticles } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { fontSize: 20, fontWeight: "700", color: ThemesDefault.colors.TEXT_SUBTLE, marginBottom: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginTop: 38 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  const tmp = callback2();
  let obj = { style: tmp.header, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.vwMEHS);
  const items = [callback(Button.LegacyText, obj), , ];
  obj = { children: null };
  const intl2 = getSystemLocale.intl;
  obj1 = { helpdeskArticle: null };
  const tmp4 = useThemeDefault();
  obj1[0] = combinedDefault.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS);
  obj[0] = intl2.format(getSystemLocale.t.IHxEJU, obj1);
  items[1] = callback(Button.LegacyText, obj);
  const obj2 = { style: tmp.image, source: null };
  if (obj7.isThemeDark(tmp4)) {
    let tmp2Result = registerAssetDefault;
  } else {
    tmp2Result = registerAssetDefault2;
  }
  obj2[1] = tmp2Result;
  items[2] = callback(closure_4, obj2);
  obj[1] = items;
  return callback(closure_3, obj);
};