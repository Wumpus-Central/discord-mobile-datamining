// discord_app/modules/vibegrations/native/VibegrationsNativeTurnTimer.tsx
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import VibegrationsDuration from "../lib/VibegrationsDuration.tsx";
import useVibegrationsElapsedMs from "../lib/useVibegrationsElapsedMs.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
}
