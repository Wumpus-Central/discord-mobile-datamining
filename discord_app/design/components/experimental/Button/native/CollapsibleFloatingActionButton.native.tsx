// === Module 8547: CollapsibleFloatingActionButton ===

// Module 8547 (CollapsibleFloatingActionButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import spring from "spring" /* 5378 */;
import BaseTextButton from "BaseTextButton" /* 5380 */;
import springPresets from "springPresets" /* 5382 */;
import ButtonConstants2 from "ButtonConstants" /* 5384 */;
import FloatingActionButton from "FloatingActionButton" /* 8548 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["state", "style"];
let closure_4 = ["icon", "positionBottom", "positionRight", "text", "state"];
const jsx = fn(21).jsx;
const ButtonConstants = fn(5384);
const buttonPadding = ButtonConstants.getButtonPadding(fn(5384).FAB_BUTTON_SIZE, fn(5384).FAB_BUTTON_ICON_SIZE);
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({ textButtonPill: { paddingHorizontal: 20, paddingVertical: buttonPadding } });
const __initData = { code: "function CollapsibleFloatingActionButtonNativeTsx1(){const{FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING}=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,\"animate-always\"),paddingVertical:FAB_PADDING_VERTICAL};}" };
const __initData2 = { code: "function CollapsibleFloatingActionButtonNativeTsx2(){const{FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING}=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,'animate-always'),paddingVertical:FAB_PADDING_VERTICAL};}" };
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollapsableButton(arg0) {
  const cResult = collapseText(576).c(9);
  if (cResult[0] !== arg0) {
    ({ state, style } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = state;
    class I {
      constructor() {
        obj = { minWidth: closure_0(closure_2[3]).FAB_BUTTON_SIZE, minHeight: closure_0(closure_2[3]).FAB_BUTTON_SIZE, paddingHorizontal: null, paddingVertical: null };
        obj2 = closure_0(closure_2[8]);
        obj3 = closure_0(closure_2[7]);
        items = [20];
        items[1] = closure_8;
        interpolateResult = obj3.interpolate(collapseText.get(), [0, 1], items);
        obj.paddingHorizontal = obj2.withSpring(interpolateResult, closure_0(closure_2[9]).SUBTLE_SPRING, "animate-always");
        obj.paddingVertical = closure_8;
        return obj;
      }
    }
    cResult[3] = style;
    let tmp6 = style;
    let tmp5 = state;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  collapseText = tmp5.collapseText;
  let obj = collapseText(576);
  class I {
    constructor() {
      obj = { minWidth: closure_0(closure_2[3]).FAB_BUTTON_SIZE, minHeight: closure_0(closure_2[3]).FAB_BUTTON_SIZE, paddingHorizontal: null, paddingVertical: null };
      obj2 = closure_0(closure_2[8]);
      obj3 = closure_0(closure_2[7]);
      items = [20];
      items[1] = closure_8;
      interpolateResult = obj3.interpolate(collapseText.get(), [0, 1], items);
      obj.paddingHorizontal = obj2.withSpring(interpolateResult, closure_0(closure_2[9]).SUBTLE_SPRING, "animate-always");
      obj.paddingVertical = closure_8;
      return obj;
    }
  }
  const tmpResult = collapseText(4850);
  I.__closure = { FAB_BUTTON_SIZE: collapseText(5384).FAB_BUTTON_SIZE, withSpring: collapseText(5378).withSpring, interpolate: collapseText(4850).interpolate, collapseText, FAB_PADDING_HORIZONTAL: 20, FAB_PADDING_VERTICAL: buttonPadding, SUBTLE_SPRING: collapseText(5382).SUBTLE_SPRING };
  I.__workletHash = 14478886959428;
  I.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(I);
  if (cResult[4] === animatedStyle) {
    if (cResult[5] === collapseText) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp6) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
  }
  let obj3 = {};
  const merged = Object.assign(tmp4);
  obj3.size = "lg";
  obj3.variant = "primary";
  obj3.textVariant = "text-md/semibold";
  obj3.collapseText = collapseText;
  obj3.style = tmp6;
  obj3.pillStyle = animatedStyle;
  const tmp13 = jsx(collapseText(5380).BaseTextButton, {});
  cResult[4] = animatedStyle;
  cResult[5] = collapseText;
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = tmp13;
  tmp11 = tmp13;
  let obj2 = { FAB_BUTTON_SIZE: collapseText(5384).FAB_BUTTON_SIZE, withSpring: collapseText(5378).withSpring, interpolate: collapseText(4850).interpolate, collapseText, FAB_PADDING_HORIZONTAL: 20, FAB_PADDING_VERTICAL: buttonPadding, SUBTLE_SPRING: collapseText(5382).SUBTLE_SPRING };
}) : (function CollapsableButton(arg0) {
  ({ state, style } = arg0);
  const collapseText = state.collapseText;
  const merged = Object.assign(arg0, Object.assign({ state: 0, style: 0 }));
  const fn = function o() {
    const obj = { minWidth: ButtonConstants2.FAB_BUTTON_SIZE, minHeight: ButtonConstants2.FAB_BUTTON_SIZE, paddingHorizontal: null, paddingVertical: null };
    const obj2 = spring;
    const items = [20, buttonPadding];
    obj.paddingHorizontal = obj2.withSpring(ReanimatedRexport.interpolate(collapseText.get(), [0, 1], items), springPresets.SUBTLE_SPRING, "animate-always");
    obj.paddingVertical = buttonPadding;
    return obj;
  };
  let obj = collapseText(4850);
  fn.__closure = { FAB_BUTTON_SIZE: collapseText(5384).FAB_BUTTON_SIZE, withSpring: collapseText(5378).withSpring, interpolate: collapseText(4850).interpolate, collapseText, FAB_PADDING_HORIZONTAL: 20, FAB_PADDING_VERTICAL: buttonPadding, SUBTLE_SPRING: collapseText(5382).SUBTLE_SPRING };
  fn.__workletHash = 17167848237831;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.size = "lg";
  obj3.variant = "primary";
  obj3.textVariant = "text-md/semibold";
  obj3.collapseText = collapseText;
  obj3.style = style;
  obj3.pillStyle = animatedStyle;
  return jsx(collapseText(5380).BaseTextButton, {});
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButton.native.tsx");

export const CollapsibleFloatingActionButton = ReactCompilerGating.isReactCompilerEnabled() ? (function CollapsibleFloatingActionButton(arg0) {
  const cResult = c.c(28);
  if (cResult[0] !== arg0) {
    ({ icon, positionBottom, positionRight, text, state } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_4);
    cResult[0] = arg0;
    cResult[1] = icon;
    cResult[2] = positionBottom;
    cResult[3] = positionRight;
    cResult[4] = tmp10;
    cResult[5] = state;
    cResult[6] = text;
    let tmp7 = text;
    let tmp6 = state;
    let tmp5 = tmp10;
    let DEFAULT_POSITION_OFFSET2 = positionRight;
    let DEFAULT_POSITION_OFFSET = positionBottom;
    let tmp4 = icon;
  } else {
    tmp4 = cResult[1];
    DEFAULT_POSITION_OFFSET = cResult[2];
    DEFAULT_POSITION_OFFSET2 = cResult[3];
    tmp5 = cResult[4];
    tmp6 = cResult[5];
    tmp7 = cResult[6];
  }
  const tmp11 = closure_9();
  const styles = FloatingActionButton.useStyles();
  if (!noop.isValidElement(tmp4)) {
    if (DEFAULT_POSITION_OFFSET2 == null) {
      DEFAULT_POSITION_OFFSET2 = FloatingActionButton.DEFAULT_POSITION_OFFSET;
    }
    if (DEFAULT_POSITION_OFFSET == null) {
      DEFAULT_POSITION_OFFSET = FloatingActionButton.DEFAULT_POSITION_OFFSET;
    }
    if (cResult[10] === DEFAULT_POSITION_OFFSET2) {
      if (cResult[11] === DEFAULT_POSITION_OFFSET) {
        let tmp21 = cResult[12];
      }
      if (cResult[13] === styles.button) {
        if (cResult[14] === tmp21) {
          let tmp22 = cResult[15];
        }
        if (null != tmp6) {
          if (cResult[16] === tmp22) {
            if (cResult[17] === tmp13) {
              if (cResult[18] === tmp5) {
                if (cResult[19] === tmp6) {
                }
              }
            }
          }
          const obj2 = {};
          const merged = Object.assign(tmp5);
          obj2.state = tmp6;
          obj2.text = tmp7;
          obj2.style = tmp22;
          obj2.icon = tmp13;
          const tmp35 = <closure_12 />;
          cResult[16] = tmp22;
          cResult[17] = tmp13;
          cResult[18] = tmp5;
          cResult[19] = tmp6;
          cResult[20] = tmp7;
          cResult[21] = tmp35;
        } else {
          if (cResult[22] === tmp22) {
            if (cResult[23] === tmp13) {
              if (cResult[24] === tmp5) {
                if (cResult[25] === tmp11.textButtonPill) {
                  if (cResult[26] === tmp7) {
                    let tmp23 = cResult[27];
                  }
                  return tmp23;
                }
              }
            }
          }
          const obj4 = {};
          const merged1 = Object.assign(tmp5);
          obj4.text = tmp7;
          obj4.size = "lg";
          obj4.variant = "primary";
          obj4.textVariant = "text-md/semibold";
          obj4.icon = tmp13;
          obj4.style = tmp22;
          obj4.pillStyle = tmp11.textButtonPill;
          const tmp28 = jsx(BaseTextButton.BaseTextButton, {});
          cResult[22] = tmp22;
          cResult[23] = tmp13;
          cResult[24] = tmp5;
          cResult[25] = tmp11.textButtonPill;
          cResult[26] = tmp7;
          cResult[27] = tmp28;
          tmp23 = tmp28;
        }
      }
      const items = [styles.button, tmp21];
      cResult[13] = styles.button;
      cResult[14] = tmp21;
      cResult[15] = items;
      tmp22 = items;
    }
    const rect = { position: "absolute", right: DEFAULT_POSITION_OFFSET2, bottom: DEFAULT_POSITION_OFFSET };
    cResult[10] = DEFAULT_POSITION_OFFSET2;
    cResult[11] = DEFAULT_POSITION_OFFSET;
    cResult[12] = rect;
    tmp21 = rect;
  } else {
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { color: nativeDefault.colors.WHITE };
      cResult[9] = obj5;
      let tmp15 = obj5;
    } else {
      tmp15 = cResult[9];
    }
    const cloneElementResult = noop.cloneElement(tmp4, tmp15);
    cResult[7] = tmp4;
    cResult[8] = cloneElementResult;
  }
  const tmpResult = FloatingActionButton;
}) : (function CollapsibleFloatingActionButton(arg0) {
  ({ icon, positionBottom, positionRight, text, state } = arg0);
  const merged = Object.assign(arg0, Object.assign({ icon: 0, positionBottom: 0, positionRight: 0, text: 0, state: 0 }));
  const tmp2 = closure_9();
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
    let tmp12 = <closure_12 />;
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
});