// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { padding: 16 }, backdropContent: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "stretch";
obj3.justifyContent = "center";
obj3.padding = 16;
obj2.backdropContent = obj3;
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (setShowBackdrop) => {
      const cResult = c.c(15);
      ({ buttonLabel, title, description, blur } = setShowBackdrop);
      setShowBackdrop = setShowBackdrop.setShowBackdrop;
      const setBlurAmount = setShowBackdrop.setBlurAmount;
      if (cResult[0] !== title) {
        const obj2 = { variant: "heading-lg/bold", children: title };
        const tmp6 = timestampProducer(Text_Text.Text, obj2);
        cResult[0] = title;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== description) {
        const obj3 = { variant: "text-md/normal", color: "text-subtle", children: description };
        const tmp9 = timestampProducer(Text_Text.Text, obj3);
        cResult[2] = description;
        cResult[3] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === blur) {
        if (cResult[5] === setBlurAmount) {
          if (cResult[6] === setShowBackdrop) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] === buttonLabel) {
            if (cResult[9] === tmp10) {
              let tmp11 = cResult[10];
            }
            if (cResult[11] === tmp4) {
              if (cResult[12] === tmp7) {
                if (cResult[13] === tmp11) {
                  let tmp14 = cResult[14];
                }
                return tmp14;
              }
            }
            const obj4 = { children: null };
            const obj5 = { spacing: 12, children: null };
            const items = [tmp4, tmp7, tmp11];
            obj5.children = items;
            obj4.children = React5(Stack_Stack.Stack, obj5);
            const tmp17 = timestampProducer(Card.Card, obj4);
            cResult[11] = tmp4;
            cResult[12] = tmp7;
            cResult[13] = tmp11;
            cResult[14] = tmp17;
            tmp14 = tmp17;
          }
          const obj6 = { text: buttonLabel, onPress: tmp10 };
          const tmp13 = timestampProducer(components_Button_Button.Button, obj6);
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
    }
  : (arg0) => {
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
    };
