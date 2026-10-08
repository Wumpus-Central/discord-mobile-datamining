// === Module 17206: SearchTabsGradient ===

// Module 17206 (SearchTabsGradient)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4778 */;
import ColorUtils from "ColorUtils" /* 4927 */;
import TabsGradientDefault from "TabsGradient" /* 12536 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGradientColors() {
  const cResult = c.c(5);
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (cResult[0] !== token) {
    const hexWithOpacityResult = ColorUtils.hexWithOpacity(token, 0);
    cResult[0] = token;
    cResult[1] = hexWithOpacityResult;
    let tmp5 = hexWithOpacityResult;
    const tmpResult = ColorUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === token) {
    if (cResult[3] === tmp5) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const items = [token, tmp5];
  cResult[2] = token;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp7 = items;
}) : (function useGradientColors() {
  token = token(4778).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let items = [token];
  return noop.useMemo(() => {
    const items = [token, ColorUtils.hexWithOpacity(token, 0)];
    return items;
  }, items);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SearchTabsGradient(state) {
  const cResult = c.c(3);
  state = state.state;
  const tmp3 = closure_5();
  if (cResult[0] === tmp3) {
    if (cResult[1] === state) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(TabsGradientDefault, { state, colors: tmp3 });
  cResult[0] = tmp3;
  cResult[1] = state;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function SearchTabsGradient(state) {
  const colors = closure_5();
  return jsx(TabsGradientDefault, { state: state.state, colors });
});