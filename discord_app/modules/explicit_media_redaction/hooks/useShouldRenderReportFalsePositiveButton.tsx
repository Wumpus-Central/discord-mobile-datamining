// discord_app/modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx
import ExplicitMediaStore from "../ExplicitMediaStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx",
);

export const shouldRenderReportFalsePositiveButton = function shouldRenderReportFalsePositiveButton(id) {
  return null != ExplicitMediaStore.getFpMessageInfo(id);
};
export const useShouldRenderReportFalsePositiveButton = function useShouldRenderReportFalsePositiveButton(id) {
  _require = id;
  const items = [ExplicitMediaStore];
  return (
    null !=
    require("useStateFromStores").useStateFromStores(items, () => ExplicitMediaStore.getFpMessageInfo(closure_0))
  );
};
