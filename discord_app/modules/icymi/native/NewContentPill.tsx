// === Module 19165: NewContentPill ===

// Module 19165 (NewContentPill)
import nativeDefault from "native" /* 575 */;
import useThemeDefault from "useTheme" /* 5484 */;
import GuildIcon from "GuildIcon" /* 7654 */;
import ClipView from "ClipView" /* 9437 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5114 */;
import ICYMIStore from "ICYMIStore" /* 10137 */;

const require = globalThis.__r;
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
  items = [size];
  obj2.cutouts = items;
  const obj3 = { guild: guild.guild, size: null, style: null };
  const tmp2 = ClipViewDefault;
  obj3.size = GuildIcon.GuildIconSizes.XSMALL;
  obj3.style = tmp.guildIconBG;
  obj2.children = React6(GuildIconDefault, obj3);
  obj.children = React6(tmp2, obj2);
  return React6(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { alignSelf: "center", alignItems: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, guildIconBG: null, refreshMorePillContainer: null };
let obj3 = { alignSelf: "center", alignItems: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.guildIconBG = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.refreshMorePillContainer = { position: "absolute", top: 0, left: 0, height: 32, width: "100%", zIndex: 100 };
let closure_11 = createStyles.createStyles(obj2);
let closure_12 = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
let closure_14 = { code: "(function NewContentPillTsx1(){let[withSpring,showingPill,springConfig]=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,'respect-motion-settings')};})" };
let closure_15 = { code: "(function NewContentPillTsx2(){let[showingPill]=this.__closure;return{pointerEvents:showingPill?'box-none':'none'};})" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/NewContentPill.tsx");

export default function NewContentPill(onPress) {
  onPress = onPress.onPress;
  _require = onPress;
  const isRefreshing = onPress.isRefreshing;
  importDefault = isRefreshing;
  let first;
  closure_7 = undefined;
  let isFocused;
  let first2;
  closure_10 = undefined;
  let tmp = closure_11();
  items = [isFocused];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => isFocused.getNewUnreadDehydratedItems());
  dependencyMap = stateFromStoresArray;
  let obj = require("initialize");
  const items1 = [isFocused];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => isFocused.hasNewContent(), []);
  const tmp7 = stateFromStores(first.useState(stateFromStoresArray), 2);
  first = tmp7[0];
  closure_5 = tmp7[1];
  const items2 = [first];
  const obj2 = require("initialize");
  const tmp6 = stateFromStores;
  closure_6 = first.useMemo(() => {
    items = [];
    const item = first.forEach((data) => {
      if (items.length < items(dependencyMap[12]).MIN_ITEMS_FOR_NEW_PILL) {
        const tmpResult = items(dependencyMap[13]);
        if (tmp4) {
          items.push(data.data.guild_id);
        }
        tmp4 = items(dependencyMap[13]).isGuildItem(data) && !items.includes(data.data.guild_id);
      }
    });
    return items;
  }, items2);
  const tmp10 = useThemeDefault();
  const items3 = [closure_7];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items3, () => {
    const mapped = closure_6.map((item) => guild.getGuild(item));
    return mapped.filter(Boolean);
  });
  const tmp11 = stateFromStores(first.useState(false), 2);
  closure_7 = tmp11[1];
  let first1 = stateFromStores;
  if (stateFromStores) {
    first1 = tmp11[0];
  }
  const obj4 = require("initialize");
  const items4 = [closure_14, require("spring/spring").withSpring, first1, closure_12];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items4;
  class NewContentPillTsx1 {
    constructor() {
      tmp = closure_0;
      num = 0;
      tmp2 = closure_1;
      if (closure_1) {
        num = 12;
      }
      obj = { transform: null, opacity: null };
      obj1 = { translateY: tmp(num, closure_2) };
      tmp3 = closure_2;
      items = [];
      items[0] = obj1;
      obj.transform = items;
      num2 = 0;
      if (tmp2) {
        num2 = 1;
      }
      obj.opacity = tmp(num2, tmp3, "respect-motion-settings");
      return obj;
    }
  }
  const items5 = [tmp14, tmp15, tmp16];
  NewContentPillTsx1.__closure = items5;
  NewContentPillTsx1.__workletHash = 15743373779199;
  NewContentPillTsx1.__initData = tmp13;
  const animatedStyle = require("module_1652").useAnimatedStyle(NewContentPillTsx1);
  const tmp2Result = require("module_1652");
  const items6 = [closure_15, first1];
  _require = undefined;
  [tmp18, tmp19] = items6;
  class NewContentPillTsx2 {
    constructor() {
      pointerEvents = "none";
      if (closure_0) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  const items7 = [tmp19];
  NewContentPillTsx2.__closure = items7;
  NewContentPillTsx2.__workletHash = 15727177943954;
  NewContentPillTsx2.__initData = tmp18;
  const animatedProps = require("module_1652").useAnimatedProps(NewContentPillTsx2);
  const tmp2Result4 = require("module_1652");
  isFocused = require("BaseNavigationContainer").useIsFocused();
  const tmp6Result = tmp6(first.useState(false), 2);
  first2 = tmp6Result[0];
  closure_10 = tmp6Result[1];
  const items8 = [stateFromStores, isFocused, first2];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let tmp = first2;
    if (!first2) {
      if (isFocused) {
        if (stateFromStores) {
          closure_7(false);
        }
        closure_10(isFocused);
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
  }, items8);
  const items9 = [isRefreshing, stateFromStoresArray, stateFromStores];
  const effect = obj3.useEffect(() => {
    if (!c1) {
      closure_5(c2);
    }
  }, items9);
  const items10 = [onPress];
  const callback = obj3.useCallback(() => {
    _undefined();
  }, items10);
  if (0 === stateFromStoresArray1.length) {
    const obj5 = { style: null, animatedProps: null, children: null };
    const items11 = [tmp.refreshMorePillContainer, animatedStyle];
    obj5.style = items11;
    obj5.animatedProps = animatedProps;
    const obj6 = { onPress: callback, style: tmp.container, children: null };
    const items12 = [first2(tmp2(13930).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), ];
    const obj7 = { style: { marginLeft: 4 }, variant: "heading-sm/semibold", color: "interactive-text-active", children: null };
    const intl = tmp2(1113).intl;
    obj7.children = intl.string(tmp2(1113).t["4Nl0Rl"]);
    items12[1] = first2(tmp2(5866).Text, obj7);
    obj6.children = items12;
    obj5.children = closure_10(tmp2(7364).PressableOpacity, obj6);
    let tmp36Result2 = first2(tmp9(1652).View, obj5);
  } else {
    const obj8 = { style: null, animatedProps: null, children: null };
    const items13 = [tmp.refreshMorePillContainer, animatedStyle];
    obj8.style = items13;
    obj8.animatedProps = animatedProps;
    const obj9 = { onPress: callback, style: tmp.container, children: null };
    if (isRefreshing) {
      const tmp27 = closure_5;
      const tmp2Result6 = tmp2(5250);
      tmp9(575).unsafe_rawColors;
      const isThemeDarkResult = tmp2(5250).isThemeDark(tmp10);
      const unsafe_rawColors = { color: null };
      unsafe_rawColors.color = tmp2(5250).isThemeDark(tmp10) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
      tmp36(tmp27, unsafe_rawColors);
      const tmp29 = tmp2(5250).isThemeDark(tmp10) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
    } else {
      const items14 = [tmp36(tmp2(13930).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), , ];
      const substr = stateFromStoresArray1.slice(0, stateFromStoresArray1.length - 1);
      items14[1] = substr.map((guild, index) => {
        let num = 4;
        if (index > 0) {
          num = -2;
        }
        const obj = { style: { marginLeft: num }, children: first2(CutoutGuildIcon, { guild }) };
        return first2(closure_6, obj, guild.id);
      });
      let num2 = 4;
      if (stateFromStoresArray1.length > 1) {
        num2 = -2;
      }
      const obj10 = { style: null, children: null };
      const obj11 = { marginLeft: num2 };
      obj10.style = obj11;
      const obj12 = { guild: stateFromStoresArray1[stateFromStoresArray1.length - 1], size: tmp2(7654).GuildIconSizes.XSMALL, style: tmp.guildIconBG };
      obj10.children = tmp36(tmp9(7654), obj12);
      items14[2] = tmp36(closure_6, obj10);
      obj9.children = items14;
      obj8.children = tmp37(tmp38, obj9);
      tmp36Result2 = tmp36(tmp9(1652).View, obj8);
      const tmp9Result = tmp9(7654);
    }
    tmp37 = closure_10;
  }
  return tmp36Result2;
};