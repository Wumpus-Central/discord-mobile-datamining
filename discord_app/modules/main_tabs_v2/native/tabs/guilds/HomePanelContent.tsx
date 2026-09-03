// === Module 16119: HomeDrawerPanelContent ===

// Module 16119 (HomeDrawerPanelContent)
import context from "context" /* 15861 */;
import _modDef16120 from "module_16120" /* 16120 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "withEqualityFn" /* 15862 */;
import { DM_WIDTH } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
function HomeDrawerPanelContent() {
  const tmp = callback();
  let obj = panelSpringTranslateX(isClientThemeOrCustomThemeActive[8]);
  const drawerOpen = obj.useDrawerOpen();
  obj1 = panelSpringTranslateX(isClientThemeOrCustomThemeActive[6]);
  panelSpringTranslateX = obj1.useHomeDrawerState().panelSpringTranslateX;
  const tmp4 = token1((maxX) => maxX.maxX);
  importDefault = tmp4;
  isClientThemeOrCustomThemeActive = panelSpringTranslateX(isClientThemeOrCustomThemeActive[9]).useIsClientThemeOrCustomThemeActive();
  const obj3 = panelSpringTranslateX(isClientThemeOrCustomThemeActive[9]);
  const tmp2 = isClientThemeOrCustomThemeActive;
  const token = panelSpringTranslateX(isClientThemeOrCustomThemeActive[10]).useToken(importDefault(isClientThemeOrCustomThemeActive[11]).colors.BACKGROUND_BASE_LOWEST);
  const obj4 = panelSpringTranslateX(isClientThemeOrCustomThemeActive[10]);
  const tmp6 = importDefault;
  token1 = panelSpringTranslateX(isClientThemeOrCustomThemeActive[10]).useToken(importDefault(isClientThemeOrCustomThemeActive[11]).colors.PANEL_BG);
  const obj5 = panelSpringTranslateX(isClientThemeOrCustomThemeActive[10]);
  const fn = function n() {
    if (!isClientThemeOrCustomThemeActive) {
      if (closure_1 > 0) {
        let obj = { backgroundColor: null };
        const items = [0, tmp];
        const items1 = [token, token1];
        obj[0] = panelSpringTranslateX(isClientThemeOrCustomThemeActive[12]).interpolateColor(panelSpringTranslateX.get(), items, items1);
        const obj2 = panelSpringTranslateX(isClientThemeOrCustomThemeActive[12]);
      }
      return obj;
    }
    obj = { backgroundColor: "transparent" };
  };
  obj = { isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp4, interpolateColor: panelSpringTranslateX(isClientThemeOrCustomThemeActive[12]).interpolateColor, panelSpringTranslateX, baseLowest: token, panelBg: token1 };
  fn.__closure = obj;
  fn.__workletHash = 7613917810359;
  fn.__initData = closure_8;
  const animatedStyle = panelSpringTranslateX(isClientThemeOrCustomThemeActive[12]).useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [tmp.container, animatedStyle];
  obj1 = { style: drawerOpen ? tmp.guildsListContainerGestured : tmp.guildLisetContainerDefault, children: tmp10(tmp6(tmp2[7]), { enableHome: true }) };
  obj[1] = <token style={drawerOpen ? tmp.guildsListContainerGestured : tmp.guildLisetContainerDefault}>{tmp10(tmp6(tmp2[7]), { enableHome: true })}</token>;
  return jsx(importDefault(isClientThemeOrCustomThemeActive[12]).View, { style: items, children: null });
}
let closure_7 = createCacheKey.createStyles((width) => {
  const guildLisetContainerDefault = { flex: 1, width };
  return { container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault };
});
let closure_8 = { code: "function HomePanelContentTsx1(){const{isGradientTheme,maxX,interpolateColor,panelSpringTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelSpringTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}" };
const memoResult = importAllResult.memo(() => {
  const tmp = callback(DM_WIDTH);
  let obj = context;
  if (obj.useIsHomeDrawerEnabled()) {
    let tmp3Result = tmp3(HomeDrawerPanelContent, {});
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.guildLisetContainerDefault;
    obj[1] = tmp3(_modDef16120, {});
    obj[1] = tmp3(View, obj);
    tmp3Result = tmp3(View, obj);
  }
  return tmp3Result;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = memoResult;