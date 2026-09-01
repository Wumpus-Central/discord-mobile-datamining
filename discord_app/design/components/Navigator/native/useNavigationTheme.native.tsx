// === Module 6050: useNavigationTheme ===

// Module 6050 (useNavigationTheme)
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useNavigationTheme.native.tsx");

export const useNavigationTheme = function useNavigationTheme(theme) {
  const _require = theme;
  token = _require(token1[1]).useToken(token(token1[2]).colors.TEXT_STRONG, theme);
  let obj = _require(token1[1]);
  token1 = _require(token1[1]).useToken(token(token1[2]).colors.BORDER_SUBTLE, theme);
  const obj2 = _require(token1[1]);
  const token2 = _require(token1[1]).useToken(token(token1[2]).colors.MOBILE_ACTIONSHEET_BACKGROUND, theme);
  const obj3 = _require(token1[1]);
  const token3 = _require(token1[1]).useToken(token(token1[2]).colors.TEXT_MUTED, theme);
  const obj4 = _require(token1[1]);
  const token4 = _require(token1[1]).useToken(token(token1[2]).colors.BACKGROUND_FEEDBACK_NOTIFICATION, theme);
  const items = [token1, token2, token4, token, token3, theme];
  return token2.useMemo(() => {
    let obj = { dark: theme(token1[3]).isThemeDark(theme), colors: null, fonts: null };
    obj = { primary: token, background: "transparent", border: token1, card: token2, text: token3, notification: token4 };
    obj[1] = obj;
    obj[2] = theme(token1[4]).DefaultTheme.fonts;
    return obj;
  }, items);
};