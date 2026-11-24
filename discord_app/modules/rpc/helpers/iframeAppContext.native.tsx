// === Module 15722: iframeAppContext ===

// Module 15722 (iframeAppContext)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const AppContext = Constants.AppContext;
const result = size.fileFinishedImporting("modules/rpc/helpers/iframeAppContext.native.tsx");

export function getAppContextForIframeId() {
  return AppContext.APP;
}