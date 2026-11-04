// === Module 13920: CheckpointButton ===

// Module 13920 (CheckpointButton)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const CheckpointConstants = fn(6201);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_BUTTON_DISABLED_BORDER_MOBILE: closure_6, CHECKPOINT_PRIMARY: metroImportDefault } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5141);
let obj2 = { container: { justifyContent: "center", marginRight: -fn(13894).SHADOW_OFFSET, marginBottom: -fn(13894).SHADOW_OFFSET }, button: null, label: null };
let obj3 = { justifyContent: "center", marginRight: -fn(13894).SHADOW_OFFSET, marginBottom: -fn(13894).SHADOW_OFFSET };
obj2.button = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
obj2.label = { textTransform: "uppercase" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default function CheckpointButton(loading) {
  ({ Icon, label, accessibilityLabel, disabled } = loading);
  ({ onPress, accessibilityHint, accessibilityState } = loading);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let str = loading.iconPosition;
  if (str === undefined) {
    str = "start";
  }
  let str2 = loading.iconSize;
  if (str2 === undefined) {
    str2 = "sm";
  }
  let color = loading.color;
  if (color === undefined) {
    color = closure_7;
  }
  let borderColor = loading.borderColor;
  if (borderColor === undefined) {
    borderColor = closure_5;
  }
  color = undefined;
  ({ shadowColor, style } = loading);
  const tmp = closure_10();
  if (disabled) {
    color = obj.useToken("text-subtle");
  }
  items = [disabled, borderColor];
  const items1 = [color];
  const memo = noop.useMemo(() => ({ borderColor: disabled ? timestampProducer : borderColor }), items);
  const memo1 = noop.useMemo(() => ({ color }), items1);
  if (flag) {
    const obj2 = { color };
    let tmp6 = closure_8(ActivityIndicator, obj2);
  } else {
    tmp6 = null;
    if (null != Icon) {
      const obj3 = { color, size: str2 };
      tmp6 = closure_8(Icon, obj3);
    }
  }
  const obj4 = { size: "lg", containerStyle: tmp.container, style: null, shadowColor, onPress, disabled, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, children: null };
  const items2 = [tmp.button, memo, style];
  obj4.style = items2;
  obj = disabled(color[7]);
  const tmp11 = borderColor;
  const tmp2 = disabled;
  if (accessibilityLabel == null) {
    accessibilityLabel = label;
  }
  obj4.accessibilityLabel = accessibilityLabel;
  obj4.accessibilityHint = accessibilityHint;
  obj4.accessibilityState = accessibilityState;
  const items3 = ["start" === str && tmp6, , ];
  let tmp14 = null != label;
  if (tmp14) {
    const obj5 = { variant: tmp2(tmp3[5]).CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: null, children: null };
    const items4 = [tmp.label, memo1];
    obj5.style = items4;
    obj5.children = label;
    tmp14 = closure_8(tmp11(tmp3[8]), obj5);
    const tmp11Result = tmp11(tmp3[8]);
  }
  items3[1] = tmp14;
  items3[2] = "end" === str && tmp6;
  obj4.children = items3;
  return closure_9(borderColor(color[5]), obj4);
};