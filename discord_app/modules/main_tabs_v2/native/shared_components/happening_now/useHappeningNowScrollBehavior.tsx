// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx",
);

export default function useHappeningNowScrollBehavior(arg0, arg1) {
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
    tmp[0],
  ];
  return items1;
}
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
