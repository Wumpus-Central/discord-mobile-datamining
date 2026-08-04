// discord_app/modules/guilds_bar/native/GuildsBarSeparator.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let obj = { separator: null };
obj = { height: 1, marginTop: require("Themes").modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: require("Themes").modules.mobile.GUILD_BAR_ITEM_MARGIN, marginLeft: 12, marginRight: 12, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
let closure_6 = { code: "function GuildsBarSeparatorTsx1(){const{withSpring,guildItemSize,panelX,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{maxWidth:withSpring(Math.max(guildItemSize,panelX.get()+guildItemSize),HOME_DRAWER_FLING_PHYSICS)};}" };
const memoResult = importAllResult.memo(function GuildsBarSeparator() {
  let obj = token(3897);
  token = obj.useToken(panelX(712).modules.mobile.GUILD_BAR_ITEM_SIZE);
  panelX = importAllResult.useContext(token(14948).HomeDrawerStateContext).panelX;
  const tmp = callback();
  const fn = function l() {
    const obj = { maxWidth: null };
    const bound = Math.max(token, panelX.get() + token);
    obj[0] = token(outer1_2[7]).withSpring(bound, token(outer1_2[5]).HOME_DRAWER_FLING_PHYSICS);
    return obj;
  };
  obj = { withSpring: token(4603).withSpring, guildItemSize: token, panelX, HOME_DRAWER_FLING_PHYSICS: token(14948).HOME_DRAWER_FLING_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 1425261651828;
  fn.__initData = closure_6;
  const animatedStyle = token(4054).useAnimatedStyle(fn);
  const style = [tmp.separator, animatedStyle];
  return jsx(panelX(7684), { style });
});
const result = require("createCacheKey").fileFinishedImporting("modules/guilds_bar/native/GuildsBarSeparator.tsx");

export default memoResult;