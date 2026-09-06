// discord_app/modules/core/CodeSplittingUtils.tsx
import NetworkUtilsDefault from "../../utils/NetworkUtils.tsx";
import CodeSplittingUtils from "../../../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("CodeSplittingUtils")) {
  arg5[key10026] = require("CodeSplittingUtils")[key10026];
  continue;
}
