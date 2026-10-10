// discord_app/modules/icymi/native/NewContentPill.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import ICYMITypes from "../ICYMITypes.tsx";
import ICYMIUtils from "../ICYMIUtils.tsx";
import ClipView from "../../../design/components/Icon/native/ClipView.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import ICYMIStore from "../ICYMIStore.tsx";

const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 12,
    paddingLeft: 8,
    paddingVertical: 6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  },
  guildIconBG: null,
  refreshMorePillContainer: null,
};
let obj3 = {
  alignSelf: "center",
  alignItems: "center",
  flexDirection: "row",
  paddingRight: 12,
  paddingLeft: 8,
  paddingVertical: 6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.guildIconBG = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.refreshMorePillContainer = { position: "absolute", top: 0, left: 0, height: 32, width: "100%", zIndex: 100 };
let closure_11 = createStyles.createStyles(obj2);
const springConfig = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CutoutGuildIcon(guild) {
      const cResult = c.c(5);
      guild = guild.guild;
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const size = { width: 24, height: 24 };
        cResult[0] = size;
        let first = size;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const size1 = {
          shape: ClipView.CutoutShape.RoundedRect,
          x: 18,
          y: -4,
          width: 32,
          height: 32,
          cornerRadius: nativeDefault.radii.md,
        };
        const items = [size1];
        cResult[1] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === guild) {
        if (cResult[3] === tmp4.guildIconBG) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const obj2 = { style: first, children: null };
      const obj3 = { cutouts: tmp6, children: null };
      const obj4 = { guild, size: null, style: null };
      const tmp9 = ClipViewDefault;
      obj4.size = GuildIcon.GuildIconSizes.XSMALL;
      obj4.style = tmp4.guildIconBG;
      obj3.children = options(GuildIconDefault, obj4);
      obj2.children = options(tmp9, obj3);
      const tmp11 = options(timestampProducer, obj2);
      cResult[2] = guild;
      cResult[3] = tmp4.guildIconBG;
      cResult[4] = tmp11;
      tmp8 = tmp11;
    }
  : function CutoutGuildIcon(guild) {
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
      obj2.children = options(GuildIconDefault, obj3);
      obj.children = options(tmp2, obj2);
      return options(timestampProducer, obj);
    };
const __initData = {
  code: 'function NewContentPillTsx1(){const{withSpring,showingPill,springConfig}=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,"respect-motion-settings")};}',
};
const __initData2 = {
  code: 'function NewContentPillTsx2(){const{showingPill}=this.__closure;return{pointerEvents:showingPill?"box-none":"none"};}',
};
const __initData3 = {
  code: "function NewContentPillTsx3(){const{withSpring,showingPill,springConfig}=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,'respect-motion-settings')};}",
};
const __initData4 = {
  code: "function NewContentPillTsx4(){const{showingPill}=this.__closure;return{pointerEvents:showingPill?'box-none':'none'};}",
};
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/NewContentPill.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NewContentPill(onPress) {
      const cResult = onPress(stateFromStoresArray[9]).c(64);
      onPress = onPress.onPress;
      const isRefreshing = onPress.isRefreshing;
      closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [stateFromStores];
        class C {
          constructor() {
            return closure_8.getNewUnreadDehydratedItems();
          }
        }
        cResult[0] = items;
        cResult[1] = C;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = onPress(stateFromStoresArray[9]);
      stateFromStoresArray = onPress(stateFromStoresArray[12]).useStateFromStoresArray(tmp5, C);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [stateFromStores];
        class A {
          constructor() {
            return closure_8.hasNewContent();
          }
        }
        const items2 = [];
        cResult[2] = items1;
        cResult[3] = A;
        cResult[4] = items2;
        let tmp11 = items2;
        let tmp10 = A;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
        tmp11 = cResult[4];
      }
      let tmpResult = onPress(stateFromStoresArray[12]);
      stateFromStores = onPress(stateFromStoresArray[12]).useStateFromStores(tmp9, tmp10, tmp11);
      const tmpResult6 = onPress(stateFromStoresArray[12]);
      [arr4, closure_5] = stateFromStores.useState(stateFromStoresArray);
      isRefreshing(stateFromStoresArray[13])();
      if (cResult[5] !== arr4) {
        let items3 = [];
        _slicedToArray = items3;
        const item = arr4.forEach((data) => {
          if (length.length < ICYMITypes.MIN_ITEMS_FOR_NEW_PILL) {
            const tmpResult = ICYMIUtils;
            if (tmp4) {
              length.push(data.data.guild_id);
            }
            tmp4 = ICYMIUtils.isGuildItem(data) && !length.includes(data.data.guild_id);
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
        let tmp19 = items4;
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
      const tmp15 = _slicedToArray(stateFromStores.useState(stateFromStoresArray), 2);
      const stateFromStoresArray1 = onPress(stateFromStoresArray[12]).useStateFromStoresArray(tmp19, O);
      const tmpResult7 = onPress(stateFromStoresArray[12]);
      GuildStore = _slicedToArray(stateFromStores.useState(false), 2)[1];
      if (stateFromStores) {
        class O {
          constructor() {
            mapped = closure_6.map((item) => guild.getGuild(item));
            return mapped.filter(Boolean);
          }
        }
      }
      stateFromStores = tmp24;
      const tmp14Result = _slicedToArray(stateFromStores.useState(false), 2);
      class U {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[17]);
          num = 0;
          tmp3 = closure_8;
          if (closure_8) {
            num = 12;
          }
          obj1 = { transform: null, opacity: null };
          obj5 = { translateY: obj.withSpring(num, closure_12) };
          tmp4 = closure_12;
          items = [];
          items[0] = obj5;
          obj1.transform = items;
          tmpResult = tmp(tmp2[17]);
          num2 = 0;
          if (tmp3) {
            num2 = 1;
          }
          obj1.opacity = tmpResult.withSpring(num2, tmp4, "respect-motion-settings");
          return obj1;
        }
      }
      const tmpResult8 = onPress(stateFromStoresArray[16]);
      U.__closure = {
        withSpring: onPress(stateFromStoresArray[17]).withSpring,
        showingPill: stateFromStores,
        springConfig,
      };
      U.__workletHash = 3500212966950;
      U.__initData = __initData;
      const animatedStyle = tmpResult8.useAnimatedStyle(U);
      let obj2 = {
        withSpring: onPress(stateFromStoresArray[17]).withSpring,
        showingPill: stateFromStores,
        springConfig,
      };
      class H {
        constructor() {
          pointerEvents = "none";
          if (closure_8) {
            pointerEvents = "box-none";
          }
          return { pointerEvents };
        }
      }
      H.__closure = { showingPill: stateFromStores };
      H.__workletHash = 16605960656235;
      H.__initData = __initData2;
      const animatedProps = onPress(stateFromStoresArray[16]).useAnimatedProps(H);
      const tmpResult9 = onPress(stateFromStoresArray[16]);
      const isFocused = onPress(stateFromStoresArray[18]).useIsFocused();
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
          tmp = closure_10;
          if (!closure_10) {
            tmp2 = closure_9;
            if (closure_9) {
              tmp3 = closure_4;
              if (closure_4) {
                tmp4 = closure_7;
                flag = false;
                tmp5 = closure_7(false);
              }
              tmp9 = closure_11;
              tmp10 = closure_9;
              tmp11 = closure_11(closure_9);
              return;
            }
          }
          if (tmp) {
            tmp = closure_9;
          }
          if (tmp) {
            tmp6 = closure_4;
            tmp = !closure_4;
          }
          if (tmp) {
            tmp7 = closure_7;
            flag2 = true;
            tmp8 = closure_7(true);
          }
          return;
        }
      }
      const items5 = [stateFromStores, isFocused, first];
      cResult[10] = stateFromStores;
      cResult[11] = isFocused;
      cResult[12] = first;
      cResult[13] = V;
      cResult[14] = items5;
      const tmpResult10 = onPress(stateFromStoresArray[18]);
    }
  : function NewContentPill(onPress) {
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
      stateFromStoresArray = onPress(stateFromStoresArray[12]).useStateFromStoresArray(items, () =>
        first1.getNewUnreadDehydratedItems(),
      );
      let obj = onPress(stateFromStoresArray[12]);
      const items1 = [first1];
      const stateFromStores = onPress(stateFromStoresArray[12]).useStateFromStores(
        items1,
        () => first1.hasNewContent(),
        [],
      );
      const tmp7 = stateFromStores(first.useState(stateFromStoresArray), 2);
      first = tmp7[0];
      closure_5 = tmp7[1];
      const items2 = [first];
      let obj2 = onPress(stateFromStoresArray[12]);
      const tmp6 = stateFromStores;
      closure_6 = first.useMemo(() => {
        const items = [];
        const item = first.forEach((data) => {
          if (items.length < onPress(stateFromStoresArray[14]).MIN_ITEMS_FOR_NEW_PILL) {
            const tmpResult = onPress(stateFromStoresArray[15]);
            if (tmp4) {
              items.push(data.data.guild_id);
            }
            tmp4 = onPress(stateFromStoresArray[15]).isGuildItem(data) && !items.includes(data.data.guild_id);
          }
        });
        return items;
      }, items2);
      const tmp10 = isRefreshing(stateFromStoresArray[13])();
      const items3 = [closure_7];
      const stateFromStoresArray1 = onPress(stateFromStoresArray[12]).useStateFromStoresArray(items3, () => {
        const mapped = closure_6.map((item) => guild.getGuild(item));
        return mapped.filter(Boolean);
      });
      const tmp11 = stateFromStores(first.useState(false), 2);
      closure_7 = tmp11[1];
      first1 = stateFromStores;
      if (stateFromStores) {
        first1 = tmp11[0];
      }
      const obj4 = onPress(stateFromStoresArray[12]);
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
      const tmp2Result = onPress(stateFromStoresArray[16]);
      fn.__closure = { withSpring: onPress(stateFromStoresArray[17]).withSpring, showingPill: first1, springConfig };
      fn.__workletHash = 8489520556772;
      fn.__initData = __initData3;
      const animatedStyle = tmp2Result.useAnimatedStyle(fn);
      const obj5 = { withSpring: onPress(stateFromStoresArray[17]).withSpring, showingPill: first1, springConfig };
      class P {
        constructor() {
          pointerEvents = "none";
          if (closure_8) {
            pointerEvents = "box-none";
          }
          return { pointerEvents };
        }
      }
      P.__closure = { showingPill: first1 };
      P.__workletHash = 16207982504173;
      P.__initData = __initData4;
      const animatedProps = onPress(stateFromStoresArray[16]).useAnimatedProps(P);
      const tmp2Result4 = onPress(stateFromStoresArray[16]);
      isFocused = onPress(stateFromStoresArray[18]).useIsFocused();
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
        const items8 = [isFocused(tmp2(tmp3[19]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" })];
        const obj8 = {
          style: { marginLeft: 4 },
          variant: "heading-md/bold",
          color: "interactive-text-active",
          children: null,
        };
        const intl = tmp2(tmp3[21]).intl;
        obj8.children = intl.string(tmp2(tmp3[21]).t["4Nl0Rl"]);
        items8[1] = isFocused(tmp2(tmp3[20]).Text, obj8);
        obj7.children = items8;
        obj6.children = first2(tmp2(tmp3[22]).PressableOpacity, obj7);
        let tmp30Result2 = isFocused(tmp9(tmp3[16]).View, obj6);
      } else {
        const obj9 = { style: null, animatedProps: null, children: null };
        const items9 = [tmp.refreshMorePillContainer, animatedStyle];
        obj9.style = items9;
        obj9.animatedProps = animatedProps;
        const obj10 = { onPress: callback, style: tmp.container, children: null };
        if (isRefreshing) {
          const tmp21 = closure_5;
          const tmp2Result6 = tmp2(tmp3[23]);
          tmp9(tmp3[7]).unsafe_rawColors;
          const isThemeDarkResult = tmp2(tmp3[23]).isThemeDark(tmp10);
          const unsafe_rawColors = { color: null };
          unsafe_rawColors.color = tmp2(tmp3[23]).isThemeDark(tmp10)
            ? unsafe_rawColors.WHITE
            : unsafe_rawColors.PRIMARY_500;
          tmp30(tmp21, unsafe_rawColors);
          const tmp23 = tmp2(tmp3[23]).isThemeDark(tmp10) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
        } else {
          const items10 = [tmp30(tmp2(tmp3[19]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), ,];
          const substr = stateFromStoresArray1.slice(0, stateFromStoresArray1.length - 1);
          items10[1] = substr.map((guild, index) => {
            let num = 4;
            if (index > 0) {
              num = -2;
            }
            const obj = { style: { marginLeft: num }, children: isFocused(closure_1_13, { guild }) };
            return isFocused(closure_6, obj, guild.id);
          });
          let num2 = 4;
          if (stateFromStoresArray1.length > 1) {
            num2 = -2;
          }
          const obj11 = { style: null, children: null };
          const obj12 = { marginLeft: num2 };
          obj11.style = obj12;
          const obj13 = {
            guild: stateFromStoresArray1[stateFromStoresArray1.length - 1],
            size: tmp2(tmp3[11]).GuildIconSizes.XSMALL,
            style: tmp.guildIconBG,
          };
          obj11.children = tmp30(tmp9(tmp3[11]), obj13);
          items10[2] = tmp30(closure_6, obj11);
          obj10.children = items10;
          obj9.children = tmp31(tmp32, obj10);
          tmp30Result2 = tmp30(tmp9(tmp3[16]).View, obj9);
          const tmp9Result = tmp9(tmp3[11]);
        }
        tmp31 = first2;
      }
      return tmp30Result2;
    };
