// discord_app/modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx
import c from "../../../../../../_runtime/00576_c.js";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import setAccessibilityFocus from "../../../../a11y/native/setAccessibilityFocus.android.tsx";
import roundToNearestPixelDefault from "../../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import useHomeDrawerGesture from "../../../../home_drawer/native/useHomeDrawerGesture.tsx";
import GuildsBarDefault from "../../../../guilds_bar/native/GuildsBar.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import HomeDrawerStore from "../../../../home_drawer/native/HomeDrawerStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const DM_WIDTH = fn(1085).DM_WIDTH;
const GUILD_LIST_WIDTH = fn(16715).GUILD_LIST_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let closure_11 = createStyles.createStyles((width) => {
  const obj = {
    container: { flex: 1 },
    guildsListContainerGestured: { flex: 1 },
    guildLisetContainerDefault: { flex: 1, width },
    contentMask: { position: "absolute", top: 0, bottom: 0, right: 0, overflow: "hidden" },
  };
  return obj;
});
fn(558);
const __initData = {
  code: "function HomePanelContentTsx1(){const{roundToNearestPixel,offsetX,guildsBarPullX}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-guildsBarPullX.get())}]};}",
};
const __initData2 = {
  code: "function HomePanelContentTsx2(){const{roundToNearestPixel,offsetX,guildsBarPullX}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-guildsBarPullX.get())}]};}",
};
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContentMaskGradient(offsetX) {
      const cResult = offsetX(576).c(5);
      offsetX = offsetX.offsetX;
      let obj = offsetX(576);
      const guildsBarPullX = offsetX(16434).useHomeDrawerState().guildsBarPullX;
      let obj2 = offsetX(16434);
      const fn = function n() {
        const obj = { transform: null };
        const obj2 = { translateX: roundToNearestPixelDefault(-offsetX - guildsBarPullX.get()) };
        const items = [obj2];
        obj.transform = items;
        return obj;
      };
      const obj3 = offsetX(4850);
      fn.__closure = { roundToNearestPixel: guildsBarPullX(11575), offsetX, guildsBarPullX };
      fn.__workletHash = 7539125302557;
      fn.__initData = __initData;
      const animatedStyle = obj3.useAnimatedStyle(fn);
      if (cResult[0] !== animatedStyle) {
        let items = [closure_4.absoluteFill, animatedStyle];
        cResult[0] = animatedStyle;
        cResult[1] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = closure_9(tmp3(10225), { absolute: true, tall: true, wide: true, mix: true });
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        const obj5 = { pointerEvents: "none", style: tmp5, children: tmp7 };
        const tmp12 = closure_9(tmp3(4850).View, obj5);
        cResult[3] = tmp5;
        cResult[4] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[4];
      }
      return tmp10;
    }
  : function ContentMaskGradient(offsetX) {
      offsetX = offsetX.offsetX;
      const guildsBarPullX = offsetX(16434).useHomeDrawerState().guildsBarPullX;
      let obj = offsetX(16434);
      const fn = function n() {
        const obj = { transform: null };
        const obj2 = { translateX: roundToNearestPixelDefault(-offsetX - guildsBarPullX.get()) };
        const items = [obj2];
        obj.transform = items;
        return obj;
      };
      let obj2 = offsetX(4850);
      fn.__closure = { roundToNearestPixel: guildsBarPullX(11575), offsetX, guildsBarPullX };
      fn.__workletHash = 6557055008030;
      fn.__initData = __initData2;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const obj4 = {
        pointerEvents: "none",
        style: null,
        children: closure_9(guildsBarPullX(10225), { absolute: true, tall: true, wide: true, mix: true }),
      };
      let items = [closure_4.absoluteFill, animatedStyle];
      obj4.style = items;
      return closure_9(guildsBarPullX(4850).View, obj4);
    };
