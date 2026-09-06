// discord_app/modules/voice_panel/native/controls/useControlsLock.tsx
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsLock.tsx");

export default function useControlsLock(arg0) {
  closure_0 = arg0;
  const generateStateLocker = noop.useContext(VoicePanelStateContextDefault).generateStateLocker;
  const first = noop.useState(() => generateStateLocker(closure_0))[0];
  const items = [first];
  const layoutEffect = noop.useLayoutEffect(() => () => first.unlock(), items);
  return first;
}
