// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import useFontScale from "../../../../screen/native/useFontScale.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useScaledRowHeightData() {
      const cResult = c.c(3);
      const fontScale = useFontScale.useFontScale();
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
      const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
      const result = fontScale * token1;
      const sum = token + Math.max(result - token1, 0);
      if (cResult[0] === result) {
        if (cResult[1] === sum) {
          let tmp7 = cResult[2];
        }
        return tmp7;
      }
      const obj5 = { rowHeight: sum, rowContentHeight: result };
      cResult[0] = result;
      cResult[1] = sum;
      cResult[2] = obj5;
      tmp7 = obj5;
    }
  : function useScaledRowHeightData() {
      const fontScale = useFontScale.useFontScale();
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
      const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
      const result = fontScale * token1;
      return { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
    };
let closure_3 = tmp2;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx",
);

export default function useScaledRowHeight() {
  return closure_3().rowHeight;
}
export const useScaledRowHeightData = tmp2;
