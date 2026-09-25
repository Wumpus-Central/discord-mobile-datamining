// discord_app/modules/checkpoint/native/components/CheckpointKnickKnacks.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = fn;
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(5054).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_7 = createStyles.createStyles({ rive: { width: 143, height: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointKnickKnacks.tsx");

export default function CheckpointKnickKnacks(style) {
  let stateFromStores;
  const items = [AccessibilityStore];
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
    obj3.children = jsx(tmp(4537).CheckpointKnickKnacksRive, { artboard: "Entry", dataBinding: memo });
    tmp6 = <View style={null}>{null}</View>;
  }
  return tmp6;
}
