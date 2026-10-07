// discord_app/design/components/Tooltip/native/useTooltipPosition.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let c3 = 12;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Tooltip/native/useTooltipPosition.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (width, width2, arg2, arg3, arg4) => {
      const cResult = c.c(5);
      let num = 0;
      if (undefined !== arg4) {
        num = arg4;
      }
      if (null != width) {
        if (null != width2) {
          width = width.width;
          width2 = width2.width;
          const diff = arg2.y - width2.y;
          const diff1 = arg2.x - width2.x + arg2.width / 2 - width / 2;
          if (diff1 < c3) {
            let num3 = c3 - diff1;
          } else {
            num3 = 0;
            if (diff1 + width > width2 - c3) {
              num3 = width2 - diff1 - width - c3;
            }
          }
          if ("top" === arg3) {
            let diff2 = diff - width.height - num;
          } else {
            diff2 = diff + arg2.height + num;
          }
          let num4 = diff1 + num3;
          if (cResult[1] === num3) {
            if (cResult[2] === num4) {
            }
          }
          const obj2 = { tooltipX: num4, tooltipY: diff2, adjustmentX: num3 };
          cResult[1] = num3;
          cResult[2] = num4;
          cResult[3] = diff2;
          num4 = 4;
          cResult[4] = obj2;
        }
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { tooltipX: 0, tooltipY: 0, adjustmentX: 0 };
        cResult[0] = obj3;
        let first = obj3;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : (arg0, arg1, arg2, arg3) => {
      closure_0 = arg0;
      closure_1 = arg1;
      noop = arg2;
      closure_3 = arg3;
      let num = arg4;
      if (arg4 === undefined) {
        num = 0;
      }
      const items = [arg3, arg0, arg2, arg1, num];
      return noop.useMemo(() => {
        const size = closure_0;
        if (null != closure_0) {
          const point = closure_1;
          if (null != closure_1) {
            const width = size.width;
            const width2 = point.width;
            const diff = styles.y - point.y;
            const diff1 = styles.x - point.x + styles.width / 2 - width / 2;
            if (diff1 < c3) {
              num = c3 - diff1;
            } else {
              num = 0;
              if (diff1 + width > width2 - c3) {
                num = width2 - diff1 - width - c3;
              }
            }
            const obj = { tooltipX: diff1 + num, tooltipY: null, adjustmentX: null };
            if ("top" === closure_3) {
              let diff2 = diff - size.height - num;
            } else {
              diff2 = diff + styles.height + num;
            }
            obj.tooltipY = diff2;
            obj.adjustmentX = num;
            return obj;
          }
        }
        return { tooltipX: 0, tooltipY: 0, adjustmentX: 0 };
      }, items);
    };
