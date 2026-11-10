// === Module 11526: BlockedPaymentsCountryDisplay ===

// Module 11526 (BlockedPaymentsCountryDisplay)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import useThemeDefault from "useTheme" /* 5371 */;
import FastImageDefault from "FastImage" /* 5844 */;
import _modDef11527 from "module_11527" /* 11527 */;
import _modDef11528 from "module_11528" /* 11528 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5142);
let obj2 = { container: { alignItems: "center" }, header: { fontSize: 20, fontWeight: "700", color: nativeDefault.colors.TEXT_SUBTLE, marginBottom: 16 }, image: { marginTop: 38 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.vwMEHS);
  items = [hasOwnProperty(native.LegacyText, obj2), , ];
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
    let tmp2Result = _modDef11527;
  } else {
    tmp2Result = _modDef11528;
  }
  obj6.source = tmp2Result;
  items[2] = hasOwnProperty(tmp8, obj6);
  obj.children = items;
  return timestampProducer(View, obj);
};