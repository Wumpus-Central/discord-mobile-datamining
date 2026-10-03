// discord_app/modules/search/native/components/tabs/SearchTabsGradient.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import ColorUtils from "../../../../../utils/ColorUtils.tsx";
import TabsGradientDefault from "../../../../../design/components/Tabs/native/TabsGradient.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
      token = token(4580).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      let items = [token];
      return noop.useMemo(() => {
        const items = [token, ColorUtils.hexWithOpacity(token, 0)];
        return items;
      }, items);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
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
    }
  : (state) => {
      const colors = closure_5();
      return jsx(TabsGradientDefault, { state: state.state, colors });
    };
