// === Module 13780: CheckpointKnickKnacks ===

// Module 13780 (CheckpointKnickKnacks)
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

const require = fn;
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6186).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_7 = createStyles.createStyles({ rive: { width: 143, height: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointKnickKnacks.tsx");

export default function CheckpointKnickKnacks(style) {
  let stateFromStores;
  items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [stateFromStores];
  const obj = stateFromStores(504);
  const tmp = stateFromStores;
  const memo = noop.useMemo(() => ({ iconColor: CHECKPOINT_PRIMARY, reducedMotion: stateFromStores }), items1);
  const tmp4 = closure_7();
  let tmp6 = null;
  if (!obj2.isAndroid()) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp4.rive, style.style];
    obj3.style = items2;
    const obj4 = { artboard: "Entry", dataBinding: memo };
    obj3.children = jsx(tmp(5214).CheckpointKnickKnacksRive, { artboard: "Entry", dataBinding: memo });
    tmp6 = <View style={null}>{null}</View>;
  }
  return tmp6;
};