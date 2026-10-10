// discord_app/modules/chat_input/native/ChatFloatingNavButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { pill: null, icon: null };
let size = {
  height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE,
  width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE,
  borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};
obj2.pill = size;
const size1 = {
  width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE,
  height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE,
};
obj2.icon = size1;
let closure_6 = createStyles.createStyles(obj2);
const __initData = {
  code: 'function ChatFloatingNavButtonTsx1(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,"animate-always")};}',
};
const __initData2 = {
  code: "function ChatFloatingNavButtonTsx2(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};}",
};
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatFloatingNavButton(arg0) {
      const cResult = sharedValue(token1[6]).c(24);
      ({ accessibilityLabel, icon, onPress } = arg0);
      const tmp3 = closure_6();
      let obj = sharedValue(token1[6]);
      sharedValue = sharedValue(token1[7]).useSharedValue(0);
      let obj2 = sharedValue(token1[7]);
      token = sharedValue(token1[8]).useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
      let obj3 = sharedValue(token1[8]);
      token1 = sharedValue(token1[8]).useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
      const obj4 = sharedValue(token1[8]);
      const token2 = sharedValue(token1[8]).useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
      const obj5 = sharedValue(token1[8]);
      const fn = function _() {
        const obj = { backgroundColor: null };
        const obj2 = spring;
        const items = [token, token1];
        obj.backgroundColor = obj2.withSpring(
          ReanimatedRexport.interpolateColor(sharedValue.get(), [0, 1], items),
          springPresets.ON_PRESS_SPRING,
          "animate-always",
        );
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
      const animatedStyle = obj6.useAnimatedStyle(fn);
      if (cResult[0] !== sharedValue) {
        const fn2 = function c() {
          const result = sharedValue.set(1);
        };
        cResult[0] = sharedValue;
        cResult[1] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== sharedValue) {
        const fn3 = function h() {
          const result = sharedValue.set(0);
        };
        cResult[2] = sharedValue;
        cResult[3] = fn3;
        let tmp11 = fn3;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === animatedStyle) {
        if (cResult[5] === tmp3.pill) {
          let tmp12 = cResult[6];
        }
        if (cResult[7] !== token2) {
          const obj8 = { tintColor: token2 };
          cResult[7] = token2;
          cResult[8] = obj8;
          let tmp13 = obj8;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] === tmp3.icon) {
          if (cResult[10] === tmp13) {
            let tmp14 = cResult[11];
          }
          if (cResult[12] === icon) {
            if (cResult[13] === tmp14) {
              let tmp15 = cResult[14];
            }
            if (cResult[15] === tmp12) {
              if (cResult[16] === tmp15) {
                let tmp18 = cResult[17];
              }
              if (cResult[18] === accessibilityLabel) {
                if (cResult[19] === tmp10) {
                  if (cResult[20] === tmp11) {
                    if (cResult[21] === onPress) {
                      if (cResult[22] === tmp18) {
                        let tmp21 = cResult[23];
                      }
                      return tmp21;
                    }
                  }
                }
              }
              const obj9 = {
                accessibilityRole: "button",
                accessibilityLabel,
                onPress,
                onPressIn: tmp10,
                onPressOut: tmp11,
                children: tmp18,
              };
              const tmp24 = (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={accessibilityLabel}
                  onPress={onPress}
                  onPressIn={tmp10}
                  onPressOut={tmp11}
                >
                  {tmp18}
                </Pressable>
              );
              cResult[18] = accessibilityLabel;
              cResult[19] = tmp10;
              cResult[20] = tmp11;
              cResult[21] = onPress;
              cResult[22] = tmp18;
              cResult[23] = tmp24;
              tmp21 = tmp24;
            }
            const obj10 = { style: tmp12, children: tmp15 };
            const tmp20 = jsx(tmp5(tmp[7]).View, { style: tmp12, children: tmp15 });
            cResult[15] = tmp12;
            cResult[16] = tmp15;
            cResult[17] = tmp20;
            tmp18 = tmp20;
          }
          const obj11 = { source: icon, style: tmp14 };
          const tmp17 = jsx(tmp5(tmp[11]), { source: icon, style: tmp14 });
          cResult[12] = icon;
          cResult[13] = tmp14;
          cResult[14] = tmp17;
          tmp15 = tmp17;
        }
        let items = [tmp3.icon, tmp13];
        cResult[9] = tmp3.icon;
        cResult[10] = tmp13;
        cResult[11] = items;
        tmp14 = items;
      }
      const items1 = [tmp3.pill, animatedStyle];
      cResult[4] = animatedStyle;
      cResult[5] = tmp3.pill;
      cResult[6] = items1;
      tmp12 = items1;
      const obj7 = {
        withSpring: sharedValue(token1[9]).withSpring,
        interpolateColor: sharedValue(token1[7]).interpolateColor,
        pressed: sharedValue,
        bgColor: token,
        pressedBgColor: token1,
        ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING,
      };
    }
  : function ChatFloatingNavButton(arg0) {
      let sharedValue;
      let token;
      let token1;
      ({ accessibilityLabel, icon, onPress } = arg0);
      const tmp = closure_6();
      sharedValue = sharedValue(token1[7]).useSharedValue(0);
      let obj = sharedValue(token1[7]);
      token = sharedValue(token1[8]).useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
      let obj2 = sharedValue(token1[8]);
      token1 = sharedValue(token1[8]).useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
      let obj3 = sharedValue(token1[8]);
      const token2 = sharedValue(token1[8]).useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
      const obj4 = sharedValue(token1[8]);
      const fn = function u() {
        const obj = { backgroundColor: null };
        const obj2 = spring;
        const items = [token, token1];
        obj.backgroundColor = obj2.withSpring(
          ReanimatedRexport.interpolateColor(sharedValue.get(), [0, 1], items),
          springPresets.ON_PRESS_SPRING,
          "animate-always",
        );
        return obj;
      };
      const obj5 = sharedValue(token1[7]);
      fn.__closure = {
        withSpring: sharedValue(token1[9]).withSpring,
        interpolateColor: sharedValue(token1[7]).interpolateColor,
        pressed: sharedValue,
        bgColor: token,
        pressedBgColor: token1,
        ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING,
      };
      fn.__workletHash = 11350052873759;
      fn.__initData = __initData2;
      let items = [sharedValue];
      const animatedStyle = obj5.useAnimatedStyle(fn);
      const items1 = [sharedValue];
      const callback = noop.useCallback(() => {
        const result = sharedValue.set(1);
      }, items);
      const obj7 = {
        accessibilityRole: "button",
        accessibilityLabel,
        onPress,
        onPressIn: callback,
        onPressOut: noop.useCallback(() => {
          const result = sharedValue.set(0);
        }, items1),
        children: null,
      };
      const obj8 = { style: null, children: null };
      const items2 = [tmp.pill, animatedStyle];
      obj8.style = items2;
      const obj9 = { source: icon, style: null };
      const items3 = [tmp.icon, { tintColor: token2 }];
      obj9.style = items3;
      obj8.children = jsx(token(token1[11]), { source: icon, style: null });
      obj7.children = jsx(token(token1[7]).View, { style: null, children: null });
      return (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
          onPress={onPress}
          onPressIn={callback}
          onPressOut={noop.useCallback(() => {
            const result = sharedValue.set(0);
          }, items1)}
        >
          {null}
        </Pressable>
      );
    };
