// === Module 8573: CollapsibleFloatingActionButton ===

// Module 8573 (CollapsibleFloatingActionButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import BaseTextButton2 from "BaseTextButton" /* 5595 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import FloatingActionButton from "FloatingActionButton" /* 8574 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["state", "style"];
let closure_4 = ["icon", "positionBottom", "positionRight", "text", "state"];
const jsx = Fragment.jsx;
const getButtonPadding = ButtonConstants.getButtonPadding;
const buttonPadding = getButtonPadding(ButtonConstants.FAB_BUTTON_SIZE, ButtonConstants.FAB_BUTTON_ICON_SIZE);
let obj = { textButtonPill: { paddingHorizontal: 20, paddingVertical: buttonPadding } };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function CollapsibleFloatingActionButtonNativeTsx1(){const{FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING}=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,\"animate-always\"),paddingVertical:FAB_PADDING_VERTICAL};}" };
const __initData2 = { code: "function CollapsibleFloatingActionButtonNativeTsx2(){const{FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING}=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,'animate-always'),paddingVertical:FAB_PADDING_VERTICAL};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let collapseText;
  let state;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  const tmp = collapseText;
  let obj = collapseText(576);
  const cResult = obj.c(9);
  if (cResult[0] !== arg0) {
    ({ state, style } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = state;
    class I {
      constructor() {
        obj = { minWidth: closure_0(closure_2[3]).FAB_BUTTON_SIZE, minHeight: closure_0(closure_2[3]).FAB_BUTTON_SIZE, paddingHorizontal: null, paddingVertical: null };
        tmp = closure_0(closure_2[8]);
        withSpring = tmp.withSpring;
        obj2 = closure_0(closure_2[7]);
        items = [20];
        items[1] = closure_8;
        interpolateResult = obj2.interpolate(collapseText.get(), [0, 1], items);
        obj.paddingHorizontal = withSpring(interpolateResult, closure_0(closure_2[9]).SUBTLE_SPRING, "animate-always");
        obj.paddingVertical = closure_8;
        return obj;
      }
    }
    cResult[3] = style;
    tmp6 = style;
    tmp5 = state;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  collapseText = tmp5.collapseText;
  const tmpResult = tmp(4612);
  class I {
    constructor() {
      obj = { minWidth: closure_0(closure_2[3]).FAB_BUTTON_SIZE, minHeight: closure_0(closure_2[3]).FAB_BUTTON_SIZE, paddingHorizontal: null, paddingVertical: null };
      tmp = closure_0(closure_2[8]);
      withSpring = tmp.withSpring;
      obj2 = closure_0(closure_2[7]);
      items = [20];
      items[1] = closure_8;
      interpolateResult = obj2.interpolate(collapseText.get(), [0, 1], items);
      obj.paddingHorizontal = withSpring(interpolateResult, closure_0(closure_2[9]).SUBTLE_SPRING, "animate-always");
      obj.paddingVertical = closure_8;
      return obj;
    }
  }
  let obj2 = { FAB_BUTTON_SIZE: tmp(5600).FAB_BUTTON_SIZE, withSpring: tmp(5597).withSpring, interpolate: tmp(4612).interpolate, collapseText, FAB_PADDING_HORIZONTAL: 20, FAB_PADDING_VERTICAL: buttonPadding, SUBTLE_SPRING: tmp(5598).SUBTLE_SPRING };
  I.__closure = obj2;
  I.__workletHash = 14478886959428;
  I.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(I);
  if (cResult[4] === animatedStyle) {
    if (cResult[5] === collapseText) {
      if (cResult[6] === tmp4) {
        let tmp11;
        if (cResult[7] === tmp6) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
  }
  const BaseTextButton = tmp(5595).BaseTextButton;
  const merged = Object.assign(tmp4);
  const tmp13 = <BaseTextButton size="lg" variant="primary" textVariant="text-md/semibold" collapseText={collapseText} style={tmp6} pillStyle={animatedStyle} />;
  cResult[4] = animatedStyle;
  cResult[5] = collapseText;
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = tmp13;
  tmp11 = tmp13;
}) : ((arg0) => {
  let state;
  let style;
  ({ state, style } = arg0);
  const collapseText = state.collapseText;
  const merged = Object.assign(arg0, Object.assign({ state: 0, style: 0 }));
  let obj = collapseText(4612);
  const fn = function o() {
    let interpolateResult;
    let withSpring;
    const obj = { minWidth: ButtonConstants.FAB_BUTTON_SIZE, minHeight: ButtonConstants.FAB_BUTTON_SIZE, paddingHorizontal: withSpring(interpolateResult, springPresets.SUBTLE_SPRING, "animate-always"), paddingVertical: buttonPadding };
    withSpring = spring.withSpring;
    spring;
    const items = [20, buttonPadding];
    const obj2 = ReanimatedRexport;
    interpolateResult = obj2.interpolate(collapseText.get(), [0, 1], items);
    return obj;
  };
  let obj2 = { FAB_BUTTON_SIZE: collapseText(5600).FAB_BUTTON_SIZE, withSpring: collapseText(5597).withSpring, interpolate: collapseText(4612).interpolate, collapseText, FAB_PADDING_HORIZONTAL: 20, FAB_PADDING_VERTICAL: buttonPadding, SUBTLE_SPRING: collapseText(5598).SUBTLE_SPRING };
  fn.__closure = obj2;
  fn.__workletHash = 17167848237831;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const BaseTextButton = collapseText(5595).BaseTextButton;
  const merged1 = Object.assign(merged);
  return <BaseTextButton size="lg" variant="primary" textVariant="text-md/semibold" collapseText={collapseText} style={style} pillStyle={animatedStyle} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let DEFAULT_POSITION_OFFSET;
  let DEFAULT_POSITION_OFFSET2;
  let icon;
  let positionBottom;
  let positionRight;
  let state;
  let text;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(28);
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
    tmp7 = text;
    tmp6 = state;
    tmp5 = tmp10;
    DEFAULT_POSITION_OFFSET2 = positionRight;
    DEFAULT_POSITION_OFFSET = positionBottom;
    tmp4 = icon;
  } else {
    tmp4 = cResult[1];
    DEFAULT_POSITION_OFFSET = cResult[2];
    DEFAULT_POSITION_OFFSET2 = cResult[3];
    tmp5 = cResult[4];
    tmp6 = cResult[5];
    tmp7 = cResult[6];
  }
  const tmp11 = closure_9();
  const tmpResult = FloatingActionButton;
  const styles = tmpResult.useStyles();
  let tmp13 = tmp4;
  if (react.isValidElement(tmp4)) {
    let tmp14;
    if (cResult[7] !== tmp4) {
      let tmp16;
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { color: nativeDefault.colors.WHITE };
        cResult[9] = obj2;
        tmp16 = obj2;
      } else {
        tmp16 = cResult[9];
      }
      const cloneElementResult = react.cloneElement(tmp4, tmp16);
      cResult[7] = tmp4;
      cResult[8] = cloneElementResult;
      tmp14 = cloneElementResult;
    } else {
      tmp14 = cResult[8];
    }
    tmp13 = tmp14;
  }
  if (DEFAULT_POSITION_OFFSET2 == null) {
    DEFAULT_POSITION_OFFSET2 = FloatingActionButton.DEFAULT_POSITION_OFFSET;
  }
  if (DEFAULT_POSITION_OFFSET == null) {
    DEFAULT_POSITION_OFFSET = FloatingActionButton.DEFAULT_POSITION_OFFSET;
  }
  if (cResult[10] === DEFAULT_POSITION_OFFSET2) {
    let tmp19;
    if (cResult[11] === DEFAULT_POSITION_OFFSET) {
      tmp19 = cResult[12];
    }
    if (cResult[13] === styles.button) {
      let tmp20;
      let tmp21;
      if (cResult[14] === tmp19) {
        tmp20 = cResult[15];
      }
      if (null != tmp6) {
        if (cResult[16] === tmp20) {
          if (cResult[17] === tmp13) {
            if (cResult[18] === tmp5) {
              if (cResult[19] === tmp6) {
                let tmp27;
                if (cResult[20] === tmp7) {
                  tmp27 = cResult[21];
                }
                tmp21 = tmp27;
              }
            }
          }
        }
        const merged = Object.assign(tmp5);
        const tmp33 = <closure_12 state={tmp6} text={tmp7} style={tmp20} icon={tmp13} />;
        cResult[16] = tmp20;
        cResult[17] = tmp13;
        cResult[18] = tmp5;
        cResult[19] = tmp6;
        cResult[20] = tmp7;
        cResult[21] = tmp33;
        tmp27 = tmp33;
      } else {
        if (cResult[22] === tmp20) {
          if (cResult[23] === tmp13) {
            if (cResult[24] === tmp5) {
              if (cResult[25] === tmp11.textButtonPill) {
                if (cResult[26] === tmp7) {
                  tmp21 = cResult[27];
                }
              }
            }
          }
        }
        const BaseTextButton = BaseTextButton2.BaseTextButton;
        const merged1 = Object.assign(tmp5);
        const tmp26 = <BaseTextButton text={tmp7} size="lg" variant="primary" textVariant="text-md/semibold" icon={tmp13} style={tmp20} pillStyle={tmp11.textButtonPill} />;
        cResult[22] = tmp20;
        cResult[23] = tmp13;
        cResult[24] = tmp5;
        cResult[25] = tmp11.textButtonPill;
        cResult[26] = tmp7;
        cResult[27] = tmp26;
        tmp21 = tmp26;
      }
      return tmp21;
    }
    const items = [styles.button, tmp19];
    cResult[13] = styles.button;
    cResult[14] = tmp19;
    cResult[15] = items;
    tmp20 = items;
  }
  const rect = { position: "absolute", right: DEFAULT_POSITION_OFFSET2, bottom: DEFAULT_POSITION_OFFSET };
  cResult[10] = DEFAULT_POSITION_OFFSET2;
  cResult[11] = DEFAULT_POSITION_OFFSET;
  cResult[12] = rect;
  tmp19 = rect;
}) : ((arg0) => {
  let icon;
  let positionBottom;
  let positionRight;
  let state;
  let text;
  let tmp13;
  ({ icon, positionBottom, positionRight, text, state } = arg0);
  const merged = Object.assign(arg0, Object.assign({ icon: 0, positionBottom: 0, positionRight: 0, text: 0, state: 0 }));
  const tmp2 = closure_9();
  const obj = FloatingActionButton;
  const styles = obj.useStyles();
  let cloneElementResult = icon;
  if (react.isValidElement(icon)) {
    const cloneElement = react.cloneElement;
    const obj2 = { color: nativeDefault.colors.WHITE };
    cloneElementResult = cloneElement(icon, obj2);
  }
  const items = [styles.button, ];
  if (positionRight == null) {
    positionRight = FloatingActionButton.DEFAULT_POSITION_OFFSET;
  }
  const rect = { position: "absolute", right: positionRight, bottom: positionBottom };
  if (positionBottom == null) {
    positionBottom = FloatingActionButton.DEFAULT_POSITION_OFFSET;
  }
  items[1] = rect;
  if (null != state) {
    const merged1 = Object.assign(merged);
    tmp13 = <closure_12 state={state} text={text} style={items} icon={cloneElementResult} />;
  } else {
    const BaseTextButton = BaseTextButton2.BaseTextButton;
    const merged2 = Object.assign(merged);
    tmp13 = <BaseTextButton text={text} size="lg" variant="primary" textVariant="text-md/semibold" icon={cloneElementResult} style={items} pillStyle={tmp2.textButtonPill} />;
  }
  return tmp13;
});
const result = size.fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButton.native.tsx");

export const CollapsibleFloatingActionButton = tmp4;