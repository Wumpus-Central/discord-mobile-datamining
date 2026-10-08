// === Module 13394: InAppReportsBreadCrumbs ===

// Module 13394 (InAppReportsBreadCrumbs)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5086 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["element", "menuName"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 0, alignSelf: "stretch", marginBottom: 16, paddingHorizontal: 16 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" }, breadCrumbDot: null, breadCrumbBar: null, breadCrumbText: null };
let size = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.breadCrumbDot = size;
const rect = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.breadCrumbBar = rect;
obj2.breadCrumbText = { marginStart: 8, lineHeight: 20 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function Breadcrumbs(arg0) {
  const cResult = require("c").c(12);
  ({ element, menuName } = arg0);
  let obj = require("c");
  const tmp5 = closure_9();
  _require = tmp5;
  if (null != element) {
    if ("breadcrumbs" === element.type) {
      const _Symbol2 = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(multiSelect) {
          multiSelect = multiSelect.multiSelect;
          const first = _slicedToArray(multiSelect.destination, 1)[0];
          state = undefined;
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
          if ("" !== first) {
            items[1] = first;
          }
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function p(arg0) {
          return null != arg0;
        };
        cResult[1] = fn2;
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[1];
      }
      let obj2 = found(12);
      const tmp8 = found;
      found = found(12).flatMap(tmp4.history, first).filter(tmp7);
      if (0 === found.length) {
        return null;
      } else if (cResult[2] !== menuName) {
        const REPORT_TO_MOD = tmp(7698).ReportMenuTypeSets.REPORT_TO_MOD;
        const hasItem = REPORT_TO_MOD.has(menuName);
        const intl = tmp(1126).intl;
        const string = intl.string;
        if (hasItem) {
          let stringResult = string(tmp8(2697)["6mx/DP"]);
        } else {
          stringResult = string(tmp(1126).t["+3V9Tp"]);
        }
        cResult[2] = menuName;
        cResult[3] = stringResult;
      } else {
        if (cResult[4] === tmp5.title) {
          if (cResult[5] === tmp9) {
            let tmp13 = cResult[6];
          }
          const mapped = found.map((children, index) => {
            const obj = { style: closure_0.breadCrumbItemContainer, children: null };
            let tmp4 = null;
            if (index !== found.length - 1) {
              const obj2 = { style: closure_0.breadCrumbBar };
              tmp4 = React5(View, obj2);
            }
            const items = [tmp4, React5(View, { style: closure_0.breadCrumbDot }), React5(Text_Text.Text, { lineClamp: 2, ellipsizeMode: "tail", style: closure_0.breadCrumbText, variant: "text-md/medium", children })];
            obj.children = items;
            return closure_2_8(View, obj, "" + children + "+" + index);
          });
          if (cResult[7] === View) {
            if (cResult[8] === tmp5.container) {
              if (cResult[9] === tmp13) {
                if (cResult[10] === mapped) {
                  let tmp17 = cResult[11];
                }
                return tmp17;
              }
            }
          }
          const obj3 = { style: tmp22, children: null };
          let items = [tmp13, mapped];
          obj3.children = items;
          const tmp19 = closure_8(View, obj3);
          cResult[7] = View;
          cResult[8] = tmp5.container;
          cResult[9] = tmp13;
          cResult[10] = mapped;
          cResult[11] = tmp19;
          tmp17 = tmp19;
        }
        const obj4 = { style: tmp5.title, accessibilityRole: "header", variant: "text-xs/bold", children: cResult[3] };
        const tmp15 = closure_7(tmp(5086).Text, obj4);
        cResult[4] = tmp5.title;
        cResult[5] = cResult[3];
        cResult[6] = tmp15;
        tmp13 = tmp15;
      }
      const flatMapResult = found(12).flatMap(tmp4.history, first);
    }
  }
  return null;
}) : (function Breadcrumbs(element) {
  element = element.element;
  let found;
  const merged = Object.assign(element, Object.assign({ element: 0, menuName: 0 }));
  const tmp2 = closure_9();
  _require = tmp2;
  if (null != element) {
    if ("breadcrumbs" === element.type) {
      let prop = dependencyMap;
      let obj = found(12);
      const tmp7 = found;
      found = found(12).flatMap(merged.history, (destination) => {
        [tmp] = destination.destination;
        const multiSelect = destination.multiSelect;
        state = undefined;
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
          prop = tmp7(2697)["6mx/DP"];
          let stringResult = string(prop);
        } else {
          stringResult = string(tmp12(1126).t["+3V9Tp"]);
        }
        obj4.children = stringResult;
        obj4 = [, ];
        obj4[0] = closure_7(map, obj4);
        map = found.map;
        obj4[1] = map((children, arg1) => {
          const obj = { style: closure_0.breadCrumbItemContainer, children: null };
          let tmp4 = null;
          if (arg1 !== found.length - 1) {
            const obj2 = { style: closure_0.breadCrumbBar };
            tmp4 = React5(View, obj2);
          }
          const items = [tmp4, React5(View, { style: closure_0.breadCrumbDot }), React5(Text_Text.Text, { lineClamp: 2, ellipsizeMode: "tail", style: closure_0.breadCrumbText, variant: "text-md/medium", children })];
          obj.children = items;
          return closure_2_8(View, obj, "" + children + "+" + arg1);
        });
        obj2.children = obj4;
        closure_8(View, obj2);
        const tmp11Result = closure_7(map, obj4);
        tmp12 = _require;
      }
      const flatMapResult = found(12).flatMap(merged.history, (destination) => {
        [tmp] = destination.destination;
        const multiSelect = destination.multiSelect;
        state = undefined;
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
});