// === Module 16631: HomePanelContent ===

// Module 16631 (HomePanelContent)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4493 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5181 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11265 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16372 */;
import GuildsBarDefault from "GuildsBar" /* 16633 */;
import noop from "module_19" /* 19 */;
import HomeDrawerStore from "HomeDrawerStore" /* 16366 */;

require = fn;
function ContentMaskGradient(offsetX) {
  offsetX = offsetX.offsetX;
  const guildsBarPullX = offsetX(16372).useHomeDrawerState().guildsBarPullX;
  let obj = offsetX(16372);
  const fn = function n() {
    const obj = { transform: null };
    const obj2 = { translateX: roundToNearestPixelDefault(-offsetX - guildsBarPullX.get()) };
    const items = [obj2];
    obj.transform = items;
    return obj;
  };
  let obj2 = offsetX(4493);
  fn.__closure = { roundToNearestPixel: guildsBarPullX(11265), offsetX, guildsBarPullX };
  fn.__workletHash = 7539125302557;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { pointerEvents: "none", style: null, children: closure_9(guildsBarPullX(5343), { absolute: true, tall: true, wide: true, mix: true }) };
  let items = [absoluteFill.absoluteFill, animatedStyle];
  obj4.style = items;
  return closure_9(guildsBarPullX(4493).View, obj4);
}
function HomeDrawerPanelContent() {
  const tmp2 = closure_11();
  const drawerOpen = ref(16375).useDrawerOpen();
  let obj = ref(16375);
  const doesLandOnHomeDrawer = ref(16372).useDoesLandOnHomeDrawer();
  ref = isClientThemeOrCustomThemeActive.useRef(null);
  let obj2 = ref(16372);
  const homeDrawerState = ref(16372).useHomeDrawerState();
  const panelTranslateX = homeDrawerState.panelTranslateX;
  const tmp8 = HomeDrawerStore((maxX) => maxX.maxX);
  dependencyMap = tmp8;
  let obj3 = ref(16372);
  isClientThemeOrCustomThemeActive = ref(8121).useIsClientThemeOrCustomThemeActive();
  let obj4 = ref(8121);
  const token = ref(4458).useToken(panelTranslateX(576).colors.BACKGROUND_BASE_LOWEST);
  const obj5 = ref(4458);
  const token1 = ref(4458).useToken(panelTranslateX(576).colors.PANEL_BG);
  const obj6 = ref(4458);
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
  const obj7 = ref(4493);
  fn.__closure = { isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp8, interpolateColor: ref(4493).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 };
  fn.__workletHash = 11992338029652;
  fn.__initData = __initData2;
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
  const obj8 = { isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp8, interpolateColor: ref(4493).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 };
  const fn2 = function k() {
    value = panelTranslateX.get();
    const items = [0, useHomeDrawerGesture.INITIAL_OPEN_WIDTH];
    const interpolateResult = ReanimatedRexport.interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP);
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
  const obj9 = ref(4493);
  fn2.__closure = { interpolate: ref(4493).interpolate, panelTranslateX, INITIAL_OPEN_WIDTH: ref(16372).INITIAL_OPEN_WIDTH, Extrapolation: ref(4493).Extrapolation, isGradientTheme: isClientThemeOrCustomThemeActive, interpolateColor: ref(4493).interpolateColor, maxX: tmp8, baseLowest: token, panelBg: token1 };
  fn2.__workletHash = 380238951470;
  fn2.__initData = __initData3;
  const animatedStyle1 = obj9.useAnimatedStyle(fn2);
  const obj11 = { style: null, children: null };
  let items1 = [tmp2.container, animatedStyle];
  obj11.style = items1;
  const obj12 = { ref, style: null, children: null };
  let items2 = [drawerOpen ? tmp2.guildsListContainerGestured : tmp2.guildLisetContainerDefault, homeDrawerState.guildsBarDrawerStyle];
  obj12.style = items2;
  const items3 = [closure_9(panelTranslateX(16633), { enableHome: true }), , ];
  const obj13 = { style: null, pointerEvents: "none", collapsable: false, children: null };
  const items4 = [tmp2.contentMask, { left: GUILD_LIST_WIDTH }, animatedStyle1];
  obj13.style = items4;
  let tmp16Result = null;
  if (isClientThemeOrCustomThemeActive) {
    const obj14 = { offsetX: GUILD_LIST_WIDTH };
    tmp16Result = closure_9(ContentMaskGradient, obj14);
  }
  obj13.children = tmp16Result;
  items3[1] = closure_9(panelTranslateX(4493).View, obj13);
  let tmp16Result2 = null;
  if (doesLandOnHomeDrawer) {
    tmp16Result2 = closure_9(tmp10(16712), {});
  }
  items3[2] = tmp16Result2;
  obj12.children = items3;
  obj11.children = closure_10(panelTranslateX(4493).View, obj12);
  return closure_9(panelTranslateX(4493).View, obj11);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const DM_WIDTH = fn(1074).DM_WIDTH;
const GUILD_LIST_WIDTH = fn(16632).GUILD_LIST_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4757);
let closure_11 = createStyles.createStyles((width) => {
  const obj = { container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault: { flex: 1, width }, contentMask: { position: "absolute", top: 0, bottom: 0, right: 0, overflow: "hidden" } };
  return obj;
});
const __initData = { code: "function HomePanelContentTsx1(){const{roundToNearestPixel,offsetX,guildsBarPullX}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-guildsBarPullX.get())}]};}" };
const __initData2 = { code: "function HomePanelContentTsx2(){const{isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}" };
const __initData3 = { code: "function HomePanelContentTsx3(){const{interpolate,panelTranslateX,INITIAL_OPEN_WIDTH,Extrapolation,isGradientTheme,interpolateColor,maxX,baseLowest,panelBg}=this.__closure;const opacity=interpolate(panelTranslateX.get(),[0,INITIAL_OPEN_WIDTH],[1,0],Extrapolation.CLAMP);if(isGradientTheme){return{backgroundColor:'transparent',opacity:opacity};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg]),opacity:opacity};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = noop.memo(() => {
  const tmp = closure_11(DM_WIDTH);
  if (obj.useIsHomeDrawerEnabled()) {
    let tmp3Result = React7(HomeDrawerPanelContent, {});
  } else {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { style: tmp.guildLisetContainerDefault, children: React7(GuildsBarDefault, {}) };
    obj2.children = React7(hasOwnProperty, obj3);
    tmp3Result = React7(hasOwnProperty, obj2);
  }
  return tmp3Result;
});