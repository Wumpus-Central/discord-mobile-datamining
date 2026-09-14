// === Module 9168: InAppReportsBreadCrumbs ===

// Module 9168 (InAppReportsBreadCrumbs)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4632 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { flex: 0, alignSelf: "stretch", marginBottom: 16, paddingHorizontal: 16 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" }, breadCrumbDot: null, breadCrumbBar: null, breadCrumbText: null };
let size = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.breadCrumbDot = size;
const rect = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.breadCrumbBar = rect;
obj2.breadCrumbText = { marginStart: 8, lineHeight: 20 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx");

export default function Breadcrumbs(element) {
  element = element.element;
  let found;
  const merged = Object.assign(element, Object.assign({ element: 0, menuName: 0 }));
  const tmp2 = closure_6();
  _require = tmp2;
  if (null != element) {
    if ("breadcrumbs" === element.type) {
      let prop = dependencyMap;
      let obj = found(12);
      const tmp7 = found;
      found = found(12).flatMap(merged.history, (destination) => {
        [tmp] = destination.destination;
        const multiSelect = destination.multiSelect;
        let state;
        if (multiSelect != null) {
          state = multiSelect.state;
        }
        if (state == null) {
          state = {};
        }
        const items = [null, null];
        const values = Object.values(state);
        if (values.length > 0) {
          items[0] = values.join(", ");
        }
        if ("" !== tmp) {
          items[1] = tmp;
        }
        return items;
      }).filter((item) => null != item);
      if (0 === found.length) {
        return null;
      } else {
        let obj2 = { style: tmp2.container, children: null };
        let map = require("Text/Text").Text;
        let obj4 = { style: tmp2.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
        const REPORT_TO_MOD = require("ReportMenuType").ReportMenuTypeSets.REPORT_TO_MOD;
        const hasItem = REPORT_TO_MOD.has(element.menuName);
        const intl = require("util").intl;
        const string = intl.string;
        if (hasItem) {
          prop = tmp7(2528)["6mx/DP"];
          let stringResult = string(prop);
        } else {
          stringResult = string(tmp12(1114).t["+3V9Tp"]);
        }
        obj4.children = stringResult;
        obj4 = [, ];
        obj4[0] = closure_4(map, obj4);
        map = found.map;
        obj4[1] = map((children, arg1) => {
          const obj = { style: closure_0.breadCrumbItemContainer, children: null };
          let tmp4 = null;
          if (arg1 !== found.length - 1) {
            const obj2 = { style: closure_0.breadCrumbBar };
            tmp4 = React4(View, obj2);
          }
          const items = [tmp4, React4(View, { style: closure_0.breadCrumbDot }), React4(Text_Text.Text, { lineClamp: 2, ellipsizeMode: "tail", style: closure_0.breadCrumbText, variant: "text-md/medium", children })];
          obj.children = items;
          return hasOwnProperty(View, obj, "" + children + "+" + arg1);
        });
        obj2.children = obj4;
        closure_5(View, obj2);
        const tmp11Result = closure_4(map, obj4);
        tmp12 = _require;
      }
      const flatMapResult = found(12).flatMap(merged.history, (destination) => {
        [tmp] = destination.destination;
        const multiSelect = destination.multiSelect;
        let state;
        if (multiSelect != null) {
          state = multiSelect.state;
        }
        if (state == null) {
          state = {};
        }
        const items = [null, null];
        const values = Object.values(state);
        if (values.length > 0) {
          items[0] = values.join(", ");
        }
        if ("" !== tmp) {
          items[1] = tmp;
        }
        return items;
      });
    }
  }
  return null;
};