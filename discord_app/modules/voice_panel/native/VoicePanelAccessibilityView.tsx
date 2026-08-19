// discord_app/modules/voice_panel/native/VoicePanelAccessibilityView.tsx
import context from "pip/VoicePanelPIPStateContext.tsx";
import { VoicePanelPIPModes } from "pip/VoicePanelPIPConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = fn;
let closure_4 = importAllResult.memo(require("AccessibilityView").AccessibilityViewAnimated);
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/VoicePanelAccessibilityView.tsx");

export default function VoicePanelAccessibilityView(pointerEvents) {
  let str = pointerEvents.pointerEvents;
  if (str === undefined) {
    str = "box-none";
  }
  let accessibilityViewIsModal = pointerEvents.accessibilityViewIsModal;
  ({ nativeID, onAccessibilityEscape } = pointerEvents);
  const merged = Object.assign(pointerEvents, Object.create(null));
  const obj = { style: pointerEvents.style, pointerEvents: str, nativeID, accessibilityViewIsModal: null, onAccessibilityEscape: null };
  if (accessibilityViewIsModal) {
    accessibilityViewIsModal = obj.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
  }
  obj[3] = accessibilityViewIsModal;
  obj[4] = onAccessibilityEscape;
  const merged1 = Object.assign(merged);
  return <closure_4 style={pointerEvents.style} pointerEvents={str} nativeID={nativeID} accessibilityViewIsModal={null} onAccessibilityEscape={null} />;
};