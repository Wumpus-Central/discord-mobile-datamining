// === Module 7126: PromptOptionButton ===

// Module 7126 (PromptOptionButton)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import closure_7 from "getEmojiToGroupId" /* 5459 */;
import { EMOJI_URL_BASE_SIZE } from "set" /* 1374 */;
import jsxProd from "jsxProd" /* 21 */;
import { Easing } from "module_4296" /* 4296 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { duration: 200, easing: null };
obj[1] = Easing.out(require("module_4296").Easing.ease);
obj = { container: null, optionButton: null, optionTextEmoji: null, optionImageEmoji: null, optionText: null, checkIcon: null, newBadgeWrapper: null, newBadge: null, roleCount: null };
obj = { borderRadius: ThemesDefault.radii.md, borderWidth: 2, borderStyle: "solid", borderColor: ThemesDefault.colors.BORDER_SUBTLE, marginBottom: 8 };
obj[0] = obj;
obj[1] = { paddingVertical: 12, paddingHorizontal: 16, display: "flex", flexDirection: "row", alignItems: "center" };
obj[2] = { fontSize: 24, lineHeight: 24, marginRight: 12, paddingTop: 5 };
obj[3] = { height: 24, width: 24, marginRight: 12 };
obj[4] = { flexShrink: 1 };
createCacheKey = { position: "absolute", top: -6, right: -6, width: 20, height: 20, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
obj[5] = createCacheKey;
obj[6] = { position: "absolute", top: -6, right: -6 };
obj[7] = { fontWeight: "bold" };
obj[8] = { position: "absolute", top: -6, right: 24, paddingVertical: 2, paddingHorizontal: 6, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = { code: "function GuildOnboardingPromptOptionButtonTsx1(){const{selected,withTiming,Easing,useReducedMotion,withSequence,withSpring}=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};}" };
let closure_14 = { code: "function GuildOnboardingPromptOptionButtonTsx2(){const{showMemberCount,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showMemberCount?1:0;const opacity=withDelay(showMemberCount?400:0,withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateX:translateX}]};}" };
let closure_15 = { code: "function GuildOnboardingPromptOptionButtonTsx3(){const{withTiming,selected,SELECTION_TIMING}=this.__closure;return withTiming(selected?1:0,SELECTION_TIMING);}" };
let closure_16 = { code: "function GuildOnboardingPromptOptionButtonTsx4(){const{withTiming,isNew,SELECTION_TIMING}=this.__closure;return withTiming(isNew?1:0,SELECTION_TIMING);}" };
let closure_17 = { code: "function GuildOnboardingPromptOptionButtonTsx5(){const{interpolateColor,newProgress,unselectedBorderColor,newBorderColor,selectedProgress,selectedBorderColor,selectedBackgroundColor}=this.__closure;const currentUnselectedBorderColor=interpolateColor(newProgress.get(),[0,1],[unselectedBorderColor,newBorderColor]);return{borderColor:interpolateColor(selectedProgress.get(),[0,1],[currentUnselectedBorderColor,selectedBorderColor]),backgroundColor:interpolateColor(selectedProgress.get(),[0,1],['transparent',selectedBackgroundColor])};}" };
let closure_18 = { code: "function GuildOnboardingPromptOptionButtonTsx6(){const{useReducedMotion,scale}=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale.get()}]};}" };
let obj2 = { position: "absolute", top: -6, right: 24, paddingVertical: 2, paddingHorizontal: 6, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
let result = require("set").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx");

export default function PromptOptionButton(option) {
  option = option.option;
  const selected = option.selected;
  ({ onSelect: dependencyMap, suppressMemberCount: closure_3, canBeNew } = option);
  let stateFromStores1;
  closure_5 = undefined;
  let num;
  let first;
  closure_8 = undefined;
  let callback2;
  closure_10 = undefined;
  let sharedValue;
  let isUnseen;
  closure_13 = undefined;
  let token;
  let token1;
  let token2;
  let token3;
  let derivedValue;
  let derivedValue1;
  const tmp = isUnseen();
  obj = option(504);
  let items = [first];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (option != null) {
      const emoji = tmp.emoji;
      if (emoji != null) {
        id = emoji.id;
      }
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      let id1;
      if (tmp != null) {
        const emoji2 = tmp.emoji;
        if (emoji2 != null) {
          id1 = emoji2.id;
        }
      }
      usableCustomEmojiById = first.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  obj1 = option(504);
  let items1 = [num];
  stateFromStores1 = obj1.useStateFromStores(items1, () => num.useReducedMotion);
  let obj2 = option(4296);
  class R {
    constructor() {
      num = 0;
      tmp = selected;
      if (selected) {
        num = 1;
      }
      tmp2 = option;
      tmp3 = onSelect;
      obj = option(onSelect[11]);
      obj = { duration: 150, easing: null };
      Easing = option(onSelect[7]).Easing;
      obj[1] = Easing.out(option(onSelect[7]).Easing.ease);
      num2 = 0.7;
      withTimingResult = obj.withTiming(num, obj);
      if (tmp) {
        num2 = 1;
      }
      obj1 = { opacity: withTimingResult, transform: null };
      withSequenceResult = num2;
      if (!closure_4) {
        tmp2Result = tmp2(tmp3[7]);
        tmp2Result1 = tmp2(tmp3[12]);
        num3 = 1.2;
        withSpringResult = tmp2Result1.withSpring(1.2 * num2, { stiffness: 80, damping: 6, mass: 0.3 });
        tmp2Result2 = tmp2(tmp3[12]);
        withSequenceResult = tmp2Result.withSequence(withSpringResult, tmp2Result2.withSpring(num2, { stiffness: 80, damping: 6, mass: 0.3 }));
      }
      items = [];
      items[0] = { scale: withSequenceResult };
      obj1[1] = items;
      return obj1;
    }
  }
  obj = { selected, withTiming: option(4561).withTiming, Easing: option(4296).Easing, useReducedMotion: stateFromStores1, withSequence: option(4296).withSequence, withSpring: option(4974).withSpring };
  R.__closure = obj;
  R.__workletHash = 8281627194581;
  R.__initData = closure_13;
  const animatedStyle = obj2.useAnimatedStyle(R);
  const tmp8 = selected(7127)(option.guildId);
  closure_5 = tmp8;
  num = 0;
  if (null != tmp8) {
    num = 0;
    if (null != option.roleIds) {
      const _Math = Math;
      const roleIds = option.roleIds;
      let items2 = [];
      HermesBuiltin.arraySpread(roleIds.map((arg0) => table[arg0]), 0);
      const _Math2 = Math;
      num = HermesBuiltin.apply(items2, Math);
    }
  }
  let obj4 = stateFromStores1;
  const tmp14 = callback(stateFromStores1.useState(false), 2);
  first = tmp14[0];
  closure_8 = tmp14[1];
  callback2 = stateFromStores1.useRef(null);
  const items3 = [first];
  const effect = stateFromStores1.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      closure_9.current = setTimeout(() => {
        callback(false);
        closure_9.current = null;
      }, 3000);
      return () => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.current);
        }
      };
    }
  }, items3);
  closure_10 = stateFromStores1.useRef(false);
  const items4 = [first, num];
  const effect1 = stateFromStores1.useEffect(() => {
    if (first) {
      if (!ref.current) {
        if (0 > 0) {
          const AccessibilityAnnouncer = option(closure_1_2[14]).AccessibilityAnnouncer;
          const intl = option(closure_1_2[15]).intl;
          obj = { memberCount: null };
          obj[0] = tmp3;
          AccessibilityAnnouncer.announce(intl.formatToPlainString(option(closure_1_2[15]).t.iyXfAn, obj), "polite");
          tmp2.current = true;
        }
      }
    }
    if (!first) {
      ref.current = false;
    }
  }, items4);
  let tmp2Result = tmp2(4296);
  class V {
    constructor() {
      tmp = closure_7;
      num = 0;
      if (closure_7) {
        num = 1;
      }
      tmp2 = option;
      tmp3 = onSelect;
      obj = option(onSelect[7]);
      num2 = 0;
      if (tmp) {
        num2 = 400;
      }
      tmp2Result = tmp2(tmp3[11]);
      obj = { duration: 150, easing: null };
      Easing = tmp2(tmp3[7]).Easing;
      obj[1] = Easing.out(tmp2(tmp3[7]).Easing.ease);
      num3 = 16;
      withDelayResult = obj.withDelay(num2, tmp2Result.withTiming(num, obj));
      if (tmp) {
        num3 = 0;
      }
      obj1 = { opacity: withDelayResult, transform: null };
      withDelayResult1 = num3;
      if (!closure_4) {
        tmp2Result1 = tmp2(tmp3[7]);
        num4 = 0;
        if (tmp) {
          num4 = 400;
        }
        tmp2Result2 = tmp2(tmp3[11]);
        obj2 = { duration: 200, easing: null };
        Easing2 = tmp2(tmp3[7]).Easing;
        obj2[1] = Easing2.out(tmp2(tmp3[7]).Easing.ease);
        withDelayResult1 = tmp2Result1.withDelay(num4, tmp2Result2.withTiming(num3, obj2));
      }
      items = [];
      items[0] = { translateX: withDelayResult1 };
      obj1[1] = items;
      return obj1;
    }
  }
  obj = { showMemberCount: first, withDelay: tmp2(4296).withDelay, withTiming: tmp2(4561).withTiming, Easing: tmp2(4296).Easing, useReducedMotion: stateFromStores1 };
  V.__closure = obj;
  V.__workletHash = 9518487706997;
  V.__initData = token;
  const animatedStyle1 = tmp2Result.useAnimatedStyle(V);
  tmp2Result = tmp2(4296);
  sharedValue = tmp2Result.useSharedValue(1);
  isUnseen = canBeNew;
  if (canBeNew) {
    isUnseen = option.isUnseen;
  }
  let id;
  if (option != null) {
    let emoji = option.emoji;
    if (emoji != null) {
      id = emoji.id;
    }
  }
  let tmp21 = null != id;
  if (!tmp21) {
    let name;
    if (option != null) {
      let emoji2 = option.emoji;
      if (emoji2 != null) {
        name = emoji2.name;
      }
    }
    tmp21 = null != name;
  }
  closure_13 = tmp21;
  const items5 = [tmp21, , , ];
  const emoji3 = option.emoji;
  let name1;
  if (emoji3 != null) {
    name1 = emoji3.name;
  }
  items5[1] = name1;
  ({ title: arr7[2], description: arr7[3] } = option);
  const memo = obj4.useMemo(() => {
    if (closure_13) {
      const emoji = tmp.emoji;
      let str;
      if (emoji != null) {
        str = emoji.name;
      }
      if (str == null) {
        str = "";
      }
      const replaced = str.replace(/^:|:$/g, "");
      if (null != tmp.description) {
        if (tmp.description.length > 0) {
          const intl3 = option(closure_1_2[15]).intl;
          obj = { emojiName: null, title: null, description: null };
          obj[0] = replaced;
          ({ title: obj3[1], description: obj3[2] } = tmp);
          let formatToPlainStringResult = intl3.formatToPlainString(option(closure_1_2[15]).t.nSzqkg, obj);
        }
        return formatToPlainStringResult;
      }
      const intl2 = option(closure_1_2[15]).intl;
      obj = { emojiName: null, title: null };
      obj[0] = replaced;
      obj[1] = tmp.title;
      formatToPlainStringResult = intl2.formatToPlainString(option(closure_1_2[15]).t.rBPpAN, obj);
    } else {
      if (null != tmp.description) {
        if (tmp.description.length > 0) {
          const intl = option(closure_1_2[15]).intl;
          obj = { title: null, description: null };
          ({ title: obj[0], description: obj[1] } = tmp);
          let title = intl.formatToPlainString(option(closure_1_2[15]).t.U4lDOC, obj);
        }
        return title;
      }
      title = tmp.title;
    }
  }, items5);
  token = option(4262).useToken(tmp7(576).colors.BORDER_SUBTLE);
  let tmp2Result1 = option(4262);
  token1 = option(4262).useToken(tmp7(576).colors.BACKGROUND_BRAND);
  const tmp2Result2 = option(4262);
  token2 = option(4262).useToken(tmp7(576).colors.BORDER_STRONG);
  const tmp2Result3 = option(4262);
  token3 = option(4262).useToken(tmp7(576).colors.BACKGROUND_BASE_LOWEST);
  const tmp2Result4 = option(4262);
  const fn = function q() {
    num = 0;
    if (selected) {
      num = 1;
    }
    return option(closure_1_2[11]).withTiming(num, sharedValue);
  };
  obj1 = { withTiming: tmp2(4561).withTiming, selected, SELECTION_TIMING: sharedValue };
  fn.__closure = obj1;
  fn.__workletHash = 11553377214675;
  fn.__initData = token1;
  derivedValue = option(4296).useDerivedValue(fn);
  const tmp2Result5 = option(4296);
  const fn2 = function z() {
    num = 0;
    if (isUnseen) {
      num = 1;
    }
    return option(closure_1_2[11]).withTiming(num, sharedValue);
  };
  obj2 = { withTiming: tmp2(4561).withTiming, isNew: isUnseen, SELECTION_TIMING: sharedValue };
  fn2.__closure = obj2;
  fn2.__workletHash = 9359578148244;
  fn2.__initData = token2;
  derivedValue1 = option(4296).useDerivedValue(fn2);
  const tmp2Result6 = option(4296);
  class W {
    constructor() {
      obj = option(onSelect[7]);
      items = [, ];
      items[0] = closure_14;
      items[1] = closure_15;
      obj = { borderColor: null, backgroundColor: null };
      interpolateColorResult = obj.interpolateColor(closure_19.get(), [0, 1], items);
      obj3 = option(onSelect[7]);
      items1 = [, ];
      items1[0] = interpolateColorResult;
      items1[1] = closure_16;
      obj[0] = obj3.interpolateColor(closure_18.get(), [0, 1], items1);
      obj4 = option(onSelect[7]);
      items2 = ["transparent"];
      items2[1] = closure_17;
      obj[1] = obj4.interpolateColor(closure_18.get(), [0, 1], items2);
      return obj;
    }
  }
  const tmp2Result7 = option(4296);
  W.__closure = { interpolateColor: option(4296).interpolateColor, newProgress: derivedValue1, unselectedBorderColor: token, newBorderColor: token1, selectedProgress: derivedValue, selectedBorderColor: token2, selectedBackgroundColor: token3 };
  W.__workletHash = 1340353593596;
  W.__initData = token3;
  const animatedStyle2 = tmp2Result7.useAnimatedStyle(W);
  let obj3 = { interpolateColor: option(4296).interpolateColor, newProgress: derivedValue1, unselectedBorderColor: token, newBorderColor: token1, selectedProgress: derivedValue, selectedBorderColor: token2, selectedBackgroundColor: token3 };
  class K {
    constructor() {
      if (closure_4) {
        obj = {};
      } else {
        obj = { transform: null };
        obj = { scale: null };
        tmp = closure_11;
        obj[0] = closure_11.get();
        items = [];
        items[0] = obj;
        obj[0] = items;
      }
      return obj;
    }
  }
  K.__closure = { useReducedMotion: stateFromStores1, scale: sharedValue };
  K.__workletHash = 11083046243451;
  K.__initData = derivedValue;
  const animatedStyle3 = option(4296).useAnimatedStyle(K);
  const tmp2Result8 = option(4296);
  const checkboxA11yNative = option(4277).useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj4 = { style: items6, children: null };
  items6 = [tmp.container, animatedStyle3, animatedStyle2];
  const obj5 = {
    activeOpacity: 0.6,
    style: items7,
    onPress() {
      callback(!selected);
      if (!closure_3) {
        callback2(!selected);
      }
    },
    onPressIn() {
      obj = option(closure_1_2[7]);
      const obj2 = option(closure_1_2[11]);
      const withTimingResult = option(closure_1_2[11]).withTiming(1, { duration: 0 });
      obj = { duration: 200, easing: null };
      const Easing = option(closure_1_2[7]).Easing;
      obj[1] = Easing.out(option(closure_1_2[7]).Easing.ease);
      const result = sharedValue.set(obj.withSequence(withTimingResult, option(closure_1_2[11]).withTiming(1.02, obj)));
    },
    onPressOut() {
      obj = option(closure_1_2[11]);
      obj = { duration: 100, easing: null };
      const Easing = option(closure_1_2[7]).Easing;
      obj[1] = Easing.out(option(closure_1_2[7]).Easing.ease);
      const result = sharedValue.set(obj.withTiming(1, obj));
    },
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: memo,
    children: null
  };
  items7 = [tmp.optionButton];
  let id1;
  if (option != null) {
    const emoji4 = option.emoji;
    if (emoji4 != null) {
      id1 = emoji4.id;
    }
  }
  let tmp38Result = null != id1;
  if (!tmp38Result) {
    let name2;
    if (option != null) {
      const emoji5 = option.emoji;
      if (emoji5 != null) {
        name2 = emoji5.name;
      }
    }
    tmp38Result = null != name2;
  }
  if (tmp38Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = { display: "flex", alignItems: "center" };
    const obj7 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ optionTextEmoji: obj24[0], optionImageEmoji: obj24[1] } = tmp);
    let emojiURL;
    let tmp7Result = tmp7(7130);
    if (null != stateFromStores) {
      tmp7Result = tmp7(1396);
      const obj8 = { id: null, animated: null, size: null };
      ({ id: obj26[0], animated: obj26[1] } = stateFromStores);
      obj8[2] = closure_8;
      emojiURL = tmp7Result.getEmojiURL(obj8);
    }
    obj7[2] = emojiURL;
    let str;
    if (option != null) {
      const emoji6 = option.emoji;
      if (emoji6 != null) {
        str = emoji6.name;
      }
    }
    if (str == null) {
      str = "";
    }
    obj7[3] = str;
    obj6[1] = callback2(tmp7Result, obj7);
    tmp38Result = tmp38(closure_5, obj6);
    const tmp39 = closure_5;
  }
  const items8 = [tmp38Result, ];
  const obj9 = { style: tmp.optionText, children: null };
  const items9 = [callback2(option(4556).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: option.title }), ];
  let tmp44Result = null != option.description && option.description.length > 0;
  if (tmp44Result) {
    const obj11 = { variant: "text-xs/medium", color: "text-default", children: null };
    obj11[2] = option.description;
    tmp44Result = tmp44(tmp2(4556).Text, obj11);
  }
  items9[1] = tmp44Result;
  obj9[1] = items9;
  items8[1] = closure_10(closure_5, obj9);
  obj5[8] = items8;
  const items10 = [closure_10(option(5123).PressableOpacity, obj5), , , ];
  tmp44Result = null;
  if (num > 0) {
    const obj12 = { accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: null, children: null };
    const items11 = [tmp.roleCount, animatedStyle1];
    obj12[3] = items11;
    const obj13 = { variant: "text-xs/semibold", color: "text-overlay-light", children: null };
    let intl = tmp2(1114).intl;
    const obj14 = { memberCount: null };
    obj14[0] = num;
    obj13[2] = intl.format(tmp2(1114).t.EgKsZA, obj14);
    obj12[4] = tmp44(tmp2(4556).Text, obj13);
    tmp44Result = tmp44(tmp7(4296).View, obj12);
  }
  items10[1] = tmp44Result;
  const obj15 = { style: items12, children: null };
  items12 = [tmp.checkIcon, animatedStyle];
  const obj10 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: option.title };
  const tmp2Result9 = option(4277);
  const tmp43 = closure_5;
  obj15[1] = callback2(option(7133).CheckmarkSmallIcon, { size: "xs", color: selected(576).colors.WHITE });
  items10[2] = callback2(selected(4296).View, obj15);
  if (canBeNew) {
    canBeNew = !selected;
  }
  if (canBeNew) {
    canBeNew = option.isUnseen;
  }
  if (canBeNew) {
    const obj17 = { color: null, text: null, style: null, textStyle: null };
    obj17[0] = tmp2(1178).BadgeColors.BRAND;
    let intl2 = tmp2(1114).intl;
    obj17[1] = intl2.string(tmp2(1114).t.y2b7CA);
    ({ newBadgeWrapper: obj35[2], newBadge: obj35[3] } = tmp);
    canBeNew = tmp44(tmp2(1178).TextBadge, obj17);
  }
  items10[3] = canBeNew;
  obj4[1] = items10;
  return closure_10(selected(4296).View, obj4);
};