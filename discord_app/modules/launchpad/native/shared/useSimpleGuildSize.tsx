// === Module 17930: useSimpleGuildSize ===

// Module 17930 (useSimpleGuildSize)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildSize.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useSimpleGuildSize(arg0) {
  const cResult = c.c(13);
  ({ size, style } = arg0);
  let num = 48;
  if (null != size) {
    num = size;
  }
  if (cResult[0] !== num) {
    const size1 = { width: num, height: num };
    cResult[0] = num;
    cResult[1] = size1;
    let tmp2 = size1;
  } else {
    tmp2 = cResult[1];
  }
  let num4 = 0;
  if (null == size) {
    num4 = 4;
  }
  let num5 = 0;
  if (null == size) {
    num5 = 4;
  }
  if (cResult[2] === num4) {
    if (cResult[3] === num5) {
      let tmp3 = cResult[4];
    }
    if (cResult[5] === tmp2) {
      if (cResult[6] === style) {
        if (cResult[7] === tmp3) {
          let tmp4 = cResult[8];
        }
        if (cResult[9] === num) {
          if (cResult[10] === tmp2) {
            if (cResult[11] === tmp4) {
              let tmp5 = cResult[12];
            }
            return tmp5;
          }
        }
        const obj2 = { containerSize: num, containerSizeStyle: tmp2, containerStyles: tmp4 };
        cResult[9] = num;
        cResult[10] = tmp2;
        cResult[11] = tmp4;
        cResult[12] = obj2;
        tmp5 = obj2;
      }
    }
    const items = [tmp3, tmp2, style];
    cResult[5] = tmp2;
    cResult[6] = style;
    cResult[7] = tmp3;
    cResult[8] = items;
    tmp4 = items;
  }
  const obj3 = { position: "relative", marginLeft: num4, marginRight: num5 };
  cResult[2] = num4;
  cResult[3] = num5;
  cResult[4] = obj3;
  tmp3 = obj3;
}) : (function useSimpleGuildSize(size) {
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
    }, items1)
  };
});