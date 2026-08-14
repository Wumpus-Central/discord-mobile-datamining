// discord_app/modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx
import _slicedToArray from "_slicedToArray";
import Emoji from "Emoji";
import { View } from "useCheckboxA11yNative";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import getEmojiToGroupId from "getEmojiToGroupId";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, optionButton: null, optionTextEmoji: null, optionImageEmoji: null, optionText: null, checkIcon: null, newBadgeWrapper: null, newBadge: null, roleCount: null };
createCacheKey = { borderRadius: require("Themes").radii.md, borderWidth: 2, borderStyle: "solid", marginBottom: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: 12, paddingHorizontal: 16, display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { fontSize: 24, lineHeight: 24, marginRight: 12, paddingTop: 5 };
createCacheKey[3] = { height: 24, width: 24, marginRight: 12 };
createCacheKey[4] = { flexShrink: 1 };
createCacheKey[5] = { position: "absolute", top: -6, right: -6, width: 20, height: 20, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey[6] = { position: "absolute", top: -6, right: -6 };
createCacheKey[7] = { fontWeight: "bold" };
let obj1 = { position: "absolute", top: -6, right: -6, width: 20, height: 20, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey[8] = { position: "absolute", top: -6, right: 24, paddingVertical: 2, paddingHorizontal: 6, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_12 = { code: "function GuildOnboardingPromptOptionButtonTsx1(){const{selected,withTiming,Easing,useReducedMotion,withSequence,withSpring}=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};}" };
let closure_13 = { code: "function GuildOnboardingPromptOptionButtonTsx2(){const{showMemberCount,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showMemberCount?1:0;const opacity=withDelay(showMemberCount?400:0,withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateX:translateX}]};}" };
let closure_14 = { code: "function GuildOnboardingPromptOptionButtonTsx3(){const{useReducedMotion,Easing,withTiming,selected,selectedBorderColor,isNew,unselectedBrandBorderColor,unselectedBorderColor,selectedBackgroundColor}=this.__closure;const timing=useReducedMotion?{duration:0}:{duration:200,easing:Easing.out(Easing.ease)};return{borderColor:withTiming(selected?selectedBorderColor:isNew?unselectedBrandBorderColor:unselectedBorderColor,timing),backgroundColor:withTiming(selected?selectedBackgroundColor:'transparent',timing)};}" };
let closure_15 = { code: "function GuildOnboardingPromptOptionButtonTsx4(){const{useReducedMotion,scale}=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale.get()}]};}" };
let obj2 = { position: "absolute", top: -6, right: 24, paddingVertical: 2, paddingHorizontal: 6, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx");

export default function PromptOptionButton(option) {
  let accessibilityRole;
  let accessibilityState;
  let canBeNew;
  let _slicedToArray;
  let dependencyMap;
  option = option.option;
  const selected = option.selected;
  ({ onSelect: dependencyMap, suppressMemberCount: _slicedToArray, canBeNew } = option);
  let stateFromStores1;
  let c5;
  let num;
  let first;
  let closure_8;
  let callback2;
  let closure_10;
  let sharedValue;
  let isUnseen;
  let c13;
  let token;
  let token1;
  let token2;
  let token3;
  const tmp = sharedValue();
  let obj = option(589);
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
  let obj1 = option(589);
  const items1 = [num];
  stateFromStores1 = obj1.useStateFromStores(items1, () => num.useReducedMotion);
  let obj2 = option(4083);
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
      Easing = option(onSelect[10]).Easing;
      obj[1] = Easing.out(option(onSelect[10]).Easing.ease);
      num2 = 0.7;
      withTimingResult = obj.withTiming(num, obj);
      if (tmp) {
        num2 = 1;
      }
      obj1 = { opacity: withTimingResult, transform: null };
      withSequenceResult = num2;
      if (!c4) {
        tmp2Result = tmp2(tmp3[10]);
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
  obj = { selected, withTiming: option(4343).withTiming, Easing: option(4083).Easing, useReducedMotion: stateFromStores1, withSequence: option(4083).withSequence, withSpring: option(4776).withSpring };
  R.__closure = obj;
  R.__workletHash = 8281627194581;
  R.__initData = isUnseen;
  const animatedStyle = obj2.useAnimatedStyle(R);
  const tmp8 = selected(5418)(option.guildId);
  c5 = tmp8;
  num = 0;
  if (null != tmp8) {
    num = 0;
    if (null != option.roleIds) {
      const _Math = Math;
      const roleIds = option.roleIds;
      const items2 = [];
      HermesBuiltin.arraySpread(roleIds.map((arg0) => _undefined[arg0]), 0);
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
          const AccessibilityAnnouncer = option(outer1_2[14]).AccessibilityAnnouncer;
          const intl = option(outer1_2[15]).intl;
          const obj = { memberCount: null };
          obj[0] = tmp3;
          AccessibilityAnnouncer.announce(intl.formatToPlainString(option(outer1_2[15]).t.iyXfAn, obj), "polite");
          tmp2.current = true;
        }
      }
    }
    if (!first) {
      ref.current = false;
    }
  }, items4);
  let tmp2Result = tmp2(4083);
  class G {
    constructor() {
      tmp = withSpring;
      num = 0;
      if (withSpring) {
        num = 1;
      }
      tmp2 = option;
      tmp3 = onSelect;
      obj = option(onSelect[10]);
      num2 = 0;
      if (tmp) {
        num2 = 400;
      }
      tmp2Result = tmp2(tmp3[11]);
      obj = { duration: 150, easing: null };
      Easing = tmp2(tmp3[10]).Easing;
      obj[1] = Easing.out(tmp2(tmp3[10]).Easing.ease);
      num3 = 16;
      withDelayResult = obj.withDelay(num2, tmp2Result.withTiming(num, obj));
      if (tmp) {
        num3 = 0;
      }
      obj1 = { opacity: withDelayResult, transform: null };
      withDelayResult1 = num3;
      if (!c4) {
        tmp2Result1 = tmp2(tmp3[10]);
        num4 = 0;
        if (tmp) {
          num4 = 400;
        }
        tmp2Result2 = tmp2(tmp3[11]);
        obj2 = { duration: 200, easing: null };
        Easing2 = tmp2(tmp3[10]).Easing;
        obj2[1] = Easing2.out(tmp2(tmp3[10]).Easing.ease);
        withDelayResult1 = tmp2Result1.withDelay(num4, tmp2Result2.withTiming(num3, obj2));
      }
      items = [];
      items[0] = { translateX: withDelayResult1 };
      obj1[1] = items;
      return obj1;
    }
  }
  obj = { showMemberCount: first, withDelay: tmp2(4083).withDelay, withTiming: tmp2(4343).withTiming, Easing: tmp2(4083).Easing, useReducedMotion: stateFromStores1 };
  G.__closure = obj;
  G.__workletHash = 9518487706997;
  G.__initData = c13;
  const animatedStyle1 = tmp2Result.useAnimatedStyle(G);
  tmp2Result = tmp2(4083);
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
  c13 = tmp21;
  const items5 = [tmp21, , , ];
  const emoji3 = option.emoji;
  let name1;
  if (emoji3 != null) {
    name1 = emoji3.name;
  }
  items5[1] = name1;
  ({ title: arr7[2], description: arr7[3] } = option);
  const memo = obj4.useMemo(() => {
    if (c13) {
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
          const intl3 = option(outer1_2[15]).intl;
          let obj = { emojiName: null, title: null, description: null };
          obj[0] = replaced;
          ({ title: obj3[1], description: obj3[2] } = tmp);
          let formatToPlainStringResult = intl3.formatToPlainString(option(outer1_2[15]).t.nSzqkg, obj);
        }
        return formatToPlainStringResult;
      }
      const intl2 = option(outer1_2[15]).intl;
      obj = { emojiName: null, title: null };
      obj[0] = replaced;
      obj[1] = tmp.title;
      formatToPlainStringResult = intl2.formatToPlainString(option(outer1_2[15]).t.rBPpAN, obj);
    } else {
      if (null != tmp.description) {
        if (tmp.description.length > 0) {
          const intl = option(outer1_2[15]).intl;
          obj = { title: null, description: null };
          ({ title: obj[0], description: obj[1] } = tmp);
          let title = intl.formatToPlainString(option(outer1_2[15]).t.U4lDOC, obj);
        }
        return title;
      }
      title = tmp.title;
    }
  }, items5);
  token = option(4065).useToken(tmp7(712).colors.BACKGROUND_BRAND);
  let tmp2Result1 = option(4065);
  token1 = option(4065).useToken(tmp7(712).colors.BORDER_SUBTLE);
  const tmp2Result2 = option(4065);
  token2 = option(4065).useToken(tmp7(712).colors.BORDER_STRONG);
  const tmp2Result3 = option(4065);
  token3 = option(4065).useToken(tmp7(712).colors.BACKGROUND_BASE_LOWEST);
  const tmp2Result4 = option(4065);
  class H {
    constructor() {
      if (c4) {
        obj = { duration: 0 };
      } else {
        obj = { duration: 200, easing: null };
        tmp = option;
        tmp2 = onSelect;
        Easing = option(onSelect[10]).Easing;
        tmp3 = option;
        tmp4 = onSelect;
        obj[1] = Easing.out(option(onSelect[10]).Easing.ease);
      }
      obj2 = option(onSelect[11]);
      tmp5 = selected;
      if (selected) {
        tmp7 = c16;
      } else {
        tmp6 = isUnseen;
        tmp7 = isUnseen ? c14 : c15;
      }
      obj = { borderColor: obj2.withTiming(tmp7, obj), backgroundColor: null };
      obj4 = option(onSelect[11]);
      str = "transparent";
      if (tmp5) {
        str = description;
      }
      obj[1] = obj4.withTiming(str, obj);
      return obj;
    }
  }
  obj1 = { useReducedMotion: stateFromStores1, Easing: tmp2(4083).Easing, withTiming: tmp2(4343).withTiming, selected, selectedBorderColor: token2, isNew: isUnseen, unselectedBrandBorderColor: token, unselectedBorderColor: token1, selectedBackgroundColor: token3 };
  H.__closure = obj1;
  H.__workletHash = 17180171486485;
  H.__initData = token;
  const animatedStyle2 = option(4083).useAnimatedStyle(H);
  const tmp2Result5 = option(4083);
  const fn = function q() {
    if (stateFromStores1) {
      let obj = {};
    } else {
      obj = { transform: null };
      obj = { scale: null };
      obj[0] = sharedValue.get();
      const items = [obj];
      obj[0] = items;
    }
    return obj;
  };
  fn.__closure = { useReducedMotion: stateFromStores1, scale: sharedValue };
  fn.__workletHash = 319662489785;
  fn.__initData = token1;
  const animatedStyle3 = option(4083).useAnimatedStyle(fn);
  const tmp2Result6 = option(4083);
  const checkboxA11yNative = option(4073).useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj2 = { style: items6, children: null };
  items6 = [animatedStyle3, animatedStyle2, tmp.container];
  const obj3 = {
    activeOpacity: 0.6,
    style: items7,
    onPress() {
      callback(!selected);
      if (!_slicedToArray) {
        callback2(!selected);
      }
    },
    onPressIn() {
      let obj = option(outer1_2[10]);
      const obj2 = option(outer1_2[11]);
      const withTimingResult = option(outer1_2[11]).withTiming(1, { duration: 0 });
      obj = { duration: 200, easing: null };
      const Easing = option(outer1_2[10]).Easing;
      obj[1] = Easing.out(option(outer1_2[10]).Easing.ease);
      const result = sharedValue.set(obj.withSequence(withTimingResult, option(outer1_2[11]).withTiming(1.02, obj)));
    },
    onPressOut() {
      let obj = option(outer1_2[11]);
      obj = { duration: 100, easing: null };
      const Easing = option(outer1_2[10]).Easing;
      obj[1] = Easing.out(option(outer1_2[10]).Easing.ease);
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
  let tmp36Result = null != id1;
  if (!tmp36Result) {
    let name2;
    if (option != null) {
      const emoji5 = option.emoji;
      if (emoji5 != null) {
        name2 = emoji5.name;
      }
    }
    tmp36Result = null != name2;
  }
  if (tmp36Result) {
    obj4 = { style: null, children: null };
    obj4[0] = { display: "flex", alignItems: "center" };
    const obj5 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ optionTextEmoji: obj20[0], optionImageEmoji: obj20[1] } = tmp);
    let emojiURL;
    let tmp7Result = tmp7(5421);
    if (null != stateFromStores) {
      tmp7Result = tmp7(1435);
      const obj6 = { id: null, animated: null, size: null };
      ({ id: obj22[0], animated: obj22[1] } = stateFromStores);
      obj6[2] = closure_8;
      emojiURL = tmp7Result.getEmojiURL(obj6);
    }
    obj5[2] = emojiURL;
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
    obj5[3] = str;
    obj4[1] = callback2(tmp7Result, obj5);
    tmp36Result = tmp36(c5, obj4);
    const tmp37 = c5;
  }
  const items8 = [tmp36Result, ];
  const obj7 = { style: tmp.optionText, children: null };
  const items9 = [callback2(option(4338).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: option.title }), ];
  let tmp42Result = null != option.description && option.description.length > 0;
  if (tmp42Result) {
    const obj9 = { variant: "text-xs/medium", color: "text-default", children: null };
    obj9[2] = option.description;
    tmp42Result = tmp42(tmp2(4338).Text, obj9);
  }
  items9[1] = tmp42Result;
  obj7[1] = items9;
  items8[1] = closure_10(c5, obj7);
  obj3[8] = items8;
  const items10 = [closure_10(option(4909).PressableOpacity, obj3), , , ];
  tmp42Result = null;
  if (num > 0) {
    const obj10 = { accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: null, children: null };
    const items11 = [tmp.roleCount, animatedStyle1];
    obj10[3] = items11;
    const obj11 = { variant: "text-xs/semibold", color: "text-overlay-light", children: null };
    let intl = tmp2(1236).intl;
    const obj12 = { memberCount: null };
    obj12[0] = num;
    obj11[2] = intl.format(tmp2(1236).t.EgKsZA, obj12);
    obj10[4] = tmp42(tmp2(4338).Text, obj11);
    tmp42Result = tmp42(tmp7(4083).View, obj10);
  }
  items10[1] = tmp42Result;
  const obj13 = { style: items12, children: null };
  items12 = [tmp.checkIcon, animatedStyle];
  const obj14 = { size: "xs", color: null };
  obj14[1] = selected(712).colors.WHITE;
  obj13[1] = callback2(option(5424).CheckmarkSmallIcon, obj14);
  items10[2] = callback2(selected(4083).View, obj13);
  if (canBeNew) {
    canBeNew = !selected;
  }
  if (canBeNew) {
    canBeNew = option.isUnseen;
  }
  if (canBeNew) {
    const obj15 = { color: null, text: null, style: null, textStyle: null };
    obj15[0] = tmp2(1297).BadgeColors.BRAND;
    let intl2 = tmp2(1236).intl;
    obj15[1] = intl2.string(tmp2(1236).t.y2b7CA);
    ({ newBadgeWrapper: obj31[2], newBadge: obj31[3] } = tmp);
    canBeNew = tmp42(tmp2(1297).TextBadge, obj15);
  }
  items10[3] = canBeNew;
  obj2[1] = items10;
  return closure_10(selected(4083).View, obj2);
};