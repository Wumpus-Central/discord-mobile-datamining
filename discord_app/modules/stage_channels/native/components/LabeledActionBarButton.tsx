// === Module 10357: LabeledActionBarButton ===

// Module 10357 (LabeledActionBarButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Pressables from "Pressables" /* 5427 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let obj2 = { buttonContainer: { minHeight: 56, minWidth: 56, alignItems: "center", justifyContent: "center", borderRadius: 28, backgroundColor: fn(5746).ACTION_BAR_BUTTON_BACKGROUND }, container: { marginHorizontal: 12 }, containerWithLabel: { minWidth: "50%", maxWidth: "70%", flexShrink: 1 }, pressable: { marginHorizontal: 12, borderRadius: 28 }, buttonContent: { display: "flex", flexDirection: "row", alignItems: "center" }, buttonText: null, rightTextMargin: null };
let obj3 = { minHeight: 56, minWidth: 56, alignItems: "center", justifyContent: "center", borderRadius: 28, backgroundColor: fn(5746).ACTION_BAR_BUTTON_BACKGROUND };
obj2.buttonText = { marginStart: 8, fontSize: 14, color: nativeDefault.colors.WHITE, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, paddingStart: 3 };
obj2.rightTextMargin = { marginStart: 0, marginEnd: 8 };
let closure_6 = createStyles.createStyles(obj2);
let obj5 = { LEFT: 0, [0]: "LEFT", RIGHT: 1, [1]: "RIGHT" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/LabeledActionBarButton.tsx");

export const IconPosition = obj5;
export const LabeledActionButton = function LabeledActionButton(children) {
  ({ backgroundColor, imageStyle, source, disabled, label, iconPosition } = children);
  if (iconPosition === undefined) {
    iconPosition = obj5.LEFT;
  }
  const merged = Object.assign(children, Object.assign({ backgroundColor: 0, imageStyle: 0, children: 0, source: 0, disabled: 0, label: 0, iconPosition: 0 }));
  const tmp3 = closure_6();
  const items = [tmp3.container, ];
  let containerWithLabel = null;
  if (null != label) {
    containerWithLabel = tmp3.containerWithLabel;
  }
  const obj = { style: items, children: null };
  items[1] = containerWithLabel;
  const obj2 = { accessibilityRole: "button", disabled, style: tmp3.pressable };
  const merged1 = Object.assign(merged);
  const items1 = [tmp3.buttonContainer, , ];
  let num = 1;
  if (disabled) {
    num = 0.25;
  }
  items1[1] = { opacity: num };
  let tmp11 = null;
  if (null != backgroundColor) {
    const obj3 = { backgroundColor };
    tmp11 = obj3;
  }
  const obj4 = { style: items1, children: null };
  items1[2] = tmp11;
  const items2 = [tmp3.buttonContent, ];
  obj5 = null;
  if (null != label) {
    obj5 = { paddingHorizontal: 16 };
  }
  const obj6 = { style: items2, children: null };
  items2[1] = obj5;
  let tmp4Result = iconPosition === obj5.LEFT;
  if (tmp4Result) {
    const obj7 = { source, style: imageStyle };
    tmp4Result = React4(React2, obj7);
  }
  const items3 = [tmp4Result, , ];
  let tmp4Result3 = null;
  if (null != label) {
    const items4 = [tmp3.buttonText, ];
    let rightTextMargin = iconPosition === tmp12.RIGHT;
    if (rightTextMargin) {
      rightTextMargin = tmp3.rightTextMargin;
    }
    const obj8 = { numberOfLines: 2, style: null, children: null };
    items4[1] = rightTextMargin;
    obj8.style = items4;
    obj8.children = label;
    tmp4Result3 = React4(native.LegacyText, obj8);
  }
  items3[1] = tmp4Result3;
  let tmp4Result4 = iconPosition === tmp12.RIGHT;
  if (tmp4Result4) {
    const obj9 = { source, style: imageStyle };
    tmp4Result4 = React4(React2, obj9);
  }
  items3[2] = tmp4Result4;
  obj6.children = items3;
  const items5 = [hasOwnProperty(React3, obj6), children.children];
  obj4.children = items5;
  obj2.children = hasOwnProperty(React3, obj4);
  obj.children = React4(Pressables.PressableOpacity, obj2);
  return React4(React3, obj);
};