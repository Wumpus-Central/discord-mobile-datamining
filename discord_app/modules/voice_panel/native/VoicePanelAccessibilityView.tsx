// discord_app/modules/voice_panel/native/VoicePanelAccessibilityView.tsx
import VoicePanelPIPStateContext from "pip/VoicePanelPIPStateContext.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const VoicePanelPIPModes = fn(17088).VoicePanelPIPModes;
const jsx = fn(21).jsx;
let closure_4 = noop.memo(fn(4959).AccessibilityViewAnimated);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelAccessibilityView.tsx");

export default function VoicePanelAccessibilityView(pointerEvents) {
  let str = pointerEvents.pointerEvents;
  if (str === undefined) {
    str = "box-none";
  }
  let accessibilityViewIsModal = pointerEvents.accessibilityViewIsModal;
  ({ nativeID, onAccessibilityEscape } = pointerEvents);
  const merged = Object.assign(
    pointerEvents,
    Object.assign({ style: 0, pointerEvents: 0, nativeID: 0, accessibilityViewIsModal: 0, onAccessibilityEscape: 0 }),
  );
  const obj = {
    style: pointerEvents.style,
    pointerEvents: str,
    nativeID,
    accessibilityViewIsModal: null,
    onAccessibilityEscape: null,
  };
  if (accessibilityViewIsModal) {
    accessibilityViewIsModal = obj.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
  }
  obj.accessibilityViewIsModal = accessibilityViewIsModal;
  obj.onAccessibilityEscape = onAccessibilityEscape;
  const merged1 = Object.assign(merged);
  return (
    <closure_4
      style={pointerEvents.style}
      pointerEvents={str}
      nativeID={nativeID}
      accessibilityViewIsModal={null}
      onAccessibilityEscape={null}
    />
  );
}
