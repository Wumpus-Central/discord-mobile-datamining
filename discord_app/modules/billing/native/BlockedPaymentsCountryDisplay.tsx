// === Module 11529: BlockedPaymentsCountryDisplay ===

// Module 11529 (BlockedPaymentsCountryDisplay)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import useThemeDefault from "useTheme" /* 4541 */;
import _modDef11530 from "module_11530" /* 11530 */;
import _modDef11531 from "module_11531" /* 11531 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4606);
let createStyles = { container: { alignItems: "center" }, header: null, image: null };
createStyles = { fontSize: 20, fontWeight: "700", color: nativeDefault.colors.TEXT_SUBTLE, marginBottom: 16 };
createStyles.header = createStyles;
createStyles.image = { marginTop: 38 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  const tmp = closure_8();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.vwMEHS);
  const items = [timestampProducer(native.LegacyText, obj), , ];
  obj = { children: null };
  const intl2 = util.intl;
  const obj1 = { helpdeskArticle: null };
  const tmp4 = useThemeDefault();
  obj1.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS);
  obj.children = intl2.format(util.t.IHxEJU, obj1);
  items[1] = timestampProducer(native.LegacyText, obj);
  const obj2 = { style: tmp.image, source: null };
  if (obj7.isThemeDark(tmp4)) {
    let tmp2Result = _modDef11530;
  } else {
    tmp2Result = _modDef11531;
  }
  obj2.source = tmp2Result;
  items[2] = timestampProducer(React4, obj2);
  obj.children = items;
  return React5(React3, obj);
};