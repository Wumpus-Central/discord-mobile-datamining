// discord_app/modules/launchpad/native/shared/useSimpleGuildSize.tsx
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildSize.tsx");

export default function useSimpleGuildSize(size) {
  size = size.size;
  const style = size.style;
  let num;
  let memo;
  num = 48;
  if (null != size) {
    num = size;
  }
  let items = [num];
  memo = size.useMemo(() => ({ width: num, height: num }), items);
  const items1 = [style, size, memo];
  return {
    containerSize: num,
    containerSizeStyle: memo,
    containerStyles: size.useMemo(() => {
      num = 0;
      if (null == size) {
        num = 4;
      }
      const obj = { position: "relative", marginLeft: num, marginRight: null };
      let num2 = 0;
      if (null == size) {
        num2 = 4;
      }
      obj[2] = num2;
      const items = [obj, memo, style];
      return items;
    }, items1)
  };
};