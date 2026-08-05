// discord_app/modules/guilds_bar/native/GuildsBarFooterWrapper.tsx
import { GUILD_ITEM_HIT_SLOP } from "GUILD_ITEM_SIZE";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { footerWrapper: null };
obj = { display: "flex", alignSelf: "stretch", alignItems: "center", gap: require("Themes").modules.mobile.GUILD_BAR_ITEM_PADDING };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  let obj = require("../../../design/tokens/native/useToken.tsx") /* map */;
  const token = obj.useToken(require("../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = callback();
  const isHomeDrawerEnabled = require("../../home_drawer/native/useHomeDrawerGesture.tsx") /* context */.useIsHomeDrawerEnabled();
  const style = [tmp2.footerWrapper, ];
  let tmp6 = null;
  const obj2 = require("../../home_drawer/native/useHomeDrawerGesture.tsx") /* context */;
  const tmp4 = jsx;
  if (!isHomeDrawerEnabled) {
    obj = { width: null };
    obj[0] = token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right;
    tmp6 = obj;
  }
  style[1] = tmp6;
  return tmp4(require("../../core/native/NativeView.tsx"), { style, children: children.children });
};