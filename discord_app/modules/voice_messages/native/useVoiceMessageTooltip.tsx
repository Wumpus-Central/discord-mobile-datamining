// === Module 12258: useVoiceMessageTooltip ===

// Module 12258 (useVoiceMessageTooltip)
import util from "util" /* 1114 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 6625 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1479 */;

require = fn;
const VoiceMessagesUIStore = fn(11960);
({ hideVoiceMessagesTooltip: closure_4, showVoiceMessagesTooltip: hasOwnProperty, useVoiceMessagesUIStore: metroRequire } = VoiceMessagesUIStore);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default function useVoiceMessageTooltip() {
  const ref = noop.useRef(null);
  const tmp2 = closure_6((showVoiceMessagesTooltip) => showVoiceMessagesTooltip.showVoiceMessagesTooltip);
  _require = tmp2;
  const items = [tmp2];
  const items1 = [tmp2];
  const memo = noop.useMemo(() => {
    const obj = { position: "top", label: null, visible: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["hP6+07"]);
    obj.visible = visible;
    return obj;
  }, items);
  const effect = noop.useEffect(() => {
    if (keyboardIsOpen) {
      keyboardIsOpen = useKeyboardIsOpen.getKeyboardIsOpen({ includeCustomKeyboard: true });
      closure_1 = subscribeToKeyboardUIStore(() => {
        if (closure_0 !== obj.getKeyboardIsOpen({ includeCustomKeyboard: true })) {
          closure_2_4();
        }
        obj = closure_0(dependencyMap[4]);
      });
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_4();
      }, 2000);
      return () => {
        clearTimeout(closure_2);
        closure_1();
      };
    }
  }, items1);
  let obj = require("useTooltip");
  const tooltip = obj.useTooltip(ref, memo);
  obj = { tooltipTargetRef: ref, showVoiceMessagesTooltip };
  return obj;
};