// discord_app/modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import int2hslRaw from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import useYouBarTotalHeight from "hooks/useYouBarTotalHeight.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import { YOU_BAR_GRADIENT_EXTRA_HEIGHT as closure_5 } from "YouBarConstants.tsx";
import { GUILD_LIST_WIDTH } from "../../../guilds_bar/native/GuildsBarConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { position: "absolute", bottom: 0, left: 0, right: 0 } });
let closure_11 = { code: "function YouBarFloatingShadeTsx1(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}" };
const memoResult = importAllResult.memo(function YouBarFloatingShade() {
  const tmp = callback3();
  let obj = useYouBarTotalHeight;
  const youBarTotalHeight = obj.useYouBarTotalHeight();
  const sum = youBarTotalHeight + closure_5;
  require = sum;
  width = width(1494)().width;
  if (width(4237)().isChatBesideChannelList) {
    width = tmp7 + GUILD_LIST_WIDTH;
  }
  let tmp2Result = tmp2(4120);
  const fn = function t() {
    return { height: closure_0, opacity: 1, width };
  };
  fn.__closure = { gradientHeight: sum, drawerWidth: width };
  fn.__workletHash = 7609004216185;
  fn.__initData = closure_11;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  tmp2Result = tmp2(4199);
  const gradientValue = tmp2Result.useGradientValue(tmp2(4199).GradientPercentage.END);
  const token = map.useToken(tmp6(712).colors.BACKGROUND_BASE_LOWER);
  const tmp2Result1 = map;
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const tmp2Result2 = initialize;
  let token1 = null;
  if (null != stateFromStores) {
    token1 = tmp2Result3.useToken(tmp6(712).colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
  }
  if (null == token1) {
    token1 = token;
    if (null != gradientValue) {
      token1 = gradientValue;
    }
  }
  tmp2Result3 = map;
  let str = int2hslRaw.hex2rgb(token1, 1);
  if (str == null) {
    str = "transparent";
  }
  const tmp2Result4 = int2hslRaw;
  let str2 = int2hslRaw.hex2rgb(token1, 0);
  if (str2 == null) {
    str2 = "transparent";
  }
  obj = { children: null };
  const items1 = [tmp.container, animatedStyle, { height: youBarTotalHeight, opacity: 0 }];
  const items2 = [callback(View, { style: items1, pointerEvents: "box-only" }), , ];
  const items3 = [tmp.container, ];
  obj = { bottom: sum / 2, height: sum / 2, width };
  items3[1] = obj;
  const items4 = [str2, str];
  items2[1] = callback(width(4826), { style: items3, colors: items4, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1], pointerEvents: "none" });
  const items5 = [tmp.container, { width, height: sum / 2, backgroundColor: str }];
  items2[2] = callback(View, { style: items5 });
  obj[0] = items2;
  return callback2(closure_8, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx");

export default memoResult;