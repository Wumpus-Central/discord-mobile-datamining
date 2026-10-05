// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import useFontScale from "../../../../screen/native/useFontScale.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = useFontScale;
      const fontScale = obj.useFontScale();
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
      const obj3 = useToken;
      const token1 = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
      return token + Math.max(fontScale * token1 - token1, 0);
    }
  : () => {
      const obj = useFontScale;
      const fontScale = obj.useFontScale();
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
      const obj3 = useToken;
      const token1 = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
      return token + Math.max(fontScale * token1 - token1, 0);
    };
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx",
);

export default tmp2;
