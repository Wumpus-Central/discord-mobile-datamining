// discord_app/modules/stage_channels/native/components/LabeledActionBarButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  buttonContainer: null,
  container: null,
  containerWithLabel: null,
  pressable: null,
  buttonContent: null,
  buttonText: null,
  rightTextMargin: null,
};
createStyles = {
  minHeight: 56,
  minWidth: 56,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 28,
  backgroundColor: fn(5441).ACTION_BAR_BUTTON_BACKGROUND,
};
createStyles.buttonContainer = createStyles;
createStyles.container = { marginHorizontal: 12 };
createStyles.containerWithLabel = { minWidth: "50%", maxWidth: "70%", flexShrink: 1 };
createStyles.pressable = { marginHorizontal: 12, borderRadius: 28 };
createStyles.buttonContent = { display: "flex", flexDirection: "row", alignItems: "center" };
createStyles.buttonText = {
  marginStart: 8,
  fontSize: 14,
  color: nativeDefault.colors.WHITE,
  fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD,
  paddingStart: 3,
};
createStyles.rightTextMargin = { marginStart: 0, marginEnd: 8 };
let closure_6 = createStyles.createStyles(createStyles);
let obj2 = { LEFT: 0, [0]: "LEFT", RIGHT: 1, [1]: "RIGHT" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/LabeledActionBarButton.tsx");

export const IconPosition = obj2;
export const LabeledActionButton = function LabeledActionButton(children) {
  ({ backgroundColor, imageStyle, source, disabled, label, iconPosition } = children);
  if (iconPosition === undefined) {
    iconPosition = obj2.LEFT;
  }
  const merged = Object.assign(
    children,
    Object.assign({
      backgroundColor: 0,
      imageStyle: 0,
      children: 0,
      source: 0,
      disabled: 0,
      label: 0,
      iconPosition: 0,
    }),
  );
  const tmp3 = closure_6();
  const items = [tmp3.container];
  let containerWithLabel = null;
  if (null != label) {
    containerWithLabel = tmp3.containerWithLabel;
  }
  let obj = { style: items, children: null };
  items[1] = containerWithLabel;
  obj = { accessibilityRole: "button", disabled, style: tmp3.pressable };
  const merged1 = Object.assign(merged);
  const items1 = [tmp3.buttonContainer, ,];
  let num = 1;
  if (disabled) {
    num = 0.25;
  }
  items1[1] = { opacity: num };
  let tmp11 = null;
  if (null != backgroundColor) {
    obj = { backgroundColor };
    tmp11 = obj;
  }
  const obj1 = { style: items1, children: null };
  items1[2] = tmp11;
  const items2 = [tmp3.buttonContent];
  obj2 = null;
  if (null != label) {
    obj2 = { paddingHorizontal: 16 };
  }
  const obj3 = { style: items2, children: null };
  items2[1] = obj2;
  let tmp4Result = iconPosition === obj2.LEFT;
  if (tmp4Result) {
    const obj4 = { source, style: imageStyle };
    tmp4Result = React4(React2, obj4);
  }
  const items3 = [tmp4Result, ,];
  tmp4Result = null;
  if (null != label) {
    const items4 = [tmp3.buttonText];
    let rightTextMargin = iconPosition === tmp12.RIGHT;
    if (rightTextMargin) {
      rightTextMargin = tmp3.rightTextMargin;
    }
    const obj5 = { numberOfLines: 2, style: null, children: null };
    items4[1] = rightTextMargin;
    obj5.style = items4;
    obj5.children = label;
    tmp4Result = React4(native.LegacyText, obj5);
  }
  items3[1] = tmp4Result;
  let tmp4Result1 = iconPosition === tmp12.RIGHT;
  if (tmp4Result1) {
    const obj6 = { source, style: imageStyle };
    tmp4Result1 = React4(React2, obj6);
  }
  items3[2] = tmp4Result1;
  obj3.children = items3;
  const items5 = [hasOwnProperty(React3, obj3), children.children];
  obj1.children = items5;
  obj.children = hasOwnProperty(React3, obj1);
  obj.children = React4(Pressables.PressableOpacity, obj);
  return React4(React3, obj);
};
