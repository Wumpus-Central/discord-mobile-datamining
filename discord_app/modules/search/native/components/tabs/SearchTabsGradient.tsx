// discord_app/modules/search/native/components/tabs/SearchTabsGradient.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import ColorUtils from "../../../../../utils/ColorUtils.tsx";
import TabsGradientDefault from "../../../../../design/components/Tabs/native/TabsGradient.native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let state;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      if (cResult[0] !== token) {
        const tmpResult = ColorUtils;
        const hexWithOpacityResult = tmpResult.hexWithOpacity(token, 0);
        cResult[0] = token;
        cResult[1] = hexWithOpacityResult;
        tmp5 = hexWithOpacityResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === token) {
        let tmp7;
        if (cResult[3] === tmp5) {
          tmp7 = cResult[4];
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
      let token;
      let obj = token(4586);
      token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      let items = [token];
      return react.useMemo(() => {
        const items = [token];
        const obj = ColorUtils;
        items[1] = obj.hexWithOpacity(token, 0);
        return items;
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      const obj = react2;
      const cResult = obj.c(3);
      state = state.state;
      const tmp3 = closure_5();
      if (cResult[0] === tmp3) {
        let tmp4;
        if (cResult[1] === state) {
          tmp4 = cResult[2];
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
      state = state.state;
      const colors = closure_5();
      return jsx(TabsGradientDefault, { state, colors });
    };
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default tmp2;
