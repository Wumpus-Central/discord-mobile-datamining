// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx
import useStateFromStores from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import LinearGradientDefault from "../../../../../_runtime/05725_LinearGradient.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import GuildBoostingSubscribeButtonDefault from "../GuildBoostingSubscribeButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const _modDef1652 = _mod1652;
const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const AnalyticsSections = fn(1072).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let closure_8 = { stiffness: 70, damping: 10 };
const createStyles = fn(5143);
let obj2 = {
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
obj2.innerWraper = size;
obj2.guildInfoContainer = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginRight: 10 };
const size1 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginRight: 10,
  height: 50,
  width: 50,
  borderRadius: 25,
};
obj2.guildIcon = size1;
obj2.guildIconText = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.guildName = { flexGrow: 1, flexShrink: 1, flexBasis: "auto" };
obj2.buttonContainer = { height: 40 };
obj2.button = { minWidth: 100 };
obj2.border = { padding: 2, borderRadius: 80 };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = {
  code: "(function GuildBoostingMarketingPersistentCtaTsx1(){let[useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG]=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};})",
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx",
);

export default function GuildBoostingMarketingPersistentCta(guild) {
  const tmp = closure_9();
  guild = guild.guild;
  ({ fractionalPremiumState, previousGuildSubscriptionSlot, isVisible, premiumGroupRole } = guild);
  items = [AccessibilityStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => _undefined2.useReducedMotion);
  const items1 = [closure_10, stateFromStores, 120, spring_spring.withSpring, isVisible, closure_8];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
  class GuildBoostingMarketingPersistentCtaTsx1 {
    constructor() {
      if (closure_0) {
        tmp5 = closure_1;
        tmp4 = -closure_1;
      } else {
        tmp = closure_3;
        tmp2 = closure_1;
        tmp3 = closure_4;
        tmp4 = closure_2(closure_3 ? -tmp2 : tmp2, closure_4);
      }
      obj = { transform: null, opacity: null };
      items = [];
      items[0] = { translateY: tmp4 };
      obj.transform = items;
      num = 0;
      tmp6 = closure_2;
      if (closure_3) {
        num = 1;
      }
      obj.opacity = tmp6(num, closure_4);
      return obj;
    }
  }
  const items2 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  GuildBoostingMarketingPersistentCtaTsx1.__closure = items2;
  GuildBoostingMarketingPersistentCtaTsx1.__workletHash = 5251879028260;
  GuildBoostingMarketingPersistentCtaTsx1.__initData = tmp5;
  const animatedStyle = _mod1652.useAnimatedStyle(GuildBoostingMarketingPersistentCtaTsx1);
  const obj3 = { style: null, children: null };
  const items3 = [tmp.wrapper, animatedStyle];
  obj3.style = items3;
  const obj4 = {
    angle: 45,
    angleCenter: { x: 0.5, y: 0.5 },
    colors: null,
    locations: null,
    style: null,
    useAngle: true,
    children: null,
  };
  const items4 = [
    nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE,
    nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE,
  ];
  obj4.colors = items4;
  obj4.locations = [0, 1];
  obj4.style = tmp.border;
  const obj5 = { style: tmp.innerWraper, children: null };
  const obj6 = { style: tmp.guildInfoContainer, children: null };
  const obj7 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: null };
  const tmp12 = LinearGradientDefault;
  obj7.size = GuildIcon.GuildIconSizes.LARGE;
  const items5 = [
    timestampProducer(GuildIconDefault, obj7),
    timestampProducer(Text_Text.Text, {
      style: tmp.guildName,
      variant: "body-md/semibold",
      lineClamp: 1,
      children: guild.name,
    }),
  ];
  obj6.children = items5;
  const items6 = [metroImportDefault(View, obj6)];
  const obj9 = {
    style: tmp.buttonContainer,
    children: timestampProducer(GuildBoostingSubscribeButtonDefault, {
      guild,
      previousGuildSubscriptionSlot,
      useShortenedCTA: true,
      styles: tmp.button,
      analyticsSection: AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
      fractionalPremiumState,
      premiumGroupRole,
    }),
  };
  items6[1] = timestampProducer(View, obj9);
  obj5.children = items6;
  obj4.children = metroImportDefault(View, obj5);
  obj3.children = timestampProducer(tmp12, obj4);
  return timestampProducer(_modDef1652.View, obj3);
}
export const VISIBILITY_OFFSET = 120;
