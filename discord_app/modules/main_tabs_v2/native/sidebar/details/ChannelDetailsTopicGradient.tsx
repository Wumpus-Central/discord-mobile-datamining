// === Module 17371: ChannelDetailsTopicGradient ===

// Module 17371 (ChannelDetailsTopicGradient)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useToken from "useToken" /* 4779 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx");

export const useChannelTopicGradientBackground = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelTopicGradientBackground() {
  const cResult = c.c(5);
  const token = useToken.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  if (cResult[0] !== token) {
    const obj3 = _modDef683(token);
    const hexResult = _modDef683(token).alpha(0).hex();
    cResult[0] = token;
    cResult[1] = hexResult;
    let tmp5 = hexResult;
    const alphaResult = _modDef683(token).alpha(0);
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === token) {
    if (cResult[3] === tmp5) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const items = [tmp5, token];
  cResult[2] = token;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp7 = items;
}) : (function useChannelTopicGradientBackground() {
  token = token(4779).useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  return noop.useMemo(() => {
    const obj = _modDef683(token);
    const items = [_modDef683(token).alpha(0).hex(), token];
    return items;
  }, items);
});