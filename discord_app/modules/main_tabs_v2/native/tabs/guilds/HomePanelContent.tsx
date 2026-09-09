// === Module 16314: HomePanelContent ===

// Module 16314 (HomePanelContent)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 4985 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16055 */;
import GuildsBarDefault from "GuildsBar" /* 16315 */;
import noop from "module_19" /* 19 */;
import HomeDrawerStore from "HomeDrawerStore" /* 16056 */;

require = fn;
function HomeDrawerPanelContent() {
  const tmp = closure_8();
  let obj = ref(16060);
  const drawerOpen = obj.useDrawerOpen();
  ref = isClientThemeOrCustomThemeActive.useRef(null);
  let obj1 = ref(16055);
  const homeDrawerState = obj1.useHomeDrawerState();
  const panelTranslateX = homeDrawerState.panelTranslateX;
  const tmp6 = token1((maxX) => maxX.maxX);
  dependencyMap = tmp6;
  isClientThemeOrCustomThemeActive = ref(7888).useIsClientThemeOrCustomThemeActive();
  const obj3 = ref(7888);
  const token = ref(4275).useToken(panelTranslateX(576).colors.BACKGROUND_BASE_LOWEST);
  const obj4 = ref(4275);
  const tmp8 = panelTranslateX;
  token1 = ref(4275).useToken(panelTranslateX(576).colors.PANEL_BG);
  const obj5 = ref(4275);
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
  obj = { isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp6, interpolateColor: ref(4310).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 };
  fn.__closure = obj;
  fn.__workletHash = 10232644858711;
  fn.__initData = __initData;
  const animatedStyle = ref(4310).useAnimatedStyle(fn);
  ref = isClientThemeOrCustomThemeActive.useRef(false);
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
  obj = { style: null, children: null };
  let items1 = [tmp.container, animatedStyle];
  obj.style = items1;
  obj1 = { ref, style: null, children: jsx(tmp8(16315), { enableHome: true }) };
  const items2 = [drawerOpen ? tmp.guildsListContainerGestured : tmp.guildLisetContainerDefault, homeDrawerState.guildsBarDrawerStyle];
  obj1.style = items2;
  obj.children = jsx(panelTranslateX(4310).View, { ref, style: null, children: jsx(tmp8(16315), { enableHome: true }) });
  return jsx(panelTranslateX(4310).View, { style: null, children: null });
}
const View = fn(17).View;
const DM_WIDTH = fn(1074).DM_WIDTH;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let closure_8 = createStyles.createStyles((width) => {
  let obj = { container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault: null };
  obj = { flex: 1, width };
  obj.guildLisetContainerDefault = obj;
  return obj;
});
const __initData = { code: "function HomePanelContentTsx1(){const{isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = noop.memo(() => {
  const tmp = closure_8(DM_WIDTH);
  let obj = useHomeDrawerGesture;
  if (obj.useIsHomeDrawerEnabled()) {
    let tmp3Result = <HomeDrawerPanelContent />;
  } else {
    obj = { style: tmp.container, children: null };
    obj = { style: tmp.guildLisetContainerDefault, children: jsx(GuildsBarDefault, {}) };
    obj.children = <View style={tmp.guildLisetContainerDefault}>{jsx(GuildsBarDefault, {})}</View>;
    tmp3Result = <View style={tmp.guildLisetContainerDefault}>{jsx(GuildsBarDefault, {})}</View>;
  }
  return tmp3Result;
});