// === Module 7041: useNavigationTheme ===

// Module 7041 (useNavigationTheme)
import Link from "Link" /* 1484 */;
import shared from "shared" /* 4411 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigationTheme.native.tsx");

export const useNavigationTheme = function useNavigationTheme(theme) {
  _require = theme;
  token = require("useToken").useToken(token(token1[2]).colors.TEXT_STRONG, theme);
  let obj = require("useToken");
  token1 = require("useToken").useToken(token(token1[2]).colors.BORDER_SUBTLE, theme);
  const obj2 = require("useToken");
  const token2 = require("useToken").useToken(token(token1[2]).colors.MOBILE_ACTIONSHEET_BACKGROUND, theme);
  const obj3 = require("useToken");
  const token3 = require("useToken").useToken(token(token1[2]).colors.TEXT_MUTED, theme);
  const obj4 = require("useToken");
  const token4 = require("useToken").useToken(token(token1[2]).colors.BACKGROUND_FEEDBACK_NOTIFICATION, theme);
  const items = [token1, token2, token4, token, token3, theme];
  return token2.useMemo(() => {
    let obj = { dark: shared.isThemeDark(closure_0), colors: null, fonts: null };
    obj = { primary: token, background: "transparent", border: token1, card: token2, text: token3, notification: token4 };
    obj.colors = obj;
    obj.fonts = Link.DefaultTheme.fonts;
    return obj;
  }, items);
};