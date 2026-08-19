// discord_app/modules/guilds_bar/native/GuildsBarSeparator.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import obj132Default from "../../core/native/NativeView.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = fn;
function GuildsBarHomeDrawerSeparator(guildItemSize) {
  guildItemSize = guildItemSize.guildItemSize;
  let obj = guildItemSize(15288);
  const panelX = obj.useHomeDrawerState().panelX;
  const tmp = callback(guildItemSize);
  const fn = function n() {
    const obj = { maxWidth: null };
    const bound = Math.max(guildItemSize, panelX.get() + guildItemSize);
    obj[0] = guildItemSize(dependencyMap[6]).withSpring(bound, guildItemSize(dependencyMap[4]).HOME_DRAWER_FLING_PHYSICS);
    return obj;
  };
  obj = { withSpring: guildItemSize(4744).withSpring, guildItemSize, panelX, HOME_DRAWER_FLING_PHYSICS: guildItemSize(15288).HOME_DRAWER_FLING_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 1425261651828;
  fn.__initData = closure_5;
  const animatedStyle = guildItemSize(4115).useAnimatedStyle(fn);
  const style = [tmp.separator, animatedStyle];
  return jsx(panelX(8125), { style });
}
let closure_4 = createCacheKey.createStyles((maxWidth) => {
  const obj = { height: 1, maxWidth, marginTop: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginLeft: 12, marginRight: 12, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
  obj[0] = obj;
  return obj;
});
let closure_5 = { code: "function GuildsBarSeparatorTsx1(){const{withSpring,guildItemSize,panelX,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{maxWidth:withSpring(Math.max(guildItemSize,panelX.get()+guildItemSize),HOME_DRAWER_FLING_PHYSICS)};}" };
const memoResult = importAllResult.memo(function GuildsBarSeparator() {
  let obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp4 = callback(token);
  if (obj2.useIsHomeDrawerEnabled()) {
    obj = { guildItemSize: null };
    obj[0] = token;
    let tmp5Result = <GuildsBarHomeDrawerSeparator guildItemSize={null} />;
  } else {
    obj = { style: null };
    obj[0] = tmp4.separator;
    tmp5Result = jsx(obj132Default, { style: null });
  }
  return tmp5Result;
});
const result = require("obj132").fileFinishedImporting("modules/guilds_bar/native/GuildsBarSeparator.tsx");

export default memoResult;