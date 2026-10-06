// === Module 9899: useTooltipPosition ===

// Module 9899 (useTooltipPosition)
import react2 from "react" /* 576 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let react = react_mod;
let c3 = 12;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((width, width2, arg2, arg3, arg4) => {
  let first;
  const obj = react2;
  const cResult = obj.c(5);
  let num = 0;
  if (undefined !== arg4) {
    num = arg4;
  }
  if (null != width) {
    if (null != width2) {
      let num3;
      let diff2;
      width = width.width;
      width2 = width2.width;
      const diff = arg2.y - width2.y;
      const diff1 = arg2.x - width2.x + arg2.width / 2 - width / 2;
      const height = width.height;
      const height2 = arg2.height;
      if (diff1 < c3) {
        num3 = c3 - diff1;
      } else {
        num3 = 0;
        if (diff1 + width > width2 - c3) {
          num3 = width2 - diff1 - width - c3;
        }
      }
      if ("top" === arg3) {
        diff2 = diff - height - num;
      } else {
        diff2 = diff + height2 + num;
      }
      const sum = diff1 + num3;
      if (cResult[1] === num3) {
        if (cResult[2] === sum) {
          let tmp11;
          if (cResult[3] === diff2) {
            tmp11 = cResult[4];
          }
          first = tmp11;
        }
      }
      const obj2 = { tooltipX: sum, tooltipY: diff2, adjustmentX: num3 };
      cResult[1] = num3;
      cResult[2] = sum;
      cResult[3] = diff2;
      cResult[4] = obj2;
      tmp11 = obj2;
    }
    return first;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { tooltipX: 0, tooltipY: 0, adjustmentX: 0 };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
}) : ((arg0, arg1, arg2, arg3) => {
  let styles;
  let closure_0 = arg0;
  let closure_1 = arg1;
  react = arg2;
  let closure_3 = arg3;
  let num = arg4;
  if (arg4 === undefined) {
    num = 0;
  }
  const items = [arg3, arg0, arg2, arg1, num];
  return react.useMemo(() => {
    let diff2;
    size = closure_0;
    if (null != closure_0) {
      const point = closure_1;
      if (null != closure_1) {
        const width = size.width;
        const width2 = point.width;
        const diff = styles.y - point.y;
        const diff1 = styles.x - point.x + styles.width / 2 - width / 2;
        const height = size.height;
        const height2 = styles.height;
        if (diff1 < c3) {
          num = c3 - diff1;
        } else {
          num = 0;
          if (diff1 + width > width2 - c3) {
            num = width2 - diff1 - width - c3;
          }
        }
        const obj = { tooltipX: diff1 + num, tooltipY: diff2, adjustmentX: num };
        if ("top" === closure_3) {
          diff2 = diff - height - num;
        } else {
          diff2 = diff + height2 + num;
        }
        return obj;
      }
    }
    return { tooltipX: 0, tooltipY: 0, adjustmentX: 0 };
  }, items);
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Tooltip/native/useTooltipPosition.native.tsx");

export default tmp2;