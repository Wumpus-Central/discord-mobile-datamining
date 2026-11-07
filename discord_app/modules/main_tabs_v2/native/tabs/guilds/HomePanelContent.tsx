// === Module 18678: HomePanelContent ===

// Module 18678 (HomePanelContent)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 6153 */;
import ThemedGradientDefault from "ThemedGradient" /* 10855 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12614 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18404 */;
import GuildsBarDefault from "GuildsBar" /* 18680 */;
import noop from "module_19" /* 19 */;
import HomeDrawerStore from "HomeDrawerStore" /* 18398 */;

const _modDef1652 = _mod1652;

require = fn;
function ContentMaskGradient(offsetX) {
  let obj = useHomeDrawerGesture;
  items = [closure_12, roundToNearestPixelDefault, offsetX.offsetX, obj.useHomeDrawerState().guildsBarPullX];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp3, tmp4, tmp5, tmp6] = items;
  class HomePanelContentTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: null };
      tmp = -closure_1;
      obj1.translateX = closure_0(tmp - closure_2.get());
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp4, tmp5, tmp6];
  HomePanelContentTsx1.__closure = items1;
  HomePanelContentTsx1.__workletHash = 2135715759940;
  HomePanelContentTsx1.__initData = tmp3;
  const animatedStyle = _mod1652.useAnimatedStyle(HomePanelContentTsx1);
  const obj3 = { pointerEvents: "none", style: null, children: null };
  const items2 = [absoluteFill.absoluteFill, animatedStyle];
  obj3.style = items2;
  obj3.children = React6(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: true, componentStyles: { height: useWindowDimensionsDefault({ ignoreKeyboard: true }).height } });
  return React6(_modDef1652.View, obj3);
}
function HomeDrawerPanelContent() {
  const tmp2 = closure_11();
  const drawerOpen = require("useDrawerState").useDrawerOpen();
  let obj = require("useDrawerState");
  const doesLandOnHomeDrawer = require("useHomeDrawerGesture").useDoesLandOnHomeDrawer();
  const ref = noop.useRef(null);
  _require = ref;
  let obj2 = require("useHomeDrawerGesture");
  const homeDrawerState = require("useHomeDrawerGesture").useHomeDrawerState();
  const panelTranslateX = homeDrawerState.panelTranslateX;
  const tmp9 = HomeDrawerStore((maxX) => maxX.maxX);
  const obj4 = require("useHomeDrawerGesture");
  const isClientThemeOrCustomThemeActive = require("useActiveTheme").useIsClientThemeOrCustomThemeActive();
  const obj5 = require("useActiveTheme");
  const token = require("useToken").useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const obj6 = require("useToken");
  const token1 = require("useToken").useToken(nativeDefault.colors.PANEL_BG);
  const obj7 = require("useToken");
  items = [closure_14, isClientThemeOrCustomThemeActive, tmp9, require("module_1652").interpolateColor, panelTranslateX, token, token1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items;
  class HomePanelContentTsx2 {
    constructor() {
      if (!closure_0) {
        num = 0;
        if (closure_1 > 0) {
          obj = { backgroundColor: null };
          tmp2 = closure_2;
          tmp3 = closure_3;
          items = [0];
          items[1] = tmp;
          tmp4 = closure_4;
          items1 = [, ];
          items1[0] = closure_4;
          tmp5 = closure_5;
          items1[1] = closure_5;
          obj.backgroundColor = closure_2(closure_3.get(), items, items1);
        }
        return obj;
      }
      obj = { backgroundColor: "transparent" };
      return;
    }
  }
  let items1 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  HomePanelContentTsx2.__closure = items1;
  HomePanelContentTsx2.__workletHash = 7998740320749;
  HomePanelContentTsx2.__initData = tmp14;
  const animatedStyle = require("module_1652").useAnimatedStyle(HomePanelContentTsx2);
  obj3.useRef(false);
  let items2 = [drawerOpen];
  const effect = obj3.useEffect(() => {
    if (obj.isIOS()) {
      if (_undefined.current) {
        const obj2 = { ref, delay: 100 };
        const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
        const tmpResult = setAccessibilityFocus;
      } else {
        tmp3.current = true;
      }
    }
    obj = utils_PlatformUtils;
  }, items2);
  const obj8 = require("module_1652");
  const items3 = [closure_15, require("module_1652").interpolate, panelTranslateX, require("useHomeDrawerGesture").INITIAL_OPEN_WIDTH, require("module_1652").Extrapolation, isClientThemeOrCustomThemeActive, require("module_1652").interpolateColor, tmp9, token, token1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  HomeDrawerStore = undefined;
  c7 = undefined;
  left = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items3;
  class HomePanelContentTsx3 {
    constructor() {
      obj = closure_1;
      items = [0];
      items[1] = closure_2;
      tmp = closure_0(closure_1.get(), items, [1, 0], closure_3.CLAMP);
      if (closure_4) {
        obj1 = { backgroundColor: "transparent", opacity: null };
        obj1.opacity = tmp;
        obj4 = obj1;
      } else {
        obj4 = { backgroundColor: null, opacity: null };
        tmp2 = closure_5;
        tmp3 = closure_6;
        items1 = [0];
        items1[1] = closure_6;
        tmp4 = closure_7;
        items2 = [, ];
        items2[0] = closure_7;
        tmp5 = closure_8;
        items2[1] = closure_8;
        obj4.backgroundColor = closure_5(obj.get(), items1, items2);
        obj4.opacity = tmp;
      }
      return obj4;
    }
  }
  const items4 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
  HomePanelContentTsx3.__closure = items4;
  HomePanelContentTsx3.__workletHash = 9398673657751;
  HomePanelContentTsx3.__initData = tmp23;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(HomePanelContentTsx3);
  const obj9 = { style: null, children: null };
  const items5 = [tmp2.container, animatedStyle];
  obj9.style = items5;
  const obj10 = { ref, style: null, children: null };
  const items6 = [drawerOpen ? tmp2.guildsListContainerGestured : tmp2.guildLisetContainerDefault, homeDrawerState.guildsBarDrawerStyle];
  obj10.style = items6;
  const items7 = [closure_9(GuildsBarDefault, { enableHome: true }), , ];
  const obj11 = { style: null, pointerEvents: "none", collapsable: false, children: null };
  const items8 = [tmp2.contentMask, { left }, animatedStyle1];
  obj11.style = items8;
  let tmp34Result = null;
  if (isClientThemeOrCustomThemeActive) {
    const obj12 = { offsetX: tmp };
    tmp34Result = closure_9(ContentMaskGradient, obj12);
  }
  obj11.children = tmp34Result;
  items7[1] = closure_9(_modDef1652.View, obj11);
  let tmp34Result2 = null;
  if (doesLandOnHomeDrawer) {
    tmp34Result2 = closure_9(tmp11(18772), {});
  }
  items7[2] = tmp34Result2;
  obj10.children = items7;
  obj9.children = closure_10(_modDef1652.View, obj10);
  return closure_9(_modDef1652.View, obj9);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const DM_WIDTH = fn(1072).DM_WIDTH;
const GUILD_LIST_WIDTH = fn(18679).GUILD_LIST_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5140);
let closure_11 = createStyles.createStyles((width) => {
  const obj = { container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault: { flex: 1, width }, contentMask: { position: "absolute", top: 0, bottom: 0, right: 0, overflow: "hidden" } };
  return obj;
});
let closure_12 = { code: "(function HomePanelContentTsx1(){let[roundToNearestPixel,offsetX,guildsBarPullX]=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-guildsBarPullX.get())}]};})" };
let closure_14 = { code: "(function HomePanelContentTsx2(){let[isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg]=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};})" };
let closure_15 = { code: "(function HomePanelContentTsx3(){let[interpolate,panelTranslateX,INITIAL_OPEN_WIDTH,Extrapolation,isGradientTheme,interpolateColor,maxX,baseLowest,panelBg]=this.__closure;const opacity=interpolate(panelTranslateX.get(),[0,INITIAL_OPEN_WIDTH],[1,0],Extrapolation.CLAMP);if(isGradientTheme){return{backgroundColor:'transparent',opacity:opacity};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg]),opacity:opacity};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = noop.memo(function HomePanelContent() {
  const tmp = closure_11(DM_WIDTH);
  if (obj.useIsHomeDrawerEnabled()) {
    let tmp3Result = React6(HomeDrawerPanelContent, {});
  } else {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { style: tmp.guildLisetContainerDefault, children: React6(GuildsBarDefault, {}) };
    obj2.children = React6(hasOwnProperty, obj3);
    tmp3Result = React6(hasOwnProperty, obj2);
  }
  return tmp3Result;
});