// discord_app/modules/auth/native/useWideAuthView.tsx
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import useIsWindowLargeDefault from "../../screen/native/useIsWindowLarge.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const tmp = useIsWindowLargeDefault();
      const obj = MetaQuestUtils;
      const tmp2 = obj.isMetaQuest() || tmp;
      return tmp2;
    }
  : () => {
      const tmp = useIsWindowLargeDefault();
      const obj = MetaQuestUtils;
      const tmp2 = obj.isMetaQuest() || tmp;
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default tmp2;
