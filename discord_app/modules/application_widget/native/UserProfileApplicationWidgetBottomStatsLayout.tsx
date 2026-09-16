// === Module 9161: UserProfileApplicationWidgetBottomStatsLayout ===

// Module 9161 (UserProfileApplicationWidgetBottomStatsLayout)
import nativeDefault from "native" /* 576 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 9069 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 9156 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { statsGrid: { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_16, columnGap: nativeDefault.space.PX_12 }, stat: null };
let obj3 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_16, columnGap: nativeDefault.space.PX_12 };
obj2.stat = { width: "47%", gap: nativeDefault.space.PX_4 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx");

export default function UserProfileApplicationWidgetBottomStatsLayout(arg0) {
  ({ bottomConfig: require, resolveFieldValue: dependencyMap, numberFormat: View } = arg0);
  const tmp = closure_5();
  const stat = tmp;
  let items = [1, 2, 3, 4, 5, 6];
  const mapped = items.map((item) => resolvedValuesFromUserApplicationIdentityProfile.resolveStatComponentValues(components.components["stat_" + item], dependencyMap, View, UserProfileApplicationWidgetFieldUtils.formatDurationNarrow, true));
  return stat(View, {
    style: tmp.statsGrid,
    children: mapped.map((item, index) => {
      let iter = item;
      if (null == item) {
        return tmp;
      } else {
        const obj = { style: stat.stat, children: null };
        let Text = require;
        const obj2 = { field: iter.value, variant: "text-sm/medium", color: "text-default", skeletonWidthChars: 8 };
        const items = [React3(UserProfileApplicationWidgetFieldUtils.FieldText, obj2), ];
        if ("value" === iter.label.status) {
          Text = Text(4634).Text;
          const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
          iter = iter.label.text;
          obj3.children = iter;
          let tmp5Result = React3(Text, obj3);
        } else {
          tmp5Result = null;
          if ("skeleton" === iter.label.status) {
            tmp5Result = React3(Text(9157).TextSkeleton, { variant: "text-xs/normal", widthChars: 6 });
          }
        }
        items[1] = tmp5Result;
        obj.children = items;
        React4(View, obj, index);
      }
    })
  });
};