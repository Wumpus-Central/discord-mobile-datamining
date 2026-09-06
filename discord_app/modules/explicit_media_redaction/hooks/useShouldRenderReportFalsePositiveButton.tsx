// === Module 11912: useShouldRenderReportFalsePositiveButton ===

// Module 11912 (useShouldRenderReportFalsePositiveButton)
import ExplicitMediaStore from "ExplicitMediaStore" /* 7293 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx");

export const shouldRenderReportFalsePositiveButton = function shouldRenderReportFalsePositiveButton(id) {
  return null != ExplicitMediaStore.getFpMessageInfo(id);
};
export const useShouldRenderReportFalsePositiveButton = function useShouldRenderReportFalsePositiveButton(id) {
  _require = id;
  const items = [ExplicitMediaStore];
  return null != require("useStateFromStores").useStateFromStores(items, () => ExplicitMediaStore.getFpMessageInfo(closure_0));
};