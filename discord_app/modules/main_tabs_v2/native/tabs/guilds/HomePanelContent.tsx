// discord_app/modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx
import context from "../../../../home_drawer/native/useHomeDrawerGesture.tsx";
import _modDef16282 from "../../../../guilds_bar/native/GuildsBar.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../home_drawer/native/HomeDrawerStore.tsx";
import { DM_WIDTH } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = arg1;
function HomeDrawerPanelContent() {
  const tmp = callback();
  let obj = panelTranslateX(isClientThemeOrCustomThemeActive[8]);
  const drawerOpen = obj.useDrawerOpen();
  obj1 = panelTranslateX(isClientThemeOrCustomThemeActive[6]);
  const homeDrawerState = obj1.useHomeDrawerState();
  panelTranslateX = homeDrawerState.panelTranslateX;
  const tmp5 = token1((maxX) => maxX.maxX);
  importDefault = tmp5;
  isClientThemeOrCustomThemeActive = panelTranslateX(
    isClientThemeOrCustomThemeActive[9],
  ).useIsClientThemeOrCustomThemeActive();
  const obj3 = panelTranslateX(isClientThemeOrCustomThemeActive[9]);
  const tmp2 = isClientThemeOrCustomThemeActive;
  const token = panelTranslateX(isClientThemeOrCustomThemeActive[10]).useToken(
    importDefault(isClientThemeOrCustomThemeActive[11]).colors.BACKGROUND_BASE_LOWEST,
  );
  const obj4 = panelTranslateX(isClientThemeOrCustomThemeActive[10]);
  const tmp7 = importDefault;
  token1 = panelTranslateX(isClientThemeOrCustomThemeActive[10]).useToken(
    importDefault(isClientThemeOrCustomThemeActive[11]).colors.PANEL_BG,
  );
  const obj5 = panelTranslateX(isClientThemeOrCustomThemeActive[10]);
  const fn = function t() {
    if (!isClientThemeOrCustomThemeActive) {
      if (closure_1 > 0) {
        let obj = { backgroundColor: null };
        const items = [0, tmp];
        const items1 = [token, token1];
        obj[0] = panelTranslateX(isClientThemeOrCustomThemeActive[12]).interpolateColor(
          panelTranslateX.get(),
          items,
          items1,
        );
        const obj2 = panelTranslateX(isClientThemeOrCustomThemeActive[12]);
      }
      return obj;
    }
    obj = { backgroundColor: "transparent" };
  };
  obj = {
    isGradientTheme: isClientThemeOrCustomThemeActive,
    maxX: tmp5,
    interpolateColor: panelTranslateX(isClientThemeOrCustomThemeActive[12]).interpolateColor,
    panelTranslateX,
    baseLowest: token,
    panelBg: token1,
  };
  fn.__closure = obj;
  fn.__workletHash = 10232644858711;
  fn.__initData = closure_8;
  const animatedStyle = panelTranslateX(isClientThemeOrCustomThemeActive[12]).useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [tmp.container, animatedStyle];
  obj1 = { style: items1, children: tmp11(tmp7(tmp2[7]), { enableHome: true }) };
  items1 = [
    drawerOpen ? tmp.guildsListContainerGestured : tmp.guildLisetContainerDefault,
    homeDrawerState.guildsBarDrawerStyle,
  ];
  obj[1] = jsx(importDefault(isClientThemeOrCustomThemeActive[12]).View, {
    style: items1,
    children: tmp11(tmp7(tmp2[7]), { enableHome: true }),
  });
  return jsx(importDefault(isClientThemeOrCustomThemeActive[12]).View, { style: items, children: null });
}
let closure_7 = createCacheKey.createStyles((width) => {
  const guildLisetContainerDefault = { flex: 1, width };
  return { container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault };
});
let closure_8 = {
  code: "function HomePanelContentTsx1(){const{isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}",
};
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
    obj[1] = tmp3(_modDef16282, {});
    obj[1] = tmp3(View, obj);
    tmp3Result = tmp3(View, obj);
  }
  return tmp3Result;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = memoResult;
