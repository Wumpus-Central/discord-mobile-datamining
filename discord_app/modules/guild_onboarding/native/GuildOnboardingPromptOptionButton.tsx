// === Module 7362: GuildOnboardingPromptOptionButton ===

// Module 7362 (GuildOnboardingPromptOptionButton)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5151 */;
import timing_timing from "timing/timing" /* 5372 */;
import useGuildRoleMemberCountsDefault from "useGuildRoleMemberCounts" /* 7363 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import EmojiStore from "EmojiStore" /* 6854 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const EMOJI_URL_BASE_SIZE = fn(1388).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = { duration: 200, easing: null };
let Easing = fn(1652).Easing;
obj.easing = Easing.out(fn(1652).Easing.ease);
const createStyles = fn(5142);
let obj3 = { container: { borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 8 }, optionButton: { paddingVertical: 12, paddingHorizontal: 16, display: "flex", flexDirection: "row", alignItems: "center" }, optionTextEmoji: { fontSize: 24, lineHeight: 24, marginRight: 12, paddingTop: 5 }, optionImageEmoji: { height: 24, width: 24, marginRight: 12 }, optionText: { flexShrink: 1 }, checkIcon: null, newBadgeWrapper: null, newBadge: null, roleCount: null };
let size = { position: "absolute", top: -6, right: -6, width: 20, height: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
obj3.checkIcon = size;
obj3.newBadgeWrapper = { position: "absolute", top: -6, right: -6 };
obj3.newBadge = { fontWeight: "bold" };
const rect = { position: "absolute", top: -6, right: 24, paddingVertical: 2, paddingHorizontal: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" };
obj3.roleCount = rect;
let closure_12 = createStyles.createStyles(obj3);
let closure_13 = { code: "(function GuildOnboardingPromptOptionButtonTsx1(){let[selected,withTiming,Easing,useReducedMotion,withSequence,withSpring]=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};})" };
let closure_14 = { code: "(function GuildOnboardingPromptOptionButtonTsx2(){let[showMemberCount,withDelay,withTiming,Easing,useReducedMotion]=this.__closure;const rawOpacity=showMemberCount?1:0;const opacity=withDelay(showMemberCount?400:0,withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateX:translateX}]};})" };
let closure_15 = { code: "(function GuildOnboardingPromptOptionButtonTsx3(){let[withTiming,selected,SELECTION_TIMING]=this.__closure;return withTiming(selected?1:0,SELECTION_TIMING);})" };
let closure_16 = { code: "(function GuildOnboardingPromptOptionButtonTsx4(){let[withTiming,isNew,SELECTION_TIMING]=this.__closure;return withTiming(isNew?1:0,SELECTION_TIMING);})" };
let closure_17 = { code: "(function GuildOnboardingPromptOptionButtonTsx5(){let[interpolateColor,newProgress,unselectedBorderColor,newBorderColor,selectedProgress,selectedBorderColor,selectedBackgroundColor]=this.__closure;const currentUnselectedBorderColor=interpolateColor(newProgress.get(),[0,1],[unselectedBorderColor,newBorderColor]);return{borderColor:interpolateColor(selectedProgress.get(),[0,1],[currentUnselectedBorderColor,selectedBorderColor]),backgroundColor:interpolateColor(selectedProgress.get(),[0,1],['transparent',selectedBackgroundColor])};})" };
let closure_18 = { code: "(function GuildOnboardingPromptOptionButtonTsx6(){let[useReducedMotion,scale]=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale.get()}]};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx");

export default function PromptOptionButton(option) {
  option = option.option;
  _require = option;
  const selected = option.selected;
  ({ onSelect: c2, suppressMemberCount: c3, canBeNew } = option);
  c6 = undefined;
  closure_7 = undefined;
  size = undefined;
  let ref;
  let sharedValue;
  closure_11 = undefined;
  const tmp = closure_12();
  items = [closure_7];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let id;
    if (_undefined != null) {
      const emoji = _undefined.emoji;
      if (emoji != null) {
        id = emoji.id;
      }
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      let id1;
      if (_undefined != null) {
        const emoji2 = _undefined.emoji;
        if (emoji2 != null) {
          id1 = emoji2.id;
        }
      }
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  obj = require("initialize");
  let items1 = [c6];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => _undefined7.useReducedMotion);
  let obj2 = require("initialize");
  let items2 = [closure_13, selected, require("timing/timing").withTiming, require("module_1652").Easing, stateFromStores1, require("module_1652").withSequence, require("spring/spring").withSpring];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items2;
  class GuildOnboardingPromptOptionButtonTsx1 {
    constructor() {
      num = 0;
      tmp = closure_1;
      tmp2 = closure_0;
      if (closure_0) {
        num = 1;
      }
      obj = { duration: 150, easing: closure_2.out(closure_2.ease) };
      num2 = 0.7;
      tmpResult = tmp(num, obj);
      if (tmp2) {
        num2 = 1;
      }
      obj1 = { opacity: tmpResult, transform: null };
      tmp4 = num2;
      if (!closure_3) {
        tmp5 = closure_4;
        tmp6 = closure_5;
        num3 = 1.2;
        tmp7 = closure_5(1.2 * num2, { stiffness: 80, damping: 6, mass: 0.3 });
        tmp4 = closure_4(tmp7, closure_5(num2, { stiffness: 80, damping: 6, mass: 0.3 }));
      }
      items = [];
      items[0] = { scale: tmp4 };
      obj1.transform = items;
      return obj1;
    }
  }
  const items3 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  GuildOnboardingPromptOptionButtonTsx1.__closure = items3;
  GuildOnboardingPromptOptionButtonTsx1.__workletHash = 7034596428204;
  GuildOnboardingPromptOptionButtonTsx1.__initData = tmp6;
  const animatedStyle = require("module_1652").useAnimatedStyle(GuildOnboardingPromptOptionButtonTsx1);
  const tmp15 = useGuildRoleMemberCountsDefault(option.guildId);
  noop = tmp15;
  let num = 0;
  if (null != tmp15) {
    num = 0;
    if (null != option.roleIds) {
      const _Math = Math;
      const roleIds = option.roleIds;
      const items4 = [];
      HermesBuiltin.arraySpread(roleIds.map((item) => _undefined5[item]), 0);
      const _Math2 = Math;
      num = HermesBuiltin.apply(items4, Math);
    }
  }
  c5 = num;
  [first, closure_7] = noop.useState(false);
  c6 = first;
  size = noop.useRef(null);
  const items5 = [first];
  const effect = noop.useEffect(() => {
    if (c6) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_7(false);
        ref.current = null;
      }, 3000);
      return () => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.current);
        }
      };
    }
  }, items5);
  ref = noop.useRef(false);
  const items6 = [first, num];
  const effect1 = noop.useEffect(() => {
    if (c6) {
      if (!ref.current) {
        if (c5 > 0) {
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const intl = util.intl;
          obj = { memberCount: tmp3 };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.iyXfAn, obj), "polite");
          tmp2.current = true;
        }
      }
    }
    if (!c6) {
      ref.current = false;
    }
  }, items6);
  let obj3 = require("module_1652");
  let obj4 = noop;
  const items7 = [closure_14, first, require("module_1652").withDelay, require("timing/timing").withTiming, require("module_1652").Easing, stateFromStores1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items7;
  class GuildOnboardingPromptOptionButtonTsx2 {
    constructor() {
      tmp = closure_1;
      tmp2 = closure_0;
      num = 0;
      if (closure_0) {
        num = 400;
      }
      tmp3 = closure_2;
      num2 = 0;
      if (tmp2) {
        num2 = 1;
      }
      obj = { duration: 150, easing: closure_3.out(closure_3.ease) };
      obj2 = closure_3;
      num3 = 16;
      tmpResult = tmp(num, tmp3(num2, obj));
      if (tmp2) {
        num3 = 0;
      }
      obj1 = { opacity: tmpResult, transform: null };
      tmpResult1 = num3;
      if (!closure_4) {
        num4 = 0;
        if (tmp2) {
          num4 = 400;
        }
        obj5 = { duration: 200, easing: null };
        obj5.easing = obj2.out(obj2.ease);
        tmpResult1 = tmp(num4, tmp3(num3, obj5));
      }
      items = [];
      items[0] = { translateX: tmpResult1 };
      obj1.transform = items;
      return obj1;
    }
  }
  const items8 = [tmp26, tmp27, tmp28, tmp29, tmp30];
  GuildOnboardingPromptOptionButtonTsx2.__closure = items8;
  GuildOnboardingPromptOptionButtonTsx2.__workletHash = 13064995616524;
  GuildOnboardingPromptOptionButtonTsx2.__initData = tmp25;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(GuildOnboardingPromptOptionButtonTsx2);
  const tmp2Result = require("module_1652");
  sharedValue = require("module_1652").useSharedValue(1);
  let isUnseen = canBeNew;
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
  let tmp34 = null != id;
  if (!tmp34) {
    let name;
    if (option != null) {
      let emoji2 = option.emoji;
      if (emoji2 != null) {
        name = emoji2.name;
      }
    }
    tmp34 = null != name;
  }
  closure_11 = tmp34;
  const items9 = [tmp34, , , ];
  const emoji3 = option.emoji;
  let name1;
  if (emoji3 != null) {
    name1 = emoji3.name;
  }
  items9[1] = name1;
  ({ title: arr11[2], description: arr11[3] } = option);
  const memo = obj4.useMemo(() => {
    if (closure_11) {
      const emoji = _undefined.emoji;
      let str;
      if (emoji != null) {
        str = emoji.name;
      }
      if (str == null) {
        str = "";
      }
      const replaced = str.replace(/^:|:$/g, "");
      if (null != _undefined.description) {
        if (_undefined.description.length > 0) {
          const intl3 = util.intl;
          const obj2 = { emojiName: replaced, title: null, description: null };
          ({ title: obj3.title, description: obj3.description } = _undefined);
          let formatToPlainStringResult = intl3.formatToPlainString(util.t.nSzqkg, obj2);
        }
        return formatToPlainStringResult;
      }
      const intl2 = util.intl;
      const obj5 = { emojiName: replaced, title: _undefined.title };
      formatToPlainStringResult = intl2.formatToPlainString(util.t.rBPpAN, obj5);
    } else {
      if (null != _undefined.description) {
        if (_undefined.description.length > 0) {
          const intl = util.intl;
          obj = { title: null, description: null };
          ({ title: obj.title, description: obj.description } = _undefined);
          let title = intl.formatToPlainString(util.t.U4lDOC, obj);
        }
        return title;
      }
      title = _undefined.title;
    }
  }, items9);
  const tmp2Result11 = require("module_1652");
  const token = require("useToken").useToken(tmp14(575).colors.BORDER_SUBTLE);
  const tmp2Result12 = require("useToken");
  const token1 = require("useToken").useToken(tmp14(575).colors.BACKGROUND_BRAND);
  const tmp2Result13 = require("useToken");
  const token2 = require("useToken").useToken(tmp14(575).colors.BORDER_STRONG);
  const tmp2Result14 = require("useToken");
  const token3 = require("useToken").useToken(tmp14(575).colors.BACKGROUND_BASE_LOWEST);
  const tmp2Result15 = require("useToken");
  const items10 = [closure_15, require("timing/timing").withTiming, selected, closure_11];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp43, tmp44, tmp45, tmp46] = items10;
  class GuildOnboardingPromptOptionButtonTsx3 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      return tmp(num, closure_2);
    }
  }
  const items11 = [tmp44, tmp45, tmp46];
  GuildOnboardingPromptOptionButtonTsx3.__closure = items11;
  GuildOnboardingPromptOptionButtonTsx3.__workletHash = 16230189294602;
  GuildOnboardingPromptOptionButtonTsx3.__initData = tmp43;
  const derivedValue = require("module_1652").useDerivedValue(GuildOnboardingPromptOptionButtonTsx3);
  const tmp2Result16 = require("module_1652");
  const tmp42 = closure_11;
  const items12 = [closure_16, require("timing/timing").withTiming, isUnseen, tmp42];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp48, tmp49, tmp50, tmp51] = items12;
  class GuildOnboardingPromptOptionButtonTsx4 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      return tmp(num, closure_2);
    }
  }
  const items13 = [tmp49, tmp50, tmp51];
  GuildOnboardingPromptOptionButtonTsx4.__closure = items13;
  GuildOnboardingPromptOptionButtonTsx4.__workletHash = 4904550127725;
  GuildOnboardingPromptOptionButtonTsx4.__initData = tmp48;
  const derivedValue1 = require("module_1652").useDerivedValue(GuildOnboardingPromptOptionButtonTsx4);
  const tmp2Result17 = require("module_1652");
  const items14 = [closure_17, require("module_1652").interpolateColor, derivedValue1, token, token1, derivedValue, token2, token3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60] = items14;
  class GuildOnboardingPromptOptionButtonTsx5 {
    constructor() {
      items = [, ];
      items[0] = closure_2;
      items[1] = closure_3;
      obj = { borderColor: null, backgroundColor: null };
      tmp = closure_0(closure_1.get(), [0, 1], items);
      items1 = [, ];
      items1[0] = tmp;
      items1[1] = closure_5;
      obj.borderColor = closure_0(closure_4.get(), [0, 1], items1);
      items2 = ["transparent"];
      items2[1] = closure_6;
      obj.backgroundColor = closure_0(closure_4.get(), [0, 1], items2);
      return obj;
    }
  }
  const items15 = [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60];
  GuildOnboardingPromptOptionButtonTsx5.__closure = items15;
  GuildOnboardingPromptOptionButtonTsx5.__workletHash = 8397718874501;
  GuildOnboardingPromptOptionButtonTsx5.__initData = tmp53;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(GuildOnboardingPromptOptionButtonTsx5);
  const tmp2Result18 = require("module_1652");
  const items16 = [closure_18, stateFromStores1, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp62, tmp63, tmp64] = items16;
  class GuildOnboardingPromptOptionButtonTsx6 {
    constructor() {
      if (closure_0) {
        obj = {};
      } else {
        obj = { transform: null };
        obj1 = { scale: null };
        tmp = closure_1;
        obj1.scale = closure_1.get();
        items = [];
        items[0] = obj1;
        obj.transform = items;
      }
      return obj;
    }
  }
  const items17 = [tmp63, tmp64];
  GuildOnboardingPromptOptionButtonTsx6.__closure = items17;
  GuildOnboardingPromptOptionButtonTsx6.__workletHash = 14710088829666;
  GuildOnboardingPromptOptionButtonTsx6.__initData = tmp62;
  const animatedStyle3 = require("module_1652").useAnimatedStyle(GuildOnboardingPromptOptionButtonTsx6);
  const tmp2Result19 = require("module_1652");
  const checkboxA11yNative = require("useA11yRolesNative").useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  let obj5 = { style: null, children: null };
  const items18 = [tmp.container, animatedStyle3, animatedStyle2];
  obj5.style = items18;
  const obj6 = {
    activeOpacity: 0.6,
    style: tmp.optionButton,
    onPress: function handleOptionSelect() {
      _undefined3(!c1);
      if (!c3) {
        closure_7(!c1);
      }
    },
    onPressIn() {
      obj = _mod1652;
      const withTimingResult = timing_timing.withTiming(1, { duration: 0 });
      const obj4 = { duration: 200, easing: null };
      const Easing = _mod1652.Easing;
      obj4.easing = Easing.out(_mod1652.Easing.ease);
      const result = sharedValue.set(obj.withSequence(withTimingResult, timing_timing.withTiming(1.02, obj4)));
    },
    onPressOut() {
      const obj2 = { duration: 100, easing: null };
      const Easing = _mod1652.Easing;
      obj2.easing = Easing.out(_mod1652.Easing.ease);
      const result = sharedValue.set(timing_timing.withTiming(1, obj2));
    },
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: memo,
    children: null
  };
  let id1;
  if (option != null) {
    const emoji4 = option.emoji;
    if (emoji4 != null) {
      id1 = emoji4.id;
    }
  }
  let tmp71Result = null != id1;
  if (!tmp71Result) {
    let name2;
    if (option != null) {
      const emoji5 = option.emoji;
      if (emoji5 != null) {
        name2 = emoji5.name;
      }
    }
    tmp71Result = null != name2;
  }
  if (tmp71Result) {
    const obj7 = { style: { display: "flex", alignItems: "center" }, children: null };
    const obj8 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ optionTextEmoji: obj19.textEmojiStyle, optionImageEmoji: obj19.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      const obj9 = { id: null, animated: null, size: null };
      ({ id: obj21.id, animated: obj21.animated } = stateFromStores);
      obj9.size = size;
      emojiURL = tmp14(1411).getEmojiURL(obj9);
      const tmp14Result2 = tmp14(1411);
    }
    obj8.src = emojiURL;
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
    obj8.name = str;
    obj7.children = ref(tmp14(7366), obj8);
    tmp71Result = tmp71(c5, obj7);
    const tmp14Result = tmp14(7366);
  }
  const items19 = [tmp71Result, ];
  const obj10 = { style: tmp.optionText, children: null };
  const items20 = [ref(require("Text/Text").Text, { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: option.title }), ];
  let tmp77Result = null != option.description && option.description.length > 0;
  if (tmp77Result) {
    const obj12 = { variant: "body-xs/medium", color: "text-default", children: option.description };
    tmp77Result = tmp77(tmp2(5753).Text, obj12);
  }
  items20[1] = tmp77Result;
  obj10.children = items20;
  items19[1] = sharedValue(c5, obj10);
  obj6.children = items19;
  const items21 = [sharedValue(require("Pressables").PressableOpacity, obj6), , , ];
  let tmp77Result2 = null;
  if (num > 0) {
    const obj13 = { accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: null, children: null };
    const items22 = [tmp.roleCount, animatedStyle1];
    obj13.style = items22;
    const obj14 = { variant: "body-xs/semibold", color: "text-overlay-light", children: null };
    let intl = tmp2(1113).intl;
    const obj15 = { memberCount: num };
    obj14.children = intl.format(tmp2(1113).t.EgKsZA, obj15);
    obj13.children = tmp77(tmp2(5753).Text, obj14);
    tmp77Result2 = tmp77(tmp14(1652).View, obj13);
  }
  items21[1] = tmp77Result2;
  const obj16 = { style: null, children: null };
  const items23 = [tmp.checkIcon, animatedStyle];
  obj16.style = items23;
  const obj11 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: option.title };
  const tmp2Result20 = require("useA11yRolesNative");
  obj16.children = ref(require("CheckmarkSmallIcon").CheckmarkSmallIcon, { size: "xs", color: nativeDefault.colors.WHITE });
  items21[2] = ref(_modDef1652.View, obj16);
  if (canBeNew) {
    canBeNew = !selected;
  }
  if (canBeNew) {
    canBeNew = option.isUnseen;
  }
  if (canBeNew) {
    const obj18 = { color: tmp2(1187).BadgeColors.BRAND, text: null, style: null, textStyle: null };
    let intl2 = tmp2(1113).intl;
    obj18.text = intl2.string(tmp2(1113).t.y2b7CA);
    ({ newBadgeWrapper: obj30.style, newBadge: obj30.textStyle } = tmp);
    canBeNew = tmp77(tmp2(1187).TextBadge, obj18);
  }
  items21[3] = canBeNew;
  obj5.children = items21;
  return sharedValue(_modDef1652.View, obj5);
};