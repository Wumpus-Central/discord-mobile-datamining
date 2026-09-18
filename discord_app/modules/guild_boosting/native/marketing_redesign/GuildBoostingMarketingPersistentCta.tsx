// === Module 7597: GuildBoostingMarketingPersistentCta ===

// Module 7597 (GuildBoostingMarketingPersistentCta)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5143 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4714 */;

require = fn;
const View = fn(17).View;
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const SPRING_CONFIG = { stiffness: 70, damping: 10 };
const createStyles = fn(4722);
let obj2 = { wrapper: { display: "flex", alignItems: "center", position: "absolute", width: "100%", zIndex: 1, bottom: -76 }, innerWraper: null, guildInfoContainer: null, guildIcon: null, guildIconText: null, guildName: null, buttonContainer: null, button: null, border: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, display: "flex", flexDirection: "row", alignItems: "center", position: "relative", height: 76, width: 343, borderRadius: 76, paddingLeft: 13, paddingVertical: 13, paddingRight: 27 };
obj2.innerWraper = size;
obj2.guildInfoContainer = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginRight: 10 };
const size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginRight: 10, height: 50, width: 50, borderRadius: 25 };
obj2.guildIcon = size1;
obj2.guildIconText = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.guildName = { flexGrow: 1, flexShrink: 1, flexBasis: "auto" };
obj2.buttonContainer = { height: 40 };
obj2.button = { minWidth: 100 };
obj2.border = { padding: 2, borderRadius: 80 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function GuildBoostingMarketingPersistentCtaTsx1(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx");

export default function GuildBoostingMarketingPersistentCta(arg0) {
  const tmp = closure_9();
  ({ guild, isVisible } = arg0);
  ({ fractionalPremiumState, previousGuildSubscriptionSlot, premiumGroupRole } = arg0);
  let items = [AccessibilityStore];
  const stateFromStores = isVisible(563).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = isVisible(563);
  const fn = function _() {
    let num = -120;
    if (!stateFromStores) {
      let num2 = 120;
      if (isVisible) {
        num2 = -120;
      }
      num = spring.withSpring(num2, closure_8);
    }
    const obj2 = { transform: null, opacity: null };
    const items = [{ translateY: num }];
    obj2.transform = items;
    let num3 = 0;
    if (isVisible) {
      num3 = 1;
    }
    obj2.opacity = spring.withSpring(num3, closure_8);
    return obj2;
  };
  let obj2 = isVisible(4458);
  fn.__closure = { useReducedMotion: stateFromStores, VISIBILITY_OFFSET: 120, withSpring: isVisible(5143).withSpring, isVisible, SPRING_CONFIG };
  fn.__workletHash = 14370895185277;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { style: null, children: null };
  const items1 = [tmp.wrapper, animatedStyle];
  obj4.style = items1;
  const obj5 = { angle: 45, angleCenter: { x: 0.5, y: 0.5 }, colors: null, locations: null, style: null, useAngle: true, children: null };
  const obj3 = { useReducedMotion: stateFromStores, VISIBILITY_OFFSET: 120, withSpring: isVisible(5143).withSpring, isVisible, SPRING_CONFIG };
  const items2 = [stateFromStores(576).unsafe_rawColors.GUILD_BOOSTING_BLUE, stateFromStores(576).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj5.colors = items2;
  obj5.locations = [0, 1];
  obj5.style = tmp.border;
  const obj6 = { style: tmp.innerWraper, children: null };
  const obj7 = { style: tmp.guildInfoContainer, children: null };
  const obj8 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: null };
  const tmp4 = stateFromStores(5156);
  obj8.size = isVisible(5754).GuildIconSizes.LARGE;
  const items3 = [closure_6(stateFromStores(5754), obj8), closure_6(isVisible(4718).Text, { style: tmp.guildName, variant: "text-md/bold", lineClamp: 1, children: guild.name })];
  obj7.children = items3;
  const items4 = [closure_7(View, obj7), ];
  const obj10 = { style: tmp.buttonContainer, children: closure_6(stateFromStores(7598), { guild, previousGuildSubscriptionSlot, useShortenedCTA: true, styles: tmp.button, analyticsSection: AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR, fractionalPremiumState, premiumGroupRole }) };
  items4[1] = closure_6(View, obj10);
  obj6.children = items4;
  obj5.children = closure_7(View, obj6);
  obj4.children = closure_6(tmp4, obj5);
  return closure_6(stateFromStores(4458).View, obj4);
};
export const VISIBILITY_OFFSET = 120;