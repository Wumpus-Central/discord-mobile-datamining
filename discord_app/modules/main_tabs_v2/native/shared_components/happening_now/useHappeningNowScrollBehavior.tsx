// === Module 15904: useHappeningNowScrollBehavior ===

// Module 15904 (useHappeningNowScrollBehavior)
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx");

export default function useHappeningNowScrollBehavior(arg0, arg1) {
  const callback = arg0;
  const React = arg1;
  const tmp = callback(React.useState(false), 2);
  closure_2 = tmp[1];
  const items = [arg0, arg1];
  const items1 = [
    React.useCallback((nativeEvent) => {
      callback2(nativeEvent.nativeEvent.contentOffset.x < closure_0);
      callback(nativeEvent.nativeEvent.contentOffset.x, nativeEvent.nativeEvent.layoutMeasurement.width);
    }, items),
    tmp[0]
  ];
  return items1;
};
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
      let tmp = num2;
      let tmp2 = num3;
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