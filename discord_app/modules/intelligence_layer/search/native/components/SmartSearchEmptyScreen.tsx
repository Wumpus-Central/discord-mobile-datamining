// === Module 16784: SmartSearchEmptyScreen ===

// Module 16784 (SmartSearchEmptyScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3919 from "module_3919" /* 3919 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import Text_Text from "Text/Text" /* 4886 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import SuggestedSearchListDefault from "SuggestedSearchList" /* 16785 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj = { container: { flex: 1, gap: nativeDefault.space.PX_8 }, copy: null };
let obj3 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.copy = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchEmptyScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((smartSearchQuery) => {
  const cResult = c.c(18);
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f() {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.V6nAfF), "polite");
    };
    const items = [];
    cResult[1] = fn;
    cResult[2] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = noop.useEffect(tmp7, tmp8);
  if (cResult[3] !== insets.bottom) {
    const obj3 = { paddingBottom: insets.bottom };
    cResult[3] = insets.bottom;
    cResult[4] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp4.container) {
    if (cResult[6] === tmp10) {
      let tmp11 = cResult[7];
    }
    if (cResult[8] !== smartSearchQuery) {
      const obj4 = { smartSearchQuery, source: "error_screen" };
      const tmp14 = hasOwnProperty(SuggestedSearchListDefault, obj4);
      cResult[8] = smartSearchQuery;
      cResult[9] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: null };
      let intl = util.intl;
      obj5.children = intl.string(_modDef3919["HX/WYf"]);
      const tmp17 = hasOwnProperty(Text_Text.Text, obj5);
      cResult[10] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[10];
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: null };
      const intl2 = util.intl;
      obj6.children = intl2.string(_modDef3919["0ySxbu"]);
      const tmp20 = hasOwnProperty(Text_Text.Text, obj6);
      cResult[11] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] !== tmp4.copy) {
      const obj7 = { style: tmp4.copy, children: null };
      const items1 = [tmp15, tmp18];
      obj7.children = items1;
      const tmp24 = timestampProducer(View, obj7);
      cResult[12] = tmp4.copy;
      cResult[13] = tmp24;
      let tmp21 = tmp24;
    } else {
      tmp21 = cResult[13];
    }
    if (cResult[14] === tmp11) {
      if (cResult[15] === tmp12) {
        if (cResult[16] === tmp21) {
          let tmp25 = cResult[17];
        }
        return tmp25;
      }
    }
    const obj8 = { style: tmp11, children: null };
    const items2 = [tmp12, tmp21];
    obj8.children = items2;
    const tmp28 = timestampProducer(View, obj8);
    cResult[14] = tmp11;
    cResult[15] = tmp12;
    cResult[16] = tmp21;
    cResult[17] = tmp28;
    tmp25 = tmp28;
  }
  const items3 = [tmp4.container, tmp10];
  cResult[5] = tmp4.container;
  cResult[6] = tmp10;
  cResult[7] = items3;
  tmp11 = items3;
}) : ((smartSearchQuery) => {
  const tmp = closure_7();
  const effect = noop.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.V6nAfF), "polite");
  }, []);
  const obj = { style: null, children: null };
  const items = [tmp.container, { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom }];
  obj.style = items;
  const items1 = [hasOwnProperty(SuggestedSearchListDefault, { smartSearchQuery: smartSearchQuery.smartSearchQuery, source: "error_screen" }), ];
  const obj2 = { style: tmp.copy, children: null };
  const obj3 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: null };
  let intl = util.intl;
  obj3.children = intl.string(_modDef3919["HX/WYf"]);
  const items2 = [hasOwnProperty(Text_Text.Text, obj3), ];
  const obj4 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(_modDef3919["0ySxbu"]);
  items2[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items2;
  items1[1] = timestampProducer(View, obj2);
  obj.children = items1;
  return timestampProducer(View, obj);
}));