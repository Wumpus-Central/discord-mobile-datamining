// === Module 18055: UserSettingsDesignSystemBackdrop ===

// Module 18055 (UserSettingsDesignSystemBackdrop)
import _mod1652 from "module_1652" /* 1652 */;
import Backdrop from "Backdrop" /* 5734 */;
import Text_Text from "Text/Text" /* 5761 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import spring_spring from "spring/spring" /* 5771 */;
import springPresets from "springPresets" /* 5772 */;
import Dialog from "Dialog" /* 6152 */;
import Stack_Stack from "Stack/Stack" /* 6162 */;
import Card from "Card" /* 7118 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function BackdropCard(arg0) {
  ({ blur: require, setShowBackdrop: dependencyMap, setBlurAmount: _slicedToArray } = arg0);
  ({ buttonLabel, title, description } = arg0);
  const obj = { children: null };
  const obj2 = { spacing: 12, children: null };
  items = [
    timestampProducer(Text_Text.Text, { variant: "heading-lg/semibold", children: title }),
    timestampProducer(Text_Text.Text, { variant: "body-md/normal", color: "text-subtle", children: description }),
    timestampProducer(components_Button_Button.Button, {
      text: buttonLabel,
      onPress() {
        _slicedToArray(require);
        dependencyMap(true);
      }
    })
  ];
  obj2.children = items;
  obj.children = metroImportDefault(Stack_Stack.Stack, obj2);
  return timestampProducer(Card.Card, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5141);
let obj2 = { container: { padding: 16 }, backdropContent: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "stretch";
obj3.justifyContent = "center";
obj3.padding = 16;
obj2.backdropContent = obj3;
let closure_8 = createStyles.createStyles(obj2);
let closure_10 = { code: "(function UserSettingsDesignSystemBackdropTsx1(){let[withSpring,showBackdrop,SUBTLE_SPRING]=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,'animate-always')};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx");

export default function UserSettingsDesignSystemBackdrop() {
  const tmp = closure_8();
  [tmp3, tmp4] = noop.useState(false);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [tmp6, tmp7] = noop.useState("none");
  const tmp5 = _slicedToArray(noop.useState("none"), 2);
  items = [closure_10, spring_spring.withSpring, tmp15Result, springPresets.SUBTLE_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp10, tmp11, tmp12, tmp13] = items;
  class UserSettingsDesignSystemBackdropTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2, "animate-always") };
      return obj;
    }
  }
  const items1 = [tmp11, tmp12, tmp13];
  UserSettingsDesignSystemBackdropTsx1.__closure = items1;
  UserSettingsDesignSystemBackdropTsx1.__workletHash = 10294771591742;
  UserSettingsDesignSystemBackdropTsx1.__initData = tmp10;
  const obj2 = { contentContainerStyle: tmp.container, children: null };
  const animatedStyle = _mod1652.useAnimatedStyle(UserSettingsDesignSystemBackdropTsx1);
  const obj3 = { spacing: 24, children: null };
  const items2 = [timestampProducer(BackdropCard, { title: "Backdrop", description: "A backdrop is an overlay that appears behind a component to provide separation between the component and the rest of the interface. By default it is a semi-transparent overlay.", buttonLabel: "Show Backdrop", blur: "none", setShowBackdrop: tmp4, setBlurAmount: tmp7 }), timestampProducer(BackdropCard, { title: "Subtle Blur", description: "Backdrop also supports blur. You can use a subtle blur for a lite-touch obfuscation, like for Context Menus that help create seperation but don't completly lift you out of the context", buttonLabel: "Show Subtle Blur Backdrop", blur: "subtle", setShowBackdrop: tmp4, setBlurAmount: tmp7 }), timestampProducer(BackdropCard, { title: "Strong Blur", description: "You can use a strong blur for places where you want to completly lift the user out of the context, like for modals", buttonLabel: "Show Strong Blur Backdrop", blur: "strong", setShowBackdrop: tmp4, setBlurAmount: tmp7 })];
  obj3.children = items2;
  const items3 = [metroImportDefault(Stack_Stack.Stack, obj3), ];
  if (tmp15Result) {
    function handleClose() {
      _undefined(false);
    }
    const obj4 = { onDismiss: handleClose, children: null };
    const obj5 = { style: animatedStyle, blur: tmp6, onDismiss: handleClose };
    const items4 = [timestampProducer(Backdrop.Backdrop, obj5), ];
    const obj6 = { style: tmp.backdropContent, pointerEvents: "box-none", children: null };
    const obj7 = { children: null };
    const obj8 = { variant: "body-md/normal", children: null };
    const items5 = ["blur style: ", tmp6];
    obj8.children = items5;
    obj7.children = metroImportDefault(Text_Text.Text, obj8);
    obj6.children = timestampProducer(Card.Card, obj7);
    items4[1] = timestampProducer(hasOwnProperty, obj6);
    obj4.children = items4;
    tmp15Result = metroImportDefault(Dialog.Dialog, obj4);
  }
  items3[1] = tmp15Result;
  obj2.children = items3;
  return metroImportDefault(React4, obj2);
};