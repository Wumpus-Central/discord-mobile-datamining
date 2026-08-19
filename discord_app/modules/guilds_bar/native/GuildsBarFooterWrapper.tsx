// discord_app/modules/guilds_bar/native/GuildsBarFooterWrapper.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import obj132Default from "../../core/native/NativeView.tsx";
import context from "../../home_drawer/native/useHomeDrawerGesture.tsx";
import GUILD_ITEM_SIZE from "GuildsBarConstants.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const GUILD_ITEM_HIT_SLOP = GUILD_ITEM_SIZE.GUILD_ITEM_HIT_SLOP;
const jsx = jsxProd.jsx;
let obj = { display: "flex", alignSelf: "stretch", alignItems: "center", gap: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_PADDING };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  let obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = callback();
  const isHomeDrawerEnabled = context.useIsHomeDrawerEnabled();
  const style = [tmp2.footerWrapper, ];
  let tmp6 = null;
  if (!isHomeDrawerEnabled) {
    obj = { width: null };
    obj[0] = token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right;
    tmp6 = obj;
  }
  style[1] = tmp6;
  return jsx(obj132Default, { style, children: children.children });
};