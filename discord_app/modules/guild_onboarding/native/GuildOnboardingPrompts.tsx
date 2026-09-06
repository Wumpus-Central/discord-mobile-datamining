// discord_app/modules/guild_onboarding/native/GuildOnboardingPrompts.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ImageUtils from "../../../utils/ImageUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import GuildOnboardingActionCreatorsDefault from "../GuildOnboardingActionCreators.tsx";
import GuildOnboardingUtils from "../GuildOnboardingUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import MemberVerificationFormStore from "../../guild_member_verification/MemberVerificationFormStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import GuildOnboardingPromptsStore from "../GuildOnboardingPromptsStore.tsx";

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
  let obj = { children: null };
  obj = { source: { uri: uri.splashUrl }, style: null, resizeMode: "cover" };
  const items = [tmp.backgroundImage];
  obj.style = items;
  const items1 = [closure_1_19(FastImageDefault, obj)];
  obj = {
    style: tmp.backgroundColorGradient,
    start: ConstantsIOS.VerticalGradient.START,
    end: ConstantsIOS.VerticalGradient.END,
    colors: null,
  };
  const tmp2 = LinearGradientDefault;
  const items2 = [ColorUtils.hexWithOpacity(color, 0.16), color];
  obj.colors = items2;
  items1[1] = closure_1_19(tmp2, obj);
  obj.children = items1;
  return __initData(closure_1_20, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const OnboardingPromptType = fn(7101).OnboardingPromptType;
let closure_15 = fn(7097).GuildOnboardingModalStates;
const Constants = fn(1074);
({ AnalyticEvents: closure_16, MarketingURLs: closure_17, Routes: closure_18 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
fn(4560);
let createStyles = {
  flex: { flex: 1 },
  container: null,
  subtitle: null,
  onboardingTitle: null,
  onboardingPolicy: null,
  onboardingPolicyText: null,
  landingOverlay: null,
  artWrapper: null,
  landingBody: null,
  backgroundImage: null,
  backgroundColorGradient: null,
  darkColorGradient: null,
};
createStyles = {
  display: "flex",
  flex: 1,
  flexGrow: 1,
  marginTop: fn(5682).NAV_BAR_HEIGHT,
  marginBottom: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
createStyles.container = createStyles;
createStyles.subtitle = { marginBottom: nativeDefault.space.PX_16, opacity: 0.8 };
createStyles.onboardingTitle = { textAlign: "center" };
let obj1 = { marginBottom: nativeDefault.space.PX_16, opacity: 0.8 };
createStyles.onboardingPolicy = {
  position: "absolute",
  paddingHorizontal: nativeDefault.space.PX_16,
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginBottom: nativeDefault.space.PX_16,
};
createStyles.onboardingPolicyText = { textAlign: "center" };
createStyles.landingOverlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
};
createStyles.artWrapper = {
  height: 350,
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
let obj2 = {
  position: "absolute",
  paddingHorizontal: nativeDefault.space.PX_16,
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginBottom: nativeDefault.space.PX_16,
};
createStyles.landingBody = { alignItems: "center", marginTop: -24, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.backgroundImage = { position: "absolute", height: "50%", width: "100%", top: 0 };
createStyles.backgroundColorGradient = { position: "absolute", height: "100%", width: "100%", top: 0 };
createStyles.darkColorGradient = { position: "absolute", height: "100%", width: "100%", top: 0 };
let closure_22 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function GuildOnboardingPromptsTsx1(){const{showPrompts,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};}",
};
const __initData2 = {
  code: "function GuildOnboardingPromptsTsx2(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withDelay(200,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}",
};
const __initData3 = {
  code: "function GuildOnboardingPromptsTsx3(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}",
};
const __initData4 = {
  code: "function GuildOnboardingPromptsTsx4(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}",
};
const __initData5 = {
  code: "function GuildOnboardingPromptsTsx5(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?1:0;const opacity=withDelay(600,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&!showPrompts.get()?80:0;const translateY=withDelay(600,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}",
};
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
  constants2 = undefined;
  closure_18 = undefined;
  let guildSplashURL;
  let required;
  let tmp = closure_22();
  const tmp3 = prompts;
  let obj = guildId(prompts[23]);
  let items = [navigation];
  const stateFromStores = obj.useStateFromStores(items, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  let obj1 = guildId(prompts[23]);
  const items1 = [isFirstOpen];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => isFirstOpen.useReducedMotion);
  let obj2 = guildId(prompts[23]);
  const items2 = [callback];
  const tmp8 =
    obj2.useStateFromStores(items2, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId)).length > 0;
  closure_7 = tmp8;
  if (isFirstOpen) {
    isFirstOpen = 0 === currentPromptIdx;
  }
  if (isFirstOpen) {
    isFirstOpen = !tmp8;
  }
  let tmp2Result = tmp2(tmp3[25]);
  navigation = tmp2Result.useNavigation();
  skipped = tmp10;
  closure_11 = tmp11;
  tmp2Result = tmp2(tmp3[26]);
  sharedValue = tmp2Result.useSharedValue(!isFirstOpen);
  let obj5 = stateFromStores;
  const items3 = [guildId, prompts];
  callback = stateFromStores.useCallback(() => {
    GuildOnboardingActionCreatorsDefault.completeOnboarding(guildId, prompts);
  }, items3);
  const items4 = [closure_11];
  stateFromStores2 = guildId(tmp3[23]).useStateFromStores(items4, () => GuildStore.getGuild(guildId));
  const tmp2Result1 = guildId(tmp3[23]);
  const tmp7 = callback;
  const items5 = [tmp7];
  const items6 = [guildId, prompts[currentPromptIdx]];
  stateFromStoresArray = guildId(tmp3[23]).useStateFromStoresArray(
    items5,
    () => {
      if (null != closure_11) {
        let onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
      } else {
        onboardingResponsesForPrompt = [];
      }
      return onboardingResponsesForPrompt;
    },
    items6,
  );
  let tmp15 = 0 === stateFromStoresArray.length;
  if (tmp15) {
    required = undefined;
    if (tmp11 != null) {
      required = tmp11.required;
    }
    tmp15 = required;
  }
  required = tmp15;
  let tmp18 = currentPromptIdx + 1 >= prompts.length;
  if (tmp18) {
    tmp18 = !tmp2(tmp3[28]).showRulesInOnboarding(stateFromStores2, stateFromStores);
    const tmp2Result3 = tmp2(tmp3[28]);
  }
  constants2 = tmp18;
  const tmp19 = onClose(obj5.useState(currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800), 2);
  closure_18 = tmp19[1];
  guildSplashURL = null;
  if (null != stateFromStores2) {
    let tmp6Result = tmp6(tmp3[29]);
    obj = { id: null, splash: null, size: null };
    ({ id: obj11.id, splash: obj11.splash } = stateFromStores2);
    obj.size = 400 * tmp6(tmp3[30])();
    guildSplashURL = tmp6Result.getGuildSplashURL(obj);
  }
  const items7 = [guildSplashURL];
  const effect = obj5.useEffect(() => {
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
  const effect1 = obj5.useEffect(() => {
    if (isFirstOpen) {
      let obj = {};
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      obj.step = -1;
      obj.required = true;
      obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj);
      obj = {};
      const obj4 = AnalyticsUtilsDefault;
      const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      obj.step = -1;
      obj.skipped = skipped;
      obj.is_final_step = false;
      obj.in_onboarding = true;
      obj4.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
    }
  }, items8);
  const items9 = [sharedValue, isFirstOpen, prompts.length > 0, tmp8, onClose, callback, guildId];
  const effect2 = obj5.useEffect(() => {
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
  const effect3 = obj5.useEffect(() => {
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
  const effect4 = obj5.useEffect(() => {
    if (0 === currentPromptIdx) {
      const obj = {};
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      obj.step = 0;
      obj.required = required;
      obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj);
    }
  }, items11);
  const tmp2Result2 = guildId(tmp3[23]);
  function ot() {
    let obj = sharedValue;
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj1 = timing;
    obj = { duration: 300, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.out(ReanimatedRexport.Easing.ease);
    let num2 = 0;
    if (!stateFromStores1) {
      num2 = 0;
      if (obj.get()) {
        num2 = -80;
      }
    }
    obj = { opacity: obj1.withTiming(num, obj), transform: null };
    obj1 = { translateY: null };
    const withTimingResult = obj1.withTiming(num, obj);
    const obj2 = { duration: 300, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj2.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    obj1.translateY = timing.withTiming(num2, obj2);
    const items = [obj1];
    obj.transform = items;
    return obj;
  }
  obj = {
    showPrompts: sharedValue,
    withTiming: tmp2(tmp3[33]).withTiming,
    Easing: tmp2(tmp3[26]).Easing,
    useReducedMotion: stateFromStores1,
  };
  ot.__closure = obj;
  ot.__workletHash = 6820086589932;
  ot.__initData = __initData;
  const animatedStyle = guildId(tmp3[26]).useAnimatedStyle(ot);
  const tmp2Result4 = guildId(tmp3[26]);
  function st() {
    let obj = sharedValue;
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj1 = ReanimatedRexport;
    let obj2 = timing;
    obj = { duration: 300, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.out(ReanimatedRexport.Easing.ease);
    let num2 = 0;
    if (!stateFromStores1) {
      num2 = 0;
      if (obj.get()) {
        num2 = -80;
      }
    }
    obj = { opacity: obj1.withDelay(200, obj2.withTiming(num, obj)), transform: null };
    obj1 = { translateY: null };
    const tmpResult = timing;
    obj2 = { duration: 300, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj2.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    obj1.translateY = tmpResult.withDelay(200, tmpResult.withTiming(num2, obj2));
    const items = [obj1];
    obj.transform = items;
    return obj;
  }
  obj1 = {
    showPrompts: sharedValue,
    withDelay: tmp2(tmp3[26]).withDelay,
    withTiming: tmp2(tmp3[33]).withTiming,
    Easing: tmp2(tmp3[26]).Easing,
    useReducedMotion: stateFromStores1,
  };
  st.__closure = obj1;
  st.__workletHash = 3034833873876;
  st.__initData = __initData2;
  const animatedStyle1 = guildId(tmp3[26]).useAnimatedStyle(st);
  const tmp2Result5 = guildId(tmp3[26]);
  function rt() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj = { opacity: null };
    const obj2 = ReanimatedRexport;
    obj = { duration: 300, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.out(ReanimatedRexport.Easing.ease);
    obj.opacity = obj2.withDelay(200, timing.withTiming(num, obj));
    return obj;
  }
  obj2 = {
    showPrompts: sharedValue,
    withDelay: tmp2(tmp3[26]).withDelay,
    withTiming: tmp2(tmp3[33]).withTiming,
    Easing: tmp2(tmp3[26]).Easing,
  };
  rt.__closure = obj2;
  rt.__workletHash = 2795589385440;
  rt.__initData = __initData3;
  const animatedStyle2 = guildId(tmp3[26]).useAnimatedStyle(rt);
  const tmp2Result6 = guildId(tmp3[26]);
  function lt() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj = { opacity: null };
    const obj2 = ReanimatedRexport;
    obj = { duration: 300, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.out(ReanimatedRexport.Easing.ease);
    obj.opacity = obj2.withDelay(200, timing.withTiming(num, obj));
    return obj;
  }
  const tmp2Result7 = guildId(tmp3[26]);
  lt.__closure = {
    showPrompts: sharedValue,
    withDelay: guildId(tmp3[26]).withDelay,
    withTiming: guildId(tmp3[33]).withTiming,
    Easing: guildId(tmp3[26]).Easing,
  };
  lt.__workletHash = 13481450530727;
  lt.__initData = __initData4;
  const animatedStyle3 = tmp2Result7.useAnimatedStyle(lt);
  let obj3 = {
    showPrompts: sharedValue,
    withDelay: guildId(tmp3[26]).withDelay,
    withTiming: guildId(tmp3[33]).withTiming,
    Easing: guildId(tmp3[26]).Easing,
  };
  function ct() {
    let obj = sharedValue;
    let num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    let obj1 = ReanimatedRexport;
    let obj2 = timing;
    obj = { duration: 300, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.out(ReanimatedRexport.Easing.ease);
    if (stateFromStores1) {
      let num2 = 0;
    } else {
      num2 = 80;
    }
    obj = { opacity: obj1.withDelay(600, obj2.withTiming(num, obj)), transform: null };
    obj1 = { translateY: null };
    const tmpResult = timing;
    obj2 = { duration: 300, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj2.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    obj1.translateY = tmpResult.withDelay(600, tmpResult.withTiming(num2, obj2));
    const items = [obj1];
    obj.transform = items;
    return obj;
  }
  const tmp2Result8 = guildId(tmp3[26]);
  ct.__closure = {
    showPrompts: sharedValue,
    withDelay: guildId(tmp3[26]).withDelay,
    withTiming: guildId(tmp3[33]).withTiming,
    Easing: guildId(tmp3[26]).Easing,
    useReducedMotion: stateFromStores1,
  };
  ct.__workletHash = 14018549800735;
  ct.__initData = __initData5;
  const items12 = [
    navigation,
    currentPromptIdx,
    stateFromStoresArray,
    guildId,
    prompts,
    onClose,
    backShouldLeaveGuild,
    tmp8,
  ];
  const animatedStyle4 = tmp2Result8.useAnimatedStyle(ct);
  const layoutEffect = obj5.useLayoutEffect(() => {
    if (0 === currentPromptIdx) {
      if (!closure_7) {
        let obj = { headerLeft: null };
        obj.headerLeft = obj.getHeaderCloseButton(() => {
          let transitionTo = prompts;
          currentPromptIdx(prompts[31]);
          const obj = {};
          let tmp = guildId;
          const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(closure_1_0));
          obj.step = 0;
          obj.skipped = true;
          obj.back = false;
          obj.options_selected = 0;
          obj.in_onboarding = true;
          obj.is_final_step = false;
          obj.track(required.GUILD_ONBOARDING_STEP_COMPLETED, obj);
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
        });
        navigation.setOptions(obj);
      }
    }
    if (0 !== currentPromptIdx) {
      let headerBackButton = NavigatorHeader.getHeaderBackButton(() => {
        currentPromptIdx(prompts[31]);
        let obj = {};
        const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(closure_1_0));
        obj.step = step;
        obj.skipped = false;
        obj.back = true;
        obj.options_selected = stateFromStoresArray.length;
        obj.in_onboarding = true;
        obj.is_final_step = false;
        obj.track(required.GUILD_ONBOARDING_STEP_COMPLETED, obj);
        const obj3 = guildId(prompts[32]);
        obj = {};
        const obj4 = currentPromptIdx(prompts[31]);
        const merged1 = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(closure_1_0));
        obj.step = step - 1;
        obj.required = closure_1_2[step - 1].required;
        obj4.track(required.GUILD_ONBOARDING_STEP_VIEWED, obj);
        navigation.pop();
      }, true);
    }
    headerBackButton = NavigatorHeader.getHeaderBackButton(() => {
      currentPromptIdx(prompts[31]);
      const obj = {};
      const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(closure_1_0));
      obj.step = 0;
      obj.skipped = false;
      obj.back = true;
      obj.options_selected = stateFromStoresArray.length;
      obj.in_onboarding = true;
      obj.is_final_step = false;
      obj.track(required.GUILD_ONBOARDING_STEP_COMPLETED, obj);
      navigation.pop();
    }, true);
  }, items12);
  obj5 = { style: tmp.flex, children: null };
  const rect = { top: true, bottom: true, style: null, children: null };
  const items13 = [,];
  ({ flex: arr16[0], container: arr16[1] } = tmp);
  rect.style = items13;
  let obj6 = { style: null, children: null };
  const items14 = [tmp.flex, animatedStyle4];
  obj6.style = items14;
  let tmp34Result = null;
  if (prompts.length > 0) {
    tmp34Result = null;
    if (null != tmp11) {
      function handleOnPress() {
        if (!required) {
          if (closure_17) {
            let arr = navigation.push(stateFromStoresArray.COMPLETED);
          } else {
            let obj = {};
            const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
            obj.step = currentPromptIdx;
            obj.options_selected = stateFromStoresArray.length;
            obj.skipped = 0 === stateFromStoresArray.length;
            obj.back = false;
            obj.in_onboarding = true;
            obj.is_final_step = false;
            obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
            arr = prompts;
            if (currentPromptIdx < prompts.length - 1) {
              obj = {};
              let tmp5Result = AppAnalyticsUtils;
              const merged1 = Object.assign(tmp5Result.collectGuildAnalyticsMetadata(guildId));
              obj.step = currentPromptIdx + 1;
              obj.required = arr[currentPromptIdx + 1].required;
              AnalyticsUtilsDefault.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj);
              const tmp2Result = AnalyticsUtilsDefault;
            }
            if (currentPromptIdx + 1 < arr.length) {
              const obj1 = { currentPrompt: currentPromptIdx + 1 };
              arr = navigation.push(stateFromStoresArray.PROMPT, obj1);
            } else {
              tmp5Result = GuildOnboardingUtils;
              if (tmp5Result.showRulesInOnboarding(stateFromStores2, stateFromStores)) {
                navigation.push(stateFromStoresArray.RULES);
              }
            }
          }
        }
      }
      const type = tmp11.type;
      if (stateFromStores2.MULTIPLE_CHOICE === type) {
        const obj7 = {
          guildId,
          currentPrompt: tmp11,
          lastPrompt: tmp18,
          currentPromptIndex: currentPromptIdx,
          numberOfPrompts: prompts.length,
          selectOption,
          handleOnPress,
        };
        tmp34Result = tmp34(tmp2(tmp3[36]).MultipleChoicePrompt, obj7);
      } else if (tmp36.DROPDOWN === type) {
        const obj8 = {
          guildId,
          currentPrompt: tmp11,
          lastPrompt: tmp18,
          currentPromptIndex: currentPromptIdx,
          numberOfPrompts: prompts.length,
          selectOption,
          handleOnPress,
        };
        tmp34Result = tmp34(tmp2(tmp3[36]).DropdownPrompt, obj8);
      } else {
        tmp2(tmp3[37]).assertNever(tmp11.type);
        const tmp2Result9 = tmp2(tmp3[37]);
      }
    }
  }
  obj6.children = tmp34Result;
  rect.children = guildSplashURL(currentPromptIdx(tmp3[26]).View, obj6);
  const items15 = [guildSplashURL(guildId(tmp3[35]).SafeAreaPaddingView, rect)];
  const obj9 = { style: stateFromStores1.absoluteFill, pointerEvents: "none", children: null };
  const obj10 = { style: null, pointerEvents: "none", children: null };
  const items16 = [,];
  ({ flex: arr19[0], landingOverlay: arr19[1] } = tmp);
  obj10.style = items16;
  const obj11 = { style: null, children: null };
  const items17 = [tmp.landingOverlay, animatedStyle3];
  obj11.style = items17;
  tmp34Result = null;
  if (null != guildSplashURL) {
    const obj12 = { splashUrl: guildSplashURL, color: tmp19[0] };
    tmp34Result = tmp34(BackgroundImageGradient, obj12);
  }
  const items18 = [tmp34Result];
  const obj13 = { style: tmp.darkColorGradient, start: null, end: null, colors: null };
  tmp6Result = tmp6(tmp3[21]);
  obj13.start = guildId(tmp3[22]).VerticalGradient.START;
  obj13.end = guildId(tmp3[22]).VerticalGradient.END;
  let obj4 = {
    showPrompts: sharedValue,
    withDelay: guildId(tmp3[26]).withDelay,
    withTiming: guildId(tmp3[33]).withTiming,
    Easing: guildId(tmp3[26]).Easing,
    useReducedMotion: stateFromStores1,
  };
  const items19 = [
    guildId(tmp3[19]).hexWithOpacity(currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800, 0.5),
    currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800,
  ];
  obj13.colors = items19;
  items18[1] = guildSplashURL(tmp6Result, obj13);
  obj11.children = items18;
  const items20 = [closure_21(currentPromptIdx(tmp3[26]).View, obj11), ,];
  const obj14 = {
    style: null,
    children: guildSplashURL(currentPromptIdx(tmp3[38]), {
      source: guildId.landingAnimation,
      autoPlay: !stateFromStores1,
      style: { width: "100%" },
    }),
  };
  const items21 = [tmp.artWrapper, animatedStyle];
  obj14.style = items21;
  items20[1] = guildSplashURL(currentPromptIdx(tmp3[26]).View, obj14);
  const obj16 = { style: null, children: null };
  const items22 = [tmp.landingBody, animatedStyle1];
  obj16.style = items22;
  const obj17 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = tmp2(tmp3[40]).intl;
  let str;
  if (stateFromStores2 != null) {
    str = stateFromStores2.name;
  }
  if (str == null) {
    str = "";
  }
  obj17.children = intl.format(guildId(tmp3[40]).t.O2bQlD, { guildName: str });
  const items23 = [guildSplashURL(guildId(tmp3[39]).Text, obj17)];
  const obj18 = {
    style: tmp.onboardingTitle,
    accessibilityRole: "header",
    variant: "heading-xl/semibold",
    color: "text-overlay-light",
    children: null,
  };
  const intl2 = tmp2(tmp3[40]).intl;
  obj18.children = intl2.string(guildId(tmp3[40]).t["Alcl/e"]);
  items23[1] = guildSplashURL(guildId(tmp3[39]).Text, obj18);
  obj16.children = items23;
  items20[2] = closure_21(currentPromptIdx(tmp3[26]).View, obj16);
  obj10.children = items20;
  const items24 = [closure_21(currentPromptIdx(tmp3[26]).View, obj10)];
  const obj19 = { style: null, pointerEvents: "auto", children: null };
  const items25 = [tmp.onboardingPolicy, animatedStyle2, { bottom: currentPromptIdx(prompts[24])().bottom }];
  obj19.style = items25;
  const obj20 = {
    style: tmp.onboardingPolicyText,
    variant: "heading-sm/normal",
    color: "text-default",
    children: null,
  };
  const intl3 = tmp2(tmp3[40]).intl;
  obj20.children = intl3.format(guildId(tmp3[40]).t.kI6UoD, { privacyLink: constants2.PRIVACY });
  obj19.children = guildSplashURL(guildId(tmp3[39]).Text, obj20);
  items24[1] = guildSplashURL(currentPromptIdx(tmp3[26]).View, obj19);
  obj9.children = items24;
  items15[1] = closure_21(closure_7, obj9);
  obj5.children = items15;
  return closure_21(closure_7, obj5);
}
