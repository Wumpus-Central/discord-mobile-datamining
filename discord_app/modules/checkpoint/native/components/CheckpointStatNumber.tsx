// === Module 14479: CheckpointStatNumber ===

// Module 14479 (CheckpointStatNumber)
import CheckpointNumbersRive from "CheckpointNumbersRive" /* 5459 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import noop from "module_19" /* 19 */;

require = fn;
function getTextPixels(value) {
  let num = 0;
  const StringResult = String(value);
  while (tmp2 !== undefined) {
    let num2 = closure_9[tmp3];
    if (num2 == null) {
      num2 = 5;
    }
    num = num + num2;
    continue;
  }
  return Math.max(num - 1, 0);
}
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6377).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
let c7 = 0.08675000000000001;
let c8 = 28.7;
let closure_9 = { 1: 3, 2: 4, 3: 4, 5: 4, 7: 4, ".": 2, ",": 2, " ": 2, " ": 2, ":": 2, A: 4, M: 6, P: 4, a: 4, m: 6, p: 4 };
const createStyles = fn(5306);
let closure_10 = createStyles.createStyles({ rive: { position: "absolute", top: 0, left: 0 } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStatNumber.tsx");

export default function CheckpointStatNumber(isStepHeading) {
  value = isStepHeading.value;
  require = value;
  let color = isStepHeading.color;
  if (color === undefined) {
    color = CHECKPOINT_PRIMARY;
  }
  let num = isStepHeading.size;
  if (num === undefined) {
    num = 40;
  }
  c4 = undefined;
  const tmp3 = getTextPixels(value);
  let num2 = 1;
  if (tmp3 > c8) {
    num2 = c8 / tmp3;
  }
  let num3 = num;
  if (num === undefined) {
    num3 = 40;
  }
  const result = Math.min(getTextPixels(value), c8) * num3 * c7;
  c4 = result;
  items = [num, result];
  const items1 = [num2, num, result];
  const memo = noop.useMemo(() => {
    const size = { height: num, width };
    return size;
  }, items);
  const items2 = [color, value];
  const memo1 = noop.useMemo(() => {
    const size = { top: (1 - num2) * num * 0.54, height: num, width: Math.max(2.5675675675675675 * num, c4) };
    return size;
  }, items1);
  const items3 = [color];
  const memo2 = noop.useMemo(() => ({ DisplayValueString: String(value), TextColor: color }), items2);
  const obj = { style: memo, children: null };
  const obj2 = { style: null, children: null };
  const items4 = [closure_10().rive, memo1];
  obj2.style = items4;
  const memo3 = noop.useMemo(() => ({ color }), items3);
  const tmp = closure_10();
  obj2.children = jsx(CheckpointNumbersRive.CheckpointNumbersRive, { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: memo2, fallback: jsx(CheckpointTextDefault, { variant: "heading-xl/semibold", style: memo3, isStepHeading: isStepHeading.isStepHeading, children: value }) });
  obj.children = <View style={null}>{null}</View>;
  return <View style={memo}>{null}</View>;
};
export function getCheckpointStatNumberShrinkRatio(c0) {
  const tmp = getTextPixels(c0);
  let num = 1;
  if (tmp > c8) {
    num = c8 / tmp;
  }
  return num;
}
export function isCheckpointStatNumberShrunk(result) {
  const tmp = getTextPixels(result);
  let num = 1;
  if (tmp > c8) {
    num = c8 / tmp;
  }
  return num < 1;
}
export function getCheckpointStatNumberWidth(c1) {
  let num = size;
  if (size === undefined) {
    num = 40;
  }
  return Math.min(getTextPixels(c1), c8) * num * c7;
}
export function getCheckpointStatNumberDigitHeight(c0, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 40;
  }
  const result = 7 * num;
  const tmp3 = getTextPixels(c0);
  let num2 = 1;
  if (tmp3 > c8) {
    num2 = c8 / tmp3;
  }
  return result * c7 * num2;
}