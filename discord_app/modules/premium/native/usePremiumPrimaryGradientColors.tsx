// discord_app/modules/premium/native/usePremiumPrimaryGradientColors.tsx
import react from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react;
      const cResult = obj.c(4);
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT);
      const obj3 = useToken;
      const token1 = obj3.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
      const obj4 = useToken;
      const token2 = obj4.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
      if (cResult[0] === token) {
        if (cResult[1] === token1) {
          let tmp5;
          if (cResult[2] === token2) {
            tmp5 = cResult[3];
          }
          return tmp5;
        }
      }
      const items = [token, token1, token2];
      cResult[0] = token;
      cResult[1] = token1;
      cResult[2] = token2;
      cResult[3] = items;
      tmp5 = items;
    }
  : () => {
      const items = [, ,];
      const obj = useToken;
      items[0] = obj.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT);
      const obj2 = useToken;
      items[1] = obj2.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
      const obj3 = useToken;
      items[2] = obj3.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
      return items;
    };
const result = size.fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default tmp2;
