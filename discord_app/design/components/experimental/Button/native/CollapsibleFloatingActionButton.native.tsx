// === Module 8817: CollapsableButton ===

// Module 8817 (CollapsableButton)
import ThemesDefault from "Themes" /* 712 */;
import styles2 from "styles" /* 8818 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import MINIMUM_HIT_AREA from "MINIMUM_HIT_AREA" /* 4749 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function CollapsableButton(arg0) {
  ({ state, style } = arg0);
  let collapseText;
  collapseText = state.collapseText;
  const merged = Object.assign(arg0, Object.create(null));
  let obj = collapseText(4115);
  class B {
    constructor() {
      obj = { minWidth: collapseText(closure_1_2[2]).FAB_BUTTON_SIZE, minHeight: collapseText(closure_1_2[2]).FAB_BUTTON_SIZE, paddingHorizontal: null, paddingVertical: null };
      obj2 = collapseText(closure_1_2[5]);
      obj3 = collapseText(closure_1_2[4]);
      items = [20];
      items[1] = closure_1_5;
      interpolateResult = obj3.interpolate(collapseText.get(), [0, 1], items);
      obj[2] = obj2.withSpring(interpolateResult, collapseText(closure_1_2[6]).SUBTLE_SPRING, "animate-always");
      obj[3] = closure_1_5;
      return obj;
    }
  }
  obj = { FAB_BUTTON_SIZE: collapseText(4749).FAB_BUTTON_SIZE, withSpring: collapseText(4744).withSpring, interpolate: collapseText(4115).interpolate, collapseText, FAB_PADDING_HORIZONTAL: 20, FAB_PADDING_VERTICAL: buttonPadding, SUBTLE_SPRING: collapseText(4748).SUBTLE_SPRING };
  B.__closure = obj;
  B.__workletHash = 5958377845220;
  B.__initData = closure_7;
  const animatedStyle = obj.useAnimatedStyle(B);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.size = "lg";
  obj.variant = "primary";
  obj.textVariant = "text-md/semibold";
  obj.collapseText = collapseText;
  obj.style = style;
  obj.pillStyle = animatedStyle;
  return jsx(collapseText(4746).BaseTextButton, {});
}
const buttonPadding = MINIMUM_HIT_AREA.getButtonPadding(require("MINIMUM_HIT_AREA").FAB_BUTTON_SIZE, require("MINIMUM_HIT_AREA").FAB_BUTTON_ICON_SIZE);
let closure_6 = createCacheKey.createStyles({ textButtonPill: { paddingHorizontal: 20, paddingVertical: buttonPadding } });
let closure_7 = { code: "function CollapsibleFloatingActionButtonNativeTsx1(){const{FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING}=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,'animate-always'),paddingVertical:FAB_PADDING_VERTICAL};}" };
const result = require("set").fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButton.native.tsx");

export const CollapsibleFloatingActionButton = function CollapsibleFloatingActionButton(arg0) {
  ({ icon, positionBottom, positionRight, text, state } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = styles2;
  obj1 = validElement;
  const styles = obj.useStyles();
  let cloneElementResult = icon;
  if (validElement.isValidElement(icon)) {
    obj = { color: null };
    obj[0] = ThemesDefault.colors.WHITE;
    cloneElementResult = obj1.cloneElement(icon, obj);
  }
  const items = [styles.button, ];
  if (positionRight == null) {
    positionRight = tmp3(8818).DEFAULT_POSITION_OFFSET;
  }
  obj = { position: "absolute", right: positionRight, bottom: null };
  if (positionBottom == null) {
    positionBottom = tmp3(8818).DEFAULT_POSITION_OFFSET;
  }
  obj[2] = positionBottom;
  items[1] = obj;
  if (null != state) {
    obj1 = {};
    const merged1 = Object.assign(merged);
    obj1.state = state;
    obj1.text = text;
    obj1.style = items;
    obj1.icon = cloneElementResult;
    let tmp12 = <CollapsableButton />;
  } else {
    const obj2 = {};
    const merged2 = Object.assign(merged);
    obj2.text = text;
    obj2.size = "lg";
    obj2.variant = "primary";
    obj2.textVariant = "text-md/semibold";
    obj2.icon = cloneElementResult;
    obj2.style = items;
    obj2.pillStyle = tmp2.textButtonPill;
    tmp12 = jsx(tmp3(4746).BaseTextButton, {});
  }
  return tmp12;
};