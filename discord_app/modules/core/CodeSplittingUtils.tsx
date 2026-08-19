// discord_app/modules/core/CodeSplittingUtils.tsx
import awaitOnlineDefault from "../../utils/NetworkUtils.tsx";
import loaderMaker from "../../../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx";
import obj132 from "../../../_runtime/00002_obj132.js";

loaderMaker.setAwaitOnline(awaitOnlineDefault.awaitOnline);
const result = obj132.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("loaderMaker")) {
  arg5[key10026] = require("loaderMaker")[key10026];
  continue;
}