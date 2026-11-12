// discord_app/modules/checkpoint/native/components/CheckpointCountUpStatNumber.tsx
import CheckpointStatNumber from "CheckpointStatNumber.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const noop = fn(19);
({ useEffect: closure_4, useMemo: hasOwnProperty, useState: closure_6 } = noop);
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCountUpStatNumber.tsx");

export default function CheckpointCountUpStatNumber(start) {
  let num = start.start;
  if (num === undefined) {
    num = 0;
  }
  ({ end, size } = start);
  if (size === undefined) {
    size = 100;
  }
  closure_129_0 = end;
  closure_129_1 = num;
  closure_129_3 = undefined;
  items = [AccessibilityStore];
  const stateFromStores = size(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  closure_129_2 = stateFromStores;
  let obj = size(504);
  [tmp5, closure_129_3] = closure_6(num);
  const items1 = [end, stateFromStores, num];
  closure_4(() => {
    if (!closure_2) {
      const _Date = Date;
      closure_0 = Date.now();
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        const bound = Math.min((Date.now() - closure_0) / 500, 1);
        if (1 === bound) {
          let rounded = size;
        } else {
          const _Math = Math;
          rounded = Math.round((size - c1) * bound + c1);
        }
        _slicedToArray(rounded);
        if (1 === bound) {
          const _clearInterval = clearInterval;
          clearInterval(closure_1);
        }
      }, 32);
      return () => clearInterval(closure_1);
    }
  }, items1);
  const tmp4 = _slicedToArray(closure_6(num), 2);
  const result = size(14383).formatCheckpointStatNumber(end);
  importDefault = result;
  const items2 = [result, size];
  const obj2 = {
    style: closure_5(() => {
      const obj = { width: CheckpointStatNumber.getCheckpointStatNumberWidth(c1, size) };
      return obj;
    }, items2),
    children: null,
  };
  const obj3 = { value: null, size: null };
  const tmpResult = size(14383);
  obj3.value = size(14383).formatCheckpointStatNumber(end);
  obj3.size = size;
  obj2.children = <tmp8 value={null} size={null} />;
  return (
    <View
      style={closure_5(() => {
        const obj = { width: CheckpointStatNumber.getCheckpointStatNumberWidth(c1, size) };
        return obj;
      }, items2)}
    >
      {null}
    </View>
  );
}
