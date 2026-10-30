// === Module 12754: ConjureNativeTurnTimer ===

// Module 12754 (ConjureNativeTurnTimer)
import Text_Text from "Text/Text" /* 5619 */;
import ConjureDuration from "ConjureDuration" /* 12404 */;
import useConjureElapsedMs from "useConjureElapsedMs" /* 12755 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_3 = createStyles.createStyles({ timer: { fontVariant: ["tabular-nums"] } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeTurnTimer.tsx");

export default function ConjureNativeTurnTimer(variant) {
  let str = variant.variant;
  if (str === undefined) {
    str = "text-sm/normal";
  }
  const tmp = closure_3();
  const conjureElapsedMs = useConjureElapsedMs.useConjureElapsedMs(variant.startedAt);
  const obj2 = { variant: str, color: "text-muted", style: tmp.timer, lineClamp: 1, accessibilityRole: "timer", accessibilityLiveRegion: "none", accessibilityLabel: null, testID: "conjure-turn-timer", children: null };
  obj2.accessibilityLabel = ConjureDuration.describeElapsedLabel(conjureElapsedMs);
  obj2.children = ConjureDuration.formatElapsed(conjureElapsedMs);
  return jsx(Text_Text.Text, { variant: str, color: "text-muted", style: tmp.timer, lineClamp: 1, accessibilityRole: "timer", accessibilityLiveRegion: "none", accessibilityLabel: null, testID: "conjure-turn-timer", children: null });
};