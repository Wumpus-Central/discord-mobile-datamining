// discord_app/modules/game_profile/native/components/GameProfileSkeletonCardRow.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((gap) => {
  const obj = { viewport: { overflow: "hidden" }, row: obj2 };
  return obj;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let contentContainerStyle;
      let gap;
      let style;
      const obj = react2;
      const cResult = obj.c(12);
      ({ children, contentContainerStyle, gap, style } = arg0);
      if (undefined === gap) {
        gap = nativeDefault.space.PX_12;
      }
      const tmp4 = closure_5(gap);
      if (cResult[0] === style) {
        let tmp5;
        if (cResult[1] === tmp4.viewport) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === contentContainerStyle) {
          let tmp6;
          if (cResult[4] === tmp4.row) {
            tmp6 = cResult[5];
          }
          if (cResult[6] === children) {
            let tmp7;
            if (cResult[7] === tmp6) {
              tmp7 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              let tmp11;
              if (cResult[10] === tmp7) {
                tmp11 = cResult[11];
              }
              return tmp11;
            }
            const tmp14 = (
              <View
                style={tmp5}
                accessible={false}
                accessibilityElementsHidden
                importantForAccessibility="no-hide-descendants"
              >
                {tmp7}
              </View>
            );
            cResult[9] = tmp5;
            cResult[10] = tmp7;
            cResult[11] = tmp14;
            tmp11 = tmp14;
          }
          const tmp10 = <View style={tmp6}>{children}</View>;
          cResult[6] = children;
          cResult[7] = tmp6;
          cResult[8] = tmp10;
          tmp7 = tmp10;
        }
        const items = [tmp4.row, contentContainerStyle];
        cResult[3] = contentContainerStyle;
        cResult[4] = tmp4.row;
        cResult[5] = items;
        tmp6 = items;
      }
      const items1 = [tmp4.viewport, style];
      cResult[0] = style;
      cResult[1] = tmp4.viewport;
      cResult[2] = items1;
      tmp5 = items1;
    }
  : (gap) => {
      let children;
      let contentContainerStyle;
      let PX_12 = gap.gap;
      ({ children, contentContainerStyle } = gap);
      if (PX_12 === undefined) {
        PX_12 = nativeDefault.space.PX_12;
      }
      const style = gap.style;
      const tmp3 = closure_5(PX_12);
      const items = [tmp3.viewport, style];
      const items1 = [tmp3.row, contentContainerStyle];
      return (
        <View
          style={items}
          accessible={false}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        >
          {null}
        </View>
      );
    };
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeletonCardRow.tsx");

export default tmp3;
