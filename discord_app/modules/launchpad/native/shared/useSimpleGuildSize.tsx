// === Module 19377: useSimpleGuildSize ===

// Module 19377 (useSimpleGuildSize)
import noop from "module_19" /* 19 */;

let size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildSize.tsx");

export default function useSimpleGuildSize(size) {
  size = size.size;
  const style = size.style;
  let memo;
  let num = 48;
  if (null != size) {
    num = size;
  }
  items = [num];
  memo = noop.useMemo(() => {
    size = { width: num, height: num };
    return size;
  }, items);
  const items1 = [style, size, memo];
  return {
    containerSize: num,
    containerSizeStyle: memo,
    containerStyles: noop.useMemo(() => {
      num = 0;
      if (null == size) {
        num = 4;
      }
      const obj = { position: "relative", marginLeft: num, marginRight: null };
      let num2 = 0;
      if (null == size) {
        num2 = 4;
      }
      obj.marginRight = num2;
      items = [obj, memo, style];
      return items;
    }, items1)
  };
};