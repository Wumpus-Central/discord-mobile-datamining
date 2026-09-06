// === Module 16348: GuildsBarFooterWrapper ===

// Module 16348 (GuildsBarFooterWrapper)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16022 */;
import GuildsBarConstants from "GuildsBarConstants" /* 16285 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const GUILD_ITEM_HIT_SLOP = GuildsBarConstants.GUILD_ITEM_HIT_SLOP;
const jsx = jsxProd.jsx;
let obj = { footerWrapper: null };
obj = { display: "flex", alignSelf: "stretch", alignItems: "center", gap: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING };
obj.footerWrapper = obj;
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  let obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = closure_5();
  const isHomeDrawerEnabled = useHomeDrawerGesture.useIsHomeDrawerEnabled();
  const style = [tmp2.footerWrapper, ];
  let tmp6 = null;
  const tmp4 = jsx;
  if (!isHomeDrawerEnabled) {
    obj = { width: token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right };
    tmp6 = obj;
  }
  style[1] = tmp6;
  return tmp4(NativeViewDefault, { style, children: children.children });
};