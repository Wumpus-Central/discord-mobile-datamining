// === Module 16261: HomePanelContent ===

// Module 16261 (HomePanelContent)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import react_native from "react-native" /* 5786 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10738 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 15988 */;
import GuildsBarConstants from "GuildsBarConstants" /* 16262 */;
import GuildsBarDefault from "GuildsBar" /* 16263 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import HomeDrawerStore_mod from "HomeDrawerStore" /* 15983 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native2);
let HomeDrawerStore = HomeDrawerStore_mod;
const DM_WIDTH = Constants.DM_WIDTH;
const GUILD_LIST_WIDTH = GuildsBarConstants.GUILD_LIST_WIDTH;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((width) => {
  const obj = { container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault: obj2, contentMask: { position: "absolute", top: 0, bottom: 0, right: 0, overflow: "hidden" } };
  return obj;
});
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function HomePanelContentTsx1(){const{roundToNearestPixel,offsetX,guildsBarPullX}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-guildsBarPullX.get())}]};}" };
const __initData2 = { code: "function HomePanelContentTsx2(){const{roundToNearestPixel,offsetX,guildsBarPullX}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-guildsBarPullX.get())}]};}" };
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp13;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp3 = closure_11(DM_WIDTH);
  const obj2 = useHomeDrawerGesture;
  if (obj2.useIsHomeDrawerEnabled()) {
    let tmp18;
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp21 = React4(closure_19, {});
      cResult[6] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[6];
    }
    tmp13 = tmp18;
  } else {
    let first;
    let tmp9;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp8 = React4(GuildsBarDefault, {});
      cResult[0] = tmp8;
      first = tmp8;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp3.guildLisetContainerDefault) {
      const obj3 = { style: tmp3.guildLisetContainerDefault, children: first };
      const tmp12 = React4(hasOwnProperty, obj3);
      cResult[1] = tmp3.guildLisetContainerDefault;
      cResult[2] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[2];
    }
    if (cResult[3] === tmp3.container) {
      if (cResult[4] === tmp9) {
        tmp13 = cResult[5];
      }
    }
    const obj4 = { style: tmp3.container, children: tmp9 };
    const tmp16 = React4(hasOwnProperty, obj4);
    cResult[3] = tmp3.container;
    cResult[4] = tmp9;
    cResult[5] = tmp16;
    tmp13 = tmp16;
  }
  return tmp13;
}) : (() => {
  let obj3;
  let tmp3Result;
  const tmp = closure_11(DM_WIDTH);
  const obj = useHomeDrawerGesture;
  if (obj.useIsHomeDrawerEnabled()) {
    tmp3Result = React4(closure_19, {});
  } else {
    const obj2 = { style: tmp.container, children: React4(hasOwnProperty, obj3) };
    obj3 = { style: tmp.guildLisetContainerDefault, children: React4(GuildsBarDefault, {}) };
    tmp3Result = React4(hasOwnProperty, obj2);
  }
  return tmp3Result;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((offsetX) => {
  let tmp10;
  let tmp5;
  let tmp7;
  let obj = offsetX(576);
  const cResult = obj.c(5);
  offsetX = offsetX.offsetX;
  let obj2 = offsetX(15988);
  const guildsBarPullX = obj2.useHomeDrawerState().guildsBarPullX;
  const fn = function n() {
    let items;
    let tmp;
    const obj = { transform: items };
    const obj2 = { translateX: tmp(tmp2 - guildsBarPullX.get()) };
    items = [obj2];
    tmp = roundToNearestPixelDefault;
    return obj;
  };
  const obj3 = offsetX(4618);
  fn.__closure = { roundToNearestPixel: guildsBarPullX(10738), offsetX, guildsBarPullX };
  fn.__workletHash = 7539125302557;
  fn.__initData = __initData;
  ({ roundToNearestPixel: guildsBarPullX(10738), offsetX, guildsBarPullX });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] !== animatedStyle) {
    let items = [closure_4.absoluteFill, animatedStyle];
    cResult[0] = animatedStyle;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = closure_9(guildsBarPullX(5918), { absolute: true, tall: true, wide: true, mix: true });
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const obj5 = { pointerEvents: "none", style: tmp5, children: tmp7 };
    const tmp12 = closure_9(guildsBarPullX(4618).View, obj5);
    cResult[3] = tmp5;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : ((offsetX) => {
  let items;
  offsetX = offsetX.offsetX;
  let obj = offsetX(15988);
  const guildsBarPullX = obj.useHomeDrawerState().guildsBarPullX;
  let obj2 = offsetX(4618);
  const fn = function n() {
    let items;
    let tmp;
    const obj = { transform: items };
    const obj2 = { translateX: tmp(tmp2 - guildsBarPullX.get()) };
    items = [obj2];
    tmp = roundToNearestPixelDefault;
    return obj;
  };
  fn.__closure = { roundToNearestPixel: guildsBarPullX(10738), offsetX, guildsBarPullX };
  fn.__workletHash = 6557055008030;
  fn.__initData = __initData2;
  ({ roundToNearestPixel: guildsBarPullX(10738), offsetX, guildsBarPullX });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { pointerEvents: "none", style: items, children: closure_9(guildsBarPullX(5918), { absolute: true, tall: true, wide: true, mix: true }) };
  items = [closure_4.absoluteFill, animatedStyle];
  const View = guildsBarPullX(4618).View;
  return closure_9(View, obj4);
});
const __initData3 = { code: "function HomePanelContentTsx3(){const{isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:\"transparent\"};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}" };
const __initData4 = { code: "function HomePanelContentTsx4(){const{interpolate,panelTranslateX,INITIAL_OPEN_WIDTH,Extrapolation,isGradientTheme,interpolateColor,maxX,baseLowest,panelBg}=this.__closure;const opacity=interpolate(panelTranslateX.get(),[0,INITIAL_OPEN_WIDTH],[1,0],Extrapolation.CLAMP);if(isGradientTheme){return{backgroundColor:\"transparent\",opacity:opacity};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg]),opacity:opacity};}" };
const __initData5 = { code: "function HomePanelContentTsx5(){const{isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}" };
const __initData6 = { code: "function HomePanelContentTsx6(){const{interpolate,panelTranslateX,INITIAL_OPEN_WIDTH,Extrapolation,isGradientTheme,interpolateColor,maxX,baseLowest,panelBg}=this.__closure;const opacity=interpolate(panelTranslateX.get(),[0,INITIAL_OPEN_WIDTH],[1,0],Extrapolation.CLAMP);if(isGradientTheme){return{backgroundColor:'transparent',opacity:opacity};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg]),opacity:opacity};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let first;
  let isClientThemeOrCustomThemeActive;
  let items1;
  let ref;
  let tmp16;
  const tmp2 = dependencyMap;
  let obj = ref(576);
  const cResult = obj.c(28);
  const tmp4 = closure_11();
  let obj2 = ref(15991);
  const drawerOpen = obj2.useDrawerOpen();
  let obj3 = ref(15988);
  const doesLandOnHomeDrawer = obj3.useDoesLandOnHomeDrawer();
  ref = isClientThemeOrCustomThemeActive.useRef(null);
  const obj5 = ref(15988);
  const homeDrawerState = obj5.useHomeDrawerState();
  const panelTranslateX = homeDrawerState.panelTranslateX;
  const guildsBarDrawerStyle = homeDrawerState.guildsBarDrawerStyle;
  const tmp9 = HomeDrawerStore((maxX) => maxX.maxX);
  dependencyMap = tmp9;
  const obj4 = isClientThemeOrCustomThemeActive;
  const obj6 = ref(7520);
  isClientThemeOrCustomThemeActive = obj6.useIsClientThemeOrCustomThemeActive();
  const obj7 = ref(4586);
  const token = obj7.useToken(panelTranslateX(587).colors.BACKGROUND_BASE_LOWEST);
  const obj8 = ref(4586);
  const token1 = obj8.useToken(panelTranslateX(587).colors.PANEL_BG);
  const fn = function n() {
    let items;
    let items1;
    let obj2;
    if (!isClientThemeOrCustomThemeActive) {
      let obj;
      if (closure_2 > 0) {
        obj = { backgroundColor: obj2.interpolateColor(panelTranslateX.get(), items, items1) };
        items = [0, tmp2];
        items1 = [token, token1];
        obj2 = ReanimatedRexport;
      }
      return obj;
    }
    obj = { backgroundColor: "transparent" };
  };
  const obj9 = ref(4618);
  fn.__closure = { isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp9, interpolateColor: ref(4618).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 };
  fn.__workletHash = 8674861817557;
  fn.__initData = __initData3;
  ({ isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp9, interpolateColor: ref(4618).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 });
  const animatedStyle = obj9.useAnimatedStyle(fn);
  HomeDrawerStore = isClientThemeOrCustomThemeActive.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function o() {
      const obj = utils_PlatformUtils;
      if (obj.isIOS()) {
        if (ref.current) {
          const obj2 = { ref, delay: 100 };
          const tmpResult = react_native;
          const result = tmpResult.setAccessibilityFocus(obj2);
        } else {
          tmp3.current = true;
        }
      }
    };
    cResult[0] = fn2;
    first = fn2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== drawerOpen) {
    let items = [drawerOpen];
    cResult[1] = drawerOpen;
    cResult[2] = items;
    tmp16 = items;
  } else {
    tmp16 = cResult[2];
  }
  const effect = obj4.useEffect(first, tmp16);
  let tmpResult = tmp(4618);
  class N {
    constructor() {
      let items1;
      let items2;
      let obj3;
      let tmpResult;
      const interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      const value = panelTranslateX.get();
      const items = [0, useHomeDrawerGesture.INITIAL_OPEN_WIDTH];
      const interpolateResult = interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP);
      if (isClientThemeOrCustomThemeActive) {
        obj3 = { backgroundColor: "transparent", opacity: interpolateResult };
        const obj2 = { backgroundColor: "transparent", opacity: interpolateResult };
      } else {
        obj3 = { backgroundColor: tmpResult.interpolateColor(panelTranslateX.get(), items1, items2), opacity: interpolateResult };
        items1 = [0, closure_2];
        items2 = [token, token1];
        tmpResult = ReanimatedRexport;
      }
      return obj3;
    }
  }
  N.__closure = { interpolate: ref(4618).interpolate, panelTranslateX, INITIAL_OPEN_WIDTH: ref(15988).INITIAL_OPEN_WIDTH, Extrapolation: ref(4618).Extrapolation, isGradientTheme: isClientThemeOrCustomThemeActive, interpolateColor: ref(4618).interpolateColor, maxX: tmp9, baseLowest: token, panelBg: token1 };
  N.__workletHash = 8745496017321;
  N.__initData = __initData4;
  ({ interpolate: ref(4618).interpolate, panelTranslateX, INITIAL_OPEN_WIDTH: ref(15988).INITIAL_OPEN_WIDTH, Extrapolation: ref(4618).Extrapolation, isGradientTheme: isClientThemeOrCustomThemeActive, interpolateColor: ref(4618).interpolateColor, maxX: tmp9, baseLowest: token, panelBg: token1 });
  const animatedStyle1 = tmpResult.useAnimatedStyle(N);
  if (cResult[3] === animatedStyle) {
    let tmp19;
    if (cResult[4] === tmp4.container) {
      tmp19 = cResult[5];
    }
    const tmp20 = drawerOpen ? tmp4.guildsListContainerGestured : tmp4.guildLisetContainerDefault;
    if (cResult[6] === guildsBarDrawerStyle) {
      let tmp21;
      let tmp22;
      let tmp25;
      if (cResult[7] === tmp20) {
        tmp21 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp24 = closure_9(panelTranslateX(16263), { enableHome: true });
        cResult[9] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[9];
      }
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj12 = { left: GUILD_LIST_WIDTH };
        cResult[10] = obj12;
        tmp25 = obj12;
      } else {
        tmp25 = cResult[10];
      }
      if (cResult[11] === animatedStyle1) {
        let tmp27;
        let tmp28;
        if (cResult[12] === tmp4.contentMask) {
          tmp27 = cResult[13];
        }
        if (cResult[14] !== isClientThemeOrCustomThemeActive) {
          let tmp29 = null;
          if (isClientThemeOrCustomThemeActive) {
            const obj13 = { offsetX: GUILD_LIST_WIDTH };
            tmp29 = closure_9(closure_14, obj13);
          }
          cResult[14] = isClientThemeOrCustomThemeActive;
          cResult[15] = tmp29;
          tmp28 = tmp29;
        } else {
          tmp28 = cResult[15];
        }
        if (cResult[16] === tmp27) {
          let tmp33;
          let tmp36;
          if (cResult[17] === tmp28) {
            tmp33 = cResult[18];
          }
          if (cResult[19] !== doesLandOnHomeDrawer) {
            let tmp37 = null;
            if (doesLandOnHomeDrawer) {
              tmp37 = closure_9(tmp11(16342), {});
            }
            cResult[19] = doesLandOnHomeDrawer;
            cResult[20] = tmp37;
            tmp36 = tmp37;
          } else {
            tmp36 = cResult[20];
          }
          if (cResult[21] === tmp36) {
            if (cResult[22] === tmp21) {
              let tmp39;
              if (cResult[23] === tmp33) {
                tmp39 = cResult[24];
              }
              if (cResult[25] === tmp39) {
                let tmp42;
                if (cResult[26] === tmp19) {
                  tmp42 = cResult[27];
                }
                return tmp42;
              }
              const obj14 = { style: tmp19, children: tmp39 };
              const tmp44 = closure_9(panelTranslateX(4618).View, obj14);
              cResult[25] = tmp39;
              cResult[26] = tmp19;
              cResult[27] = tmp44;
              tmp42 = tmp44;
            }
          }
          const obj15 = { ref, style: tmp21, children: items1 };
          items1 = [tmp22, tmp33, tmp36];
          const tmp41 = closure_10(panelTranslateX(4618).View, obj15);
          cResult[21] = tmp36;
          cResult[22] = tmp21;
          cResult[23] = tmp33;
          cResult[24] = tmp41;
          tmp39 = tmp41;
        }
        const obj16 = { style: tmp27, pointerEvents: "none", collapsable: false, children: tmp28 };
        const tmp35 = closure_9(panelTranslateX(4618).View, obj16);
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
}) : (() => {
  let View2;
  let closure_2;
  let isClientThemeOrCustomThemeActive;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj12;
  let ref;
  let tmp16Result;
  const tmp2 = closure_11();
  const tmp3 = dependencyMap;
  let obj = ref(15991);
  const drawerOpen = obj.useDrawerOpen();
  let obj2 = ref(15988);
  const doesLandOnHomeDrawer = obj2.useDoesLandOnHomeDrawer();
  ref = isClientThemeOrCustomThemeActive.useRef(null);
  let obj3 = ref(15988);
  const homeDrawerState = obj3.useHomeDrawerState();
  const panelTranslateX = homeDrawerState.panelTranslateX;
  const guildsBarDrawerStyle = homeDrawerState.guildsBarDrawerStyle;
  const tmp8 = HomeDrawerStore((maxX) => maxX.maxX);
  dependencyMap = tmp8;
  const obj4 = ref(7520);
  isClientThemeOrCustomThemeActive = obj4.useIsClientThemeOrCustomThemeActive();
  const obj5 = ref(4586);
  const token = obj5.useToken(panelTranslateX(587).colors.BACKGROUND_BASE_LOWEST);
  const obj6 = ref(4586);
  const token1 = obj6.useToken(panelTranslateX(587).colors.PANEL_BG);
  const fn = function n() {
    let items;
    let items1;
    let obj2;
    if (!isClientThemeOrCustomThemeActive) {
      let obj;
      if (closure_2 > 0) {
        obj = { backgroundColor: obj2.interpolateColor(panelTranslateX.get(), items, items1) };
        items = [0, tmp2];
        items1 = [token, token1];
        obj2 = ReanimatedRexport;
      }
      return obj;
    }
    obj = { backgroundColor: "transparent" };
  };
  const obj7 = ref(4618);
  fn.__closure = { isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp8, interpolateColor: ref(4618).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 };
  fn.__workletHash = 5038627402835;
  fn.__initData = __initData5;
  ({ isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp8, interpolateColor: ref(4618).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 });
  const animatedStyle = obj7.useAnimatedStyle(fn);
  HomeDrawerStore = isClientThemeOrCustomThemeActive.useRef(false);
  let items = [drawerOpen];
  const effect = isClientThemeOrCustomThemeActive.useEffect(() => {
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      if (ref.current) {
        const obj2 = { ref, delay: 100 };
        const tmpResult = react_native;
        const result = tmpResult.setAccessibilityFocus(obj2);
      } else {
        tmp3.current = true;
      }
    }
  }, items);
  const fn2 = function k() {
    let items1;
    let items2;
    let obj3;
    let tmpResult;
    const interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    const value = panelTranslateX.get();
    const items = [0, useHomeDrawerGesture.INITIAL_OPEN_WIDTH];
    const interpolateResult = interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP);
    if (isClientThemeOrCustomThemeActive) {
      obj3 = { backgroundColor: "transparent", opacity: interpolateResult };
      const obj2 = { backgroundColor: "transparent", opacity: interpolateResult };
    } else {
      obj3 = { backgroundColor: tmpResult.interpolateColor(panelTranslateX.get(), items1, items2), opacity: interpolateResult };
      items1 = [0, closure_2];
      items2 = [token, token1];
      tmpResult = ReanimatedRexport;
    }
    return obj3;
  };
  const obj9 = ref(4618);
  fn2.__closure = { interpolate: ref(4618).interpolate, panelTranslateX, INITIAL_OPEN_WIDTH: ref(15988).INITIAL_OPEN_WIDTH, Extrapolation: ref(4618).Extrapolation, isGradientTheme: isClientThemeOrCustomThemeActive, interpolateColor: ref(4618).interpolateColor, maxX: tmp8, baseLowest: token, panelBg: token1 };
  fn2.__workletHash = 16771946319915;
  fn2.__initData = __initData6;
  ({ interpolate: ref(4618).interpolate, panelTranslateX, INITIAL_OPEN_WIDTH: ref(15988).INITIAL_OPEN_WIDTH, Extrapolation: ref(4618).Extrapolation, isGradientTheme: isClientThemeOrCustomThemeActive, interpolateColor: ref(4618).interpolateColor, maxX: tmp8, baseLowest: token, panelBg: token1 });
  const animatedStyle1 = obj9.useAnimatedStyle(fn2);
  const obj11 = { style: items1, children: closure_10(View2, obj12) };
  items1 = [tmp2.container, animatedStyle];
  const View = panelTranslateX(4618).View;
  obj12 = { ref, style: items2, children: items3 };
  items2 = [drawerOpen ? tmp2.guildsListContainerGestured : tmp2.guildLisetContainerDefault, guildsBarDrawerStyle];
  View2 = panelTranslateX(4618).View;
  items3 = [closure_9(panelTranslateX(16263), { enableHome: true }), , ];
  const obj13 = { style: items4, pointerEvents: "none", collapsable: false, children: tmp16Result };
  items4 = [tmp2.contentMask, { left: GUILD_LIST_WIDTH }, animatedStyle1];
  tmp16Result = null;
  const View3 = tmp10(4618).View;
  if (isClientThemeOrCustomThemeActive) {
    const obj14 = { offsetX: GUILD_LIST_WIDTH };
    tmp16Result = closure_9(closure_14, obj14);
  }
  items3[1] = closure_9(View3, obj13);
  let tmp16Result2 = null;
  if (doesLandOnHomeDrawer) {
    tmp16Result2 = closure_9(tmp10(16342), {});
  }
  items3[2] = tmp16Result2;
  return closure_9(View, obj11);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = memoResult;