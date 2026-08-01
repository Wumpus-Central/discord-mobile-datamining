// === Module 12172: UserProfileApplicationWidgetBottomStatsLayout ===

// Module 12172 (UserProfileApplicationWidgetBottomStatsLayout)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { statsGrid: null, stat: null };
createCacheKey = { flexDirection: "row", flexWrap: "wrap", rowGap: require("Themes").space.PX_16, columnGap: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "47%", gap: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { width: "47%", gap: require("Themes").space.PX_4 };
const result = require("jsxProd").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx");

export default function UserProfileApplicationWidgetBottomStatsLayout(arg0) {
  let View;
  let dependencyMap;
  let require;
  ({ bottomConfig: require, resolveFieldValue: dependencyMap, numberFormat: View } = arg0);
  let callback;
  const tmp = createCacheKey();
  callback = tmp;
  let items = [1, 2, 3, 4, 5, 6];
  const mapped = items.map((arg0) => outer1_0(outer1_1[5]).resolveStatComponentValues(components.components["stat_" + arg0], closure_1, closure_2, outer1_0(outer1_1[6]).formatDurationNarrow, true));
  return callback(View, {
    style: tmp.statsGrid,
    children: mapped.map((arg0, arg1) => {
      let iter = arg0;
      if (null == arg0) {
        return tmp;
      } else {
        let obj = { style: null, children: null };
        obj[0] = _undefined.stat;
        let Text = outer1_0;
        let tmp6 = outer1_1;
        obj = { field: null, variant: "text-sm/medium", color: "text-default", skeletonWidthChars: 8 };
        obj[0] = iter.value;
        const items = [_undefined(outer1_0(outer1_1[6]).FieldText, obj), ];
        if ("value" === iter.label.status) {
          Text = Text(tmp6[7]).Text;
          obj = { variant: "text-xs/normal", color: "text-muted", children: null };
          iter = iter.label.text;
          obj[2] = iter;
          let tmp5Result = tmp5(Text, obj);
        } else {
          tmp5Result = null;
          if ("skeleton" === iter.label.status) {
            tmp5Result = tmp5(Text(tmp6[8]).TextSkeleton, { variant: "text-xs/normal", widthChars: 6 });
          }
        }
        tmp6 = arg1;
        items[1] = tmp5Result;
        obj[1] = items;
        outer1_4(outer1_2, obj, arg1);
        const tmp2 = outer1_4;
        const tmp3 = outer1_2;
      }
    })
  });
};