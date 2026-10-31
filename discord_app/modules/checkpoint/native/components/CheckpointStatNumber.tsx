// === Module 13627: CheckpointStatNumber ===

// Module 13627 (CheckpointStatNumber)
import CheckpointNumbersRive from "CheckpointNumbersRive" /* 5165 */;
import CheckpointTextDefault from "CheckpointText" /* 13624 */;
import noop from "module_19" /* 19 */;

require = fn;
function getTextPixels(value) {
  let num = 0;
  const StringResult = String(value);
  while (tmp2 !== undefined) {
    let num2 = closure_8[tmp3];
    if (num2 == null) {
      num2 = 5;
    }
    num = num + num2;
    continue;
  }
  return Math.max(num - 1, 0);
}
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6066).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
let c7 = 28.7;
let closure_8 = { 1: 3, 2: 4, 3: 4, 5: 4, 7: 4, ".": 2, ",": 2, ":": 2, A: 4, M: 6, P: 4, a: 4, m: 6, p: 4 };
const createStyles = fn(5014);
let closure_9 = createStyles.createStyles({ rive: { position: "absolute", top: 0, left: 0 } });
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
  if (tmp3 > c7) {
    num2 = c7 / tmp3;
  }
  let num3 = num;
  if (num === undefined) {
    num3 = 40;
  }
  const result = Math.min(getTextPixels(value), c7) * num3 * 0.08675000000000001;
  c4 = result;
  const items = [num, result];
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
  const items4 = [closure_9().rive, memo1];
  obj2.style = items4;
  const memo3 = noop.useMemo(() => ({ color }), items3);
  const tmp = closure_9();
  obj2.children = jsx(CheckpointNumbersRive.CheckpointNumbersRive, { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: memo2, fallback: jsx(CheckpointTextDefault, { variant: "heading-xl/bold", style: memo3, isStepHeading: isStepHeading.isStepHeading, children: value }) });
  obj.children = <View style={null}>{null}</View>;
  return <View style={memo}>{null}</View>;
};
export function isCheckpointStatNumberShrunk(value) {
  const tmp = getTextPixels(value);
  let num = 1;
  if (tmp > c7) {
    num = c7 / tmp;
  }
  return num < 1;
}
export function getCheckpointStatNumberWidth(end, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 40;
  }
  return Math.min(getTextPixels(end), c7) * num * 0.08675000000000001;
}