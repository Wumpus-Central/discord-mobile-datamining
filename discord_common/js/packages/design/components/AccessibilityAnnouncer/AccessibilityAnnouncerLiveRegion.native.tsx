// discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import keys from "../../../../../../_runtime/01353_keys.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

({ StyleSheet, Text: c0 } = get_ActivityIndicator);
let closure_2 = keys.create(() => ({ message: "disabled", version: false }));
const styles = StyleSheet.create({
  liveRegion: { position: "absolute", top: 0, left: 0, width: 1, height: 1, opacity: 0 },
});
const memoResult = importAllResult.memo(() => {
  const tmp = state();
  return (
    <closure_0 key={tmp.version} accessibilityLiveRegion="polite" pointerEvents="none" style={liveRegion.liveRegion}>
      {tmp.message}
    </closure_0>
  );
});
const result = require("set").fileFinishedImporting(
  "../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx",
);

export const updateAccessibilityAnnouncerLiveRegionMessage = function updateAccessibilityAnnouncerLiveRegionMessage(
  intl,
) {
  closure_0 = intl;
  state.setState((version) => ({ message: closure_0, version: version.version + 1 }));
};
export const AccessibilityAnnouncerLiveRegion = memoResult;
