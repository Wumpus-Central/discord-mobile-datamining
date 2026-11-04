// === Module 9143: CollapsibleFloatingActionButton ===

// Module 9143 (CollapsibleFloatingActionButton)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import BaseTextButton from "BaseTextButton" /* 5769 */;
import spring_spring from "spring/spring" /* 5771 */;
import springPresets from "springPresets" /* 5772 */;
import ButtonConstants2 from "ButtonConstants" /* 5774 */;
import FloatingActionButton from "FloatingActionButton" /* 9144 */;
import noop from "module_19" /* 19 */;

require = fn;
function CollapsableButton(arg0) {
  ({ state, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ state: 0, style: 0 }));
  const collapseText = state.collapseText;
  items = [closure_7, ButtonConstants2.FAB_BUTTON_SIZE, spring_spring.withSpring, _mod1652.interpolate, collapseText, 20, buttonPadding, springPresets.SUBTLE_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class CollapsibleFloatingActionButtonNativeTsx1 {
    constructor() {
      obj = { minWidth: closure_0, minHeight: closure_0, paddingHorizontal: null, paddingVertical: closure_5 };
      items = [, ];
      items[0] = closure_4;
      items[1] = closure_5;
      obj.paddingHorizontal = closure_1(closure_2(closure_3.get(), [0, 1], items), closure_6, "animate-always");
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  CollapsibleFloatingActionButtonNativeTsx1.__closure = items1;
  CollapsibleFloatingActionButtonNativeTsx1.__workletHash = 9222180405053;
  CollapsibleFloatingActionButtonNativeTsx1.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(CollapsibleFloatingActionButtonNativeTsx1);
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.size = "lg";
  obj2.variant = "primary";
  obj2.textVariant = "body-md/semibold";
  obj2.collapseText = collapseText;
  obj2.style = style;
  obj2.pillStyle = animatedStyle;
  return jsx(BaseTextButton.BaseTextButton, {});
}
const jsx = fn(21).jsx;
const ButtonConstants = fn(5774);
const buttonPadding = ButtonConstants.getButtonPadding(fn(5774).FAB_BUTTON_SIZE, fn(5774).FAB_BUTTON_ICON_SIZE);
const createStyles = fn(5141);
let closure_6 = createStyles.createStyles({ textButtonPill: { paddingHorizontal: 20, paddingVertical: buttonPadding } });
let closure_7 = { code: "(function CollapsibleFloatingActionButtonNativeTsx1(){let[FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING]=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,'animate-always'),paddingVertical:FAB_PADDING_VERTICAL};})" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButton.native.tsx");

export function CollapsibleFloatingActionButton(arg0) {
  ({ icon, positionBottom, positionRight, text, state } = arg0);
  const merged = Object.assign(arg0, Object.assign({ icon: 0, positionBottom: 0, positionRight: 0, text: 0, state: 0 }));
  const tmp2 = closure_6();
  const styles = FloatingActionButton.useStyles();
  let cloneElementResult = icon;
  if (noop.isValidElement(icon)) {
    const obj3 = { color: nativeDefault.colors.WHITE };
    cloneElementResult = noop.cloneElement(icon, obj3);
  }
  items = [styles.button, ];
  if (positionRight == null) {
    positionRight = FloatingActionButton.DEFAULT_POSITION_OFFSET;
  }
  const rect = { position: "absolute", right: positionRight, bottom: null };
  if (positionBottom == null) {
    positionBottom = FloatingActionButton.DEFAULT_POSITION_OFFSET;
  }
  rect.bottom = positionBottom;
  items[1] = rect;
  if (null != state) {
    const obj4 = {};
    const merged1 = Object.assign(merged);
    obj4.state = state;
    obj4.text = text;
    obj4.style = items;
    obj4.icon = cloneElementResult;
    let tmp12 = <CollapsableButton />;
  } else {
    const obj5 = {};
    const merged2 = Object.assign(merged);
    obj5.text = text;
    obj5.size = "lg";
    obj5.variant = "primary";
    obj5.textVariant = "body-md/semibold";
    obj5.icon = cloneElementResult;
    obj5.style = items;
    obj5.pillStyle = tmp2.textButtonPill;
    tmp12 = jsx(BaseTextButton.BaseTextButton, {});
  }
  return tmp12;
}