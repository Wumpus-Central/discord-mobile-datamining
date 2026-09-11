// discord_app/design/components/Navigator/native/useNavigationTheme.native.tsx
import Link from "../../../../../_runtime/01484_Link.js";
import shared from "../../../shared.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
    let obj = { dark: shared.isThemeDark(closure_0), colors: null, fonts: null };
    obj = {
      primary: token,
      background: "transparent",
      border: token1,
      card: token2,
      text: token3,
      notification: token4,
    };
    obj.colors = obj;
    obj.fonts = Link.DefaultTheme.fonts;
    return obj;
  }, items);
};
