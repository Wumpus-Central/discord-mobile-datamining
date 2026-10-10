// === Module 16481: useHappeningNowScrollBehavior ===

// Module 16481 (useHappeningNowScrollBehavior)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useHappeningNowScrollBehavior(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const cResult = c.c(6);
  [tmp3, _slicedToArray] = noop.useState(false);
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === tmp3) {
      if (cResult[4] === tmp4) {
        let tmp5 = cResult[5];
      }
      return tmp5;
    }
    const items = [tmp4, tmp3];
    cResult[3] = tmp3;
    cResult[4] = tmp4;
    cResult[5] = items;
    tmp5 = items;
  }
  const fn = function s(nativeEvent) {
    _slicedToArray(nativeEvent.nativeEvent.contentOffset.x < closure_0);
    closure_1(nativeEvent.nativeEvent.contentOffset.x, nativeEvent.nativeEvent.layoutMeasurement.width);
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp4 = fn;
}) : (function useHappeningNowScrollBehavior(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp[1];
  const items = [arg0, arg1];
  const items1 = [
    noop.useCallback((nativeEvent) => {
      closure_2(nativeEvent.nativeEvent.contentOffset.x < closure_0);
      closure_1(nativeEvent.nativeEvent.contentOffset.x, nativeEvent.nativeEvent.layoutMeasurement.width);
    }, items),
    tmp[0]
  ];
  return items1;
});
export const useHappeningNowScrollSnapping = function useHappeningNowScrollSnapping(listRef) {
  const current = listRef.current;
  let num;
  if (current != null) {
    const props = current.props;
    if (props != null) {
      const data = props.data;
      if (data != null) {
        num = data.length;
      }
    }
  }
  if (num == null) {
    num = 0;
  }
  const items = [];
  let num2 = 0;
  let num3 = 0;
  if (0 < num) {
    do {
      let current2 = listRef.current;
      let num4;
      if (current2 != null) {
        let layout = current2.getLayout(num2);
        if (layout != null) {
          num4 = layout.width;
        }
      }
      if (num4 == null) {
        num4 = 0;
      }
      let arr = items.push(num3);
      num3 = num3 + num4;
      num2 = num2 + 1;
    } while (num2 < num);
  }
  return items;
};