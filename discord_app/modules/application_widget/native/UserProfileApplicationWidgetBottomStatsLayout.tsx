// discord_app/modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetFieldUtils from "../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { statsGrid: null, stat: null };
createStyles = {
  flexDirection: "row",
  flexWrap: "wrap",
  rowGap: nativeDefault.space.PX_16,
  columnGap: nativeDefault.space.PX_12,
};
createStyles.statsGrid = createStyles;
createStyles.stat = { width: "47%", gap: nativeDefault.space.PX_4 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx",
);

export default function UserProfileApplicationWidgetBottomStatsLayout(arg0) {
  ({ bottomConfig: require, resolveFieldValue: dependencyMap, numberFormat: View } = arg0);
  const tmp = closure_5();
  const stat = tmp;
  let items = [1, 2, 3, 4, 5, 6];
  const mapped = items.map((item) =>
    resolvedValuesFromUserApplicationIdentityProfile.resolveStatComponentValues(
      components.components["stat_" + item],
      dependencyMap,
      View,
      UserProfileApplicationWidgetFieldUtils.formatDurationNarrow,
      true,
    ),
  );
  return stat(View, {
    style: tmp.statsGrid,
    children: mapped.map((item, index) => {
      let iter = item;
      if (null == item) {
        return tmp;
      } else {
        let obj = { style: stat.stat, children: null };
        let Text = require;
        obj = { field: iter.value, variant: "text-sm/medium", color: "text-default", skeletonWidthChars: 8 };
        const items = [React3(UserProfileApplicationWidgetFieldUtils.FieldText, obj)];
        if ("value" === iter.label.status) {
          Text = Text(4556).Text;
          obj = { variant: "text-xs/normal", color: "text-muted", children: null };
          iter = iter.label.text;
          obj.children = iter;
          let tmp5Result = React3(Text, obj);
        } else {
          tmp5Result = null;
          if ("skeleton" === iter.label.status) {
            tmp5Result = React3(Text(9014).TextSkeleton, { variant: "text-xs/normal", widthChars: 6 });
          }
        }
        items[1] = tmp5Result;
        obj.children = items;
        React4(View, obj, index);
      }
    }),
  });
}
