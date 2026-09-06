// === Module 9039: InAppReportsBreadCrumbs ===

// Module 9039 (InAppReportsBreadCrumbs)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
const createStyles = { container: { flex: 0, alignSelf: "stretch", marginBottom: 16, paddingHorizontal: 16 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" }, breadCrumbDot: null, breadCrumbBar: null, breadCrumbText: null };
let size = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.breadCrumbDot = size;
const rect = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.breadCrumbBar = rect;
createStyles.breadCrumbText = { marginStart: 8, lineHeight: 20 };
let closure_6 = createStyles.createStyles(createStyles);
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
      found = obj.flatMap(merged.history, (destination) => {
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
        obj = { style: tmp2.container, children: null };
        let map = require("Text/Text").Text;
        obj = { style: tmp2.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
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
        obj.children = stringResult;
        obj = [, ];
        obj[0] = closure_4(map, obj);
        map = found.map;
        obj[1] = map((children, arg1) => {
          let obj = { style: closure_0.breadCrumbItemContainer, children: null };
          let tmp4 = null;
          if (arg1 !== found.length - 1) {
            obj = { style: tmp3.breadCrumbBar };
            tmp4 = React4(tmp2, obj);
          }
          const items = [tmp4, , ];
          obj = { style: tmp3.breadCrumbDot };
          items[1] = React4(View, obj);
          items[2] = React4(Text_Text.Text, { lineClamp: 2, ellipsizeMode: "tail", style: closure_0.breadCrumbText, variant: "text-md/medium", children });
          obj.children = items;
          return hasOwnProperty(View, obj, "" + children + "+" + arg1);
        });
        obj.children = obj;
        closure_5(View, obj);
        const tmp11Result = closure_4(map, obj);
        tmp12 = _require;
      }
      const flatMapResult = obj.flatMap(merged.history, (destination) => {
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
      tmp7 = found;
    }
  }
  return null;
};