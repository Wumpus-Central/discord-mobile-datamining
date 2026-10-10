// === Module 8954: GameProfileSkeletonCardRow ===

// Module 8954 (GameProfileSkeletonCardRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_5 = createStyles.createStyles((gap) => {
  const obj = { viewport: { overflow: "hidden" }, row: { flexDirection: "row", gap } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeletonCardRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileSkeletonCardRow(arg0) {
  const cResult = c.c(12);
  ({ children, contentContainerStyle, gap, style } = arg0);
  if (undefined === gap) {
    gap = nativeDefault.space.PX_12;
  }
  const tmp4 = closure_5(gap);
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.viewport) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === contentContainerStyle) {
      if (cResult[4] === tmp4.row) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === children) {
        if (cResult[7] === tmp6) {
          let tmp7 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp7) {
            let tmp11 = cResult[11];
          }
          return tmp11;
        }
        const obj2 = { style: tmp5, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp7 };
        const tmp14 = <View style={tmp5} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{tmp7}</View>;
        cResult[9] = tmp5;
        cResult[10] = tmp7;
        cResult[11] = tmp14;
        tmp11 = tmp14;
      }
      const obj3 = { style: tmp6, children };
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
}) : (function GameProfileSkeletonCardRow(gap) {
  let PX_12 = gap.gap;
  ({ children, contentContainerStyle } = gap);
  if (PX_12 === undefined) {
    PX_12 = nativeDefault.space.PX_12;
  }
  const tmp3 = closure_5(PX_12);
  const obj = { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items = [tmp3.viewport, gap.style];
  obj.style = items;
  const obj2 = { style: null, children };
  const items1 = [tmp3.row, contentContainerStyle];
  obj2.style = items1;
  obj.children = <View style={null}>{children}</View>;
  return <View style={null} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{null}</View>;
});