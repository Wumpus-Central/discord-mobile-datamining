// discord_app/modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const YOU_BAR_SPRING_CONFIG = fn(14915).YOU_BAR_SPRING_CONFIG;
const jsx = fn(21).jsx;
const __initData = {
  code: "function YouBarNameplateTsx1(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}",
};
const __initData2 = {
  code: "function YouBarNameplateTsx2(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = isQuestRendered(576).c(16);
        ({ nameplate, isQuestRendered } = arg0);
        ({ avatarSize, barWidth } = arg0);
        let obj = isQuestRendered(576);
        token = isQuestRendered(4586).useToken(token(587).modules.mobile.YOU_BAR_BORDER_RADIUS);
        const tmp6 = token(15001)(token);
        dependencyMap = tmp6;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AccessibilityStore];
          const fn = function _() {
            return AccessibilityStore.animateYouBarNameplate;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp7 = items;
          tmp8 = fn;
        } else {
          [tmp7, tmp8] = cResult;
        }
        const obj2 = isQuestRendered(4586);
        const stateFromStores = isQuestRendered(504).useStateFromStores(tmp7, tmp8);
        const tmpResult = isQuestRendered(504);
        const fn2 = function w() {
          if (isQuestRendered) {
            value = closure_2.get();
          } else {
            value = token;
          }
          return { borderTopRightRadius: spring.withSpring(value, YOU_BAR_SPRING_CONFIG) };
        };
        const tmpResult2 = isQuestRendered(4618);
        fn2.__closure = {
          withSpring: isQuestRendered(5604).withSpring,
          isQuestRendered,
          questDockAnimatedBorderRadius: tmp6,
          borderRadius: token,
          YOU_BAR_SPRING_CONFIG,
        };
        fn2.__workletHash = 17156260157738;
        fn2.__initData = __initData;
        const animatedStyle = tmpResult2.useAnimatedStyle(fn2);
        let num3 = 0;
        if (!isQuestRendered) {
          num3 = token;
        }
        const diff = barWidth - avatarSize;
        if (cResult[2] === avatarSize) {
          if (cResult[3] === token) {
            if (cResult[4] === num3) {
              if (cResult[5] === diff) {
                let tmp13 = cResult[6];
              }
              if (cResult[7] === animatedStyle) {
                if (cResult[8] === tmp13) {
                  let tmp14 = cResult[9];
                }
                if (cResult[10] === nameplate) {
                  if (cResult[11] === tmp15) {
                    let tmp16 = cResult[12];
                  }
                  if (cResult[13] === tmp14) {
                    if (cResult[14] === tmp16) {
                      let tmp19 = cResult[15];
                    }
                    return tmp19;
                  }
                  const obj4 = { style: tmp14, pointerEvents: "none", children: tmp16 };
                  const tmp21 = jsx(tmp4(4618).View, { style: tmp14, pointerEvents: "none", children: tmp16 });
                  cResult[13] = tmp14;
                  cResult[14] = tmp16;
                  cResult[15] = tmp21;
                  tmp19 = tmp21;
                }
                const obj5 = { nameplate, isFocused: true, animate: stateFromStores && "always" };
                const tmp18 = jsx(tmp4(8507), { nameplate, isFocused: true, animate: stateFromStores && "always" });
                cResult[10] = nameplate;
                cResult[11] = stateFromStores && "always";
                cResult[12] = tmp18;
                tmp16 = tmp18;
              }
              const items1 = [tmp13, animatedStyle];
              cResult[7] = animatedStyle;
              cResult[8] = tmp13;
              cResult[9] = items1;
              tmp14 = items1;
            }
          }
        }
        const rect = {
          position: "absolute",
          top: 0,
          left: avatarSize,
          right: -1,
          bottom: 0,
          borderTopRightRadius: num3,
          borderTopLeftRadius: 0,
          borderBottomRightRadius: token,
          borderBottomLeftRadius: 0,
          overflow: "hidden",
          width: diff,
        };
        cResult[2] = avatarSize;
        cResult[3] = token;
        cResult[4] = num3;
        cResult[5] = diff;
        cResult[6] = rect;
        tmp13 = rect;
        const obj3 = {
          withSpring: isQuestRendered(5604).withSpring,
          isQuestRendered,
          questDockAnimatedBorderRadius: tmp6,
          borderRadius: token,
          YOU_BAR_SPRING_CONFIG,
        };
      }
    : (isQuestRendered) => {
        isQuestRendered = isQuestRendered.isQuestRendered;
        const avatarSize = isQuestRendered.avatarSize;
        let token;
        ({ nameplate, barWidth } = isQuestRendered);
        token = isQuestRendered(4586).useToken(token(587).modules.mobile.YOU_BAR_BORDER_RADIUS);
        const tmp4 = token(15001)(token);
        dependencyMap = tmp4;
        let obj = isQuestRendered(4586);
        const tmp2 = token;
        const items = [AccessibilityStore];
        const stateFromStores = isQuestRendered(504).useStateFromStores(
          items,
          () => AccessibilityStore.animateYouBarNameplate,
        );
        const obj2 = isQuestRendered(504);
        const fn = function p() {
          if (isQuestRendered) {
            value = closure_2.get();
          } else {
            value = token;
          }
          return { borderTopRightRadius: spring.withSpring(value, YOU_BAR_SPRING_CONFIG) };
        };
        const obj3 = isQuestRendered(4618);
        fn.__closure = {
          withSpring: isQuestRendered(5604).withSpring,
          isQuestRendered,
          questDockAnimatedBorderRadius: tmp4,
          borderRadius: token,
          YOU_BAR_SPRING_CONFIG,
        };
        fn.__workletHash = 11731298516553;
        fn.__initData = __initData2;
        const animatedStyle = obj3.useAnimatedStyle(fn);
        const rect = {
          position: "absolute",
          top: 0,
          left: avatarSize,
          right: -1,
          bottom: 0,
          borderTopRightRadius: null,
          borderTopLeftRadius: 0,
          borderBottomRightRadius: null,
          borderBottomLeftRadius: 0,
          overflow: "hidden",
          width: null,
        };
        let num = 0;
        if (!isQuestRendered) {
          num = token;
        }
        const obj5 = { style: null, pointerEvents: "none", children: null };
        rect.borderTopRightRadius = num;
        rect.borderBottomRightRadius = token;
        rect.width = barWidth - avatarSize;
        const items1 = [rect, animatedStyle];
        obj5.style = items1;
        const obj6 = { nameplate, isFocused: true, animate: null };
        let str = stateFromStores;
        const obj4 = {
          withSpring: isQuestRendered(5604).withSpring,
          isQuestRendered,
          questDockAnimatedBorderRadius: tmp4,
          borderRadius: token,
          YOU_BAR_SPRING_CONFIG,
        };
        if (str) {
          str = "always";
        }
        obj6.animate = str;
        obj5.children = jsx(tmp2(8507), { nameplate, isFocused: true, animate: null });
        return jsx(token(4618).View, { style: null, pointerEvents: "none", children: null });
      },
);
