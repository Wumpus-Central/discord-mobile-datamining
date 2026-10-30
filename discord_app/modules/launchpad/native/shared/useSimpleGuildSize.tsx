// discord_app/modules/launchpad/native/shared/useSimpleGuildSize.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

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
  let items = [num];
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
      const items = [obj, memo, style];
      return items;
    }, items1),
  };
}