const __initData = {
  code: 'function UserSettingsDesignSystemBackdropTsx1(){const{withSpring,showBackdrop,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,"animate-always")};}',
};
const __initData2 = {
  code: "function UserSettingsDesignSystemBackdropTsx2(){const{withSpring,showBackdrop,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,'animate-always')};}",
};
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = showBackdrop(576).c(10);
      const tmp4 = closure_8();
      [showBackdrop] = noop.useState(false);
      dependencyMap = tmp7;
      let obj = showBackdrop(576);
      [tmp9, tmp10] = noop.useState("none");
      const tmp8 = _slicedToArray(noop.useState("none"), 2);
      const fn = function n() {
        let num = 0;
        if (first) {
          num = 1;
        }
        return { opacity: spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always") };
      };
      const obj2 = showBackdrop(4618);
      fn.__closure = {
        withSpring: showBackdrop(5604).withSpring,
        showBackdrop,
        SUBTLE_SPRING: showBackdrop(5605).SUBTLE_SPRING,
      };
      fn.__workletHash = 7978288613287;
      fn.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function s() {
          closure_1(false);
        };
        cResult[0] = fn2;
        let first1 = fn2;
      } else {
        first1 = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { spacing: 24, children: null };
        const obj5 = {
          title: "Backdrop",
          description:
            "A backdrop is an overlay that appears behind a component to provide separation between the component and the rest of the interface. By default it is a semi-transparent overlay.",
          buttonLabel: "Show Backdrop",
          blur: "none",
          setShowBackdrop: tmp7,
          setBlurAmount: tmp10,
        };
        const items = [closure_6(closure_9, obj5), ,];
        const obj6 = {
          title: "Subtle Blur",
          description:
            "Backdrop also supports blur. You can use a subtle blur for a lite-touch obfuscation, like for Context Menus that help create seperation but don't completly lift you out of the context",
          buttonLabel: "Show Subtle Blur Backdrop",
          blur: "subtle",
          setShowBackdrop: tmp7,
          setBlurAmount: tmp10,
        };
        items[1] = closure_6(closure_9, obj6);
        const obj7 = {
          title: "Strong Blur",
          description:
            "You can use a strong blur for places where you want to completly lift the user out of the context, like for modals",
          buttonLabel: "Show Strong Blur Backdrop",
          blur: "strong",
          setShowBackdrop: tmp7,
          setBlurAmount: tmp10,
        };
        items[2] = closure_6(closure_9, obj7);
        obj4.children = items;
        const tmp17 = closure_7(tmp(5600).Stack, obj4);
        cResult[1] = tmp17;
        let tmp13 = tmp17;
      } else {
        tmp13 = cResult[1];
      }
      if (cResult[2] === animatedStyle) {
        if (cResult[3] === tmp9) {
          if (cResult[4] === showBackdrop) {
            if (cResult[5] === tmp4.backdropContent) {
              let tmp18 = cResult[6];
            }
            if (cResult[7] === tmp4.container) {
              if (cResult[8] === tmp18) {
                let tmp23 = cResult[9];
              }
              return tmp23;
            }
            const obj8 = { contentContainerStyle: tmp4.container, children: null };
            const items1 = [tmp13, tmp18];
            obj8.children = items1;
            const tmp26 = closure_7(closure_4, obj8);
            cResult[7] = tmp4.container;
            cResult[8] = tmp18;
            cResult[9] = tmp26;
            tmp23 = tmp26;
          }
        }
      }
      let tmp19 = showBackdrop;
      if (showBackdrop) {
        const obj9 = { onDismiss: first1, children: null };
        const obj10 = { style: animatedStyle, blur: tmp9, onDismiss: first1 };
        const items2 = [closure_6(tmp(5778).Backdrop, obj10)];
        const obj11 = { style: tmp4.backdropContent, pointerEvents: "box-none", children: null };
        const obj12 = { children: null };
        const obj13 = { variant: "text-md/normal", children: null };
        const items3 = ["blur style: ", tmp9];
        obj13.children = items3;
        obj12.children = closure_7(tmp(4892).Text, obj13);
        obj11.children = closure_6(tmp(6002).Card, obj12);
        items2[1] = closure_6(closure_5, obj11);
        obj9.children = items2;
        tmp19 = closure_7(tmp(5773).Dialog, obj9);
      }
      cResult[2] = animatedStyle;
      cResult[3] = tmp9;
      cResult[4] = showBackdrop;
      cResult[5] = tmp4.backdropContent;
      cResult[6] = tmp19;
      tmp18 = tmp19;
      const obj3 = {
        withSpring: showBackdrop(5604).withSpring,
        showBackdrop,
        SUBTLE_SPRING: showBackdrop(5605).SUBTLE_SPRING,
      };
    }
  : () => {
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
      let obj = showBackdrop(4618);
      fn.__closure = {
        withSpring: showBackdrop(5604).withSpring,
        showBackdrop,
        SUBTLE_SPRING: showBackdrop(5605).SUBTLE_SPRING,
      };
      fn.__workletHash = 5659195678596;
      fn.__initData = __initData2;
      const obj3 = { contentContainerStyle: tmp.container, children: null };
      const animatedStyle = obj.useAnimatedStyle(fn);
      const obj4 = { spacing: 24, children: null };
      const items = [
        closure_6(closure_9, {
          title: "Backdrop",
          description:
            "A backdrop is an overlay that appears behind a component to provide separation between the component and the rest of the interface. By default it is a semi-transparent overlay.",
          buttonLabel: "Show Backdrop",
          blur: "none",
          setShowBackdrop: tmp2[1],
          setBlurAmount: tmp7,
        }),
        closure_6(closure_9, {
          title: "Subtle Blur",
          description:
            "Backdrop also supports blur. You can use a subtle blur for a lite-touch obfuscation, like for Context Menus that help create seperation but don't completly lift you out of the context",
          buttonLabel: "Show Subtle Blur Backdrop",
          blur: "subtle",
          setShowBackdrop: tmp2[1],
          setBlurAmount: tmp7,
        }),
        closure_6(closure_9, {
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
      const items1 = [closure_7(showBackdrop(5600).Stack, obj4)];
      if (showBackdrop) {
        function handleClose() {
          closure_1(false);
        }
        const obj5 = { onDismiss: handleClose, children: null };
        const obj6 = { style: animatedStyle, blur: tmp6, onDismiss: handleClose };
        const items2 = [closure_6(tmp8(5778).Backdrop, obj6)];
        const obj7 = { style: tmp.backdropContent, pointerEvents: "box-none", children: null };
        const obj8 = { children: null };
        const obj9 = { variant: "text-md/normal", children: null };
        const items3 = ["blur style: ", tmp6];
        obj9.children = items3;
        obj8.children = closure_7(tmp8(4892).Text, obj9);
        obj7.children = closure_6(tmp8(6002).Card, obj8);
        items2[1] = closure_6(closure_5, obj7);
        obj5.children = items2;
        showBackdrop = closure_7(tmp8(5773).Dialog, obj5);
      }
      items1[1] = showBackdrop;
      obj3.children = items1;
      return closure_7(closure_4, obj3);
    };
