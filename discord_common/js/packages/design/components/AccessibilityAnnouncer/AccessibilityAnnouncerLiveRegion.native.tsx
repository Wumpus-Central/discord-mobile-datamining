// discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx
import c from "../../../../../../_runtime/00576_c.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, Text: c2 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const module_4812 = fn(4812);
const state = module_4812.create(() => ({ message: "emoji", version: false }));
const styles = StyleSheet.create({
  liveRegion: { position: "absolute", top: 0, left: 0, width: 1, height: 1, opacity: 0 },
});
const ReactCompilerGating = fn(558);
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
export const AccessibilityAnnouncerLiveRegion = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function AccessibilityAnnouncerLiveRegion() {
        const cResult = c.c(3);
        ({ message, version } = state());
        if (cResult[0] === message) {
          if (cResult[1] === version) {
            let tmp3 = cResult[2];
          }
          return tmp3;
        }
        const tmp4 = (
          <React2 key={version} accessibilityLiveRegion="polite" pointerEvents="none" style={closure_5.liveRegion}>
            {message}
          </React2>
        );
        cResult[0] = message;
        cResult[1] = version;
        cResult[2] = tmp4;
        tmp3 = tmp4;
      }
    : function AccessibilityAnnouncerLiveRegion() {
        const tmp = state();
        return (
          <React2 key={tmp.version} accessibilityLiveRegion="polite" pointerEvents="none" style={closure_5.liveRegion}>
            {tmp.message}
          </React2>
        );
      },
);
