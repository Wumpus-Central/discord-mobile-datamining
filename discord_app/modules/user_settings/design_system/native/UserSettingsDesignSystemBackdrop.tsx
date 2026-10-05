// === Module 15677: UserSettingsDesignSystemBackdrop ===

// Module 15677 (UserSettingsDesignSystemBackdrop)
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import Card_Card from "Card/Card" /* 5995 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, setShowBackdrop;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ ScrollView: closure_4, View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 16 }, backdropContent: obj2 };
obj2 = { alignItems: "stretch", justifyContent: "center", padding: 16 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((setShowBackdrop) => {
  let blur;
  let buttonLabel;
  let description;
  let items;
  let obj5;
  let title;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(15);
  ({ buttonLabel, title, description, blur } = setShowBackdrop);
  setShowBackdrop = setShowBackdrop.setShowBackdrop;
  const setBlurAmount = setShowBackdrop.setBlurAmount;
  if (cResult[0] !== title) {
    const obj2 = { variant: "heading-lg/bold", children: title };
    const tmp6 = metroRequire(Text_Text.Text, obj2);
    cResult[0] = title;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== description) {
    const obj3 = { variant: "text-md/normal", color: "text-subtle", children: description };
    const tmp9 = metroRequire(Text_Text.Text, obj3);
    cResult[2] = description;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === blur) {
    if (cResult[5] === setBlurAmount) {
      let tmp10;
      if (cResult[6] === setShowBackdrop) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === buttonLabel) {
        let tmp11;
        if (cResult[9] === tmp10) {
          tmp11 = cResult[10];
        }
        if (cResult[11] === tmp4) {
          if (cResult[12] === tmp7) {
            let tmp14;
            if (cResult[13] === tmp11) {
              tmp14 = cResult[14];
            }
            return tmp14;
          }
        }
        const obj4 = { children: metroImportDefault(Stack_Stack.Stack, obj5) };
        const Card = Card_Card.Card;
        obj5 = { spacing: 12, children: items };
        items = [tmp4, tmp7, tmp11];
        const tmp17 = metroRequire(Card, obj4);
        cResult[11] = tmp4;
        cResult[12] = tmp7;
        cResult[13] = tmp11;
        cResult[14] = tmp17;
        tmp14 = tmp17;
      }
      const obj6 = { text: buttonLabel, onPress: tmp10 };
      const tmp13 = metroRequire(components_Button_Button.Button, obj6);
      cResult[8] = buttonLabel;
      cResult[9] = tmp10;
      cResult[10] = tmp13;
      tmp11 = tmp13;
    }
  }
  const fn = function l() {
    setBlurAmount(blur);
    setShowBackdrop(true);
  };
  cResult[4] = blur;
  cResult[5] = setBlurAmount;
  cResult[6] = setShowBackdrop;
  cResult[7] = fn;
  tmp10 = fn;
}) : ((arg0) => {
  let Stack;
  let buttonLabel;
  let closure_129_0;
  let closure_129_1;
  let closure_129_2;
  let description;
  let items;
  let obj2;
  let title;
  ({ blur: closure_129_0, setShowBackdrop: closure_129_1, setBlurAmount: closure_129_2 } = arg0);
  ({ buttonLabel, title, description } = arg0);
  const obj = { children: metroImportDefault(Stack, obj2) };
  const Card = Card_Card.Card;
  obj2 = { spacing: 12, children: items };
  Stack = Stack_Stack.Stack;
  items = [metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: title }), metroRequire(Text_Text.Text, { variant: "text-md/normal", color: "text-subtle", children: description }), ];
  const obj3 = {
    text: buttonLabel,
    onPress() {
      closure_1_2(closure_1_0);
      closure_1_1(true);
    }
  };
  items[2] = metroRequire(components_Button_Button.Button, obj3);
  return metroRequire(Card, obj);
});
const __initData = { code: "function UserSettingsDesignSystemBackdropTsx1(){const{withSpring,showBackdrop,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,\"animate-always\")};}" };
const __initData2 = { code: "function UserSettingsDesignSystemBackdropTsx2(){const{withSpring,showBackdrop,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,'animate-always')};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Card;
  let closure_1;
  let first1;
  let items;
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj13;
  let showBackdrop;
  let tmp10;
  let tmp13;
  let tmp9;
  let obj = showBackdrop(576);
  const cResult = obj.c(10);
  const tmp4 = closure_8();
  const tmp5 = _slicedToArray(react.useState(false), 2);
  showBackdrop = tmp5[0];
  dependencyMap = tmp7;
  [tmp9, tmp10] = react.useState("none");
  _slicedToArray(react.useState("none"), 2);
  const fn = function n() {
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (first) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, springPresets.SUBTLE_SPRING, "animate-always") };
    return obj;
  };
  const obj2 = showBackdrop(4612);
  fn.__closure = { withSpring: showBackdrop(5597).withSpring, showBackdrop, SUBTLE_SPRING: showBackdrop(5598).SUBTLE_SPRING };
  fn.__workletHash = 7978288613287;
  fn.__initData = __initData;
  ({ withSpring: showBackdrop(5597).withSpring, showBackdrop, SUBTLE_SPRING: showBackdrop(5598).SUBTLE_SPRING });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      closure_1(false);
    };
    let num = 0;
    cResult[0] = fn2;
    first1 = fn2;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { spacing: 24, children: items };
    const obj5 = { title: "Backdrop", description: "A backdrop is an overlay that appears behind a component to provide separation between the component and the rest of the interface. By default it is a semi-transparent overlay.", buttonLabel: "Show Backdrop", blur: "none", setShowBackdrop: tmp5[1], setBlurAmount: tmp10 };
    const Stack = tmp(5593).Stack;
    items = [closure_6(closure_9, obj5), , ];
    const obj6 = { title: "Subtle Blur", description: "Backdrop also supports blur. You can use a subtle blur for a lite-touch obfuscation, like for Context Menus that help create seperation but don't completly lift you out of the context", buttonLabel: "Show Subtle Blur Backdrop", blur: "subtle", setShowBackdrop: tmp5[1], setBlurAmount: tmp10 };
    items[1] = closure_6(closure_9, obj6);
    const obj7 = { title: "Strong Blur", description: "You can use a strong blur for places where you want to completly lift the user out of the context, like for modals", buttonLabel: "Show Strong Blur Backdrop", blur: "strong", setShowBackdrop: tmp5[1], setBlurAmount: tmp10 };
    items[2] = closure_6(closure_9, obj7);
    const tmp17 = closure_7(Stack, obj4);
    cResult[1] = tmp17;
    tmp13 = tmp17;
  } else {
    tmp13 = cResult[1];
  }
  if (cResult[2] === animatedStyle) {
    if (cResult[3] === tmp9) {
      if (cResult[4] === showBackdrop) {
        let tmp18;
        if (cResult[5] === tmp4.backdropContent) {
          tmp18 = cResult[6];
        }
        if (cResult[7] === tmp4.container) {
          let tmp23;
          if (cResult[8] === tmp18) {
            tmp23 = cResult[9];
          }
          return tmp23;
        }
        const obj8 = { contentContainerStyle: tmp4.container, children: items1 };
        items1 = [tmp13, tmp18];
        const tmp26 = closure_7(closure_4, obj8);
        cResult[7] = tmp4.container;
        cResult[8] = tmp18;
        cResult[9] = tmp26;
        tmp23 = tmp26;
      }
    }
  }
  let tmp19 = showBackdrop;
  if (tmp19) {
    const obj9 = { onDismiss: first1, children: items2 };
    const Dialog = tmp(5766).Dialog;
    const obj10 = { style: animatedStyle, blur: tmp9, onDismiss: first1 };
    items2 = [closure_6(tmp(5771).Backdrop, obj10), ];
    const obj11 = { style: tmp4.backdropContent, pointerEvents: "box-none", children: closure_6(Card, obj12) };
    obj12 = { children: closure_7(showBackdrop(4886).Text, obj13) };
    Card = tmp(5995).Card;
    obj13 = { variant: "text-md/normal", children: items3 };
    items3 = ["blur style: ", tmp9];
    items2[1] = closure_6(closure_5, obj11);
    tmp19 = closure_7(Dialog, obj9);
  }
  cResult[2] = animatedStyle;
  cResult[3] = tmp9;
  cResult[4] = showBackdrop;
  cResult[5] = tmp4.backdropContent;
  cResult[6] = tmp19;
  tmp18 = tmp19;
}) : (() => {
  let Card;
  let closure_1;
  let items;
  let items1;
  let items2;
  let items3;
  let obj8;
  let obj9;
  let tmp6;
  let tmp7;
  const tmp = closure_8();
  const tmp2 = _slicedToArray(react.useState(false), 2);
  let showBackdrop = tmp2[0];
  dependencyMap = tmp4;
  [tmp6, tmp7] = react.useState("none");
  _slicedToArray(react.useState("none"), 2);
  let obj = showBackdrop(4612);
  const fn = function n() {
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (first) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, springPresets.SUBTLE_SPRING, "animate-always") };
    return obj;
  };
  fn.__closure = { withSpring: showBackdrop(5597).withSpring, showBackdrop, SUBTLE_SPRING: showBackdrop(5598).SUBTLE_SPRING };
  fn.__workletHash = 5659195678596;
  fn.__initData = __initData2;
  const obj3 = { contentContainerStyle: tmp.container, children: items1 };
  ({ withSpring: showBackdrop(5597).withSpring, showBackdrop, SUBTLE_SPRING: showBackdrop(5598).SUBTLE_SPRING });
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj4 = { spacing: 24, children: items };
  const Stack = showBackdrop(5593).Stack;
  items = [closure_6(closure_9, { title: "Backdrop", description: "A backdrop is an overlay that appears behind a component to provide separation between the component and the rest of the interface. By default it is a semi-transparent overlay.", buttonLabel: "Show Backdrop", blur: "none", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 }), closure_6(closure_9, { title: "Subtle Blur", description: "Backdrop also supports blur. You can use a subtle blur for a lite-touch obfuscation, like for Context Menus that help create seperation but don't completly lift you out of the context", buttonLabel: "Show Subtle Blur Backdrop", blur: "subtle", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 }), closure_6(closure_9, { title: "Strong Blur", description: "You can use a strong blur for places where you want to completly lift the user out of the context, like for modals", buttonLabel: "Show Strong Blur Backdrop", blur: "strong", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 })];
  items1 = [closure_7(Stack, obj4), ];
  if (showBackdrop) {
    function handleClose() {
      closure_1(false);
    }
    const obj5 = { onDismiss: handleClose, children: items2 };
    const Dialog = tmp8(5766).Dialog;
    const obj6 = { style: animatedStyle, blur: tmp6, onDismiss: handleClose };
    items2 = [closure_6(showBackdrop(5771).Backdrop, obj6), ];
    const obj7 = { style: tmp.backdropContent, pointerEvents: "box-none", children: closure_6(Card, obj8) };
    obj8 = { children: closure_7(showBackdrop(4886).Text, obj9) };
    Card = tmp8(5995).Card;
    obj9 = { variant: "text-md/normal", children: items3 };
    items3 = ["blur style: ", tmp6];
    items2[1] = closure_6(closure_5, obj7);
    showBackdrop = closure_7(Dialog, obj5);
  }
  items1[1] = showBackdrop;
  return closure_7(closure_4, obj3);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx");

export default tmp6;