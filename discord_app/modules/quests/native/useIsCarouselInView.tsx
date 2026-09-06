// discord_app/modules/quests/native/useIsCarouselInView.tsx
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/useIsCarouselInView.tsx");

export default function useIsCarouselInView() {
  const containerRef = noop.useRef(null);
  const height = useWindowDimensionsDefault().height;
  closure_2 = noop.useRef(height);
  const items = [height];
  const effect = noop.useEffect(() => {
    closure_2.current = height;
  }, items);
  [tmp4, noop] = _slicedToArray(noop.useState(true), 2);
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
}
