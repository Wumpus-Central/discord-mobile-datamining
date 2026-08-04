import noop from "noop";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import VoiceMessageRecordingStatus from "VoiceMessageRecordingStatus";

let c4;
let c5;
let closure_6;
let require = arg1;
({ hideVoiceMessagesTooltip: c4, showVoiceMessagesTooltip: c5, useVoiceMessagesUIStore: closure_6 } = VoiceMessageRecordingStatus);
const result = require("VoiceMessageRecordingStatus").fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default function useVoiceMessageTooltip() {
  const ref = React.useRef(null);
  let tmp2 = callback((showVoiceMessagesTooltip) => showVoiceMessagesTooltip.showVoiceMessagesTooltip);
  const require = tmp2;
  const items = [tmp2];
  const items1 = [tmp2];
  const memo = React.useMemo(() => {
    const obj = { position: "top", label: null, visible: null };
    const intl = tmp2(outer1_1[3]).intl;
    obj[1] = intl.string(tmp2(outer1_1[3]).t["hP6+07"]);
    obj[2] = tmp2;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    if (tmp2) {
      tmp2 = outer1_1;
      tmp2 = tmp2(outer1_1[4]).getKeyboardIsOpen({ includeCustomKeyboard: true });
      let closure_1 = outer1_3(() => {
        if (callback !== obj.getKeyboardIsOpen({ includeCustomKeyboard: true })) {
          outer1_4();
        }
      });
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback2();
      }, 2000);
      return () => {
        clearTimeout(noop);
        dependencyMap();
      };
    }
  }, items1);
  let obj = require(8576) /* useTooltip */;
  const tooltip = obj.useTooltip(ref, memo);
  obj = { tooltipTargetRef: ref, showVoiceMessagesTooltip: closure_5 };
  return obj;
};