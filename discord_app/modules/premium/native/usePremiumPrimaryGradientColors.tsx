// === Module 13635: usePremiumPrimaryGradientColors ===

// Module 13635 (usePremiumPrimaryGradientColors)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4779 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumPrimaryGradientColors() {
  const cResult = c.c(4);
  const token = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT);
  const token1 = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const token2 = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  if (cResult[0] === token) {
    if (cResult[1] === token1) {
      if (cResult[2] === token2) {
        let tmp5 = cResult[3];
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
}) : (function usePremiumPrimaryGradientColors() {
  const items = [useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  items[1] = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  items[2] = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
});