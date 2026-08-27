// === Module 10013: IconPosition ===

// Module 10013 (IconPosition)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import PressableBase from "PressableBase" /* 5020 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { buttonContainer: null, container: null, containerWithLabel: null, pressable: null, buttonContent: null, buttonText: null, rightTextMargin: null };
createCacheKey = { minHeight: 56, minWidth: 56, alignItems: "center", justifyContent: "center", borderRadius: 28, backgroundColor: require("result").ACTION_BAR_BUTTON_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginHorizontal: 12 };
createCacheKey[2] = { minWidth: "50%", maxWidth: "70%", flexShrink: 1 };
createCacheKey[3] = { marginHorizontal: 12, borderRadius: 28 };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[5] = { marginStart: 8, fontSize: 14, color: ThemesDefault.colors.WHITE, fontFamily: require("sum").Fonts.PRIMARY_SEMIBOLD, paddingStart: 3 };
createCacheKey[6] = { marginStart: 0, marginEnd: 8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj2 = { LEFT: 0, [0]: "LEFT", RIGHT: 1, [1]: "RIGHT" };
obj1 = { marginStart: 8, fontSize: 14, color: ThemesDefault.colors.WHITE, fontFamily: require("sum").Fonts.PRIMARY_SEMIBOLD, paddingStart: 3 };
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/LabeledActionBarButton.tsx");

export const IconPosition = obj2;
export const LabeledActionButton = function LabeledActionButton(children) {
  ({ backgroundColor, imageStyle, source, disabled, label, iconPosition } = children);
  if (iconPosition === undefined) {
    iconPosition = obj2.LEFT;
  }
  const merged = Object.assign(children, Object.create(null));
  const tmp3 = callback();
  const items = [tmp3.container, ];
  let containerWithLabel = null;
  if (null != label) {
    containerWithLabel = tmp3.containerWithLabel;
  }
  let obj = { style: items, children: null };
  items[1] = containerWithLabel;
  obj = { accessibilityRole: "button", disabled, style: tmp3.pressable };
  const merged1 = Object.assign(merged);
  const items1 = [tmp3.buttonContainer, , ];
  let num = 1;
  if (disabled) {
    num = 0.25;
  }
  items1[1] = { opacity: num };
  let tmp11 = null;
  if (null != backgroundColor) {
    obj = { backgroundColor: null };
    obj[0] = backgroundColor;
    tmp11 = obj;
  }
  obj1 = { style: items1, children: null };
  items1[2] = tmp11;
  const items2 = [tmp3.buttonContent, ];
  obj2 = null;
  if (null != label) {
    obj2 = { paddingHorizontal: 16 };
  }
  const obj3 = { style: items2, children: null };
  items2[1] = obj2;
  let tmp4Result = iconPosition === obj2.LEFT;
  if (tmp4Result) {
    const obj4 = { source: null, style: null };
    obj4[0] = source;
    obj4[1] = imageStyle;
    tmp4Result = tmp4(closure_2, obj4);
  }
  const items3 = [tmp4Result, , ];
  tmp4Result = null;
  if (null != label) {
    const items4 = [tmp3.buttonText, ];
    let rightTextMargin = iconPosition === tmp12.RIGHT;
    if (rightTextMargin) {
      rightTextMargin = tmp3.rightTextMargin;
    }
    const obj5 = { numberOfLines: 2, style: null, children: null };
    items4[1] = rightTextMargin;
    obj5[1] = items4;
    obj5[2] = label;
    tmp4Result = tmp4(Button.LegacyText, obj5);
  }
  items3[1] = tmp4Result;
  let tmp4Result1 = iconPosition === tmp12.RIGHT;
  if (tmp4Result1) {
    const obj6 = { source: null, style: null };
    obj6[0] = source;
    obj6[1] = imageStyle;
    tmp4Result1 = tmp4(closure_2, obj6);
  }
  items3[2] = tmp4Result1;
  obj3[1] = items3;
  const items5 = [closure_5(closure_3, obj3), children.children];
  obj1[1] = items5;
  obj.children = closure_5(closure_3, obj1);
  obj[1] = closure_4(PressableBase.PressableOpacity, obj);
  return closure_4(closure_3, obj);
};