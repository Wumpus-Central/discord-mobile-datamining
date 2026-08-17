// discord_app/modules/voice_messages/native/useVoiceMessageTooltip.tsx
import closure_2 from "noop" /* 19 */;
import closure_3 from "subscribeToKeyboardUIStore" /* 1496 */;
import VoiceMessageRecordingStatus from "VoiceMessageRecordingStatus" /* 11147 */;
import { useTooltip } from "../../../design/components/Tooltip/native/useTooltip.native.tsx";

const require = arg1;
({ hideVoiceMessagesTooltip: c4, showVoiceMessagesTooltip: c5, useVoiceMessagesUIStore: closure_6 } = VoiceMessageRecordingStatus);
const result = require("set").fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default function useVoiceMessageTooltip() {
  const ref = React.useRef(null);
  const tmp2 = callback((showVoiceMessagesTooltip) => showVoiceMessagesTooltip.showVoiceMessagesTooltip);
  const _require = tmp2;
  const items = [tmp2];
  const items1 = [tmp2];
  const memo = React.useMemo(() => {
    const obj = { position: "top", label: null, visible: null };
    const intl = callback(closure_1_1[3]).intl;
    obj[1] = intl.string(callback(closure_1_1[3]).t["hP6+07"]);
    obj[2] = callback;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    if (callback) {
      callback = callback(closure_1_1[4]).getKeyboardIsOpen({ includeCustomKeyboard: true });
      closure_1 = closure_1_3(() => {
        if (callback !== obj.getKeyboardIsOpen({ includeCustomKeyboard: true })) {
          closure_1_4();
        }
      });
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback2();
      }, 2000);
      return () => {
        clearTimeout(closure_2);
        dependencyMap();
      };
    }
  }, items1);
  let obj = _useTooltip;
  const tooltip = obj.useTooltip(ref, memo);
  obj = { tooltipTargetRef: ref, showVoiceMessagesTooltip: closure_5 };
  return obj;
};