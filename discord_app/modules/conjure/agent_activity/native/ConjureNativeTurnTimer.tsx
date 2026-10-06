// === Module 16769: ConjureNativeTurnTimer ===

// Module 16769 (ConjureNativeTurnTimer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import ConjureDuration from "ConjureDuration" /* 16693 */;
import useConjureElapsedMs from "useConjureElapsedMs" /* 16770 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let variant;

const jsx = Fragment.jsx;
let obj = { timer: { fontVariant: ["tabular-nums"] } };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((variant) => {
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(9);
  variant = variant.variant;
  let str = "text-sm/normal";
  const startedAt = variant.startedAt;
  if (undefined !== variant) {
    str = variant;
  }
  const tmp4 = closure_3();
  const tmpResult = useConjureElapsedMs;
  const conjureElapsedMs = tmpResult.useConjureElapsedMs(startedAt);
  const timer = tmp4.timer;
  if (cResult[0] !== conjureElapsedMs) {
    const tmpResult3 = ConjureDuration;
    const describeElapsedLabelResult = tmpResult3.describeElapsedLabel(conjureElapsedMs);
    cResult[0] = conjureElapsedMs;
    cResult[1] = describeElapsedLabelResult;
    tmp6 = describeElapsedLabelResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== conjureElapsedMs) {
    const tmpResult4 = ConjureDuration;
    const formatElapsedResult = tmpResult4.formatElapsed(conjureElapsedMs);
    cResult[2] = conjureElapsedMs;
    cResult[3] = formatElapsedResult;
    tmp8 = formatElapsedResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp4.timer) {
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp8) {
        let tmp10;
        if (cResult[7] === str) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = jsx(Text_Text.Text, { variant: str, color: "text-muted", style: timer, lineClamp: 1, accessibilityRole: "timer", accessibilityLiveRegion: "none", accessibilityLabel: tmp6, testID: "conjure-turn-timer", children: tmp8 });
  cResult[4] = tmp4.timer;
  cResult[5] = tmp6;
  cResult[6] = tmp8;
  cResult[7] = str;
  cResult[8] = tmp11;
  tmp10 = tmp11;
}) : ((variant) => {
  let str = variant.variant;
  const startedAt = variant.startedAt;
  if (str === undefined) {
    str = "text-sm/normal";
  }
  const tmp = closure_3();
  const obj = useConjureElapsedMs;
  const conjureElapsedMs = obj.useConjureElapsedMs(startedAt);
  const Text = Text_Text.Text;
  const obj3 = ConjureDuration;
  const obj4 = ConjureDuration;
  return <Text variant={str} color="text-muted" style={tmp.timer} lineClamp={1} accessibilityRole="timer" accessibilityLiveRegion="none" accessibilityLabel={obj3.describeElapsedLabel(conjureElapsedMs)} testID="conjure-turn-timer">{obj4.formatElapsed(conjureElapsedMs)}</Text>;
});
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeTurnTimer.tsx");

export default tmp3;