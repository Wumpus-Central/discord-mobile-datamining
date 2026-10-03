// === Module 10489: useTimeout ===

// Module 10489 (useTimeout)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ useEffect: c2, useRef: c3 } = noop);
const result = size.fileFinishedImporting("hooks/useTimeout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((current, arg1) => {
  closure_1 = arg1;
  const cResult = c.c(6);
  const tmp2 = React3(current);
  closure_2 = tmp2;
  if (cResult[0] !== current) {
    const fn = function o() {
      closure_2.current = current;
    };
    const items = [current];
    cResult[0] = current;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp4 = items;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  React2(tmp3, tmp4);
  if (cResult[3] !== arg1) {
    const fn2 = function s() {
      if (null !== closure_1) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => ref.current(), tmp);
        return () => clearTimeout(closure_0);
      }
    };
    const items1 = [arg1, tmp2];
    cResult[3] = arg1;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp8 = items1;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  React2(tmp7, tmp8);
}) : ((current, arg1) => {
  closure_1 = arg1;
  const tmp = React3(current);
  closure_2 = tmp;
  const items = [current];
  React2(() => {
    closure_2.current = current;
  }, items);
  const items1 = [arg1, tmp];
  React2(() => {
    if (null !== closure_1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => ref.current(), tmp);
      return () => clearTimeout(closure_0);
    }
  }, items1);
});