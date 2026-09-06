// discord_app/modules/guilds_bar/native/GuildsBarFooterWrapper.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import NativeViewDefault from "../../core/native/NativeView.tsx";
import useHomeDrawerGesture from "../../home_drawer/native/useHomeDrawerGesture.tsx";
import GuildsBarConstants from "GuildsBarConstants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const GUILD_ITEM_HIT_SLOP = GuildsBarConstants.GUILD_ITEM_HIT_SLOP;
const jsx = jsxProd.jsx;
let obj = { footerWrapper: null };
obj = {
  display: "flex",
  alignSelf: "stretch",
  alignItems: "center",
  gap: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING,
};
obj.footerWrapper = obj;
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  let obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = closure_5();
  const isHomeDrawerEnabled = useHomeDrawerGesture.useIsHomeDrawerEnabled();
  const style = [tmp2.footerWrapper];
  let tmp6 = null;
  if (!isHomeDrawerEnabled) {
    obj = { width: token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right };
    tmp6 = obj;
  }
  style[1] = tmp6;
  return jsx(NativeViewDefault, { style, children: children.children });
}
