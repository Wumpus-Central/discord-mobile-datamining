// === Module 12280: UserProfileApplicationWidgetBottomStatsLayout ===

// Module 12280 (UserProfileApplicationWidgetBottomStatsLayout)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { statsGrid: null, stat: null };
createCacheKey = { flexDirection: "row", flexWrap: "wrap", rowGap: ThemesDefault.space.PX_16, columnGap: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "47%", gap: ThemesDefault.space.PX_4 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj1 = { width: "47%", gap: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx");

export default function UserProfileApplicationWidgetBottomStatsLayout(arg0) {
  ({ bottomConfig: require, resolveFieldValue: dependencyMap, numberFormat: View } = arg0);
  let callback;
  const tmp = callback2();
  callback = tmp;
  let items = [1, 2, 3, 4, 5, 6];
  const mapped = items.map((arg0) => closure_1_0(closure_1_1[5]).resolveStatComponentValues(components.components["stat_" + arg0], closure_1, closure_2, closure_1_0(closure_1_1[6]).formatDurationNarrow, true));
  return callback(View, {
    style: tmp.statsGrid,
    children: mapped.map((arg0, arg1) => {
      let iter = arg0;
      if (null == arg0) {
        return tmp;
      } else {
        let obj = { style: null, children: null };
        obj[0] = lib.stat;
        let Text = closure_1_0;
        let tmp6 = closure_1_1;
        obj = { field: null, variant: "text-sm/medium", color: "text-default", skeletonWidthChars: 8 };
        obj[0] = iter.value;
        const items = [lib(closure_1_0(closure_1_1[6]).FieldText, obj), ];
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
        closure_1_4(closure_1_2, obj, arg1);
        const tmp2 = closure_1_4;
        const tmp3 = closure_1_2;
      }
    })
  });
};