// discord_app/modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx
import { View } from "LinearGradient";
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import { YOU_BAR_GRADIENT_EXTRA_HEIGHT as closure_5 } from "CONNECTION_BANNER_HEIGHT";
import { GUILD_LIST_WIDTH } from "GUILD_ITEM_SIZE";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c9;
let error;
let metroImportAll;
let require = arg1;
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { position: "absolute", bottom: 0, left: 0, right: 0 } });
let closure_11 = { code: "function YouBarFloatingShadeTsx1(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}" };
const memoResult = require("noop").memo(function YouBarFloatingShade() {
  const tmp = callback3();
  let obj = require(14245) /* useYouBarTotalHeight */;
  const youBarTotalHeight = obj.useYouBarTotalHeight();
  const sum = youBarTotalHeight + closure_5;
  require = sum;
  width = width(1474)().width;
  if (width(4139)().isChatBesideChannelList) {
    width = tmp7 + GUILD_LIST_WIDTH;
  }
  let tmp2Result = tmp2(4146);
  const fn = function t() {
    return { height: closure_0, opacity: 1, width };
  };
  fn.__closure = { gradientHeight: sum, drawerWidth: width };
  fn.__workletHash = 7609004216185;
  fn.__initData = closure_11;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  tmp2Result = tmp2(4096);
  const gradientValue = tmp2Result.useGradientValue(tmp2(4096).GradientPercentage.END);
  const token = require(3989) /* map */.useToken(tmp6(712).colors.BACKGROUND_BASE_LOWER);
  const tmp2Result1 = require(3989) /* map */;
  const items = [isSyncedModeThemesEnabled];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const tmp2Result2 = require(589) /* initialize */;
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
  tmp2Result3 = require(3989) /* map */;
  let str = require(688) /* int2hslRaw */.hex2rgb(token1, 1);
  if (str == null) {
    str = "transparent";
  }
  const tmp2Result4 = require(688) /* int2hslRaw */;
  let str2 = require(688) /* int2hslRaw */.hex2rgb(token1, 0);
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
  items2[1] = callback(width(4706), { style: items3, colors: items4, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1], pointerEvents: "none" });
  const items5 = [tmp.container, { width, height: sum / 2, backgroundColor: str }];
  items2[2] = callback(View, { style: items5 });
  obj[0] = items2;
  return callback2(closure_8, obj);
});
const result = require("isSyncedModeThemesEnabled").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx");

export default memoResult;