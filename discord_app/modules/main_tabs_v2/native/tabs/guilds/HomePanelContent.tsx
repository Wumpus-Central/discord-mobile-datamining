// discord_app/modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import useHomeDrawerGesture from "../../../../home_drawer/native/useHomeDrawerGesture.tsx";
import GuildsBarDefault from "../../../../guilds_bar/native/GuildsBar.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import HomeDrawerStore from "../../../../home_drawer/native/HomeDrawerStore.tsx";

require = fn;
function HomeDrawerPanelContent() {
  const tmp = closure_7();
  let obj = panelTranslateX(isClientThemeOrCustomThemeActive[8]);
  const drawerOpen = obj.useDrawerOpen();
  let obj1 = panelTranslateX(isClientThemeOrCustomThemeActive[6]);
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
    require("native").colors.BACKGROUND_BASE_LOWEST,
  );
  const obj4 = panelTranslateX(isClientThemeOrCustomThemeActive[10]);
  const tmp7 = importDefault;
  token1 = panelTranslateX(isClientThemeOrCustomThemeActive[10]).useToken(require("native").colors.PANEL_BG);
  const obj5 = panelTranslateX(isClientThemeOrCustomThemeActive[10]);
  const fn = function t() {
    if (!isClientThemeOrCustomThemeActive) {
      if (closure_1 > 0) {
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
    maxX: tmp5,
    interpolateColor: panelTranslateX(isClientThemeOrCustomThemeActive[12]).interpolateColor,
    panelTranslateX,
    baseLowest: token,
    panelBg: token1,
  };
  fn.__closure = obj;
  fn.__workletHash = 10232644858711;
  fn.__initData = __initData;
  const animatedStyle = panelTranslateX(isClientThemeOrCustomThemeActive[12]).useAnimatedStyle(fn);
  obj = { style: null, children: null };
  let items = [tmp.container, animatedStyle];
  obj.style = items;
  obj1 = { style: null, children: tmp11(tmp7(tmp2[7]), { enableHome: true }) };
  let items1 = [
    drawerOpen ? tmp.guildsListContainerGestured : tmp.guildLisetContainerDefault,
    homeDrawerState.guildsBarDrawerStyle,
  ];
  obj1.style = items1;
  obj.children = jsx(require("ReanimatedRexport").View, {
    style: null,
    children: tmp11(tmp7(tmp2[7]), { enableHome: true }),
  });
  return jsx(require("ReanimatedRexport").View, { style: null, children: null });
}
const View = fn(17).View;
const DM_WIDTH = fn(1074).DM_WIDTH;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((width) => {
  let obj = { container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault: null };
  obj = { flex: 1, width };
  obj.guildLisetContainerDefault = obj;
  return obj;
});
const __initData = {
  code: "function HomePanelContentTsx1(){const{isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = noop.memo(() => {
  const tmp = closure_7(DM_WIDTH);
  let obj = useHomeDrawerGesture;
  if (obj.useIsHomeDrawerEnabled()) {
    let tmp3Result = tmp3(HomeDrawerPanelContent, {});
  } else {
    obj = { style: tmp.container, children: null };
    obj = { style: tmp.guildLisetContainerDefault, children: tmp3(GuildsBarDefault, {}) };
    obj.children = tmp3(View, obj);
    tmp3Result = tmp3(View, obj);
  }
  return tmp3Result;
});
