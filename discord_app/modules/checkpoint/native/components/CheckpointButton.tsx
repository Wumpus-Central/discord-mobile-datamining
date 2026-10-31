// discord_app/modules/checkpoint/native/components/CheckpointButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import CheckpointTextDefault from "CheckpointText.tsx";
import CheckpointPressable from "CheckpointPressable.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const CheckpointPressableDefault = CheckpointPressable;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const CheckpointConstants = fn(6066);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY: metroRequire } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: {
    justifyContent: "center",
    marginRight: -fn(13662).SHADOW_OFFSET,
    marginBottom: -fn(13662).SHADOW_OFFSET,
  },
  button: null,
  label: null,
};
let obj3 = { justifyContent: "center", marginRight: -fn(13662).SHADOW_OFFSET, marginBottom: -fn(13662).SHADOW_OFFSET };
obj2.button = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
obj2.label = { textTransform: "uppercase" };
let closure_9 = createStyles.createStyles(obj2);
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
    color = timestampProducer;
  }
  let borderColor = loading.borderColor;
  if (borderColor === undefined) {
    borderColor = hasOwnProperty;
  }
  color = undefined;
  ({ shadowColor, style } = loading);
  const tmp = closure_9();
  const token = useToken.useToken("text-subtle");
  const token1 = useToken.useToken("border-normal");
  if (disabled) {
    color = token;
  }
  const items = [disabled, token1, borderColor];
  const items1 = [color];
  const memo = noop.useMemo(() => ({ borderColor: disabled ? token1 : borderColor }), items);
  const memo1 = noop.useMemo(() => ({ color }), items1);
  if (flag) {
    const obj3 = { color };
    let tmp8 = React5(ActivityIndicator, obj3);
  } else {
    tmp8 = null;
    if (null != Icon) {
      const obj4 = { color, size: str2 };
      tmp8 = React5(Icon, obj4);
    }
  }
  const obj5 = {
    size: "lg",
    containerStyle: tmp.container,
    style: null,
    shadowColor,
    onPress,
    disabled,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityHint: null,
    accessibilityState: null,
    children: null,
  };
  const items2 = [tmp.button, memo, style];
  obj5.style = items2;
  if (accessibilityLabel == null) {
    accessibilityLabel = label;
  }
  obj5.accessibilityLabel = accessibilityLabel;
  obj5.accessibilityHint = accessibilityHint;
  obj5.accessibilityState = accessibilityState;
  const items3 = ["start" === str && tmp8, ,];
  let tmp16 = null != label;
  if (tmp16) {
    const obj6 = {
      variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant,
      style: null,
      children: null,
    };
    const items4 = [tmp.label, memo1];
    obj6.style = items4;
    obj6.children = label;
    tmp16 = React5(CheckpointTextDefault, obj6);
    const tmp13Result = CheckpointTextDefault;
  }
  items3[1] = tmp16;
  items3[2] = "end" === str && tmp8;
  obj5.children = items3;
  return React6(CheckpointPressableDefault, obj5);
}
