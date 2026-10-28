// === Module 18739: conjureFrameSound ===

// Module 18739 (conjureFrameSound)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/background_frames/conjureFrameSound.tsx");

export const showsFrameSoundToggle = function showsFrameSoundToggle(frame) {
  return frame.data.audible || frame.data.userMuted;
};