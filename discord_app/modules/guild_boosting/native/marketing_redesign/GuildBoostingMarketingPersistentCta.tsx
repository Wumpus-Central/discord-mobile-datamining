// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const SPRING_CONFIG = { stiffness: 70, damping: 10 };
fn(4560);
let createStyles = {
  wrapper: { display: "flex", alignItems: "center", position: "absolute", width: "100%", zIndex: 1, bottom: -76 },
  innerWraper: null,
  guildInfoContainer: null,
  guildIcon: null,
  guildIconText: null,
  guildName: null,
  buttonContainer: null,
  button: null,
  border: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "relative",
  height: 76,
  width: 343,
  borderRadius: 76,
  paddingLeft: 13,
  paddingVertical: 13,
  paddingRight: 27,
};
createStyles.innerWraper = size;
createStyles.guildInfoContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
  marginRight: 10,
};
const size1 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginRight: 10,
  height: 50,
  width: 50,
  borderRadius: 25,
};
createStyles.guildIcon = size1;
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.guildIconText = createStyles;
createStyles.guildName = { flexGrow: 1, flexShrink: 1, flexBasis: "auto" };
createStyles.buttonContainer = { height: 40 };
createStyles.button = { minWidth: 100 };
createStyles.border = { padding: 2, borderRadius: 80 };
let closure_9 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function GuildBoostingMarketingPersistentCtaTsx1(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}",
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx",
);

export default function GuildBoostingMarketingPersistentCta(arg0) {
  const tmp = closure_9();
  ({ guild, isVisible } = arg0);
  ({ fractionalPremiumState, previousGuildSubscriptionSlot, premiumGroupRole } = arg0);
  let obj = isVisible(563);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = isVisible(4296);
  const fn = function _() {
    let num = -120;
    if (!stateFromStores) {
      let obj = spring;
      let num2 = 120;
      if (isVisible) {
        num2 = -120;
      }
      num = obj.withSpring(num2, closure_8);
    }
    obj = { transform: null, opacity: null };
    const items = [{ translateY: num }];
    obj.transform = items;
    let num3 = 0;
    if (isVisible) {
      num3 = 1;
    }
    obj.opacity = spring.withSpring(num3, closure_8);
    return obj;
  };
  obj = {
    useReducedMotion: stateFromStores,
    VISIBILITY_OFFSET: 120,
    withSpring: isVisible(4974).withSpring,
    isVisible,
    SPRING_CONFIG,
  };
  fn.__closure = obj;
  fn.__workletHash = 14370895185277;
  fn.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: null, children: null };
  const items1 = [tmp.wrapper, animatedStyle];
  obj.style = items1;
  obj1 = {
    angle: 45,
    angleCenter: { x: 0.5, y: 0.5 },
    colors: null,
    locations: null,
    style: null,
    useAngle: true,
    children: null,
  };
  const items2 = [
    stateFromStores(576).unsafe_rawColors.GUILD_BOOSTING_BLUE,
    stateFromStores(576).unsafe_rawColors.GUILD_BOOSTING_PURPLE,
  ];
  obj1.colors = items2;
  obj1.locations = [0, 1];
  obj1.style = tmp.border;
  const obj2 = { style: tmp.innerWraper, children: null };
  const obj3 = { style: tmp.guildInfoContainer, children: null };
  const obj4 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: null };
  const tmp4 = stateFromStores(4987);
  obj4.size = isVisible(5584).GuildIconSizes.LARGE;
  const items3 = [
    closure_6(stateFromStores(5584), obj4),
    closure_6(isVisible(4556).Text, {
      style: tmp.guildName,
      variant: "text-md/bold",
      lineClamp: 1,
      children: guild.name,
    }),
  ];
  obj3.children = items3;
  const items4 = [closure_7(View, obj3)];
  const obj6 = {
    style: tmp.buttonContainer,
    children: closure_6(stateFromStores(7402), {
      guild,
      previousGuildSubscriptionSlot,
      useShortenedCTA: true,
      styles: tmp.button,
      analyticsSection: AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
      fractionalPremiumState,
      premiumGroupRole,
    }),
  };
  items4[1] = closure_6(View, obj6);
  obj2.children = items4;
  obj1.children = closure_7(View, obj2);
  obj.children = closure_6(tmp4, obj1);
  return closure_6(stateFromStores(4296).View, obj);
}
export const VISIBILITY_OFFSET = 120;
