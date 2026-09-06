// discord_app/modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const YOU_BAR_SPRING_CONFIG = fn(15098).YOU_BAR_SPRING_CONFIG;
const jsx = fn(21).jsx;
const __initData = {
  code: "function YouBarNameplateTsx1(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default noop.memo(function YouBarNameplate(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  const avatarSize = isQuestRendered.avatarSize;
  let token;
  ({ nameplate, barWidth } = isQuestRendered);
  let obj = isQuestRendered(4262);
  token = obj.useToken(token(576).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp4 = token(15184)(token);
  dependencyMap = tmp4;
  let obj1 = isQuestRendered(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj1.useStateFromStores(items, () => AccessibilityStore.animateYouBarNameplate);
  const fn = function p() {
    let obj = spring;
    if (isQuestRendered) {
      value = closure_2.get();
    } else {
      value = token;
    }
    obj = { borderTopRightRadius: obj.withSpring(value, YOU_BAR_SPRING_CONFIG) };
    return obj;
  };
  obj = {
    withSpring: isQuestRendered(4974).withSpring,
    isQuestRendered,
    questDockAnimatedBorderRadius: tmp4,
    borderRadius: token,
    YOU_BAR_SPRING_CONFIG,
  };
  fn.__closure = obj;
  fn.__workletHash = 17156260157738;
  fn.__initData = __initData;
  const animatedStyle = isQuestRendered(4296).useAnimatedStyle(fn);
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
  obj = { style: null, pointerEvents: "none", children: null };
  rect.borderTopRightRadius = num;
  rect.borderBottomRightRadius = token;
  rect.width = barWidth - avatarSize;
  const items1 = [rect, animatedStyle];
  obj.style = items1;
  obj1 = { nameplate, isFocused: true, animate: null };
  let str = stateFromStores;
  const obj3 = isQuestRendered(4296);
  if (str) {
    str = "always";
  }
  obj1.animate = str;
  obj.children = jsx(token(8818), { nameplate, isFocused: true, animate: null });
  return jsx(token(4296).View, { style: null, pointerEvents: "none", children: null });
});
