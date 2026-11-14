// discord_app/modules/voice_panel/native/dock/VoicePanelDockRimLight.tsx
import useVoicePanelDockLevelProps from "useVoicePanelDockLevelProps.tsx";
import LiveVoiceLevelViewDefault from "../../../media_engine/native/LiveVoiceLevelView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const module_1655 = fn(1655);
const mutable = module_1655.makeMutable(0);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockRimLight.tsx");

export const voicePanelDockRimOpacity = mutable;
export const DOCK_GLOW_REST_OPACITY = 0.4;
export function VoicePanelDockRimLevel(arg0) {
  ({ style, children } = arg0);
  const voicePanelDockGlowLevelProps = useVoicePanelDockLevelProps.useVoicePanelDockGlowLevelProps();
  const obj2 = { style };
  const merged = Object.assign(voicePanelDockGlowLevelProps);
  obj2.minOpacity = 0.04000000000000001;
  obj2.maxOpacity = 0.16;
  obj2.children = children;
  return jsx(LiveVoiceLevelViewDefault, { style });
}
