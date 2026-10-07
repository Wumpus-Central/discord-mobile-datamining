// === Module 6545: useNavigationTheme ===

// Module 6545 (useNavigationTheme)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Link from "Link" /* 1491 */;
import useToken from "useToken" /* 4586 */;
import shared from "shared" /* 4735 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigationTheme.native.tsx");

export const useNavigationTheme = ReactCompilerGating.isReactCompilerEnabled() ? ((DARK) => {
  const cResult = c.c(11);
  const token = useToken.useToken(nativeDefault.colors.TEXT_STRONG, DARK);
  const token1 = useToken.useToken(nativeDefault.colors.BORDER_SUBTLE, DARK);
  const token2 = useToken.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, DARK);
  const token3 = useToken.useToken(nativeDefault.colors.TEXT_MUTED, DARK);
  const token4 = useToken.useToken(nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, DARK);
  if (cResult[0] !== DARK) {
    const isThemeDarkResult = shared.isThemeDark(DARK);
    cResult[0] = DARK;
    cResult[1] = isThemeDarkResult;
    let tmp9 = isThemeDarkResult;
    const tmpResult = shared;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === token1) {
    if (cResult[3] === token2) {
      if (cResult[4] === token4) {
        if (cResult[5] === token) {
          if (cResult[6] === token3) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === tmp9) {
            if (cResult[9] === tmp11) {
              let tmp12 = cResult[10];
            }
            return tmp12;
          }
          const obj7 = { dark: tmp9, colors: tmp11, fonts: Link.DefaultTheme.fonts };
          cResult[8] = tmp9;
          cResult[9] = tmp11;
          cResult[10] = obj7;
          tmp12 = obj7;
        }
      }
    }
  }
  const obj8 = { primary: token, background: "transparent", border: token1, card: token2, text: token3, notification: token4 };
  cResult[2] = token1;
  cResult[3] = token2;
  cResult[4] = token4;
  cResult[5] = token;
  cResult[6] = token3;
  cResult[7] = obj8;
  tmp11 = obj8;
}) : ((DARK) => {
  _require = DARK;
  token = require("useToken").useToken(token(token1[4]).colors.TEXT_STRONG, DARK);
  let obj = require("useToken");
  token1 = require("useToken").useToken(token(token1[4]).colors.BORDER_SUBTLE, DARK);
  const obj2 = require("useToken");
  const token2 = require("useToken").useToken(token(token1[4]).colors.MOBILE_ACTIONSHEET_BACKGROUND, DARK);
  const obj3 = require("useToken");
  const token3 = require("useToken").useToken(token(token1[4]).colors.TEXT_MUTED, DARK);
  const obj4 = require("useToken");
  const token4 = require("useToken").useToken(token(token1[4]).colors.BACKGROUND_FEEDBACK_NOTIFICATION, DARK);
  const items = [token1, token2, token4, token, token3, DARK];
  return token2.useMemo(() => {
    const obj = { dark: shared.isThemeDark(closure_0), colors: { primary: token, background: "transparent", border: token1, card: token2, text: token3, notification: token4 }, fonts: Link.DefaultTheme.fonts };
    return obj;
  }, items);
});