// === Module 16136: NewContentPill ===

// Module 16136 (NewContentPill)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5273 */;
import GuildIcon from "GuildIcon" /* 5891 */;
import ClipView from "ClipView" /* 8268 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;
import ICYMIStore from "ICYMIStore" /* 7775 */;

const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;

require = fn;
function CutoutGuildIcon(guild) {
  const obj = { style: { width: 24, height: 24 }, children: null };
  const obj2 = { cutouts: null, children: null };
  const size = { shape: null, x: 18, y: -4, width: 32, height: 32, cornerRadius: null };
  const tmp = closure_11();
  size.shape = ClipView.CutoutShape.RoundedRect;
  size.cornerRadius = nativeDefault.radii.md;
  const items = [size];
  obj2.cutouts = items;
  const obj3 = { guild: guild.guild, size: null, style: null };
  const tmp2 = ClipViewDefault;
  obj3.size = GuildIcon.GuildIconSizes.XSMALL;
  obj3.style = tmp.guildIconBG;
  obj2.children = React7(GuildIconDefault, obj3);
  obj.children = React7(tmp2, obj2);
  return React7(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { alignSelf: "center", alignItems: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, guildIconBG: null, refreshMorePillContainer: null };
let obj3 = { alignSelf: "center", alignItems: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.guildIconBG = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.refreshMorePillContainer = { position: "absolute", top: 0, left: 0, height: 32, width: "100%", zIndex: 100 };
let closure_11 = createStyles.createStyles(obj2);
const springConfig = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
const __initData = { code: "function NewContentPillTsx1(){const{withSpring,showingPill,springConfig}=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,'respect-motion-settings')};}" };
const __initData2 = { code: "function NewContentPillTsx2(){const{showingPill}=this.__closure;return{pointerEvents:showingPill?'box-none':'none'};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/NewContentPill.tsx");

export default function NewContentPill(onPress) {
  onPress = onPress.onPress;
  const isRefreshing = onPress.isRefreshing;
  let stateFromStoresArray;
  let first;
  closure_7 = undefined;
  let first1;
  let isFocused;
  let first2;
  closure_11 = undefined;
  let tmp = closure_11();
  let items = [first1];
  stateFromStoresArray = onPress(stateFromStoresArray[10]).useStateFromStoresArray(items, () => first1.getNewUnreadDehydratedItems());
  let obj = onPress(stateFromStoresArray[10]);
  const items1 = [first1];
  const stateFromStores = onPress(stateFromStoresArray[10]).useStateFromStores(items1, () => first1.hasNewContent(), []);
  const tmp7 = stateFromStores(first.useState(stateFromStoresArray), 2);
  first = tmp7[0];
  closure_5 = tmp7[1];
  const items2 = [first];
  let obj2 = onPress(stateFromStoresArray[10]);
  const tmp6 = stateFromStores;
  closure_6 = first.useMemo(() => {
    const items = [];
    const item = first.forEach((data) => {
      if (items.length < onPress(stateFromStoresArray[12]).MIN_ITEMS_FOR_NEW_PILL) {
        const tmpResult = onPress(stateFromStoresArray[13]);
        if (tmp4) {
          items.push(data.data.guild_id);
        }
        tmp4 = onPress(stateFromStoresArray[13]).isGuildItem(data) && !items.includes(data.data.guild_id);
      }
    });
    return items;
  }, items2);
  const tmp10 = isRefreshing(stateFromStoresArray[11])();
  const items3 = [closure_7];
  const stateFromStoresArray1 = onPress(stateFromStoresArray[10]).useStateFromStoresArray(items3, () => {
    const mapped = closure_6.map((item) => guild.getGuild(item));
    return mapped.filter(Boolean);
  });
  const tmp11 = stateFromStores(first.useState(false), 2);
  closure_7 = tmp11[1];
  first1 = stateFromStores;
  if (stateFromStores) {
    first1 = tmp11[0];
  }
  const obj4 = onPress(stateFromStoresArray[10]);
  const fn = function y() {
    let num = 0;
    if (first1) {
      num = 12;
    }
    const obj2 = { transform: null, opacity: null };
    const items = [{ translateY: spring.withSpring(num, closure_12) }];
    obj2.transform = items;
    const obj3 = { translateY: spring.withSpring(num, closure_12) };
    let num2 = 0;
    if (first1) {
      num2 = 1;
    }
    obj2.opacity = spring.withSpring(num2, closure_12, "respect-motion-settings");
    return obj2;
  };
  const tmp2Result = onPress(stateFromStoresArray[14]);
  fn.__closure = { withSpring: onPress(stateFromStoresArray[15]).withSpring, showingPill: first1, springConfig };
  fn.__workletHash = 13655660855782;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const obj5 = { withSpring: onPress(stateFromStoresArray[15]).withSpring, showingPill: first1, springConfig };
  class C {
    constructor() {
      pointerEvents = "none";
      if (closure_8) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  C.__closure = { showingPill: first1 };
  C.__workletHash = 876312391659;
  C.__initData = __initData2;
  const animatedProps = onPress(stateFromStoresArray[14]).useAnimatedProps(C);
  const tmp2Result4 = onPress(stateFromStoresArray[14]);
  isFocused = onPress(stateFromStoresArray[16]).useIsFocused();
  const tmp6Result = tmp6(first.useState(false), 2);
  first2 = tmp6Result[0];
  closure_11 = tmp6Result[1];
  const items4 = [stateFromStores, isFocused, first2];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let tmp = first2;
    if (!first2) {
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
    const obj6 = { style: null, animatedProps: null, children: null };
    const items7 = [tmp.refreshMorePillContainer, animatedStyle];
    obj6.style = items7;
    obj6.animatedProps = animatedProps;
    const obj7 = { onPress: callback, style: tmp.container, children: null };
    const items8 = [isFocused(tmp2(tmp3[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), ];
    const obj8 = { style: { marginLeft: 4 }, variant: "heading-md/bold", color: "interactive-text-active", children: null };
    const intl = tmp2(tmp3[20]).intl;
    obj8.children = intl.string(tmp2(tmp3[20]).t["4Nl0Rl"]);
    items8[1] = isFocused(tmp2(tmp3[19]).Text, obj8);
    obj7.children = items8;
    obj6.children = first2(tmp2(tmp3[17]).PressableOpacity, obj7);
    let tmp30Result2 = isFocused(tmp9(tmp3[14]).View, obj6);
  } else {
    const obj9 = { style: null, animatedProps: null, children: null };
    const items9 = [tmp.refreshMorePillContainer, animatedStyle];
    obj9.style = items9;
    obj9.animatedProps = animatedProps;
    const obj10 = { onPress: callback, style: tmp.container, children: null };
    if (isRefreshing) {
      const tmp21 = closure_5;
      const tmp2Result6 = tmp2(tmp3[21]);
      tmp9(tmp3[7]).unsafe_rawColors;
      const isThemeDarkResult = tmp2(tmp3[21]).isThemeDark(tmp10);
      const unsafe_rawColors = { color: null };
      unsafe_rawColors.color = tmp2(tmp3[21]).isThemeDark(tmp10) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
      tmp30(tmp21, unsafe_rawColors);
      const tmp23 = tmp2(tmp3[21]).isThemeDark(tmp10) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
    } else {
      const items10 = [tmp30(tmp2(tmp3[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), , ];
      const substr = stateFromStoresArray1.slice(0, stateFromStoresArray1.length - 1);
      items10[1] = substr.map((guild, index) => {
        let num = 4;
        if (index > 0) {
          num = -2;
        }
        const obj = { style: { marginLeft: num }, children: isFocused(CutoutGuildIcon, { guild }) };
        return isFocused(closure_6, obj, guild.id);
      });
      let num2 = 4;
      if (stateFromStoresArray1.length > 1) {
        num2 = -2;
      }
      const obj11 = { style: null, children: null };
      const obj12 = { marginLeft: num2 };
      obj11.style = obj12;
      const obj13 = { guild: stateFromStoresArray1[stateFromStoresArray1.length - 1], size: tmp2(tmp3[9]).GuildIconSizes.XSMALL, style: tmp.guildIconBG };
      obj11.children = tmp30(tmp9(tmp3[9]), obj13);
      items10[2] = tmp30(closure_6, obj11);
      obj10.children = items10;
      obj9.children = tmp31(tmp32, obj10);
      tmp30Result2 = tmp30(tmp9(tmp3[14]).View, obj9);
      const tmp9Result = tmp9(tmp3[9]);
    }
    tmp31 = first2;
  }
  return tmp30Result2;
};