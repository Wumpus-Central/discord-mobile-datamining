// === Module 15741: ? ===

// Module 15741
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import { YOU_BAR_SPRING_CONFIG } from "CONNECTION_BANNER_HEIGHT" /* 14548 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
let closure_6 = { code: "function YouBarNameplateTsx1(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = importAllResult.memo(function YouBarNameplate(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  const avatarSize = isQuestRendered.avatarSize;
  let token;
  dependencyMap = undefined;
  ({ nameplate, barWidth } = isQuestRendered);
  let obj = isQuestRendered(4101);
  token = obj.useToken(token(712).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp4 = token(14633)(token);
  dependencyMap = tmp4;
  obj1 = isQuestRendered(589);
  const items = [closure_3];
  const stateFromStores = obj1.useStateFromStores(items, () => obj.animateYouBarNameplate);
  let obj2 = isQuestRendered(4120);
  const fn = function p() {
    let obj = isQuestRendered(closure_2[9]);
    if (isQuestRendered) {
      let value = closure_2.get();
    } else {
      value = token;
    }
    obj = { borderTopRightRadius: obj.withSpring(value, closure_1_4) };
    return obj;
  };
  obj = { withSpring: isQuestRendered(4814).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp4, borderRadius: token, YOU_BAR_SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 17156260157738;
  fn.__initData = closure_6;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj = { position: "absolute", top: 0, left: avatarSize, right: -1, bottom: 0, borderTopRightRadius: null, borderTopLeftRadius: 0, borderBottomRightRadius: null, borderBottomLeftRadius: 0, overflow: "hidden", width: null };
  let num = 0;
  if (!isQuestRendered) {
    num = token;
  }
  obj1 = { style: items1, pointerEvents: "none", children: null };
  obj[5] = num;
  obj[7] = token;
  obj[10] = barWidth - avatarSize;
  items1 = [obj, animatedStyle];
  obj2 = { nameplate, isFocused: true, animate: null };
  let str = stateFromStores;
  if (str) {
    str = "always";
  }
  obj2[2] = str;
  obj1[2] = jsx(token(9537), { nameplate, isFocused: true, animate: null });
  return jsx(token(4120).View, { style: items1, pointerEvents: "none", children: null });
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default memoResult;