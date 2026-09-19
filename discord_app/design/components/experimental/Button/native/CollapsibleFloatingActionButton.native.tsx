// === Module 9189: CollapsibleFloatingActionButton ===

// Module 9189 (CollapsibleFloatingActionButton)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import spring from "spring" /* 5185 */;
import BaseTextButton from "BaseTextButton" /* 5187 */;
import springPresets from "springPresets" /* 5189 */;
import ButtonConstants2 from "ButtonConstants" /* 5191 */;
import FloatingActionButton from "FloatingActionButton" /* 9190 */;
import noop from "module_19" /* 19 */;

require = fn;
function CollapsableButton(arg0) {
  ({ state, style } = arg0);
  const collapseText = state.collapseText;
  const merged = Object.assign(arg0, Object.assign({ state: 0, style: 0 }));
  class B {
    constructor() {
      obj = { minWidth: closure_0(closure_2[2]).FAB_BUTTON_SIZE, minHeight: closure_0(closure_2[2]).FAB_BUTTON_SIZE, paddingHorizontal: null, paddingVertical: null };
      obj2 = closure_0(closure_2[5]);
      obj3 = closure_0(closure_2[4]);
      items = [20];
      items[1] = closure_5;
      interpolateResult = obj3.interpolate(collapseText.get(), [0, 1], items);
      obj.paddingHorizontal = obj2.withSpring(interpolateResult, closure_0(closure_2[6]).SUBTLE_SPRING, "animate-always");
      obj.paddingVertical = closure_5;
      return obj;
    }
  }
  let obj = collapseText(4492);
  B.__closure = { FAB_BUTTON_SIZE: collapseText(5191).FAB_BUTTON_SIZE, withSpring: collapseText(5185).withSpring, interpolate: collapseText(4492).interpolate, collapseText, FAB_PADDING_HORIZONTAL: 20, FAB_PADDING_VERTICAL: buttonPadding, SUBTLE_SPRING: collapseText(5189).SUBTLE_SPRING };
  B.__workletHash = 5958377845220;
  B.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(B);
  let obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.size = "lg";
  obj3.variant = "primary";
  obj3.textVariant = "text-md/semibold";
  obj3.collapseText = collapseText;
  obj3.style = style;
  obj3.pillStyle = animatedStyle;
  return jsx(collapseText(5187).BaseTextButton, {});
}
const jsx = fn(21).jsx;
const ButtonConstants = fn(5191);
const buttonPadding = ButtonConstants.getButtonPadding(fn(5191).FAB_BUTTON_SIZE, fn(5191).FAB_BUTTON_ICON_SIZE);
const createStyles = fn(4756);
let closure_6 = createStyles.createStyles({ textButtonPill: { paddingHorizontal: 20, paddingVertical: buttonPadding } });
const __initData = { code: "function CollapsibleFloatingActionButtonNativeTsx1(){const{FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING}=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,'animate-always'),paddingVertical:FAB_PADDING_VERTICAL};}" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButton.native.tsx");

export const CollapsibleFloatingActionButton = function CollapsibleFloatingActionButton(arg0) {
  ({ icon, positionBottom, positionRight, text, state } = arg0);
  const merged = Object.assign(arg0, Object.assign({ icon: 0, positionBottom: 0, positionRight: 0, text: 0, state: 0 }));
  const tmp2 = closure_6();
  const styles = FloatingActionButton.useStyles();
  let cloneElementResult = icon;
  if (noop.isValidElement(icon)) {
    const obj3 = { color: nativeDefault.colors.WHITE };
    cloneElementResult = noop.cloneElement(icon, obj3);
  }
  const items = [styles.button, ];
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
    obj5.textVariant = "text-md/semibold";
    obj5.icon = cloneElementResult;
    obj5.style = items;
    obj5.pillStyle = tmp2.textButtonPill;
    tmp12 = jsx(BaseTextButton.BaseTextButton, {});
  }
  return tmp12;
};