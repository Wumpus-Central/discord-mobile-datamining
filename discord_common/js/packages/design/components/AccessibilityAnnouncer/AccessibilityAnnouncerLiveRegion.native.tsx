// === Module 1352: updateAccessibilityAnnouncerLiveRegionMessage ===

// Module 1352 (updateAccessibilityAnnouncerLiveRegionMessage)
import { Text } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import keys from "keys" /* 1353 */;
import importAllResult from "noop" /* 19 */;

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