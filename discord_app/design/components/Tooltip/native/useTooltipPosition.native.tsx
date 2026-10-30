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
      const size2 = closure_1;
      if (null != closure_1) {
        let tmp = tmp9;
        if ("left" !== closure_3) {
          tmp = "right" === closure_3;
        }
        if ("top" === closure_3) {
          let str3 = "start";
        } else {
          str3 = "end";
        }
        let str4 = "center";
        let str5 = "center";
        if (tmp) {
          str5 = str3;
        }
        const diff = styles.x - size2.x;
        const width = styles.width;
        const width2 = size.width;
        const width3 = size2.width;
        if ("start" === str5) {
          const obj2 = { position: diff - width2 - tmp4, adjustment: 0 };
          let obj = obj2;
        } else if ("end" === str5) {
          const obj3 = { position: diff + width + tmp4, adjustment: 0 };
          obj = obj3;
        } else {
          const diff1 = diff + width / 2 - width2 / 2;
          if (diff1 < 12) {
            let num3 = 12 - diff1;
          } else {
            num3 = 0;
            if (diff1 + width2 > width3 - 12) {
              num3 = width3 - diff1 - width2 - 12;
            }
          }
          obj = { position: diff1 + num3, adjustment: num3 };
        }
        if (!tmp) {
          str4 = str3;
        }
        const diff2 = styles.y - size2.y;
        const height = styles.height;
        const height2 = size.height;
        const height3 = size2.height;
        if ("start" === str4) {
          const obj4 = { position: diff2 - height2 - tmp4, adjustment: 0 };
          let obj6 = obj4;
        } else if ("end" === str4) {
          const obj5 = { position: diff2 + height + tmp4, adjustment: 0 };
          obj6 = obj5;
        } else {
          const diff3 = diff2 + height / 2 - height2 / 2;
          if (diff3 < 12) {
            let num6 = 12 - diff3;
          } else {
            num6 = 0;
            if (diff3 + height2 > height3 - 12) {
              num6 = height3 - diff3 - height2 - 12;
            }
          }
          obj6 = { position: diff3 + num6, adjustment: num6 };
        }
        const obj7 = {
          tooltipX: obj.position,
          tooltipY: obj6.position,
          adjustmentX: obj.adjustment,
          adjustmentY: obj6.adjustment,
        };
        return obj7;
      }
    }
    return { tooltipX: 0, tooltipY: 0, adjustmentX: 0, adjustmentY: 0 };
  }, items);
}
