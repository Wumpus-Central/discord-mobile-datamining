// === Module 16466: YouBarFloatingShade ===

// Module 16466 (YouBarFloatingShade)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import useToken from "useToken" /* 4308 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4425 */;
import useChatLayoutDefault from "useChatLayout" /* 4467 */;
import LinearGradientDefault from "LinearGradient" /* 5038 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 15158 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4426 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(15156).YOU_BAR_GRADIENT_EXTRA_HEIGHT;
const GUILD_LIST_WIDTH = fn(16353).GUILD_LIST_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4606);
let closure_10 = createStyles.createStyles({ container: { position: "absolute", bottom: 0, left: 0, right: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx");

export default noop.memo(function YouBarFloatingShade() {
  const tmp = closure_10();
  let obj = useYouBarTotalHeight;
  const youBarTotalHeight = obj.useYouBarTotalHeight();
  const sum = youBarTotalHeight + closure_5;
  let width = useWindowDimensionsDefault().width;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    width = tmp7 + GUILD_LIST_WIDTH;
  }
  let tmp2Result = client_themes_ClientThemesUtils;
  const gradientValue = tmp2Result.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  tmp2Result = useToken;
  const token = tmp2Result.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const tmp2Result1 = initialize;
  let token1 = null;
  if (null != stateFromStores) {
    token1 = tmp2Result2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
  }
  if (null == token1) {
    token1 = token;
    if (null != gradientValue) {
      token1 = gradientValue;
    }
  }
  tmp2Result2 = useToken;
  let str = utils_ColorUtils.hex2rgb(token1, 1);
  if (str == null) {
    str = "transparent";
  }
  const tmp2Result3 = utils_ColorUtils;
  let str2 = utils_ColorUtils.hex2rgb(token1, 0);
  if (str2 == null) {
    str2 = "transparent";
  }
  obj = { children: null };
  obj = { style: null, pointerEvents: "box-only" };
  const items1 = [tmp.container, { height: youBarTotalHeight, opacity: 0 }];
  obj.style = items1;
  const items2 = [React5(View, obj), , ];
  const obj1 = { style: null, colors: null, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1], pointerEvents: "none" };
  const items3 = [tmp.container, ];
  const size = { bottom: sum / 2, height: sum / 2, width };
  items3[1] = size;
  obj1.style = items3;
  const items4 = [str2, str];
  obj1.colors = items4;
  items2[1] = React5(LinearGradientDefault, obj1);
  const obj2 = { style: null };
  const items5 = [tmp.container, { width, height: sum / 2, backgroundColor: str }];
  obj2.style = items5;
  items2[2] = React5(View, obj2);
  obj.children = items2;
  return React7(React6, obj);
});