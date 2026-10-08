// discord_app/modules/guilds_bar/native/GuildsBarFooterWrapper.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import NativeViewDefault from "../../core/native/NativeView.tsx";
import useHomeDrawerGesture from "../../home_drawer/native/useHomeDrawerGesture.tsx";
import GuildsBarConstants from "GuildsBarConstants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const GUILD_ITEM_HIT_SLOP = GuildsBarConstants.GUILD_ITEM_HIT_SLOP;
const jsx = jsxProd.jsx;
let obj = {
  footerWrapper: {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
    gap: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING,
  },
};
let closure_5 = createStyles.createStyles(obj);
let obj2 = {
  display: "flex",
  alignSelf: "stretch",
  alignItems: "center",
  gap: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING,
};
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildsBarFooterWrapper(children) {
      const cResult = c.c(9);
      children = children.children;
      const token = useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
      const tmp5 = closure_5();
      const isHomeDrawerEnabled = useHomeDrawerGesture.useIsHomeDrawerEnabled();
      if (cResult[0] === isHomeDrawerEnabled) {
        if (cResult[1] === token) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === tmp5.footerWrapper) {
          if (cResult[4] === tmp7) {
            let tmp10 = cResult[5];
          }
          if (cResult[6] === children) {
            if (cResult[7] === tmp10) {
              let tmp11 = cResult[8];
            }
            return tmp11;
          }
          const obj4 = { style: tmp10, children };
          const tmp13 = jsx(NativeViewDefault, { style: tmp10, children });
          cResult[6] = children;
          cResult[7] = tmp10;
          cResult[8] = tmp13;
          tmp11 = tmp13;
        }
        const items = [tmp5.footerWrapper, tmp7];
        cResult[3] = tmp5.footerWrapper;
        cResult[4] = tmp7;
        cResult[5] = items;
        tmp10 = items;
      }
      let tmp8 = null;
      if (!isHomeDrawerEnabled) {
        const obj5 = { width: token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right };
        tmp8 = obj5;
      }
      cResult[0] = isHomeDrawerEnabled;
      cResult[1] = token;
      cResult[2] = tmp8;
      tmp7 = tmp8;
    }
  : function GuildsBarFooterWrapper(children) {
      const token = useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
      const tmp2 = closure_5();
      const isHomeDrawerEnabled = useHomeDrawerGesture.useIsHomeDrawerEnabled();
      const style = [tmp2.footerWrapper];
      let tmp6 = null;
      if (!isHomeDrawerEnabled) {
        const obj3 = { width: token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right };
        tmp6 = obj3;
      }
      style[1] = tmp6;
      return jsx(NativeViewDefault, { style, children: children.children });
    };
