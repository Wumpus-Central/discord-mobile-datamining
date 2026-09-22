// === Module 16005: CheckpointButton ===

// Module 16005 (CheckpointButton)
import nativeDefault from "native" /* 576 */;
import CheckpointTextDefault from "CheckpointText" /* 15989 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 4982 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4757 */;
import size from "module_2" /* 2 */;

({ Pressable: c2, View: c3 } = get_ActivityIndicator);
({ CHECKPOINT_PRIMARY: closure_4, CHECKPOINT_BUTTON_BORDER, CHECKPOINT_BUTTON_SHADOW } = CheckpointConstants);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { justifyContent: "center", marginRight: -4, marginBottom: -4, paddingRight: 4, paddingBottom: 4 }, backdrop: { position: "absolute", top: 4, left: 4, right: 0, bottom: 0, backgroundColor: CHECKPOINT_BUTTON_SHADOW }, button: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_BUTTON_BORDER, height: 48 }, label: { textTransform: "uppercase" } };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default function CheckpointButton(onPress) {
  ({ Icon, label } = onPress);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const items = [hasOwnProperty(React3, { style: tmp.backdrop }), ];
  const obj3 = { style: tmp.button, onPress: onPress.onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
  let tmp4Result = null != Icon;
  if (tmp4Result) {
    const obj4 = { color, size: "sm" };
    tmp4Result = hasOwnProperty(Icon, obj4);
  }
  const items1 = [tmp4Result, ];
  let tmp4Result2 = null != label;
  if (tmp4Result2) {
    const obj5 = { variant: "text-lg/medium", style: tmp.label, children: label };
    tmp4Result2 = hasOwnProperty(CheckpointTextDefault, obj5);
  }
  items1[1] = tmp4Result2;
  obj3.children = items1;
  items[1] = timestampProducer(React2, obj3);
  obj.children = items;
  return timestampProducer(React3, obj);
};