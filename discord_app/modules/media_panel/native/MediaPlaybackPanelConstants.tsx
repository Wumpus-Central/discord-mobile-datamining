// === Module 13902: MediaPlaybackPanelModes ===

// Module 13902 (MediaPlaybackPanelModes)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelConstants.tsx");

export const MediaPlaybackPanelModes = { DISMISSED: "dismissed", PIP: "pip" };
export const PLAYBACK_COMPLETION_DETECTION_TOLERANCE = 100;
export const PLAYBACK_PROGRESS_UPDATE_INTERVAL = 500;
export const MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS = { stiffness: 320, mass: 0.25, damping: 15, overshootClamping: true };