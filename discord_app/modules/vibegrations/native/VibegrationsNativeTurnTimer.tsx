// discord_app/modules/vibegrations/native/VibegrationsNativeTurnTimer.tsx
import c from "../../../../_runtime/00576_c.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import VibegrationsDuration from "../lib/VibegrationsDuration.tsx";
import useVibegrationsElapsedMs from "../lib/useVibegrationsElapsedMs.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_3 = createStyles.createStyles({ timer: { fontVariant: ["tabular-nums"] } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeTurnTimer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (variant) => {
      const cResult = c.c(9);
      variant = variant.variant;
      let str = "text-sm/normal";
      if (undefined !== variant) {
        str = variant;
      }
      const tmp4 = closure_3();
      const vibegrationsElapsedMs = useVibegrationsElapsedMs.useVibegrationsElapsedMs(variant.startedAt);
      if (cResult[0] !== vibegrationsElapsedMs) {
        const describeElapsedLabelResult = VibegrationsDuration.describeElapsedLabel(vibegrationsElapsedMs);
        cResult[0] = vibegrationsElapsedMs;
        cResult[1] = describeElapsedLabelResult;
        let tmp6 = describeElapsedLabelResult;
        const tmpResult3 = VibegrationsDuration;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== vibegrationsElapsedMs) {
        const formatElapsedResult = VibegrationsDuration.formatElapsed(vibegrationsElapsedMs);
        cResult[2] = vibegrationsElapsedMs;
        cResult[3] = formatElapsedResult;
        let tmp8 = formatElapsedResult;
        const tmpResult4 = VibegrationsDuration;
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
      const tmp11 = jsx(Text_Text.Text, {
        variant: str,
        color: "text-muted",
        style: tmp4.timer,
        lineClamp: 1,
        accessibilityRole: "timer",
        accessibilityLiveRegion: "none",
        accessibilityLabel: tmp6,
        testID: "vibegrations-turn-timer",
        children: tmp8,
      });
      cResult[4] = tmp4.timer;
      cResult[5] = tmp6;
      cResult[6] = tmp8;
      cResult[7] = str;
      cResult[8] = tmp11;
      tmp10 = tmp11;
      const tmpResult = useVibegrationsElapsedMs;
    }
  : (variant) => {
      let str = variant.variant;
      if (str === undefined) {
        str = "text-sm/normal";
      }
      const tmp = closure_3();
      const vibegrationsElapsedMs = useVibegrationsElapsedMs.useVibegrationsElapsedMs(variant.startedAt);
      const obj2 = {
        variant: str,
        color: "text-muted",
        style: tmp.timer,
        lineClamp: 1,
        accessibilityRole: "timer",
        accessibilityLiveRegion: "none",
        accessibilityLabel: null,
        testID: "vibegrations-turn-timer",
        children: null,
      };
      obj2.accessibilityLabel = VibegrationsDuration.describeElapsedLabel(vibegrationsElapsedMs);
      obj2.children = VibegrationsDuration.formatElapsed(vibegrationsElapsedMs);
      return jsx(Text_Text.Text, {
        variant: str,
        color: "text-muted",
        style: tmp.timer,
        lineClamp: 1,
        accessibilityRole: "timer",
        accessibilityLiveRegion: "none",
        accessibilityLabel: null,
        testID: "vibegrations-turn-timer",
        children: null,
      });
    };
