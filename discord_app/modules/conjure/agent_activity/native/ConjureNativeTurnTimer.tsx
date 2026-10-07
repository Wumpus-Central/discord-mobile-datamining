// === Module 16769: ConjureNativeTurnTimer ===

// Module 16769 (ConjureNativeTurnTimer)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import ConjureDuration from "ConjureDuration" /* 16693 */;
import useConjureElapsedMs from "useConjureElapsedMs" /* 16770 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_3 = createStyles.createStyles({ timer: { fontVariant: ["tabular-nums"] } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeTurnTimer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((variant) => {
  const cResult = c.c(9);
  variant = variant.variant;
  let str = "text-sm/normal";
  if (undefined !== variant) {
    str = variant;
  }
  const tmp4 = closure_3();
  const conjureElapsedMs = useConjureElapsedMs.useConjureElapsedMs(variant.startedAt);
  if (cResult[0] !== conjureElapsedMs) {
    const describeElapsedLabelResult = ConjureDuration.describeElapsedLabel(conjureElapsedMs);
    cResult[0] = conjureElapsedMs;
    cResult[1] = describeElapsedLabelResult;
    let tmp6 = describeElapsedLabelResult;
    const tmpResult3 = ConjureDuration;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== conjureElapsedMs) {
    const formatElapsedResult = ConjureDuration.formatElapsed(conjureElapsedMs);
    cResult[2] = conjureElapsedMs;
    cResult[3] = formatElapsedResult;
    let tmp8 = formatElapsedResult;
    const tmpResult4 = ConjureDuration;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp4.timer) {
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp8) {
        if (cResult[7] === str) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = jsx(Text_Text.Text, { variant: str, color: "text-muted", style: tmp4.timer, lineClamp: 1, accessibilityRole: "timer", accessibilityLiveRegion: "none", accessibilityLabel: tmp6, testID: "conjure-turn-timer", children: tmp8 });
  cResult[4] = tmp4.timer;
  cResult[5] = tmp6;
  cResult[6] = tmp8;
  cResult[7] = str;
  cResult[8] = tmp11;
  tmp10 = tmp11;
  const tmpResult = useConjureElapsedMs;
}) : ((variant) => {
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
});