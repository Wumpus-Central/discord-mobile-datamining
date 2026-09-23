// === Module 7453: GuildOnboardingPrompts ===

// Module 7453 (GuildOnboardingPrompts)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ImageUtils from "ImageUtils" /* 1475 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4559 */;
import ColorUtils from "ColorUtils" /* 4676 */;
import timing from "timing" /* 4828 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5007 */;
import LinearGradientDefault from "LinearGradient" /* 5283 */;
import FastImageDefault from "FastImage" /* 5890 */;
import NavigatorHeader from "NavigatorHeader" /* 5927 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7436 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 7437 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5875 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildStore from "GuildStore" /* 2064 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2096 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7431 */;

require = fn;
let closure_23 = async function _getBackgroundGradientColor() {
  closure_2 = tmp5;
  closure_1 = tmp2;
  await ImageUtils.getPaletteForAvatar(closure_0);
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
  const obj2 = { source: { uri: uri.splashUrl }, style: null, resizeMode: "cover" };
  const items = [tmp.backgroundImage];
  obj2.style = items;
  const items1 = [closure_1_19(FastImageDefault, obj2), ];
  const obj3 = { style: tmp.backgroundColorGradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: null };
  const tmp2 = LinearGradientDefault;
  const items2 = [ColorUtils.hexWithOpacity(color, 0.16), color];
  obj3.colors = items2;
  items1[1] = closure_1_19(tmp2, obj3);
  obj.children = items1;
  return __initData(closure_1_20, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const OnboardingPromptType = fn(7432).OnboardingPromptType;
let closure_15 = fn(7428).GuildOnboardingModalStates;
const Constants = fn(1074);
({ AnalyticEvents: closure_16, MarketingURLs: closure_17, Routes: closure_18 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { flex: { flex: 1 }, container: { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(5985).NAV_BAR_HEIGHT, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, subtitle: null, onboardingTitle: null, onboardingPolicy: null, onboardingPolicyText: null, landingOverlay: null, artWrapper: null, landingBody: null, backgroundImage: null, backgroundColorGradient: null, darkColorGradient: null };
let obj3 = { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(5985).NAV_BAR_HEIGHT, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
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
const __initData = { code: "function GuildOnboardingPromptsTsx1(){const{showPrompts,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};}" };
const __initData2 = { code: "function GuildOnboardingPromptsTsx2(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withDelay(200,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}" };
const __initData3 = { code: "function GuildOnboardingPromptsTsx3(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}" };
const __initData4 = { code: "function GuildOnboardingPromptsTsx4(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}" };
const __initData5 = { code: "function GuildOnboardingPromptsTsx5(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?1:0;const opacity=withDelay(600,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&!showPrompts.get()?80:0;const translateY=withDelay(600,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompts.tsx");

export default function GuildOnboardingPrompt(guildId) {
  guildId = guildId.guildId;
  const currentPromptIdx = guildId.currentPromptIdx;
  const prompts = guildId.prompts;
  ({ selectOption, onClose } = guildId);
  ({ isFirstOpen, backShouldLeaveGuild } = guildId);
  isFirstOpen = undefined;
  let navigation;
  let skipped;
  closure_11 = undefined;
  let sharedValue;
  let callback;
  let stateFromStores2;
  let stateFromStoresArray;
  let required1;
  constants2 = undefined;
  closure_18 = undefined;
  let guildSplashURL;
  let required;
  let tmp = closure_22();
  const tmp3 = prompts;
  let items = [navigation];
  const stateFromStores = guildId(prompts[23]).useStateFromStores(items, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  let obj = guildId(prompts[23]);
  const items1 = [isFirstOpen];
  const stateFromStores1 = guildId(prompts[23]).useStateFromStores(items1, () => isFirstOpen.useReducedMotion);
  let obj2 = guildId(prompts[23]);
  const items2 = [callback];
  const tmp8 = guildId(prompts[23]).useStateFromStores(items2, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId)).length > 0;
  closure_7 = tmp8;
  if (isFirstOpen) {
    isFirstOpen = 0 === currentPromptIdx;
  }
  if (isFirstOpen) {
    isFirstOpen = !tmp8;
  }
  let obj3 = guildId(prompts[23]);
  const tmp7 = callback;
  navigation = guildId(tmp3[25]).useNavigation();
  skipped = tmp10;
  closure_11 = tmp11;
  let tmp2Result = guildId(tmp3[25]);
  sharedValue = guildId(tmp3[26]).useSharedValue(!isFirstOpen);
  const items3 = [guildId, prompts];
  callback = stateFromStores.useCallback(() => {
    GuildOnboardingActionCreatorsDefault.completeOnboarding(guildId, prompts);
  }, items3);
  const tmp2Result12 = guildId(tmp3[26]);
  const items4 = [closure_11];
  stateFromStores2 = guildId(tmp3[23]).useStateFromStores(items4, () => GuildStore.getGuild(guildId));
  const tmp2Result13 = guildId(tmp3[23]);
  const items5 = [tmp7];
  const items6 = [guildId, prompts[currentPromptIdx]];
  stateFromStoresArray = guildId(tmp3[23]).useStateFromStoresArray(items5, () => {
    if (null != closure_11) {
      let onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
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
    tmp18 = !tmp2(tmp3[28]).showRulesInOnboarding(stateFromStores2, stateFromStores);
    const tmp2Result15 = tmp2(tmp3[28]);
  }
  constants2 = tmp18;
  const tmp19 = onClose(stateFromStores.useState(currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800), 2);
  closure_18 = tmp19[1];
  guildSplashURL = null;
  if (null != stateFromStores2) {
    let obj4 = { id: null, splash: null, size: null };
    ({ id: obj11.id, splash: obj11.splash } = stateFromStores2);
    obj4.size = 400 * tmp6(tmp3[30])();
    guildSplashURL = tmp6(tmp3[29]).getGuildSplashURL(obj4);
    const tmp6Result = tmp6(tmp3[29]);
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
        closure_1_18(result);
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
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      obj2.step = -1;
      obj2.required = true;
      obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj2);
      const obj5 = {};
      const obj4 = AnalyticsUtilsDefault;
      const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
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
          onClose();
          callback();
        }
      }, 2000);
    }
  }, items9);
  const items10 = [isFirstOpen, prompts.length > 0, onClose];
  const effect3 = obj6.useEffect(() => {
    let tmp = isFirstOpen;
    if (!isFirstOpen) {
      tmp = closure_10;
    }
    if (!tmp) {
      onClose();
    }
  }, items10);
  required = tmp10;
  if (prompts.length > 0) {
    required = prompts[0].required;
  }
  const items11 = [guildId, required, currentPromptIdx];
  const effect4 = obj6.useEffect(() => {
    if (0 === currentPromptIdx) {
      const obj2 = {};
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      obj2.step = 0;
      obj2.required = required;
      obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj2);
    }
  }, items11);
  const tmp2Result14 = guildId(tmp3[23]);
  function ot() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    const obj3 = { duration: 300, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj3.easing = Easing.out(ReanimatedRexport.Easing.ease);
    let num2 = 0;
    if (!stateFromStores1) {
      num2 = 0;
      if (sharedValue.get()) {
        num2 = -80;
      }
    }
    const obj4 = { opacity: timing.withTiming(num, obj3), transform: null };
    const obj5 = { translateY: null };
    const withTimingResult = timing.withTiming(num, obj3);
    const obj6 = { duration: 300, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj6.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    obj5.translateY = timing.withTiming(num2, obj6);
    const items = [obj5];
    obj4.transform = items;
    return obj4;
  }
  const tmp2Result16 = guildId(tmp3[26]);
  ot.__closure = { showPrompts: sharedValue, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  ot.__workletHash = 6820086589932;
  ot.__initData = __initData;
  const animatedStyle = tmp2Result16.useAnimatedStyle(ot);
  let obj5 = { showPrompts: sharedValue, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  function st() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    const obj2 = ReanimatedRexport;
    const obj4 = { duration: 300, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj4.easing = Easing.out(ReanimatedRexport.Easing.ease);
    let num2 = 0;
    if (!stateFromStores1) {
      num2 = 0;
      if (sharedValue.get()) {
        num2 = -80;
      }
    }
    const obj5 = { opacity: obj2.withDelay(200, timing.withTiming(num, obj4)), transform: null };
    const obj6 = { translateY: null };
    const withDelayResult = obj2.withDelay(200, timing.withTiming(num, obj4));
    const tmpResult = ReanimatedRexport;
    const obj7 = { duration: 300, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj7.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    obj6.translateY = tmpResult.withDelay(200, timing.withTiming(num2, obj7));
    const items = [obj6];
    obj5.transform = items;
    return obj5;
  }
  const tmp2Result17 = guildId(tmp3[26]);
  st.__closure = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  st.__workletHash = 3034833873876;
  st.__initData = __initData2;
  const animatedStyle1 = tmp2Result17.useAnimatedStyle(st);
  let obj7 = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  function rt() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    const obj = { opacity: null };
    const obj2 = ReanimatedRexport;
    const obj4 = { duration: 300, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj4.easing = Easing.out(ReanimatedRexport.Easing.ease);
    obj.opacity = obj2.withDelay(200, timing.withTiming(num, obj4));
    return obj;
  }
  const tmp2Result18 = guildId(tmp3[26]);
  rt.__closure = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing };
  rt.__workletHash = 2795589385440;
  rt.__initData = __initData3;
  const animatedStyle2 = tmp2Result18.useAnimatedStyle(rt);
  const obj8 = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing };
  function lt() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    const obj = { opacity: null };
    const obj2 = ReanimatedRexport;
    const obj4 = { duration: 300, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj4.easing = Easing.out(ReanimatedRexport.Easing.ease);
    obj.opacity = obj2.withDelay(200, timing.withTiming(num, obj4));
    return obj;
  }
  const tmp2Result19 = guildId(tmp3[26]);
  lt.__closure = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing };
  lt.__workletHash = 13481450530727;
  lt.__initData = __initData4;
  const animatedStyle3 = tmp2Result19.useAnimatedStyle(lt);
  const obj9 = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing };
  function ct() {
    let num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    const obj2 = ReanimatedRexport;
    const obj4 = { duration: 300, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj4.easing = Easing.out(ReanimatedRexport.Easing.ease);
    if (stateFromStores1) {
      let num2 = 0;
    } else {
      num2 = 80;
    }
    const obj5 = { opacity: obj2.withDelay(600, timing.withTiming(num, obj4)), transform: null };
    const obj6 = { translateY: null };
    const withDelayResult = obj2.withDelay(600, timing.withTiming(num, obj4));
    const tmpResult = ReanimatedRexport;
    const obj7 = { duration: 300, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj7.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    obj6.translateY = tmpResult.withDelay(600, timing.withTiming(num2, obj7));
    const items = [obj6];
    obj5.transform = items;
    return obj5;
  }
  const tmp2Result20 = guildId(tmp3[26]);
  ct.__closure = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  ct.__workletHash = 14018549800735;
  ct.__initData = __initData5;
  const items12 = [navigation, currentPromptIdx, stateFromStoresArray, guildId, prompts, onClose, backShouldLeaveGuild, tmp8];
  const animatedStyle4 = tmp2Result20.useAnimatedStyle(ct);
  const layoutEffect = obj6.useLayoutEffect(() => {
    if (0 === currentPromptIdx) {
      if (!closure_7) {
        let obj4 = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
                let transitionTo = prompts;
                const obj2 = {};
                let tmp = guildId;
                const obj = currentPromptIdx(prompts[31]);
                const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(closure_1_0));
                obj2.step = 0;
                obj2.skipped = true;
                obj2.back = false;
                obj2.options_selected = 0;
                obj2.in_onboarding = true;
                obj2.is_final_step = false;
                obj.track(required1.GUILD_ONBOARDING_STEP_COMPLETED, obj2);
                let tmp5 = onClose;
                if (backShouldLeaveGuild) {
                  channel = channel.getChannel(sharedValue.getLastSelectedChannelId());
                  if (null == channel) {
                    tmp(transitionTo[14]).transitionTo(closure_18.ME, { navigationReplace: true });
                    tmp5 = tmp5();
                    const tmpResult = tmp(transitionTo[14]);
                  }
                  tmp = tmp(transitionTo[14]);
                  transitionTo = tmp.transitionTo;
                  channel = transitionTo(closure_18.CHANNEL(channel.guild_id, channel.id));
                } else {
                  tmp5();
                }
                const obj3 = guildId(prompts[32]);
              })
        };
        navigation.setOptions(obj4);
      }
    }
    if (0 !== currentPromptIdx) {
      let headerBackButton = NavigatorHeader.getHeaderBackButton(() => {
        const obj2 = {};
        const obj = currentPromptIdx(prompts[31]);
        const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(closure_1_0));
        obj2.step = step;
        obj2.skipped = false;
        obj2.back = true;
        obj2.options_selected = stateFromStoresArray.length;
        obj2.in_onboarding = true;
        obj2.is_final_step = false;
        obj.track(required1.GUILD_ONBOARDING_STEP_COMPLETED, obj2);
        const obj3 = guildId(prompts[32]);
        const obj5 = {};
        const obj4 = currentPromptIdx(prompts[31]);
        const merged1 = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(closure_1_0));
        obj5.step = step - 1;
        obj5.required = closure_1_2[step - 1].required;
        obj4.track(required1.GUILD_ONBOARDING_STEP_VIEWED, obj5);
        navigation.pop();
      }, true);
    }
    headerBackButton = NavigatorHeader.getHeaderBackButton(() => {
      const obj2 = {};
      const obj = currentPromptIdx(prompts[31]);
      const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(closure_1_0));
      obj2.step = 0;
      obj2.skipped = false;
      obj2.back = true;
      obj2.options_selected = stateFromStoresArray.length;
      obj2.in_onboarding = true;
      obj2.is_final_step = false;
      obj.track(required1.GUILD_ONBOARDING_STEP_COMPLETED, obj2);
      navigation.pop();
    }, true);
  }, items12);
  const obj12 = { style: tmp.flex, children: null };
  const rect = { top: true, bottom: true, style: null, children: null };
  const items13 = [, ];
  ({ flex: arr16[0], container: arr16[1] } = tmp);
  rect.style = items13;
  const obj13 = { style: null, children: null };
  const items14 = [tmp.flex, animatedStyle4];
  obj13.style = items14;
  let tmp34Result = null;
  if (prompts.length > 0) {
    tmp34Result = null;
    if (null != tmp11) {
      function handleOnPress() {
        if (!required1) {
          if (closure_17) {
            navigation.push(stateFromStoresArray.COMPLETED);
          } else {
            const obj2 = {};
            const obj = AnalyticsUtilsDefault;
            const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
            obj2.step = currentPromptIdx;
            obj2.options_selected = stateFromStoresArray.length;
            obj2.skipped = 0 === stateFromStoresArray.length;
            obj2.back = false;
            obj2.in_onboarding = true;
            obj2.is_final_step = false;
            obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj2);
            if (currentPromptIdx < prompts.length - 1) {
              const obj4 = {};
              const tmp2Result = AnalyticsUtilsDefault;
              const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
              obj4.step = currentPromptIdx + 1;
              obj4.required = prompts[currentPromptIdx + 1].required;
              tmp2Result.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj4);
              const tmp5Result = AppAnalyticsUtils;
            }
            if (currentPromptIdx + 1 < prompts.length) {
              const obj5 = { currentPrompt: currentPromptIdx + 1 };
              navigation.push(stateFromStoresArray.PROMPT, obj5);
            } else {
              if (tmp5Result2.showRulesInOnboarding(stateFromStores2, stateFromStores)) {
                navigation.push(stateFromStoresArray.RULES);
              }
              tmp5Result2 = GuildOnboardingUtils;
            }
          }
        }
      }
      const type = tmp11.type;
      if (stateFromStores2.MULTIPLE_CHOICE === type) {
        const obj14 = { guildId, currentPrompt: tmp11, lastPrompt: tmp18, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp34Result = tmp34(tmp2(tmp3[36]).MultipleChoicePrompt, obj14);
      } else if (tmp36.DROPDOWN === type) {
        const obj15 = { guildId, currentPrompt: tmp11, lastPrompt: tmp18, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp34Result = tmp34(tmp2(tmp3[36]).DropdownPrompt, obj15);
      } else {
        tmp2(tmp3[37]).assertNever(tmp11.type);
        const tmp2Result21 = tmp2(tmp3[37]);
      }
    }
  }
  obj13.children = tmp34Result;
  rect.children = guildSplashURL(currentPromptIdx(tmp3[26]).View, obj13);
  const items15 = [guildSplashURL(guildId(tmp3[35]).SafeAreaPaddingView, rect), ];
  const obj16 = { style: stateFromStores1.absoluteFill, pointerEvents: "none", children: null };
  const obj17 = { style: null, pointerEvents: "none", children: null };
  const items16 = [, ];
  ({ flex: arr19[0], landingOverlay: arr19[1] } = tmp);
  obj17.style = items16;
  const obj18 = { style: null, children: null };
  const items17 = [tmp.landingOverlay, animatedStyle3];
  obj18.style = items17;
  let tmp34Result2 = null;
  if (null != guildSplashURL) {
    const obj19 = { splashUrl: guildSplashURL, color: tmp19[0] };
    tmp34Result2 = tmp34(BackgroundImageGradient, obj19);
  }
  const items18 = [tmp34Result2, ];
  const obj20 = { style: tmp.darkColorGradient, start: null, end: null, colors: null };
  const obj10 = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  obj20.start = guildId(tmp3[22]).VerticalGradient.START;
  obj20.end = guildId(tmp3[22]).VerticalGradient.END;
  const tmp6Result2 = currentPromptIdx(tmp3[21]);
  const items19 = [guildId(tmp3[19]).hexWithOpacity(currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800, 0.5), currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800];
  obj20.colors = items19;
  items18[1] = guildSplashURL(tmp6Result2, obj20);
  obj18.children = items18;
  const items20 = [closure_21(currentPromptIdx(tmp3[26]).View, obj18), , ];
  const obj21 = { style: null, children: guildSplashURL(currentPromptIdx(tmp3[38]), { source: guildId.landingAnimation, autoPlay: !stateFromStores1, style: { width: "100%" } }) };
  const items21 = [tmp.artWrapper, animatedStyle];
  obj21.style = items21;
  items20[1] = guildSplashURL(currentPromptIdx(tmp3[26]).View, obj21);
  const obj23 = { style: null, children: null };
  const items22 = [tmp.landingBody, animatedStyle1];
  obj23.style = items22;
  const obj24 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = tmp2(tmp3[40]).intl;
  let str;
  if (stateFromStores2 != null) {
    str = stateFromStores2.name;
  }
  if (str == null) {
    str = "";
  }
  obj24.children = intl.format(guildId(tmp3[40]).t.O2bQlD, { guildName: str });
  const items23 = [guildSplashURL(guildId(tmp3[39]).Text, obj24), ];
  const obj25 = { style: tmp.onboardingTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "text-overlay-light", children: null };
  const intl2 = tmp2(tmp3[40]).intl;
  obj25.children = intl2.string(guildId(tmp3[40]).t["Alcl/e"]);
  items23[1] = guildSplashURL(guildId(tmp3[39]).Text, obj25);
  obj23.children = items23;
  items20[2] = closure_21(currentPromptIdx(tmp3[26]).View, obj23);
  obj17.children = items20;
  const items24 = [closure_21(currentPromptIdx(tmp3[26]).View, obj17), ];
  const obj26 = { style: null, pointerEvents: "auto", children: null };
  const items25 = [tmp.onboardingPolicy, animatedStyle2, { bottom: currentPromptIdx(prompts[24])().bottom }];
  obj26.style = items25;
  const obj27 = { style: tmp.onboardingPolicyText, variant: "heading-sm/normal", color: "text-default", children: null };
  const intl3 = tmp2(tmp3[40]).intl;
  obj27.children = intl3.format(guildId(tmp3[40]).t.kI6UoD, { privacyLink: constants2.PRIVACY });
  obj26.children = guildSplashURL(guildId(tmp3[39]).Text, obj27);
  items24[1] = guildSplashURL(currentPromptIdx(tmp3[26]).View, obj26);
  obj16.children = items24;
  items15[1] = closure_21(closure_7, obj16);
  obj12.children = items15;
  return closure_21(closure_7, obj12);
};