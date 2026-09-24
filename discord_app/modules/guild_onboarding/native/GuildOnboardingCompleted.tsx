// === Module 7516: GuildOnboardingCompleted ===

// Module 7516 (GuildOnboardingCompleted)
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4561 */;
import timing from "timing" /* 4830 */;
import UserProfileRolesCard from "UserProfileRolesCard" /* 7518 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;
import GuildRoleStore from "GuildRoleStore" /* 2101 */;
import GuildStore from "GuildStore" /* 2066 */;
import UserStore from "UserStore" /* 1372 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7433 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = 400;
const createStyles = fn(4829);
let obj2 = { screen: { flex: 1, position: "relative" }, container: { backgroundColor: "rgba(0, 0, 0, 0.5)", paddingHorizontal: 24, display: "flex", justifyContent: "center", flexGrow: 1 }, containerWithoutSplash: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, backgroundImage: { position: "absolute", width: "100%", height: "100%" }, title: {}, subtitle: { marginTop: 16 }, card: null, username: null, rolesHeader: null, roles: null, role: null, roleOverflow: null, animation: null, wave: null, animationText: null, getStartedButton: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.card = { marginTop: 24, padding: 16, paddingBottom: 32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.username = { marginTop: 16 };
obj2.rolesHeader = { marginTop: 8 };
obj2.roles = { marginTop: 12, display: "flex", flexDirection: "row", flexWrap: "wrap" };
obj2.role = { marginRight: 8 };
let obj4 = { marginTop: 24, padding: 16, paddingBottom: 32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.roleOverflow = { paddingHorizontal: 8, height: 28, borderRadius: nativeDefault.radii.xs, display: "flex", justifyContent: "center", borderWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let obj5 = { paddingHorizontal: 8, height: 28, borderRadius: nativeDefault.radii.xs, display: "flex", justifyContent: "center", borderWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.animation = { marginTop: 24, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: nativeDefault.radii.sm, padding: 12, display: "flex", flexDirection: "row", alignItems: "center" };
let obj7 = { transform: null };
let items = [{ translateX: 24 }, { rotate: "5deg" }];
obj7.transform = items;
obj2.wave = obj7;
obj2.animationText = { flexGrow: 1, marginLeft: 8 };
obj2.getStartedButton = { marginTop: 24 };
let closure_13 = createStyles.createStyles(obj2);
const __initData = { code: "function GuildOnboardingCompletedTsx1(){const{withSequence,withTiming,withDelay,ANIMATION_DURATION,Easing,useReducedMotion}=this.__closure;const opacity=withSequence(withTiming(0,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(0.5,{duration:ANIMATION_DURATION})),withTiming(1,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const scale=withSequence(withTiming(1,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(1.5,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)})),withTiming(1,{duration:useReducedMotion?1:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const rawRotation=withSequence(withTiming('0deg',{duration:0}),withDelay(ANIMATION_DURATION,withTiming('-2deg',{duration:ANIMATION_DURATION})),withTiming('-5deg',{duration:ANIMATION_DURATION}));return{opacity:opacity,transform:[{rotate:rawRotation},{scale:scale}]};}" };
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
  const navigation = guildId(onClose[10]).useNavigation();
  let obj = guildId(onClose[10]);
  let items = [found];
  const stateFromStores = guildId(onClose[11]).useStateFromStores(items, () => found.getCurrentUser());
  let obj2 = guildId(onClose[11]);
  const items1 = [closure_7];
  const stateFromStores1 = guildId(onClose[11]).useStateFromStores(items1, () => GuildStore.getGuild(guildId));
  const tmp8 = completeOnboarding(onClose[12])(guildId);
  closure_6 = tmp8;
  let obj3 = guildId(onClose[11]);
  let obj4 = guildId(onClose[13]);
  const profileThemeValues = guildId(onClose[14]).useProfileThemeValues(obj4.useThemeContext().theme);
  if (profileThemeValues != null) {
    const rolePillBackgroundColor = profileThemeValues.rolePillBackgroundColor;
  }
  let guildSplashURL = null;
  if (null != stateFromStores1) {
    let obj6 = { id: null, splash: null, size: null };
    ({ id: obj7.id, splash: obj7.splash } = stateFromStores1);
    obj6.size = 400 * tmp7(tmp3[16])();
    guildSplashURL = tmp7(tmp3[15]).getGuildSplashURL(obj6);
    const tmp7Result = tmp7(tmp3[15]);
  }
  let obj5 = guildId(onClose[14]);
  const items2 = [allSelectedRoleIds];
  const items3 = [guildId];
  closure_7 = guildId(onClose[11]).useStateFromStoresArray(items2, () => GuildOnboardingPromptsStore.getOnboardingResponses(guildId), items3);
  let mapped = prompts.map((options) => options.options);
  const tmp2Result = guildId(onClose[11]);
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
        HermesBuiltin.arraySpread(allSelectedRoleIds.map((item) => {
          let num = closure_1_6[item];
          if (num == null) {
            num = 0;
          }
          return num;
        }), 0);
        const _Math2 = Math;
        numSharedRoleMembers = HermesBuiltin.apply(items, Math);
      }
    }
    return { numSharedRoleMembers, allSelectedRoleIds };
  }, items4);
  ({ numSharedRoleMembers, allSelectedRoleIds } = memo);
  const flatResult = mapped.flat();
  const items5 = [closure_6];
  const items6 = [allSelectedRoleIds, guildId];
  const stateFromStoresArray = guildId(onClose[11]).useStateFromStoresArray(items5, () => GuildRoleStore.getManyRoles(guildId, allSelectedRoleIds), items6);
  const items7 = [navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        return null;
      }
    });
  }, items7);
  const tmp2Result5 = guildId(onClose[11]);
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
  const tmp2Result6 = guildId(onClose[18]);
  const items9 = [stateFromStores1];
  stateFromStores2 = guildId(onClose[11]).useStateFromStores(items9, () => stateFromStores1.useReducedMotion);
  guildId(onClose[19]);
  const fn = function k() {
    const obj = ReanimatedRexport;
    const withTimingResult = timing.withTiming(0, { duration: 0 });
    const obj3 = ReanimatedRexport;
    const obj5 = { duration };
    const withDelayResult = obj3.withDelay(duration, timing.withTiming(0.5, { duration }));
    const obj7 = { duration, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj7.easing = Easing.out(ReanimatedRexport.Easing.ease);
    const withSequenceResult = obj.withSequence(withTimingResult, withDelayResult, timing.withTiming(1, obj7));
    const obj8 = ReanimatedRexport;
    const withTimingResult1 = timing.withTiming(1, { duration: 0 });
    const obj10 = ReanimatedRexport;
    const obj12 = { duration, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj12.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    const withDelayResult1 = obj10.withDelay(duration, timing.withTiming(1.5, obj12));
    let num = 1;
    if (!stateFromStores2) {
      num = duration;
    }
    const obj14 = { duration: num, easing: null };
    const Easing3 = ReanimatedRexport.Easing;
    obj14.easing = Easing3.out(ReanimatedRexport.Easing.ease);
    const obj15 = { opacity: withSequenceResult, transform: null };
    const obj16 = { rotate: null };
    const withSequenceResult1 = obj8.withSequence(withTimingResult1, withDelayResult1, timing.withTiming(1, obj14));
    const tmpResult = ReanimatedRexport;
    const tmpResult5 = timing;
    const withTimingResult2 = timing.withTiming("0deg", { duration: 0 });
    const tmpResult6 = ReanimatedRexport;
    const tmpResult7 = timing;
    const withDelayResult2 = tmpResult6.withDelay(duration, timing.withTiming("-2deg", { duration }));
    obj16.rotate = tmpResult.withSequence(withTimingResult2, withDelayResult2, timing.withTiming("-5deg", { duration }));
    const items = [obj16, { scale: withSequenceResult1 }];
    obj15.transform = items;
    return obj15;
  };
  const tmp2Result7 = guildId(onClose[11]);
  fn.__closure = { withSequence: guildId(onClose[19]).withSequence, withTiming: guildId(onClose[20]).withTiming, withDelay: guildId(onClose[19]).withDelay, ANIMATION_DURATION: stateFromStores2, Easing: guildId(onClose[19]).Easing, useReducedMotion: stateFromStores2 };
  fn.__workletHash = 8282245217026;
  fn.__initData = __initData;
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const diff = stateFromStoresArray.length - 3;
      let obj9 = { style: tmp.screen, children: null };
      let tmp20 = null;
      if (null != guildSplashURL) {
        let obj10 = { source: null, style: null };
        let obj11 = { uri: guildSplashURL };
        obj10.source = obj11;
        obj10.style = tmp.backgroundImage;
        tmp20 = isScreenReaderEnabled(tmp7(tmp3[21]), obj10);
      }
      const items10 = [tmp20, ];
      const items11 = [tmp.container, ];
      let prop = null;
      if (null == guildSplashURL) {
        prop = tmp.containerWithoutSplash;
      }
      let obj12 = { bottom: true, style: null, children: null };
      items11[1] = prop;
      obj12.style = items11;
      let obj13 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xxl/extrabold", color: null, children: null };
      let str = "text-overlay-light";
      let str2 = "text-overlay-light";
      if (null == guildSplashURL) {
        str2 = "mobile-text-heading-primary";
      }
      obj13.color = str2;
      const intl = tmp2(tmp3[24]).intl;
      obj13.children = intl.string(tmp2(tmp3[24]).t.PFWIYe);
      const items12 = [isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj13), , , ];
      let obj14 = { style: tmp.subtitle, accessibilityRole: "header", variant: "text-md/medium", color: null, children: null };
      if (null == guildSplashURL) {
        str = "text-muted";
      }
      obj14.color = str;
      const intl2 = tmp2(tmp3[24]).intl;
      obj14.children = intl2.string(tmp2(tmp3[24]).t.og4NNr);
      items12[1] = isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj14);
      let obj15 = { style: tmp.card, children: null };
      let obj16 = { size: tmp2(tmp3[25]).AvatarSizes.XXLARGE, user: stateFromStores, guildId, animate: false };
      const items13 = [isScreenReaderEnabled(tmp2(tmp3[25]).Avatar, obj16), , , , ];
      const obj17 = { style: tmp.username, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: stateFromStores.username };
      items13[1] = isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj17);
      let tmp21Result = null;
      if (numSharedRoleMembers > 0) {
        const obj18 = { style: tmp.rolesHeader, variant: "text-sm/normal", color: "text-muted", children: null };
        const intl3 = tmp2(tmp3[24]).intl;
        const obj19 = { numSharedRoleMembers };
        obj18.children = intl3.format(tmp2(tmp3[24]).t.l1Jc1n, obj19);
        tmp21Result = tmp21(tmp2(tmp3[23]).Text, obj18);
      }
      items13[2] = tmp21Result;
      const obj20 = { style: tmp.roles, children: null };
      const substr = stateFromStoresArray.slice(0, 3);
      const items14 = [
        substr.map((role) => {
              const obj = { style: role.role, children: closure_2_10(UserProfileRolesCard.RoleItem, { role, guildId: stateFromStores1.id, disableInteraction: true }) };
              return closure_2_10(React4, obj, role.id);
            }),

      ];
      let tmp21Result3 = null;
      if (0 < diff) {
        const obj21 = { style: null, children: null };
        const items15 = [tmp.roleOverflow, { backgroundColor: rolePillBackgroundColor }];
        obj21.style = items15;
        const obj22 = { variant: "heading-deprecated-12/semibold", color: "mobile-text-heading-primary", children: null };
        const _HermesInternal = HermesInternal;
        obj22.children = "+" + diff;
        obj21.children = tmp21(tmp2(tmp3[23]).Text, obj22);
        tmp21Result3 = tmp21(tmp32, obj21);
      }
      items14[1] = tmp21Result3;
      obj20.children = items14;
      items13[3] = ref(navigation, obj20);
      const obj23 = { style: null, children: null };
      const items16 = [tmp.animation, tmp18];
      obj23.style = items16;
      const obj24 = { guild: stateFromStores1, size: tmp2(tmp3[27]).GuildIconSizes.LARGE };
      const items17 = [isScreenReaderEnabled(tmp7(tmp3[27]), obj24), , ];
      const obj25 = { style: tmp.animationText, children: null };
      const obj26 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null };
      const intl4 = tmp2(tmp3[24]).intl;
      const obj27 = { guildName: stateFromStores1.name };
      obj26.children = intl4.format(tmp2(tmp3[24]).t.FXREhf, obj27);
      const items18 = [isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj26), ];
      const obj28 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const tmp7Result3 = tmp7(tmp3[27]);
      const _HermesInternal2 = HermesInternal;
      obj28.children = "" + tmp7(tmp3[28])().format("LL");
      items18[1] = isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj28);
      obj25.children = items18;
      items17[1] = ref(navigation, obj25);
      const obj29 = { source: null, style: null };
      const obj33 = tmp7(tmp3[28])();
      obj29.source = tmp7(tmp3[29]);
      obj29.style = tmp.wave;
      items17[2] = isScreenReaderEnabled(tmp7(tmp3[21]), obj29);
      obj23.children = items17;
      items13[4] = ref(tmp7(tmp3[19]).View, obj23);
      obj15.children = items13;
      items12[2] = ref(navigation, obj15);
      let tmp21Result4 = null;
      if (isScreenReaderEnabled) {
        const obj30 = { style: tmp.getStartedButton, children: null };
        const obj31 = { variant: "primary", size: "md", grow: true, text: null, onPress: null };
        const intl5 = tmp2(tmp3[24]).intl;
        obj31.text = intl5.string(tmp2(tmp3[24]).t.LhlgY9);
        obj31.onPress = onClose;
        obj30.children = tmp21(tmp2(tmp3[30]).Button, obj31);
        tmp21Result4 = tmp21(tmp32, obj30);
      }
      const obj32 = { children: null };
      items12[3] = tmp21Result4;
      obj32.children = items12;
      obj12.children = ref(navigation, obj32);
      items10[1] = isScreenReaderEnabled(tmp2(tmp3[22]).SafeAreaPaddingView, obj12);
      obj9.children = items10;
      return ref(navigation, obj9);
    }
  }
  return null;
};