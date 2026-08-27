// === Module 15852: GuildsBarFooterWrapper ===

// Module 15852 (GuildsBarFooterWrapper)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4165 */;
import setDefault from "set" /* 5958 */;
import context from "context" /* 15526 */;
import GUILD_ITEM_SIZE from "GUILD_ITEM_SIZE" /* 15788 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const GUILD_ITEM_HIT_SLOP = GUILD_ITEM_SIZE.GUILD_ITEM_HIT_SLOP;
const jsx = jsxProd.jsx;
let obj = { footerWrapper: null };
obj = { display: "flex", alignSelf: "stretch", alignItems: "center", gap: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_PADDING };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  let obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = callback();
  const isHomeDrawerEnabled = context.useIsHomeDrawerEnabled();
  const style = [tmp2.footerWrapper, ];
  let tmp6 = null;
  const obj2 = context;
  const tmp4 = jsx;
  if (!isHomeDrawerEnabled) {
    obj = { width: null };
    obj[0] = token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right;
    tmp6 = obj;
  }
  style[1] = tmp6;
  return tmp4(setDefault, { style, children: children.children });
};