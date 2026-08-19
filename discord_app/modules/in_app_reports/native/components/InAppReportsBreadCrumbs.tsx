// === Module 12808: Breadcrumbs ===

// Module 12808 (Breadcrumbs)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[5] = { marginStart: 8, lineHeight: 20 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx");

export default function Breadcrumbs(element) {
  element = element.element;
  let found;
  const merged = Object.assign(element, Object.create(null));
  const tmp2 = callback();
  const _require = tmp2;
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
      }).filter((item, index) => null != item);
      if (0 === found.length) {
        return null;
      } else {
        obj = { style: null, children: null };
        obj[0] = tmp2.container;
        let map = _require(4734).Text;
        obj = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
        obj[0] = tmp2.title;
        const REPORT_TO_MOD = _require(8139).ReportMenuTypeSets.REPORT_TO_MOD;
        const hasItem = REPORT_TO_MOD.has(element.menuName);
        const intl = _require(1236).intl;
        const string = intl.string;
        if (hasItem) {
          prop = tmp7(2435)["6mx/DP"];
          let stringResult = string(prop);
        } else {
          stringResult = string(tmp12(1236).t["+3V9Tp"]);
        }
        obj[3] = stringResult;
        obj = [, ];
        obj[0] = callback(map, obj);
        map = found.map;
        obj[1] = map((children) => {
          let obj = { style: lib.breadCrumbItemContainer, children: null };
          let tmp4 = null;
          if (arg1 !== found.length - 1) {
            obj = { style: null };
            obj[0] = lib.breadCrumbBar;
            tmp4 = closure_1_4(View, obj);
          }
          const items = [tmp4, , ];
          obj = { style: lib.breadCrumbDot };
          items[1] = closure_1_4(View, obj);
          items[2] = closure_1_4(lib(dependencyMap[6]).Text, { lineClamp: 2, ellipsizeMode: "tail", style: lib.breadCrumbText, variant: "text-md/medium", children });
          obj[1] = items;
          return closure_1_5(View, obj, "" + children + "+" + arg1);
        });
        obj[1] = obj;
        callback2(View, obj);
        const tmp11Result = callback(map, obj);
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