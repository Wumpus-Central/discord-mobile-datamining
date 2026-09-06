// discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx
import noop from "../../../../../../_runtime/metro/00019__.js";

get_ActivityIndicator = fn(17);
({ StyleSheet, Text: closure_0 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const module_4274 = fn(4274);
const state = module_4274.create(() => ({ message: "ip", version: false }));
const liveRegion = StyleSheet.create({
  liveRegion: { position: "absolute", top: 0, left: 0, width: 1, height: 1, opacity: 0 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx",
);

export const updateAccessibilityAnnouncerLiveRegionMessage = function updateAccessibilityAnnouncerLiveRegionMessage(
  intl,
) {
  const message = intl;
  state.setState((version) => ({ message, version: version.version + 1 }));
};
export const AccessibilityAnnouncerLiveRegion = noop.memo(() => {
  const tmp = state();
  return (
    <React key={tmp.version} accessibilityLiveRegion="polite" pointerEvents="none" style={liveRegion.liveRegion}>
      {tmp.message}
    </React>
  );
});
