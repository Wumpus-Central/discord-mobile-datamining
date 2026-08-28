// === Module 14614: useIsCarouselInView ===

// Module 14614 (useIsCarouselInView)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/quests/native/useIsCarouselInView.tsx");

export default function useIsCarouselInView() {
  const containerRef = React.useRef(null);
  height = containerRef(height[2])().height;
  const callback = React.useRef(height);
  const items = [height];
  const effect = React.useEffect(() => {
    closure_2.current = height;
  }, items);
  [tmp4, closure_3] = callback(React.useState(true), 2);
  closure_4 = React.useRef(isInView);
  const effect1 = React.useEffect(() => {
    const interval = setInterval(() => {
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
            callback(tmp2);
          }
        });
      }
    }, 1000);
    return () => clearInterval(closure_0);
  }, []);
  return { containerRef, isInView };
};