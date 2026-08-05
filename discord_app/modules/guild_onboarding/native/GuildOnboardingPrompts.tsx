// discord_app/modules/guild_onboarding/native/GuildOnboardingPrompts.tsx
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata";
import get from "get";
import hexToRgba from "hexToRgba";
import get_ActivityIndicator from "Themes";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import closure_9 from "get";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import handleUpdate from "handleUpdate";
import { OnboardingPromptType } from "serverPromptToClientPrompt";
import { GuildOnboardingModalStates as closure_15 } from "GUILD_ONBOARDING_MODAL_KEY";
import ME from "ME";
import jsxProd from "LinearGradient";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../_runtime/04706_LinearGradient.js";
import { preload } from "../../../components_native/common/FastImage.tsx";
import { keys } from "../../../ConstantsIOS.tsx";
import { hexToRgba } from "../../../utils/ColorUtils.tsx";

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_6;
let error;
const require = arg1;
function _getBackgroundGradientColor() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      let table = tmp5;
      let dependencyMap2 = tmp2;
      const obj2 = dependencyMap(outer1_2[18]);
      dependencyMap = yield obj2.getPaletteForAvatar(dependencyMap);
      dependencyMap2 = v0(32, 3);
      table = 32;
      return dependencyMap(table[19]).rgbToHex(table, v0, c4);
    })();
  });
  const _getBackgroundGradientColor = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function BackgroundImageGradient(uri) {
  const color = uri.color;
  const tmp = createCacheKey();
  let obj = { children: null };
  const items = [tmp.backgroundImage];
  const items1 = [callback2(preload, { source: { uri: uri.splashUrl }, style: items, resizeMode: "cover" }), ];
  obj = { style: tmp.backgroundColorGradient, start: null, end: null, colors: null };
  obj[1] = keys.VerticalGradient.START;
  obj[2] = keys.VerticalGradient.END;
  const tmp2 = LinearGradient;
  const items2 = [hexToRgba.hexWithOpacity(color, 0.16), color];
  obj[3] = items2;
  items1[1] = callback2(tmp2, obj);
  obj[0] = items1;
  return callback3(closure_20, obj);
}
({ StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticEvents: closure_16, MarketingURLs: closure_17, Routes: closure_18 } = ME);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
createCacheKey = { flex: { flex: 1 }, container: null, subtitle: null, onboardingTitle: null, onboardingPolicy: null, onboardingPolicyText: null, landingOverlay: null, artWrapper: null, landingBody: null, backgroundImage: null, backgroundColorGradient: null, darkColorGradient: null };
createCacheKey = { display: "flex", flex: 1, flexGrow: 1, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, marginBottom: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: require("Themes").space.PX_16, opacity: 0.8 };
createCacheKey[3] = { textAlign: "center" };
let obj1 = { marginBottom: require("Themes").space.PX_16, opacity: 0.8 };
createCacheKey[4] = { position: "absolute", paddingHorizontal: require("Themes").space.PX_16, display: "flex", justifyContent: "center", width: "100%", marginBottom: require("Themes").space.PX_16 };
createCacheKey[5] = { textAlign: "center" };
createCacheKey[6] = { position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center" };
createCacheKey[7] = { height: 350, position: "relative", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" };
let obj2 = { position: "absolute", paddingHorizontal: require("Themes").space.PX_16, display: "flex", justifyContent: "center", width: "100%", marginBottom: require("Themes").space.PX_16 };
createCacheKey[8] = { alignItems: "center", marginTop: -24, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[9] = { position: "absolute", height: "50%", width: "100%", top: 0 };
createCacheKey[10] = { position: "absolute", height: "100%", width: "100%", top: 0 };
createCacheKey[11] = { position: "absolute", height: "100%", width: "100%", top: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_25 = { code: "function GuildOnboardingPromptsTsx1(){const{showPrompts,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};}" };
let closure_26 = { code: "function GuildOnboardingPromptsTsx2(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withDelay(200,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}" };
let closure_27 = { code: "function GuildOnboardingPromptsTsx3(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}" };
let closure_28 = { code: "function GuildOnboardingPromptsTsx4(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}" };
let closure_29 = { code: "function GuildOnboardingPromptsTsx5(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?1:0;const opacity=withDelay(600,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&!showPrompts.get()?80:0;const translateY=withDelay(600,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}" };
let obj3 = { alignItems: "center", marginTop: -24, paddingHorizontal: require("Themes").space.PX_16 };
let result = require("noop").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompts.tsx");

export default function GuildOnboardingPrompt(guildId) {
  let backShouldLeaveGuild;
  let isFirstOpen;
  let onClose;
  let selectOption;
  guildId = guildId.guildId;
  const currentPromptIdx = guildId.currentPromptIdx;
  const prompts = guildId.prompts;
  ({ selectOption, onClose } = guildId);
  ({ isFirstOpen, backShouldLeaveGuild } = guildId);
  let stateFromStores;
  let stateFromStores1;
  let c7;
  isFirstOpen = undefined;
  let navigation;
  let c10;
  let c11;
  let sharedValue;
  let callback;
  let stateFromStores2;
  let stateFromStoresArray;
  let c16;
  let constants;
  let closure_18;
  let guildSplashURL;
  let required;
  let tmp = createCacheKey();
  const tmp3 = prompts;
  let obj = guildId(prompts[23]);
  let items = [navigation];
  stateFromStores = obj.useStateFromStores(items, () => navigation.getRulesPrompt(guildId));
  let obj1 = guildId(prompts[23]);
  const items1 = [isFirstOpen];
  stateFromStores1 = obj1.useStateFromStores(items1, () => isFirstOpen.useReducedMotion);
  let obj2 = guildId(prompts[23]);
  const items2 = [callback];
  const tmp8 = obj2.useStateFromStores(items2, () => callback.getOnboardingConnections(guildId)).length > 0;
  c7 = tmp8;
  if (isFirstOpen) {
    isFirstOpen = 0 === currentPromptIdx;
  }
  if (isFirstOpen) {
    isFirstOpen = !tmp8;
  }
  let tmp2Result = tmp2(tmp3[25]);
  navigation = tmp2Result.useNavigation();
  c10 = tmp10;
  c11 = tmp11;
  tmp2Result = tmp2(tmp3[26]);
  sharedValue = tmp2Result.useSharedValue(!isFirstOpen);
  let obj5 = stateFromStores;
  const items3 = [guildId, prompts];
  callback = stateFromStores.useCallback(() => {
    currentPromptIdx(prompts[27]).completeOnboarding(guildId, prompts);
  }, items3);
  const items4 = [c11];
  stateFromStores2 = guildId(tmp3[23]).useStateFromStores(items4, () => _undefined.getGuild(guildId));
  const tmp2Result1 = guildId(tmp3[23]);
  const tmp7 = callback;
  const items5 = [tmp7];
  const items6 = [guildId, prompts[currentPromptIdx]];
  stateFromStoresArray = guildId(tmp3[23]).useStateFromStoresArray(items5, () => {
    if (null != c11) {
      let onboardingResponsesForPrompt = callback.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items6);
  let tmp15 = 0 === stateFromStoresArray.length;
  if (tmp15) {
    required = undefined;
    if (tmp11 != null) {
      required = tmp11.required;
    }
    tmp15 = required;
  }
  c16 = tmp15;
  let tmp18 = currentPromptIdx + 1 >= prompts.length;
  if (tmp18) {
    tmp18 = !tmp2(tmp3[28]).showRulesInOnboarding(stateFromStores2, stateFromStores);
    const tmp2Result3 = tmp2(tmp3[28]);
  }
  constants = tmp18;
  const tmp19 = onClose(obj5.useState(currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800), 2);
  closure_18 = tmp19[1];
  guildSplashURL = null;
  if (null != stateFromStores2) {
    let tmp6Result = tmp6(tmp3[29]);
    obj = { id: null, splash: null, size: null };
    ({ id: obj11[0], splash: obj11[1] } = stateFromStores2);
    obj[2] = 400 * tmp6(tmp3[30])();
    guildSplashURL = tmp6Result.getGuildSplashURL(obj);
  }
  const items7 = [guildSplashURL];
  const effect = obj5.useEffect(() => {
    if (null != guildSplashURL) {
      (function getBackgroundGradientColor(arg0) {
        const self = this;
        const apply = closure_23.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(tmp).then((arg0) => {
        callback(arg0);
      });
      const promise = (function getBackgroundGradientColor(arg0) {
        const self = this;
        const apply = closure_23.apply;
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
      let obj = currentPromptIdx(prompts[31]);
      obj = {};
      const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
      obj.step = -1;
      obj.required = true;
      obj.track(_undefined2.GUILD_ONBOARDING_STEP_VIEWED, obj);
      const obj3 = guildId(prompts[32]);
      obj = {};
      const obj4 = currentPromptIdx(prompts[31]);
      const merged1 = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
      obj.step = -1;
      obj.skipped = c10;
      obj.is_final_step = false;
      obj.in_onboarding = true;
      obj4.track(_undefined2.GUILD_ONBOARDING_STEP_COMPLETED, obj);
      const obj6 = guildId(prompts[32]);
    }
  }, items8);
  const items9 = [sharedValue, isFirstOpen, prompts.length > 0, tmp8, onClose, callback, guildId];
  const effect2 = obj5.useEffect(() => {
    if (isFirstOpen) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (ensureGuildLoaded) {
          const result = handleConnectionOpen.set(true);
        } else {
          callback();
          callback2();
        }
      }, 2000);
    }
  }, items9);
  const items10 = [isFirstOpen, prompts.length > 0, onClose];
  const effect3 = obj5.useEffect(() => {
    let tmp = isFirstOpen;
    if (!isFirstOpen) {
      tmp = c10;
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
      let obj = currentPromptIdx(prompts[31]);
      obj = {};
      const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
      obj.step = 0;
      obj.required = required;
      obj.track(_undefined2.GUILD_ONBOARDING_STEP_VIEWED, obj);
      const obj3 = guildId(prompts[32]);
    }
  }, items11);
  const tmp2Result2 = guildId(tmp3[23]);
  function ot() {
    let obj = sharedValue;
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj1 = guildId(prompts[33]);
    obj = { duration: 300, easing: null };
    const Easing = guildId(prompts[26]).Easing;
    obj[1] = Easing.out(guildId(prompts[26]).Easing.ease);
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
    const Easing2 = tmp(tmp2[26]).Easing;
    obj2[1] = Easing2.out(guildId(prompts[26]).Easing.ease);
    obj1[0] = guildId(prompts[33]).withTiming(num2, obj2);
    const items = [obj1];
    obj[1] = items;
    return obj;
  }
  obj = { showPrompts: sharedValue, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  ot.__closure = obj;
  ot.__workletHash = 6820086589932;
  ot.__initData = closure_25;
  const animatedStyle = guildId(tmp3[26]).useAnimatedStyle(ot);
  const tmp2Result4 = guildId(tmp3[26]);
  function st() {
    let obj = sharedValue;
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj1 = guildId(prompts[26]);
    let obj2 = guildId(prompts[33]);
    obj = { duration: 300, easing: null };
    const Easing = guildId(prompts[26]).Easing;
    obj[1] = Easing.out(guildId(prompts[26]).Easing.ease);
    let num2 = 0;
    if (!stateFromStores1) {
      num2 = 0;
      if (obj.get()) {
        num2 = -80;
      }
    }
    obj = { opacity: obj1.withDelay(200, obj2.withTiming(num, obj)), transform: null };
    obj1 = { translateY: null };
    let tmpResult = tmp(tmp2[26]);
    tmpResult = tmp(tmp2[33]);
    obj2 = { duration: 300, easing: null };
    const Easing2 = tmp(tmp2[26]).Easing;
    obj2[1] = Easing2.out(guildId(prompts[26]).Easing.ease);
    obj1[0] = tmpResult.withDelay(200, tmpResult.withTiming(num2, obj2));
    const items = [obj1];
    obj[1] = items;
    return obj;
  }
  obj1 = { showPrompts: sharedValue, withDelay: tmp2(tmp3[26]).withDelay, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  st.__closure = obj1;
  st.__workletHash = 3034833873876;
  st.__initData = closure_26;
  const animatedStyle1 = guildId(tmp3[26]).useAnimatedStyle(st);
  const tmp2Result5 = guildId(tmp3[26]);
  function rt() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj = { opacity: null };
    const obj2 = guildId(prompts[26]);
    obj = { duration: 300, easing: null };
    const Easing = guildId(prompts[26]).Easing;
    obj[1] = Easing.out(guildId(prompts[26]).Easing.ease);
    obj[0] = obj2.withDelay(200, guildId(prompts[33]).withTiming(num, obj));
    return obj;
  }
  obj2 = { showPrompts: sharedValue, withDelay: tmp2(tmp3[26]).withDelay, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing };
  rt.__closure = obj2;
  rt.__workletHash = 2795589385440;
  rt.__initData = closure_27;
  const animatedStyle2 = guildId(tmp3[26]).useAnimatedStyle(rt);
  const tmp2Result6 = guildId(tmp3[26]);
  function lt() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj = { opacity: null };
    const obj2 = guildId(prompts[26]);
    obj = { duration: 300, easing: null };
    const Easing = guildId(prompts[26]).Easing;
    obj[1] = Easing.out(guildId(prompts[26]).Easing.ease);
    obj[0] = obj2.withDelay(200, guildId(prompts[33]).withTiming(num, obj));
    return obj;
  }
  const tmp2Result7 = guildId(tmp3[26]);
  lt.__closure = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing };
  lt.__workletHash = 13481450530727;
  lt.__initData = closure_28;
  const animatedStyle3 = tmp2Result7.useAnimatedStyle(lt);
  let obj3 = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing };
  function ct() {
    let obj = sharedValue;
    let num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    let obj1 = guildId(prompts[26]);
    let obj2 = guildId(prompts[33]);
    obj = { duration: 300, easing: null };
    const Easing = guildId(prompts[26]).Easing;
    obj[1] = Easing.out(guildId(prompts[26]).Easing.ease);
    if (stateFromStores1) {
      let num2 = 0;
    } else {
      num2 = 80;
    }
    obj = { opacity: obj1.withDelay(600, obj2.withTiming(num, obj)), transform: null };
    obj1 = { translateY: null };
    let tmpResult = tmp(tmp2[26]);
    tmpResult = tmp(tmp2[33]);
    obj2 = { duration: 300, easing: null };
    const Easing2 = tmp(tmp2[26]).Easing;
    obj2[1] = Easing2.out(guildId(prompts[26]).Easing.ease);
    obj1[0] = tmpResult.withDelay(600, tmpResult.withTiming(num2, obj2));
    const items = [obj1];
    obj[1] = items;
    return obj;
  }
  const tmp2Result8 = guildId(tmp3[26]);
  ct.__closure = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  ct.__workletHash = 14018549800735;
  ct.__initData = closure_29;
  const items12 = [navigation, currentPromptIdx, stateFromStoresArray, guildId, prompts, onClose, backShouldLeaveGuild, tmp8];
  const animatedStyle4 = tmp2Result8.useAnimatedStyle(ct);
  const layoutEffect = obj5.useLayoutEffect(() => {
    if (0 === currentPromptIdx) {
      if (!c7) {
        let obj = guildId(prompts[34]);
        obj = { headerLeft: null };
        obj[0] = obj.getHeaderCloseButton(() => {
          let transitionTo = outer1_2;
          let obj = outer1_1(outer1_2[31]);
          obj = {};
          let tmp = outer1_0;
          const merged = Object.assign(outer1_0(outer1_2[32]).collectGuildAnalyticsMetadata(closure_0));
          obj.step = 0;
          obj.skipped = true;
          obj.back = false;
          obj.options_selected = 0;
          obj.in_onboarding = true;
          obj.is_final_step = false;
          obj.track(outer1_16.GUILD_ONBOARDING_STEP_COMPLETED, obj);
          let tmp5 = collectGuildAnalyticsMetadata;
          if (get) {
            let channel = outer1_10.getChannel(outer1_12.getLastSelectedChannelId());
            if (null == channel) {
              tmp(transitionTo[14]).transitionTo(outer1_18.ME, { navigationReplace: true });
              tmp5 = tmp5();
              const tmpResult = tmp(transitionTo[14]);
            }
            tmp = tmp(transitionTo[14]);
            transitionTo = tmp.transitionTo;
            channel = transitionTo(outer1_18.CHANNEL(channel.guild_id, channel.id));
          } else {
            tmp5();
          }
        });
        navigation.setOptions(obj);
      }
    }
    if (0 !== currentPromptIdx) {
      let headerBackButton = guildId(prompts[34]).getHeaderBackButton(() => {
        let obj = outer1_1(outer1_2[31]);
        obj = {};
        const merged = Object.assign(outer1_0(outer1_2[32]).collectGuildAnalyticsMetadata(closure_0));
        obj.step = closure_1;
        obj.skipped = false;
        obj.back = true;
        obj.options_selected = closure_15.length;
        obj.in_onboarding = true;
        obj.is_final_step = false;
        obj.track(outer1_16.GUILD_ONBOARDING_STEP_COMPLETED, obj);
        const obj3 = outer1_0(outer1_2[32]);
        obj = {};
        const obj4 = outer1_1(outer1_2[31]);
        const merged1 = Object.assign(outer1_0(outer1_2[32]).collectGuildAnalyticsMetadata(closure_0));
        obj.step = closure_1 - 1;
        obj.required = table[closure_1 - 1].required;
        obj4.track(outer1_16.GUILD_ONBOARDING_STEP_VIEWED, obj);
        const obj6 = outer1_0(outer1_2[32]);
      }, true);
      const obj2 = guildId(prompts[34]);
    }
    headerBackButton = guildId(prompts[34]).getHeaderBackButton(() => {
      let obj = outer1_1(outer1_2[31]);
      obj = {};
      const merged = Object.assign(outer1_0(outer1_2[32]).collectGuildAnalyticsMetadata(closure_0));
      obj.step = 0;
      obj.skipped = false;
      obj.back = true;
      obj.options_selected = closure_15.length;
      obj.in_onboarding = true;
      obj.is_final_step = false;
      obj.track(outer1_16.GUILD_ONBOARDING_STEP_COMPLETED, obj);
      const obj3 = outer1_0(outer1_2[32]);
    }, true);
  }, items12);
  obj5 = { style: tmp.flex, children: null };
  let obj6 = { top: true, bottom: true, style: items13, children: null };
  items13 = [, ];
  ({ flex: arr16[0], container: arr16[1] } = tmp);
  const obj7 = { style: items14, children: null };
  items14 = [tmp.flex, animatedStyle4];
  let tmp34Result = null;
  if (prompts.length > 0) {
    tmp34Result = null;
    if (null != tmp11) {
      function handleOnPress() {
        if (!_undefined2) {
          if (c17) {
            let arr = navigation.push(stateFromStoresArray.COMPLETED);
          } else {
            let obj = currentPromptIdx(prompts[31]);
            obj = {};
            const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
            obj.step = currentPromptIdx;
            obj.options_selected = stateFromStoresArray.length;
            obj.skipped = 0 === stateFromStoresArray.length;
            obj.back = false;
            obj.in_onboarding = true;
            obj.is_final_step = false;
            obj.track(_undefined2.GUILD_ONBOARDING_STEP_COMPLETED, obj);
            arr = prompts;
            if (currentPromptIdx < prompts.length - 1) {
              obj = {};
              let tmp5Result = tmp5(tmp3[32]);
              const merged1 = Object.assign(tmp5Result.collectGuildAnalyticsMetadata(tmp6));
              obj.step = tmp9 + 1;
              obj.required = arr[tmp9 + 1].required;
              tmp2(tmp3[31]).track(tmp4.GUILD_ONBOARDING_STEP_VIEWED, obj);
              const tmp2Result = tmp2(tmp3[31]);
            }
            if (currentPromptIdx + 1 < arr.length) {
              const obj1 = { currentPrompt: null };
              obj1[0] = tmp9 + 1;
              arr = navigation.push(stateFromStoresArray.PROMPT, obj1);
            } else {
              tmp5Result = tmp5(tmp3[28]);
              if (tmp5Result.showRulesInOnboarding(stateFromStores2, stateFromStores)) {
                navigation.push(stateFromStoresArray.RULES);
              }
            }
            const obj3 = guildId(prompts[32]);
            tmp2 = currentPromptIdx;
            tmp4 = _undefined2;
            tmp6 = guildId;
          }
        }
      }
      const type = tmp11.type;
      if (stateFromStores2.MULTIPLE_CHOICE === type) {
        const obj8 = { guildId: null, currentPrompt: null, lastPrompt: null, currentPromptIndex: null, numberOfPrompts: null, selectOption: null, handleOnPress: null };
        obj8[0] = guildId;
        obj8[1] = tmp11;
        obj8[2] = tmp18;
        obj8[3] = currentPromptIdx;
        obj8[4] = prompts.length;
        obj8[5] = selectOption;
        obj8[6] = handleOnPress;
        tmp34Result = tmp34(tmp2(tmp3[36]).MultipleChoicePrompt, obj8);
      } else if (tmp36.DROPDOWN === type) {
        const obj9 = { guildId: null, currentPrompt: null, lastPrompt: null, currentPromptIndex: null, numberOfPrompts: null, selectOption: null, handleOnPress: null };
        obj9[0] = guildId;
        obj9[1] = tmp11;
        obj9[2] = tmp18;
        obj9[3] = currentPromptIdx;
        obj9[4] = prompts.length;
        obj9[5] = selectOption;
        obj9[6] = handleOnPress;
        tmp34Result = tmp34(tmp2(tmp3[36]).DropdownPrompt, obj9);
      } else {
        tmp2(tmp3[37]).assertNever(tmp11.type);
        const tmp2Result9 = tmp2(tmp3[37]);
      }
    }
  }
  obj7[1] = tmp34Result;
  obj6[3] = guildSplashURL(currentPromptIdx(tmp3[26]).View, obj7);
  const items15 = [guildSplashURL(guildId(tmp3[35]).SafeAreaPaddingView, obj6), ];
  const obj10 = { style: stateFromStores1.absoluteFill, pointerEvents: "none", children: null };
  const obj11 = { style: items16, pointerEvents: "none", children: null };
  items16 = [, ];
  ({ flex: arr19[0], landingOverlay: arr19[1] } = tmp);
  const obj12 = { style: items17, children: null };
  items17 = [tmp.landingOverlay, animatedStyle3];
  tmp34Result = null;
  if (null != guildSplashURL) {
    const obj13 = { splashUrl: null, color: null };
    obj13[0] = guildSplashURL;
    obj13[1] = tmp19[0];
    tmp34Result = tmp34(BackgroundImageGradient, obj13);
  }
  const items18 = [tmp34Result, ];
  const obj14 = { style: tmp.darkColorGradient, start: null, end: null, colors: null };
  tmp6Result = tmp6(tmp3[21]);
  obj14[1] = guildId(tmp3[22]).VerticalGradient.START;
  obj14[2] = guildId(tmp3[22]).VerticalGradient.END;
  let obj4 = { showPrompts: sharedValue, withDelay: guildId(tmp3[26]).withDelay, withTiming: guildId(tmp3[33]).withTiming, Easing: guildId(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  const items19 = [guildId(tmp3[19]).hexWithOpacity(currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800, 0.5), currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800];
  obj14[3] = items19;
  items18[1] = guildSplashURL(tmp6Result, obj14);
  obj12[1] = items18;
  const items20 = [closure_21(currentPromptIdx(tmp3[26]).View, obj12), , ];
  const obj15 = { style: items21, children: null };
  items21 = [tmp.artWrapper, animatedStyle];
  obj15[1] = guildSplashURL(currentPromptIdx(tmp3[38]), { source: guildId.landingAnimation, autoPlay: !stateFromStores1, style: { width: "100%" } });
  items20[1] = guildSplashURL(currentPromptIdx(tmp3[26]).View, obj15);
  const obj17 = { style: items22, children: null };
  items22 = [tmp.landingBody, animatedStyle1];
  const obj18 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = tmp2(tmp3[40]).intl;
  let str;
  if (stateFromStores2 != null) {
    str = stateFromStores2.name;
  }
  if (str == null) {
    str = "";
  }
  obj18[3] = intl.format(guildId(tmp3[40]).t.O2bQlD, { guildName: str });
  const items23 = [guildSplashURL(guildId(tmp3[39]).Text, obj18), ];
  const obj19 = { style: tmp.onboardingTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "text-overlay-light", children: null };
  const intl2 = tmp2(tmp3[40]).intl;
  obj19[4] = intl2.string(guildId(tmp3[40]).t["Alcl/e"]);
  items23[1] = guildSplashURL(guildId(tmp3[39]).Text, obj19);
  obj17[1] = items23;
  items20[2] = closure_21(currentPromptIdx(tmp3[26]).View, obj17);
  obj11[2] = items20;
  const items24 = [closure_21(currentPromptIdx(tmp3[26]).View, obj11), ];
  const obj20 = { style: items25, pointerEvents: "auto", children: null };
  items25 = [tmp.onboardingPolicy, animatedStyle2, { bottom: currentPromptIdx(prompts[24])().bottom }];
  const obj21 = { style: tmp.onboardingPolicyText, variant: "heading-sm/normal", color: "text-default", children: null };
  const intl3 = tmp2(tmp3[40]).intl;
  obj21[3] = intl3.format(guildId(tmp3[40]).t.kI6UoD, { privacyLink: constants.PRIVACY });
  obj20[2] = guildSplashURL(guildId(tmp3[39]).Text, obj21);
  items24[1] = guildSplashURL(currentPromptIdx(tmp3[26]).View, obj20);
  obj10[2] = items24;
  items15[1] = closure_21(c7, obj10);
  obj5[1] = items15;
  return closure_21(c7, obj5);
};