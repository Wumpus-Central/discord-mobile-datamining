// discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx
import { Text } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import keys from "../../../../../../_runtime/01353_keys.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

let closure_2 = keys.create(() => ({ message: "disabled", version: false }));
const memoResult = importAllResult.memo(() => {
  const tmp = state();
  return <Text key={tmp.version} accessibilityLiveRegion="polite" style={{ display: "none" }}>{tmp.message}</Text>;
});
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx");

export const updateAccessibilityAnnouncerLiveRegionMessage = function updateAccessibilityAnnouncerLiveRegionMessage(intl) {
  closure_0 = intl;
  state.setState((version) => ({ message: closure_0, version: version.version + 1 }));
};
export const AccessibilityAnnouncerLiveRegion = memoResult;