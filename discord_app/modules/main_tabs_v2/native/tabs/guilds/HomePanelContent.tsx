// discord_app/modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import setAccessibilityFocus from "../../../../a11y/native/setAccessibilityFocus.android.tsx";
import roundToNearestPixelDefault from "../../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import useHomeDrawerGesture from "../../../../home_drawer/native/useHomeDrawerGesture.tsx";
import GuildsBarDefault from "../../../../guilds_bar/native/GuildsBar.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import HomeDrawerStore from "../../../../home_drawer/native/HomeDrawerStore.tsx";

require = fn;
function ContentMaskGradient(offsetX) {
  offsetX = offsetX.offsetX;
  let obj = offsetX(16102);
  const guildsBarPullX = obj.useHomeDrawerState().guildsBarPullX;
  const fn = function n() {
    let obj = { transform: null };
    obj = { translateX: roundToNearestPixelDefault(-offsetX - guildsBarPullX.get()) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { roundToNearestPixel: guildsBarPullX(11065), offsetX, guildsBarPullX };
  fn.__closure = obj;
  fn.__workletHash = 7539125302557;
  fn.__initData = __initData;
  const animatedStyle = offsetX(4341).useAnimatedStyle(fn);
  obj = {
    pointerEvents: "none",
    style: null,
    children: closure_9(guildsBarPullX(5175), { absolute: true, tall: true, wide: true, mix: true }),
  };
  let items = [absoluteFill.absoluteFill, animatedStyle];
  obj.style = items;
  return closure_9(guildsBarPullX(4341).View, obj);
}
function HomeDrawerPanelContent() {
  let obj = ref(4306);
  const sum = GUILD_ITEM_INSET_LEFT + obj.useToken(panelTranslateX(576).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_11();
  let obj1 = ref(16107);
  const drawerOpen = obj1.useDrawerOpen();
  let obj2 = ref(16102);
  const doesLandOnHomeDrawer = obj2.useDoesLandOnHomeDrawer();
  ref = isClientThemeOrCustomThemeActive.useRef(null);
  let obj3 = ref(16102);
  const homeDrawerState = obj3.useHomeDrawerState();
  panelTranslateX = homeDrawerState.panelTranslateX;
  const tmp10 = HomeDrawerStore((maxX) => maxX.maxX);
  dependencyMap = tmp10;
  let obj4 = ref(7925);
  isClientThemeOrCustomThemeActive = obj4.useIsClientThemeOrCustomThemeActive();
  const token = ref(4306).useToken(panelTranslateX(576).colors.BACKGROUND_BASE_LOWEST);
  const obj6 = ref(4306);
  const tmp = ref;
  const token1 = ref(4306).useToken(panelTranslateX(576).colors.PANEL_BG);
  const obj7 = ref(4306);
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
  obj = {
    isGradientTheme: isClientThemeOrCustomThemeActive,
    maxX: tmp10,
    interpolateColor: ref(4341).interpolateColor,
    panelTranslateX,
    baseLowest: token,
    panelBg: token1,
  };
  fn.__closure = obj;
  fn.__workletHash = 11992338029652;
  fn.__initData = __initData2;
  const animatedStyle = ref(4341).useAnimatedStyle(fn);
  HomeDrawerStore = isClientThemeOrCustomThemeActive.useRef(false);
  let items = [drawerOpen];
  const effect = isClientThemeOrCustomThemeActive.useEffect(() => {
    let obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      if (ref.current) {
        obj = { ref, delay: 100 };
        const result = setAccessibilityFocus.setAccessibilityFocus(obj);
        const tmpResult = setAccessibilityFocus;
      } else {
        tmp3.current = true;
      }
    }
  }, items);
  const obj8 = ref(4341);
  const fn2 = function k() {
    let obj = ReanimatedRexport;
    value = panelTranslateX.get();
    const items = [0, useHomeDrawerGesture.INITIAL_OPEN_WIDTH];
    const interpolateResult = obj.interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP);
    if (isClientThemeOrCustomThemeActive) {
      obj = { backgroundColor: "transparent", opacity: interpolateResult };
    } else {
      obj = { backgroundColor: null, opacity: null };
      const items1 = [0, closure_2];
      const items2 = [token, token1];
      obj.backgroundColor = ReanimatedRexport.interpolateColor(panelTranslateX.get(), items1, items2);
      obj.opacity = interpolateResult;
      const tmpResult = ReanimatedRexport;
    }
    return obj;
  };
  obj = {
    interpolate: ref(4341).interpolate,
    panelTranslateX,
    INITIAL_OPEN_WIDTH: ref(16102).INITIAL_OPEN_WIDTH,
    Extrapolation: ref(4341).Extrapolation,
    isGradientTheme: isClientThemeOrCustomThemeActive,
    interpolateColor: ref(4341).interpolateColor,
    maxX: tmp10,
    baseLowest: token,
    panelBg: token1,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 380238951470;
  fn2.__initData = __initData3;
  const animatedStyle1 = ref(4341).useAnimatedStyle(fn2);
  obj1 = { style: null, children: null };
  let items1 = [tmp5.container, animatedStyle];
  obj1.style = items1;
  obj2 = { ref, style: null, children: null };
  let items2 = [
    drawerOpen ? tmp5.guildsListContainerGestured : tmp5.guildLisetContainerDefault,
    homeDrawerState.guildsBarDrawerStyle,
  ];
  obj2.style = items2;
  const items3 = [closure_9(panelTranslateX(16365), { enableHome: true }), ,];
  obj3 = { style: null, pointerEvents: "none", collapsable: false, children: null };
  const items4 = [tmp5.contentMask, { left: sum }, animatedStyle1];
  obj3.style = items4;
  let tmp17Result = null;
  if (isClientThemeOrCustomThemeActive) {
    obj4 = { offsetX: sum };
    tmp17Result = closure_9(ContentMaskGradient, obj4);
  }
  obj3.children = tmp17Result;
  items3[1] = closure_9(panelTranslateX(4341).View, obj3);
  tmp17Result = null;
  if (doesLandOnHomeDrawer) {
    tmp17Result = closure_9(tmp(11967).TTIFirstContentfulPaint, { label: "home_drawer", checkFocusedScreen: "guilds" });
  }
  items3[2] = tmp17Result;
  obj2.children = items3;
  obj1.children = closure_10(panelTranslateX(4341).View, obj2);
  return closure_9(panelTranslateX(4341).View, obj1);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const DM_WIDTH = fn(1074).DM_WIDTH;
const GUILD_ITEM_INSET_LEFT = fn(16364).GUILD_ITEM_INSET_LEFT;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4605);
let closure_11 = createStyles.createStyles((width) => {
  let obj = {
    container: { flex: 1 },
    guildsListContainerGestured: { flex: 1 },
    guildLisetContainerDefault: null,
    contentMask: { position: "absolute", top: 0, bottom: 0, right: 0, overflow: "hidden" },
  };
  obj = { flex: 1, width };
  obj.guildLisetContainerDefault = obj;
  return obj;
});
const __initData = {
  code: "function HomePanelContentTsx1(){const{roundToNearestPixel,offsetX,guildsBarPullX}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-guildsBarPullX.get())}]};}",
};
const __initData2 = {
  code: "function HomePanelContentTsx2(){const{isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}",
};
const __initData3 = {
  code: "function HomePanelContentTsx3(){const{interpolate,panelTranslateX,INITIAL_OPEN_WIDTH,Extrapolation,isGradientTheme,interpolateColor,maxX,baseLowest,panelBg}=this.__closure;const opacity=interpolate(panelTranslateX.get(),[0,INITIAL_OPEN_WIDTH],[1,0],Extrapolation.CLAMP);if(isGradientTheme){return{backgroundColor:'transparent',opacity:opacity};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg]),opacity:opacity};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = noop.memo(() => {
  const tmp = closure_11(DM_WIDTH);
  let obj = useHomeDrawerGesture;
  if (obj.useIsHomeDrawerEnabled()) {
    let tmp3Result = React7(HomeDrawerPanelContent, {});
  } else {
    obj = { style: tmp.container, children: null };
    obj = { style: tmp.guildLisetContainerDefault, children: React7(GuildsBarDefault, {}) };
    obj.children = React7(hasOwnProperty, obj);
    tmp3Result = React7(hasOwnProperty, obj);
  }
  return tmp3Result;
});