const __initData3 = {
  code: 'function HomePanelContentTsx3(){const{isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:"transparent"};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}',
};
const __initData4 = {
  code: 'function HomePanelContentTsx4(){const{interpolate,panelTranslateX,INITIAL_OPEN_WIDTH,Extrapolation,isGradientTheme,interpolateColor,maxX,baseLowest,panelBg}=this.__closure;const opacity=interpolate(panelTranslateX.get(),[0,INITIAL_OPEN_WIDTH],[1,0],Extrapolation.CLAMP);if(isGradientTheme){return{backgroundColor:"transparent",opacity:opacity};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg]),opacity:opacity};}',
};
const __initData5 = {
  code: "function HomePanelContentTsx5(){const{isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}",
};
const __initData6 = {
  code: "function HomePanelContentTsx6(){const{interpolate,panelTranslateX,INITIAL_OPEN_WIDTH,Extrapolation,isGradientTheme,interpolateColor,maxX,baseLowest,panelBg}=this.__closure;const opacity=interpolate(panelTranslateX.get(),[0,INITIAL_OPEN_WIDTH],[1,0],Extrapolation.CLAMP);if(isGradientTheme){return{backgroundColor:'transparent',opacity:opacity};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg]),opacity:opacity};}",
};
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HomeDrawerPanelContent() {
      const cResult = ref(576).c(28);
      const tmp4 = closure_11();
      let obj = ref(576);
      const drawerOpen = ref(16437).useDrawerOpen();
      let obj2 = ref(16437);
      const doesLandOnHomeDrawer = ref(16434).useDoesLandOnHomeDrawer();
      ref = isClientThemeOrCustomThemeActive.useRef(null);
      let obj3 = ref(16434);
      let obj4 = isClientThemeOrCustomThemeActive;
      const homeDrawerState = ref(16434).useHomeDrawerState();
      const panelTranslateX = homeDrawerState.panelTranslateX;
      const guildsBarDrawerStyle = homeDrawerState.guildsBarDrawerStyle;
      const tmp9 = HomeDrawerStore((maxX) => maxX.maxX);
      dependencyMap = tmp9;
      const obj5 = ref(16434);
      isClientThemeOrCustomThemeActive = ref(9308).useIsClientThemeOrCustomThemeActive();
      const obj6 = ref(9308);
      const token = ref(4818).useToken(panelTranslateX(587).colors.BACKGROUND_BASE_LOWEST);
      const obj7 = ref(4818);
      const token1 = ref(4818).useToken(panelTranslateX(587).colors.PANEL_BG);
      const obj8 = ref(4818);
      const fn = function n() {
        if (!isClientThemeOrCustomThemeActive) {
          if (closure_2 > 0) {
            let obj = { backgroundColor: null };
            const items = [0, tmp];
            const items1 = [token, token1];
            obj.backgroundColor = ReanimatedRexport.interpolateColor(panelTranslateX.get(), items, items1);
          }
          return obj;
        }
        obj = { backgroundColor: "transparent" };
      };
      const obj9 = ref(4850);
      fn.__closure = {
        isGradientTheme: isClientThemeOrCustomThemeActive,
        maxX: tmp9,
        interpolateColor: ref(4850).interpolateColor,
        panelTranslateX,
        baseLowest: token,
        panelBg: token1,
      };
      fn.__workletHash = 8674861817557;
      fn.__initData = __initData3;
      const animatedStyle = obj9.useAnimatedStyle(fn);
      HomeDrawerStore = isClientThemeOrCustomThemeActive.useRef(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function o() {
          if (obj.isIOS()) {
            if (ref.current) {
              const obj2 = { ref, delay: 100 };
              const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
              const tmpResult = setAccessibilityFocus;
            } else {
              tmp3.current = true;
            }
          }
          obj = utils_PlatformUtils;
        };
        cResult[0] = fn2;
        let first = fn2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== drawerOpen) {
        let items = [drawerOpen];
        cResult[1] = drawerOpen;
        cResult[2] = items;
        let tmp16 = items;
      } else {
        tmp16 = cResult[2];
      }
      const effect = obj4.useEffect(first, tmp16);
      const obj10 = {
        isGradientTheme: isClientThemeOrCustomThemeActive,
        maxX: tmp9,
        interpolateColor: ref(4850).interpolateColor,
        panelTranslateX,
        baseLowest: token,
        panelBg: token1,
      };
      class N {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[11]);
          obj2 = panelTranslateX;
          value = panelTranslateX.get();
          items = [0];
          items[1] = closure_0(closure_2[9]).INITIAL_OPEN_WIDTH;
          interpolateResult = obj.interpolate(value, items, [1, 0], closure_0(closure_2[11]).Extrapolation.CLAMP);
          if (closure_3) {
            obj1 = { backgroundColor: "transparent", opacity: null };
            obj1.opacity = interpolateResult;
            obj6 = obj1;
          } else {
            obj6 = { backgroundColor: null, opacity: null };
            tmpResult = tmp(tmp2[11]);
            tmp5 = closure_2;
            items1 = [0];
            items1[1] = closure_2;
            tmp6 = closure_4;
            items2 = [,];
            items2[0] = closure_4;
            tmp7 = closure_5;
            items2[1] = closure_5;
            obj6.backgroundColor = tmpResult.interpolateColor(obj2.get(), items1, items2);
            obj6.opacity = interpolateResult;
          }
          return obj6;
        }
      }
      let tmpResult = ref(4850);
      N.__closure = {
        interpolate: ref(4850).interpolate,
        panelTranslateX,
        INITIAL_OPEN_WIDTH: ref(16434).INITIAL_OPEN_WIDTH,
        Extrapolation: ref(4850).Extrapolation,
        isGradientTheme: isClientThemeOrCustomThemeActive,
        interpolateColor: ref(4850).interpolateColor,
        maxX: tmp9,
        baseLowest: token,
        panelBg: token1,
      };
      N.__workletHash = 8745496017321;
      N.__initData = __initData4;
      const animatedStyle1 = tmpResult.useAnimatedStyle(N);
      if (cResult[3] === animatedStyle) {
        if (cResult[4] === tmp4.container) {
          let tmp19 = cResult[5];
        }
        const tmp20 = drawerOpen ? tmp4.guildsListContainerGestured : tmp4.guildLisetContainerDefault;
        if (cResult[6] === guildsBarDrawerStyle) {
          if (cResult[7] === tmp20) {
            let tmp21 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp24 = closure_9(tmp11(16716), { enableHome: true });
            cResult[9] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[9];
          }
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj12 = { left: GUILD_LIST_WIDTH };
            cResult[10] = obj12;
            let tmp25 = obj12;
          } else {
            tmp25 = cResult[10];
          }
          if (cResult[11] === animatedStyle1) {
            if (cResult[12] === tmp4.contentMask) {
              let tmp27 = cResult[13];
            }
            if (cResult[14] !== isClientThemeOrCustomThemeActive) {
              let tmp29 = null;
              if (isClientThemeOrCustomThemeActive) {
                const obj13 = { offsetX: GUILD_LIST_WIDTH };
                tmp29 = closure_9(closure_14, obj13);
              }
              cResult[14] = isClientThemeOrCustomThemeActive;
              cResult[15] = tmp29;
              let tmp28 = tmp29;
            } else {
              tmp28 = cResult[15];
            }
            if (cResult[16] === tmp27) {
              if (cResult[17] === tmp28) {
                let tmp33 = cResult[18];
              }
              if (cResult[19] !== doesLandOnHomeDrawer) {
                let tmp37 = null;
                if (doesLandOnHomeDrawer) {
                  tmp37 = closure_9(tmp11(16795), {});
                }
                cResult[19] = doesLandOnHomeDrawer;
                cResult[20] = tmp37;
                let tmp36 = tmp37;
              } else {
                tmp36 = cResult[20];
              }
              if (cResult[21] === tmp36) {
                if (cResult[22] === tmp21) {
                  if (cResult[23] === tmp33) {
                    let tmp39 = cResult[24];
                  }
                  if (cResult[25] === tmp39) {
                    if (cResult[26] === tmp19) {
                      let tmp42 = cResult[27];
                    }
                    return tmp42;
                  }
                  const obj14 = { style: tmp19, children: tmp39 };
                  const tmp44 = closure_9(tmp11(4850).View, obj14);
                  cResult[25] = tmp39;
                  cResult[26] = tmp19;
                  cResult[27] = tmp44;
                  tmp42 = tmp44;
                }
              }
              const obj15 = { ref, style: tmp21, children: null };
              let items1 = [tmp22, tmp33, tmp36];
              obj15.children = items1;
              const tmp41 = closure_10(tmp11(4850).View, obj15);
              cResult[21] = tmp36;
              cResult[22] = tmp21;
              cResult[23] = tmp33;
              cResult[24] = tmp41;
              tmp39 = tmp41;
            }
            const obj16 = { style: tmp27, pointerEvents: "none", collapsable: false, children: tmp28 };
            const tmp35 = closure_9(tmp11(4850).View, obj16);
            cResult[16] = tmp27;
            cResult[17] = tmp28;
            cResult[18] = tmp35;
            tmp33 = tmp35;
          }
          let items2 = [tmp4.contentMask, tmp25, animatedStyle1];
          cResult[11] = animatedStyle1;
          cResult[12] = tmp4.contentMask;
          cResult[13] = items2;
          tmp27 = items2;
        }
        const items3 = [tmp20, guildsBarDrawerStyle];
        cResult[6] = guildsBarDrawerStyle;
        cResult[7] = tmp20;
        cResult[8] = items3;
        tmp21 = items3;
      }
      const items4 = [tmp4.container, animatedStyle];
      cResult[3] = animatedStyle;
      cResult[4] = tmp4.container;
      cResult[5] = items4;
      tmp19 = items4;
      const obj11 = {
        interpolate: ref(4850).interpolate,
        panelTranslateX,
        INITIAL_OPEN_WIDTH: ref(16434).INITIAL_OPEN_WIDTH,
        Extrapolation: ref(4850).Extrapolation,
        isGradientTheme: isClientThemeOrCustomThemeActive,
        interpolateColor: ref(4850).interpolateColor,
        maxX: tmp9,
        baseLowest: token,
        panelBg: token1,
      };
    }
  : function HomeDrawerPanelContent() {
      const tmp2 = closure_11();
      const drawerOpen = ref(16437).useDrawerOpen();
      let obj = ref(16437);
      const doesLandOnHomeDrawer = ref(16434).useDoesLandOnHomeDrawer();
      ref = isClientThemeOrCustomThemeActive.useRef(null);
      let obj2 = ref(16434);
      const homeDrawerState = ref(16434).useHomeDrawerState();
      const panelTranslateX = homeDrawerState.panelTranslateX;
      const tmp8 = HomeDrawerStore((maxX) => maxX.maxX);
      dependencyMap = tmp8;
      let obj3 = ref(16434);
      isClientThemeOrCustomThemeActive = ref(9308).useIsClientThemeOrCustomThemeActive();
      let obj4 = ref(9308);
      const token = ref(4818).useToken(panelTranslateX(587).colors.BACKGROUND_BASE_LOWEST);
      const obj5 = ref(4818);
      const token1 = ref(4818).useToken(panelTranslateX(587).colors.PANEL_BG);
      const obj6 = ref(4818);
      const fn = function n() {
        if (!isClientThemeOrCustomThemeActive) {
          if (closure_2 > 0) {
            let obj = { backgroundColor: null };
            const items = [0, tmp];
            const items1 = [token, token1];
            obj.backgroundColor = ReanimatedRexport.interpolateColor(panelTranslateX.get(), items, items1);
          }
          return obj;
        }
        obj = { backgroundColor: "transparent" };
      };
      const obj7 = ref(4850);
      fn.__closure = {
        isGradientTheme: isClientThemeOrCustomThemeActive,
        maxX: tmp8,
        interpolateColor: ref(4850).interpolateColor,
        panelTranslateX,
        baseLowest: token,
        panelBg: token1,
      };
      fn.__workletHash = 5038627402835;
      fn.__initData = __initData5;
      const animatedStyle = obj7.useAnimatedStyle(fn);
      HomeDrawerStore = isClientThemeOrCustomThemeActive.useRef(false);
      let items = [drawerOpen];
      const effect = isClientThemeOrCustomThemeActive.useEffect(() => {
        if (obj.isIOS()) {
          if (ref.current) {
            const obj2 = { ref, delay: 100 };
            const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
            const tmpResult = setAccessibilityFocus;
          } else {
            tmp3.current = true;
          }
        }
        obj = utils_PlatformUtils;
      }, items);
      const obj8 = {
        isGradientTheme: isClientThemeOrCustomThemeActive,
        maxX: tmp8,
        interpolateColor: ref(4850).interpolateColor,
        panelTranslateX,
        baseLowest: token,
        panelBg: token1,
      };
      const fn2 = function k() {
        value = panelTranslateX.get();
        const items = [0, useHomeDrawerGesture.INITIAL_OPEN_WIDTH];
        const interpolateResult = ReanimatedRexport.interpolate(
          value,
          items,
          [1, 0],
          ReanimatedRexport.Extrapolation.CLAMP,
        );
        if (isClientThemeOrCustomThemeActive) {
          const obj3 = { backgroundColor: "transparent", opacity: interpolateResult };
          let obj4 = obj3;
        } else {
          obj4 = { backgroundColor: null, opacity: null };
          const items1 = [0, closure_2];
          const items2 = [token, token1];
          obj4.backgroundColor = ReanimatedRexport.interpolateColor(panelTranslateX.get(), items1, items2);
          obj4.opacity = interpolateResult;
          const tmpResult = ReanimatedRexport;
        }
        return obj4;
      };
      const obj9 = ref(4850);
      fn2.__closure = {
        interpolate: ref(4850).interpolate,
        panelTranslateX,
        INITIAL_OPEN_WIDTH: ref(16434).INITIAL_OPEN_WIDTH,
        Extrapolation: ref(4850).Extrapolation,
        isGradientTheme: isClientThemeOrCustomThemeActive,
        interpolateColor: ref(4850).interpolateColor,
        maxX: tmp8,
        baseLowest: token,
        panelBg: token1,
      };
      fn2.__workletHash = 16771946319915;
      fn2.__initData = __initData6;
      const animatedStyle1 = obj9.useAnimatedStyle(fn2);
      const obj11 = { style: null, children: null };
      let items1 = [tmp2.container, animatedStyle];
      obj11.style = items1;
      const obj12 = { ref, style: null, children: null };
      let items2 = [
        drawerOpen ? tmp2.guildsListContainerGestured : tmp2.guildLisetContainerDefault,
        homeDrawerState.guildsBarDrawerStyle,
      ];
      obj12.style = items2;
      const items3 = [closure_9(panelTranslateX(16716), { enableHome: true }), ,];
      const obj13 = { style: null, pointerEvents: "none", collapsable: false, children: null };
      const items4 = [tmp2.contentMask, { left: GUILD_LIST_WIDTH }, animatedStyle1];
      obj13.style = items4;
      let tmp16Result = null;
      if (isClientThemeOrCustomThemeActive) {
        const obj14 = { offsetX: GUILD_LIST_WIDTH };
        tmp16Result = closure_9(closure_14, obj14);
      }
      obj13.children = tmp16Result;
      items3[1] = closure_9(panelTranslateX(4850).View, obj13);
      let tmp16Result2 = null;
      if (doesLandOnHomeDrawer) {
        tmp16Result2 = closure_9(tmp10(16795), {});
      }
      items3[2] = tmp16Result2;
      obj12.children = items3;
      obj11.children = closure_10(panelTranslateX(4850).View, obj12);
      return closure_9(panelTranslateX(4850).View, obj11);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function HomePanelContent() {
        const cResult = c.c(7);
        const tmp3 = closure_11(DM_WIDTH);
        if (obj2.useIsHomeDrawerEnabled()) {
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp21 = options(closure_19, {});
            cResult[6] = tmp21;
          }
        } else {
          const _Symbol = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp8 = options(GuildsBarDefault, {});
            cResult[0] = tmp8;
            let first = tmp8;
          } else {
            first = cResult[0];
          }
          if (cResult[1] !== tmp3.guildLisetContainerDefault) {
            const obj3 = { style: tmp3.guildLisetContainerDefault, children: first };
            const tmp12 = options(hasOwnProperty, obj3);
            cResult[1] = tmp3.guildLisetContainerDefault;
            cResult[2] = tmp12;
            let tmp9 = tmp12;
          } else {
            tmp9 = cResult[2];
          }
          if (cResult[3] === tmp3.container) {
            if (cResult[4] === tmp9) {
              let tmp13 = cResult[5];
            }
            return tmp13;
          }
          const obj4 = { style: tmp3.container, children: tmp9 };
          const tmp16 = options(hasOwnProperty, obj4);
          cResult[3] = tmp3.container;
          cResult[4] = tmp9;
          cResult[5] = tmp16;
          tmp13 = tmp16;
        }
        obj2 = useHomeDrawerGesture;
      }
    : function HomePanelContent() {
        const tmp = closure_11(DM_WIDTH);
        if (obj.useIsHomeDrawerEnabled()) {
          let tmp3Result = options(closure_19, {});
        } else {
          const obj2 = { style: tmp.container, children: null };
          const obj3 = { style: tmp.guildLisetContainerDefault, children: options(GuildsBarDefault, {}) };
          obj2.children = options(hasOwnProperty, obj3);
          tmp3Result = options(hasOwnProperty, obj2);
        }
        return tmp3Result;
      },
);
