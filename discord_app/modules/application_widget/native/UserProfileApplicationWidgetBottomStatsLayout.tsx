// === Module 12280: UserProfileApplicationWidgetBottomStatsLayout ===

// Module 12280 (UserProfileApplicationWidgetBottomStatsLayout)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 12190 */;
import formatDurationNarrow from "formatDurationNarrow" /* 12277 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = { flexDirection: "row", flexWrap: "wrap", rowGap: ThemesDefault.space.PX_16, columnGap: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "47%", gap: ThemesDefault.space.PX_4 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx");

export default function UserProfileApplicationWidgetBottomStatsLayout(arg0) {
  ({ bottomConfig: require, resolveFieldValue: dependencyMap, numberFormat: View } = arg0);
  const tmp = callback2();
  const callback = tmp;
  let items = [1, 2, 3, 4, 5, 6];
  const mapped = items.map((item, index) => resolvedValuesFromUserApplicationIdentityProfile.resolveStatComponentValues(components.components["stat_" + item], closure_1, closure_2, formatDurationNarrow.formatDurationNarrow, true));
  return callback(View, {
    style: tmp.statsGrid,
    children: mapped.map((item, index) => {
      let iter = item;
      if (null == item) {
        return tmp;
      } else {
        let obj = { style: null, children: null };
        obj[0] = lib.stat;
        let Text = require;
        let tmp6 = dependencyMap;
        obj = { field: null, variant: "text-sm/medium", color: "text-default", skeletonWidthChars: 8 };
        obj[0] = iter.value;
        const items = [lib(formatDurationNarrow.FieldText, obj), ];
        if ("value" === iter.label.status) {
          Text = Text(tmp6[7]).Text;
          obj = { variant: "text-xs/normal", color: "text-muted", children: null };
          iter = iter.label.text;
          obj[2] = iter;
          let tmp5Result = lib(Text, obj);
        } else {
          tmp5Result = null;
          if ("skeleton" === iter.label.status) {
            tmp5Result = lib(Text(tmp6[8]).TextSkeleton, { variant: "text-xs/normal", widthChars: 6 });
          }
        }
        tmp6 = index;
        items[1] = tmp5Result;
        obj[1] = items;
        closure_1_4(View, obj, index);
      }
    })
  });
};