// discord_app/modules/voice_messages/native/useVoiceMessageTooltip.tsx
import util from "../../../intl/index.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const VoiceMessagesUIStore = fn(14570);
({
  hideVoiceMessagesTooltip: closure_4,
  showVoiceMessagesTooltip: hasOwnProperty,
  useVoiceMessagesUIStore: closure_6,
} = VoiceMessagesUIStore);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_messages/native/useVoiceMessageTooltip.tsx");

export default function useVoiceMessageTooltip() {
  const ref = noop.useRef(null);
  targetBottomInset = targetBottomInset(14665)().targetBottomInset;
  let tmp3 = targetBottomInset(6836)(targetBottomInset);
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
  const tooltip = targetBottomInset(9426).useTooltip(ref, memo);
  return { tooltipTargetRef: ref, showVoiceMessagesTooltip };
}
