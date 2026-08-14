// discord_app/modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { YOU_BAR_SPRING_CONFIG } from "CONNECTION_BANNER_HEIGHT";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_6 = { code: "function YouBarNameplateTsx1(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = require("noop").memo(function YouBarNameplate(isQuestRendered) {
  let barWidth;
  let nameplate;
  isQuestRendered = isQuestRendered.isQuestRendered;
  const avatarSize = isQuestRendered.avatarSize;
  let token;
  let dependencyMap;
  ({ nameplate, barWidth } = isQuestRendered);
  let obj = isQuestRendered(4065);
  token = obj.useToken(token(712).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp4 = token(14503)(token);
  dependencyMap = tmp4;
  let obj1 = isQuestRendered(589);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj1.useStateFromStores(items, () => obj.animateYouBarNameplate);
  let obj2 = isQuestRendered(4083);
  const fn = function p() {
    let obj = isQuestRendered(_undefined[9]);
    if (isQuestRendered) {
      let value = _undefined.get();
    } else {
      value = token;
    }
    obj = { borderTopRightRadius: obj.withSpring(value, outer1_4) };
    return obj;
  };
  obj = { withSpring: isQuestRendered(4776).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp4, borderRadius: token, YOU_BAR_SPRING_CONFIG };
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
  obj1[2] = jsx(token(9454), { nameplate, isFocused: true, animate: null });
  return jsx(token(4083).View, { style: items1, pointerEvents: "none", children: null });
});
const result = require("CONNECTION_BANNER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default memoResult;