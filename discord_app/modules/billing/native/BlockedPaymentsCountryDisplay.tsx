// === Module 11569: BlockedPaymentsCountryDisplay ===

// Module 11569 (BlockedPaymentsCountryDisplay)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import useThemeDefault from "useTheme" /* 4571 */;
import _modDef11570 from "module_11570" /* 11570 */;
import _modDef11571 from "module_11571" /* 11571 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { alignItems: "center" }, header: { fontSize: 20, fontWeight: "700", color: nativeDefault.colors.TEXT_SUBTLE, marginBottom: 16 }, image: { marginTop: 38 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  const tmp = closure_8();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.vwMEHS);
  const items = [timestampProducer(native.LegacyText, obj2), , ];
  const obj3 = { children: null };
  const intl2 = util.intl;
  const obj4 = { helpdeskArticle: null };
  const tmp4 = useThemeDefault();
  obj4.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS);
  obj3.children = intl2.format(util.t.IHxEJU, obj4);
  items[1] = timestampProducer(native.LegacyText, obj3);
  const obj6 = { style: tmp.image, source: null };
  if (obj7.isThemeDark(tmp4)) {
    let tmp2Result = _modDef11570;
  } else {
    tmp2Result = _modDef11571;
  }
  obj6.source = tmp2Result;
  items[2] = timestampProducer(React4, obj6);
  obj.children = items;
  return React5(React3, obj);
};