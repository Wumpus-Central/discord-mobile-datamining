// === Module 6538: useNavigationTheme ===

// Module 6538 (useNavigationTheme)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Link from "Link" /* 1491 */;
import useToken from "useToken" /* 4580 */;
import shared from "shared" /* 4729 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((theme) => {
  let tmp9;
  const obj = react2;
  const cResult = obj.c(11);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.TEXT_STRONG, theme);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.colors.BORDER_SUBTLE, theme);
  const obj4 = useToken;
  const token2 = obj4.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, theme);
  const obj5 = useToken;
  const token3 = obj5.useToken(nativeDefault.colors.TEXT_MUTED, theme);
  const obj6 = useToken;
  const token4 = obj6.useToken(nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, theme);
  if (cResult[0] !== theme) {
    const tmpResult = shared;
    const isThemeDarkResult = tmpResult.isThemeDark(theme);
    cResult[0] = theme;
    cResult[1] = isThemeDarkResult;
    tmp9 = isThemeDarkResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === token1) {
    if (cResult[3] === token2) {
      if (cResult[4] === token4) {
        if (cResult[5] === token) {
          let tmp11;
          if (cResult[6] === token3) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp9) {
            let tmp12;
            if (cResult[9] === tmp11) {
              tmp12 = cResult[10];
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
}) : ((theme) => {
  let token;
  let token1;
  _require = theme;
  let obj = require("useToken");
  token = obj.useToken(token(token1[4]).colors.TEXT_STRONG, theme);
  let obj2 = require("useToken");
  token1 = obj2.useToken(token(token1[4]).colors.BORDER_SUBTLE, theme);
  const obj3 = require("useToken");
  const token2 = obj3.useToken(token(token1[4]).colors.MOBILE_ACTIONSHEET_BACKGROUND, theme);
  const obj4 = require("useToken");
  const token3 = obj4.useToken(token(token1[4]).colors.TEXT_MUTED, theme);
  const obj5 = require("useToken");
  const token4 = obj5.useToken(token(token1[4]).colors.BACKGROUND_FEEDBACK_NOTIFICATION, theme);
  const items = [token1, token2, token4, token, token3, theme];
  return token2.useMemo(() => {
    let obj2;
    const obj = { dark: obj2.isThemeDark(theme), colors: obj3, fonts: Link.DefaultTheme.fonts };
    obj2 = shared;
    return obj;
  }, items);
});
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigationTheme.native.tsx");

export const useNavigationTheme = tmp2;