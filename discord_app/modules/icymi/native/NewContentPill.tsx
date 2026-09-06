// === Module 16521: NewContentPill ===

// Module 16521 (NewContentPill)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 4974 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import ClipView from "ClipView" /* 8813 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import ICYMIStore from "ICYMIStore" /* 8335 */;

const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;

require = fn;
function CutoutGuildIcon(guild) {
  let obj = { style: { width: 24, height: 24 }, children: null };
  obj = { cutouts: null, children: null };
  const size = { shape: null, x: 18, y: -4, width: 32, height: 32, cornerRadius: null };
  const tmp = closure_11();
  size.shape = ClipView.CutoutShape.RoundedRect;
  size.cornerRadius = nativeDefault.radii.md;
  const items = [size];
  obj.cutouts = items;
  obj = { guild: guild.guild, size: null, style: null };
  const tmp2 = ClipViewDefault;
  obj.size = GuildIcon.GuildIconSizes.XSMALL;
  obj.style = tmp.guildIconBG;
  obj.children = React7(GuildIconDefault, obj);
  obj.children = React7(tmp2, obj);
  return React7(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, guildIconBG: null, refreshMorePillContainer: null };
createStyles = { alignSelf: "center", alignItems: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.container = createStyles;
createStyles.guildIconBG = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.refreshMorePillContainer = { position: "absolute", top: 0, left: 0, height: 32, width: "100%", zIndex: 100 };
let closure_11 = createStyles.createStyles(createStyles);
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
  let obj = onPress(stateFromStoresArray[10]);
  let items = [first1];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => first1.getNewUnreadDehydratedItems());
  let obj1 = onPress(stateFromStoresArray[10]);
  const items1 = [first1];
  const stateFromStores = obj1.useStateFromStores(items1, () => first1.hasNewContent(), []);
  let obj2 = first;
  const tmp7 = stateFromStores(first.useState(stateFromStoresArray), 2);
  first = tmp7[0];
  closure_5 = tmp7[1];
  const items2 = [first];
  closure_6 = first.useMemo(() => {
    const items = [];
    const item = first.forEach((data) => {
      let arr = items;
      if (items.length < onPress(stateFromStoresArray[12]).MIN_ITEMS_FOR_NEW_PILL) {
        const tmpResult = onPress(stateFromStoresArray[13]);
        if (tmp4) {
          arr = arr.push(data.data.guild_id);
        }
        tmp4 = onPress(stateFromStoresArray[13]).isGuildItem(data) && !arr.includes(data.data.guild_id);
      }
    });
    return items;
  }, items2);
  let obj3 = onPress(stateFromStoresArray[10]);
  const items3 = [closure_7];
  const stateFromStoresArray1 = obj3.useStateFromStoresArray(items3, () => {
    const mapped = closure_6.map((item) => guild.getGuild(item));
    return mapped.filter(Boolean);
  });
  const tmp11 = stateFromStores(first.useState(false), 2);
  closure_7 = tmp11[1];
  first1 = stateFromStores;
  if (stateFromStores) {
    first1 = tmp11[0];
  }
  let tmp2Result = tmp2(tmp3[14]);
  const fn = function y() {
    let obj = spring;
    let num = 0;
    if (first1) {
      num = 12;
    }
    obj = { transform: null, opacity: null };
    obj = { translateY: obj.withSpring(num, closure_12) };
    const items = [obj];
    obj.transform = items;
    let num2 = 0;
    if (first1) {
      num2 = 1;
    }
    obj.opacity = spring.withSpring(num2, closure_12, "respect-motion-settings");
    return obj;
  };
  obj = { withSpring: tmp2(tmp3[15]).withSpring, showingPill: first1, springConfig };
  fn.__closure = obj;
  fn.__workletHash = 13655660855782;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  tmp2Result = tmp2(tmp3[14]);
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
  const animatedProps = tmp2Result.useAnimatedProps(C);
  const tmp10 = isRefreshing(stateFromStoresArray[11])();
  const tmp6 = stateFromStores;
  isFocused = onPress(stateFromStoresArray[16]).useIsFocused();
  const tmp6Result = tmp6(obj2.useState(false), 2);
  first2 = tmp6Result[0];
  closure_11 = tmp6Result[1];
  const items4 = [stateFromStores, isFocused, first2];
  const layoutEffect = obj2.useLayoutEffect(() => {
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
  const effect = obj2.useEffect(() => {
    if (!isRefreshing) {
      closure_5(stateFromStoresArray);
    }
  }, items5);
  const items6 = [onPress];
  const callback = obj2.useCallback(() => {
    onPress();
  }, items6);
  if (0 === stateFromStoresArray1.length) {
    obj = { style: null, animatedProps: null, children: null };
    const items7 = [tmp.refreshMorePillContainer, animatedStyle];
    obj.style = items7;
    obj.animatedProps = animatedProps;
    obj1 = { onPress: callback, style: tmp.container, children: null };
    const items8 = [isFocused(tmp2(tmp3[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), ];
    obj2 = { style: { marginLeft: 4 }, variant: "heading-md/bold", color: "interactive-text-active", children: null };
    const intl = tmp2(tmp3[20]).intl;
    obj2.children = intl.string(tmp2(tmp3[20]).t["4Nl0Rl"]);
    items8[1] = isFocused(tmp2(tmp3[19]).Text, obj2);
    obj1.children = items8;
    obj.children = first2(tmp2(tmp3[17]).PressableOpacity, obj1);
    let tmp30Result = isFocused(tmp9(tmp3[14]).View, obj);
  } else {
    obj3 = { style: null, animatedProps: null, children: null };
    const items9 = [tmp.refreshMorePillContainer, animatedStyle];
    obj3.style = items9;
    obj3.animatedProps = animatedProps;
    const obj4 = { onPress: callback, style: tmp.container, children: null };
    if (isRefreshing) {
      const tmp21 = closure_5;
      const tmp2Result2 = tmp2(tmp3[21]);
      tmp9(tmp3[7]).unsafe_rawColors;
      const isThemeDarkResult = tmp2(tmp3[21]).isThemeDark(tmp10);
      const unsafe_rawColors = { color: null };
      unsafe_rawColors.color = tmp2(tmp3[21]).isThemeDark(tmp10) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
      tmp30Result = tmp30(tmp21, unsafe_rawColors);
      const tmp23 = tmp2(tmp3[21]).isThemeDark(tmp10) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
    } else {
      const items10 = [tmp30(tmp2(tmp3[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), , ];
      const substr = stateFromStoresArray1.slice(0, stateFromStoresArray1.length - 1);
      items10[1] = substr.map((guild, index) => {
        let num = 4;
        if (index > 0) {
          num = -2;
        }
        let obj = { style: { marginLeft: num }, children: null };
        obj = { guild };
        obj.children = isFocused(CutoutGuildIcon, obj);
        return isFocused(closure_6, obj, guild.id);
      });
      let num2 = 4;
      if (stateFromStoresArray1.length > 1) {
        num2 = -2;
      }
      const obj5 = { style: null, children: null };
      const obj6 = { marginLeft: num2 };
      obj5.style = obj6;
      const obj7 = { guild: stateFromStoresArray1[stateFromStoresArray1.length - 1], size: tmp2(tmp3[9]).GuildIconSizes.XSMALL, style: tmp.guildIconBG };
      obj5.children = tmp30(tmp9(tmp3[9]), obj7);
      items10[2] = tmp30(closure_6, obj5);
      obj4.children = items10;
      obj3.children = tmp31(tmp32, obj4);
      tmp30Result = tmp30(tmp9(tmp3[14]).View, obj3);
      const tmp9Result = tmp9(tmp3[9]);
    }
    tmp31 = first2;
  }
  return tmp30Result;
};