// discord_app/modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx
import { YOU_BAR_SPRING_CONFIG } from "CONNECTION_BANNER_HEIGHT";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_5 = { code: "function YouBarNameplateTsx1(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = require("noop").memo(function YouBarNameplate(isQuestRendered) {
  let barWidth;
  let nameplate;
  isQuestRendered = isQuestRendered.isQuestRendered;
  const avatarSize = isQuestRendered.avatarSize;
  let token;
  let dependencyMap;
  ({ nameplate, barWidth } = isQuestRendered);
  let obj = isQuestRendered(3959);
  token = obj.useToken(token(712).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp4 = token(14300)(token);
  dependencyMap = tmp4;
  let obj1 = isQuestRendered(4116);
  const fn = function l() {
    let obj = isQuestRendered(_undefined[7]);
    if (isQuestRendered) {
      let value = _undefined.get();
    } else {
      value = token;
    }
    obj = { borderTopRightRadius: obj.withSpring(value, outer1_3) };
    return obj;
  };
  obj = { withSpring: isQuestRendered(4664).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp4, borderRadius: token, YOU_BAR_SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 17156260157738;
  fn.__initData = closure_5;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { position: "absolute", top: 0, left: avatarSize, right: -1, bottom: 0, borderTopRightRadius: null, borderTopLeftRadius: 0, borderBottomRightRadius: null, borderBottomLeftRadius: 0, overflow: "hidden", width: null };
  let num = 0;
  if (!isQuestRendered) {
    num = token;
  }
  obj1 = { style: items, pointerEvents: "none", children: tmp6(token(9279), { nameplate, isFocused: true, animate: false }) };
  obj[5] = num;
  obj[7] = token;
  obj[10] = barWidth - avatarSize;
  items = [obj, animatedStyle];
  return jsx(token(4116).View, { style: items, pointerEvents: "none", children: tmp6(token(9279), { nameplate, isFocused: true, animate: false }) });
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default memoResult;