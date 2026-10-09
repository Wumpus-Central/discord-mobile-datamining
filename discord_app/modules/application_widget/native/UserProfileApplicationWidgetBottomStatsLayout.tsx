// discord_app/modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetFieldUtils from "../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: nativeDefault.space.PX_16,
    columnGap: nativeDefault.space.PX_12,
  },
  stat: null,
};
let obj3 = {
  flexDirection: "row",
  flexWrap: "wrap",
  rowGap: nativeDefault.space.PX_16,
  columnGap: nativeDefault.space.PX_12,
};
obj2.stat = { width: "47%", gap: nativeDefault.space.PX_4 };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { width: "47%", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileApplicationWidgetBottomStatsLayout(bottomConfig) {
      const cResult = bottomConfig(resolveFieldValue[6]).c(11);
      bottomConfig = bottomConfig.bottomConfig;
      resolveFieldValue = bottomConfig.resolveFieldValue;
      const numberFormat = bottomConfig.numberFormat;
      const tmp2 = closure_5();
      const stat = tmp2;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [1, 2, 3, 4, 5, 6];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === bottomConfig) {
        if (cResult[2] === numberFormat) {
          if (cResult[3] === resolveFieldValue) {
            let arr3 = cResult[4];
          }
          if (cResult[5] === arr3) {
            if (cResult[6] === tmp2.stat) {
              let tmp5 = cResult[7];
            }
            if (cResult[8] === tmp2.statsGrid) {
              if (cResult[9] === tmp5) {
                let tmp7 = cResult[10];
              }
              return tmp7;
            }
            let obj2 = { style: tmp4, children: tmp5 };
            const tmp10 = stat(numberFormat, obj2);
            cResult[8] = tmp2.statsGrid;
            cResult[9] = tmp5;
            cResult[10] = tmp10;
            tmp7 = tmp10;
          }
          const mapped = arr3.map((item, index) => {
            let iter = item;
            if (null == item) {
              return tmp;
            } else {
              const obj = { style: stat.stat, children: null };
              let Text = require;
              const obj2 = {
                field: iter.value,
                variant: "text-sm/medium",
                color: "text-default",
                skeletonWidthChars: 8,
              };
              const items = [React3(UserProfileApplicationWidgetFieldUtils.FieldText, obj2)];
              if ("value" === iter.label.status) {
                Text = Text(5087).Text;
                const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
                iter = iter.label.text;
                obj3.children = iter;
                let tmp5Result = React3(Text, obj3);
              } else {
                tmp5Result = null;
                if ("skeleton" === iter.label.status) {
                  tmp5Result = React3(Text(13283).TextSkeleton, { variant: "text-xs/normal", widthChars: 6 });
                }
              }
              items[1] = tmp5Result;
              obj.children = items;
              React4(View, obj, index);
            }
          });
          cResult[5] = arr3;
          cResult[6] = tmp2.stat;
          cResult[7] = mapped;
          tmp5 = mapped;
        }
      }
      const mapped1 = first.map((item) =>
        resolvedValuesFromUserApplicationIdentityProfile.resolveStatComponentValues(
          bottomConfig.components["stat_" + item],
          resolveFieldValue,
          numberFormat,
          UserProfileApplicationWidgetFieldUtils.formatDurationNarrow,
          true,
        ),
      );
      cResult[1] = bottomConfig;
      cResult[2] = numberFormat;
      cResult[3] = resolveFieldValue;
      cResult[4] = mapped1;
      arr3 = mapped1;
    }
  : function UserProfileApplicationWidgetBottomStatsLayout(arg0) {
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
            const obj = { style: stat.stat, children: null };
            let Text = require;
            const obj2 = { field: iter.value, variant: "text-sm/medium", color: "text-default", skeletonWidthChars: 8 };
            const items = [React3(UserProfileApplicationWidgetFieldUtils.FieldText, obj2)];
            if ("value" === iter.label.status) {
              Text = Text(5087).Text;
              const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
              iter = iter.label.text;
              obj3.children = iter;
              let tmp5Result = React3(Text, obj3);
            } else {
              tmp5Result = null;
              if ("skeleton" === iter.label.status) {
                tmp5Result = React3(Text(13283).TextSkeleton, { variant: "text-xs/normal", widthChars: 6 });
              }
            }
            items[1] = tmp5Result;
            obj.children = items;
            React4(View, obj, index);
          }
        }),
      });
    };
