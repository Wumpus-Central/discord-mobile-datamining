// === Module 16395: YouBarFloatingShade ===

// Module 16395 (YouBarFloatingShade)
import initialize from "initialize" /* 504 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import useToken from "useToken" /* 4262 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 15100 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4379 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(15098).YOU_BAR_GRADIENT_EXTRA_HEIGHT;
const GUILD_LIST_WIDTH = fn(16285).GUILD_LIST_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { position: "absolute", bottom: 0, left: 0, right: 0 } });
const __initData = { code: "function YouBarFloatingShadeTsx1(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx");

export default noop.memo(function YouBarFloatingShade() {
  const tmp = closure_10();
  let obj = useYouBarTotalHeight;
  const youBarTotalHeight = obj.useYouBarTotalHeight();
  const sum = youBarTotalHeight + closure_5;
  require = sum;
  width = width(1477)().width;
  if (width(4420)().isChatBesideChannelList) {
    width = tmp7 + GUILD_LIST_WIDTH;
  }
  let tmp2Result = tmp2(4296);
  const fn = function t() {
    const size = { height: sum, opacity: 1, width };
    return size;
  };
  fn.__closure = { gradientHeight: sum, drawerWidth: width };
  fn.__workletHash = 7609004216185;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  tmp2Result = tmp2(4378);
  const gradientValue = tmp2Result.useGradientValue(tmp2(4378).GradientPercentage.END);
  const token = useToken.useToken(tmp6(576).colors.BACKGROUND_BASE_LOWER);
  const tmp2Result1 = useToken;
  const items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const tmp2Result2 = initialize;
  let token1 = null;
  if (null != stateFromStores) {
    token1 = tmp2Result3.useToken(tmp6(576).colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
  }
  if (null == token1) {
    token1 = token;
    if (null != gradientValue) {
      token1 = gradientValue;
    }
  }
  tmp2Result3 = useToken;
  let str = utils_ColorUtils.hex2rgb(token1, 1);
  if (str == null) {
    str = "transparent";
  }
  const tmp2Result4 = utils_ColorUtils;
  let str2 = utils_ColorUtils.hex2rgb(token1, 0);
  if (str2 == null) {
    str2 = "transparent";
  }
  obj = { children: null };
  obj = { style: null, pointerEvents: "box-only" };
  const items1 = [tmp.container, animatedStyle, { height: youBarTotalHeight, opacity: 0 }];
  obj.style = items1;
  const items2 = [closure_7(View, obj), , ];
  const obj1 = { style: null, colors: null, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1], pointerEvents: "none" };
  const items3 = [tmp.container, ];
  let size = { bottom: sum / 2, height: sum / 2, width };
  items3[1] = size;
  obj1.style = items3;
  const items4 = [str2, str];
  obj1.colors = items4;
  items2[1] = closure_7(width(4987), obj1);
  const obj2 = { style: null };
  const items5 = [tmp.container, { width, height: sum / 2, backgroundColor: str }];
  obj2.style = items5;
  items2[2] = closure_7(View, obj2);
  obj.children = items2;
  return closure_9(closure_8, obj);
});