// === Module 4273: updateAccessibilityAnnouncerLiveRegionMessage ===

// Module 4273 (updateAccessibilityAnnouncerLiveRegionMessage)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import keys from "keys" /* 4274 */;
import importAllResult from "noop" /* 19 */;

({ StyleSheet, Text: c0 } = get_ActivityIndicator);
let closure_2 = keys.create(() => ({ message: "ip", version: false }));
const styles = StyleSheet.create({ liveRegion: { position: "absolute", top: 0, left: 0, width: 1, height: 1, opacity: 0 } });
const memoResult = importAllResult.memo(() => {
  const tmp = state();
  return <closure_0 key={tmp.version} accessibilityLiveRegion="polite" pointerEvents="none" style={liveRegion.liveRegion}>{tmp.message}</closure_0>;
});
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx");

export const updateAccessibilityAnnouncerLiveRegionMessage = function updateAccessibilityAnnouncerLiveRegionMessage(intl) {
  closure_0 = intl;
  state.setState((version) => ({ message: closure_0, version: version.version + 1 }));
};
export const AccessibilityAnnouncerLiveRegion = memoResult;