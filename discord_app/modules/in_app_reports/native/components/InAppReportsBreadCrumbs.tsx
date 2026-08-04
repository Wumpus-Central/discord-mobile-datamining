import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flex: 0, alignSelf: "stretch", marginBottom: 16, paddingHorizontal: 16 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" }, breadCrumbDot: null, breadCrumbBar: null, breadCrumbText: null };
createCacheKey = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[5] = { marginStart: 8, lineHeight: 20 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx");

export default function Breadcrumbs(element) {
  element = element.element;
  let _require;
  let found;
  const merged = Object.assign(element, Object.create(null));
  const tmp2 = createCacheKey();
  _require = tmp2;
  if (null != element) {
    if ("breadcrumbs" === element.type) {
      let obj = found(12);
      found = obj.flatMap(merged.history, (destination) => {
        let tmp;
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
      }).filter((arg0) => null != arg0);
      if (0 === found.length) {
        return null;
      } else {
        obj = { style: null, children: null };
        obj[0] = tmp2.container;
        let map = _require(4281).Text;
        obj = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
        obj[0] = tmp2.title;
        const REPORT_TO_MOD = _require(7833).ReportMenuTypeSets.REPORT_TO_MOD;
        const hasItem = REPORT_TO_MOD.has(element.menuName);
        const intl = _require(1236).intl;
        const string = intl.string;
        if (hasItem) {
          let stringResult = string(_6mx_DP);
        } else {
          stringResult = string(tmp11(1236).t["+3V9Tp"]);
        }
        obj[3] = stringResult;
        obj = [, ];
        obj[0] = closure_4(map, obj);
        map = found.map;
        obj[1] = map((children) => {
          let obj = { style: _undefined.breadCrumbItemContainer, children: null };
          let tmp4 = null;
          if (arg1 !== found.length - 1) {
            obj = { style: null };
            obj[0] = tmp3.breadCrumbBar;
            tmp4 = outer1_4(tmp2, obj);
          }
          const items = [tmp4, , ];
          obj = { style: tmp3.breadCrumbDot };
          items[1] = outer1_4(outer1_3, obj);
          items[2] = outer1_4(_undefined(outer1_2[6]).Text, { lineClamp: 2, ellipsizeMode: "tail", style: _undefined.breadCrumbText, variant: "text-md/medium", children });
          obj[1] = items;
          return outer1_5(outer1_3, obj, "" + children + "+" + arg1);
        });
        obj[1] = obj;
        closure_5(View, obj);
        const tmp10 = closure_4;
        const tmp10Result = closure_4(map, obj);
        tmp11 = _require;
        const tmp8 = closure_5;
        const tmp9 = View;
      }
      const flatMapResult = obj.flatMap(merged.history, (destination) => {
        let tmp;
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
      tmp6 = found;
    }
  }
  return null;
};