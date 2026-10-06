// discord_app/modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _mod8629 from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetFieldUtils from "../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx";
import UserProfileApplicationWidgetSkeletons from "../../user_profile/native/UserProfileApplicationWidgetSkeletons.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let bottomConfig;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { statsGrid: obj2, stat: obj3 };
obj2 = {
  flexDirection: "row",
  flexWrap: "wrap",
  rowGap: nativeDefault.space.PX_16,
  columnGap: nativeDefault.space.PX_12,
};
createStyles = createStyles.createStyles;
obj3 = { width: "47%", gap: nativeDefault.space.PX_4 };
let closure_5 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (bottomConfig) => {
      let first;
      let resolveFieldValue;
      let obj = bottomConfig(resolveFieldValue[6]);
      const cResult = obj.c(11);
      bottomConfig = bottomConfig.bottomConfig;
      resolveFieldValue = bottomConfig.resolveFieldValue;
      const numberFormat = bottomConfig.numberFormat;
      const tmp2 = closure_5();
      const stat = tmp2;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [1, 2, 3, 4, 5, 6];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === bottomConfig) {
        if (cResult[2] === numberFormat) {
          let arr3;
          if (cResult[3] === resolveFieldValue) {
            arr3 = cResult[4];
          }
          if (cResult[5] === arr3) {
            let tmp5;
            if (cResult[6] === tmp2.stat) {
              tmp5 = cResult[7];
            }
            if (cResult[8] === tmp2.statsGrid) {
              let tmp7;
              if (cResult[9] === tmp5) {
                tmp7 = cResult[10];
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
          const mapped = arr3.map((value, index) => {
            let items;
            let tmp = null != value;
            if (tmp) {
              let tmp5Result;
              const obj = { style: stat.stat, children: items };
              const obj2 = {
                field: value.value,
                variant: "text-sm/medium",
                color: "text-default",
                skeletonWidthChars: 8,
              };
              items = [_false(UserProfileApplicationWidgetFieldUtils.FieldText, obj2)];
              if ("value" === value.label.status) {
                const obj3 = { variant: "text-xs/normal", color: "text-muted", children: value.label.text };
                tmp5Result = _false(Text_Text.Text, obj3);
              } else {
                tmp5Result = null;
                if ("skeleton" === value.label.status) {
                  tmp5Result = _false(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                    variant: "text-xs/normal",
                    widthChars: 6,
                  });
                }
              }
              items[1] = tmp5Result;
              tmp = React3(View, obj, index);
            }
            return tmp;
          });
          cResult[5] = arr3;
          cResult[6] = tmp2.stat;
          cResult[7] = mapped;
          tmp5 = mapped;
        }
      }
      const mapped1 = first.map((item) => {
        const resolveStatComponentValues = _mod8629.resolveStatComponentValues;
        _mod8629;
        return resolveStatComponentValues(
          bottomConfig.components["stat_" + item],
          resolveFieldValue,
          numberFormat,
          UserProfileApplicationWidgetFieldUtils.formatDurationNarrow,
          true,
        );
      });
      cResult[1] = bottomConfig;
      cResult[2] = numberFormat;
      cResult[3] = resolveFieldValue;
      cResult[4] = mapped1;
      arr3 = mapped1;
    }
  : (arg0) => {
      let components;
      ({ bottomConfig: require, resolveFieldValue: dependencyMap, numberFormat: View } = arg0);
      let tmp = closure_5();
      const stat = tmp;
      let items = [1, 2, 3, 4, 5, 6];
      const mapped = items.map((item) => {
        const resolveStatComponentValues = _mod8629.resolveStatComponentValues;
        _mod8629;
        return resolveStatComponentValues(
          require.components["stat_" + item],
          dependencyMap,
          View,
          UserProfileApplicationWidgetFieldUtils.formatDurationNarrow,
          true,
        );
      });
      let obj = {
        style: tmp.statsGrid,
        children: mapped.map((value, index) => {
          let items;
          let tmp = null != value;
          if (tmp) {
            let tmp5Result;
            const obj = { style: stat.stat, children: items };
            const obj2 = {
              field: value.value,
              variant: "text-sm/medium",
              color: "text-default",
              skeletonWidthChars: 8,
            };
            items = [_false(UserProfileApplicationWidgetFieldUtils.FieldText, obj2)];
            if ("value" === value.label.status) {
              const obj3 = { variant: "text-xs/normal", color: "text-muted", children: value.label.text };
              tmp5Result = _false(Text_Text.Text, obj3);
            } else {
              tmp5Result = null;
              if ("skeleton" === value.label.status) {
                tmp5Result = _false(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                  variant: "text-xs/normal",
                  widthChars: 6,
                });
              }
            }
            items[1] = tmp5Result;
            tmp = React3(View, obj, index);
          }
          return tmp;
        }),
      };
      return stat(View, obj);
    };
const result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx",
);

export default tmp5;
