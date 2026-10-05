// discord_app/modules/chat_input/native/ChatFloatingNavButton.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let size;
let size1;
({ Image: closure_4, Pressable: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { pill: size, icon: size1 };
size = {
  height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE,
  width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE,
  borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
size1 = {
  width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE,
  height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE,
};
let closure_7 = createStyles(obj);
const __initData = {
  code: 'function ChatFloatingNavButtonTsx1(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,"animate-always")};}',
};
const __initData2 = {
  code: "function ChatFloatingNavButtonTsx2(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};}",
};
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let icon;
      let onPress;
      let sharedValue;
      let token;
      let token1;
      const tmp = token1;
      let obj = sharedValue(token1[6]);
      const cResult = obj.c(24);
      ({ accessibilityLabel, icon, onPress } = arg0);
      const tmp3 = closure_7();
      let obj2 = sharedValue(token1[7]);
      sharedValue = obj2.useSharedValue(0);
      const obj3 = sharedValue(token1[8]);
      const tmp5 = token;
      token = obj3.useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
      const obj4 = sharedValue(token1[8]);
      token1 = obj4.useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
      const obj5 = sharedValue(token1[8]);
      const token2 = obj5.useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
      const fn = function t() {
        let interpolateColorResult;
        let withSpring;
        const obj = {
          backgroundColor: withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always"),
        };
        withSpring = spring.withSpring;
        spring;
        const items = [token, token1];
        const obj2 = ReanimatedRexport;
        interpolateColorResult = obj2.interpolateColor(sharedValue.get(), [0, 1], items);
        return obj;
      };
      const obj6 = sharedValue(token1[7]);
      fn.__closure = {
        withSpring: sharedValue(token1[9]).withSpring,
        interpolateColor: sharedValue(token1[7]).interpolateColor,
        pressed: sharedValue,
        bgColor: token,
        pressedBgColor: token1,
        ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING,
      };
      fn.__workletHash = 6110457262684;
      fn.__initData = __initData;
      ({
        withSpring: sharedValue(token1[9]).withSpring,
        interpolateColor: sharedValue(token1[7]).interpolateColor,
        pressed: sharedValue,
        bgColor: token,
        pressedBgColor: token1,
        ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING,
      });
      const animatedStyle = obj6.useAnimatedStyle(fn);
      if (cResult[0] !== sharedValue) {
        class S {
          constructor() {
            const result = sharedValue.set(1);
          }
        }
        cResult[0] = sharedValue;
        cResult[1] = S;
      } else {
        class S {
          constructor() {
            const result = sharedValue.set(1);
          }
        }
      }
      if (cResult[2] !== sharedValue) {
        class I {
          constructor() {
            const result = sharedValue.set(0);
          }
        }
        cResult[2] = sharedValue;
        cResult[3] = I;
      } else {
        class I {
          constructor() {
            const result = sharedValue.set(0);
          }
        }
      }
      if (cResult[4] === animatedStyle) {
        class I {
          constructor() {
            const result = sharedValue.set(0);
          }
        }
        if (cResult[7] !== token2) {
          class I {
            constructor() {
              const result = sharedValue.set(0);
            }
          }
          tmp14[0] = token2;
          cResult[7] = token2;
          cResult[8] = tmp14;
        } else {
          class I {
            constructor() {
              const result = sharedValue.set(0);
            }
          }
        }
        if (cResult[9] === tmp3.icon) {
          class I {
            constructor() {
              const result = sharedValue.set(0);
            }
          }
          if (cResult[12] === icon) {
            class I {
              constructor() {
                const result = sharedValue.set(0);
              }
            }
            if (cResult[15] === tmp12) {
              class I {
                constructor() {
                  const result = sharedValue.set(0);
                }
              }
              if (cResult[18] === accessibilityLabel) {
                class I {
                  constructor() {
                    const result = sharedValue.set(0);
                  }
                }
              }
              const tmp26 = (
                <closure_5
                  accessibilityRole="button"
                  accessibilityLabel={accessibilityLabel}
                  onPress={onPress}
                  onPressIn={S}
                  onPressOut={I}
                >
                  {tmp20}
                </closure_5>
              );
              cResult[18] = accessibilityLabel;
              cResult[19] = S;
              cResult[20] = I;
              cResult[21] = onPress;
              cResult[22] = tmp20;
              cResult[23] = tmp26;
            }
            cResult[15] = tmp12;
            cResult[16] = tmp16;
            cResult[17] = jsx(tmp5(tmp[7]).View, { style: tmp12, children: tmp16 });
            const tmp22 = jsx(tmp5(tmp[7]).View, { style: tmp12, children: tmp16 });
          }
          const tmp19 = <closure_4 source={icon} style={tmp15} />;
          cResult[12] = icon;
          cResult[13] = tmp15;
          cResult[14] = tmp19;
        }
        let items = [tmp3.icon, tmp14];
        cResult[9] = tmp3.icon;
        cResult[10] = tmp14;
        cResult[11] = items;
      }
      const items1 = [tmp3.pill, animatedStyle];
      cResult[4] = animatedStyle;
      cResult[5] = tmp3.pill;
      cResult[6] = items1;
    }
  : (arg0) => {
      let accessibilityLabel;
      let icon;
      let onPress;
      let sharedValue;
      let token;
      let token1;
      ({ accessibilityLabel, icon, onPress } = arg0);
      const tmp = closure_7();
      let obj = sharedValue(token1[7]);
      sharedValue = obj.useSharedValue(0);
      let obj2 = sharedValue(token1[8]);
      token = obj2.useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
      const obj3 = sharedValue(token1[8]);
      token1 = obj3.useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
      const obj4 = sharedValue(token1[8]);
      const token2 = obj4.useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
      const obj5 = sharedValue(token1[7]);
      class C {
        constructor() {
          let interpolateColorResult;
          let withSpring;
          const obj = {
            backgroundColor: withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always"),
          };
          withSpring = spring.withSpring;
          spring;
          const items = [token, token1];
          const obj2 = ReanimatedRexport;
          interpolateColorResult = obj2.interpolateColor(sharedValue.get(), [0, 1], items);
          return obj;
        }
      }
      C.__closure = {
        withSpring: sharedValue(token1[9]).withSpring,
        interpolateColor: sharedValue(token1[7]).interpolateColor,
        pressed: sharedValue,
        bgColor: token,
        pressedBgColor: token1,
        ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING,
      };
      C.__workletHash = 11350052873759;
      C.__initData = __initData2;
      let items = [sharedValue];
      ({
        withSpring: sharedValue(token1[9]).withSpring,
        interpolateColor: sharedValue(token1[7]).interpolateColor,
        pressed: sharedValue,
        bgColor: token,
        pressedBgColor: token1,
        ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING,
      });
      const animatedStyle = obj5.useAnimatedStyle(C);
      const items1 = [sharedValue];
      const callback = react.useCallback(() => {
        const result = sharedValue.set(1);
      }, items);
      const items2 = [tmp.pill, animatedStyle];
      const items3 = [tmp.icon, { tintColor: token2 }];
      const View = token(token1[7]).View;
      return (
        <closure_5
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
          onPress={onPress}
          onPressIn={callback}
          onPressOut={react.useCallback(() => {
            const result = sharedValue.set(0);
          }, items1)}
        >
          {null}
        </closure_5>
      );
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default tmp4;
