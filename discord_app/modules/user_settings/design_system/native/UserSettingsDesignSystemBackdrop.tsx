// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function BackdropCard(arg0) {
  ({ blur: require, setShowBackdrop: dependencyMap, setBlurAmount: _slicedToArray } = arg0);
  ({ buttonLabel, title, description } = arg0);
  let obj = { children: null };
  obj = { spacing: 12, children: null };
  const items = [
    timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: title }),
    timestampProducer(Text_Text.Text, { variant: "text-md/normal", color: "text-subtle", children: description }),
  ];
  obj = {
    text: buttonLabel,
    onPress() {
      _slicedToArray(require);
      dependencyMap(true);
    },
  };
  items[2] = timestampProducer(components_Button_Button.Button, obj);
  obj.children = items;
  obj.children = React5(Stack_Stack.Stack, obj);
  return timestampProducer(Card.Card, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: { padding: 16 }, backdropContent: null };
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.alignItems = "stretch";
createStyles.justifyContent = "center";
createStyles.padding = 16;
createStyles.backdropContent = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function UserSettingsDesignSystemBackdropTsx1(){const{withSpring,showBackdrop,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,'animate-always')};}",
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx",
);

export default function UserSettingsDesignSystemBackdrop() {
  const tmp = closure_8();
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  let showBackdrop = tmp2[0];
  dependencyMap = tmp4;
  [tmp6, tmp7] = _slicedToArray(noop.useState("none"), 2);
  showBackdrop(4296);
  const fn = function n() {
    let obj = spring;
    let num = 0;
    if (first) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always") };
    return obj;
  };
  let obj = {
    withSpring: showBackdrop(4974).withSpring,
    showBackdrop,
    SUBTLE_SPRING: showBackdrop(4978).SUBTLE_SPRING,
  };
  fn.__closure = obj;
  fn.__workletHash = 1929832617927;
  fn.__initData = __initData;
  obj = { contentContainerStyle: tmp.container, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj1 = { spacing: 24, children: null };
  const items = [
    closure_6(BackdropCard, {
      title: "Backdrop",
      description:
        "A backdrop is an overlay that appears behind a component to provide separation between the component and the rest of the interface. By default it is a semi-transparent overlay.",
      buttonLabel: "Show Backdrop",
      blur: "none",
      setShowBackdrop: tmp2[1],
      setBlurAmount: tmp7,
    }),
    closure_6(BackdropCard, {
      title: "Subtle Blur",
      description:
        "Backdrop also supports blur. You can use a subtle blur for a lite-touch obfuscation, like for Context Menus that help create seperation but don't completly lift you out of the context",
      buttonLabel: "Show Subtle Blur Backdrop",
      blur: "subtle",
      setShowBackdrop: tmp2[1],
      setBlurAmount: tmp7,
    }),
    closure_6(BackdropCard, {
      title: "Strong Blur",
      description:
        "You can use a strong blur for places where you want to completly lift the user out of the context, like for modals",
      buttonLabel: "Show Strong Blur Backdrop",
      blur: "strong",
      setShowBackdrop: tmp2[1],
      setBlurAmount: tmp7,
    }),
  ];
  obj1.children = items;
  const items1 = [closure_7(showBackdrop(4973).Stack, obj1)];
  if (showBackdrop) {
    function handleClose() {
      closure_1(false);
    }
    const obj2 = { onDismiss: handleClose, children: null };
    const obj3 = { style: animatedStyle, blur: tmp6, onDismiss: handleClose };
    const items2 = [tmp13(tmp8(4963).Backdrop, obj3)];
    const obj4 = { style: tmp.backdropContent, pointerEvents: "box-none", children: null };
    const obj5 = { children: null };
    const obj6 = { variant: "text-md/normal", children: null };
    const items3 = ["blur style: ", tmp6];
    obj6.children = items3;
    obj5.children = tmp11(tmp8(4556).Text, obj6);
    obj4.children = tmp13(tmp8(5607).Card, obj5);
    items2[1] = tmp13(closure_5, obj4);
    obj2.children = items2;
    showBackdrop = tmp11(tmp8(4958).Dialog, obj2);
  }
  items1[1] = showBackdrop;
  obj.children = items1;
  return closure_7(closure_4, obj);
}
