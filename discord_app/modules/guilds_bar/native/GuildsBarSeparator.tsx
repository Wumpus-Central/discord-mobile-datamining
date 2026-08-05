// discord_app/modules/guilds_bar/native/GuildsBarSeparator.tsx
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";

const require = arg1;
function GuildsBarHomeDrawerSeparator(guildItemSize) {
  guildItemSize = guildItemSize.guildItemSize;
  let panelX;
  let obj = guildItemSize(15053);
  panelX = obj.useHomeDrawerState().panelX;
  const tmp = callback(guildItemSize);
  const fn = function n() {
    const obj = { maxWidth: null };
    const bound = Math.max(guildItemSize, panelX.get() + guildItemSize);
    obj[0] = guildItemSize(outer1_2[6]).withSpring(bound, guildItemSize(outer1_2[4]).HOME_DRAWER_FLING_PHYSICS);
    return obj;
  };
  obj = { withSpring: guildItemSize(4694).withSpring, guildItemSize, panelX, HOME_DRAWER_FLING_PHYSICS: guildItemSize(15053).HOME_DRAWER_FLING_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 1425261651828;
  fn.__initData = closure_5;
  const animatedStyle = guildItemSize(4146).useAnimatedStyle(fn);
  const style = [tmp.separator, animatedStyle];
  return jsx(panelX(7819), { style });
}
let closure_4 = createCacheKey.createStyles((maxWidth) => {
  let obj = { separator: null };
  obj = { height: 1, maxWidth, marginTop: Themes.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: Themes.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginLeft: 12, marginRight: 12, backgroundColor: Themes.colors.BORDER_SUBTLE };
  obj[0] = obj;
  return obj;
});
let closure_5 = { code: "function GuildsBarSeparatorTsx1(){const{withSpring,guildItemSize,panelX,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{maxWidth:withSpring(Math.max(guildItemSize,panelX.get()+guildItemSize),HOME_DRAWER_FLING_PHYSICS)};}" };
const memoResult = require("noop").memo(function GuildsBarSeparator() {
  let obj = map /* map */;
  const token = obj.useToken(Themes.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = importDefault;
  const tmp4 = callback(token);
  if (obj2.useIsHomeDrawerEnabled()) {
    obj = { guildItemSize: null };
    obj[0] = token;
    let tmp5Result = tmp5(GuildsBarHomeDrawerSeparator, obj);
  } else {
    obj = { style: null };
    obj[0] = tmp4.separator;
    tmp5Result = tmp5(tmp2(5663), obj);
  }
  return tmp5Result;
});
const result = require("createCacheKey").fileFinishedImporting("modules/guilds_bar/native/GuildsBarSeparator.tsx");

export default memoResult;