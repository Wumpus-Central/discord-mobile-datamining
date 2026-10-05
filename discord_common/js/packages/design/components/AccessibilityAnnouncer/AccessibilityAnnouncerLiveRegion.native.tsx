// === Module 4591: AccessibilityAnnouncerLiveRegion ===

// Module 4591 (AccessibilityAnnouncerLiveRegion)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, Text: c2 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const module_4571 = fn(4571);
const state = module_4571.create(() => ({ message: "duration", version: false }));
const styles = StyleSheet.create({ liveRegion: { position: "absolute", top: 0, left: 0, width: 1, height: 1, opacity: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx");

export const updateAccessibilityAnnouncerLiveRegionMessage = function updateAccessibilityAnnouncerLiveRegionMessage(intl) {
  const message = intl;
  state.setState((version) => ({ message, version: version.version + 1 }));
};
export const AccessibilityAnnouncerLiveRegion = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  ({ message, version } = state());
  if (cResult[0] === message) {
    if (cResult[1] === version) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = <React2 key={version} accessibilityLiveRegion="polite" pointerEvents="none" style={closure_5.liveRegion}>{message}</React2>;
  cResult[0] = message;
  cResult[1] = version;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (() => {
  const tmp = state();
  return <React2 key={tmp.version} accessibilityLiveRegion="polite" pointerEvents="none" style={closure_5.liveRegion}>{tmp.message}</React2>;
}));