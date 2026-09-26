// === Module 16396: VibegrationsNativeTurnTimer ===

// Module 16396 (VibegrationsNativeTurnTimer)
import Text_Text from "Text/Text" /* 4832 */;
import VibegrationsDuration from "VibegrationsDuration" /* 16350 */;
import useVibegrationsElapsedMs from "useVibegrationsElapsedMs" /* 16397 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_3 = createStyles.createStyles({ timer: { fontVariant: ["tabular-nums"] } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeTurnTimer.tsx");

export default function VibegrationsNativeTurnTimer(variant) {
  let str = variant.variant;
  if (str === undefined) {
    str = "text-sm/normal";
  }
  const tmp = closure_3();
  const vibegrationsElapsedMs = useVibegrationsElapsedMs.useVibegrationsElapsedMs(variant.startedAt);
  const obj2 = { variant: str, color: "text-muted", style: tmp.timer, lineClamp: 1, accessibilityRole: "timer", accessibilityLiveRegion: "none", accessibilityLabel: null, testID: "vibegrations-turn-timer", children: null };
  obj2.accessibilityLabel = VibegrationsDuration.describeElapsedLabel(vibegrationsElapsedMs);
  obj2.children = VibegrationsDuration.formatElapsed(vibegrationsElapsedMs);
  return jsx(Text_Text.Text, { variant: str, color: "text-muted", style: tmp.timer, lineClamp: 1, accessibilityRole: "timer", accessibilityLiveRegion: "none", accessibilityLabel: null, testID: "vibegrations-turn-timer", children: null });
};