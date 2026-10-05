// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../../_runtime/metro/00683__.js";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
      if (cResult[0] !== token) {
        const obj3 = _modDef683(token);
        const alphaResult = obj3.alpha(0);
        const hexResult = alphaResult.hex();
        cResult[0] = token;
        cResult[1] = hexResult;
        tmp5 = hexResult;
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
      const items = [tmp5, token];
      cResult[2] = token;
      cResult[3] = tmp5;
      cResult[4] = items;
      tmp7 = items;
    }
  : () => {
      let token;
      let obj = token(4580);
      token = obj.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
      let items = [token];
      return react.useMemo(() => {
        const items = [,];
        const obj = _modDef683(token);
        const alphaResult = obj.alpha(0);
        items[0] = alphaResult.hex();
        items[1] = token;
        return items;
      }, items);
    };
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx",
);

export const useChannelTopicGradientBackground = tmp2;
