// discord_app/modules/billing/native/BlockedPaymentsCountryDisplay.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef11340 from "../../../../_runtime/metro/11340__.js";
import _modDef11341 from "../../../../_runtime/metro/11341__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  container: { alignItems: "center" },
  header: { fontSize: 20, fontWeight: "700", color: nativeDefault.colors.TEXT_SUBTLE, marginBottom: 16 },
  image: { marginTop: 38 },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.vwMEHS);
  const items = [hasOwnProperty(native.LegacyText, obj2), ,];
  const obj3 = { children: null };
  const intl2 = util.intl;
  const obj4 = { helpdeskArticle: null };
  const tmp4 = useThemeDefault();
  obj4.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS);
  obj3.children = intl2.format(util.t.IHxEJU, obj4);
  items[1] = hasOwnProperty(native.LegacyText, obj3);
  const obj6 = { style: tmp.image, source: null };
  const tmp8 = FastImageDefault;
  if (obj7.isThemeDark(tmp4)) {
    let tmp2Result = _modDef11340;
  } else {
    tmp2Result = _modDef11341;
  }
  obj6.source = tmp2Result;
  items[2] = hasOwnProperty(tmp8, obj6);
  obj.children = items;
  return timestampProducer(View, obj);
}
