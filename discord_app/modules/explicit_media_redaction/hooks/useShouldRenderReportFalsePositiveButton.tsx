// === Module 11136: shouldRenderReportFalsePositiveButton ===

// Module 11136 (shouldRenderReportFalsePositiveButton)
import closure_2 from "getFpMessageInfo" /* 5007 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx");

export const shouldRenderReportFalsePositiveButton = function shouldRenderReportFalsePositiveButton(id) {
  return null != fpMessageInfo.getFpMessageInfo(id);
};
export const useShouldRenderReportFalsePositiveButton = function useShouldRenderReportFalsePositiveButton(id) {
  const _require = id;
  const items = [closure_2];
  return null != _require(647).useStateFromStores(items, () => closure_1_2.getFpMessageInfo(closure_0));
};