// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import useFontScale from "../../../../screen/native/useFontScale.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const fontScale = useFontScale.useFontScale();
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
      const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
      return token + Math.max(fontScale * token1 - token1, 0);
    }
  : () => {
      const fontScale = useFontScale.useFontScale();
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
      const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
      return token + Math.max(fontScale * token1 - token1, 0);
    };
