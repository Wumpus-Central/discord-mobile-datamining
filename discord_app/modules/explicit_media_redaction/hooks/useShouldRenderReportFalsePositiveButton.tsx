// discord_app/modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx
import closure_2 from "../ExplicitMediaStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx");

export const shouldRenderReportFalsePositiveButton = function shouldRenderReportFalsePositiveButton(id) {
  return null != fpMessageInfo.getFpMessageInfo(id);
};
export const useShouldRenderReportFalsePositiveButton = function useShouldRenderReportFalsePositiveButton(id) {
  const _require = id;
  const items = [closure_2];
  return null != require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => closure_1_2.getFpMessageInfo(closure_0));
};