// === Module 13638: CheckpointHeaderButton ===

// Module 13638 (CheckpointHeaderButton)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;

const Pressable = fn(17).Pressable;
const CHECKPOINT_PRIMARY = fn(6061).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles({ button: { width: 32, height: 32, alignItems: "center", justifyContent: "center", borderWidth: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeaderButton.tsx");

export default function CheckpointHeaderButton(color) {
  color = color.color;
  ({ accessibilityLabel, children, onPress } = color);
  if (color === undefined) {
    color = CHECKPOINT_PRIMARY;
  }
  const items = [color];
  const obj = { style: null, hitSlop: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const items1 = [closure_6().button, noop.useMemo(() => ({ borderColor: color }), items)];
  obj.style = items1;
  obj.hitSlop = nativeDefault.space.PX_8;
  obj.onPress = onPress;
  obj.accessibilityLabel = accessibilityLabel;
  obj.children = children;
  return <Pressable style={null} hitSlop={null} onPress={null} accessibilityRole="button" accessibilityLabel={null}>{null}</Pressable>;
};