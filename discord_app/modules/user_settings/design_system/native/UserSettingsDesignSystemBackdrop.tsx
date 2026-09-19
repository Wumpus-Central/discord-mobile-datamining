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
  const obj = { children: null };
  const obj2 = { spacing: 12, children: null };
  const items = [
    timestampProducer(Text_Text.Text, { variant: "heading-lg/bold", children: title }),
    timestampProducer(Text_Text.Text, { variant: "text-md/normal", color: "text-subtle", children: description }),
    timestampProducer(components_Button_Button.Button, {
      text: buttonLabel,
      onPress() {
        _slicedToArray(require);
        dependencyMap(true);
      },
    }),
  ];
  obj2.children = items;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return timestampProducer(Card.Card, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { padding: 16 }, backdropContent: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "stretch";
obj3.justifyContent = "center";
obj3.padding = 16;
obj2.backdropContent = obj3;
let closure_8 = createStyles.createStyles(obj2);
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
  [tmp6, tmp7] = noop.useState("none");
  const tmp5 = _slicedToArray(noop.useState("none"), 2);
  const fn = function n() {
    let num = 0;
    if (first) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always") };
  };
  let obj = showBackdrop(4492);
  fn.__closure = {
    withSpring: showBackdrop(5185).withSpring,
    showBackdrop,
    SUBTLE_SPRING: showBackdrop(5189).SUBTLE_SPRING,
  };
  fn.__workletHash = 1929832617927;
  fn.__initData = __initData;
  const obj3 = { contentContainerStyle: tmp.container, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj4 = { spacing: 24, children: null };
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
  obj4.children = items;
  const items1 = [closure_7(showBackdrop(5184).Stack, obj4)];
  if (showBackdrop) {
    function handleClose() {
      closure_1(false);
    }
    const obj5 = { onDismiss: handleClose, children: null };
    const obj6 = { style: animatedStyle, blur: tmp6, onDismiss: handleClose };
    const items2 = [closure_6(tmp8(5172).Backdrop, obj6)];
    const obj7 = { style: tmp.backdropContent, pointerEvents: "box-none", children: null };
    const obj8 = { children: null };
    const obj9 = { variant: "text-md/normal", children: null };
    const items3 = ["blur style: ", tmp6];
    obj9.children = items3;
    obj8.children = closure_7(tmp8(4752).Text, obj9);
    obj7.children = closure_6(tmp8(5819).Card, obj8);
    items2[1] = closure_6(closure_5, obj7);
    obj5.children = items2;
    showBackdrop = closure_7(tmp8(5167).Dialog, obj5);
  }
  items1[1] = showBackdrop;
  obj3.children = items1;
  return closure_7(closure_4, obj3);
}
