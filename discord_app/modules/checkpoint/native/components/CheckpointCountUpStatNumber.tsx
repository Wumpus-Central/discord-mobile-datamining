// discord_app/modules/checkpoint/native/components/CheckpointCountUpStatNumber.tsx
import CheckpointStatNumber from "CheckpointStatNumber.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const noop = fn(19);
({ useEffect: closure_4, useMemo: hasOwnProperty, useState: metroRequire } = noop);
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCountUpStatNumber.tsx");

export default function CheckpointCountUpStatNumber(start) {
  let num = start.start;
  if (num === undefined) {
    num = 0;
  }
  const end = start.end;
  let num2 = start.size;
  if (num2 === undefined) {
    num2 = 100;
  }
  closure_129_0 = end;
  closure_129_1 = num;
  closure_129_3 = undefined;
  const items = [AccessibilityStore];
  const stateFromStores = end(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  closure_129_2 = stateFromStores;
  let obj = end(504);
  [tmp4, closure_129_3] = closure_6(num);
  const items1 = [end, stateFromStores, num];
  closure_4(() => {
    if (!closure_2) {
      const _Date = Date;
      closure_0 = Date.now();
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        const bound = Math.min((Date.now() - closure_0) / 500, 1);
        if (1 === bound) {
          let rounded = end;
        } else {
          const _Math = Math;
          rounded = Math.round((end - num2) * bound + num2);
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
  if (stateFromStores) {
    tmp4 = end;
  }
  const items2 = [end, num2];
  const tmp3 = _slicedToArray(closure_6(num), 2);
  return (
    <View
      style={closure_5(() => {
        const obj = { width: CheckpointStatNumber.getCheckpointStatNumberWidth(end, num2) };
        return obj;
      }, items2)}
    >
      {jsx(num2(13590), { value: tmp4, size: num2 })}
    </View>
  );
}
