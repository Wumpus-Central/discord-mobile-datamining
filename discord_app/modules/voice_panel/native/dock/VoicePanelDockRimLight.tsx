// === Module 14740: VoicePanelDockRimLight ===

// Module 14740 (VoicePanelDockRimLight)
import useVoicePanelDockLevelProps from "useVoicePanelDockLevelProps" /* 14741 */;
import LiveVoiceLevelViewDefault from "LiveVoiceLevelView" /* 14742 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const module_1652 = fn(1652);
const mutable = module_1652.makeMutable(0);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockRimLight.tsx");

export const voicePanelDockRimOpacity = mutable;
export const DOCK_GLOW_REST_OPACITY = 0.5;
export function VoicePanelDockRimLevel(arg0) {
  ({ style, children } = arg0);
  const voicePanelDockGlowLevelProps = useVoicePanelDockLevelProps.useVoicePanelDockGlowLevelProps();
  const obj2 = { style };
  const merged = Object.assign(voicePanelDockGlowLevelProps);
  obj2.minOpacity = 0.12;
  obj2.maxOpacity = 0.6;
  obj2.children = children;
  return jsx(LiveVoiceLevelViewDefault, { style });
}