// === Module 7472: GuildOnboardingCompleted ===

// Module 7472 (GuildOnboardingCompleted)
import nativeDefault from "native" /* 575 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import useGuildRoleMemberCountsDefault from "useGuildRoleMemberCounts" /* 7417 */;
import UserProfileRolesCard from "UserProfileRolesCard" /* 7474 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import GuildRoleStore from "GuildRoleStore" /* 5047 */;
import GuildStore from "GuildStore" /* 5012 */;
import UserStore from "UserStore" /* 1385 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7388 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5141);
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
let closure_12 = createStyles.createStyles(obj2);
let closure_13 = { code: "(function GuildOnboardingCompletedTsx1(){let[withSequence,withTiming,withDelay,ANIMATION_DURATION,Easing,useReducedMotion]=this.__closure;const opacity=withSequence(withTiming(0,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(0.5,{duration:ANIMATION_DURATION})),withTiming(1,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const scale=withSequence(withTiming(1,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(1.5,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)})),withTiming(1,{duration:useReducedMotion?1:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const rawRotation=withSequence(withTiming('0deg',{duration:0}),withDelay(ANIMATION_DURATION,withTiming('-2deg',{duration:ANIMATION_DURATION})),withTiming('-5deg',{duration:ANIMATION_DURATION}));return{opacity:opacity,transform:[{rotate:rawRotation},{scale:scale}]};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingCompleted.tsx");

export default function GuildOnboardingCompleted(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  ({ prompts, completeOnboarding } = guildId);
  importDefault = completeOnboarding;
  const onClose = guildId.onClose;
  dependencyMap = onClose;
  closure_7 = undefined;
  let found;
  allSelectedRoleIds = undefined;
  let isScreenReaderEnabled;
  let ref;
  const tmp = closure_12();
  duration = tmp;
  const navigation = require("useNavigation").useNavigation();
  c4 = navigation;
  let obj = require("useNavigation");
  items = [found];
  const stateFromStores = require("initialize").useStateFromStores(items, () => found.getCurrentUser());
  let obj2 = require("initialize");
  const items1 = [closure_7];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(c0));
  c5 = stateFromStores1;
  let tmp8 = useGuildRoleMemberCountsDefault(guildId);
  closure_6 = tmp8;
  const obj3 = require("initialize");
  let obj4 = require("native");
  const profileThemeValues = require("useProfileThemeValues").useProfileThemeValues(obj4.useThemeContext().theme);
  if (profileThemeValues != null) {
    const rolePillBackgroundColor = profileThemeValues.rolePillBackgroundColor;
  }
  let guildSplashURL = null;
  if (null != stateFromStores1) {
    let obj6 = { id: null, splash: null, size: null };
    ({ id: obj7.id, splash: obj7.splash } = stateFromStores1);
    obj6.size = 400 * tmp7(2021)();
    guildSplashURL = tmp7(1411).getGuildSplashURL(obj6);
    const tmp7Result = tmp7(1411);
  }
  let obj5 = require("useProfileThemeValues");
  const items2 = [allSelectedRoleIds];
  const items3 = [guildId];
  closure_7 = require("initialize").useStateFromStoresArray(items2, () => GuildOnboardingPromptsStore.getOnboardingResponses(c0), items3);
  let mapped = prompts.map((options) => options.options);
  let tmp2Result = require("initialize");
  found = mapped.flat().filter((id) => closure_7.includes(id.id));
  const items4 = [tmp8, found];
  const memo = duration.useMemo(() => {
    const mapped = found.map((roleIds) => roleIds.roleIds);
    allSelectedRoleIds = mapped.flat().filter(GlobalUtils.isNotNullish);
    let numSharedRoleMembers = 0;
    if (null != closure_6) {
      numSharedRoleMembers = 0;
      if (allSelectedRoleIds.length > 0) {
        const _Math = Math;
        items = [];
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
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items5, () => GuildRoleStore.getManyRoles(c0, allSelectedRoleIds), items6);
  const items7 = [navigation];
  const layoutEffect = duration.useLayoutEffect(() => {
    _undefined4.setOptions({
      headerLeft() {
        return null;
      }
    });
  }, items7);
  const tmp2Result5 = require("initialize");
  isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  ref = duration.useRef(false);
  const items8 = [completeOnboarding, onClose, isScreenReaderEnabled];
  const effect = duration.useEffect(() => {
    if (isScreenReaderEnabled) {
      if (!ref.current) {
        tmp2.current = true;
        _undefined2();
      }
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        if (!ref.current) {
          tmp.current = true;
          _undefined2();
        }
        _undefined3();
      }, 3600);
      return () => clearTimeout(closure_0);
    }
  }, items8);
  const tmp2Result6 = require("useIsScreenReaderEnabled");
  const items9 = [c5];
  const stateFromStores2 = require("initialize").useStateFromStores(items9, () => _undefined5.useReducedMotion);
  require("module_1652");
  const items10 = [closure_13, require("module_1652").withSequence, require("timing/timing").withTiming, require("module_1652").withDelay, 400, require("module_1652").Easing, stateFromStores2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  duration = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items10;
  class GuildOnboardingCompletedTsx1 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      tmp5 = closure_3;
      obj = { duration: closure_3 };
      tmp3 = closure_1(0, { duration: 0 });
      tmp4 = closure_2;
      obj1 = { duration: closure_3, easing: null };
      obj3 = closure_4;
      tmp6 = closure_2(closure_3, closure_1(0.5, obj));
      obj1.easing = closure_4.out(closure_4.ease);
      tmp7 = closure_0(tmp3, tmp6, closure_1(1, obj1));
      obj8 = { duration: closure_3, easing: null };
      tmp8 = closure_1(1, { duration: 0 });
      obj8.easing = closure_4.out(closure_4.ease);
      num = 1;
      tmp9 = closure_2(closure_3, closure_1(1.5, obj8));
      if (!closure_5) {
        num = tmp5;
      }
      obj9 = { duration: num, easing: obj3.out(obj3.ease) };
      obj10 = { opacity: tmp7, transform: null };
      obj11 = { rotate: null };
      tmpResult = tmp(tmp8, tmp9, tmp2(1, obj9));
      tmp2Result = tmp2("0deg", { duration: 0 });
      tmp4Result = tmp4(tmp5, tmp2("-2deg", { duration: tmp5 }));
      obj11.rotate = tmp(tmp2Result, tmp4Result, tmp2("-5deg", { duration: tmp5 }));
      items = [, ];
      items[0] = obj11;
      items[1] = { scale: tmpResult };
      obj10.transform = items;
      return obj10;
    }
  }
  const items11 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
  GuildOnboardingCompletedTsx1.__closure = items11;
  GuildOnboardingCompletedTsx1.__workletHash = 4442147087899;
  GuildOnboardingCompletedTsx1.__initData = tmp18;
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const diff = stateFromStoresArray.length - 3;
      const obj8 = { style: tmp.screen, children: null };
      let tmp27 = null;
      if (null != guildSplashURL) {
        const obj9 = { source: null, style: null };
        const obj10 = { uri: guildSplashURL };
        obj9.source = obj10;
        obj9.style = tmp.backgroundImage;
        tmp27 = isScreenReaderEnabled(tmp7(5837), obj9);
      }
      const items12 = [tmp27, ];
      const items13 = [tmp.container, ];
      let prop = null;
      const SafeAreaPaddingView = tmp2(7412).SafeAreaPaddingView;
      if (null == guildSplashURL) {
        prop = tmp.containerWithoutSplash;
      }
      const obj11 = { bottom: true, style: null, children: null };
      items13[1] = prop;
      obj11.style = items13;
      const obj12 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xxl/semibold", color: null, children: null };
      let str = "text-overlay-light";
      let str2 = "text-overlay-light";
      if (null == guildSplashURL) {
        str2 = "mobile-text-heading-primary";
      }
      obj12.color = str2;
      const intl = tmp2(1113).intl;
      obj12.children = intl.string(tmp2(1113).t.PFWIYe);
      const items14 = [isScreenReaderEnabled(tmp2(5747).Text, obj12), , , ];
      const obj13 = { style: tmp.subtitle, accessibilityRole: "header", variant: "text-md/medium", color: null, children: null };
      if (null == guildSplashURL) {
        str = "text-muted";
      }
      obj13.color = str;
      const intl2 = tmp2(1113).intl;
      obj13.children = intl2.string(tmp2(1113).t.og4NNr);
      items14[1] = isScreenReaderEnabled(tmp2(5747).Text, obj13);
      const obj14 = { style: tmp.card, children: null };
      const obj15 = { size: tmp2(1187).AvatarSizes.XXLARGE, user: stateFromStores, guildId, animate: false };
      const items15 = [isScreenReaderEnabled(tmp2(1187).Avatar, obj15), , , , ];
      const obj16 = { style: tmp.username, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: stateFromStores.username };
      items15[1] = isScreenReaderEnabled(tmp2(5747).Text, obj16);
      let tmp28Result = null;
      if (numSharedRoleMembers > 0) {
        const obj17 = { style: tmp.rolesHeader, variant: "text-sm/normal", color: "text-muted", children: null };
        const intl3 = tmp2(1113).intl;
        const obj18 = { numSharedRoleMembers };
        obj17.children = intl3.format(tmp2(1113).t.l1Jc1n, obj18);
        tmp28Result = tmp28(tmp2(5747).Text, obj17);
      }
      items15[2] = tmp28Result;
      const obj19 = { style: tmp.roles, children: null };
      const substr = stateFromStoresArray.slice(0, 3);
      const items16 = [
        substr.map((role) => {
              const obj = { style: duration.role, children: closure_2_10(UserProfileRolesCard.RoleItem, { role, guildId: _undefined5.id, disableInteraction: true }) };
              return closure_2_10(React4, obj, role.id);
            }),

      ];
      let tmp28Result3 = null;
      if (0 < diff) {
        const obj20 = { style: null, children: null };
        const items17 = [tmp.roleOverflow, { backgroundColor: rolePillBackgroundColor }];
        obj20.style = items17;
        const obj21 = { variant: "heading-deprecated-12/semibold", color: "mobile-text-heading-primary", children: null };
        const _HermesInternal = HermesInternal;
        obj21.children = "+" + diff;
        obj20.children = tmp28(tmp2(5747).Text, obj21);
        tmp28Result3 = tmp28(tmp39, obj20);
      }
      items16[1] = tmp28Result3;
      obj19.children = items16;
      items15[3] = ref(c4, obj19);
      const obj22 = { style: null, children: null };
      const items18 = [tmp.animation, tmp25];
      obj22.style = items18;
      const obj23 = { guild: stateFromStores1, size: tmp2(7083).GuildIconSizes.LARGE };
      const items19 = [isScreenReaderEnabled(tmp7(7083), obj23), , ];
      const obj24 = { style: tmp.animationText, children: null };
      const obj25 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null };
      const intl4 = tmp2(1113).intl;
      const obj26 = { guildName: stateFromStores1.name };
      obj25.children = intl4.format(tmp2(1113).t.FXREhf, obj26);
      const items20 = [isScreenReaderEnabled(tmp2(5747).Text, obj25), ];
      const obj27 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const tmp7Result3 = tmp7(7083);
      const _HermesInternal2 = HermesInternal;
      obj27.children = "" + tmp7(2171)().format("LL");
      items20[1] = isScreenReaderEnabled(tmp2(5747).Text, obj27);
      obj24.children = items20;
      items19[1] = ref(c4, obj24);
      const obj28 = { source: null, style: null };
      const obj32 = tmp7(2171)();
      obj28.source = tmp7(7499);
      obj28.style = tmp.wave;
      items19[2] = isScreenReaderEnabled(tmp7(5837), obj28);
      obj22.children = items19;
      items15[4] = ref(tmp7(1652).View, obj22);
      obj14.children = items15;
      items14[2] = ref(c4, obj14);
      let tmp28Result4 = null;
      if (isScreenReaderEnabled) {
        const obj29 = { style: tmp.getStartedButton, children: null };
        const obj30 = { variant: "primary", size: "md", grow: true, text: null, onPress: null };
        const intl5 = tmp2(1113).intl;
        obj30.text = intl5.string(tmp2(1113).t.LhlgY9);
        obj30.onPress = onClose;
        obj29.children = tmp28(tmp2(5754).Button, obj30);
        tmp28Result4 = tmp28(tmp39, obj29);
      }
      const obj31 = { children: null };
      items14[3] = tmp28Result4;
      obj31.children = items14;
      obj11.children = ref(c4, obj31);
      class GuildOnboardingCompletedTsx1 {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_1;
          tmp5 = closure_3;
          obj = { duration: closure_3 };
          tmp3 = closure_1(0, { duration: 0 });
          tmp4 = closure_2;
          obj1 = { duration: closure_3, easing: null };
          obj3 = closure_4;
          tmp6 = closure_2(closure_3, closure_1(0.5, obj));
          obj1.easing = closure_4.out(closure_4.ease);
          tmp7 = closure_0(tmp3, tmp6, closure_1(1, obj1));
          obj8 = { duration: closure_3, easing: null };
          tmp8 = closure_1(1, { duration: 0 });
          obj8.easing = closure_4.out(closure_4.ease);
          num = 1;
          tmp9 = closure_2(closure_3, closure_1(1.5, obj8));
          if (!closure_5) {
            num = tmp5;
          }
          obj9 = { duration: num, easing: obj3.out(obj3.ease) };
          obj10 = { opacity: tmp7, transform: null };
          obj11 = { rotate: null };
          tmpResult = tmp(tmp8, tmp9, tmp2(1, obj9));
          tmp2Result = tmp2("0deg", { duration: 0 });
          tmp4Result = tmp4(tmp5, tmp2("-2deg", { duration: tmp5 }));
          obj11.rotate = tmp(tmp2Result, tmp4Result, tmp2("-5deg", { duration: tmp5 }));
          items = [, ];
          items[0] = obj11;
          items[1] = { scale: tmpResult };
          obj10.transform = items;
          return obj10;
        }
      }
      obj8.children = items12;
      return ref(c4, obj8);
    }
  }
  return null;
};