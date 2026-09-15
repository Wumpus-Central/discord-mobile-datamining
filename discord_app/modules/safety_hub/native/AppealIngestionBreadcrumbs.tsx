// === Module 12039: AppealIngestionBreadcrumbs ===

// Module 12039 (AppealIngestionBreadcrumbs)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4635 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { flex: 0, alignSelf: "stretch", marginBottom: 8 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" }, breadCrumbDot: null, breadCrumbBar: null, breadCrumbText: null };
let size = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.breadCrumbDot = size;
const rect = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.breadCrumbBar = rect;
obj2.breadCrumbText = { marginStart: 8, lineHeight: 20 };
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx");

export default function AppealIngestionBreadcrumbs(reasons) {
  reasons = reasons.reasons;
  const tmp = closure_5();
  _require = tmp;
  let tmp2 = null;
  if (0 !== reasons.length) {
    let obj = { style: tmp.container, children: null };
    const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    const intl = require("util").intl;
    obj2.children = intl.string(require("util").t.eQg0Ck);
    let items = [
      closure_3(require("Text/Text").Text, obj2),
      reasons.map((children, index) => {
          const obj = { style: closure_0.breadCrumbItemContainer, children: null };
          const items = [React3(View, { style: closure_0.breadCrumbBar }), React3(View, { style: closure_0.breadCrumbDot }), React3(Text_Text.Text, { lineClamp: 2, ellipsizeMode: "tail", style: closure_0.breadCrumbText, variant: "text-md/medium", children })];
          obj.children = items;
          return React4(View, obj, "" + children + "+" + index);
        })
    ];
    obj.children = items;
    tmp2 = closure_4(View, obj);
  }
  return tmp2;
};