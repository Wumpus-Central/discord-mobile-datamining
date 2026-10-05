// === Module 16463: NewContentPill ===

// Module 16463 (NewContentPill)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5597 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import ICYMITypes from "ICYMITypes" /* 8024 */;
import ICYMIUtils from "ICYMIUtils" /* 8028 */;
import ClipView from "ClipView" /* 8469 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore_mod from "GuildStore" /* 2074 */;
import ICYMIStore_mod from "ICYMIStore" /* 8011 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;
let onPress;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
let GuildStore = GuildStore_mod;
let ICYMIStore = ICYMIStore_mod;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, guildIconBG: obj3, refreshMorePillContainer: { position: "absolute", top: 0, left: 0, height: 32, width: "100%", zIndex: 100 } };
obj2 = { alignSelf: "center", alignItems: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_11 = createStyles(obj);
const springConfig = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let first;
  let obj3;
  let obj4;
  let tmp10;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(5);
  guild = guild.guild;
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    size = { width: 24, height: 24 };
    cResult[0] = size;
    first = size;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const size1 = { shape: ClipView.CutoutShape.RoundedRect, x: 18, y: -4, width: 32, height: 32, cornerRadius: nativeDefault.radii.md };
    const items = [size1];
    cResult[1] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === guild) {
    let tmp8;
    if (cResult[3] === tmp4.guildIconBG) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj2 = { style: first, children: React4(tmp9, obj3) };
  obj3 = { cutouts: tmp6, children: React4(tmp10, obj4) };
  obj4 = { guild, size: GuildIcon.GuildIconSizes.XSMALL, style: tmp4.guildIconBG };
  tmp9 = ClipViewDefault;
  tmp10 = GuildIconDefault;
  const tmp11 = React4(metroRequire, obj2);
  cResult[2] = guild;
  cResult[3] = tmp4.guildIconBG;
  cResult[4] = tmp11;
  tmp8 = tmp11;
}) : ((guild) => {
  let items;
  let obj2;
  let obj3;
  let tmp2;
  let tmp3;
  guild = guild.guild;
  const obj = { style: { width: 24, height: 24 }, children: React4(tmp2, obj2) };
  obj2 = { cutouts: items, children: React4(tmp3, obj3) };
  size = { shape: ClipView.CutoutShape.RoundedRect, x: 18, y: -4, width: 32, height: 32, cornerRadius: nativeDefault.radii.md };
  const tmp = closure_11();
  items = [size];
  tmp2 = ClipViewDefault;
  obj3 = { guild, size: GuildIcon.GuildIconSizes.XSMALL, style: tmp.guildIconBG };
  tmp3 = GuildIconDefault;
  return React4(metroRequire, obj);
});
const __initData = { code: "function NewContentPillTsx1(){const{withSpring,showingPill,springConfig}=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,\"respect-motion-settings\")};}" };
const __initData2 = { code: "function NewContentPillTsx2(){const{showingPill}=this.__closure;return{pointerEvents:showingPill?\"box-none\":\"none\"};}" };
const __initData3 = { code: "function NewContentPillTsx3(){const{withSpring,showingPill,springConfig}=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,'respect-motion-settings')};}" };
const __initData4 = { code: "function NewContentPillTsx4(){const{showingPill}=this.__closure;return{pointerEvents:showingPill?'box-none':'none'};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let arr4;
  let closure_5;
  let closure_7;
  let closure_8;
  let first;
  let length;
  let stateFromStoresArray;
  let tmp10;
  let tmp11;
  let tmp19;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmp = onPress;
  let obj = onPress(stateFromStoresArray[9]);
  const cResult = obj.c(64);
  onPress = onPress.onPress;
  const isRefreshing = onPress.isRefreshing;
  let tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ICYMIStore];
    class C {
      constructor() {
        return closure_8.getNewUnreadDehydratedItems();
      }
    }
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = C;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let tmpResult = tmp(tmp2[12]);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp5, C);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ICYMIStore];
    class A {
      constructor() {
        return closure_8.hasNewContent();
      }
    }
    const items2 = [];
    cResult[2] = items1;
    cResult[3] = A;
    cResult[4] = items2;
    tmp11 = items2;
    tmp10 = A;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult6 = tmp(stateFromStoresArray[12]);
  const stateFromStores = tmpResult6.useStateFromStores(tmp9, tmp10, tmp11);
  [arr4, closure_5] = stateFromStores.useState(stateFromStoresArray);
  _slicedToArray(stateFromStores.useState(stateFromStoresArray), 2);
  isRefreshing(stateFromStoresArray[13])();
  if (cResult[5] !== arr4) {
    let items3 = [];
    _slicedToArray = items3;
    const item = arr4.forEach((data) => {
      if (length.length < ICYMITypes.MIN_ITEMS_FOR_NEW_PILL) {
        const tmpResult = ICYMIUtils;
        const tmp4 = tmpResult.isGuildItem(data) && !length.includes(data.data.guild_id);
        if (tmp4) {
          length.push(data.data.guild_id);
        }
      }
    });
    class A {
      constructor() {
        return closure_8.hasNewContent();
      }
    }
    cResult[5] = arr4;
    cResult[6] = items3;
  } else {
    _slicedToArray = cResult[6];
  }
  items3 = tmp17;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildStore];
    class A {
      constructor() {
        return closure_8.hasNewContent();
      }
    }
    cResult[7] = items4;
    tmp19 = items4;
  } else {
    tmp19 = cResult[7];
  }
  if (cResult[8] !== tmp17) {
    class O {
      constructor() {
        mapped = closure_6.map((item) => guild.getGuild(item));
        return mapped.filter(Boolean);
      }
    }
    cResult[8] = tmp17;
    class A {
      constructor() {
        return closure_8.hasNewContent();
      }
    }
    cResult[9] = O;
  } else {
    class O {
      constructor() {
        mapped = closure_6.map((item) => guild.getGuild(item));
        return mapped.filter(Boolean);
      }
    }
  }
  const tmpResult7 = tmp(stateFromStoresArray[12]);
  const stateFromStoresArray1 = tmpResult7.useStateFromStoresArray(tmp19, O);
  const tmp14Result = _slicedToArray(stateFromStores.useState(false), 2);
  GuildStore = tmp14Result[1];
  ICYMIStore = tmp24;
  const tmpResult8 = tmp(stateFromStoresArray[16]);
  class U {
    constructor() {
      let items;
      let num2;
      let withSpring2;
      let num = 0;
      const withSpring = spring.withSpring;
      spring;
      if (closure_8) {
        num = 12;
      }
      const obj = { transform: items, opacity: withSpring2(num2, springConfig, "respect-motion-settings") };
      items = [{ translateY: withSpring(num, springConfig) }];
      ({ translateY: withSpring(num, springConfig) });
      num2 = 0;
      withSpring2 = spring.withSpring;
      spring;
      if (closure_8) {
        num2 = 1;
      }
      return obj;
    }
  }
  let obj2 = { withSpring: tmp(tmp2[17]).withSpring, showingPill: tmp24, springConfig };
  U.__closure = obj2;
  U.__workletHash = 3500212966950;
  U.__initData = __initData;
  const animatedStyle = tmpResult8.useAnimatedStyle(U);
  const tmpResult9 = tmp(stateFromStoresArray[16]);
  class H {
    constructor() {
      let pointerEvents = "none";
      if (closure_8) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  H.__closure = { showingPill: stateFromStores && tmp14Result[0] };
  H.__workletHash = 16605960656235;
  H.__initData = __initData2;
  const animatedProps = tmpResult9.useAnimatedProps(H);
  const tmpResult10 = tmp(stateFromStoresArray[18]);
  const isFocused = tmpResult10.useIsFocused();
  [first, closure_11] = stateFromStores.useState(false);
  if (cResult[10] === stateFromStores) {
    class O {
      constructor() {
        mapped = closure_6.map((item) => guild.getGuild(item));
        return mapped.filter(Boolean);
      }
    }
  }
  class V {
    constructor() {
      let tmp = first;
      if (!tmp) {
        if (isFocused) {
          if (stateFromStores) {
            closure_7(false);
          }
          closure_11(isFocused);
        }
      }
      if (tmp) {
        tmp = isFocused;
      }
      if (tmp) {
        tmp = !stateFromStores;
      }
      if (tmp) {
        closure_7(true);
      }
    }
  }
  const items5 = [stateFromStores, isFocused, first];
  cResult[10] = stateFromStores;
  cResult[11] = isFocused;
  cResult[12] = first;
  cResult[13] = V;
  cResult[14] = items5;
}) : ((onPress) => {
  let PressableOpacity;
  let PressableOpacity2;
  let intl;
  let items10;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj13;
  let obj14;
  let obj7;
  let tmp29Result2;
  let tmp30;
  let tmp9Result;
  onPress = onPress.onPress;
  const isRefreshing = onPress.isRefreshing;
  let stateFromStoresArray;
  let first;
  let closure_7;
  let closure_8;
  let isFocused;
  let first1;
  closure_11 = undefined;
  let tmp = closure_11();
  const tmp3 = stateFromStoresArray;
  let obj = onPress(stateFromStoresArray[12]);
  let items = [closure_8];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => closure_8.getNewUnreadDehydratedItems());
  let obj2 = onPress(stateFromStoresArray[12]);
  const items1 = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items1, () => closure_8.hasNewContent(), []);
  const tmp7 = stateFromStores(first.useState(stateFromStoresArray), 2);
  first = tmp7[0];
  let closure_5 = tmp7[1];
  const items2 = [first];
  const tmp10 = isRefreshing(stateFromStoresArray[13])();
  let closure_6 = first.useMemo(() => {
    const items = [];
    const item = first.forEach((data) => {
      if (items.length < onPress(stateFromStoresArray[14]).MIN_ITEMS_FOR_NEW_PILL) {
        const tmpResult = onPress(stateFromStoresArray[15]);
        const tmp4 = tmpResult.isGuildItem(data) && !items.includes(data.data.guild_id);
        if (tmp4) {
          items.push(data.data.guild_id);
        }
      }
    });
    return items;
  }, items2);
  const items3 = [closure_7];
  const obj4 = onPress(stateFromStoresArray[12]);
  const stateFromStoresArray1 = obj4.useStateFromStoresArray(items3, () => {
    let guild;
    const mapped = closure_6.map((item) => guild.getGuild(item));
    return mapped.filter(Boolean);
  });
  const tmp11 = stateFromStores(first.useState(false), 2);
  closure_7 = tmp11[1];
  closure_8 = tmp12;
  const fn = function y() {
    let items;
    let num2;
    let withSpring2;
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (closure_8) {
      num = 12;
    }
    const obj = { transform: items, opacity: withSpring2(num2, springConfig, "respect-motion-settings") };
    items = [{ translateY: withSpring(num, springConfig) }];
    ({ translateY: withSpring(num, springConfig) });
    num2 = 0;
    withSpring2 = spring.withSpring;
    spring;
    if (closure_8) {
      num2 = 1;
    }
    return obj;
  };
  const tmp2Result = onPress(tmp3[16]);
  fn.__closure = { withSpring: onPress(tmp3[17]).withSpring, showingPill: stateFromStores && tmp11[0], springConfig };
  fn.__workletHash = 8489520556772;
  fn.__initData = __initData3;
  ({ withSpring: onPress(tmp3[17]).withSpring, showingPill: stateFromStores && tmp11[0], springConfig });
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const tmp2Result4 = onPress(tmp3[16]);
  const tmp6 = stateFromStores;
  class P {
    constructor() {
      let pointerEvents = "none";
      if (closure_8) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  P.__closure = { showingPill: stateFromStores && tmp11[0] };
  P.__workletHash = 16207982504173;
  P.__initData = __initData4;
  const animatedProps = tmp2Result4.useAnimatedProps(P);
  const tmp2Result5 = onPress(tmp3[18]);
  isFocused = tmp2Result5.useIsFocused();
  const tmp6Result = tmp6(first.useState(false), 2);
  first1 = tmp6Result[0];
  closure_11 = tmp6Result[1];
  const items4 = [stateFromStores, isFocused, first1];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let tmp = first1;
    if (!tmp) {
      if (isFocused) {
        if (stateFromStores) {
          closure_7(false);
        }
        closure_11(isFocused);
      }
    }
    if (tmp) {
      tmp = isFocused;
    }
    if (tmp) {
      tmp = !stateFromStores;
    }
    if (tmp) {
      closure_7(true);
    }
  }, items4);
  const items5 = [isRefreshing, stateFromStoresArray, stateFromStores];
  const effect = obj3.useEffect(() => {
    if (!isRefreshing) {
      closure_5(stateFromStoresArray);
    }
  }, items5);
  const items6 = [onPress];
  const callback = obj3.useCallback(() => {
    onPress();
  }, items6);
  if (0 === stateFromStoresArray1.length) {
    const obj6 = { style: items7, animatedProps, children: first1(PressableOpacity, obj7) };
    items7 = [tmp.refreshMorePillContainer, animatedStyle];
    const View = tmp9(tmp3[16]).View;
    obj7 = { onPress: callback, style: tmp.container, children: items8 };
    PressableOpacity = tmp2(tmp3[22]).PressableOpacity;
    items8 = [isFocused(onPress(tmp3[19]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), ];
    const obj8 = { style: { marginLeft: 4 }, variant: "heading-md/bold", color: "interactive-text-active", children: intl.string(onPress(tmp3[21]).t["4Nl0Rl"]) };
    const Text = tmp2(tmp3[20]).Text;
    intl = tmp2(tmp3[21]).intl;
    items8[1] = isFocused(Text, obj8);
    tmp29Result2 = isFocused(View, obj6);
  } else {
    let tmp29Result;
    const obj9 = { style: items9, animatedProps, children: tmp30(PressableOpacity2, obj10) };
    items9 = [tmp.refreshMorePillContainer, animatedStyle];
    const View2 = tmp9(tmp3[16]).View;
    obj10 = { onPress: callback, style: tmp.container, children: items10 };
    PressableOpacity2 = tmp2(tmp3[22]).PressableOpacity;
    tmp30 = first1;
    if (isRefreshing) {
      const tmp2Result6 = onPress(tmp3[23]);
      const isThemeDarkResult = tmp2Result6.isThemeDark(tmp10);
      const unsafe_rawColors = tmp9(tmp3[7]).unsafe_rawColors;
      const obj11 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500 };
      tmp29Result = tmp29(closure_5, obj11);
    } else {
      tmp29Result = tmp29(tmp2(tmp3[19]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" });
    }
    items10 = [tmp29Result, , ];
    let num = 1;
    const substr = stateFromStoresArray1.slice(0, stateFromStoresArray1.length - 1);
    items10[1] = substr.map((guild, index) => {
      let obj2;
      let num = 4;
      if (index > 0) {
        num = -2;
      }
      const obj = { style: { marginLeft: num }, children: isFocused(closure_1_13, obj2) };
      obj2 = { guild };
      return isFocused(closure_6, obj, guild.id);
    });
    let num2 = 4;
    const tmp24 = closure_6;
    if (stateFromStoresArray1.length > 1) {
      num2 = -2;
    }
    const obj12 = { style: obj13, children: isFocused(tmp9Result, obj14) };
    obj13 = { marginLeft: num2 };
    obj14 = { guild: stateFromStoresArray1[stateFromStoresArray1.length - 1], size: onPress(tmp3[11]).GuildIconSizes.XSMALL, style: tmp.guildIconBG };
    tmp9Result = isRefreshing(tmp3[11]);
    items10[2] = isFocused(tmp24, obj12);
    tmp29Result2 = tmp29(View2, obj9);
  }
  return tmp29Result2;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/NewContentPill.tsx");

export default tmp5;