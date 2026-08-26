// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx
import Text from "../../../../design/components/Text/native/Text.tsx";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import PressableCard from "../../../../design/components/Card/native/Card.native.tsx";
import closure_2 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function BackdropCard(arg0) {
  ({ blur: require, setShowBackdrop: dependencyMap, setBlurAmount: closure_2 } = arg0);
  ({ buttonLabel, title, description } = arg0);
  let obj = { children: null };
  obj = { spacing: 12, children: null };
  const items = [callback2(Text.Text, { variant: "heading-lg/bold", children: title }), callback2(Text.Text, { variant: "text-md/normal", color: "text-subtle", children: description }), ];
  obj = {
    text: buttonLabel,
    onPress() {
      callback2(closure_0);
      callback(true);
    }
  };
  items[2] = callback2(Button.Button, obj);
  obj[1] = items;
  obj[0] = callback3(Stack.Stack, obj);
  return callback2(PressableCard.Card, obj);
}
({ ScrollView: c4, View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { padding: 16 }, backdropContent: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.alignItems = "stretch";
createCacheKey.justifyContent = "center";
createCacheKey.padding = 16;
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function UserSettingsDesignSystemBackdropTsx1(){const{withSpring,showBackdrop,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,'animate-always')};}" };
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx");

export default function UserSettingsDesignSystemBackdrop() {
  const tmp = callback4();
  const tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  dependencyMap = tmp4;
  [tmp6, tmp7] = callback(React.useState("none"), 2);
  let obj = first(4184);
  const fn = function n() {
    let obj = first(4878);
    let num = 0;
    if (first) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, first(4882).SUBTLE_SPRING, "animate-always") };
    return obj;
  };
  obj = { withSpring: first(4878).withSpring, showBackdrop: first, SUBTLE_SPRING: first(4882).SUBTLE_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 1929832617927;
  fn.__initData = closure_10;
  obj = { contentContainerStyle: tmp.container, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj1 = { spacing: 24, children: null };
  const items = [callback2(BackdropCard, { title: "Backdrop", description: "A backdrop is an overlay that appears behind a component to provide separation between the component and the rest of the interface. By default it is a semi-transparent overlay.", buttonLabel: "Show Backdrop", blur: "none", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 }), callback2(BackdropCard, { title: "Subtle Blur", description: "Backdrop also supports blur. You can use a subtle blur for a lite-touch obfuscation, like for Context Menus that help create seperation but don't completly lift you out of the context", buttonLabel: "Show Subtle Blur Backdrop", blur: "subtle", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 }), callback2(BackdropCard, { title: "Strong Blur", description: "You can use a strong blur for places where you want to completly lift the user out of the context, like for modals", buttonLabel: "Show Strong Blur Backdrop", blur: "strong", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 })];
  obj1[1] = items;
  const items1 = [callback3(first(4877).Stack, obj1), ];
  if (first) {
    function handleClose() {
      dependencyMap(false);
    }
    const obj2 = { onDismiss: null, children: null };
    obj2[0] = handleClose;
    const obj3 = { style: null, blur: null, onDismiss: null };
    obj3[0] = animatedStyle;
    obj3[1] = tmp6;
    obj3[2] = handleClose;
    const items2 = [tmp13(tmp8(4867).Backdrop, obj3), ];
    const obj4 = { style: null, pointerEvents: "box-none", children: null };
    obj4[0] = tmp.backdropContent;
    const obj5 = { children: null };
    const obj6 = { variant: "text-md/normal", children: null };
    const items3 = ["blur style: ", tmp6];
    obj6[1] = items3;
    obj5[0] = tmp11(tmp8(4440).Text, obj6);
    obj4[2] = tmp13(tmp8(5548).Card, obj5);
    items2[1] = tmp13(closure_5, obj4);
    obj2[1] = items2;
    first = tmp11(tmp8(4862).Dialog, obj2);
  }
  items1[1] = first;
  obj[1] = items1;
  return callback3(closure_4, obj);
};