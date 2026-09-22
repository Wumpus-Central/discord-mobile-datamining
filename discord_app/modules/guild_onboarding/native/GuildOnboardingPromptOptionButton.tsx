// === Module 7373: GuildOnboardingPromptOptionButton ===

// Module 7373 (GuildOnboardingPromptOptionButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4468 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4493 */;
import timing from "timing" /* 4758 */;
import spring from "spring" /* 5186 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;
import EmojiStore from "EmojiStore" /* 5678 */;

require = fn;
const View = fn(17).View;
const EMOJI_URL_BASE_SIZE = fn(1375).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let obj = { duration: 200, easing: null };
let Easing = fn(4493).Easing;
obj.easing = Easing.out(fn(4493).Easing.ease);
const createStyles = fn(4757);
let obj3 = { container: { borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 8 }, optionButton: { paddingVertical: 12, paddingHorizontal: 16, display: "flex", flexDirection: "row", alignItems: "center" }, optionTextEmoji: { fontSize: 24, lineHeight: 24, marginRight: 12, paddingTop: 5 }, optionImageEmoji: { height: 24, width: 24, marginRight: 12 }, optionText: { flexShrink: 1 }, checkIcon: null, newBadgeWrapper: null, newBadge: null, roleCount: null };
let size = { position: "absolute", top: -6, right: -6, width: 20, height: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
obj3.checkIcon = size;
obj3.newBadgeWrapper = { position: "absolute", top: -6, right: -6 };
obj3.newBadge = { fontWeight: "bold" };
const rect = { position: "absolute", top: -6, right: 24, paddingVertical: 2, paddingHorizontal: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
obj3.roleCount = rect;
let closure_12 = createStyles.createStyles(obj3);
let __initData = { code: "function GuildOnboardingPromptOptionButtonTsx1(){const{selected,withTiming,Easing,useReducedMotion,withSequence,withSpring}=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};}" };
let closure_14 = { code: "function GuildOnboardingPromptOptionButtonTsx2(){const{showMemberCount,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showMemberCount?1:0;const opacity=withDelay(showMemberCount?400:0,withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateX:translateX}]};}" };
let closure_15 = { code: "function GuildOnboardingPromptOptionButtonTsx3(){const{withTiming,selected,SELECTION_TIMING}=this.__closure;return withTiming(selected?1:0,SELECTION_TIMING);}" };
let closure_16 = { code: "function GuildOnboardingPromptOptionButtonTsx4(){const{withTiming,isNew,SELECTION_TIMING}=this.__closure;return withTiming(isNew?1:0,SELECTION_TIMING);}" };
let closure_17 = { code: "function GuildOnboardingPromptOptionButtonTsx5(){const{interpolateColor,newProgress,unselectedBorderColor,newBorderColor,selectedProgress,selectedBorderColor,selectedBackgroundColor}=this.__closure;const currentUnselectedBorderColor=interpolateColor(newProgress.get(),[0,1],[unselectedBorderColor,newBorderColor]);return{borderColor:interpolateColor(selectedProgress.get(),[0,1],[currentUnselectedBorderColor,selectedBorderColor]),backgroundColor:interpolateColor(selectedProgress.get(),[0,1],['transparent',selectedBackgroundColor])};}" };
let closure_18 = { code: "function GuildOnboardingPromptOptionButtonTsx6(){const{useReducedMotion,scale}=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale.get()}]};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx");

export default function PromptOptionButton(option) {
  option = option.option;
  const selected = option.selected;
  ({ onSelect: dependencyMap, suppressMemberCount: _slicedToArray, canBeNew } = option);
  closure_5 = undefined;
  let num;
  showMemberCount = undefined;
  size = undefined;
  closure_9 = undefined;
  let ref;
  let sharedValue;
  let isUnseen;
  __initData = undefined;
  let token;
  let token1;
  let token2;
  let token3;
  let derivedValue;
  let derivedValue1;
  const tmp = isUnseen();
  let items = [showMemberCount];
  const stateFromStores = option(504).useStateFromStores(items, () => {
    let id;
    if (option != null) {
      const emoji = option.emoji;
      if (emoji != null) {
        id = emoji.id;
      }
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      let id1;
      if (option != null) {
        const emoji2 = option.emoji;
        if (emoji2 != null) {
          id1 = emoji2.id;
        }
      }
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  obj = option(504);
  let items1 = [num];
  const stateFromStores1 = option(504).useStateFromStores(items1, () => num.useReducedMotion);
  let obj2 = option(504);
  class R {
    constructor() {
      num = 0;
      tmp = selected;
      if (selected) {
        num = 1;
      }
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[11]);
      obj1 = { duration: 150, easing: null };
      Easing = closure_0(closure_2[7]).Easing;
      obj1.easing = Easing.out(closure_0(closure_2[7]).Easing.ease);
      num2 = 0.7;
      withTimingResult = obj.withTiming(num, obj1);
      if (tmp) {
        num2 = 1;
      }
      obj7 = { opacity: withTimingResult, transform: null };
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
      obj7.transform = items;
      return obj7;
    }
  }
  let obj3 = option(4493);
  R.__closure = { selected, withTiming: option(4758).withTiming, Easing: option(4493).Easing, useReducedMotion: stateFromStores1, withSequence: option(4493).withSequence, withSpring: option(5186).withSpring };
  R.__workletHash = 8281627194581;
  R.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(R);
  const tmp8 = selected(7374)(option.guildId);
  closure_5 = tmp8;
  num = 0;
  if (null != tmp8) {
    num = 0;
    if (null != option.roleIds) {
      const _Math = Math;
      const roleIds = option.roleIds;
      let items2 = [];
      HermesBuiltin.arraySpread(roleIds.map((item) => closure_5[item]), 0);
      const _Math2 = Math;
      num = HermesBuiltin.apply(items2, Math);
    }
  }
  [showMemberCount, size] = stateFromStores1.useState(false);
  closure_9 = stateFromStores1.useRef(null);
  const items3 = [showMemberCount];
  const effect = stateFromStores1.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_8(false);
        ref.current = null;
      }, 3000);
      return () => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.current);
        }
      };
    }
  }, items3);
  ref = stateFromStores1.useRef(false);
  const items4 = [showMemberCount, num];
  const effect1 = stateFromStores1.useEffect(() => {
    if (first) {
      if (!ref.current) {
        if (0 > 0) {
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const intl = util.intl;
          obj = { memberCount: tmp3 };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.iyXfAn, obj), "polite");
          tmp2.current = true;
        }
      }
    }
    if (!first) {
      ref.current = false;
    }
  }, items4);
  let obj4 = { selected, withTiming: option(4758).withTiming, Easing: option(4493).Easing, useReducedMotion: stateFromStores1, withSequence: option(4493).withSequence, withSpring: option(5186).withSpring };
  let obj5 = stateFromStores1;
  class V {
    constructor() {
      tmp = closure_7;
      num = 0;
      if (closure_7) {
        num = 1;
      }
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[7]);
      num2 = 0;
      if (tmp) {
        num2 = 400;
      }
      tmp2Result = tmp2(tmp3[11]);
      obj1 = { duration: 150, easing: null };
      Easing = tmp2(tmp3[7]).Easing;
      obj1.easing = Easing.out(tmp2(tmp3[7]).Easing.ease);
      num3 = 16;
      withDelayResult = obj.withDelay(num2, tmp2Result.withTiming(num, obj1));
      if (tmp) {
        num3 = 0;
      }
      obj8 = { opacity: withDelayResult, transform: null };
      withDelayResult1 = num3;
      if (!closure_4) {
        tmp2Result1 = tmp2(tmp3[7]);
        num4 = 0;
        if (tmp) {
          num4 = 400;
        }
        tmp2Result2 = tmp2(tmp3[11]);
        obj9 = { duration: 200, easing: null };
        Easing2 = tmp2(tmp3[7]).Easing;
        obj9.easing = Easing2.out(tmp2(tmp3[7]).Easing.ease);
        withDelayResult1 = tmp2Result1.withDelay(num4, tmp2Result2.withTiming(num3, obj9));
      }
      items = [];
      items[0] = { translateX: withDelayResult1 };
      obj8.transform = items;
      return obj8;
    }
  }
  let tmp2Result = option(4493);
  V.__closure = { showMemberCount, withDelay: option(4493).withDelay, withTiming: option(4758).withTiming, Easing: option(4493).Easing, useReducedMotion: stateFromStores1 };
  V.__workletHash = 9518487706997;
  V.__initData = token;
  const animatedStyle1 = tmp2Result.useAnimatedStyle(V);
  const obj6 = { showMemberCount, withDelay: option(4493).withDelay, withTiming: option(4758).withTiming, Easing: option(4493).Easing, useReducedMotion: stateFromStores1 };
  sharedValue = option(4493).useSharedValue(1);
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
  __initData = tmp21;
  const items5 = [tmp21, , , ];
  const emoji3 = option.emoji;
  let name1;
  if (emoji3 != null) {
    name1 = emoji3.name;
  }
  items5[1] = name1;
  ({ title: arr7[2], description: arr7[3] } = option);
  const memo = obj5.useMemo(() => {
    if (closure_13) {
      const emoji = option.emoji;
      let str;
      if (emoji != null) {
        str = emoji.name;
      }
      if (str == null) {
        str = "";
      }
      const replaced = str.replace(/^:|:$/g, "");
      if (null != option.description) {
        if (option.description.length > 0) {
          const intl3 = util.intl;
          const obj2 = { emojiName: replaced, title: null, description: null };
          ({ title: obj3.title, description: obj3.description } = option);
          let formatToPlainStringResult = intl3.formatToPlainString(util.t.nSzqkg, obj2);
        }
        return formatToPlainStringResult;
      }
      const intl2 = util.intl;
      const obj5 = { emojiName: replaced, title: option.title };
      formatToPlainStringResult = intl2.formatToPlainString(util.t.rBPpAN, obj5);
    } else {
      if (null != option.description) {
        if (option.description.length > 0) {
          const intl = util.intl;
          obj = { title: null, description: null };
          ({ title: obj.title, description: obj.description } = option);
          let title = intl.formatToPlainString(util.t.U4lDOC, obj);
        }
        return title;
      }
      title = option.title;
    }
  }, items5);
  const tmp2Result11 = option(4493);
  token = option(4458).useToken(tmp7(576).colors.BORDER_SUBTLE);
  const tmp2Result12 = option(4458);
  token1 = option(4458).useToken(tmp7(576).colors.BACKGROUND_BRAND);
  const tmp2Result13 = option(4458);
  token2 = option(4458).useToken(tmp7(576).colors.BORDER_STRONG);
  const tmp2Result14 = option(4458);
  token3 = option(4458).useToken(tmp7(576).colors.BACKGROUND_BASE_LOWEST);
  const tmp2Result15 = option(4458);
  const fn = function q() {
    obj = timing;
    num = 0;
    if (selected) {
      num = 1;
    }
    return obj.withTiming(num, obj);
  };
  const tmp2Result16 = option(4493);
  fn.__closure = { withTiming: option(4758).withTiming, selected, SELECTION_TIMING: sharedValue };
  fn.__workletHash = 11553377214675;
  fn.__initData = token1;
  derivedValue = tmp2Result16.useDerivedValue(fn);
  const obj7 = { withTiming: option(4758).withTiming, selected, SELECTION_TIMING: sharedValue };
  const fn2 = function z() {
    obj = timing;
    num = 0;
    if (isUnseen) {
      num = 1;
    }
    return obj.withTiming(num, obj);
  };
  const tmp2Result17 = option(4493);
  fn2.__closure = { withTiming: option(4758).withTiming, isNew: isUnseen, SELECTION_TIMING: sharedValue };
  fn2.__workletHash = 9359578148244;
  fn2.__initData = token2;
  derivedValue1 = tmp2Result17.useDerivedValue(fn2);
  const obj8 = { withTiming: option(4758).withTiming, isNew: isUnseen, SELECTION_TIMING: sharedValue };
  class W {
    constructor() {
      obj = closure_0(closure_2[7]);
      items = [, ];
      items[0] = closure_14;
      items[1] = closure_15;
      obj1 = { borderColor: null, backgroundColor: null };
      interpolateColorResult = obj.interpolateColor(closure_19.get(), [0, 1], items);
      obj3 = closure_0(closure_2[7]);
      items1 = [, ];
      items1[0] = interpolateColorResult;
      items1[1] = closure_16;
      obj1.borderColor = obj3.interpolateColor(closure_18.get(), [0, 1], items1);
      obj4 = closure_0(closure_2[7]);
      items2 = ["transparent"];
      items2[1] = closure_17;
      obj1.backgroundColor = obj4.interpolateColor(closure_18.get(), [0, 1], items2);
      return obj1;
    }
  }
  const tmp2Result18 = option(4493);
  W.__closure = { interpolateColor: option(4493).interpolateColor, newProgress: derivedValue1, unselectedBorderColor: token, newBorderColor: token1, selectedProgress: derivedValue, selectedBorderColor: token2, selectedBackgroundColor: token3 };
  W.__workletHash = 1340353593596;
  W.__initData = token3;
  const animatedStyle2 = tmp2Result18.useAnimatedStyle(W);
  const obj9 = { interpolateColor: option(4493).interpolateColor, newProgress: derivedValue1, unselectedBorderColor: token, newBorderColor: token1, selectedProgress: derivedValue, selectedBorderColor: token2, selectedBackgroundColor: token3 };
  class K {
    constructor() {
      if (closure_4) {
        obj = {};
      } else {
        obj = { transform: null };
        obj1 = { scale: null };
        tmp = closure_11;
        obj1.scale = closure_11.get();
        items = [];
        items[0] = obj1;
        obj.transform = items;
      }
      return obj;
    }
  }
  K.__closure = { useReducedMotion: stateFromStores1, scale: sharedValue };
  K.__workletHash = 11083046243451;
  K.__initData = derivedValue;
  const animatedStyle3 = option(4493).useAnimatedStyle(K);
  const tmp2Result19 = option(4493);
  const checkboxA11yNative = option(4475).useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj10 = { style: null, children: null };
  const items6 = [tmp.container, animatedStyle3, animatedStyle2];
  obj10.style = items6;
  const obj11 = {
    activeOpacity: 0.6,
    style: null,
    onPress() {
      dependencyMap(!selected);
      if (!_slicedToArray) {
        closure_8(!selected);
      }
    },
    onPressIn() {
      obj = ReanimatedRexport;
      const withTimingResult = timing.withTiming(1, { duration: 0 });
      const obj4 = { duration: 200, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj4.easing = Easing.out(ReanimatedRexport.Easing.ease);
      const result = sharedValue.set(obj.withSequence(withTimingResult, timing.withTiming(1.02, obj4)));
    },
    onPressOut() {
      const obj2 = { duration: 100, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj2.easing = Easing.out(ReanimatedRexport.Easing.ease);
      const result = sharedValue.set(timing.withTiming(1, obj2));
    },
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: memo,
    children: null
  };
  const items7 = [tmp.optionButton];
  obj11.style = items7;
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
    const obj12 = { style: { display: "flex", alignItems: "center" }, children: null };
    const obj13 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ optionTextEmoji: obj24.textEmojiStyle, optionImageEmoji: obj24.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      const obj14 = { id: null, animated: null, size: null };
      ({ id: obj26.id, animated: obj26.animated } = stateFromStores);
      obj14.size = size;
      emojiURL = tmp7(1397).getEmojiURL(obj14);
      const tmp7Result2 = tmp7(1397);
    }
    obj13.src = emojiURL;
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
    obj13.name = str;
    obj12.children = closure_9(tmp7(7377), obj13);
    tmp38Result = tmp38(closure_5, obj12);
    const tmp7Result = tmp7(7377);
  }
  const items8 = [tmp38Result, ];
  const obj15 = { style: tmp.optionText, children: null };
  const items9 = [closure_9(option(4753).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: option.title }), ];
  let tmp44Result = null != option.description && option.description.length > 0;
  if (tmp44Result) {
    const obj17 = { variant: "text-xs/medium", color: "text-default", children: option.description };
    tmp44Result = tmp44(tmp2(4753).Text, obj17);
  }
  items9[1] = tmp44Result;
  obj15.children = items9;
  items8[1] = ref(closure_5, obj15);
  obj11.children = items8;
  const items10 = [ref(option(5341).PressableOpacity, obj11), , , ];
  let tmp44Result2 = null;
  if (num > 0) {
    const obj18 = { accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: null, children: null };
    const items11 = [tmp.roleCount, animatedStyle1];
    obj18.style = items11;
    const obj19 = { variant: "text-xs/semibold", color: "text-overlay-light", children: null };
    let intl = tmp2(1115).intl;
    const obj20 = { memberCount: num };
    obj19.children = intl.format(tmp2(1115).t.EgKsZA, obj20);
    obj18.children = tmp44(tmp2(4753).Text, obj19);
    tmp44Result2 = tmp44(tmp7(4493).View, obj18);
  }
  items10[1] = tmp44Result2;
  const obj21 = { style: null, children: null };
  const items12 = [tmp.checkIcon, animatedStyle];
  obj21.style = items12;
  const obj16 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: option.title };
  const tmp2Result20 = option(4475);
  obj21.children = closure_9(option(7380).CheckmarkSmallIcon, { size: "xs", color: selected(576).colors.WHITE });
  items10[2] = closure_9(selected(4493).View, obj21);
  if (canBeNew) {
    canBeNew = !selected;
  }
  if (canBeNew) {
    canBeNew = option.isUnseen;
  }
  if (canBeNew) {
    const obj23 = { color: tmp2(1177).BadgeColors.BRAND, text: null, style: null, textStyle: null };
    let intl2 = tmp2(1115).intl;
    obj23.text = intl2.string(tmp2(1115).t.y2b7CA);
    ({ newBadgeWrapper: obj35.style, newBadge: obj35.textStyle } = tmp);
    canBeNew = tmp44(tmp2(1177).TextBadge, obj23);
  }
  items10[3] = canBeNew;
  obj10.children = items10;
  return ref(selected(4493).View, obj10);
};