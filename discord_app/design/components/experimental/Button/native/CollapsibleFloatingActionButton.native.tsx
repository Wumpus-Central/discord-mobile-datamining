// discord_app/design/components/experimental/Button/native/CollapsibleFloatingActionButton.native.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../animation/reanimated/spring/springPresets.tsx";
import ButtonConstants2 from "../../../Button/native/ButtonConstants.native.tsx";
import FloatingActionButton from "../../../Button/native/FloatingActionButton.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function CollapsableButton(arg0) {
  ({ state, style } = arg0);
  const collapseText = state.collapseText;
  const merged = Object.assign(arg0, Object.assign({ state: 0, style: 0 }));
  let obj = collapseText(4296);
  class B {
    constructor() {
      obj = {
        minWidth: closure_0(closure_2[2]).FAB_BUTTON_SIZE,
        minHeight: closure_0(closure_2[2]).FAB_BUTTON_SIZE,
        paddingHorizontal: null,
        paddingVertical: null,
      };
      obj2 = closure_0(closure_2[5]);
      obj3 = closure_0(closure_2[4]);
      items = [20];
      items[1] = closure_5;
      interpolateResult = obj3.interpolate(collapseText.get(), [0, 1], items);
      obj.paddingHorizontal = obj2.withSpring(
        interpolateResult,
        closure_0(closure_2[6]).SUBTLE_SPRING,
        "animate-always",
      );
      obj.paddingVertical = closure_5;
      return obj;
    }
  }
  obj = {
    FAB_BUTTON_SIZE: collapseText(4980).FAB_BUTTON_SIZE,
    withSpring: collapseText(4974).withSpring,
    interpolate: collapseText(4296).interpolate,
    collapseText,
    FAB_PADDING_HORIZONTAL: 20,
    FAB_PADDING_VERTICAL: buttonPadding,
    SUBTLE_SPRING: collapseText(4978).SUBTLE_SPRING,
  };
  B.__closure = obj;
  B.__workletHash = 5958377845220;
  B.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(B);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.size = "lg";
  obj.variant = "primary";
  obj.textVariant = "text-md/semibold";
  obj.collapseText = collapseText;
  obj.style = style;
  obj.pillStyle = animatedStyle;
  return jsx(collapseText(4976).BaseTextButton, {});
}
const jsx = fn(21).jsx;
let ButtonConstants = fn(4980);
const buttonPadding = ButtonConstants.getButtonPadding(fn(4980).FAB_BUTTON_SIZE, fn(4980).FAB_BUTTON_ICON_SIZE);
const createStyles = fn(4560);
ButtonConstants = { textButtonPill: { paddingHorizontal: 20, paddingVertical: buttonPadding } };
let closure_6 = createStyles.createStyles(ButtonConstants);
const __initData = {
  code: "function CollapsibleFloatingActionButtonNativeTsx1(){const{FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING}=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,'animate-always'),paddingVertical:FAB_PADDING_VERTICAL};}",
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/experimental/Button/native/CollapsibleFloatingActionButton.native.tsx",
);

export const CollapsibleFloatingActionButton = function CollapsibleFloatingActionButton(arg0) {
  ({ icon, positionBottom, positionRight, text, state } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({ icon: 0, positionBottom: 0, positionRight: 0, text: 0, state: 0 }),
  );
  let obj = FloatingActionButton;
  let obj1 = noop;
  const styles = obj.useStyles();
  let cloneElementResult = icon;
  if (noop.isValidElement(icon)) {
    obj = { color: nativeDefault.colors.WHITE };
    cloneElementResult = obj1.cloneElement(icon, obj);
  }
  const items = [styles.button];
  if (positionRight == null) {
    positionRight = tmp3(8909).DEFAULT_POSITION_OFFSET;
  }
  const rect = { position: "absolute", right: positionRight, bottom: null };
  if (positionBottom == null) {
    positionBottom = tmp3(8909).DEFAULT_POSITION_OFFSET;
  }
  rect.bottom = positionBottom;
  items[1] = rect;
  if (null != state) {
    obj = {};
    const merged1 = Object.assign(merged);
    obj.state = state;
    obj.text = text;
    obj.style = items;
    obj.icon = cloneElementResult;
    let tmp12 = <CollapsableButton />;
  } else {
    obj1 = {};
    const merged2 = Object.assign(merged);
    obj1.text = text;
    obj1.size = "lg";
    obj1.variant = "primary";
    obj1.textVariant = "text-md/semibold";
    obj1.icon = cloneElementResult;
    obj1.style = items;
    obj1.pillStyle = tmp2.textButtonPill;
    tmp12 = jsx(tmp3(4976).BaseTextButton, {});
  }
  return tmp12;
};
