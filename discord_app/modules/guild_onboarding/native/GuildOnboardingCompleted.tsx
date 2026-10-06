// === Module 6689: GuildOnboardingCompleted ===

// Module 6689 (GuildOnboardingCompleted)
import nativeDefault from "native" /* 587 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import UserProfileRolesCard from "UserProfileRolesCard" /* 6691 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6602 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId, navigation;

let StyleSheet;
let c10;
let closure_4;
let items;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
let react = react_mod;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let c12 = 400;
let createStyles = createStyles_mod;
let obj = { screen: { flex: 1, position: "relative" }, container: { backgroundColor: "rgba(0, 0, 0, 0.5)", paddingHorizontal: 24, display: "flex", justifyContent: "center", flexGrow: 1 }, containerWithoutSplash: obj2, backgroundImage: { position: "absolute", width: "100%", height: "100%" }, title: {}, subtitle: { marginTop: 16 }, card: obj3, username: { marginTop: 16 }, rolesHeader: { marginTop: 8 }, roles: { marginTop: 12, display: "flex", flexDirection: "row", flexWrap: "wrap" }, role: { marginRight: 8 }, roleOverflow: obj4, animation: obj5, wave: obj6, animationText: { flexGrow: 1, marginLeft: 8 }, getStartedButton: { marginTop: 24 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 24, padding: 16, paddingBottom: 32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { paddingHorizontal: 8, height: 28, borderRadius: nativeDefault.radii.xs, display: "flex", justifyContent: "center", borderWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { marginTop: 24, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: nativeDefault.radii.sm, padding: 12, display: "flex", flexDirection: "row", alignItems: "center" };
obj6 = { transform: items };
items = [{ translateX: 24 }, { rotate: "5deg" }];
let closure_13 = createStyles(obj);
let closure_14 = { code: "function GuildOnboardingCompletedTsx1(){const{withSequence,withTiming,withDelay,ANIMATION_DURATION,Easing,useReducedMotion}=this.__closure;const opacity=withSequence(withTiming(0,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(0.5,{duration:ANIMATION_DURATION})),withTiming(1,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const scale=withSequence(withTiming(1,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(1.5,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)})),withTiming(1,{duration:useReducedMotion?1:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const rawRotation=withSequence(withTiming(\"0deg\",{duration:0}),withDelay(ANIMATION_DURATION,withTiming(\"-2deg\",{duration:ANIMATION_DURATION})),withTiming(\"-5deg\",{duration:ANIMATION_DURATION}));return{opacity:opacity,transform:[{rotate:rawRotation},{scale:scale}]};}" };
const __initData = { code: "function GuildOnboardingCompletedTsx2(){const{withSequence,withTiming,withDelay,ANIMATION_DURATION,Easing,useReducedMotion}=this.__closure;const opacity=withSequence(withTiming(0,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(0.5,{duration:ANIMATION_DURATION})),withTiming(1,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const scale=withSequence(withTiming(1,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(1.5,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)})),withTiming(1,{duration:useReducedMotion?1:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const rawRotation=withSequence(withTiming('0deg',{duration:0}),withDelay(ANIMATION_DURATION,withTiming('-2deg',{duration:ANIMATION_DURATION})),withTiming('-5deg',{duration:ANIMATION_DURATION}));return{opacity:opacity,transform:[{rotate:rawRotation},{scale:scale}]};}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let allSelectedRoleIds;
  let completeOnboarding;
  let duration;
  let isScreenReaderEnabled;
  let numSharedRoleMembers;
  let onClose;
  let prompts;
  let role;
  let stateFromStoresArray;
  let tmp11;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp38;
  let tmp40;
  let tmp41;
  let tmp7;
  let tmp8;
  const tmp3 = onClose;
  let obj = guildId(onClose[11]);
  const cResult = obj.c(126);
  guildId = guildId.guildId;
  ({ prompts, completeOnboarding } = guildId);
  onClose = guildId.onClose;
  const tmp5 = closure_13();
  react = tmp5;
  let obj2 = guildId(onClose[12]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [allSelectedRoleIds];
    const fn = function w() {
      return allSelectedRoleIds.getCurrentUser();
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = fn;
    tmp7 = items;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmp2Result = guildId(tmp3[13]);
  const stateFromStores = tmp2Result.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStoresArray];
    cResult[2] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    class E {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[3] = guildId;
    cResult[4] = E;
  } else {
    class E {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmp2Result7 = guildId(tmp3[13]);
  const stateFromStores1 = tmp2Result7.useStateFromStores(tmp11, E);
  const tmp16 = completeOnboarding(tmp3[14])(guildId);
  let closure_6 = tmp16;
  const tmp2Result8 = guildId(tmp3[15]);
  const theme = tmp2Result8.useThemeContext().theme;
  const tmp2Result9 = guildId(tmp3[16]);
  const profileThemeValues = tmp2Result9.useProfileThemeValues(theme);
  if (profileThemeValues != null) {
    class E {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[5] !== undefined) {
    class E {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    tmp20[0] = undefined;
    cResult[5] = undefined;
    cResult[6] = tmp20;
  } else {
    class E {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[7] !== stateFromStores1) {
    let guildSplashURL;
    class E {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    if (null != stateFromStores1) {
      class E {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      let obj3 = { id: null, splash: null, size: 400 * completeOnboarding(tmp3[18])() };
      ({ id: obj7.id, splash: obj7.splash } = stateFromStores1);
      const getGuildSplashURL = tmp23.getGuildSplashURL;
      guildSplashURL = getGuildSplashURL(obj3);
    }
    cResult[7] = stateFromStores1;
    cResult[8] = guildSplashURL;
  } else {
    class E {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const items2 = [isScreenReaderEnabled];
    cResult[9] = items2;
    tmp24 = items2;
  } else {
    class E {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[10] !== guildId) {
    class H {
      constructor() {
        return GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
      }
    }
    const items3 = [guildId];
    cResult[10] = guildId;
    cResult[11] = items3;
    cResult[12] = H;
    tmp26 = H;
    tmp25 = items3;
  } else {
    class H {
      constructor() {
        return GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
      }
    }
    tmp26 = cResult[12];
  }
  const tmp2Result10 = guildId(tmp3[13]);
  stateFromStoresArray = tmp2Result10.useStateFromStoresArray(tmp24, tmp26, tmp25);
  if (cResult[13] === prompts) {
    class H {
      constructor() {
        return GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
      }
    }
    if (cResult[19] === tmp16) {
      class H {
        constructor() {
          return GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
        }
      }
      if (cResult[24] === tmp31) {
        let tmp39;
        class H {
          constructor() {
            return GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
          }
        }
        ({ numSharedRoleMembers, allSelectedRoleIds } = tmp38);
        const _Symbol2 = Symbol;
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              return GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
            }
          }
          const items4 = [closure_6];
          cResult[27] = items4;
          tmp39 = items4;
        } else {
          class H {
            constructor() {
              return GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
            }
          }
        }
        if (cResult[28] === allSelectedRoleIds) {
          let tmp44;
          class H {
            constructor() {
              return GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
            }
          }
          const tmp2Result11 = guildId(tmp3[13]);
          const stateFromStoresArray1 = tmp2Result11.useStateFromStoresArray(tmp39, tmp40, tmp41);
          if (cResult[32] !== navigation) {
            class H {
              constructor() {
                return GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
              }
            }
            const items5 = [navigation];
            cResult[32] = navigation;
            cResult[33] = tmp45;
            cResult[34] = items5;
            tmp44 = items5;
          } else {
            class H {
              constructor() {
                return GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
              }
            }
            tmp44 = cResult[34];
          }
          const layoutEffect = react.useLayoutEffect(tmp45, tmp44);
          const tmp2Result12 = guildId(tmp3[20]);
          isScreenReaderEnabled = tmp2Result12.useIsScreenReaderEnabled();
          const flag = false;
          const ref = react.useRef(false);
          if (cResult[35] === completeOnboarding) {
            class H {
              constructor() {
                return GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
              }
            }
          }
          function de() {
            let closure_0;
            if (isScreenReaderEnabled) {
              if (!ref.current) {
                tmp3.current = true;
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
          }
          const items6 = [completeOnboarding, onClose, isScreenReaderEnabled];
          cResult[35] = completeOnboarding;
          cResult[36] = isScreenReaderEnabled;
          cResult[37] = onClose;
          cResult[38] = de;
          cResult[39] = items6;
        }
        function te() {
          return GuildRoleStore.getManyRoles(guildId, allSelectedRoleIds);
        }
        const items7 = [allSelectedRoleIds, guildId];
        cResult[28] = allSelectedRoleIds;
        cResult[29] = guildId;
        cResult[30] = te;
        cResult[31] = items7;
        tmp40 = te;
        tmp41 = items7;
      }
      let obj4 = { numSharedRoleMembers: tmp32, allSelectedRoleIds: tmp31 };
      cResult[24] = tmp31;
      cResult[25] = tmp32;
      cResult[26] = obj4;
      tmp38 = obj4;
    }
    const _Symbol = Symbol;
    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
      class J {
        constructor(roleIds) {
          return roleIds.roleIds;
        }
      }
      cResult[23] = J;
    } else {
      class J {
        constructor(roleIds) {
          return roleIds.roleIds;
        }
      }
    }
    const mapped = arr5.map(J);
    const flatResult = mapped.flat();
    const found = flatResult.filter(tmp2(tmp3[19]).isNotNullish);
    let num20 = 0;
    if (null != tmp16) {
      class J {
        constructor(roleIds) {
          return roleIds.roleIds;
        }
      }
      if (found.length > 0) {
        class J {
          constructor(roleIds) {
            return roleIds.roleIds;
          }
        }
        const items8 = [];
        HermesBuiltin.arraySpread(items8, found.map((item) => {
          let num = closure_6[item];
          if (num == null) {
            num = 0;
          }
          return num;
        }), 0);
        const _Math = Math;
        num20 = HermesBuiltin.apply(max, items8, Math);
      }
    }
    cResult[19] = tmp16;
    cResult[20] = arr5;
    cResult[21] = found;
    cResult[22] = num20;
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(roleIds) {
        return roleIds.roleIds;
      }
    }
    cResult[16] = V;
  } else {
    class J {
      constructor(roleIds) {
        return roleIds.roleIds;
      }
    }
  }
  if (cResult[17] !== stateFromStoresArray) {
    class J {
      constructor(roleIds) {
        return roleIds.roleIds;
      }
    }
    cResult[17] = stateFromStoresArray;
    cResult[18] = X;
  } else {
    class J {
      constructor(roleIds) {
        return roleIds.roleIds;
      }
    }
  }
  const mapped1 = prompts.map(V);
  const flatResult1 = mapped1.flat();
  const found1 = flatResult1.filter(X);
  cResult[13] = prompts;
  cResult[14] = stateFromStoresArray;
  cResult[15] = found1;
}) : ((guildId) => {
  let Button;
  let Text4;
  let allSelectedRoleIds;
  let completeOnboarding;
  let duration;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let numSharedRoleMembers;
  let obj11;
  let obj19;
  let obj22;
  let obj27;
  let obj31;
  let obj32;
  let obj33;
  let prompts;
  let role;
  let rolePillBackgroundColor;
  let str2;
  guildId = guildId.guildId;
  ({ prompts, completeOnboarding } = guildId);
  const onClose = guildId.onClose;
  let closure_7;
  let found;
  allSelectedRoleIds = undefined;
  let isScreenReaderEnabled;
  let ref;
  let stateFromStores2;
  const tmp = closure_13();
  react = tmp;
  const tmp3 = onClose;
  let obj = guildId(onClose[12]);
  navigation = obj.useNavigation();
  let obj2 = guildId(onClose[13]);
  let items = [found];
  const stateFromStores = obj2.useStateFromStores(items, () => found.getCurrentUser());
  let obj3 = guildId(onClose[13]);
  const items1 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => GuildStore.getGuild(guildId));
  const tmp8 = completeOnboarding(onClose[14])(guildId);
  let closure_6 = tmp8;
  let obj4 = guildId(onClose[15]);
  const theme = obj4.useThemeContext().theme;
  let obj5 = guildId(onClose[16]);
  const profileThemeValues = obj5.useProfileThemeValues(theme);
  if (profileThemeValues != null) {
    rolePillBackgroundColor = profileThemeValues.rolePillBackgroundColor;
  }
  let guildSplashURL = null;
  if (null != stateFromStores1) {
    let obj7 = { id: null, splash: null, size: 400 * completeOnboarding(tmp3[18])() };
    ({ id: obj6.id, splash: obj6.splash } = stateFromStores1);
    const getGuildSplashURL = completeOnboarding(tmp3[17]).getGuildSplashURL;
    let num = 400;
    completeOnboarding(tmp3[17]);
    guildSplashURL = getGuildSplashURL(obj7);
  }
  const items2 = [allSelectedRoleIds];
  const items3 = [guildId];
  const tmp2Result = guildId(tmp3[13]);
  closure_7 = tmp2Result.useStateFromStoresArray(items2, () => GuildOnboardingPromptsStore.getOnboardingResponses(guildId), items3);
  let mapped = prompts.map((options) => options.options);
  let flatResult = mapped.flat();
  found = flatResult.filter((id) => closure_7.includes(id.id));
  const items4 = [tmp8, found];
  const memo = react.useMemo(() => {
    const mapped = found.map((roleIds) => roleIds.roleIds);
    const flatResult = mapped.flat();
    allSelectedRoleIds = flatResult.filter(GlobalUtils.isNotNullish);
    let numSharedRoleMembers = 0;
    if (null != closure_6) {
      numSharedRoleMembers = 0;
      if (allSelectedRoleIds.length > 0) {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(items, allSelectedRoleIds.map((item) => {
          let num = closure_1_6[item];
          if (num == null) {
            num = 0;
          }
          return num;
        }), 0);
        const _Math2 = Math;
        numSharedRoleMembers = HermesBuiltin.apply(max, items, Math);
      }
    }
    return { numSharedRoleMembers, allSelectedRoleIds };
  }, items4);
  ({ numSharedRoleMembers, allSelectedRoleIds } = memo);
  const items5 = [closure_6];
  const items6 = [allSelectedRoleIds, guildId];
  const tmp2Result5 = guildId(tmp3[13]);
  const stateFromStoresArray = tmp2Result5.useStateFromStoresArray(items5, () => GuildRoleStore.getManyRoles(guildId, allSelectedRoleIds), items6);
  const items7 = [navigation];
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = {
      headerLeft() {
        return null;
      }
    };
    navigation.setOptions(obj);
  }, items7);
  const tmp2Result6 = guildId(tmp3[20]);
  isScreenReaderEnabled = tmp2Result6.useIsScreenReaderEnabled();
  ref = react.useRef(false);
  const items8 = [completeOnboarding, onClose, isScreenReaderEnabled];
  const effect = react.useEffect(() => {
    let closure_0;
    if (isScreenReaderEnabled) {
      if (!ref.current) {
        tmp3.current = true;
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
  const items9 = [stateFromStores1];
  const tmp2Result7 = guildId(tmp3[13]);
  stateFromStores2 = tmp2Result7.useStateFromStores(items9, () => stateFromStores1.useReducedMotion);
  guildId(tmp3[21]);
  const fn = function k() {
    let Easing;
    let Easing2;
    let Easing3;
    let items;
    let tmpResult8;
    let withDelay3Result;
    let withSequence3;
    let withTimingResult2;
    const withSequence = ReanimatedRexport.withSequence;
    ReanimatedRexport;
    const obj = timing;
    const withTimingResult = obj.withTiming(0, { duration: 0 });
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj2 = timing;
    const obj3 = { duration };
    const withDelayResult = withDelay(duration, obj2.withTiming(0.5, obj3));
    const obj4 = { duration, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    const withSequenceResult = withSequence(withTimingResult, withDelayResult, withTiming(1, obj4));
    const withSequence2 = ReanimatedRexport.withSequence;
    ReanimatedRexport;
    const obj5 = timing;
    const withTimingResult1 = obj5.withTiming(1, { duration: 0 });
    const withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj6 = { duration, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
    const withTiming2 = timing.withTiming;
    timing;
    Easing2 = ReanimatedRexport.Easing;
    let num = 1;
    const withDelay2Result = withDelay2(duration, withTiming2(1.5, obj6));
    const withTiming3 = timing.withTiming;
    timing;
    if (!stateFromStores2) {
      num = duration;
    }
    const obj7 = { duration: num, easing: Easing3.out(ReanimatedRexport.Easing.ease) };
    Easing3 = ReanimatedRexport.Easing;
    const obj8 = { opacity: withSequenceResult, transform: items };
    const obj9 = { rotate: withSequence3(withTimingResult2, withDelay3Result, tmpResult8.withTiming("-5deg", { duration })) };
    const withSequence2Result = withSequence2(withTimingResult1, withDelay2Result, withTiming3(1, obj7));
    withSequence3 = ReanimatedRexport.withSequence;
    ReanimatedRexport;
    const tmpResult5 = timing;
    withTimingResult2 = tmpResult5.withTiming("0deg", { duration: 0 });
    const withDelay3 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const tmpResult7 = timing;
    withDelay3Result = withDelay3(duration, tmpResult7.withTiming("-2deg", { duration }));
    items = [obj9, { scale: withSequence2Result }];
    tmpResult8 = timing;
    return obj8;
  };
  let obj8 = { withSequence: tmp2(tmp3[21]).withSequence, withTiming: tmp2(tmp3[22]).withTiming, withDelay: tmp2(tmp3[21]).withDelay, ANIMATION_DURATION: stateFromStores2, Easing: tmp2(tmp3[21]).Easing, useReducedMotion: stateFromStores2 };
  fn.__closure = obj8;
  fn.__workletHash = 1704563603649;
  fn.__initData = __initData;
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const diff = stateFromStoresArray.length - 3;
      let obj9 = { style: tmp.screen, children: items10 };
      let tmp21 = null;
      if (null != guildSplashURL) {
        const obj10 = { source: obj11, style: tmp.backgroundImage };
        obj11 = { uri: guildSplashURL };
        tmp21 = isScreenReaderEnabled(tmp7(tmp3[23]), obj10);
      }
      items10 = [tmp21, ];
      const items11 = [tmp.container, ];
      let prop = null;
      const SafeAreaPaddingView = tmp2(tmp3[32]).SafeAreaPaddingView;
      if (null == guildSplashURL) {
        prop = tmp.containerWithoutSplash;
      }
      items11[1] = prop;
      const obj12 = { bottom: true, style: items11, children: ref(navigation, obj33) };
      let str = "text-overlay-light";
      const obj13 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xxl/extrabold", color: str2, children: intl.string(guildId(tmp3[24]).t.PFWIYe) };
      str2 = "text-overlay-light";
      const Text = tmp2(tmp3[25]).Text;
      if (null == guildSplashURL) {
        str2 = "mobile-text-heading-primary";
      }
      intl = tmp2(tmp3[24]).intl;
      const items12 = [isScreenReaderEnabled(Text, obj13), , , ];
      const obj14 = { style: tmp.subtitle, accessibilityRole: "header", variant: "text-md/medium", color: str, children: intl2.string(guildId(tmp3[24]).t.og4NNr) };
      const Text2 = tmp2(tmp3[25]).Text;
      if (null == guildSplashURL) {
        str = "text-muted";
      }
      intl2 = tmp2(tmp3[24]).intl;
      items12[1] = isScreenReaderEnabled(Text2, obj14);
      const obj15 = { style: tmp.card, children: items13 };
      const obj16 = { size: guildId(tmp3[26]).AvatarSizes.XXLARGE, user: stateFromStores, guildId, animate: false };
      const Avatar = tmp2(tmp3[26]).Avatar;
      items13 = [isScreenReaderEnabled(Avatar, obj16), , , , ];
      const obj17 = { style: tmp.username, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: stateFromStores.username };
      items13[1] = isScreenReaderEnabled(guildId(tmp3[25]).Text, obj17);
      let tmp22Result = null;
      if (numSharedRoleMembers > 0) {
        const obj18 = { style: tmp.rolesHeader, variant: "text-sm/normal", color: "text-muted", children: intl3.format(guildId(tmp3[24]).t.l1Jc1n, obj19) };
        const Text3 = tmp2(tmp3[25]).Text;
        intl3 = tmp2(tmp3[24]).intl;
        obj19 = { numSharedRoleMembers };
        tmp22Result = tmp22(Text3, obj18);
      }
      items13[2] = tmp22Result;
      const obj20 = { style: tmp.roles, children: items14 };
      const substr = stateFromStoresArray.slice(0, 3);
      items14 = [
        substr.map((role) => {
              let obj2;
              const obj = { style: role.role, children: authStore(UserProfileRolesCard.RoleItem, obj2) };
              obj2 = { role, guildId: stateFromStores1.id, disableInteraction: true };
              return authStore(React3, obj, role.id);
            }),

      ];
      let tmp22Result3 = null;
      if (0 < diff) {
        const obj21 = { style: items15, children: isScreenReaderEnabled(Text4, obj22) };
        items15 = [tmp.roleOverflow, { backgroundColor: rolePillBackgroundColor }];
        const _HermesInternal = HermesInternal;
        obj22 = { variant: "heading-deprecated-12/semibold", color: "mobile-text-heading-primary", children: "+" + diff };
        Text4 = tmp2(tmp3[25]).Text;
        tmp22Result3 = tmp22(tmp33, obj21);
      }
      items14[1] = tmp22Result3;
      items13[3] = ref(navigation, obj20);
      const obj23 = { style: items16, children: items17 };
      items16 = [tmp.animation, tmp19];
      const View = tmp7(tmp3[21]).View;
      const obj24 = { guild: stateFromStores1, size: guildId(tmp3[28]).GuildIconSizes.LARGE };
      const tmp7Result3 = completeOnboarding(tmp3[28]);
      items17 = [isScreenReaderEnabled(tmp7Result3, obj24), , ];
      const obj25 = { style: tmp.animationText, children: items18 };
      const obj26 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: intl4.format(guildId(tmp3[24]).t.FXREhf, obj27) };
      const Text5 = tmp2(tmp3[25]).Text;
      intl4 = tmp2(tmp3[24]).intl;
      obj27 = { guildName: stateFromStores1.name };
      items18 = [isScreenReaderEnabled(Text5, obj26), ];
      const obj28 = { variant: "text-xs/normal", color: "text-muted", children: "" + obj32.format("LL") };
      const Text6 = tmp2(tmp3[25]).Text;
      const _HermesInternal2 = HermesInternal;
      obj32 = completeOnboarding(tmp3[29])();
      items18[1] = isScreenReaderEnabled(Text6, obj28);
      items17[1] = ref(navigation, obj25);
      const obj29 = { source: completeOnboarding(tmp3[30]), style: tmp.wave };
      const tmp7Result4 = completeOnboarding(tmp3[23]);
      items17[2] = isScreenReaderEnabled(tmp7Result4, obj29);
      items13[4] = ref(View, obj23);
      items12[2] = ref(navigation, obj15);
      let tmp22Result4 = null;
      if (isScreenReaderEnabled) {
        const obj30 = { style: tmp.getStartedButton, children: isScreenReaderEnabled(Button, obj31) };
        obj31 = { variant: "primary", size: "md", grow: true, text: intl5.string(guildId(tmp3[24]).t.LhlgY9), onPress: onClose };
        Button = tmp2(tmp3[31]).Button;
        intl5 = tmp2(tmp3[24]).intl;
        tmp22Result4 = tmp22(tmp33, obj30);
      }
      obj33 = { children: items12 };
      items12[3] = tmp22Result4;
      items10[1] = isScreenReaderEnabled(SafeAreaPaddingView, obj12);
      return ref(navigation, obj9);
    }
  }
  return null;
});
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingCompleted.tsx");

export default tmp5;