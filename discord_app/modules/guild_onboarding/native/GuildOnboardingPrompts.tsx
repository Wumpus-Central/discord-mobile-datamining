// === Module 7820: GuildOnboardingPrompts ===

// Module 7820 (GuildOnboardingPrompts)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import ColorUtils from "ColorUtils" /* 5240 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5860 */;
import FastImageDefault from "FastImage" /* 5957 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 6004 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 7021 */;
import NavigatorHeader from "NavigatorHeader" /* 7427 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7806 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 7641 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildStore from "GuildStore" /* 5114 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7803 */;

const require = globalThis.__r;

require = fn;
let closure_23 = async function _getBackgroundGradientColor() {
  closure_2 = tmp5;
  closure_1 = tmp2;
  await require("ImageUtils").getPaletteForAvatar(closure_0);
  closure_129_0 = value;
  closure_129_1 = closure_130_3(closure_129_0[0], 3);
  closure_129_2 = closure_129_1[0];
  closure_129_3 = closure_129_1[1];
  closure_129_4 = closure_129_1[2];
  return closure_130_0(closure_130_2[19]).rgbToHex(closure_129_2, closure_129_3, closure_129_4);
};
function BackgroundImageGradient(uri) {
  const color = uri.color;
  const tmp = closure_22();
  const obj = { children: null };
  items = [expandedHeight(FastImageDefault, { source: { uri: uri.splashUrl }, style: tmp.backgroundImage, resizeMode: "cover" }), ];
  const obj3 = { style: tmp.backgroundColorGradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: null };
  const obj2 = { source: { uri: uri.splashUrl }, style: tmp.backgroundImage, resizeMode: "cover" };
  const tmp2 = LinearGradientDefault;
  const items1 = [ColorUtils.hexWithOpacity(color, 0.16), color];
  obj3.colors = items1;
  items[1] = expandedHeight(tmp2, obj3);
  obj.children = items;
  return guild(dependencyMap, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const OnboardingPromptType = fn(7155).OnboardingPromptType;
let closure_15 = fn(7800).GuildOnboardingModalStates;
const Constants = fn(1072);
({ AnalyticEvents: closure_16, MarketingURLs: closure_17, Routes: closure_18 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { flex: { flex: 1 }, container: { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(5829).NAV_BAR_HEIGHT, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, subtitle: null, onboardingTitle: null, onboardingPolicy: null, onboardingPolicyText: null, landingOverlay: null, artWrapper: null, landingBody: null, backgroundImage: null, backgroundColorGradient: null, darkColorGradient: null };
let obj3 = { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(5829).NAV_BAR_HEIGHT, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.subtitle = { marginBottom: nativeDefault.space.PX_16, opacity: 0.8 };
obj2.onboardingTitle = { textAlign: "center" };
let obj4 = { marginBottom: nativeDefault.space.PX_16, opacity: 0.8 };
obj2.onboardingPolicy = { position: "absolute", paddingHorizontal: nativeDefault.space.PX_16, display: "flex", justifyContent: "center", width: "100%", marginBottom: nativeDefault.space.PX_16 };
obj2.onboardingPolicyText = { textAlign: "center" };
obj2.landingOverlay = { position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center" };
obj2.artWrapper = { height: 350, position: "relative", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" };
let obj5 = { position: "absolute", paddingHorizontal: nativeDefault.space.PX_16, display: "flex", justifyContent: "center", width: "100%", marginBottom: nativeDefault.space.PX_16 };
obj2.landingBody = { alignItems: "center", marginTop: -24, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.backgroundImage = { position: "absolute", height: "50%", width: "100%", top: 0 };
obj2.backgroundColorGradient = { position: "absolute", height: "100%", width: "100%", top: 0 };
obj2.darkColorGradient = { position: "absolute", height: "100%", width: "100%", top: 0 };
let closure_22 = createStyles.createStyles(obj2);
let closure_25 = { code: "(function GuildOnboardingPromptsTsx1(){let[showPrompts,withTiming,Easing,useReducedMotion]=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};})" };
let closure_26 = { code: "(function GuildOnboardingPromptsTsx2(){let[showPrompts,withDelay,withTiming,Easing,useReducedMotion]=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withDelay(200,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};})" };
let closure_27 = { code: "(function GuildOnboardingPromptsTsx3(){let[showPrompts,withDelay,withTiming,Easing]=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};})" };
let closure_28 = { code: "(function GuildOnboardingPromptsTsx4(){let[showPrompts]=this.__closure;return{pointerEvents:showPrompts.get()?'none':'auto'};})" };
let closure_29 = { code: "(function GuildOnboardingPromptsTsx5(){let[showPrompts,withDelay,withTiming,Easing]=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};})" };
let closure_30 = { code: "(function GuildOnboardingPromptsTsx6(){let[showPrompts,withDelay,withTiming,Easing,useReducedMotion]=this.__closure;const rawOpacity=showPrompts.get()?1:0;const opacity=withDelay(600,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&!showPrompts.get()?80:0;const translateY=withDelay(600,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompts.tsx");

export default function GuildOnboardingPrompt(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const currentPromptIdx = guildId.currentPromptIdx;
  importDefault = currentPromptIdx;
  const prompts = guildId.prompts;
  dependencyMap = prompts;
  ({ selectOption, onClose } = guildId);
  _slicedToArray = onClose;
  ({ isFirstOpen, backShouldLeaveGuild } = guildId);
  c4 = backShouldLeaveGuild;
  isFirstOpen = undefined;
  let navigation;
  let skipped;
  closure_10 = undefined;
  let sharedValue;
  let callback;
  let stateFromStores2;
  let stateFromStoresArray;
  let required1;
  closure_16 = undefined;
  constants2 = undefined;
  let guildSplashURL;
  let required;
  let tmp = closure_22();
  items = [skipped];
  const stateFromStores = require("initialize").useStateFromStores(items, () => MemberVerificationFormStore.getRulesPrompt(c0));
  let obj = require("initialize");
  const items1 = [navigation];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => navigation.useReducedMotion);
  let obj2 = require("initialize");
  const items2 = [stateFromStores2];
  const tmp8 = require("initialize").useStateFromStores(items2, () => GuildOnboardingPromptsStore.getOnboardingConnections(c0)).length > 0;
  absoluteFill = tmp8;
  if (isFirstOpen) {
    isFirstOpen = 0 === currentPromptIdx;
  }
  if (isFirstOpen) {
    isFirstOpen = !tmp8;
  }
  let obj3 = require("initialize");
  const tmp7 = stateFromStores2;
  navigation = require("useNavigation").useNavigation();
  skipped = tmp10;
  closure_10 = tmp11;
  let tmp2Result = require("useNavigation");
  sharedValue = require("module_1652").useSharedValue(!isFirstOpen);
  const items3 = [guildId, prompts];
  callback = stateFromStores.useCallback(() => {
    GuildOnboardingActionCreatorsDefault.completeOnboarding(c0, c2);
  }, items3);
  const tmp2Result13 = require("module_1652");
  const items4 = [sharedValue];
  stateFromStores2 = require("initialize").useStateFromStores(items4, () => GuildStore.getGuild(c0));
  const tmp2Result14 = require("initialize");
  const items5 = [tmp7];
  const items6 = [guildId, prompts[currentPromptIdx]];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items5, () => {
    if (null != closure_10) {
      let onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(c0, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items6);
  let tmp15 = 0 === stateFromStoresArray.length;
  if (tmp15) {
    required1 = undefined;
    if (tmp11 != null) {
      required1 = tmp11.required;
    }
    tmp15 = required1;
  }
  required1 = tmp15;
  let tmp18 = currentPromptIdx + 1 >= prompts.length;
  if (tmp18) {
    tmp18 = !tmp2(7021).showRulesInOnboarding(stateFromStores2, stateFromStores);
    const tmp2Result16 = tmp2(7021);
  }
  closure_16 = tmp18;
  const tmp19 = _slicedToArray(stateFromStores.useState(nativeDefault.unsafe_rawColors.PRIMARY_800), 2);
  constants2 = tmp19[1];
  guildSplashURL = null;
  if (null != stateFromStores2) {
    let obj4 = { id: null, splash: null, size: null };
    ({ id: obj11.id, splash: obj11.splash } = stateFromStores2);
    obj4.size = 400 * tmp6(2021)();
    guildSplashURL = tmp6(1411).getGuildSplashURL(obj4);
    const tmp6Result = tmp6(1411);
  }
  const items7 = [guildSplashURL];
  const effect = obj6.useEffect(() => {
    if (null != guildSplashURL) {
      (function getBackgroundGradientColor() {
        const self = this;
        const apply = closure_1_23.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(tmp).then((result) => {
        closure_1_17(result);
      });
      const promise = (function getBackgroundGradientColor() {
        const self = this;
        const apply = closure_1_23.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(tmp);
    }
  }, items7);
  const items8 = [guildId, prompts.length > 0, stateFromStores, isFirstOpen];
  const effect1 = obj6.useEffect(() => {
    if (isFirstOpen) {
      const obj2 = {};
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(c0));
      obj2.step = -1;
      obj2.required = true;
      obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj2);
      const obj5 = {};
      const obj4 = AnalyticsUtilsDefault;
      const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(c0));
      obj5.step = -1;
      obj5.skipped = skipped;
      obj5.is_final_step = false;
      obj5.in_onboarding = true;
      obj4.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj5);
    }
  }, items8);
  const items9 = [sharedValue, isFirstOpen, prompts.length > 0, tmp8, onClose, callback, guildId];
  const effect2 = obj6.useEffect(() => {
    if (isFirstOpen) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (skipped) {
          const result = sharedValue.set(true);
        } else {
          _undefined3();
          callback();
        }
      }, 2000);
    }
  }, items9);
  const items10 = [isFirstOpen, prompts.length > 0, onClose];
  const effect3 = obj6.useEffect(() => {
    let tmp = isFirstOpen;
    if (!isFirstOpen) {
      tmp = closure_9;
    }
    if (!tmp) {
      _undefined3();
    }
  }, items10);
  required = tmp10;
  if (prompts.length > 0) {
    required = prompts[0].required;
  }
  const items11 = [guildId, required, currentPromptIdx];
  const effect4 = obj6.useEffect(() => {
    if (0 === c1) {
      const obj2 = {};
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(c0));
      obj2.step = 0;
      obj2.required = required;
      obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj2);
    }
  }, items11);
  const tmp2Result15 = require("initialize");
  const items12 = [closure_25, sharedValue, require("timing/timing").withTiming, require("module_1652").Easing, stateFromStores1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp26, tmp27, tmp28, tmp29, tmp30] = items12;
  class GuildOnboardingPromptsTsx1 {
    constructor() {
      obj = closure_0;
      num = 1;
      if (closure_0.get()) {
        num = 0;
      }
      obj1 = { duration: 300, easing: closure_2.out(closure_2.ease) };
      obj3 = closure_2;
      tmp = closure_1;
      num2 = 0;
      tmp2 = closure_1(num, obj1);
      if (!closure_3) {
        num2 = 0;
        if (obj.get()) {
          num2 = -80;
        }
      }
      obj7 = { opacity: tmp2, transform: null };
      obj8 = { translateY: null };
      obj9 = { duration: 300, easing: obj3.out(obj3.ease) };
      obj8.translateY = tmp(num2, obj9);
      items = [];
      items[0] = obj8;
      obj7.transform = items;
      return obj7;
    }
  }
  const items13 = [tmp27, tmp28, tmp29, tmp30];
  GuildOnboardingPromptsTsx1.__closure = items13;
  GuildOnboardingPromptsTsx1.__workletHash = 4968831838677;
  GuildOnboardingPromptsTsx1.__initData = tmp26;
  const animatedStyle = require("module_1652").useAnimatedStyle(GuildOnboardingPromptsTsx1);
  const tmp2Result17 = require("module_1652");
  const items14 = [closure_26, sharedValue, require("module_1652").withDelay, require("timing/timing").withTiming, require("module_1652").Easing, stateFromStores1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  c4 = undefined;
  [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items14;
  class GuildOnboardingPromptsTsx2 {
    constructor() {
      obj = closure_0;
      num = 1;
      if (closure_0.get()) {
        num = 0;
      }
      obj1 = { duration: 300, easing: closure_3.out(closure_3.ease) };
      obj3 = closure_3;
      tmp = closure_1;
      tmp2 = closure_2;
      num2 = 0;
      tmp3 = closure_1(200, closure_2(num, obj1));
      if (!closure_4) {
        num2 = 0;
        if (obj.get()) {
          num2 = -80;
        }
      }
      obj7 = { opacity: tmp3, transform: null };
      obj8 = { translateY: null };
      obj9 = { duration: 300, easing: obj3.out(obj3.ease) };
      obj8.translateY = tmp(200, tmp2(num2, obj9));
      items = [];
      items[0] = obj8;
      obj7.transform = items;
      return obj7;
    }
  }
  const items15 = [tmp33, tmp34, tmp35, tmp36, tmp37];
  GuildOnboardingPromptsTsx2.__closure = items15;
  GuildOnboardingPromptsTsx2.__workletHash = 15352699765229;
  GuildOnboardingPromptsTsx2.__initData = tmp32;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(GuildOnboardingPromptsTsx2);
  const tmp2Result18 = require("module_1652");
  const items16 = [closure_27, sharedValue, require("module_1652").withDelay, require("timing/timing").withTiming, require("module_1652").Easing];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp39, tmp40, tmp41, tmp42, tmp43] = items16;
  class GuildOnboardingPromptsTsx3 {
    constructor() {
      num = 1;
      if (closure_0.get()) {
        num = 0;
      }
      obj = { opacity: null };
      obj1 = { duration: 300, easing: closure_3.out(closure_3.ease) };
      obj.opacity = closure_1(200, closure_2(num, obj1));
      return obj;
    }
  }
  const items17 = [tmp40, tmp41, tmp42, tmp43];
  GuildOnboardingPromptsTsx3.__closure = items17;
  GuildOnboardingPromptsTsx3.__workletHash = 7281893132057;
  GuildOnboardingPromptsTsx3.__initData = tmp39;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(GuildOnboardingPromptsTsx3);
  const tmp2Result19 = require("module_1652");
  const items18 = [closure_28, sharedValue];
  _require = undefined;
  [tmp45, tmp46] = items18;
  class GuildOnboardingPromptsTsx4 {
    constructor() {
      pointerEvents = "auto";
      if (closure_0.get()) {
        pointerEvents = "none";
      }
      return { pointerEvents };
    }
  }
  const items19 = [tmp46];
  GuildOnboardingPromptsTsx4.__closure = items19;
  GuildOnboardingPromptsTsx4.__workletHash = 7888519317763;
  GuildOnboardingPromptsTsx4.__initData = tmp45;
  const animatedProps = require("module_1652").useAnimatedProps(GuildOnboardingPromptsTsx4);
  const tmp2Result20 = require("module_1652");
  const items20 = [closure_29, sharedValue, require("module_1652").withDelay, require("timing/timing").withTiming, require("module_1652").Easing];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp48, tmp49, tmp50, tmp51, tmp52] = items20;
  class GuildOnboardingPromptsTsx5 {
    constructor() {
      num = 1;
      if (closure_0.get()) {
        num = 0;
      }
      obj = { opacity: null };
      obj1 = { duration: 300, easing: closure_3.out(closure_3.ease) };
      obj.opacity = closure_1(200, closure_2(num, obj1));
      return obj;
    }
  }
  const items21 = [tmp49, tmp50, tmp51, tmp52];
  GuildOnboardingPromptsTsx5.__closure = items21;
  GuildOnboardingPromptsTsx5.__workletHash = 16271494377695;
  GuildOnboardingPromptsTsx5.__initData = tmp48;
  const animatedStyle3 = require("module_1652").useAnimatedStyle(GuildOnboardingPromptsTsx5);
  const tmp2Result21 = require("module_1652");
  const items22 = [closure_30, sharedValue, require("module_1652").withDelay, require("timing/timing").withTiming, require("module_1652").Easing, stateFromStores1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  c4 = undefined;
  [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59] = items22;
  class GuildOnboardingPromptsTsx6 {
    constructor() {
      obj = closure_0;
      num = 0;
      if (closure_0.get()) {
        num = 1;
      }
      obj1 = { duration: 300, easing: closure_3.out(closure_3.ease) };
      obj3 = closure_3;
      tmp = closure_1;
      tmp2 = closure_2;
      tmp3 = closure_1(600, closure_2(num, obj1));
      if (closure_4) {
        num2 = 0;
      } else {
        num2 = 80;
      }
      obj7 = { opacity: tmp3, transform: null };
      obj8 = { translateY: null };
      obj9 = { duration: 300, easing: obj3.out(obj3.ease) };
      obj8.translateY = tmp(600, tmp2(num2, obj9));
      items = [];
      items[0] = obj8;
      obj7.transform = items;
      return obj7;
    }
  }
  const items23 = [tmp55, tmp56, tmp57, tmp58, tmp59];
  GuildOnboardingPromptsTsx6.__closure = items23;
  GuildOnboardingPromptsTsx6.__workletHash = 7666305678501;
  GuildOnboardingPromptsTsx6.__initData = tmp54;
  const items24 = [navigation, currentPromptIdx, stateFromStoresArray, guildId, prompts, onClose, backShouldLeaveGuild, tmp8];
  const animatedStyle4 = require("module_1652").useAnimatedStyle(GuildOnboardingPromptsTsx6);
  const layoutEffect = obj6.useLayoutEffect(() => {
    if (0 === c1) {
      if (!closure_6) {
        let obj4 = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
                let transitionTo = dependencyMap;
                const obj2 = {};
                let tmp = c0;
                const obj = step(1252);
                const merged = Object.assign(c0(6004).collectGuildAnalyticsMetadata(_undefined));
                obj2.step = 0;
                obj2.skipped = true;
                obj2.back = false;
                obj2.options_selected = 0;
                obj2.in_onboarding = true;
                obj2.is_final_step = false;
                obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj2);
                let tmp5 = _undefined3;
                if (closure_1_4) {
                  channel = channel.getChannel(callback.getLastSelectedChannelId());
                  if (null == channel) {
                    tmp(1099).transitionTo(guildSplashURL.ME, { navigationReplace: true });
                    tmp5 = tmp5();
                    const tmpResult = tmp(1099);
                  }
                  tmp = tmp(1099);
                  transitionTo = tmp.transitionTo;
                  channel = transitionTo(guildSplashURL.CHANNEL(channel.guild_id, channel.id));
                } else {
                  tmp5();
                }
                const obj3 = c0(6004);
              })
        };
        navigation.setOptions(obj4);
      }
    }
    if (0 !== c1) {
      let headerBackButton = NavigatorHeader.getHeaderBackButton(() => {
        const obj2 = {};
        const obj = step(1252);
        const merged = Object.assign(c0(6004).collectGuildAnalyticsMetadata(_undefined));
        obj2.step = step;
        obj2.skipped = false;
        obj2.back = true;
        obj2.options_selected = stateFromStoresArray.length;
        obj2.in_onboarding = true;
        obj2.is_final_step = false;
        obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj2);
        const obj3 = c0(6004);
        const obj5 = {};
        const obj4 = step(1252);
        const merged1 = Object.assign(c0(6004).collectGuildAnalyticsMetadata(_undefined));
        obj5.step = step - 1;
        obj5.required = dependencyMap[step - 1].required;
        obj4.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj5);
        navigation.pop();
      }, true);
    }
    headerBackButton = NavigatorHeader.getHeaderBackButton(() => {
      const obj2 = {};
      const obj = step(1252);
      const merged = Object.assign(c0(6004).collectGuildAnalyticsMetadata(_undefined));
      obj2.step = 0;
      obj2.skipped = false;
      obj2.back = true;
      obj2.options_selected = stateFromStoresArray.length;
      obj2.in_onboarding = true;
      obj2.is_final_step = false;
      obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj2);
      navigation.pop();
    }, true);
  }, items24);
  let obj5 = { style: tmp.flex, children: null };
  const rect = { top: true, bottom: true, style: null, children: null };
  const items25 = [, ];
  ({ flex: arr28[0], container: arr28[1] } = tmp);
  rect.style = items25;
  const obj7 = { style: null, children: null };
  const items26 = [tmp.flex, animatedStyle4];
  obj7.style = items26;
  let tmp64Result = null;
  if (prompts.length > 0) {
    tmp64Result = null;
    if (null != tmp11) {
      function handleOnPress() {
        if (!required1) {
          if (closure_16) {
            navigation.push(constants.COMPLETED);
          } else {
            const obj2 = {};
            const obj = AnalyticsUtilsDefault;
            const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(c0));
            obj2.step = step;
            obj2.options_selected = stateFromStoresArray.length;
            obj2.skipped = 0 === stateFromStoresArray.length;
            obj2.back = false;
            obj2.in_onboarding = true;
            obj2.is_final_step = false;
            obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj2);
            if (step < _undefined2.length - 1) {
              const obj4 = {};
              const tmp2Result = AnalyticsUtilsDefault;
              const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(c0));
              obj4.step = step + 1;
              obj4.required = _undefined2[step + 1].required;
              tmp2Result.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj4);
              const tmp5Result = AppAnalyticsUtils;
            }
            if (step + 1 < _undefined2.length) {
              const obj5 = { currentPrompt: step + 1 };
              navigation.push(constants.PROMPT, obj5);
            } else {
              if (tmp5Result2.showRulesInOnboarding(stateFromStores2, stateFromStores)) {
                navigation.push(constants.RULES);
              }
              tmp5Result2 = GuildOnboardingUtils;
            }
          }
        }
      }
      const type = tmp11.type;
      if (stateFromStoresArray.MULTIPLE_CHOICE === type) {
        const obj8 = { guildId, currentPrompt: tmp11, lastPrompt: tmp18, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp64Result = tmp64(tmp2(7821).MultipleChoicePrompt, obj8);
      } else if (tmp66.DROPDOWN === type) {
        const obj9 = { guildId, currentPrompt: tmp11, lastPrompt: tmp18, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp64Result = tmp64(tmp2(7821).DropdownPrompt, obj9);
      } else {
        tmp2(1380).assertNever(tmp11.type);
        const tmp2Result23 = tmp2(1380);
      }
    }
  }
  obj7.children = tmp64Result;
  rect.children = required(_modDef1652.View, obj7);
  const items27 = [required(require("common/SafeAreaView").SafeAreaPaddingView, rect), ];
  const obj10 = { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children: null };
  const obj12 = { style: null, pointerEvents: "none", children: null };
  const items28 = [, ];
  ({ flex: arr31[0], landingOverlay: arr31[1] } = tmp);
  obj12.style = items28;
  const obj13 = { style: null, children: null };
  const items29 = [tmp.landingOverlay, animatedStyle3];
  obj13.style = items29;
  let tmp64Result2 = null;
  if (null != guildSplashURL) {
    const obj14 = { splashUrl: guildSplashURL, color: tmp19[0] };
    tmp64Result2 = tmp64(BackgroundImageGradient, obj14);
  }
  const items30 = [tmp64Result2, ];
  const obj15 = { style: tmp.darkColorGradient, start: null, end: null, colors: null };
  const tmp2Result22 = require("module_1652");
  obj15.start = require("ConstantsIOS").VerticalGradient.START;
  obj15.end = require("ConstantsIOS").VerticalGradient.END;
  const tmp6Result2 = LinearGradientDefault;
  const items31 = [require("ColorUtils").hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_800, 0.5), nativeDefault.unsafe_rawColors.PRIMARY_800];
  obj15.colors = items31;
  items30[1] = required(tmp6Result2, obj15);
  obj13.children = items30;
  const items32 = [closure_21(_modDef1652.View, obj13), , ];
  const obj16 = { style: null, children: required(LottieAnimationViewDefault, { source: guildId.landingAnimation, autoPlay: !stateFromStores1, style: { width: "100%" } }) };
  const items33 = [tmp.artWrapper, animatedStyle];
  obj16.style = items33;
  items32[1] = required(_modDef1652.View, obj16);
  const obj18 = { style: null, children: null };
  const items34 = [tmp.landingBody, animatedStyle1];
  obj18.style = items34;
  const obj19 = { style: tmp.subtitle, variant: "body-md/semibold", color: "text-overlay-light", children: null };
  const intl = tmp2(1113).intl;
  let str;
  if (stateFromStores2 != null) {
    str = stateFromStores2.name;
  }
  if (str == null) {
    str = "";
  }
  obj19.children = intl.format(require("util").t.O2bQlD, { guildName: str });
  const items35 = [required(require("Text/Text").Text, obj19), ];
  const obj20 = { style: tmp.onboardingTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "text-overlay-light", children: null };
  const intl2 = tmp2(1113).intl;
  obj20.children = intl2.string(require("util").t["Alcl/e"]);
  items35[1] = required(require("Text/Text").Text, obj20);
  obj18.children = items35;
  items32[2] = closure_21(_modDef1652.View, obj18);
  obj12.children = items32;
  const items36 = [closure_21(isFirstOpen, obj12), ];
  const obj21 = { style: null, animatedProps, children: null };
  const items37 = [tmp.onboardingPolicy, animatedStyle2, { bottom: useSafeAreaInsetsDefault().bottom }];
  obj21.style = items37;
  const obj22 = { style: tmp.onboardingPolicyText, variant: "heading-xs/medium", color: "text-default", children: null };
  const intl3 = tmp2(1113).intl;
  obj22.children = intl3.format(require("util").t.kI6UoD, { privacyLink: constants2.PRIVACY });
  obj21.children = required(require("Text/Text").Text, obj22);
  items36[1] = required(_modDef1652.View, obj21);
  obj10.children = items36;
  items27[1] = closure_21(isFirstOpen, obj10);
  obj5.children = items27;
  return closure_21(isFirstOpen, obj5);
};