// discord_app/modules/guilds_bar/native/GuildsBarSeparator.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import setDefault from "../../core/native/NativeView.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = arg1;
function GuildsBarHomeDrawerSeparator(guildItemSize) {
  guildItemSize = guildItemSize.guildItemSize;
  let panelTranslateX;
  const tmp = callback(guildItemSize);
  panelTranslateX = guildItemSize(16022).useHomeDrawerState().panelTranslateX;
  let obj = guildItemSize(16022);
  const fn = function n() {
    let obj = { transform: null };
    obj = { scaleX: Math.max(1, (panelTranslateX.get() + guildItemSize) / guildItemSize) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn.__closure = { panelTranslateX, guildItemSize };
  fn.__workletHash = 7666765056610;
  fn.__initData = closure_5;
  const animatedStyle = guildItemSize(4296).useAnimatedStyle(fn);
  const style = [tmp.separator, animatedStyle];
  return jsx(panelTranslateX(7073), { style });
}
let closure_4 = createCacheKey.createStyles((width) => {
  let obj = { separator: null };
  obj = {
    height: 1,
    width,
    marginTop: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN,
    marginBottom: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
    transformOrigin: "0% 50%",
  };
  obj[0] = obj;
  return obj;
});
let closure_5 = {
  code: "function GuildsBarSeparatorTsx1(){const{panelTranslateX,guildItemSize}=this.__closure;return{transform:[{scaleX:Math.max(1,(panelTranslateX.get()+guildItemSize)/guildItemSize)}]};}",
};
const memoResult = importAllResult.memo(function GuildsBarSeparator() {
  let obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = importDefault;
  const tmp4 = callback(token);
  if (obj2.useIsHomeDrawerEnabled()) {
    obj = { guildItemSize: null };
    obj[0] = token;
    let tmp5Result = tmp5(GuildsBarHomeDrawerSeparator, obj);
  } else {
    obj = { style: null };
    obj[0] = tmp4.separator;
    tmp5Result = tmp5(setDefault, obj);
  }
  return tmp5Result;
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarSeparator.tsx");

export default memoResult;
