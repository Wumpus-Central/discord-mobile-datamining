// discord_app/modules/guild_onboarding/native/GuildOnboardingCompleted.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import UserProfileRolesCard from "../../user_profile/native/UserProfileRolesCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import GuildOnboardingPromptsStore from "../GuildOnboardingPromptsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = 400;
fn(4560);
let createStyles = {
  screen: { flex: 1, position: "relative" },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 24,
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
  },
  containerWithoutSplash: null,
  backgroundImage: null,
  title: null,
  subtitle: null,
  card: null,
  username: null,
  rolesHeader: null,
  roles: null,
  role: null,
  roleOverflow: null,
  animation: null,
  wave: null,
  animationText: null,
  getStartedButton: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.containerWithoutSplash = createStyles;
createStyles.backgroundImage = { position: "absolute", width: "100%", height: "100%" };
createStyles.title = {};
createStyles.subtitle = { marginTop: 16 };
createStyles.card = {
  marginTop: 24,
  padding: 16,
  paddingBottom: 32,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.username = { marginTop: 16 };
createStyles.rolesHeader = { marginTop: 8 };
createStyles.roles = { marginTop: 12, display: "flex", flexDirection: "row", flexWrap: "wrap" };
createStyles.role = { marginRight: 8 };
let obj1 = {
  marginTop: 24,
  padding: 16,
  paddingBottom: 32,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.roleOverflow = {
  paddingHorizontal: 8,
  height: 28,
  borderRadius: nativeDefault.radii.xs,
  display: "flex",
  justifyContent: "center",
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj2 = {
  paddingHorizontal: 8,
  height: 28,
  borderRadius: nativeDefault.radii.xs,
  display: "flex",
  justifyContent: "center",
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.animation = {
  marginTop: 24,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 2,
  borderRadius: nativeDefault.radii.sm,
  padding: 12,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
let obj4 = { transform: null };
let items = [{ translateX: 24 }, { rotate: "5deg" }];
obj4.transform = items;
createStyles.wave = obj4;
createStyles.animationText = { flexGrow: 1, marginLeft: 8 };
createStyles.getStartedButton = { marginTop: 24 };
let closure_13 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function GuildOnboardingCompletedTsx1(){const{withSequence,withTiming,withDelay,ANIMATION_DURATION,Easing,useReducedMotion}=this.__closure;const opacity=withSequence(withTiming(0,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(0.5,{duration:ANIMATION_DURATION})),withTiming(1,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const scale=withSequence(withTiming(1,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(1.5,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)})),withTiming(1,{duration:useReducedMotion?1:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const rawRotation=withSequence(withTiming('0deg',{duration:0}),withDelay(ANIMATION_DURATION,withTiming('-2deg',{duration:ANIMATION_DURATION})),withTiming('-5deg',{duration:ANIMATION_DURATION}));return{opacity:opacity,transform:[{rotate:rawRotation},{scale:scale}]};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingCompleted.tsx");

export default function GuildOnboardingCompleted(guildId) {
  guildId = guildId.guildId;
  ({ prompts, completeOnboarding } = guildId);
  const onClose = guildId.onClose;
  closure_7 = undefined;
  let found;
  allSelectedRoleIds = undefined;
  let isScreenReaderEnabled;
  let ref;
  let stateFromStores2;
  const tmp = closure_13();
  noop = tmp;
  let obj = guildId(onClose[10]);
  const navigation = obj.useNavigation();
  let obj1 = guildId(onClose[11]);
  let items = [found];
  const stateFromStores = obj1.useStateFromStores(items, () => found.getCurrentUser());
  let obj2 = guildId(onClose[11]);
  const items1 = [closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildStore.getGuild(guildId));
  const tmp8 = completeOnboarding(onClose[12])(guildId);
  closure_6 = tmp8;
  let obj3 = guildId(onClose[13]);
  let obj4 = guildId(onClose[14]);
  const profileThemeValues = obj4.useProfileThemeValues(obj3.useThemeContext().theme);
  if (profileThemeValues != null) {
    const rolePillBackgroundColor = profileThemeValues.rolePillBackgroundColor;
  }
  let guildSplashURL = null;
  if (null != stateFromStores1) {
    let tmp7Result = tmp7(tmp3[15]);
    obj = { id: null, splash: null, size: null };
    ({ id: obj7.id, splash: obj7.splash } = stateFromStores1);
    obj.size = 400 * tmp7(tmp3[16])();
    guildSplashURL = tmp7Result.getGuildSplashURL(obj);
  }
  let tmp2Result = tmp2(tmp3[11]);
  const items2 = [allSelectedRoleIds];
  const items3 = [guildId];
  closure_7 = tmp2Result.useStateFromStoresArray(
    items2,
    () => GuildOnboardingPromptsStore.getOnboardingResponses(guildId),
    items3,
  );
  let mapped = prompts.map((options) => options.options);
  found = mapped.flat().filter((id) => closure_7.includes(id.id));
  const items4 = [tmp8, found];
  const memo = noop.useMemo(() => {
    const mapped = found.map((roleIds) => roleIds.roleIds);
    allSelectedRoleIds = mapped.flat().filter(GlobalUtils.isNotNullish);
    let numSharedRoleMembers = 0;
    if (null != closure_6) {
      numSharedRoleMembers = 0;
      if (allSelectedRoleIds.length > 0) {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(
          allSelectedRoleIds.map((item) => {
            let num = closure_1_6[item];
            if (num == null) {
              num = 0;
            }
            return num;
          }),
          0,
        );
        const _Math2 = Math;
        numSharedRoleMembers = HermesBuiltin.apply(items, Math);
      }
    }
    return { numSharedRoleMembers, allSelectedRoleIds };
  }, items4);
  ({ numSharedRoleMembers, allSelectedRoleIds } = memo);
  tmp2Result = tmp2(tmp3[11]);
  const items5 = [closure_6];
  const items6 = [allSelectedRoleIds, guildId];
  const stateFromStoresArray = tmp2Result.useStateFromStoresArray(
    items5,
    () => GuildRoleStore.getManyRoles(guildId, allSelectedRoleIds),
    items6,
  );
  const items7 = [navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        return null;
      },
    });
  }, items7);
  const flatResult = mapped.flat();
  isScreenReaderEnabled = guildId(onClose[18]).useIsScreenReaderEnabled();
  ref = noop.useRef(false);
  const items8 = [completeOnboarding, onClose, isScreenReaderEnabled];
  const effect = noop.useEffect(() => {
    if (isScreenReaderEnabled) {
      if (!ref.current) {
        tmp2.current = true;
        completeOnboarding();
      }
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        if (!ref.current) {
          tmp.current = true;
          completeOnboarding();
        }
        onClose();
      }, 3600);
      return () => clearTimeout(closure_0);
    }
  }, items8);
  const tmp2Result1 = guildId(onClose[18]);
  const items9 = [stateFromStores1];
  stateFromStores2 = guildId(onClose[11]).useStateFromStores(items9, () => stateFromStores1.useReducedMotion);
  guildId(onClose[19]);
  const fn = function k() {
    let obj1 = timing;
    let obj2 = ReanimatedRexport;
    let obj3 = timing;
    let obj = { duration };
    const withTimingResult = obj1.withTiming(0, { duration: 0 });
    const withDelayResult = obj2.withDelay(duration, obj3.withTiming(0.5, obj));
    obj = { duration, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.out(ReanimatedRexport.Easing.ease);
    const withSequenceResult = obj.withSequence(withTimingResult, withDelayResult, timing.withTiming(1, obj));
    const obj8 = ReanimatedRexport;
    const withTimingResult1 = timing.withTiming(1, { duration: 0 });
    const obj10 = ReanimatedRexport;
    obj1 = { duration, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj1.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    const withDelayResult1 = obj10.withDelay(duration, timing.withTiming(1.5, obj1));
    let num = 1;
    if (!stateFromStores2) {
      num = duration;
    }
    obj2 = { duration: num, easing: null };
    const Easing3 = ReanimatedRexport.Easing;
    obj2.easing = Easing3.out(ReanimatedRexport.Easing.ease);
    obj3 = { opacity: withSequenceResult, transform: null };
    const obj4 = { rotate: null };
    const tmpResult = timing;
    const withSequenceResult1 = obj8.withSequence(withTimingResult1, withDelayResult1, timing.withTiming(1, obj2));
    const withTimingResult2 = tmpResult.withTiming("0deg", { duration: 0 });
    const tmpResult1 = ReanimatedRexport;
    const tmpResult2 = timing;
    const withDelayResult2 = tmpResult1.withDelay(duration, timing.withTiming("-2deg", { duration }));
    obj4.rotate = tmpResult.withSequence(withTimingResult2, withDelayResult2, timing.withTiming("-5deg", { duration }));
    const items = [obj4, { scale: withSequenceResult1 }];
    obj3.transform = items;
    return obj3;
  };
  obj = {
    withSequence: tmp2(tmp3[19]).withSequence,
    withTiming: tmp2(tmp3[20]).withTiming,
    withDelay: tmp2(tmp3[19]).withDelay,
    ANIMATION_DURATION: stateFromStores2,
    Easing: tmp2(tmp3[19]).Easing,
    useReducedMotion: stateFromStores2,
  };
  fn.__closure = obj;
  fn.__workletHash = 8282245217026;
  fn.__initData = __initData;
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const diff = stateFromStoresArray.length - 3;
      obj1 = { style: tmp.screen, children: null };
      let tmp20 = null;
      if (null != guildSplashURL) {
        obj2 = { source: null, style: null };
        obj3 = { uri: guildSplashURL };
        obj2.source = obj3;
        obj2.style = tmp.backgroundImage;
        tmp20 = isScreenReaderEnabled(tmp7(tmp3[21]), obj2);
      }
      const items10 = [tmp20];
      const items11 = [tmp.container];
      let prop = null;
      if (null == guildSplashURL) {
        prop = tmp.containerWithoutSplash;
      }
      obj4 = { bottom: true, style: null, children: null };
      items11[1] = prop;
      obj4.style = items11;
      const obj5 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xxl/extrabold",
        color: null,
        children: null,
      };
      let str = "text-overlay-light";
      let str2 = "text-overlay-light";
      if (null == guildSplashURL) {
        str2 = "mobile-text-heading-primary";
      }
      obj5.color = str2;
      const intl = tmp2(tmp3[24]).intl;
      obj5.children = intl.string(tmp2(tmp3[24]).t.PFWIYe);
      const items12 = [isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj5), , ,];
      let obj6 = {
        style: tmp.subtitle,
        accessibilityRole: "header",
        variant: "text-md/medium",
        color: null,
        children: null,
      };
      if (null == guildSplashURL) {
        str = "text-muted";
      }
      obj6.color = str;
      const intl2 = tmp2(tmp3[24]).intl;
      obj6.children = intl2.string(tmp2(tmp3[24]).t.og4NNr);
      items12[1] = isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj6);
      const obj7 = { style: tmp.card, children: null };
      let obj8 = { size: tmp2(tmp3[25]).AvatarSizes.XXLARGE, user: stateFromStores, guildId, animate: false };
      const items13 = [isScreenReaderEnabled(tmp2(tmp3[25]).Avatar, obj8), , , ,];
      let obj9 = {
        style: tmp.username,
        variant: "heading-xl/semibold",
        color: "mobile-text-heading-primary",
        children: stateFromStores.username,
      };
      items13[1] = isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj9);
      let tmp21Result = null;
      if (numSharedRoleMembers > 0) {
        let obj10 = { style: tmp.rolesHeader, variant: "text-sm/normal", color: "text-muted", children: null };
        const intl3 = tmp2(tmp3[24]).intl;
        let obj11 = { numSharedRoleMembers };
        obj10.children = intl3.format(tmp2(tmp3[24]).t.l1Jc1n, obj11);
        tmp21Result = tmp21(tmp2(tmp3[23]).Text, obj10);
      }
      items13[2] = tmp21Result;
      const obj12 = { style: tmp.roles, children: null };
      const substr = stateFromStoresArray.slice(0, 3);
      const items14 = [
        substr.map((role) => {
          let obj = { style: role.role, children: null };
          obj = { role, guildId: stateFromStores1.id, disableInteraction: true };
          obj.children = closure_2_10(UserProfileRolesCard.RoleItem, obj);
          return closure_2_10(React4, obj, role.id);
        }),
      ];
      tmp21Result = null;
      if (0 < diff) {
        let obj13 = { style: null, children: null };
        const items15 = [tmp.roleOverflow, { backgroundColor: rolePillBackgroundColor }];
        obj13.style = items15;
        const obj14 = {
          variant: "heading-deprecated-12/semibold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const _HermesInternal = HermesInternal;
        obj14.children = "+" + diff;
        obj13.children = tmp21(tmp2(tmp3[23]).Text, obj14);
        tmp21Result = tmp21(tmp32, obj13);
      }
      items14[1] = tmp21Result;
      obj12.children = items14;
      items13[3] = ref(navigation, obj12);
      const obj15 = { style: null, children: null };
      const items16 = [tmp.animation, tmp18];
      obj15.style = items16;
      const obj16 = { guild: stateFromStores1, size: null };
      tmp7Result = tmp7(tmp3[27]);
      obj16.size = tmp2(tmp3[27]).GuildIconSizes.LARGE;
      const items17 = [isScreenReaderEnabled(tmp7Result, obj16), ,];
      const obj17 = { style: tmp.animationText, children: null };
      const obj18 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null };
      const intl4 = tmp2(tmp3[24]).intl;
      const obj19 = { guildName: stateFromStores1.name };
      obj18.children = intl4.format(tmp2(tmp3[24]).t.FXREhf, obj19);
      const items18 = [isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj18)];
      const obj20 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const _HermesInternal2 = HermesInternal;
      obj20.children = "" + tmp7(tmp3[28])().format("LL");
      items18[1] = isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj20);
      obj17.children = items18;
      items17[1] = ref(navigation, obj17);
      const obj21 = { source: null, style: null };
      const obj33 = tmp7(tmp3[28])();
      obj21.source = tmp7(tmp3[29]);
      obj21.style = tmp.wave;
      items17[2] = isScreenReaderEnabled(tmp7(tmp3[21]), obj21);
      obj15.children = items17;
      items13[4] = ref(tmp7(tmp3[19]).View, obj15);
      obj7.children = items13;
      items12[2] = ref(navigation, obj7);
      let tmp21Result1 = null;
      if (isScreenReaderEnabled) {
        const obj22 = { style: tmp.getStartedButton, children: null };
        const obj23 = { variant: "primary", size: "md", grow: true, text: null, onPress: null };
        const intl5 = tmp2(tmp3[24]).intl;
        obj23.text = intl5.string(tmp2(tmp3[24]).t.LhlgY9);
        obj23.onPress = onClose;
        obj22.children = tmp21(tmp2(tmp3[30]).Button, obj23);
        tmp21Result1 = tmp21(tmp32, obj22);
      }
      const obj24 = { children: null };
      items12[3] = tmp21Result1;
      obj24.children = items12;
      obj4.children = ref(navigation, obj24);
      items10[1] = isScreenReaderEnabled(tmp2(tmp3[22]).SafeAreaPaddingView, obj4);
      obj1.children = items10;
      return ref(navigation, obj1);
    }
  }
  return null;
}
