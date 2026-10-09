// === Module 10462: BlockedPaymentsCountryDisplay ===

// Module 10462 (BlockedPaymentsCountryDisplay)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import _modDef10463 from "module_10463" /* 10463 */;
import _modDef10464 from "module_10464" /* 10464 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { alignItems: "center" }, header: { fontSize: 20, fontWeight: "700", color: nativeDefault.colors.TEXT_SUBTLE, marginBottom: 16 }, image: { marginTop: 38 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { fontSize: 20, fontWeight: "700", color: nativeDefault.colors.TEXT_SUBTLE, marginBottom: 16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BlockedPaymentsCountryDisplay() {
  const cResult = c.c(11);
  const tmp4 = closure_8();
  ({ container, header } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.vwMEHS);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.header) {
    const obj2 = { style: header, children: first };
    const tmp11 = timestampProducer(native.LegacyText, obj2);
    cResult[1] = tmp4.header;
    cResult[2] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { children: null };
    const intl2 = util.intl;
    const obj4 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS) };
    obj3.children = intl2.format(util.t.IHxEJU, obj4);
    const tmp15 = timestampProducer(native.LegacyText, obj3);
    cResult[3] = tmp15;
    let tmp12 = tmp15;
    const tmp5Result = HelpdeskUtilsDefault;
  } else {
    tmp12 = cResult[3];
  }
  const tmp6 = useThemeDefault();
  if (tmpResult.isThemeDark(tmp6)) {
    let tmp5Result2 = _modDef10463;
  } else {
    tmp5Result2 = _modDef10464;
  }
  if (cResult[4] === tmp4.image) {
    if (cResult[5] === tmp5Result2) {
      let tmp17 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      if (cResult[8] === tmp9) {
        if (cResult[9] === tmp17) {
          let tmp19 = cResult[10];
        }
        return tmp19;
      }
    }
    const obj5 = { style: container, children: null };
    const items = [tmp9, tmp12, tmp17];
    obj5.children = items;
    const tmp22 = React5(React3, obj5);
    cResult[7] = tmp4.container;
    cResult[8] = tmp9;
    cResult[9] = tmp17;
    cResult[10] = tmp22;
    tmp19 = tmp22;
  }
  const tmp18 = timestampProducer(React4, { style: tmp4.image, source: tmp5Result2 });
  cResult[4] = tmp4.image;
  cResult[5] = tmp5Result2;
  cResult[6] = tmp18;
  tmp17 = tmp18;
  const obj6 = { style: tmp4.image, source: tmp5Result2 };
  tmpResult = shared;
}) : (function BlockedPaymentsCountryDisplay() {
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
    let tmp2Result = _modDef10463;
  } else {
    tmp2Result = _modDef10464;
  }
  obj6.source = tmp2Result;
  items[2] = timestampProducer(React4, obj6);
  obj.children = items;
  return React5(React3, obj);
});