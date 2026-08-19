// discord_app/modules/icymi/native/NewContentPill.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildIconSizes from "../../guild/native/GuildIcon.tsx";
import GuildIconSizesDefault from "../../guild/native/GuildIcon.tsx";
import SolidCutout from "../../../design/components/Icon/native/ClipView.tsx";
import SolidCutoutDefault from "../../../design/components/Icon/native/ClipView.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import filterStaffGuild from "../ICYMIStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function CutoutGuildIcon(guild) {
  const obj = { shape: null, x: 18, y: -4, width: 32, height: 32, cornerRadius: null };
  const tmp = callback2();
  obj[0] = SolidCutout.CutoutShape.RoundedRect;
  obj[5] = ThemesDefault.radii.md;
  const items = [obj];
  obj[0] = items;
  obj1 = { guild: guild.guild, size: null, style: null };
  const tmp2 = SolidCutoutDefault;
  obj1[1] = GuildIconSizes.GuildIconSizes.XSMALL;
  obj1[2] = tmp.guildIconBG;
  obj[1] = callback(GuildIconSizesDefault, obj1);
  obj[1] = callback(tmp2, obj);
  return callback(closure_6, obj);
}
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { alignSelf: "center", alignItems: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 8, paddingVertical: 6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[2] = { position: "absolute", top: 0, left: 0, height: 32, width: "100%", zIndex: 100 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
let closure_14 = { code: "function NewContentPillTsx1(){const{withSpring,showingPill,springConfig}=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,'respect-motion-settings')};}" };
let closure_15 = { code: "function NewContentPillTsx2(){const{showingPill}=this.__closure;return{pointerEvents:showingPill?'box-none':'none'};}" };
const result = require("obj132").fileFinishedImporting("modules/icymi/native/NewContentPill.tsx");

export default function NewContentPill(onPress) {
  onPress = onPress.onPress;
  const isRefreshing = onPress.isRefreshing;
  let stateFromStoresArray;
  let first;
  closure_7 = undefined;
  let first1;
  let isFocused;
  let first2;
  let callback2;
  let tmp = callback2();
  let obj = onPress(stateFromStoresArray[10]);
  let items = [first1];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => first1.getNewUnreadDehydratedItems());
  obj1 = onPress(stateFromStoresArray[10]);
  const items1 = [first1];
  const stateFromStores = obj1.useStateFromStores(items1, () => first1.hasNewContent(), []);
  let obj2 = first;
  const tmp7 = stateFromStores(first.useState(stateFromStoresArray), 2);
  first = tmp7[0];
  closure_5 = tmp7[1];
  const items2 = [first];
  closure_6 = first.useMemo(() => {
    const items = [];
    const item = first.forEach((item, index) => {
      let arr = items;
      if (items.length < items(stateFromStoresArray[12]).MIN_ITEMS_FOR_NEW_PILL) {
        const tmpResult = items(stateFromStoresArray[13]);
        if (tmp4) {
          arr = arr.push(item.data.guild_id);
        }
        tmp4 = items(stateFromStoresArray[13]).isGuildItem(item) && !arr.includes(item.data.guild_id);
      }
    });
    return items;
  }, items2);
  let obj3 = onPress(stateFromStoresArray[10]);
  const items3 = [closure_7];
  const stateFromStoresArray1 = obj3.useStateFromStoresArray(items3, () => {
    const mapped = closure_6.map((item, index) => guild.getGuild(item));
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
    let obj = onPress(stateFromStoresArray[15]);
    let num = 0;
    if (first1) {
      num = 12;
    }
    obj = { transform: null, opacity: null };
    obj = { translateY: obj.withSpring(num, closure_1_12) };
    const items = [obj];
    obj[0] = items;
    let num2 = 0;
    if (first1) {
      num2 = 1;
    }
    obj[1] = onPress(stateFromStoresArray[15]).withSpring(num2, closure_1_12, "respect-motion-settings");
    return obj;
  };
  obj = { withSpring: tmp2(tmp3[15]).withSpring, showingPill: first1, springConfig: closure_12 };
  fn.__closure = obj;
  fn.__workletHash = 13655660855782;
  fn.__initData = closure_14;
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
  C.__initData = closure_15;
  const animatedProps = tmp2Result.useAnimatedProps(C);
  const tmp10 = isRefreshing(stateFromStoresArray[11])();
  const tmp6 = stateFromStores;
  isFocused = onPress(stateFromStoresArray[16]).useIsFocused();
  const tmp6Result = tmp6(obj2.useState(false), 2);
  first2 = tmp6Result[0];
  callback2 = tmp6Result[1];
  const items4 = [stateFromStores, isFocused, first2];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let tmp = first2;
    if (!first2) {
      if (isFocused) {
        if (stateFromStores) {
          callback2(false);
        }
        callback3(isFocused);
      }
    }
    if (tmp) {
      tmp = isFocused;
    }
    if (tmp) {
      tmp = !stateFromStores;
    }
    if (tmp) {
      callback2(true);
    }
  }, items4);
  const items5 = [isRefreshing, stateFromStoresArray, stateFromStores];
  const effect = obj2.useEffect(() => {
    if (!isRefreshing) {
      callback(stateFromStoresArray);
    }
  }, items5);
  const items6 = [onPress];
  const callback = obj2.useCallback(() => {
    onPress();
  }, items6);
  if (0 === stateFromStoresArray1.length) {
    obj = { style: null, animatedProps: null, children: null };
    const items7 = [tmp.refreshMorePillContainer, animatedStyle];
    obj[0] = items7;
    obj[1] = animatedProps;
    obj1 = { onPress: null, style: null, children: null };
    obj1[0] = callback;
    obj1[1] = tmp.container;
    const items8 = [isFocused(tmp2(tmp3[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), ];
    obj2 = { style: null, variant: "heading-md/bold", color: "interactive-text-active", children: null };
    obj2[0] = { marginLeft: 4 };
    const intl = tmp2(tmp3[20]).intl;
    obj2[3] = intl.string(tmp2(tmp3[20]).t["4Nl0Rl"]);
    items8[1] = isFocused(tmp2(tmp3[19]).Text, obj2);
    obj1[2] = items8;
    obj[2] = first2(tmp2(tmp3[17]).PressableOpacity, obj1);
    let tmp30Result = isFocused(tmp9(tmp3[14]).View, obj);
  } else {
    obj3 = { style: null, animatedProps: null, children: null };
    const items9 = [tmp.refreshMorePillContainer, animatedStyle];
    obj3[0] = items9;
    obj3[1] = animatedProps;
    const obj4 = { onPress: null, style: null, children: null };
    obj4[0] = callback;
    obj4[1] = tmp.container;
    if (isRefreshing) {
      const tmp21 = closure_5;
      const tmp2Result2 = tmp2(tmp3[21]);
      tmp9(tmp3[7]).unsafe_rawColors;
      const isThemeDarkResult = tmp2(tmp3[21]).isThemeDark(tmp10);
      const unsafe_rawColors = { color: null };
      unsafe_rawColors[0] = tmp2(tmp3[21]).isThemeDark(tmp10) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
      tmp30Result = tmp30(tmp21, unsafe_rawColors);
      const tmp23 = tmp2(tmp3[21]).isThemeDark(tmp10) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
    } else {
      const items10 = [tmp30(tmp2(tmp3[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), , ];
      const substr = stateFromStoresArray1.slice(0, stateFromStoresArray1.length - 1);
      items10[1] = substr.map((item, index) => {
        let num = 4;
        if (index > 0) {
          num = -2;
        }
        { style: { marginLeft: num }, children: isFocused(closure_13, obj) };
        obj = { guild: item };
        return isFocused(closure_6, obj, item.id);
      });
      let num2 = 4;
      if (stateFromStoresArray1.length > 1) {
        num2 = -2;
      }
      const obj5 = { style: null, children: null };
      const obj6 = { marginLeft: null };
      obj6[0] = num2;
      obj5[0] = obj6;
      const obj7 = { guild: null, size: null, style: null };
      obj7[0] = stateFromStoresArray1[stateFromStoresArray1.length - 1];
      obj7[1] = tmp2(tmp3[9]).GuildIconSizes.XSMALL;
      obj7[2] = tmp.guildIconBG;
      obj5[1] = tmp30(tmp9(tmp3[9]), obj7);
      items10[2] = tmp30(closure_6, obj5);
      obj4[2] = items10;
      obj3[2] = tmp31(tmp32, obj4);
      tmp30Result = tmp30(tmp9(tmp3[14]).View, obj3);
      const tmp9Result = tmp9(tmp3[9]);
    }
    tmp31 = first2;
  }
  return tmp30Result;
};