// === Module 16378: HomePanelContent ===

// Module 16378 (HomePanelContent)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1364 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5052 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11126 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16117 */;
import GuildsBarDefault from "GuildsBar" /* 16380 */;
import noop from "module_19" /* 19 */;
import HomeDrawerStore from "HomeDrawerStore" /* 16118 */;

require = fn;
function ContentMaskGradient(offsetX) {
  offsetX = offsetX.offsetX;
  const guildsBarPullX = offsetX(16117).useHomeDrawerState().guildsBarPullX;
  let obj = offsetX(16117);
  const fn = function n() {
    const obj = { transform: null };
    const obj2 = { translateX: roundToNearestPixelDefault(-offsetX - guildsBarPullX.get()) };
    const items = [obj2];
    obj.transform = items;
    return obj;
  };
  let obj2 = offsetX(4373);
  fn.__closure = { roundToNearestPixel: guildsBarPullX(11126), offsetX, guildsBarPullX };
  fn.__workletHash = 7539125302557;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { pointerEvents: "none", style: null, children: closure_9(guildsBarPullX(5206), { absolute: true, tall: true, wide: true, mix: true }) };
  let items = [absoluteFill.absoluteFill, animatedStyle];
  obj4.style = items;
  return closure_9(guildsBarPullX(4373).View, obj4);
}
function HomeDrawerPanelContent() {
  const sum = GUILD_ITEM_INSET_LEFT + ref(4338).useToken(panelTranslateX(576).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_11();
  let obj = ref(4338);
  const tmp = ref;
  const drawerOpen = ref(16122).useDrawerOpen();
  let obj2 = ref(16122);
  const doesLandOnHomeDrawer = ref(16117).useDoesLandOnHomeDrawer();
  ref = isClientThemeOrCustomThemeActive.useRef(null);
  let obj3 = ref(16117);
  const homeDrawerState = ref(16117).useHomeDrawerState();
  panelTranslateX = homeDrawerState.panelTranslateX;
  const tmp10 = HomeDrawerStore((maxX) => maxX.maxX);
  dependencyMap = tmp10;
  let obj4 = ref(16117);
  isClientThemeOrCustomThemeActive = ref(7977).useIsClientThemeOrCustomThemeActive();
  const obj5 = ref(7977);
  const token = ref(4338).useToken(panelTranslateX(576).colors.BACKGROUND_BASE_LOWEST);
  const obj6 = ref(4338);
  const token1 = ref(4338).useToken(panelTranslateX(576).colors.PANEL_BG);
  const obj7 = ref(4338);
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
  const obj8 = ref(4373);
  fn.__closure = { isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp10, interpolateColor: ref(4373).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 };
  fn.__workletHash = 11992338029652;
  fn.__initData = __initData2;
  const animatedStyle = obj8.useAnimatedStyle(fn);
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
  const obj9 = { isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp10, interpolateColor: ref(4373).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 };
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
  const obj10 = ref(4373);
  fn2.__closure = { interpolate: ref(4373).interpolate, panelTranslateX, INITIAL_OPEN_WIDTH: ref(16117).INITIAL_OPEN_WIDTH, Extrapolation: ref(4373).Extrapolation, isGradientTheme: isClientThemeOrCustomThemeActive, interpolateColor: ref(4373).interpolateColor, maxX: tmp10, baseLowest: token, panelBg: token1 };
  fn2.__workletHash = 380238951470;
  fn2.__initData = __initData3;
  const animatedStyle1 = obj10.useAnimatedStyle(fn2);
  const obj12 = { style: null, children: null };
  let items1 = [tmp5.container, animatedStyle];
  obj12.style = items1;
  const obj13 = { ref, style: null, children: null };
  let items2 = [drawerOpen ? tmp5.guildsListContainerGestured : tmp5.guildLisetContainerDefault, homeDrawerState.guildsBarDrawerStyle];
  obj13.style = items2;
  const items3 = [closure_9(panelTranslateX(16380), { enableHome: true }), , ];
  const obj14 = { style: null, pointerEvents: "none", collapsable: false, children: null };
  const items4 = [tmp5.contentMask, { left: sum }, animatedStyle1];
  obj14.style = items4;
  let tmp17Result = null;
  if (isClientThemeOrCustomThemeActive) {
    const obj15 = { offsetX: sum };
    tmp17Result = closure_9(ContentMaskGradient, obj15);
  }
  obj14.children = tmp17Result;
  items3[1] = closure_9(panelTranslateX(4373).View, obj14);
  let tmp17Result2 = null;
  if (doesLandOnHomeDrawer) {
    tmp17Result2 = closure_9(tmp(12027).TTIFirstContentfulPaint, { label: "home_drawer", checkFocusedScreen: "guilds" });
  }
  items3[2] = tmp17Result2;
  obj13.children = items3;
  obj12.children = closure_10(panelTranslateX(4373).View, obj13);
  return closure_9(panelTranslateX(4373).View, obj12);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const DM_WIDTH = fn(1074).DM_WIDTH;
const GUILD_ITEM_INSET_LEFT = fn(16379).GUILD_ITEM_INSET_LEFT;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4636);
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