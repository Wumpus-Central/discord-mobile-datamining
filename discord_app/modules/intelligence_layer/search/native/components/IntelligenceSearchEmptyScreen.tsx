// === Module 17179: IntelligenceSearchEmptyScreen ===

// Module 17179 (IntelligenceSearchEmptyScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3874 from "module_3874" /* 3874 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4534 */;
import Text_Text from "Text/Text" /* 4823 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7312 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let obj = { container: { flex: 1, gap: nativeDefault.space.PX_8 }, copy: null };
let obj3 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.copy = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj);
let obj4 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/IntelligenceSearchEmptyScreen.tsx");

export default noop.memo(() => {
  const tmp = closure_7();
  const effect = noop.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.V6nAfF), "polite");
  }, []);
  const obj = { style: null, children: null };
  const items = [tmp.container, { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom }];
  obj.style = items;
  const obj2 = { style: tmp.copy, children: null };
  const obj3 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: null };
  let intl = util.intl;
  obj3.children = intl.string(_modDef3874["0Vo35I"]);
  const items1 = [hasOwnProperty(Text_Text.Text, obj3), ];
  const obj4 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(_modDef3874.njrqqv);
  items1[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items1;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(View, obj);
});