import "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { AnalyticsSections } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = { stiffness: 70, damping: 10 };
createCacheKey = { wrapper: { display: "flex", alignItems: "center", position: "absolute", width: "100%", zIndex: 1, bottom: -76 }, innerWraper: null, guildInfoContainer: null, guildIcon: null, guildIconText: null, guildName: null, buttonContainer: null, button: null, border: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, display: "flex", flexDirection: "row", alignItems: "center", position: "relative", height: 76, width: 343, borderRadius: 76, paddingLeft: 13, paddingVertical: 13, paddingRight: 27 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginRight: 10 };
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginRight: 10, height: 50, width: 50, borderRadius: 25 };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginRight: 10, height: 50, width: 50, borderRadius: 25 };
createCacheKey[4] = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[5] = { flexGrow: 1, flexShrink: 1, flexBasis: "auto" };
createCacheKey[6] = { height: 40 };
createCacheKey[7] = { minWidth: 100 };
createCacheKey[8] = { padding: 2, borderRadius: 80 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function GuildBoostingMarketingPersistentCtaTsx1(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}" };
let obj2 = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx");

export default function GuildBoostingMarketingPersistentCta(arg0) {
  let fractionalPremiumState;
  let guild;
  let isVisible;
  let premiumGroupRole;
  let previousGuildSubscriptionSlot;
  const tmp = createCacheKey();
  ({ guild, isVisible } = arg0);
  ({ fractionalPremiumState, previousGuildSubscriptionSlot, premiumGroupRole } = arg0);
  let obj = isVisible(647);
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = isVisible(4054);
  const fn = function _() {
    let num = -120;
    if (!stateFromStores) {
      let obj = isVisible(outer1_2[9]);
      let num2 = 120;
      if (isVisible) {
        num2 = -120;
      }
      num = obj.withSpring(num2, outer1_8);
    }
    obj = { transform: items, opacity: null };
    items = [{ translateY: num }];
    let num3 = 0;
    if (isVisible) {
      num3 = 1;
    }
    obj[1] = isVisible(outer1_2[9]).withSpring(num3, outer1_8);
    return obj;
  };
  obj = { useReducedMotion: stateFromStores, VISIBILITY_OFFSET: 120, withSpring: isVisible(4603).withSpring, isVisible, SPRING_CONFIG: closure_8 };
  fn.__closure = obj;
  fn.__workletHash = 14370895185277;
  fn.__initData = closure_10;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items1, children: null };
  items1 = [tmp.wrapper, animatedStyle];
  obj1 = { angle: 45, angleCenter: { x: 0.5, y: 0.5 }, colors: null, locations: null, style: null, useAngle: true, children: null };
  const items2 = [stateFromStores(712).unsafe_rawColors.GUILD_BOOSTING_BLUE, stateFromStores(712).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj1[2] = items2;
  obj1[3] = [0, 1];
  obj1[4] = tmp.border;
  const obj2 = { style: tmp.innerWraper, children: null };
  const obj3 = { style: tmp.guildInfoContainer, children: null };
  const obj4 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: null };
  const tmp4 = stateFromStores(4615);
  obj4[3] = isVisible(5570).GuildIconSizes.LARGE;
  const items3 = [callback(stateFromStores(5570), obj4), callback(isVisible(4189).Text, { style: tmp.guildName, variant: "text-md/bold", lineClamp: 1, children: guild.name })];
  obj3[1] = items3;
  const items4 = [callback2(View, obj3), ];
  const obj5 = { style: tmp.guildName, variant: "text-md/bold", lineClamp: 1, children: guild.name };
  const tmp5 = stateFromStores(5570);
  items4[1] = callback(View, { style: tmp.buttonContainer, children: callback(stateFromStores(11694), obj7) });
  obj2[1] = items4;
  obj1[6] = callback2(View, obj2);
  obj[1] = callback(tmp4, obj1);
  return callback(stateFromStores(4054).View, obj);
};
export const VISIBILITY_OFFSET = 120;