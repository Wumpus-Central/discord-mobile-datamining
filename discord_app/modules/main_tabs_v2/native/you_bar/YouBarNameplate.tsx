// === Module 16787: YouBarNameplate ===

// Module 16787 (YouBarNameplate)
import spring from "spring" /* 5270 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;

require = fn;
const YOU_BAR_SPRING_CONFIG = fn(15425).YOU_BAR_SPRING_CONFIG;
const jsx = fn(21).jsx;
const __initData = { code: "function YouBarNameplateTsx1(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default noop.memo(function YouBarNameplate(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  const avatarSize = isQuestRendered.avatarSize;
  let token;
  ({ nameplate, barWidth } = isQuestRendered);
  token = isQuestRendered(4524).useToken(token(576).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp4 = token(15511)(token);
  dependencyMap = tmp4;
  let obj = isQuestRendered(4524);
  const tmp2 = token;
  const items = [AccessibilityStore];
  const stateFromStores = isQuestRendered(504).useStateFromStores(items, () => AccessibilityStore.animateYouBarNameplate);
  const obj2 = isQuestRendered(504);
  const fn = function p() {
    if (isQuestRendered) {
      value = closure_2.get();
    } else {
      value = token;
    }
    return { borderTopRightRadius: spring.withSpring(value, YOU_BAR_SPRING_CONFIG) };
  };
  const obj3 = isQuestRendered(4559);
  fn.__closure = { withSpring: isQuestRendered(5270).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp4, borderRadius: token, YOU_BAR_SPRING_CONFIG };
  fn.__workletHash = 17156260157738;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const rect = { position: "absolute", top: 0, left: avatarSize, right: -1, bottom: 0, borderTopRightRadius: null, borderTopLeftRadius: 0, borderBottomRightRadius: null, borderBottomLeftRadius: 0, overflow: "hidden", width: null };
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
  const obj4 = { withSpring: isQuestRendered(5270).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp4, borderRadius: token, YOU_BAR_SPRING_CONFIG };
  if (str) {
    str = "always";
  }
  obj6.animate = str;
  obj5.children = jsx(tmp2(9175), { nameplate, isFocused: true, animate: null });
  return jsx(token(4559).View, { style: null, pointerEvents: "none", children: null });
});