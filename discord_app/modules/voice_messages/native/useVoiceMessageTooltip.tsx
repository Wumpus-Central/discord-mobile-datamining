// === Module 13001: useVoiceMessageTooltip ===

// Module 13001 (useVoiceMessageTooltip)
import util from "util" /* 1112 */;
import noop from "module_19" /* 19 */;

require = fn;
const VoiceMessagesUIStore = fn(12703);
({ hideVoiceMessagesTooltip: closure_4, showVoiceMessagesTooltip: hasOwnProperty, useVoiceMessagesUIStore: closure_6 } = VoiceMessagesUIStore);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default function useVoiceMessageTooltip() {
  const ref = noop.useRef(null);
  targetBottomInset = targetBottomInset(13002)().targetBottomInset;
  let tmp3 = targetBottomInset(6298)(targetBottomInset);
  if (tmp3 == null) {
    tmp3 = targetBottomInset;
  }
  targetBottomInset = tmp3;
  const tmp4 = closure_6((showVoiceMessagesTooltip) => showVoiceMessagesTooltip.showVoiceMessagesTooltip);
  dependencyMap = tmp4;
  items = [tmp4];
  const items1 = [targetBottomInset, tmp3];
  const memo = noop.useMemo(() => {
    const obj = { position: "top", label: null, visible: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["hP6+07"]);
    obj.visible = visible;
    return obj;
  }, items);
  const effect = noop.useEffect(() => {
    if (targetBottomInset !== targetBottomInset) {
      React4();
    }
  }, items1);
  const items2 = [tmp4];
  const effect1 = noop.useEffect(() => {
    if (closure_2) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_4();
      }, 2000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items2);
  const tooltip = targetBottomInset(8822).useTooltip(ref, memo);
  return { tooltipTargetRef: ref, showVoiceMessagesTooltip };
};