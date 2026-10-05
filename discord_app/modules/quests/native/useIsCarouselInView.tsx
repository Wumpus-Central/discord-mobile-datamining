// === Module 14885: useIsCarouselInView ===

// Module 14885 (useIsCarouselInView)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/useIsCarouselInView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(7);
  const height = useWindowDimensionsDefault().height;
  closure_2 = noop.useRef(height);
  if (cResult[0] !== height) {
    const fn = function u() {
      closure_2.current = height;
    };
    const items = [height];
    cResult[0] = height;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp4 = items;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = noop.useEffect(tmp3, tmp4);
  const ref = noop.useRef(null);
  [tmp7, _slicedToArray] = noop.useState(true);
  closure_4 = noop.useRef(tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function o() {
      setInterval(() => {
        if (null != ref.current) {
          const current = ref.current;
          current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
            const bound = Math.min(arg5 + arg3, ref.current);
            let tmp2 = arg3 > 0;
            if (tmp2) {
              tmp2 = Math.max(0, bound - Math.max(arg5, 0)) / arg3 >= 0.5;
            }
            if (tmp2 !== ref2.current) {
              ref2.current = tmp2;
              closure_1_3(tmp2);
            }
          });
        }
      }, 1000);
      return () => clearInterval(closure_0);
    };
    const items1 = [];
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp9 = items1;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect1 = noop.useEffect(tmp8, tmp9);
  if (cResult[5] !== tmp7) {
    const obj3 = { containerRef: ref, isInView: tmp7 };
    cResult[5] = tmp7;
    cResult[6] = obj3;
    let tmp11 = obj3;
  } else {
    tmp11 = cResult[6];
  }
  return tmp11;
}) : (() => {
  const containerRef = noop.useRef(null);
  const height = useWindowDimensionsDefault().height;
  closure_2 = noop.useRef(height);
  const items = [height];
  const effect = noop.useEffect(() => {
    closure_2.current = height;
  }, items);
  [tmp4, _slicedToArray] = noop.useState(true);
  closure_4 = noop.useRef(isInView);
  const effect1 = noop.useEffect(() => {
    setInterval(() => {
      if (null != ref.current) {
        const current = ref.current;
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          const bound = Math.min(arg5 + arg3, ref.current);
          let tmp2 = arg3 > 0;
          if (tmp2) {
            tmp2 = Math.max(0, bound - Math.max(arg5, 0)) / arg3 >= 0.5;
          }
          if (tmp2 !== ref2.current) {
            ref2.current = tmp2;
            closure_1_3(tmp2);
          }
        });
      }
    }, 1000);
    return () => clearInterval(closure_0);
  }, []);
  return { containerRef, isInView };
});