// discord_app/modules/guild_onboarding/native/GuildOnboardingCompleted.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../a11y/AccessibilityStore.tsx";
import closure_6 from "../../../stores/GuildRoleStore.tsx";
import closure_7 from "../../../stores/GuildStore.tsx";
import closure_8 from "../../../stores/UserStore.tsx";
import closure_9 from "../GuildOnboardingPromptsStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let c12 = 400;
createCacheKey = {
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
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { position: "absolute", width: "100%", height: "100%" };
createCacheKey[4] = {};
createCacheKey[5] = { marginTop: 16 };
createCacheKey[6] = {
  marginTop: 24,
  padding: 16,
  paddingBottom: 32,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createCacheKey[7] = { marginTop: 16 };
createCacheKey[8] = { marginTop: 8 };
createCacheKey[9] = { marginTop: 12, display: "flex", flexDirection: "row", flexWrap: "wrap" };
createCacheKey[10] = { marginRight: 8 };
let obj1 = {
  marginTop: 24,
  padding: 16,
  paddingBottom: 32,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createCacheKey[11] = {
  paddingHorizontal: 8,
  height: 28,
  borderRadius: ThemesDefault.radii.xs,
  display: "flex",
  justifyContent: "center",
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
};
let obj2 = {
  paddingHorizontal: 8,
  height: 28,
  borderRadius: ThemesDefault.radii.xs,
  display: "flex",
  justifyContent: "center",
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
};
createCacheKey[12] = {
  marginTop: 24,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderWidth: 2,
  borderRadius: ThemesDefault.radii.sm,
  padding: 12,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
let items = [{ translateX: 24 }, { rotate: "5deg" }];
createCacheKey[13] = { transform: items };
createCacheKey[14] = { flexGrow: 1, marginLeft: 8 };
createCacheKey[15] = { marginTop: 24 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let closure_14 = {
  code: "function GuildOnboardingCompletedTsx1(){const{withSequence,withTiming,withDelay,ANIMATION_DURATION,Easing,useReducedMotion}=this.__closure;const opacity=withSequence(withTiming(0,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(0.5,{duration:ANIMATION_DURATION})),withTiming(1,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const scale=withSequence(withTiming(1,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(1.5,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)})),withTiming(1,{duration:useReducedMotion?1:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const rawRotation=withSequence(withTiming('0deg',{duration:0}),withDelay(ANIMATION_DURATION,withTiming('-2deg',{duration:ANIMATION_DURATION})),withTiming('-5deg',{duration:ANIMATION_DURATION}));return{opacity:opacity,transform:[{rotate:rawRotation},{scale:scale}]};}",
};
let obj3 = {
  marginTop: 24,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderWidth: 2,
  borderRadius: ThemesDefault.radii.sm,
  padding: 12,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
const result = require("set").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingCompleted.tsx");

export default function GuildOnboardingCompleted(guildId) {
  guildId = guildId.guildId;
  ({ prompts, completeOnboarding } = guildId);
  const onClose = guildId.onClose;
  let React;
  let navigation;
  let stateFromStores1;
  closure_6 = undefined;
  closure_7 = undefined;
  let found;
  allSelectedRoleIds = undefined;
  let isScreenReaderEnabled;
  closure_11 = undefined;
  let stateFromStores2;
  const tmp = callback();
  React = tmp;
  let obj = guildId(onClose[10]);
  navigation = obj.useNavigation();
  obj1 = guildId(onClose[11]);
  let items = [found];
  const stateFromStores = obj1.useStateFromStores(items, () => found.getCurrentUser());
  let obj2 = guildId(onClose[11]);
  const items1 = [closure_7];
  stateFromStores1 = obj2.useStateFromStores(items1, () => closure_7.getGuild(guildId));
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
    ({ id: obj7[0], splash: obj7[1] } = stateFromStores1);
    obj[2] = 400 * tmp7(tmp3[16])();
    guildSplashURL = tmp7Result.getGuildSplashURL(obj);
  }
  let tmp2Result = tmp2(tmp3[11]);
  const items2 = [allSelectedRoleIds];
  const items3 = [guildId];
  closure_7 = tmp2Result.useStateFromStoresArray(
    items2,
    () => allSelectedRoleIds.getOnboardingResponses(guildId),
    items3,
  );
  let mapped = prompts.map((options) => options.options);
  found = mapped.flat().filter((id) => closure_7.includes(id.id));
  const items4 = [tmp8, found];
  const memo = React.useMemo(() => {
    const mapped = found.map((roleIds) => roleIds.roleIds);
    allSelectedRoleIds = mapped.flat().filter(guildId(onClose[17]).isNotNullish);
    let numSharedRoleMembers = 0;
    if (null != closure_6) {
      numSharedRoleMembers = 0;
      if (allSelectedRoleIds.length > 0) {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(
          allSelectedRoleIds.map((arg0) => {
            let num = table[arg0];
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
    () => manyRoles.getManyRoles(guildId, allSelectedRoleIds),
    items6,
  );
  const items7 = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        return null;
      },
    });
  }, items7);
  const flatResult = mapped.flat();
  isScreenReaderEnabled = guildId(onClose[18]).useIsScreenReaderEnabled();
  closure_11 = React.useRef(false);
  const items8 = [completeOnboarding, onClose, isScreenReaderEnabled];
  const effect = React.useEffect(() => {
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
          callback();
        }
        callback2();
      }, 3600);
      return () => clearTimeout(closure_0);
    }
  }, items8);
  const tmp2Result1 = guildId(onClose[18]);
  const items9 = [stateFromStores1];
  stateFromStores2 = guildId(onClose[11]).useStateFromStores(items9, () => stateFromStores1.useReducedMotion);
  guildId(onClose[19]);
  const fn = function k() {
    let obj = guildId(onClose[19]);
    obj1 = guildId(onClose[20]);
    let obj2 = guildId(onClose[19]);
    let obj3 = guildId(onClose[20]);
    obj = { duration: stateFromStores2 };
    const withTimingResult = obj1.withTiming(0, { duration: 0 });
    const withDelayResult = obj2.withDelay(stateFromStores2, obj3.withTiming(0.5, obj));
    obj = { duration: stateFromStores2, easing: null };
    const Easing = guildId(onClose[19]).Easing;
    obj[1] = Easing.out(guildId(onClose[19]).Easing.ease);
    const obj6 = guildId(onClose[20]);
    const withSequenceResult = obj.withSequence(
      withTimingResult,
      withDelayResult,
      guildId(onClose[20]).withTiming(1, obj),
    );
    const obj8 = guildId(onClose[19]);
    const obj9 = guildId(onClose[20]);
    const withTimingResult1 = guildId(onClose[20]).withTiming(1, { duration: 0 });
    const obj10 = guildId(onClose[19]);
    obj1 = { duration: stateFromStores2, easing: null };
    const Easing2 = guildId(onClose[19]).Easing;
    obj1[1] = Easing2.out(guildId(onClose[19]).Easing.ease);
    const obj11 = guildId(onClose[20]);
    const withDelayResult1 = obj10.withDelay(stateFromStores2, guildId(onClose[20]).withTiming(1.5, obj1));
    let num = 1;
    if (!stateFromStores2) {
      num = tmp4;
    }
    obj2 = { duration: num, easing: null };
    const Easing3 = tmp(tmp2[19]).Easing;
    obj2[1] = Easing3.out(guildId(onClose[19]).Easing.ease);
    obj3 = { opacity: withSequenceResult, transform: null };
    const obj4 = { rotate: null };
    const obj13 = guildId(onClose[20]);
    let tmpResult = tmp(tmp2[19]);
    tmpResult = tmp(tmp2[20]);
    const withSequenceResult1 = obj8.withSequence(
      withTimingResult1,
      withDelayResult1,
      guildId(onClose[20]).withTiming(1, obj2),
    );
    const withTimingResult2 = tmpResult.withTiming("0deg", { duration: 0 });
    const tmpResult1 = guildId(onClose[19]);
    const tmpResult2 = guildId(onClose[20]);
    const withDelayResult2 = tmpResult1.withDelay(
      stateFromStores2,
      guildId(onClose[20]).withTiming("-2deg", { duration: stateFromStores2 }),
    );
    obj4[0] = tmpResult.withSequence(
      withTimingResult2,
      withDelayResult2,
      guildId(onClose[20]).withTiming("-5deg", { duration: stateFromStores2 }),
    );
    const items = [obj4, { scale: withSequenceResult1 }];
    obj3[1] = items;
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
  fn.__initData = closure_14;
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const diff = stateFromStoresArray.length - 3;
      obj1 = { style: null, children: null };
      obj1[0] = tmp.screen;
      let tmp20 = null;
      if (null != guildSplashURL) {
        obj2 = { source: null, style: null };
        obj3 = { uri: null };
        obj3[0] = guildSplashURL;
        obj2[0] = obj3;
        obj2[1] = tmp.backgroundImage;
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
      obj4[1] = items11;
      const obj5 = {
        style: null,
        accessibilityRole: "header",
        variant: "heading-xxl/extrabold",
        color: null,
        children: null,
      };
      obj5[0] = tmp.title;
      let str = "text-overlay-light";
      let str2 = "text-overlay-light";
      if (null == guildSplashURL) {
        str2 = "mobile-text-heading-primary";
      }
      obj5[3] = str2;
      const intl = tmp2(tmp3[24]).intl;
      obj5[4] = intl.string(tmp2(tmp3[24]).t.PFWIYe);
      const items12 = [isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj5), , ,];
      let obj6 = { style: null, accessibilityRole: "header", variant: "text-md/medium", color: null, children: null };
      obj6[0] = tmp.subtitle;
      if (null == guildSplashURL) {
        str = "text-muted";
      }
      obj6[3] = str;
      const intl2 = tmp2(tmp3[24]).intl;
      obj6[4] = intl2.string(tmp2(tmp3[24]).t.og4NNr);
      items12[1] = isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj6);
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.card;
      let obj8 = { size: null, user: null, guildId: null, animate: false };
      obj8[0] = tmp2(tmp3[25]).AvatarSizes.XXLARGE;
      obj8[1] = stateFromStores;
      obj8[2] = guildId;
      const items13 = [isScreenReaderEnabled(tmp2(tmp3[25]).Avatar, obj8), , , ,];
      let obj9 = { style: null, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
      obj9[0] = tmp.username;
      obj9[3] = stateFromStores.username;
      items13[1] = isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj9);
      let tmp21Result = null;
      if (numSharedRoleMembers > 0) {
        let obj10 = { style: null, variant: "text-sm/normal", color: "text-muted", children: null };
        obj10[0] = tmp.rolesHeader;
        const intl3 = tmp2(tmp3[24]).intl;
        let obj11 = { numSharedRoleMembers: null };
        obj11[0] = numSharedRoleMembers;
        obj10[3] = intl3.format(tmp2(tmp3[24]).t.l1Jc1n, obj11);
        tmp21Result = tmp21(tmp2(tmp3[23]).Text, obj10);
      }
      items13[2] = tmp21Result;
      const obj12 = { style: null, children: null };
      obj12[0] = tmp.roles;
      const substr = stateFromStoresArray.slice(0, 3);
      const items14 = [
        substr.map((id) => {
          obj = { style: role.role, children: isScreenReaderEnabled(guildId(onClose[26]).RoleItem, obj) };
          obj = { role: id, guildId: stateFromStores1.id, disableInteraction: true };
          return isScreenReaderEnabled(navigation, obj, id.id);
        }),
      ];
      tmp21Result = null;
      if (0 < diff) {
        let obj13 = { style: null, children: null };
        const items15 = [tmp.roleOverflow, { backgroundColor: rolePillBackgroundColor }];
        obj13[0] = items15;
        const obj14 = {
          variant: "heading-deprecated-12/semibold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const _HermesInternal = HermesInternal;
        obj14[2] = "+" + diff;
        obj13[1] = tmp21(tmp2(tmp3[23]).Text, obj14);
        tmp21Result = tmp21(tmp32, obj13);
      }
      items14[1] = tmp21Result;
      obj12[1] = items14;
      items13[3] = closure_11(navigation, obj12);
      const obj15 = { style: null, children: null };
      const items16 = [tmp.animation, tmp18];
      obj15[0] = items16;
      const obj16 = { guild: null, size: null };
      obj16[0] = stateFromStores1;
      tmp7Result = tmp7(tmp3[27]);
      obj16[1] = tmp2(tmp3[27]).GuildIconSizes.LARGE;
      const items17 = [isScreenReaderEnabled(tmp7Result, obj16), ,];
      const obj17 = { style: null, children: null };
      obj17[0] = tmp.animationText;
      const obj18 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null };
      const intl4 = tmp2(tmp3[24]).intl;
      const obj19 = { guildName: null };
      obj19[0] = stateFromStores1.name;
      obj18[2] = intl4.format(tmp2(tmp3[24]).t.FXREhf, obj19);
      const items18 = [isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj18)];
      const obj20 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const _HermesInternal2 = HermesInternal;
      obj20[2] = "" + tmp7(tmp3[28])().format("LL");
      items18[1] = isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj20);
      obj17[1] = items18;
      items17[1] = closure_11(navigation, obj17);
      const obj21 = { source: null, style: null };
      const obj33 = tmp7(tmp3[28])();
      obj21[0] = tmp7(tmp3[29]);
      obj21[1] = tmp.wave;
      items17[2] = isScreenReaderEnabled(tmp7(tmp3[21]), obj21);
      obj15[1] = items17;
      items13[4] = closure_11(tmp7(tmp3[19]).View, obj15);
      obj7[1] = items13;
      items12[2] = closure_11(navigation, obj7);
      let tmp21Result1 = null;
      if (isScreenReaderEnabled) {
        const obj22 = { style: null, children: null };
        obj22[0] = tmp.getStartedButton;
        const obj23 = { variant: "primary", size: "md", grow: true, text: null, onPress: null };
        const intl5 = tmp2(tmp3[24]).intl;
        obj23[3] = intl5.string(tmp2(tmp3[24]).t.LhlgY9);
        obj23[4] = onClose;
        obj22[1] = tmp21(tmp2(tmp3[30]).Button, obj23);
        tmp21Result1 = tmp21(tmp32, obj22);
      }
      const obj24 = { children: null };
      items12[3] = tmp21Result1;
      obj24[0] = items12;
      obj4[2] = closure_11(navigation, obj24);
      items10[1] = isScreenReaderEnabled(tmp2(tmp3[22]).SafeAreaPaddingView, obj4);
      obj1[1] = items10;
      return closure_11(navigation, obj1);
    }
  }
  return null;
}
