// === Module 12725: InAppReportsBreadCrumbs ===

// Module 12725 (InAppReportsBreadCrumbs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let rect;
let size;
let closure_3 = ["element", "menuName"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 0, alignSelf: "stretch", marginBottom: 16, paddingHorizontal: 16 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" }, breadCrumbDot: size, breadCrumbBar: rect, breadCrumbText: { marginStart: 8, lineHeight: 20 } };
size = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
rect = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_9 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let element;
  let found;
  let items;
  let menuName;
  let obj = require("react");
  const cResult = obj.c(12);
  ({ element, menuName } = arg0);
  let tmp4 = _objectWithoutProperties(arg0, closure_3);
  const tmp5 = closure_9();
  _require = tmp5;
  if (null != element) {
    if ("breadcrumbs" === element.type) {
      let first;
      let tmp7;
      const _Symbol2 = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(multiSelect) {
          multiSelect = multiSelect.multiSelect;
          const first = _slicedToArray(multiSelect.destination, 1)[0];
          let state;
          const _Object = Object;
          if (multiSelect != null) {
            state = multiSelect.state;
          }
          if (state == null) {
            state = {};
          }
          const items = [null, null];
          const values2 = values(state);
          if (values2.length > 0) {
            items[0] = values2.join(", ");
          }
          if ("" !== first) {
            items[1] = first;
          }
          return items;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function p(arg0) {
          return null != arg0;
        };
        cResult[1] = fn2;
        tmp7 = fn2;
      } else {
        tmp7 = cResult[1];
      }
      let obj2 = found(12);
      const flatMapResult = obj2.flatMap(tmp4.history, first);
      const tmp8 = found;
      found = flatMapResult.filter(tmp7);
      if (0 === found.length) {
        return null;
      } else {
        let tmp9;
        const container = tmp5.container;
        if (cResult[2] !== menuName) {
          let stringResult;
          const REPORT_TO_MOD = tmp(8315).ReportMenuTypeSets.REPORT_TO_MOD;
          const hasItem = REPORT_TO_MOD.has(menuName);
          const intl = tmp(1126).intl;
          const string = intl.string;
          if (hasItem) {
            stringResult = string(tmp8(2653)["6mx/DP"]);
          } else {
            stringResult = string(tmp(1126).t["+3V9Tp"]);
          }
          cResult[2] = menuName;
          cResult[3] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp5.title) {
          let tmp12;
          if (cResult[5] === tmp9) {
            tmp12 = cResult[6];
          }
          const mapped = found.map((children, index) => {
            let items;
            let tmp4 = null;
            const obj = { style: closure_0.breadCrumbItemContainer, children: items };
            if (index !== found.length - 1) {
              const obj2 = { style: closure_0.breadCrumbBar };
              tmp4 = metroImportDefault(View, obj2);
            }
            items = [tmp4, , ];
            const obj3 = { style: closure_0.breadCrumbDot };
            items[1] = metroImportDefault(View, obj3);
            const obj4 = { lineClamp: 2, ellipsizeMode: "tail", style: closure_0.breadCrumbText, variant: "text-md/medium", children };
            items[2] = metroImportDefault(Text_Text.Text, obj4);
            return metroImportAll(View, obj, "" + children + "+" + index);
          });
          if (cResult[7] === View) {
            if (cResult[8] === tmp5.container) {
              if (cResult[9] === tmp12) {
                let tmp16;
                if (cResult[10] === mapped) {
                  tmp16 = cResult[11];
                }
                return tmp16;
              }
            }
          }
          let obj3 = { style: container, children: items };
          items = [tmp12, mapped];
          const tmp18 = closure_8(View, obj3);
          cResult[7] = View;
          cResult[8] = tmp5.container;
          cResult[9] = tmp12;
          cResult[10] = mapped;
          cResult[11] = tmp18;
          tmp16 = tmp18;
        }
        let obj4 = { style: tmp5.title, accessibilityRole: "header", variant: "text-xs/bold", children: tmp9 };
        const tmp14 = closure_7(require("Text/Text").Text, obj4);
        cResult[4] = tmp5.title;
        cResult[5] = tmp9;
        cResult[6] = tmp14;
        tmp12 = tmp14;
      }
    }
  }
  return null;
}) : ((element) => {
  let closure_0;
  let items;
  let stringResult;
  element = element.element;
  const menuName = element.menuName;
  let found;
  const merged = Object.assign(element, Object.assign({ element: 0, menuName: 0 }));
  const tmp2 = closure_9();
  _require = tmp2;
  if (null != element) {
    if ("breadcrumbs" === element.type) {
      let obj = found(12);
      const flatMapResult = obj.flatMap(merged.history, (destination) => {
        let tmp;
        [tmp] = destination.destination;
        const multiSelect = destination.multiSelect;
        let state;
        const _Object = Object;
        if (multiSelect != null) {
          state = multiSelect.state;
        }
        if (state == null) {
          state = {};
        }
        const items = [null, null];
        const values2 = values(state);
        if (values2.length > 0) {
          items[0] = values2.join(", ");
        }
        if ("" !== tmp) {
          items[1] = tmp;
        }
        return items;
      });
      const tmp5 = found;
      found = flatMapResult.filter((item) => null != item);
      let tmp7Result = null;
      if (0 !== found.length) {
        let obj2 = { style: tmp2.container, children: items };
        let obj3 = { style: tmp2.title, accessibilityRole: "header", variant: "text-xs/bold", children: stringResult };
        const Text = require("Text/Text").Text;
        const REPORT_TO_MOD = require("ReportMenuType").ReportMenuTypeSets.REPORT_TO_MOD;
        const hasItem = REPORT_TO_MOD.has(menuName);
        const intl = require("intl").intl;
        const string = intl.string;
        const tmp10 = _require;
        if (hasItem) {
          stringResult = string(tmp5(2653)["6mx/DP"]);
        } else {
          stringResult = string(tmp10(1126).t["+3V9Tp"]);
        }
        items = [
          closure_7(Text, obj3),
          found.map((children, index) => {
                  let items;
                  let tmp4 = null;
                  const obj = { style: closure_0.breadCrumbItemContainer, children: items };
                  if (index !== found.length - 1) {
                    const obj2 = { style: closure_0.breadCrumbBar };
                    tmp4 = metroImportDefault(View, obj2);
                  }
                  items = [tmp4, , ];
                  const obj3 = { style: closure_0.breadCrumbDot };
                  items[1] = metroImportDefault(View, obj3);
                  const obj4 = { lineClamp: 2, ellipsizeMode: "tail", style: closure_0.breadCrumbText, variant: "text-md/medium", children };
                  items[2] = metroImportDefault(Text_Text.Text, obj4);
                  return metroImportAll(View, obj, "" + children + "+" + index);
                })
        ];
        tmp7Result = closure_8(View, obj2);
      }
      return tmp7Result;
    }
  }
  return null;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx");

export default tmp5;