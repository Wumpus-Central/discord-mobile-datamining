// === Module 6462: useNavigationTheme ===

// Module 6462 (useNavigationTheme)
import Link from "Link" /* 1486 */;
import shared from "shared" /* 4685 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigationTheme.native.tsx");

export const useNavigationTheme = function useNavigationTheme(DARK) {
  _require = DARK;
  token = require("useToken").useToken(token(token1[2]).colors.TEXT_STRONG, DARK);
  let obj = require("useToken");
  token1 = require("useToken").useToken(token(token1[2]).colors.BORDER_SUBTLE, DARK);
  const obj2 = require("useToken");
  const token2 = require("useToken").useToken(token(token1[2]).colors.MOBILE_ACTIONSHEET_BACKGROUND, DARK);
  const obj3 = require("useToken");
  const token3 = require("useToken").useToken(token(token1[2]).colors.TEXT_MUTED, DARK);
  const obj4 = require("useToken");
  const token4 = require("useToken").useToken(token(token1[2]).colors.BACKGROUND_FEEDBACK_NOTIFICATION, DARK);
  const items = [token1, token2, token4, token, token3, DARK];
  return token2.useMemo(() => {
    const obj = { dark: shared.isThemeDark(closure_0), colors: { primary: token, background: "transparent", border: token1, card: token2, text: token3, notification: token4 }, fonts: Link.DefaultTheme.fonts };
    return obj;
  }, items);
};