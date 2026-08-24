// discord_app/modules/core/CodeSplittingUtils.tsx
import set from "../../../_runtime/00002_set.js";
import awaitOnlineDefault from "../../utils/NetworkUtils.tsx";
import loaderMaker from "../../../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx";

loaderMaker.setAwaitOnline(awaitOnlineDefault.awaitOnline);
const result = set.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("loaderMaker")) {
  let tmp4 = key10026;
  arg5[key10026] = require("loaderMaker")[key10026];
  continue;
}