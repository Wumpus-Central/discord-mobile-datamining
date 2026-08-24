// === Module 9310: useTooltipPosition ===

// Module 9310 (useTooltipPosition)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("design/components/Tooltip/native/useTooltipPosition.native.tsx");

export default function useTooltipPosition(arg0, arg1, arg2, arg3) {
  const React = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  let num = arg4;
  if (arg4 === undefined) {
    num = 0;
  }
  const items = [arg3, arg0, arg2, arg1, num];
  return React.useMemo(() => {
    const size = closure_0;
    if (null != closure_0) {
      const point = closure_1;
      if (null != closure_1) {
        const width = size.width;
        const width2 = point.width;
        const diff = styles.y - point.y;
        const diff1 = styles.x - point.x + styles.width / 2 - width / 2;
        if (diff1 < 12) {
          num = 12 - diff1;
        } else {
          num = 0;
          if (diff1 + width > width2 - 12) {
            num = width2 - diff1 - width - 12;
          }
        }
        const obj = { tooltipX: null, tooltipY: null, adjustmentX: null };
        obj[0] = diff1 + num;
        if ("top" === closure_3) {
          let diff2 = diff - size.height - num;
        } else {
          diff2 = diff + styles.height + num;
        }
        obj[1] = diff2;
        obj[2] = num;
        return obj;
      }
    }
    return { tooltipX: 0, tooltipY: 0, adjustmentX: 0 };
  }, items);
};