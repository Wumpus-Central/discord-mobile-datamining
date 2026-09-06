// discord_app/design/components/Tooltip/native/useTooltipPosition.native.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

let size = fn(2);
const result = size.fileFinishedImporting("design/components/Tooltip/native/useTooltipPosition.native.tsx");

export default function useTooltipPosition(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  const styles = arg2;
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
        if (diff1 < 12) {
          num = 12 - diff1;
        } else {
          num = 0;
          if (diff1 + width > width2 - 12) {
            num = width2 - diff1 - width - 12;
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
}
