// === Module 15993: useHappeningNowScrollBehavior ===

// Module 15993 (useHappeningNowScrollBehavior)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_129_2;
  let tmp3;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = react2;
  const cResult = obj.c(6);
  [tmp3, closure_129_2] = _slicedToArray(react.useState(false), 2);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  if (cResult[0] === arg0) {
    let tmp4;
    if (cResult[1] === arg1) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === tmp3) {
      let tmp5;
      if (cResult[4] === tmp4) {
        tmp5 = cResult[5];
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
    closure_1_2(nativeEvent.nativeEvent.contentOffset.x < closure_0);
    closure_1(nativeEvent.nativeEvent.contentOffset.x, nativeEvent.nativeEvent.layoutMeasurement.width);
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((arg0, arg1) => {
  let closure_2;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  [first, closure_2] = react.useState(false);
  const items = [arg0, arg1];
  const items1 = [
    react.useCallback((nativeEvent) => {
      closure_2(nativeEvent.nativeEvent.contentOffset.x < closure_0);
      closure_1(nativeEvent.nativeEvent.contentOffset.x, nativeEvent.nativeEvent.layoutMeasurement.width);
    }, items),
    first
  ];
  return items1;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx");

export default tmp2;
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