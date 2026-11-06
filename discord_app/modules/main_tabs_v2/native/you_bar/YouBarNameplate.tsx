// discord_app/modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import NameplateDefault from "../../../collectibles/nameplates/native/Nameplate.tsx";
import useQuestDockAnimatedBorderRadiusDefault from "../../../quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const _modDef1652 = _mod1652;

require = fn;
const YOU_BAR_SPRING_CONFIG = fn(17337).YOU_BAR_SPRING_CONFIG;
const jsx = fn(21).jsx;
let closure_6 = {
  code: "(function YouBarNameplateTsx1(){let[withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG]=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default noop.memo(function YouBarNameplate(arg0) {
  ({ isQuestRendered, avatarSize } = arg0);
  ({ nameplate, barWidth } = arg0);
  const token = useToken.useToken(nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp4 = useQuestDockAnimatedBorderRadiusDefault(token);
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => _undefined2.animateYouBarNameplate);
  const items1 = [closure_6, spring_spring.withSpring, isQuestRendered, tmp4, token, YOU_BAR_SPRING_CONFIG];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items1;
  class YouBarNameplateTsx1 {
    constructor() {
      tmp = closure_0;
      if (closure_1) {
        tmp3 = closure_2;
        value = closure_2.get();
      } else {
        value = closure_3;
      }
      obj = { borderTopRightRadius: tmp(value, closure_4) };
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9, tmp10, tmp11];
  YouBarNameplateTsx1.__closure = items2;
  YouBarNameplateTsx1.__workletHash = 1217151381395;
  YouBarNameplateTsx1.__initData = tmp6;
  const animatedStyle = _mod1652.useAnimatedStyle(YouBarNameplateTsx1);
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
  const obj4 = { style: null, pointerEvents: "none", children: null };
  rect.borderTopRightRadius = num;
  rect.borderBottomRightRadius = token;
  rect.width = barWidth - avatarSize;
  const items3 = [rect, animatedStyle];
  obj4.style = items3;
  const obj5 = { nameplate, isFocused: true, animate: null };
  let str = stateFromStores;
  if (str) {
    str = "always";
  }
  obj5.animate = str;
  obj4.children = jsx(NameplateDefault, { nameplate, isFocused: true, animate: null });
  return jsx(_modDef1652.View, { style: null, pointerEvents: "none", children: null });
});
